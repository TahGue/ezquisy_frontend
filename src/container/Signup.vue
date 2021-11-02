<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName"> Name</label>
        <input
          type="text"
          v-model="user.Name"
          v-validate="'required'"
          name="Name"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('Name') }"
        />
        <div v-if="submitted && errors.has('Name')" class="invalid-feedback">
          {{ errors.first('Name') }}
        </div>
      </div>

      <div class="form-group">
        <label for="email">email</label>
        <input
          type="text"
          v-model="user.email"
          v-validate="'required'"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('email') }"
        />
        <div v-if="submitted && errors.has('email')" class="invalid-feedback">
          {{ errors.first("email") }}
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        />
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input
          type="text"
          v-model="user.image"
          v-validate="'required'"
          name="image"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('image') }"
        />
        <div v-if="submitted && errors.has('image')" class="invalid-feedback">
          {{ errors.first("image") }}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.registering">
          Register
        </button>
        <img
          v-show="status.registering"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        Name: "",
        username: "",
        password: "",
        image: "",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>

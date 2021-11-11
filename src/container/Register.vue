<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">NAME</label>
        <input
          type="text"
          v-model="name"
          name="name"
          class="form-control"
          :class="{ 'is-invalid': submitted && !name }"
        />
        <div v-show="submitted && !name" class="invalid-feedback">
          name is required
        </div>
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="text"
          v-model="email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && !email }"
        />
        <div v-show="submitted && !email" class="invalid-feedback">
          email is required
        </div>
      </div>

      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Register</button>

        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { url } from '../config/config';

export default {
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      submitted: false,
      status: { Registering: false },
    };
  },
  computed: {},
  created() {
    
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { email, password, name } = this;
      if (email && password && name) {
        return fetch(url + '/auth/register', {
          method: 'POST',
          body: JSON.stringify({ name, password, email }),
          headers: { 'content-type': 'application/json; charset=UTF-8' },
        });
      }
    },
  },
};
</script>

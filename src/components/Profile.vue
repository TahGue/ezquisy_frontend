<template>
  <div class="profile">
    <h3>Profile</h3>
    <img
      class="profile-image"
      :src="image"
      alt="profile_image"
    />
    <h3 class="name">{{name}}</h3>

    <Button v-on:click="signout()" class="btn btn-danger">Sign out</Button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    image: String,
    name: String,
  },
  components: {},
  methods: {
    signout() {
      localStorage.removeItem('token');
      window.location.href = '/login';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer-container {
  display: block;
  padding: 0;
}
.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  font-size: 1em;
  font-weight: bold;
  color: #3f51b5;
  margin-top: 10px;
}
</style>

<template>
  <div id="app">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/logoe.jpg" class="logo" />
      </div>
      <nav>
        <ul class="nav-bar">
          <li><a href="http://localhost:8080">Home</a></li>
          <li><a href="http://localhost:8080/aboutus">AboutUs</a></li>
          <li><Button v-on:click="displayProfile()">Profile</Button></li>
        </ul>
        <div class="profileContainer" v-if="isProfileDisplay === true">
          <Profile />
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import Profile from './Profile.vue';
export default {
  name: 'Header',
  data: () => {
    return {
      isProfileDisplay: false,
    };
  },
  components: {
    Profile,
  },
  methods: {
    displayProfile() {
      this.isProfileDisplay = !this.isProfileDisplay;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  display: flex;
  flex-direction: row;
  background-color: #125083;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.logo {
  width: 100px;
  height: auto;
}
.nav-bar {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
.nav-bar li {
  display: inline;
  margin: 0 10px;
  background: transparent;
  transition: all 0.5s ease-in-out;
  padding: 10px;
}

.nav-bar li:hover {
  display: inline;

  background: #f0f0f0;
  transition: all 0.5s ease-in-out;
  color: #125083;
}

.nav-bar li a {
  text-decoration: none;
  color: #ffffff;
  transition: all 0.5s ease-in-out;
}

.profileContainer {
  position: absolute;
  right: 50px;
  top: 50px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border-top-right-radius: 0;
}

nav li:hover a {
  color: #125083;
}
</style>

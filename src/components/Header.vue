<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#"> <img src="../assets/logoe.jpg" class="logo" /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
   

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/">About</b-nav-item>
            <b-nav-button disabled style="display: flex;
    justify-content: center;
    align-items: center;" >
              <div style="position:relative">
                <Button class="profileBtn" v-on:click="displayProfile()"
              >
               <b-avatar variant="info" :src="user.image"></b-avatar>
              </Button
            >
          <div class="profileContainer" v-if="isProfileDisplay === true">
          <Profile
            :id="user.id"
            :name="user.name"
            :image="user.image"
            :userPoints="user.userPoints"
            :allPoints="user.allPoints"
            :selectedImage="selectedImage"
            @onSaveImage="onSaveImage"
          />
        </div>
        </div>
            </b-nav-button>
          <!-- Using 'button-content' slot -->
    
         
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<!--div v-if="isAuth === true">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">    <img src="../assets/logoe.jpg" class="logo" /></b-navbar-brand>


    <b-collapse id="nav-collapse"  is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item>
            <Button class="profileBtn" v-on:click="displayProfile()"
              >Profile</Button
            >
        </b-nav-item>
      </b-navbar-nav>
 <div class="profileContainer" v-if="isProfileDisplay === true">
          <Profile
            :id="user.id"
            :name="user.name"
            :image="user.image"
            :userPoints="user.userPoints"
            :allPoints="user.allPoints"
            :selectedImage="selectedImage"
            @onSaveImage="onSaveImage"
          />
        </div>
    </b-collapse>
  </b-navbar>
</div-->
</template>
<script>
import Profile from './Profile.vue';
import User from './../api/User';

export default {
  name: 'Header',
  data: () => {
    return {
      isProfileDisplay: false,
      user: {},
      isAuth: false,
      selectedImage: '',
    };
  },
  components: {
    Profile,
  },
  created() {
    var self = this;
    return User.getCurrentUser().then(function (dt) {
      self.user = dt;
      self.isAuth = true;
    });
  },
  methods: {
    displayProfile() {
      this.isProfileDisplay = !this.isProfileDisplay;
    },

    onSaveImage(image) {
      var self = this;
      return User.update({ id: this.user.id, image: image }).then(() => {
        self.user.image = image;
      });
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
.profileBtn {
  border: none;
  background: transparent;
  color: #fff;
}
.profileBtn:hover {
  color: #f0f0f0;
}

nav li:hover a {
  color: #f0f0f0;
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.nav-bar{
  display:none;
}

}


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}

</style>

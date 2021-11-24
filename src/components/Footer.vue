<template>
  <div id="app">
    <div class="footer" >
      <div class="logo-container">
        <img src="../assets/logoe.jpg" class="logo" />
      </div>
      <div class='copyright'>
        @copyright 2021
      </div>
  </div>
  </div>
</template>
<script>


export default {
  
  name: 'footer',
  data: () => {
    return {
      
    };
  },
 
  
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100vw;
  overflow:hidden;
  color: #333;
}

.footer {
  display: flex;
  flex-direction: row;
  background-color: #333;
  justify-content: space-around;
  align-items: center;
  padding: 40px 10px;
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
.copyright{
  color: #fff;
  padding: 10px;
}

nav li:hover a {
  color: #125083;
}
</style>

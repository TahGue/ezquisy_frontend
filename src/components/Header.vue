<template>
  <div id="app">
     <div class="header">
    <div class="logo-container">
        <img src="../assets/logoe.jpg" class="logo">
    </div>
    <nav>
        <ul class="nav-bar">
            <li><a href="http://localhost:8080">Home</a></li>
            <li><a href="http://localhost:8080/profile">profile</a></li>
            <li><a href="http://localhost:8080/aboutus">AboutUs</a></li>
          
        </ul>
    </nav>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'Header',
  
}

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
background-color:#125083 ;
justify-content: space-between;
align-items: center;
}

.logo {

  width: 100px;
    height: auto ;
}

.nav-bar li {

display: inline;
margin: 5px;

}

.nav-bar li a {
text-decoration: none;
color: #ffffff;
transition: all 0.5s ease-in-out;
}

nav li a:hover {
  color: #ffffff;
}

</style>

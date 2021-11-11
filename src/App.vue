<template>
  <div id="app">
    <div v-if="isAuth===true">
      <Header />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  data: () => {


    return {
  isAuth:false,
    };
  },
   created() {

  const token =localStorage.getItem("token");
   if(token&&token!=""){
     this.isAuth=true;
    
   }
  },
  components: {
    Header,
    Footer,
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
</style>

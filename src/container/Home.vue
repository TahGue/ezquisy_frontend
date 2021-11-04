<template>
  <div>
    <h1>{{ user.email }}</h1>
    <h1>{{ user.name }}</h1>
    
  <div v-for="category in categories" :key="category.id"> 
    {{category.name}}
   <img :src="category.image" alt=""> 


  </div>

  </div>

</template>

<script>
import User from './../api/User';
import { mapState } from 'vuex';
import Category from "./../api/Category";
export default {
  data: () => {
    return {
      user: {},
      categories:{},
    };
  },
  computed: {
    ...mapState('user'),
  },
  created() {
    var self = this;
    return User.getCurrentUser().then(function (dt) {
      self.user = dt[0];
       
    return Category.getAll().then(function (dt) {
    self.categories=dt;  
    });
    });
   
  },
  methods: {},
};
</script>

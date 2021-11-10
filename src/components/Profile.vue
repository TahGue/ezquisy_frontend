<template>
 <div class="profile">
<img :src="image" alt="profile_image">
<h3>{{name}}</h3>




 </div>
</template>

<script>
import AnswerItem from './AnswerItem.vue';
export default {
  name: 'Profile',
  props: {
    image:"" ,
    name:"" ,
  },
  components: {
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer-container {
  display: block;
  padding: 0;
}
</style>

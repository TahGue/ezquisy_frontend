<template>
  <div class="profile">
    <h3>Profile</h3>
    <button @click="() => ondisplaylist()">
    <img  
      class="profile-image"
      :src='image'
      alt="profile_image"
    /></button>
     <div v-if="displayImageList===true"  @click="() => onsaveimage()">
      <div v-for="profileImage in images " :key="profileImage">
<img
      class="profile-image"
      :src='profileImage'
      alt="profile_image"
    />
      </div>
    </div>
    <h3 class="name">{{name}}</h3>
   

    <Button v-on:click="signout()" class="btn btn-danger">Sign out</Button>
  </div>
</template>

<script>
import User from '../api/User';
export default {
  name: 'Profile',
  props: {
    image: String,
    name: String,
  },
   data: () => {
    return {
      displayImageList:Boolean,
      images: ['https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Black','https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned%27','https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned%27','https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned%27'
],};
  },
  components: {

  },
  methods: {
   onsaveimage(){
     User.update({id:User.id})
   },
   onhidelist(){
      this.displayImageList=false
   },
   ondisplaylist(){
     this.displayImageList= !this.displayImageList
   },
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

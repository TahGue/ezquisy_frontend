<template>
  <div class="profile">
    <h3>Profile</h3>
    <button class="imageBtn" @click="() => ondisplaylist()">
      <img class="profile-image" :src="image" alt="choose image" />
    </button>

    <div
      class="profileListImages"
      :style="displayImageList === true ? 'display:flex' : 'display:none'"
    >
      <div
        v-for="profileImage in images"
        :key="profileImage"
        class="selectItem"
        @click="() => onSave(profileImage)"
      >
        <img
          class="select-profile-image"
          :src="profileImage"
          alt="profile_image"
        />
      </div>
    </div>

    <h3 class="name">{{ name }}</h3>
    <div class="progressContainer">
      <b-progress :value="userPoints/allPoints*100" :max="100" show-progress height="1rem" border="0">
        <b-progress-bar :value="userPoints/allPoints*100">{{(userPoints/allPoints*100).toFixed(1)}}%</b-progress-bar>
      </b-progress>
    </div>

    <Button v-on:click="signout()" class="btn btn-danger">Sign out</Button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    image: String,
    name: String,
    id: Number,
    selectedImage: String,
    userPoints:Number,
    allPoints:Number,
    onSaveImage: { type: Function },
  },
  data: () => {
    return {
      displayImageList: false,
      images: [
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Black',
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned%27',
        'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned%27',
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned%27',
      ],
    };
  },
  components: {},
  methods: {
    ondisplaylist() {
      this.displayImageList = !this.displayImageList;
    },
    signout() {
      localStorage.removeItem('token');
      window.location.href = '/login';
    },
    onSave(image) {
      this.$emit('onSaveImage', image);
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
  margin-top: -16px;
  margin-left: -10px;
}
.select-profile-image {
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
.imageBtn {
  border: 1px dashed #333;
  padding: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.profileListImages {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 57px;
  right: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 999;
}
.selectItem {
  cursor: pointer;
}
.progressContainer {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

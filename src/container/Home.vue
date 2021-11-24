<template>
  <div>

<!--Image Section-->
<section class="hero">
<div class="hero-overlay">
<div class="hero-content">
<h1>EzyQuizy</h1>
<h3>Test your smarts with these fun quizzes </h3>


    <div class="CategoryHome">
      <div
        v-for="category in categories"
        :key="category.id"
        style="padding: 10px"
      >
        <CategoryItem
          :name="category.name"
          :image="category.image"
          :points="category.userPoints"
          :allPoints="category.points"
          :id="category.id"
        />
      </div>
    </div>
</div>
</div>

</section>

  </div>
</template>

<script>
import User from './../api/User';
import Category from './../api/Category';
import CategoryItem from './../components/CategoryItem.vue';
export default {
  data: () => {
    return {
      user: {},
      categories: {},
    };
  },
  components: {
    CategoryItem,
  },
  computed: {},
  created() {
    var self = this;
    return User.getCurrentUser().then(function (dt) {
      self.user = dt[0];

      return Category.getAll().then(function (dt) {
        self.categories = dt;
      });
    });
  },
  methods: {},
};
</script>

<style scoped>
.CategoryHome {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  padding: 0 2px;
   place-items: center;
   padding-top: 40px;
   padding-bottom: 40px;
}
.hero {
width:100%;
background-image: url('../assets/kids.jpg');
background-size: cover;
}
.hero-overlay {
    width: 100%;
    min-height: 100vh;
    background-color:#20222188 ;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-content h1 {
    font-size: 2em;
    text-align: center;
    color : white;
    padding-top: 100px;
 
}

.hero-content h3 {
text-align: center;
color :white;
font-size: 2rem ;

}

@media only screen and (max-width: 580px) {
 .CategoryHome {
 grid-template-columns: repeat(1, 2fr);
}

}


/* Small devices (portrait stablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
   .CategoryHome {
  grid-template-columns: repeat(2, 2fr);
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
     .CategoryHome {
 grid-template-columns: repeat(3, 2fr);
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
     .CategoryHome {
   grid-template-columns: repeat(4, 2fr);
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}



</style>

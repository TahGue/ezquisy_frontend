<template>
  <div>

<!--Image Section-->
<section class="hero">
<div class="hero-overlay">
<div class="hero-content">
<h1>EzQuizy</h1>
<h3>Test your smarts with these fun quizzes </h3>
</div>
</div>
</section>

    <div class="CategoryHome">
      <div
        v-for="category in categories"
        :key="category.id"
        style="padding: 10px"
      >
        <CategoryItem
          :name="category.name"
          :image="category.image"
          :id="category.id"
        />
      </div>
    </div>
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

<style>
.CategoryHome {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  padding: 0 2px;
}
.hero {
width:100%;
height: calc(100vh - 71px);
background-image: url('../assets/kids.jpg');
background-size: cover;
}
.hero-overlay {

    width: 100%;
    height: 100%;
    background-color:#20222188 ;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-content h1 {
    font-size: 5rem;
    text-align: center;
    color : white;
}

.hero-content h3 {
text-align: center;
color :white;
font-size: 2rem ;

}
</style>

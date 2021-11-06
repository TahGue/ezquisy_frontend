<template>
  <div>
    <h1>{{ user.email }}</h1>
    <h1>{{ user.name }}</h1>
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
</style>

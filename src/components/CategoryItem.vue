<template>
  <router-link :to="`/category/${id}`">
    <div class="CategroyItem">
      <div class="category-card">
        <h2>{{ name }}</h2>
        <img :src="image" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    id: Number,
    name: String,
    image: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CategroyItem {
  width: 100%;
}
.category-card {
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 4px #333;
  padding: 10px;
}
.category-card img {
  width: 100%;

  height: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

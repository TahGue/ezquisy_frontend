<template>
  <router-link class="link" :to="`/category/${id}`">
    <div style="position: relative">
      <vue-ellipse-progress
        :progress="50"
        animation="reverse 700 400"
        :angle="-90"
      >
        <div class="CategroyItem">
          <div class="category-card" :style="`background-image:url(${image})`">
            <h2 class="categoryName">{{ name }}</h2>
          </div>
        </div>
      </vue-ellipse-progress>
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
.link {
  text-decoration: none;
}
.category-card {
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 4px #333;
  padding: 10px;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.category-card img {
  width: 100%;

  height: auto;
}

.category-card:before {
  content: '';
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 24px;
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
.categoryName {
  text-decoration: none;
  outline: none;
  color: #fff;
  text-shadow: 1px 1px 1px #333;
  position: relative;
  z-index: 999;
}
</style>

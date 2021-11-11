<template>
  <div id="app">
    <div class="fotter">
      <h2>HelloWorld</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
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

.fotter {
  display: flex;
  flex-direction: row;
  background-color: #125083;
  justify-content: space-between;
  align-items: center;
}
</style>

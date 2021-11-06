<template>
  <li class="answer-li">{{ answer.text }}</li>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
    answer: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer-li {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #fff;
  list-style: none;
  background: #bbdefb;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.answer-li:hover {
  background: #00bcd4;
  color: #fff;
}
</style>

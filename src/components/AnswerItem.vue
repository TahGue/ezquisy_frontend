<template>
  <li
    v-if="
      selectedAnswer !== null &&
      selectedAnswer.id == answer.id &&
      selectedAnswer.is_correct == 'true'
    "
    class="correct-answer"
  >
    {{ answer.text }}
  </li>

  <li
    v-else-if="
      selectedAnswer !== null &&
      selectedAnswer.id == answer.id &&
      selectedAnswer.is_correct == 'false'
    "
    class="wrong-answer"
  >
    {{ answer.text }}
  </li>

  <li v-else v-on:click="answerSelected()" class="answer-li">
    {{ answer.text }}
  </li>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
    answer: {},
    selectedAnswer: null,
    isSelected: Boolean,
    onSelectAnswer: {
      type: Function,
    },
  },
  methods: {
    answerSelected() {
      if (this.isSelected === false) {
        this.$emit('onSelectAnswer');
        this.isSelected = true;
      }
    },
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
.correct-answer {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #0f0;
  list-style: none;
  background: #0f0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.wrong-answer {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #f00;
  list-style: none;
  background: #f00;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
</style>

<template>
  <div class="container">
    <div class="title">
      <h3 class="title">{{ `Question number (${question.id})` }}</h3>
      <div class="question-container">
        <p>{{ question.question }}</p>
      </div>
      <ul class="answer-container">
        <AnswerItem
          v-for="answer in question.answers"
          :key="answer.id"
          :answer="answer"
          @onSelectAnswer="onSelectAnswer(answer)"
          :selectedAnswer="selectedAnswer"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import AnswerItem from './AnswerItem.vue';
export default {
  name: 'QuestionItem',
  data: () => {
    return {
      selectedAnswer: {},
    };
  },
  props: {
    question: {},
  },
  components: {
    AnswerItem,
  },
  methods: {
    onSelectAnswer(answer) {
      this.selectedAnswer = answer;
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
</style>

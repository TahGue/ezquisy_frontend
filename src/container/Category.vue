<template>
  <div class="page-container">
    <b-progress
      :value="questions.indexOf(selectedQuestion) + 1"
      :max="questions.length"
      show-progress
      height="1.5rem"
      border="0"
    >
      <b-progress-bar :value="questions.indexOf(selectedQuestion) + 1">
        <span
          >Progress:
          <strong
            >{{ questions.indexOf(selectedQuestion) + 1 }} /
            {{ questions.length }}</strong
          ></span
        >
      </b-progress-bar>
    </b-progress>
    <div class="question-container">
      <div class="question-section">
        <QuestionItem
          :question="selectedQuestion"
          :selectedAnswer="selectedAnswer"
          @onSelectAnswer="onSelectAnswer"
        />
        <div class="btns-container">
          <button
            v-if="
              selectedQuestion &&
              questions.length > 0 &&
              selectedQuestion.id !== questions[questions.length - 1].id
            "
            v-on:click="goNext()"
            class="next-btn"
          >
            Next
          </button>
          <button
            v-if="
              selectedQuestion &&
              questions.length > 0 &&
              selectedQuestion.id !== questions[0].id
            "
            class="next-btn"
            v-on:click="goPrevious()"
          >
            Previous
          </button>
          <button class="next-btn">See Result</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../api/User';
import Question from './../api/Question';
import QuestionItem from './../components/QuestionItem';

export default {
  data: () => {
    return {
      user: {},
      questions: [],
      selectedQuestion: {},
      selectedAnswer: null,
    };
  },
  components: {
    QuestionItem,
  },
  computed: {},
  created() {
    var self = this;
    return Question.getByCategory(this.$route.params.id).then(function (dt) {
      self.questions = dt;
      self.selectedQuestion = dt.length > 0 ? dt[0] : { name: 'no questions' };
    });
  },
  methods: {
    goNext() {
      const currentIndex = this.questions.indexOf(this.selectedQuestion);
      this.selectedQuestion = this.questions[currentIndex + 1];
      this.selectedAnswer = null;
    },
    goPrevious() {
      const currentIndex = this.questions.indexOf(this.selectedQuestion);
      this.selectedQuestion = this.questions[currentIndex - 1];
      this.selectedAnswer = null;
    },

    onSelectAnswer(answer) {
      this.selectedAnswer = answer;
      return User.saveAnswer(answer.id);
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../assets/kids.jpg');
  background-size: cover;
}
.question-container {
  width: 50%;
  height: auto;
  min-width: 250px;
}
.progress {
  width: 50%;
}
.question-section {
  padding: 10px;
  background: #f0f0f0;
  box-shadow: 1px 1px 20px 7px #33333350;
}
.next-btn {
  padding: 10px 15px;
  margin: 10px;
  background: #fff;
  border: none;
  border-radius: 2px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  font-weight: bold;
  background: #1e88e5;
  color: #fff;
}
.next-btn:hover {
  box-shadow: 1px 10px 10px #33333350;
  background: #fff;
  color: #1e88e5;
}
</style>

<template>
    <div class="question-container">
      <div  
        style="padding: 10px"
      >
      <QuestionItem
         :question="selectedQuestion"
        />
        <div class='btns-container'>
          <button v-if="selectedQuestion && selectedQuestion.id!==questions[questions.length-1].id" v-on:click="goNext()" class="next-btn">Next</button>
          <button  v-if=" selectedQuestion && selectedQuestion.id!==questions[0].id" class="next-btn"  v-on:click="goPrevious()">Previous</button>
          <button class="next-btn">See Result</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Question from './../api/Question';
import QuestionItem from './../components/QuestionItem';

export default {
  data: () => {
    return {
      user: {},
      questions: [],
      selectedQuestion:{}
    };
  },
  components: {
    QuestionItem,
  },
  computed: {
    ...mapState('user'),
  },
  created() {
    var self = this;
    return Question.getByCategory(this.$route.params.id).then(function (dt) {
      self.questions = dt;
      self.selectedQuestion = dt.length > 0 ? dt[0]:{name:'no questions'};
    });
  },
  methods: {
    goNext(){
     const currentIndex=this.questions.indexOf(this.selectedQuestion);
     this.selectedQuestion = this.questions[currentIndex+1];
    },
      goPrevious(){
     const currentIndex=this.questions.indexOf(this.selectedQuestion);
     this.selectedQuestion = this.questions[currentIndex-1];
    }
  },
};
</script>

<style scoped>
.question-container{
  width: 100%;
   background: #f0f0f0;
   border: 1px solid #333;
   overflow: hidden;
  }
</style>

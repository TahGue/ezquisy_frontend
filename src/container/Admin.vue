<template>

  <div class="question-list-row">
      <div><h1>Admin page</h1></div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">question</th>
      <th scope="col">QuestionTypeID</th>
      <th scope="col">point</th>
      <th scope="col">Other</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <tr v-for="question in questions" :key="question.id" >
        <td>{{ question.id }}</td>
        <td>{{ question.question }}</td>
        <td>{{ question.question_type_id }}</td>
        <td>{{ question.point}}</td>
        <td></td>
        
    </tr>
    

  </tbody>
</table>

    
  </div>
</template>

<script>


import Question from './../api/Question';
export default {
    data: () => {
    return {
      questions: [],
      
    }
    },
  computed: {},
  created() {
      var self = this;
    return Question.getAll(this.$route).then(function (dt) {
      self.questions = dt;
      self.selectedQuestion = dt.length > 0 ? dt[0] : { name: 'no questions' };
    });
  }
}
</script>

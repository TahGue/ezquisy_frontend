<template>
<div class="container">
    <div class="title">
      <h3 class="title">{{`Question number (${question.id})`}}</h3>
      <div class="question-container">
        <p>{{question.question}}</p>
      </div>
      <ul class="answer-container">
         <AnswerItem v-for="answer in question.answers" :key="answer.id" :answer="answer"/>
      </ul>
    </div>
</div>
</template>

<script>

import AnswerItem from "./AnswerItem.vue";
export default {
  name: 'QuestionItem',
  props: {
    question:{}
  },
  components: {
    AnswerItem
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.CategroyItem{

    width: 100%;
}
.category-card{
    
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


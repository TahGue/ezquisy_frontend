<template>

  <div class="question-list-row">
      <div  style="display:flex; justify-content:space-between; padding:10px" ><h1>Admin page</h1>
       <b-button v-b-modal="'my-modal'">Show Modal</b-button>
      </div>

<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">question</th>
      <th scope="col">QuestionTypeID</th>
      <th scope="col">point</th>
      <th scope="col">Delete</th>
       <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <tr v-for="question in questions" :key="question.id" >
        <td>{{ question.id }}</td>
        <td>{{ question.question }}</td>
        <td>{{ question.question_type_id }}</td>
        <td>{{ question.point}}</td>
        <td><button class="btn btn-danger">Delete</button></td>
        <td><button class="btn btn-primary">Edit</button></td>
        
    </tr>
    

  </tbody>
</table>

<b-modal id="my-modal">  <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group
        label="Question:"
        label-for="input-1"
        description="Add new Question."
      >
        <b-form-input
         
          v-model="form.question"
          type="text"
          placeholder="Enter Question"
          required
        ></b-form-input>
        </b-form-group>
         <b-form-group
        label="Point:"
        label-for="input-1"
        description="Add Point."
      >
        <b-form-input
         
          v-model="form.point"
          type="number"
          placeholder="Enter point"
          required
        ></b-form-input>
        </b-form-group>
         <b-form-group
        label="Question Type:"
        label-for="input-1"
        description="Add  Question Type."
      >
        <b-form-input
         
          v-model="form.question_type_id"
          type="text"
          placeholder="Enter Question"
          required
        ></b-form-input>
      
      </b-form-group>
      </b-form>
      </b-modal>
    
  </div>
</template>

<script>


import Question from './../api/Question';
export default {
    data: () => {
    return {
      questions: [],
      form: {}
      
    }
    },
  computed: {},
  created() {
      var self = this;
    return Question.getAll(this.$route).then(function (dt) {
      self.questions = dt;
      self.selectedQuestion = dt.length > 0 ? dt[0] : { name: 'no questions' };
    });
    
  },
  methods:{
    onSubmit(){

    },
    onReset(){

    }
  }
}
</script>

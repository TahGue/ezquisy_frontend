<template>
  <div class="answer-list-row">
    <div style="display: flex; justify-content: space-between; padding: 10px">
      <h1>Answers Page</h1>
      <b-button class="primary" @click="() => showAdd()">Add Answer</b-button>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Answer</th>
          <th scope="col">Correct</th>
          <th scope="col">Active</th>
          <th scope="col">delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr v-for="answer in answers" :key="answer.id">
          <td>{{ answer.id }}</td>
          <td>{{ answer.text }}</td>
          <td>{{ answer.is_correct }}</td>
          <td>{{ answer.is_active }}</td>
          <td>
            <button @click="() => showDelete(answer)" class="btn btn-danger">
              Delete
            </button>
          </td>
          <td>
            <button @click="() => showEdit(answer)" class="btn btn-primary">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal ref="edit-model" title="Edit answer" @ok="onEdit">
      <b-form @submit="onEdit" @reset="onReset">
        <b-form-group
          label="Answer:"
          label-for="input-1"
          description="Add new Answer."
        >
          <b-form-input
            v-model="selectedItem.text"
            type="text"
            placeholder="Enter Answer text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-checkbox
          v-model="selectedItem.is_correct"
          name="check-button"
          button
        >
          is correct: <b> {{ selectedItem.is_correct }}</b>
        </b-form-checkbox>
       
      </b-form>
    </b-modal>

    <b-modal ref="add-model" title="Edit answer" @ok="onAdd">
      <b-form @submit="onAdd" @reset="onReset">
        <b-form-group
          label="Answer:"
          label-for="input-1"
          description="Add new Answer."
        >
          <b-form-input
            v-model="selectedItem.text"
            type="text"
            placeholder="Enter Answer"
            required
          ></b-form-input>
        </b-form-group>
      
        <b-form-checkbox
          v-model="selectedItem.is_active"
          name="check-button"
          button
        >
          is active: <b> {{ selectedItem.is_active }}</b>
        </b-form-checkbox>
        <br>
        <b-form-checkbox
          v-model="selectedItem.is_correct"
          name="check-button"
          button
        >
          is correct: <b> {{ selectedItem.is_correct }}</b>
        </b-form-checkbox>
      </b-form>
    </b-modal>

    <b-modal ref="delete-model" title="Delete answer" @ok="onDelete">
      <p class="my-4">Are you sur to delete!</p>
    </b-modal>
  </div>
</template>

<script>
import Answer from '../api/Answer';
export default {
  data: () => {
    return {
      answers: [],
      form: {},
      selectedItem: {},
      questionId:Number,
    };
  },
  computed: {},
  created() {
    console.log('this.$route.params.id');
   this.questionId =  this.$route.params.id;
    var self = this;
    return Answer.getByQuestion(this.$route.params.id).then(function (dt) {
      self.answers = dt;
    });
  },
  methods: {
    onSubmit() {},
    onReset() {},

    showDelete(answer) {
      this.selectedItem = answer;
      this.$refs['delete-model'].show();
    },
    hideDelete() {
      this.$refs['delete-model'].hide();
    },

    onDelete() {
      var self = this;
      return Answer.deleteByid(this.selectedItem.id).then(() => {
        self.answers = self.answers.filter(
          (c) => c.id !== this.selectedItem.id
        );
      });
    },
    // show edit
    showEdit(answer) {
      this.selectedItem = answer;
      this.$refs['edit-model'].show();
    },
    hideEdit() {
      this.$refs['edit-model'].hide();
    },

    onEdit() {
      this.selectedItem.question_id=this.questionId;
      var self = this;
      return Answer.update(this.selectedItem).then(() => {
        Answer.getByQuestion(this.$route.params.id).then((dt) => {
          self.answers = dt.answers;
        });
      });
    },

    // show add
    showAdd() {
      this.selectedItem = {};
      this.$refs['add-model'].show();
    },
    hideAdd() {
      this.$refs['add-model'].hide();
    },

    onAdd() {

      this.selectedItem.question_id=this.questionId;
      var self = this;
      return Answer.insert(this.selectedItem).then(() => {
        Answer.getByQuestion(this.$route.params.id).then((dt) => {
          self.answers = dt.answers;
        });
      });
    },
  },
};
</script>

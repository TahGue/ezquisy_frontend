<template>
  <div class="question-list-row">
    <div style="display: flex; justify-content: space-between; padding: 10px">
      <h1>Question Page</h1>
      <b-button class="primary" @click="() => showAdd()">Add Question</b-button>
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
          <th scope="col">Answers</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr v-for="question in questions" :key="question.id">
          <td>{{ question.id }}</td>
          <td>{{ question.question }}</td>
          <td>{{ question.question_type_id }}</td>
          <td>{{ question.point }}</td>
          <td>
            <button @click="() => showDelete(question)" class="btn btn-danger">
              Delete
            </button>
          </td>
          <td>
            <button @click="() => showEdit(question)" class="btn btn-primary">
              Edit
            </button>
          </td>
          <td>
            <router-link
              :to="{ name: 'AdminAnswers', params: { id: question.id } }"
            >
              Answers
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal ref="edit-model" title="Edit question" @ok="onEdit">
      <b-form @submit="onEdit" @reset="onReset">
        <b-form-group
          label="Question:"
          label-for="input-1"
          description="Add new Question."
        >
          <b-form-input
            v-model="selectedItem.question"
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
            v-model="selectedItem.point"
            type="number"
            placeholder="Enter point"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Category:"
          label-for="input-1"
          description="Add to Category."
        >
          <b-form-select
            v-model="selectedItem.category_id"
            value-field="id"
            text-field="name"
            :options="categories"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label="Question Type:"
          label-for="input-1"
          description="Add  Question Type."
        >
          <b-form-select
            v-model="selectedItem.question_type_id"
            value-field="id"
            text-field="name"
            :options="questionTypes"
          ></b-form-select>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-modal ref="add-model" title="Edit question" @ok="onAdd">
      <b-form @submit="onAdd" @reset="onReset">
        <b-form-group
          label="Question:"
          label-for="input-1"
          description="Add new Question."
        >
          <b-form-input
            v-model="selectedItem.question"
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
            v-model="selectedItem.point"
            type="number"
            placeholder="Enter point"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Category:"
          label-for="input-1"
          description="Add to Category."
        >
          <b-form-select
            v-model="selectedItem.category_id"
            value-field="id"
            text-field="name"
            :options="categories"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label="Question Type:"
          label-for="input-1"
          description="Add  Question Type."
        >
          <b-form-select
            v-model="selectedItem.question_type_id"
            value-field="id"
            text-field="name"
            :options="questionTypes"
          ></b-form-select>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-modal ref="delete-model" title="Delete question" @ok="onDelete">
      <p class="my-4">Are you sur to delete!</p>
    </b-modal>
  </div>
</template>

<script>
import Question from './../api/Question';
export default {
  data: () => {
    return {
      questions: [],
      categories: [],
      questionTypes: [],
      form: {},
      selectedItem: {},
    };
  },
  computed: {},
  created() {
    var self = this;
    return Question.adminGetAll().then(function (dt) {
      self.questions = dt.questions;
      self.categories = dt.categories;
      self.questionTypes = dt.questionTypes;
    });
  },
  methods: {
    onSubmit() {},
    onReset() {},

    showDelete(question) {
      this.selectedItem = question;
      this.$refs['delete-model'].show();
    },
    hideDelete() {
      this.$refs['delete-model'].hide();
    },

    onDelete() {
      var self = this;
      return Question.deleteByid(this.selectedItem.id).then(() => {
        self.questions = self.questions.filter(
          (c) => c.id !== this.selectedItem.id
        );
      });
    },
    // show edit
    showEdit(question) {
      this.selectedItem = question;
      this.$refs['edit-model'].show();
    },
    hideEdit() {
      this.$refs['edit-model'].hide();
    },

    onEdit() {
      var self = this;
      return Question.update(this.selectedItem).then(() => {
        Question.adminGetAll().then((dt) => {
          self.questions = dt.questions;
        });
      });
    },

    // show edit
    showAdd() {
      this.selectedItem = {};
      this.$refs['add-model'].show();
    },
    hideAdd() {
      this.$refs['add-model'].hide();
    },

    onAdd() {
      var self = this;
      return Question.insert(this.selectedItem).then(() => {
        Question.adminGetAll().then((dt) => {
          self.questions = dt.questions;
        });
      });
    },
  },
};
</script>

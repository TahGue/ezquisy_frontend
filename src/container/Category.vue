<template>
  <div>
    <div class="CategoryHome">
      <div
        v-for="question in questions"
        :key="question.id"
        style="padding: 10px"
      >
        <CategoryItem
          :name="question.question"
          :image="question.image"
          :id="question.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Question from './../api/Question';
import CategoryItem from './../components/CategoryItem.vue';
export default {
  data: () => {
    return {
      user: {},
      questions: {},
    };
  },
  components: {
    CategoryItem,
  },
  computed: {
    ...mapState('user'),
  },
  created() {
    var self = this;
    return Question.getByCategory(this.$route.params.id).then(function (dt) {
      self.questions = dt;
    });
  },
  methods: {},
};
</script>

<style>
.CategoryHome {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  padding: 0 2px;
}
</style>

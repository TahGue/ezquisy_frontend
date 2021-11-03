<template>
  <div>
    <h1>{{ user.email }}</h1>
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
import User from './../api/User';
import { mapState } from 'vuex';

export default {
  data: () => {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState('user'),
  },
  created() {
    var self = this;
    return User.getCurrentUser().then(function (dt) {
      self.user = dt[0];
    });
  },
  methods: {},
};
</script>

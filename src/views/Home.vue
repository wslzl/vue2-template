<template>
  <div class="home">
    <input type="text" v-model="user" @input="onSetUser" />
    <div class="">{{ username }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      user: '',
    };
  },
  computed: {
    ...mapGetters(['username']),
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    onSetUser() {
      this.$store.commit('SET_USERNAME', this.user);
    },
  },
};
</script>

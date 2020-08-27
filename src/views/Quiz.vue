<template>
  <div class="quiz">
    <div v-for="(question, index) in questions" :key="index">
      <h3>{{ question.question }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: this.$store.state.questions,
    };
  },
};
</script>

<style lang="scss" scoped></style>

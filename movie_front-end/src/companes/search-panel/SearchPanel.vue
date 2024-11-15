<template>
  <Input
    class="search-input"
    placeholder="kinolarni qidirish"
    v-model="term"
    @input="changeHandler"
  />
</template>
<script>
import Input from "@/uiCompanents/Input.vue";

export default {
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    changeHandler(e) {
      this.term = e.target.value;
      this.updateTermHandler(this.term);
    },
  },
};
</script>

<style scoped>
.search-input {
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

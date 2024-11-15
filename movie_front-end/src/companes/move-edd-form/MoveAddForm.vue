<template>
  <div class="movie-add-form">
    <h3>yangi kino qoshish</h3>
    <form class="add-form d-flex" @submit.prevent>
      <Input class="new-movie-label" placeholder="qanday kino" v-model="name" />

      <Input
        type="number"
        class="new-movie-label"
        placeholder="nechi marotaba korilgan"
        v-model="viewers"
      />
      <PrimaryButton class="btn-outline-dark" type="submit" @click="addMovies">
        qoshish
      </PrimaryButton>
    </form>
  </div>
</template>
<script>
import Input from '@/uiCompanents/Input.vue';


export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovies() {
      const newMovies = {
        name: this.name,
        viewers: this.viewers,
        favourite: false,
        like: false,
       
      };
      this.$emit("creatMovie", newMovies);
      this.name = '', 
      this.viewers = '';
    },
  },
  
};
</script>
<style scoped>
.movie-add-form {
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

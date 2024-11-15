<template>
  <ul class="movie-list list-group">
    <MOvieListItem
      v-for="movie in movies"
      v-bind:movie="movie"
      :key="movie.id"
      @onToggle="$emit('onToggle', $event)"
      @onRemove="$emit('onRemove', movie.id)"
    />
  </ul>
</template>

<script>
import MOvieListItem from "../movie-list-item/MOvieListItem.vue";

export default {
  components: { MOvieListItem },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.movie-list {
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

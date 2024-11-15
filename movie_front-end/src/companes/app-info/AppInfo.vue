<template>
  <Box>
    <p class="fs-3 text-uppercase">barcha kinolar soni: {{ allMoviesCount }}</p>
    <p class="fs-4 text-uppercase">Korilgan kinolar soni: {{ favoureiteMoviesCount }} </p>
  </Box>
</template>

<script>
import Box from '@/uiCompanents/Box.vue';

export default {
  props: {
    allMoviesCount: {
      type: Number,
      required: true,
    },
    favoureiteMoviesCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>

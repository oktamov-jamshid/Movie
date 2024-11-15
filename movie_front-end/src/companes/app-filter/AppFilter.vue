<template>
  <div class="btn-group">
    <PrimaryButton
      v-for="btn in filterButtons"
      :key="btn.name"
          :class="[filterButtons === btn.name ? 'btn-dark' : 'btn-outline-dark']"
      @click="filterHendler(btn.name)"
    >
      {{ btn.title }}
    </PrimaryButton>
  </div>
</template>
<script>

export default {
  props: {
    updateFilterHandler: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filterButtons: [
        {
          title: "barcha kinolar",
          name: "all",
        },

        {
          title: "mashxur kinolar",
          name: "popular",
        },

        {
          title: "eng kop korilgan kinolar",
          name: "mostViewers",
        },
      ],
    };
  },
  methods: {
    filterHendler(filter) {
      this.filter = filter;
      this.updateFilterHandler(this.filter);
    },
  },
};
</script>

<style></style>

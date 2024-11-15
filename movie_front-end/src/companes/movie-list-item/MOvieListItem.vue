<template>
  <li
    class="List-group-item d-flex justify-content-between"
    :class="[{ like: movie.like }, { favourite: movie.favourite }]"
  >
    <span
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
      class="list-group-item-label"
      >{{ movie.name }}</span
    >
    <input type="number" class="list-group-item-input" :value="movie.viewers" />
    <div class="d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn-cookie btn-sm"
        @click="$emit('onToggle', { id: movie.id, prop: 'favourite' })"
      >
        <i class="fas fa-cookie"></i>
      </button>
      <button
        type="button"
        class="btn-trash btn-sm"
        @click="$emit('onRemove', movie.id)"
      >
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onlike() {
      this.$emit("onlike", this.movie.id);
    },
  },
};
</script>
<style scoped>
.List-group-item {
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
}

.List-group-item:last-child {
  border-bottom: none;
}

.List-group-item span {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  width: 550px;
}

.List-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: none;
}

.List-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.List-group-item .btn-cookie {
  color: #e09f3e;
}

.List-group-item .btn-trash {
  color: #e5383e;
}

.List-group-item .fa-star {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
  color: #ffd700;
  transition: 0.3s all;
  transform: translateX(30px);
  opacity: 0;
}

.List-group-item.like .fa-star {
  transform: translateX(0);
  opacity: 1;
}

.List-group-item.favourite .list-group-item-label,
.List-group-item.favourite .list-group-item-input {
  color: #e09f3e;
}
</style>

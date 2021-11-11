<template>
  <button>
    <input type="checkbox" :checked="isFavorite" />
    <div class="like-btn-svg"></div>
  </button>
</template>

<script>
export default {
  props: {
    isFavorite: Boolean,
  },
};
</script>

<style lang="scss">
.like-btn-svg {
  width: 100%;
  height: 100%;
  background: url(https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png)
    no-repeat;
  background-size: 2900%;
  background-position: left;
  cursor: pointer;
}

input[type='checkbox'] {
  display: none;
}

input:checked + .like-btn-svg {
  transition: background 0.8s steps(28);
  animation: fave-like-btn-svg 0.8s steps(28);
  background-position: right;
}

@keyframes fave-like-btn-svg {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
</style>

<template>
  <component class="a-title" :is="tag">
    <img src="@/assets/memocard-white.svg" alt="MemoCard">
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style lang="stylus">
  .a-title {
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;

    img {
      width: 100%;
    }
  }
</style>

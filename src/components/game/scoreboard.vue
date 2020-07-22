<template>
  <div class="m-score">
    <h2 class="m-score_title">Scoreboard</h2>
    <div class="m-score_items">
      <p class="m-score_item"><span>plays:</span> {{ plays }}</p>
      <p class="m-score_item"><span>points:</span> {{ points }}</p>
      <p class="m-score_item"><span>timer:</span> 0s</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['points', 'plays'])
  }
}
</script>

<style lang="stylus">
  .m-score_title {
    margin-top: 0;
    margin-bottom: var(--gutter-base);
  }

  .m-score_items {
    position: relative;
    display: flex;
    align-items center;
  }

  .m-score_item {
    min-width: calc(25% - var(--gutter-base));
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding: var(--gutter-base);
    border: 1px solid var(--color-red);
    transform: skewX(-10deg);

    &:not(:last-child) {
      margin-right: var(--gutter-base);
    }
  }
</style>

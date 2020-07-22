<template>
  <div class="m-controls">
    <h2 class="m-controls_title">Controls</h2>
    <div class="m-controls_controls">
      <SkewButton @click.native="resetData" class="m-controls_button">Reset</SkewButton>
      <SkewButton @click.native="reset" class="m-controls_button">Quit</SkewButton>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import SkewButton from '@/components/skew-button.vue'

export default {
  components: {
    SkewButton
  },
  methods: {
    ...mapMutations(['reset', 'resetData'])
  }
}
</script>

<style lang="stylus">
  .m-controls_title {
    margin-top: 0;
    margin-bottom: var(--gutter-base);
  }

  .m-controls_button {
    &:not(:last-child) {
      margin-right: var(--gutter-base);
    }
  }
</style>

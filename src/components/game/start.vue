<template>
  <div class="m-start">
    <h1>MemoCard</h1>
    <h2>A memory game with vue.js</h2>
    <Button @click.native="changePage('board')">play game</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Button from '@/components/button.vue'

export default {
  components: {
    Button
  },
  methods: {
    ...mapMutations(['changePage'])
  }
}
</script>

<style lang="stylus">
  .m-start {
    text-align: center;
  }
</style>

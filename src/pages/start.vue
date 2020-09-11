<template>
  <div class="m-start">
    <Title class="m-start_title" />
    <h2>A memory game with vue.js</h2>
    <Button @click.native="onClick">play game</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import pageEnum from '@/enums/page'
import Button from '@/components/button.vue'
import Title from '@/components/title.vue'

export default {
  components: {
    Button,
    Title
  },
  methods: {
    ...mapMutations(['changePage']),
    onClick () {
      this.changePage(pageEnum.GAME)
    }
  }
}
</script>

<style lang="stylus">
  .m-start {
    text-align: center;
  }

  .m-start_title {

  }
</style>

<template>
  <div>
    <div v-if="page === 'start'" key="start">
      <start />
    </div>
    <div v-else class="m-game" key="board">
      <scoreBoard />
      <cardGrid class="m-game_grid" />
      <controls class="m-game_controls" />
    </div>
    <!-- <transition-group name="list" tag="div">
    </transition-group> -->
  </div>
</template>

<script>
import start from '@/components/game/start.vue'
import cardGrid from '@/components/game/card-grid.vue'
import scoreBoard from '@/components/game/scoreboard.vue'
import controls from '@/components/game/controls.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    cardGrid,
    scoreBoard,
    controls,
    start
  },
  computed: {
    ...mapGetters(['page'])
  }
}
</script>

<style lang="stylus">
  .m-game_grid,
  .m-game_controls {
    margin-top: 40px;
  }
</style>

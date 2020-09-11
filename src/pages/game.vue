<template>
  <div>
    <scoreBoard />
    <cardGrid class="m-game_grid" />
    <controls class="m-game_controls" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import cardGrid from '@/components/game/card-grid.vue'
import scoreBoard from '@/components/game/scoreboard.vue'
import controls from '@/components/game/controls.vue'

export default {
  components: {
    cardGrid,
    scoreBoard,
    controls
  },
  data () {
    return {
      interval: null
    }
  },
  mounted () {
    this.startTime()
  },
  methods: {
    ...mapMutations(['startTime'])
  }
}
</script>

<style lang="stylus">
  .m-game_grid,
  .m-game_controls {
    margin-top: 40px;
  }
</style>

<template>
  <div class="o-game" ref="transition">
    <transition
      name="slide"
      v-on:before-leave="beforeLeave"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      tag="div"
    >
      <component class="o-game_slide" :is="page" v-if="page"></component>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import transitionSlide from '@/mixins/transitionSlide'
import pageEnum from '@/enums/page'
import start from '@/pages/start.vue'
import game from '@/pages/game.vue'

export default {
  mixins: [transitionSlide],
  components: {
    [pageEnum.START]: start,
    [pageEnum.GAME]: game
  },
  computed: {
    ...mapGetters(['page', 'time'])
  },
  watch: {
    time (old, newVal) {
      if (!newVal) {
        alert('You lost')
      }
    }
  }
}
</script>

<style lang="stylus">
  .o-game {
    width: 100%;
  }
</style>

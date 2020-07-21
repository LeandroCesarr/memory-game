<template>
  <div>
    <p>points: {{ points }}</p>
    <ul class="m-grid-card">
      <li v-for="(item, idx) in cards" :key="idx">
        <card @click.native="flip(item)" :card="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import card from '@/components/game/card.vue'

export default {
  components: {
    card
  },
  computed: {
    ...mapGetters(['cards', 'points'])
  },
  methods: {
    ...mapActions(['move']),
    flip (card) {
      this.move(card)
    }
  }
}
</script>

<style lang="stylus">
  .m-grid-card {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
</style>

<template>
  <div class="m-grid-card">
    <h2 class="m-grid-card_title">Cards</h2>
    <ul class="m-grid-card_cards">
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
    ...mapGetters(['cards'])
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
  .m-grid-card_title {
    margin-top: 0;
    margin-bottom: var(--gutter-base);
  }

  .m-grid-card_cards {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: var(--gutter-base);
    row-gap: var(--gutter-base);
  }
</style>

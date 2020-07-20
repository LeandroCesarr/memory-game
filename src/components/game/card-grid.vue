<template>
  <ul class="m-grid-card">
    <li v-for="(item, idx) in cards" :key="idx">
      <card :card="item" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import card from '@/components/game/card.vue'

export default {
  components: {
    card
  },
  computed: {
    ...mapGetters(['cards'])
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

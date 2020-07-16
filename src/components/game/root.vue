<template>
  <div>
    <p>game</p>
    <ul>
      <li v-for="item in sortedCards" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { randomFromArray } from '@/utils'

export default {
  data () {
    return {
      cards: ['css', 'sass', 'jquery', 'vue', 'react', 'php']
    }
  },
  computed: {
    sortedCards () {
      const duplicateCards = [...this.cards, ...this.cards]
      return duplicateCards.map(item => (duplicateCards[randomFromArray(duplicateCards)]))
    }
  },
  methods: {

  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <div v-if="!isStarted">
      <h1>MemoCard</h1>
      <h2>A memory game with vue.js</h2>
      <Button @click.native="isStarted = !isStarted">play game</Button>
      <p>status: {{ node }}</p>
    </div>
    <div v-else>
      <Game />
    </div>
  </div>
</template>

<script>
import Button from './components/button.vue'
import Game from './components/game/root.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Button,
    Game
  },
  data () {
    return {
      isStarted: false
    }
  },
  computed: {
    ...mapGetters(['node'])
  }
}
</script>

<style lang="stylus">
:root {
  --color-base: #0f1923;
  --color-red: #ff4655;
}

* {
  box-sizing border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display flex;
  justify-content center;
  align-items center;
  flex-direction column;
  background: var(--color-base);
  color: white;
}

h1, h2 {
  font-weight: normal;
}

#app
  font-family: 'Raleway', sans-serif;
  text-align center
  margin-top: 60px;
  margin-bottom: 60px;
</style>

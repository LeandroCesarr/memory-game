<template>
  <div id="app">

    <div>
      <Game />
      <p class="status">status: {{ node }}</p>
    </div>
  </div>
</template>

<script>
import Game from './components/game/root.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Game
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
  --gutter-base: 10px;
}

* {
  box-sizing border-box;
}

html {
  display: flex;
  flex-direction: column;
}

body {
  flex: 1;
}

html, body {
  min-height: 100%;
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
  margin-top: 30px;
  margin-bottom: 30px;

.status {
  position: absolute;
  left: 10px;
  bottom: 10px;
}
</style>

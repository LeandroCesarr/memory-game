<template>
  <div class="m-card" :class="{ '-active': cardInfo.flip }">
    <div class="m-card_side -front">
      <img src="@/assets/valorant.png" alt="">
    </div>
    <div class="m-card_side -back">
      <p>{{ cardInfo.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: { card: Object },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getCard']),
    cardInfo () {
      return this.getCard(this.card.slug)
    }
  }
}
</script>

<style lang="stylus">
  .m-card {
    height: 100px;
    width: 100px;
    padding: 10px;
    border: 1px solid var(--color-red);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    perspective: 150em;

    &.-active {
      .m-card_side.-front {
        transform: rotateY(-180deg);
      }

      .m-card_side.-back {
        transform: rotateY(0);
      }
    }

    img {
      max-width: 100%;
    }
  }

  .m-card_side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform .6s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-base);
    color: var(--color-red)

    &.-front {
    }

    &.-back {
      transform: rotateY(180deg);
    }
  }
</style>

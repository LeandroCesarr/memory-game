<template>
  <div class="m-card"
    :class="{
      '-active': cardInfo.flip,
      '-valid': cardInfo.valid,
      '-error': cardInfo.error
    }"
  >
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
    color: var(--color-red);
    perspective: 150em;

    &.-error {
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }

    &.-valid {
      border-color: white;
      color: white;
    }

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
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    transition: transform .6s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-base);
    backface-visibility: hidden;

    &.-front {
    }

    &.-back {
      transform: rotateY(180deg);
    }
  }

  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>

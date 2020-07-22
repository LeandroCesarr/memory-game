<template>
  <button class="a-skew-button">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  .a-skew-button {
    display: inline-block;
    border: none;
    background: none;
    padding: 8px 20px;
    font-size: 0.8rem;
    font-weight: 900;
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    outline: none;
    font-family: "Muli", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--color-red);
    transform: skewX(-10deg);
    overflow: hidden;

    &:hover {
      color: var(--color-red);

      &:before {
        transform: translateX(0);
      }
    }

    &:before {
      content: '';
      transition: transform .2s ease-out;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: white;
      transform: translateX(-103%);
    }

    span {
      position: relative;
      z-index: 1;
    }
  }
</style>

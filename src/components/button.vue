<template>
  <button class="a-btn">
    <span class="a-btn_ctt">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.a-btn {
  display: block;
  border: none;
  background: none;
  width: 100%;
  max-width: 240px;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 900;
  color: #ff4655;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 0 0 1px inset rgba(236, 232, 225, 0.3);
  position: relative;
  margin: 10px auto;
  outline: none;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: white;

    .a-btn_ctt:before {
      transform: skewX(-10deg) translateX(0);
    }
  }
}

.a-btn_ctt {
  border: 1px solid var(--color-red);
  display: block;
  padding: 15px;
  position: relative;
  overflow: hidden;

  &:before {
    content '';
    top: 0;
    bottom: 0;
    left: -18px;
    position: absolute;
    background: var(--color-red);
    width: calc(100% + 36px);
    height: 100%;
    z-index: -1;
    -webkit-transition: 0.3s ease-out all;
    transition: 0.3s ease-out all;
    transform: skewX(-10deg) translateX(-101%);
  }
}
</style>

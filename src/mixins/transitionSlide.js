export default {
  methods: {
    beforeLeave (el) {
      this.$refs.transition.style.maxHeight = `${el.offsetHeight}px`
    },
    enter (el) {
      this.$refs.transition.style.maxHeight = `${el.offsetHeight}px`
    },
    afterEnter () {
      this.$refs.transition.style.maxHeight = ''
    }
  }
}

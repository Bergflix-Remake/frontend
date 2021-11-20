<template>
  <div class="load-1">
    <div :class="`bg-${color}-500`" class="line"></div>
    <div :class="`bg-${color}-500`" class="line"></div>
    <div :class="`bg-${color}-500`" class="line"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'indigo',
  },
})
</script>

<style lang="scss">
@import '../styles/colors.scss';

/* -----------------------------------------
  =CSS3 Loading animations
-------------------------------------------- */

/* =Elements style
---------------------- */
.line {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  margin: 0 1px;
  // background-color: $primary;
}
/* =Animate the stuff
------------------------ */
.load-1 .line:nth-last-child(1) {
  animation: loadingA 1.5s 1s infinite;
}
.load-1 .line:nth-last-child(2) {
  animation: loadingA 1.5s 0.5s infinite;
}
.load-1 .line:nth-last-child(3) {
  animation: loadingA 1.5s 0s infinite;
}

@keyframes loadingA {
  0% {
    height: 5px;
  }
  50% {
    height: 10px;
  }
  100% {
    height: 5px;
  }
}
</style>
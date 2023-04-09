<template>
  <div id="start">
    <transition appear
                name="fade"
                @after-enter="onAfterEnter">
      <img id="start-img" src="../assets/img/chanilstagram_white.png"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Start-",
  methods: {
    onAfterEnter() {
      this.$store.commit('animationEnd')
    }
  },
}
</script>

<style scoped>
#start {
  height: 100vh;
  width: inherit;

  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

#start-img {
  width: 30%;
}

.fade-enter-active,
.fade-leave-active {
  animation: fadeInAndOut 3s ease-in-out;
}

@keyframes fadeInAndOut {
  0% {
    opacity: 0;
    transform: translate3d(0, 30%, 0);
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateZ(0);
  }
}
</style>
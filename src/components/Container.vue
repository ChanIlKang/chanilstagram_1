<template>
<!--  로컬스토리지와 연동 되고 있는지 확인-->
  <Start v-if=" $store.state.step === $store.state.stepOrder.START"/>
  <Login v-else-if="$store.state.step === $store.state.stepOrder.LOGIN "/>
</template>

<script>
import Start from "@/components/Start";
import Login from "@/components/Login";

export default {
  name: "Container-",
  components: {
    Login,
    Start,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid rgba(200, 200, 200, 0.5);
  padding: 30px 0px;
}

</style>
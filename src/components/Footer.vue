<template>
  <!--    Bottom NavBar-->
  <nav class="navbar sticky-bottom bg-black">
    <div class="container-fluid bottom-navbar-wrapper">
      <router-link :to="$store.state.pathName.home"
                   class="navbar-brand bottom-navbar-icon">
        <i class="fa-solid fa-house fa-lg"></i>
      </router-link>
      <div to="#" class="navbar-brand bottom-navbar-icon">
        <label for="file" class="input-plus"><a href="#"><i class="fa-solid fa-plus fa-lg posting"></i></a></label>
      </div>
      <router-link :to="$store.state.pathName.profile" id="profile">
        <i class="fa-solid fa-user fa-lg bottom-navbar-icon"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Footer-",
    }
</script>

<style scoped>
@import '../assets/css/footer.css'
</style>
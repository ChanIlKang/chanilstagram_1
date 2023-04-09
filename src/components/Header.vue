<template>
  <!--    Header-->
  <nav class="navbar sticky-top header-wrapper bg-black">
    <div class="container-fluid">
      <router-link :to="$store.state.pathName.profile" class="navbar-brand">
        <img src="../assets/img/chanilstagram_white.png"
             alt="Logo"
             width="100"
             height="30"
             class="d-inline-block align-text-top">
      </router-link>
      <div class="d-flex">
        <router-link :to="$store.state.pathName.followerList">
          <i class="fa-regular fa-paper-plane fa-lg directMsg"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Header-"
    }
</script>

<style scoped>
    @import "../assets/css/header.css";
</style>
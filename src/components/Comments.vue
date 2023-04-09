<template>
<!--  header-->
  <div class="comments-header-wrapper">
    <header class="comments-header">
      <div class="comments-header__backButton">
        <router-link class="backButton" to="/home"><i class="fa-solid fa-arrow-left fa-lg"></i></router-link>
      </div>
      <div class="comments-header__span">
        <span>comments</span>
      </div>
    </header>

    <!-- corresponding user posting-->
    <div class="posting-contents">
      <div class="comments-contents">
        <div class="comments-contents__img">
          <img :src="$store.state.commentsData[0].profileImg"/>
        </div>
        <div class="comments-contents__comment">
          <p class="user-comments">
            <span class="comment-userid">{{ $store.state.commentsData[0].userid }}</span>
            {{ $store.state.commentsData[0].comments }}
          </p>
        </div>
      </div>
    </div>

    <!-- comments-->
    <div class="comments-wrapper">
      <div class="comments-contents">
        <div class="comments-contents__img">
          <img :src="$store.state.postData[1].userImage"/>
        </div>
        <div class="comments-contents__comment">
          <p class="user-comments">
            <span class="comment-userid">{{ $store.state.commentsData[1].userid }}</span>
            {{ $store.state.commentsData[1].comments }}
          </p>
          <div class="comment-details">
            <span>{{$store.state.commentsData[1].date}}</span>
            <span>{{$store.state.commentsData[1].likes}} likes</span>
            <span>send</span>
          </div>
        </div>
      </div>
    </div>

    <!-- writing bar-->
    <div class="writing-bar-wrapper">
      <div class="comments-contents__img">
        <img :src="$store.state.postData[1].userImage"/>
      </div>
      <form class="writing-bar-form">
        <div class="writing-bar-form__input">
            <input type="text" placeholder="Add comments…"/>
        </div>
        <div class="writing-bar-form__button">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Comments-",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
@import "../assets/css/comments.css";
</style>
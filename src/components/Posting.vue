<template>
  <div v-for="(postData, i) in postData" :key="i" class="post-wrapper">
    <div class="post-container">
      <div class="post-info-wrapper">
        <div class="post-info__img">
          <img class="lazy" :src="postData.userImage">
        </div>
        <div class="post-img__username">
          <span>{{ postData.name }}</span>
        </div>
      </div>

      <div class="post-data__img">
        <img class="lazy" :src="postData.postImage"/>
      </div>

      <div class="post-data-icons">
        <div class="post-data-icons__likes" @click="likeChange(postData)">
            <span v-if="postData.liked === false">
              <i class="fa-regular fa-heart fa-lg"></i>
            </span>
          <span v-else>
              <i class="fa-solid fa-heart fa-lg"></i>
            </span>
        </div>
        <div class="post-data-icons__comments">
          <i class="fa-regular fa-comment fa-lg"></i>
        </div>
      </div>

      <div class="post-data-contents">
        <div class="post-data-contents__likes">
          <span>{{ postData.likes }} likes</span>
        </div>
        <div class="post-data-contents__content">
          <p class="user-content">
            <span class="user-id">{{ postData.name }}</span>
            {{ postData.content }}
          </p>
        </div>
        <div class="comment-link">
          <router-link class="comment-link__router-link" :to="$store.state.pathName.comments">
            <span>View all {{ postData.length }} comments</span>
          </router-link>
        </div>
      </div>
      <div class="posted-date-wrapper">
        <span class="posted-date">{{ postData.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Posting-",
  props: {
    postData: {
      type: Object,
      default: function() {
        return {
          name: "default",
          userImage: "https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png",
          postImage: "https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png",
          likes: 'default',
          date: 'default',
          liked: true,
          content: "default",
          filter: "perpetua"
        }
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
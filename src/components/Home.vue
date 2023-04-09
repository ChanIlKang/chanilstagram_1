<template>
  <div class="home-wrapper">

    <div v-if="step === HOME_PAGE" class="home-page">
      <!--    Header-->
      <nav class="navbar sticky-top header-wrapper bg-black">
        <div class="container-fluid">
          <router-link :to="$store.state.pathName.home" class="navbar-brand">
            <img src="../assets/img/chanilstagram_white.png"
                 alt="Logo"
                 width="100"
                 height="30"
                 class="d-inline-block align-text-top">
          </router-link>
<!--          <div class="d-flex">-->
<!--            <router-link :to="$store.state.pathName.followerList">-->
<!--              <i class="fa-regular fa-paper-plane fa-lg directMsg"></i>-->
<!--            </router-link>-->
<!--          </div>-->
        </div>
      </nav>

      <!--    Posting-->
      <!--      <Posting :postData="postData[i]" v-for="(postData, i) in postData" :key="i"/>-->
      <div v-for="(postData, i) in postData" :key="i" class="post-wrapper">
        <div class="post-container">
          <div class="post-info-wrapper">
            <div class="post-info__img">
              <img :src="postData.userImage">
            </div>
            <div class="post-img__username">
              <span>{{ postData.name }}</span>
            </div>
          </div>

          <div :class="`post-data__img ${postData.filter}`">
            <img :src="postData.postImage"/>
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

      <!--    Bottom NavBar-->
      <nav class="navbar sticky-bottom bg-black">
        <div class="container-fluid bottom-navbar-wrapper">
          <router-link :to="$store.state.pathName.home"
                       class="navbar-brand bottom-navbar-icon">
            <i class="fa-solid fa-house fa-lg"></i>
          </router-link>
          <div class="navbar-brand bottom-navbar-icon">
            <input id="file" type="file" accept="image/*" style="display: none" @change="imageUpload">
            <label for="file"><i class="fa-solid fa-plus fa-lg"></i></label>
          </div>
          <router-link :to="$store.state.pathName.profile" id="profile">
            <i class="fa-solid fa-user fa-lg bottom-navbar-icon"></i>
          </router-link>
        </div>
      </nav>
    </div>


    <div v-else-if="step === FILE_UPLOAD_PAGE" class="upload-page">
      <header class="upload-header">
        <ul class="upload-header-button">
          <li @click="step--" class="upload-header-button__left"><i class="fa-solid fa-xmark fa-xl"></i></li>
          <li @click="step++" class="upload-header-button__right"><i class="fa-solid fa-arrow-right fa-xl"></i></li>
        </ul>
      </header>

      <div class="upload-image"
           :class="selectedFilter"
           :style="`background-image: url(${uploadedImg})`"></div>
      <div class="filters">
        <FilterBox :uploadedImg="uploadedImg"
                   v-for="filters in filters"
                   :key="filters"
                   :class="filters" @click="filterSelect(filters)">
          <span>{{filters}}</span>
        </FilterBox>
      </div>
    </div>

    <div v-else-if="step === CONTENT_UPLOAD_PAGE" class="upload-page">
      <header class="upload-header">
        <ul class="upload-header-button">
          <li @click="step--" class="upload-header-button__left"><i class="fa-solid fa-arrow-left fa-xl"></i></li>
          <li @click="publishNewPost(uploadedImg)" class="upload-header-button__right"><span>Upload</span></li>
        </ul>
      </header>
      <div class="upload-image" :class="selectedFilter" :style="`background-image: url(${uploadedImg})`"></div>
      <div class="write">
        <textarea v-model="textContent" class="write-box">write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import postData from "@/assets/data/postData";
import FilterBox from "@/components/FilterBox";
import filters from "../assets/data/filters"

export default {
  name: "Home-",
  components: {FilterBox},
  data() {
    return {
      postData: postData,
      file: '',
      HOME_PAGE: 0,
      FILE_UPLOAD_PAGE: 1,
      CONTENT_UPLOAD_PAGE: 2,
      step: 0,
      uploadedImg: '',
      textContent: '',
      filters: filters,
      selectedFilter: ''
    }
  },
  methods: {
    filterSelect(payload){
      this.selectedFilter = payload;
    },
    publishNewPost(payload) {
      let newPostData = {
        name: "chanil_kang",
        userImage: 'https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png',
        postImage: payload,
        likes: 0,
        date: `${new Date().toLocaleDateString("en-us", { month: "short", day: "numeric" })} ${new Date().toLocaleTimeString()}`,
        liked: false,
        content: this.textContent,
        filter: this.selectedFilter
      };
      this.postData.unshift(newPostData);
      this.step = 0;
    },
    imageUpload(e) {
      let uploadFile = e.target.files;
      let uploadedImg = URL.createObjectURL(uploadFile[0]);
      this.uploadedImg = uploadedImg;
      this.step++;
    },
    likeChange(obj) {
      console.log(`before click : ${obj.likes}`)
      if (obj.liked === false) {
        obj.liked = true;
        obj.likes += 1;
      } else {
        obj.liked = false;
        obj.likes -= 1;
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
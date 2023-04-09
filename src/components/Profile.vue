<template>
  <!--  Card-->
  <div class="card"
       v-if="imgClicked === true"
       @click="imgClicked = false">
    <div class="card-wrapper">
      <!--Card image-->
      <div class="card-image">
        <img :src="clickedImgSrc"/>
      </div>

      <!--Card icons-->
      <div class="card-icons">
        <div class="card-icons-wrapper">
          <span>
              <i class="fa-solid fa-heart fa-lg"></i>
          </span>
          <span>
            <i class="fa-regular fa-comment fa-lg"></i>
          </span>
        </div>
        <div class="card-icons__more">
          <span><i class="fa-solid fa-ellipsis fa-lg"></i></span>
        </div>
      </div>

      <!--Card content-->
      <div class="card-user-info">
        <img class="card-user-info__img" :src="profileData.profileImg">
        <span class="card-user-info__id">{{ profileData.userId }}</span>
      </div>
      <div class="card-user-content">
        <p class="card-user-content__text">{{ profileData.postings[clickedImgOrder].content}}<br/>
        </p>
      </div>

      <!--Comments-->
      <div class="card-comments">
        <span class="card-comments__id">{{ profileData.userId }}</span>
        <span class="card-comments__comment">comments by user's follower</span>
      </div>

    </div>
  </div>

  <!--  Profile Page-->
  <div class="profile-wrapper">
    <!--  Header-->
    <header class="profile-header">
      <router-link :to="$store.state.pathName.home" class="arrow-back">
        <i class="fa-solid fa-chevron-left"></i>
      </router-link>
      <div class="profile-header__userid">
        <span>{{ profileData.userId }}</span>
      </div>
      <!--      <div class="profile-header__upload">-->
      <!--        <i class="fa-regular fa-square-plus fa-lg"></i>-->
      <!--      </div>-->
      <!--      <div class="profile-header__setting">-->
      <!--        <i class="fa-solid fa-bars fa-lg"></i>-->
      <!--      </div>-->
    </header>

    <!--Profile info-->
    <div class="profile-info">
      <div class="profile-info__img">
        <img alt="profile-img" src="https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png"/>
      </div>
      <div class="profile-info-detail">
        <div class="profile-info__numbers">
          <div class="numbers-box">
            <span>{{ profileData.postings.length }}</span>
            <span>Posts</span>
          </div>
          <div class="numbers-box">
            <span>{{ profileData.follower }}</span>
            <span>follower</span>
          </div>
          <div class="numbers-box">
            <span>{{ profileData.followee }}</span>
            <span>Follow</span>
          </div>
        </div>
        <div class="profile-content">
          <span class="profile-content__username">
            {{ profileData.userName }}
          </span>
          <span class="profile-content__explaination">
            {{ profileData.explanation }}
          </span>
        </div>
      </div>
    </div>

    <hr/>

    <!--    Postings-->
    <div class="profile-postings-wrapper">
      <div v-for="(postings, i) in profileData.postings" :key="i"
           class="profile-postings">
        <div class="profile-postings__child">
          <img @click="imgClick" class="profile-postings__child"
               :src="profileData.postings[i].userImage"/>
          <!--Check this lines and write a html lines using v-for props-->
        </div>
        <!--      <div class="profile-postings__child">-->
        <!--        <img class="profile-postings__child" src="https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png"/>-->
        <!--      </div>-->
        <!--      <div class="profile-postings__child">-->
        <!--        <img class="profile-postings__child" src="https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png"/>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import profileData from "@/assets/data/profileData";

export default {
  name: "Profile-",
  data() {
    return {
      profileData: profileData,
      imgClicked: false,
      clickedImgSrc: '',
      clickedImgOrder: 0
    }
  },
  methods: {
    imgClick(e) {
      let clickedImgSrc = e.target.src
      this.clickedImgSrc = clickedImgSrc

      for (let i=0; i<this.profileData.postings.length; i++) {
        if(this.profileData.postings[i].postImage === clickedImgSrc) {
          this.clickedImgOrder = i;
        }
      }

      this.imgClicked = true
    }
  }
}
</script>

<style scoped>
@import '../assets/css/profile.css';
</style>

<!--이미지 업로드 하는 기능 따라 하고-->
<!--프로필 화면 완성하고-->
<!--프로필 화면에서 포스팅한 사진 클릭하면 카드로 뜨게 하기-->
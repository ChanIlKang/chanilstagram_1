import profilePostData from "@/assets/data/profilePostData";

let follower = Math.floor(Math.random() * 1001);
let followee = Math.floor(Math.random() * 1001);

export default {
    profileImg: 'https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png',
    userId: 'chanil_kang',
    userName: '강찬일',
    explanation: 'Front-end Developer',
    follower: follower,
    followee: followee,
    postings: profilePostData,
}

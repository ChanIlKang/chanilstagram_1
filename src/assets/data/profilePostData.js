let today = new Date().toLocaleDateString("en-us", {month: "short", day: "numeric"});

let likes_0 = Math.floor(Math.random() * 1001);
let likes_1 = Math.floor(Math.random() * 1001);
let likes_2 = Math.floor(Math.random() * 1001);

export default [
    {
        name: "chanil_kang",
        userImage: "https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png",
        postImage: "https://i.postimg.cc/k4tFhFQj/back-Spraying-Guy.png",
        likes: likes_0,
        date: `${today}`,
        liked: true,
        content: "큰 그림을 그리고 디테일을 잡아가는 프론트엔드 개발자",
        filter: "moon"
    },
    {
        name: "about_me",
        userImage: "https://i.postimg.cc/NMqmwmCh/image.png",
        postImage: "https://i.postimg.cc/NMqmwmCh/image.png",
        likes: likes_1,
        date: `${today}`,
        liked: false,
        content:
            `
7년간 그래피티 작가로 활동하며 그린 작품을 아카이빙 하기 위한 웹페이지 제작을 목표로 독학하였습니다.
이를 계기로 웹 개발에 재미와 관심이 커져 개발자의 꿈을 가지게 되었습니다.`,
        filter: "brooklyn"
    },
    {
        name: "contact",
        userImage: "https://i.postimg.cc/wMM0Xfg3/contact.jpg",
        postImage: "https://i.postimg.cc/wMM0Xfg3/contact.jpg",
        likes: likes_2,
        date: `${today}`,
        liked: false,
        content: `Contact
Name : 강찬일
Phone : 010-7511-8691
EMAIL : programmer.chanil@gmail.com
`,
        filter: ""
    }
]
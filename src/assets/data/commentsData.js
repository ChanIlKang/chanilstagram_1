let today = new Date().toLocaleDateString("en-us", { month: "short", day: "numeric" });
let likes = Math.floor(Math.random() * 1001);

export default [
    {
        profileImg: "https://placeimg.com/100/100/arch",
        userid: 'userId_1',
        comments: "I am user_1.",
        date: `${today}`,
        likes: `${likes}`
    },
    {
        profileImg: "https://placeimg.com/640/480/arch",
        userid: 'user_2',
        comments: "I am user_2I am user_2I am user_2I am user_2I am user_2I am user_2I am user_2I am user_2I am user_2I am user_2",
        date: `${today}`,
        likes: `${likes}`
    }
]
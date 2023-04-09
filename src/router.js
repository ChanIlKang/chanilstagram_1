import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login";
import Comments from "@/components/Comments";
import Profile from "@/components/Profile";
import Home from "@/components/Home";
// import Container from "@/components/Container";
import FollowerList from "@/components/FollowerList";

const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/comments",
        component: Comments,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/followerlist",
        component: FollowerList,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
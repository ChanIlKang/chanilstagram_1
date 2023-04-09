import {createStore} from "vuex";
import postData from "@/assets/data/postData";
import commentsData from "@/assets/data/commentsData";
import router from "@/router";

export let store = createStore({
    state() {
        return {
            //For Start Component

            //For Login Component
            loginData: {
                isLogin: false,
                masterID: 'writercik',
                masterPW: 'hireme1!',
            },

            //For Container
            step: 0,
            stepOrder: {
              START: 0,
              LOGIN: 1,
              HOME: 2
            },
            stepNameOnLocalStorage: 'step',

            //For Post Component
            postData: postData,

            //For Comments Component
            commentsData: commentsData,

            //For Router Location
            pathName: {
                login: 'login',
                home: '/home',
                comments: '/comments',
                profile: '/profile',
                followerList: '/followerList'
            }
        }
    },
    getters: {

    },
    mutations: {
        animationEnd(state) {
            state.step = state.stepOrder.LOGIN
        },
        loginCheck(state, payload) {
            if ((payload.userInputID === state.loginData.masterID) &&
                (payload.userInputPW === state.loginData.masterPW)) {

                state.loginData.isLogin = true
                state.step = state.stepOrder.HOME

                router.push(state.pathName.home)
                    .then(() => {});
            }
            else {
                alert('Incorrect ID or password!')
                state.step = state.stepOrder.LOGIN
            }
        }
    },
    actions: {
        toHome(state) {
            router.push(state.pathName.home)
                .then( () => {
                    return state.pathName.home
                })
        }
    }
})
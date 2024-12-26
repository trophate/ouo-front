import {createMemoryHistory, createRouter} from 'vue-router'
import Cookies from 'js-cookie'

import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import User from "../components/User.vue"
import {login} from "./login.js";

const directAccessPage = ["home", "login"];
/**
 * 跳转登录前的路由名。
 */
let preRouteName = 'home';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/user',
        name: 'user',
        component: User
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

router.beforeEach((to, from) => {
    let acid = Cookies.get("ACID");
    if (to.path === "/" && to.name !== "home") {
        return {name: 'home'}
    } else if (!directAccessPage.includes(to.name) && (acid === null || acid === undefined)) {
        preRouteName = to.name;
        return {name: 'login'}
    }
});

export function loginPostProcessor() {
    router.push({name: preRouteName});
    preRouteName = 'home';
}

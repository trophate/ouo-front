import Cookies from 'js-cookie'
import { createMemoryHistory, createRouter } from 'vue-router'
import { login } from "./login.js"

import Home from "../Page/Home.vue"
import Login from "../Page/Login.vue"
import User from "../Page/User.vue"

/**
 * 直接访问页面列表
 */
const directAccessPage = ["home", "login"]
/**
 * 跳转登录前的路由名。
 */
let preRouteName = 'home'

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
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const acid = Cookies.get("ACID")
  if (to.path === "/" && to.name !== "home") {
    return { name: 'home' }
  } else if (!directAccessPage.includes(to.name) && (acid === null || acid === undefined)) {
    preRouteName = to.name
    return { name: 'login' }
  }
})

export function loginPostProcessor() {
  router.push({ name: preRouteName })
  preRouteName = 'home'
}

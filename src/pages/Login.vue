<script setup>
  import { login } from "../plugins/login.js"

  let username
  let password
</script>

<template>
  <div>
    <input v-model="username"/>
  </div>
  <div>
    <input type="password" v-model="password"/>
  </div>
  <button type="submit" @click="login(username, password)">登录</button>
</template>

<style scoped>

</style>
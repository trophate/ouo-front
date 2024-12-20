<script setup>
import axios from "axios"

let username;
let password;
function login() {
  axios.post("/api/ouo/auth/login",
      {username: username, password: password})
      .then(function (success) {
        console.log(success.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}
</script>

<template>
  <div>
    <input :value="username" />
  </div>
  <div>
    <input type="password" :value="password" />
  </div>
  <button type="submit" @click="login()">登录</button>
</template>

<style scoped>

</style>
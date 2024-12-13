<script setup>
let username;
let password;
</script>

<template>
  <div>
    <input :value="username" />
  </div>
  <div>
    <input type="password" :value="password"  />
  </div>
  <button>登录</button>
</template>

<style scoped>

</style>
<script setup>
  import AccountCircle from "../icon/AccountCircle.vue";
</script>

<template>
  <v-row id="headerBack">
    <v-col id="headerLeft">

    </v-col>
    <v-col id="headerRight" class="offset-11">
      <account-circle />
    </v-col>
  </v-row>
</template>

<style scoped>
  #headerBack {
    height: 130px;
  }
  #headerRight {
    margin-top: 70px;
  }
</style>
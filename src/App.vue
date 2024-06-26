<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"

//import ChitChat from './components/ChitChat.vue';
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

    <routerView />
    <SpeedInsights />
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

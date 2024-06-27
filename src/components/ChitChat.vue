<script setup>
import {store} from './store.js'
</script>

<template>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-100">
  <div class="shrink-0">
    <img class="h-12 w-12" src="../assets/vue.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <div class="flex items-center space-x-2">
      <p class="text-slate-500">You have a new message!</p>
    <button @click="store.increment" class="p-2 bg-indigo-500 text-white rounded-lg">{{ store.count }}</button>
    </div>
    
  </div>
</div>

</template>
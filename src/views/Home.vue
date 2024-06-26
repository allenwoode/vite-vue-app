<script setup>
import ChitChat from '../components/ChitChat.vue'

import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
    <div class="space-y-2">
        <ChitChat />
        <ChitChat />
        <ChitChat />

        <SpeedInsights />
    </div>
</template>
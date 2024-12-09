<script setup lang="ts">
import { ref } from 'vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

const theme = ref('light')
</script>

<template>
  <v-responsive class="border rounded" max-height="100%">
    <v-app id="resume-website" :theme="theme">
      <NavigationDrawer />
    </v-app>
  </v-responsive>
</template>

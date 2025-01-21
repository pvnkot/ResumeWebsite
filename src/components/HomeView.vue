<script setup lang="ts">
import { ref } from 'vue'
import PersonalInfoSection from '@/components/PersonalInfoSection.vue'
import ResumeSections from '@/components/ResumeSections.vue'
const theme = ref('light')
const APP_THEME = '1280px'
</script>

<template>
  <v-app id="resume-website" :theme="theme">
    <v-main max-width="100%">
      <v-container :max-width="APP_THEME">
        <PersonalInfoSection />
        <v-divider />
        <ResumeSections />
      </v-container>
    </v-main>
  </v-app>
</template>

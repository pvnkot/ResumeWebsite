<script setup lang="ts">
import { ref } from 'vue'
import PersonalInfoSection from '@/components/PersonalInfoSection.vue'
import ResumeSections from '@/components/ResumeSections.vue'

const theme = ref('light')
</script>

<template>
  <v-responsive max-height="100%" max-width="100%">
    <v-app id="resume-website" :theme="theme">
      <PersonalInfoSection />
      <ResumeSections />
    </v-app>
  </v-responsive>
</template>

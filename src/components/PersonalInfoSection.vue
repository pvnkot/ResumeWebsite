<script setup lang="ts">
// import { useGetResumeSection } from '@/stores/resume-sections'
import { CONTACT_EMAIL } from '@/constants'
</script>

<template>
  <v-responsive max-width="100%">
    <!-- <v-sheet style="justify-content: center; align-items: center" color="grey-lighten-4"> -->
    <v-avatar size="220" color="grey-darken-1"
      ><v-img src="@/assets/Santorini.jpg" alt="Pavan Kottapalli"
    /></v-avatar>
    <div>{{ CONTACT_EMAIL }}</div>
    <!-- </v-sheet> -->
    <v-divider />
  </v-responsive>
</template>

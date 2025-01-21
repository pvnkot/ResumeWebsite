<script setup lang="ts">
import { useGetResumeSection } from '@/stores/resume-sections'

const { resumeSections } = useGetResumeSection()
</script>

<template>
  <v-responsive max-height="100%" max-width="100%">
    <v-list>
      <v-list-item v-for="[id, title] in resumeSections" :key="id" :title="title" />
    </v-list>
  </v-responsive>
</template>

<script setup lang="ts">
import { useGetResumeSection } from '@/stores/resume-sections'

const { resumeSections } = useGetResumeSection()
</script>

<template>
  <v-list>
    <v-list-item v-for="[id, title] in resumeSections" :key="id" :title="title" />
  </v-list>
</template>

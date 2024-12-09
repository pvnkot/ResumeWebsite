<script setup lang="ts">
import { useGetResumeSection } from '@/stores/resume-sections'

const { resumeSections } = useGetResumeSection()
</script>

<template>
  <v-navigation-drawer>
    <v-sheet class="pa-4" color="grey-lighten-4">
      <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

      <div>pvkottapalli@gmail.com</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="[id, sectionName] in resumeSections"
        :key="id"
        :title="sectionName"
        link
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

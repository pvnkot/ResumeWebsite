<script setup lang="ts">
import { useGetResumeSection } from '@/stores/resume-sections'
import { CONTACT_EMAIL } from '@/constants'

const { resumeSections } = useGetResumeSection()
</script>

<template>
  <v-navigation-drawer>
    <v-sheet class="pa-4" color="grey-lighten-4">
      <v-avatar size="220" color="grey-darken-1"
        ><v-img src="@/assets/Santorini.jpg" alt="Pavan Kottapalli"
      /></v-avatar>
      <div>{{ CONTACT_EMAIL }}</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="[id, sectionName] in resumeSections"
        :key="id"
        :title="sectionName"
        link
      />
    </v-list>
  </v-navigation-drawer>
</template>

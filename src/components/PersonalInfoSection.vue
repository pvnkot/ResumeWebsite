<script setup lang="ts">
import { CONTACT_EMAIL } from '@/constants'
</script>

<template>
  <v-container max-width="70%">
    <v-row>
      <v-col align="center">
        <v-avatar size="220" color="grey-darken-1"
          ><v-img src="@/assets/Santorini.jpg" alt="Pavan Kottapalli"
        /></v-avatar>
        <h1>Pavan Kottapalli</h1>
        <v-row align="center">
          <p>631-974-0762</p>
          <v-spacer />
          <p>{{ CONTACT_EMAIL }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

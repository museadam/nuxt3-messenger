<template>
  <div>
    <div v-if="connectUsers" rounded="xl" class="pa-1" outlined="black" color="light-blue">
      <!-- <v-badge :color="userBadgeColor" :offset-y="22" :offset-x="24" overlap dot bottom>
          <v-list-item-avatar>
            <v-img :src="toPhoto" />
          </v-list-item-avatar>
        </v-badge> -->


      <h3 v-for="user in connectUsers">
        {{ user.name }} is Connected
      </h3>

    </div>
  </div>
</template>


<script setup lang="ts">
import { User } from '~/types/user'
defineProps<{
  connectUsers: User[]
}>()
</script>
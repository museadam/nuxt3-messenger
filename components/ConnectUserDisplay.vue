<template>
  <div>
    <div v-if="connectUsers" class=" flex flex-col">
      <!-- <v-badge :color="userBadgeColor" :offset-y="22" :offset-x="24" overlap dot bottom>
          <v-list-item-avatar>
            <v-img :src="toPhoto" />
          </v-list-item-avatar>
        </v-badge> -->

      <p>Chat Room: {{ room }}</p>

      <div class="flex">

        <h3 v-for="user in connectUsers">
          <div rounded="xl" class="p-1 outline flex" bg="gray-100" outlined="black" outline-color="light-blue">
            <p> {{ user.name }} is <span color="green">Connected </span></p>
          </div>
        </h3>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">
import { User } from '~/types/user'
const route = useRoute()
const roomStr = route.params.room.toString()
let room = ref(roomStr)
defineProps<{
  connectUsers: User[]
}>()
</script>
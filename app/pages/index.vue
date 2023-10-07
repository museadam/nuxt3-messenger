<template>
  <div class=" flex justify-center">

    <div class=" flex flex-col w-80% ">
      <div v-if="currentUser.id">

        <div v-for="room in rooms">
          <button @click="$router.push(`/rooms/${room}`)">
            {{ room }}
          </button>
        </div>
      </div>
      <div v-else>
        <SignUp />
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { currentUser } from '~/store/store';

const rooms = [
  'cia',
  'fbi',
  'nsa'
]


</script>

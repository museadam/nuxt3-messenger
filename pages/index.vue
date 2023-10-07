<template>
  <div class=" flex justify-center">

    <div class=" flex flex-col w-80% ">
      <div v-if="currentUser.id">

        <div v-for="room in rooms">
          <button @click="$router.push(`/rooms/${room.name}?id=${room.id}`)">
            {{ room.name }}
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
const getChat = await useChatRooms()
const rooms = getChat.value?.conversations


</script>

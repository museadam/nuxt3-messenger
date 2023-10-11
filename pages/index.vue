<template>
  <div class=" flex justify-center">

    <div class=" flex flex-col justify-center">
      <div v-if="currentUser?.id">

        <ul rounded-lg class="m-1 p-2 flex flex-col outline outline-purple-400">
          <h2>
            Chat rooms
          </h2>
          <div v-if="createRoom" class="flex">
            <input v-model="newRoom" placeholder="Name" />
            <button @click.once="createNewRoom">
              Create
            </button>
          </div>
          <li class="mb-6 li">
            <button class=" btn" @click="createRoom = !createRoom">
              Create a new room
            </button>

          </li>
          <li v-auto-animate class="li" v-for="room, i in rooms" :key="i">
            <div class="flex">
              <button class="btn" @click="$router.push(`/rooms/${room.name}?id=${room.id}`)">

                {{ room.name }}
              </button>
              <button v-if="currentUser.role === 'ADMIN'" @click="deleteRoom(i)" rounded="full"
                class="ml-5 p-1 hover:bg-light-900" color="red-4 hover:red-7 ">
                <div class="i-ooui:trash trash" />
              </button>
            </div>

          </li>

        </ul>

      </div>
      <div v-else>
        <SignUp />
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import type { Conversation, User } from "@prisma/client";

const currentUser: Ref<User> = useState('currentUser')
const getChat = await useChatRooms()
useState('rooms', () => getChat.value?.conversations ?? [])
let rooms: Ref<Conversation[]> = useState('rooms')

let createRoom = ref(false)
let newRoom = ref('')

async function createNewRoom() {
  createRoom.value = false

  const res = await useCreateRoom(newRoom.value)
  rooms.value.push(res.value?.conversation)
  newRoom.value = ''

}
async function deleteRoom(i: number) {
  const currentRoom = rooms.value[i]
  const id = currentRoom.id
  await useDeleteRoom(id)
  console.log(rooms.value)

  rooms.value.splice(i, 1)

  console.log(rooms)
}
</script>

<style>
.li {
  list-style: none;
  @apply m-2 p-3;

}

.trash {
  cursor: pointer;
}

.btn {
  all: unset;
  @apply bg-light-50 outline outline-black p-1;
}

.btn:hover {
  cursor: pointer;
  @apply bg-blueGray;

}
</style>
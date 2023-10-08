<template>
  <div class=" flex justify-center">

    <div class=" flex flex-col justify-center">
      <div v-if="currentUser.id">
        <ul rounded-lg class="m-1 p-2 flex flex-col   outline outline-purple-400">
          <h2>
            Chat rooms
          </h2>
          <li class="mb-6" @click="createRoom = !createRoom">
            Create a new room {{ createRoom }}
          </li>
          <li v-for="room in rooms" @click="$router.push(`/rooms/${room.name}?id=${room.id}`)">
            {{ room.name }}
          </li>

        </ul>
        <div v-if="createRoom" class="flex">
          <input v-model="newRoom" placeholder="Name" />
          <button @click="createNewRoom">
            Create
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
const currentUser = useState('currentUser')
const getChat = await useChatRooms()
const rooms = getChat.value?.conversations ?? []
let createRoom = ref(false)
let newRoom = ref('')
async function createNewRoom() {
  const res = await useCreateRoom(newRoom.value)
  console.log(res)
  console.log(toRaw(res.value.room))

  rooms.push(toRaw(res.value.room))
}
</script>

<style>
li {
  list-style: none;
  @apply bg-light-50 outline outline-black m-2 p-3;
}

li:hover {
  @apply bg-dark-50;
  cursor: pointer;
}
</style>
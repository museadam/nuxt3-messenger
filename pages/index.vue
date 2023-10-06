<template>
  <div class=" flex   justify-center">

    <div class=" flex flex-col w-80% ">
      <div v-for="room in rooms">
        <button @click="$router.push(`/rooms/${room}`)">
          {{ room }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const rooms = [
  'cia',
  'fbi',
  'nsa'
]


</script>

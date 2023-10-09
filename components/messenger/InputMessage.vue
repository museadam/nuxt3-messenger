<template>
  <div class="flex">
    <form class="flex w-100%">

      <input v-model="message" class="px-2 m-1 p-3 rounded" label="Create a message"
        @keyup.enter.prevent.stop.once="$emit('send')" />
      <button rounded="xl" class="p-2 m-2" @click.prevent.stop.once="$emit('send')">
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
let message = useState('message')
</script>

<style>
input {
  width: 100%;
}
</style>
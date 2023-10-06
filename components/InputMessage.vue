<template>
  <div class="flex">
    <form class="flex">

      <input v-model="message" class="px-2 m-1 p-3 rounded" label="Create a message" @keyup.enter="$emit('send')" />
      <button @click.prevent="$emit('send')">
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { message } from '~/store/store'
</script>

<style>
input {
  width: 100%;
}
</style>
<template>
  <div class="flex">
    <span class="flex-grow flex justify-between">

      <VInput v-model:inputValue="message" class=" flex-grow rounded" :label="'Type a message'"
        @keyup.enter="$emit('send')" />
      <div class=" justify-end">
        <button rounded="xl" class="p-2 m-2" @click="$emit('send')">
          Send
        </button>
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
let message: Ref<string> = useState('message')
</script>


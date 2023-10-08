<template>
  <div>
    <div>
      <p class="text-xs">
        {{ msg.createdAt }}
      </p>
    </div>
  </div>
  <div>

    <p>
      {{ msg.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Message } from '~/types/message'
defineProps<{
  msg: Message
}>()
</script>
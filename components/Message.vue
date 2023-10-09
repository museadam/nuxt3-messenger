<template>
  <div>
    <div>
      <p class="text-xs">
        {{ msg.createdAt }}
      </p>
    </div>
    <div>

      <p>
        {{ msg.text }}
      </p>
    </div>

    <!-- <div>

<caption>
  {{ msg.read }}
</caption>
</div> -->
  </div>
</template>

<script setup lang="ts">
import { Message } from '~/types/message'
defineProps<{
  msg: Message
}>()
</script>
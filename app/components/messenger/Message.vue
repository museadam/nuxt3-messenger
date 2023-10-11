<template>
  <div>
    <div>
      <p class="text-xs">

        {{ useMessageFormat(msg.createdAt) }}
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
const date = useDateFormat(new Date, "MM/DD/YY")
console.log(date.value)
</script>
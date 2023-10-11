<template>
  <div class="mb-1 mx-1">
    <div id="messages">
      <div v-for="msg in messages" :key="msg.id">
        <div>
          <div :id="`msg-${msg.id}`" v-if="msg.fromId !== currentUser.id" align="end" rounded="xl"
            class="msgCard rounded-br-0 " bg="green-200">
            <MessengerMessage :msg="msg" />
            <div color="black" class="flex align-start">

              <i class="iconFlag" />
            </div>

          </div>
          <div :id="`msg-${msg.id}`" v-else-if="msg.fromId === currentUser.id" rounded="xl" align="start"
            class="msgCard rounded-bl-0 " bg="light-blue-200">
            <MessengerMessage :msg="msg" />
            <div color="red" class="flex align-end ">
              <i class="iconDel" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User, Message } from "@prisma/client";

const currentUser: Ref<User> = useState('currentUser')
let messages: Ref<Message[]> = useState('messages')

const scrollToElement = async (id: string) => {
  await nextTick()

  const el = document.getElementById(`msg-${id}`);
  // console.log(el)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

watch(messages.value, async (msg) => {
  const length = msg.length ?? 0
  const currentMessage = msg[length - 1].id
  await scrollToElement(currentMessage)
})

onMounted(async () => {

  const length = messages.value.length ?? 0
  if (length > 0) {
    const currentMessage = messages.value[length - 1].id
    await scrollToElement(currentMessage)
  }
})
</script>

<style>
.msgCard {
  @apply pa-3 px-4 m-3 outline outline-black;
}

.iconDel {
  @apply pr-1 i-ooui:trash;
}

.iconFlag {
  @apply pl-1 i-ooui:flag-ltr;
}
</style>
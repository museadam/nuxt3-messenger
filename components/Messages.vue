<template>
  <div class="mb-1 mx-1">
    <div id="messages">
      <div v-for="msg in messages" :key="msg.id">
        <div>
          <div :id="`msg-${msg.id}`" v-if="msg.fromId !== currentUser.id" align="end" rounded="xl"
            class="pa-2 px-4 rounded-br-0 m-3 outline" bg="green" outline="black" text-light>
            <Message :msg="msg" />
            <!-- <v-btn color="red" icon small class="pa-1" @click="deleteMessage(index)">
                <v-icon small v-text="'mdi-delete'" />
              </v-btn> -->
          </div>
          <div :id="`msg-${msg.id}`" v-else-if="msg.fromId === currentUser.id" rounded="xl" align="start"
            class="pa-3 px-4 rounded-bl-0 m-3 outline outline-black" bg="light-blue" text-light>
            <Message :msg="msg" />
            <!-- 
              <v-btn color="black" small icon class="pa-1 pr-2">
                <v-icon small v-text="'mdi-flag'" />
              </v-btn> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentUser = useState('currentUser')
const messages = useState('messages')

const scrollToElement = async (id: string) => {
  await nextTick()

  const el = document.getElementById(`msg-${id}`);
  console.log(el)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

watch(messages.value, async (msg) => {
  console.log('watching u')
  const length = msg.length ?? 0
  console.log(msg)
  const currentMessage = msg[length - 1].id
  console.log(currentMessage)
  await scrollToElement(currentMessage)
})
onMounted(async () => {
  const length = messages.value.length ?? 0
  console.log(length)
  const currentMessage = messages.value[length - 1].id
  console.log(currentMessage)
  await scrollToElement(currentMessage)
})
</script>


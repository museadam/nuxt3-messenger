<template>
  <div class=" flex   justify-center">

    <div class=" flex flex-col w-80% ">
      <div>
        <p>
          You are {{ currentUser.name }}
        </p>
      </div>
      <div class="contained m-3  outline  rounded-lg p-2 outline-black">
        <Messages />

      </div>

      <!-- <v-row>

          <v-col cols="12">
            </v-col>
        </v-row> -->
      <div>

        <InputMessage @send="send" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { message, messages, currentUser } from '~/store/store';
import { Message } from '~/types/message';
const route = useRoute()
console.log(route.params.room)
// const user: User = ''

// const { $socket } = useNuxtApp()
const socket = useSocket()


const connected = ref(false)
const roomStr = route.params.room.toString()
let room = ref(roomStr)
// Custom
const user = currentUser
socket.emit('joined-room', room.value, user)
// const io = useIO()
// const socket2 = io('http://localhost:3069')

onMounted(() => {

  socket.on('updated-user-list', (users) => {
    console.log('connected users: ' + users)
    connected.value = socket.connected

    console.log('connected to room: ' + room.value)

  })


  socket.off('receive:private-chat')

  socket.on('receive:private-chat', (data) => {
    console.log(data)
    console.log('data')
    messages.value.push(data.message)

  })
  socket.on('disconnect', () => {
    connected.value = socket.connected
  })
})
onBeforeRouteLeave(() => {
  socket.emit('leave-room', room.value, user)

})
const send = async () => {
  console.log('sending')

  const from = currentUser.id
  const date = new Date().toDateString()
  const msg: Message = { id: `${messages.value.length + 1}`, room: room.value, text: message.value, from, date, }
  // messages.value.push(msg)
  const data = {
    message: msg,
    room: room.value,
  }
  socket.emit('send:private-chat', data)
  // await onSendMessage(msg)
  console.log('sent')
  message.value = ''

}


</script>
<style>
.contained {
  width: 100%;
  height: 80vh;
  max-height: 80vh;
  overflow-y: auto;
}
</style>

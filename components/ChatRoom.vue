<template>
  <div class="flex justify-center">

    <div class="flex flex-col w-80% ">
      <div>
        <ConnectUserDisplay :connect-users="connectUsers" />
      </div>
      <div class="contained m-3  outline  rounded-lg p-2 outline-black">
        <Messages />
      </div>
      <div>

        <InputMessage @send="send" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { message, messages, currentUser } from '~/store/store';
import { Message } from '~/types/message';
import { User } from '~/types/user';

const route = useRoute()
const connected = ref(false)
const roomStr = route.query.id?.toString()
let room = ref(roomStr)
let connectUsers = ref()
const user = currentUser.value
const socket = useSocket()
// const io = useIO()
// const socket2 = io('http://localhost:3069')
const id = room.value ?? ''
const df = await useRoomMessages(id)
console.log(df)
onMounted(() => {
  socket.emit('joined-room', room.value, user)

  socket.on('updated-user-list', (users: User[]) => {
    console.log('connected users: ' + users)
    connected.value = socket.connected
    connectUsers.value = users
    console.log('connected to room: ' + room.value)

  })

  socket.off('receive:private-chat')
  type DataObj = {
    message: Message
  }
  socket.on('receive:private-chat', (data: DataObj) => {
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
  const userId = currentUser.value.id
  // console.log(userId)

  const msg = message.value
  // console.log(msg)

  const convoId = room.value
  // console.log(convoId)

  await onSendMessage(msg, convoId, userId)
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

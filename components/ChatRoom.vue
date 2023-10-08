<template>
  <div class="grid grid-cols-12 justify-center">
    <div class="col-span-2 m-3  <sm:col-span-10">
      <ConnectUserDisplay :connect-users="connectUsers" />
    </div>
    <div class="flex flex-col col-span-8 <sm:col-span-10">

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
import { Message } from '~/types/message';
import { User } from '~/types/user';
// let message: Ref<string> = useState('message', () => ref(''))

const route = useRoute()
const connected = ref(false)
const roomStr = route.query.id?.toString()
const currentUser = useState('currentUser')
let room = ref(roomStr)
console.log(room)
console.log('room')
let connectUsers = ref()
const user = currentUser.value
const id = room.value ?? ''
const getMsgs = await useRoomMessages(id)
const setMessages = ref(getMsgs)
useState('messages', () => setMessages)

const messages = useState<Ref<Message[]>>('messages')

console.log(messages)
// console.log(toRaw(messages.value))
const socket = useSocket()
// const io = useIO()
// const socket2 = io('http://localhost:3069')
onMounted(() => {
  socket.emit('joined-room', room.value, user)

  socket.on('updated-user-list', (users: User[]) => {
    // console.log('connected users: ' + users)
    connected.value = socket.connected
    connectUsers.value = users
    console.log('connected to room: ' + room.value)
  })

  socket.off('receive:private-chat')
  type DataObj = {
    message: Message
  }
  socket.on('receive:private-chat', (data: DataObj) => {
    // console.log(data)
    // console.log('data')
    // console.log('receiving private-chat')
    // // const msgs = [...messages.value]
    // console.log(messages)
    messages.value.push(data.message)

  })
  socket.on('disconnect', () => {
    connected.value = socket.connected
  })
})
onBeforeRouteLeave(() => {
  socket.emit('leave-room', room.value, user)
  clearNuxtState('messages')
  clearNuxtState('message')
})
const send = async () => {
  console.log('sending')
  const userId = currentUser.value.id
  // console.log(userId)

  const msg = useState('message')
  console.log(msg)

  const convoId = room.value
  // console.log(convoId)

  await onSendMessage(msg, convoId, userId)
  clearNuxtState('message')
  console.log('sent')

}


</script>
<style>
.contained {
  width: 100%;
  height: 60vh;
  max-height: 60vh;
  overflow-y: auto;
}

@media (max-width: 639.9px) {
  .contained {
    height: 40vh;
    max-height: 40vh;
  }
}
</style>

<template>
  <div class="grid grid-cols-12 justify-center">
    <div class="col-span-2 m-3  <sm:col-span-10">
      <MessengerConnectUserDisplay :connect-users="connectUsers" :room-details="roomDetails" />
    </div>
    <div class="flex flex-col col-span-8 <sm:col-span-10">

      <div class="contained">
        <MessengerMessages />
      </div>
      <div>

        <MessengerInputMessage @send="send" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Message as Msg } from '~/types/message';
import { BasicUser, RoomDetail } from '~/types/user';
// let message: Ref<string> = useState('message', () => ref(''))
import type { Conversation, Message, User } from "@prisma/client";
useState('message', () => '')

let route = useRoute()
const connected = ref(false)
const roomStr = ref()
const currentUser: Ref<User> = useState('currentUser')
const rooms: Ref<Conversation[]> = useState('rooms')
const room: Ref<string> = ref(route.query.id?.toString() ?? '')
console.log(room)
console.log('room')
if (room.value === '') {
  navigateTo("/");

}

const roomIndex = rooms.value.findIndex(obj => obj.id === room.value);

const roomDetails: Partial<RoomDetail> = reactive(rooms.value.filter((roo: Conversation) => roo.id === room.value)[0])


// console.log(roomDetails)
// console.log('roomDetails')

let connectUsers: Ref<BasicUser[]> = ref([])
const user: User = currentUser.value
const theUsers = roomDetails.users ?? []
const checkIfMember = theUsers.filter((aUser: BasicUser) => aUser.id === user.id)[0] ?? false
// console.log(checkIfMember)

if (!checkIfMember) {
  rooms.value[roomIndex].users?.push({ id: user.id, name: user.name })

  const userId = user.id
  const roomId = room.value
  await useAddNewMember(userId, roomId)
  // connectUsers.value.push({ id: user.id, name: user.name })
}

const id = room.value ?? ''
const getMsgs = await useRoomMessages(id)
const setMessages = ref(getMsgs)
useState('messages', () => setMessages)


const messages: Ref<Message[]> = useState('messages')

// console.log(messages)
// console.log(toRaw(messages.value))
const socket = useSocket()
// const io = useIO()
// const socket2 = io('http://localhost:3069')
onMounted(() => {
  socket.emit('joined-room', room.value, user)

  socket.on('updated-user-list', (users: User[]) => {
    // console.log('connected users: ' + users)
    console.log('updating connected users')
    let detailsInRoomYet = false
    // let newMembers = []
    connected.value = socket.connected
    for (let i = 0; i < users.length; i++) {
      console.log('user: ' + users[i].name)

      const foundDetails = roomDetails.users?.filter((roomUser) => roomUser.id === users[i].id)[0] ?? false
      if (foundDetails) {
        detailsInRoomYet = true
      } else {
        rooms.value[roomIndex].users?.push(users[i])
      }
    }
    // if (!detailsInRoomYet) {
    //   roomDetails.users?.push( ...newMembers)
    // }


    connectUsers.value = users
    console.log('connected to room: ' + room.value)
  })

  socket.off('receive:private-chat')
  type DataObj = {
    message: Msg
  }
  socket.on('receive:private-chat', (data: DataObj) => {
    // console.log(data)
    // console.log('data')
    console.log('receiving private-chat')
    // // const msgs = [...messages.value]
    // console.log(messages)
    messages.value.push(data.message)

  })
  socket.on('disconnect', () => {
    connected.value = socket.connected
  })
})
let router = useRouter()

watch(router.currentRoute, () => {
  console.log('route leave')
  socket.emit('leave-room', room.value, user)
  clearNuxtState('messages')
  clearNuxtState('message')
})
// onBeforeRouteLeave(() => {
//   console.log('route leave')
//   socket.emit('leave-room', room.value, user)
//   clearNuxtState('messages')
//   clearNuxtState('message')
// })
let sending = false
const send = async () => {
  console.log('sending')
  const userId = currentUser.value.id
  // console.log(userId)

  const msg: Ref<string> = useState('message')
  console.log(msg)

  const convoId = room.value
  // console.log(convoId)
  if (!sending) {
    sending = true

    await onSendMessage(msg.value, convoId, userId)
    clearNuxtState('message')
    console.log('sent')
    sending = false
  } else {
    console.log('still sending...')

  }
}


</script>
<style>
.contained {
  width: 100%;
  height: 60vh;
  max-height: 60vh;
  overflow-y: auto;
  @apply m-3 outline rounded-lg p-2 outline-black;
}

@media (max-width: 639.9px) {
  .contained {
    height: 40vh;
    max-height: 40vh;
  }
}
</style>

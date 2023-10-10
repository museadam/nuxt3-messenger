
<template>
  <header>
    <nav v-auto-animate class="flex mb-10">

      <div @click="open" color="green" class="i-ooui:menu hover:cursor-pointer" />
      <!-- <i class="text-white  sm:icon-sm md:icon-md" />
      </div> -->
      <ul v-click-outside="onClickOutside" v-if="navShow" class="dropdown " bg="white">
        <li class="dropdown-items" @click="navShow = false">
          <p color="red"> CLOSE</p>
        </li>
        <li class="dropdown-items" @click="$router.push('/')">
          Home
        </li>
        <div v-if="currentUser?.id">
          <li class="chatsTitle">
            <h4>Chat Rooms</h4>
          </li>
          <div v-if="rooms" class="chatrooms">
            <li v-for="room in rooms" class="dropdown-items" @click="$router.push(`/rooms/${room.name}?id=${room.id}`)">
              <div class="flex">
                <div class="i-ooui:message" />
                <p>{{ room.name }}</p>
              </div>
            </li>
          </div>
        </div>
        <div v-if="currentUser?.id">
          <li class="btmItem dropdown-items" color="red" @click="
            $router.push('/login')
            ">
            <div>Sign out</div>
          </li>
        </div>
        <div v-else>
          <div @click="$router.push('/login')">
            <li class=" dropdown-items">Login</li>
          </div>
          <div @click="$router.push('/sign-up')">
            <li class="dropdown-items">Join</li>
          </div>
        </div>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { Conversation, User } from '@prisma/client';

let navShow = ref(false)
const currentUser: Ref<User> = useState('currentUser')
const rooms: Ref<Conversation[]> = useState('rooms')

const open = () => {

  navShow.value = !navShow.value

}

let router = useRouter()

watch(router.currentRoute, () => {
  navShow.value = false
})



function onClickOutside() {
  navShow.value = false
}
</script>

<style>
.dropdown {
  @apply pl-0;
  max-width: 300px;
  height: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 20;
  bottom: 0;
  left: 0;
}

.dropdown-items {
  padding: 12px 18px;
  text-decoration: none;
  display: block;
}

.dropdown-items:hover {
  background: #3081ed;
}

.chatrooms {
  @apply h-45 max-h-45 overflow-y-auto;
}

.chatsTitle {
  @apply m-2 underline;
}

.btmItem {
  @apply fixed bottom-0 m-2;
}
</style>
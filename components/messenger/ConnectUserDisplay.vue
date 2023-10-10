<template>
  <div>
    <div v-auto-animate v-if="connectUsers" rounded="xl" class=" flex flex-col outline m-1 p-1" bg="gray-100"
      outline-color="light-blue">
      <!-- <v-badge :color="userBadgeColor" :offset-y="22" :offset-x="24" overlap dot bottom>
          <v-list-item-avatar>
            <v-img :src="toPhoto" />
          </v-list-item-avatar>
        </v-badge> -->

      <p>Lobby {{ room }}</p>

      <div v-auto-animate class="">

        <h3 v-auto-animate v-for="user in roomDetails.users">
          <div v-if="useFilterConnected(user.id, connectUsers)" rounded="sm" class="userDiv " outline="green">

            <p> {{ user.name }} is <span color="green">Connected
              </span></p>
          </div>

          <div v-else rounded="sm" class="userDiv " outline="black">

            <p> {{ user.name }} is <span color="red">Not Connected </span></p>

          </div>
        </h3>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">
import { BasicUser, RoomDetail } from '~/types/user'

const route = useRoute()
const roomStr = route.params.room.toString()
// const rooms = useState('rooms')
let room = ref(roomStr)

defineProps<{
  connectUsers: BasicUser[]
  roomDetails: Partial<RoomDetail>

}>()
const useFilterConnected = (id: string, users: BasicUser[]) => {
  return users.filter((user: BasicUser) => user.id === id)[0]
}

// console.log(rooms.users)


// console.log(us)
</script>

<style>
.userDiv {
  @apply p-2 outline flex m-3;


}

.userDiv p {
  font-size: 0.7rem;

}
</style>
<template>
  <div>
    <div v-auto-animate v-if="connectUsers" rounded="xl" class=" flex flex-col outline m-1 p-1" bg="gray-100"
      outline-color="light-blue">
      <h3 class="flex ml-1"> Room {{ room }} </h3>

      <div v-auto-animate class="">
        <p class="underline ml-1">Members </p>

        <div v-auto-animate v-for="user in roomDetails.users">
          <div v-if="useFilterConnected(user.id, connectUsers)" rounded="sm" class="userDiv " outline="green">

            <p> {{ user.name }} is <span color="green">Connected
              </span></p>
          </div>

          <div v-else rounded="sm" class="userDiv " outline="black">

            <p> {{ user.name }} is <span color="red">Not Connected </span></p>

          </div>
        </div>
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

</script>

<style>
.userDiv {
  @apply p-2 outline flex m-3;


}

.userDiv p {
  font-size: 0.7rem;

}
</style>
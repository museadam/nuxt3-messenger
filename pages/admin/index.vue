<template>
  <div>
    <div v-for="user, i in users" class="outline outline-black">
      <div>
        <p>{{ user.name }}</p>
        <p>{{ user.id }}</p>
      </div>
      <button @click="deleteUser(i)" rounded="full" class="ml-5 p-1 hover:bg-light-900" color="red-4 hover:red-7 ">
        <div class="i-ooui:trash  cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@prisma/client";

const users: Ref<User> = ref([])
// const { data: allUsers } = await useAsyncData('users', async () => {

const getUsers = await useGetUsers()

//   return getUsers
// })
async function deleteUser(i: number) {
  await useDeleteUser(users.value[i].id)
  console.log(users.value)
  users.value.splice(i, 1)
}

onMounted(() => {
  // console.log(toRaw(getUsers.value.users))
  // console.log('toRaw(allUsers.value)')

  const val = toRaw(getUsers.value.users)
  users.value = [...val]

})
</script>
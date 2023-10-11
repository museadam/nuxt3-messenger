<template>
  <div class="grid grid-cols-12 ">
    <div v-for="user, i in users" class="outline outline-black col-span-3 m-1 p-2 <sm:col-span-12 relative">
      <div>
        <p class="">{{ user.name }}</p>

        <p>{{ user.email }}</p>
        <p>{{ user.id }}</p>

      </div>
      <button @click="deleteUser(i)" rounded="full" class="m-1 p-1 top-0 right-0 absolute  hover:bg-light-900 "
        color="red-4 hover:red-7 ">
        <div class="i-ooui:trash  cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@prisma/client";
const currentUser: Ref<User> = useState('currentUser')
if (currentUser.value.role !== "ADMIN") {
  navigateTo("/");
}
// const users: Ref<User> = ref([])
// const { data: allUsers } = await useAsyncData('users', async () => {

const users: User[] = await useGetUsers()

//   return getUsers
// })
async function deleteUser(i: number) {
  await useDeleteUser(users[i].id)
  console.log(users)
  users.splice(i, 1)
}

onMounted(() => {
  // console.log(toRaw(getUsers.value.users))
  // console.log('toRaw(allUsers.value)')

  // const val = toRaw(getUsers.value.users)
  // users.value = [...val]

})
</script>
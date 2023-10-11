<template>
  <div>
    <div v-for="user in users" class="outline outline-black">
      <p>{{ user.name }}</p>
      <p>{{ user.id }}</p>

    </div>
  </div>
</template>

<script setup lang="ts">

const users = ref([])
const { data: allUsers } = await useAsyncData('users', async () => {

  const getUsers = await useGetUsers()

  return getUsers
})
onMounted(() => {
  console.log(toRaw(allUsers.value.users))
  console.log('toRaw(allUsers.value)')

  const val = toRaw(allUsers.value.users)
  users.value = [...val]

})
</script>
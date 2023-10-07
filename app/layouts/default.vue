<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { currentUser } from '~/store/store';
const { data: user } = await useAsyncData('user', () => {
  const getUser = localStorage.getItem('User')
  console.log(getUser)

  if (getUser) {
    const decode = JSON.parse(getUser)
    console.log(decode)
    return decode
  }
})
onMounted(() => {
  // console.log(toRaw(user.value))
  const val = toRaw(user.value)
  currentUser.value = { ...val }

})

</script>

<style>
body {
  overflow-y: hidden;
}
</style>
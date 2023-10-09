<template>
  <div>
    <LayoutNavDrawer />
    <slot />
  </div>
</template>

<script setup lang="ts">
import '../style.css'

const getCookie = useCookie('user')

const key = getCookie.value ?? false
const id = key.id ?? false
let user
if (id) {
  user = await useGetUser(id)
}
if (user) {
  useState('currentUser', () => user.value.user)
}
const getChat = await useChatRooms()
useState('rooms', () => getChat.value?.conversations ?? [])


</script>


<template>
  <div>
    <LayoutNavDrawer />
    <slot />
  </div>
</template>

<script setup lang="ts">
import '../style.css'
import { User } from "@prisma/client";
type KeyObj = {
  id: string
}
const getCookie: Ref<KeyObj> = useCookie("user");
const id: Ref<string> = ref(getCookie?.value?.id ?? false);
// console.log(id)
let user: Ref<User>;
if (id?.value) {
  const res = await useGetUser(id?.value);
  user = res
}
if (user?.value) {
  useState("currentUser", () => user.value);
}
const getChat = await useChatRooms();
console.log(getChat)
useState("rooms", () => getChat.value?.conversations ?? []);
</script>


<template>
  <div>
    <LayoutNavDrawer />
    <slot />
  </div>
</template>

<script setup lang="ts">
import '../assets/style.css'
import { User } from "@prisma/client";

interface idObj {
  id?: string;
};
const getCookie: Ref<idObj> = useCookie("user");
// console.log(getCookie.value);

// const id: Ref<string> = ref(getCookie?.value?.id ?? false);
// console.log(id)
const currentUser: Ref<User> = useState("currentUser")
if (getCookie?.value?.id && !currentUser?.value?.id) {
  const user: Ref<User> = await useGetUser(getCookie.value.id);
  if (user?.value) {
    useState("currentUser", () => user.value);
  }
}

const getChat = await useChatRooms();
console.log(getChat);
useState("rooms", () => getChat.value?.conversations ?? []);
</script>


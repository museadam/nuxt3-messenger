<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { currentUser } from '~/store/store';
// const { data } = await useAsyncData(async () => {
//   // console.log('useAsyncData')

//   const getUserInfo = await useGetUser(id)
//   console.log(getUserInfo)
//   return getUserInfo // await useGetUser()
// })
// const getStorage = () => {
//   const getLSUser = localStorage.getItem("User");
//   console.log(getLSUser);
//   console.log("getUserrr");

//   let id;
//   if (getLSUser) {
//     const parsed = JSON.parse(getLSUser);
//     id = parsed.id;
//     console.log(id);
//     return id

//   } else {
//     return
//   }
// }
const getCookie = useCookie('user')
const key = toRaw(getCookie.value) ?? ''
const id = key.id

// const { data } = useNuxtData(id)
// console.log(data);

const user = await useGetUser(id)
console.log(user);
console.log(toRaw(user.value))
const val = toRaw(user.value.user)
currentUser.value = { ...val }

// onMounted(async () => {


// })

</script>


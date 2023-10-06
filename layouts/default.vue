<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { currentUser } from '~/store/store';

const socket = useSocket()
const random = Math.floor((Math.random() * 100) + 1)
const id = random.toString();
currentUser.name = 'G' + id
currentUser.id = id
onBeforeMount(() => {

})
</script>

<style>
body {
  overflow-y: hidden;
}
</style>
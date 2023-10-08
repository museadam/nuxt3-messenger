
import log from '~/server/middleware/log';
<template>
  <header>
    <nav class="flex">
      <div @click="open" :class="[!navShow ? 'i-ooui:menu' : '', 'i-ooui:close']" color="green"
        class="justify-center  order-1 m-1 p-2 hover:cursor-pointer" />
      <!-- <i class="text-white  sm:icon-sm md:icon-md" />
      </div> -->
      <div v-if="navShow">

        <a class="noTextDec text-black dark:text-light-50" href="/login">
          <li class="dropdown-items">Login</li>
        </a>
        <a class="noTextDec text-black dark:text-light-50" href="/signup">
          <li class="dropdown-items">Join</li>
        </a>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
let navShow = ref(false)
const open = () => {

  navShow.value = !navShow.value

}
</script>

<style>
.dropdown {
  max-width: 300px;
  height: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 20;
  bottom: 0;
  right: 0;
}

.dropdown-items {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-items:hover {
  background: #3081ed;
}
</style>
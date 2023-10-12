<template>
  <div class="">
    <!-- partial:index.partial.html -->
    <section class="login" id="login">
      <div class="head">
        <h1 class="company">Login</h1>
      </div>
      <div class="form">
        <form class="grid">
          <VInput :label="'Email'" type="text" placeholder="Email" id="email" required v-model:inputValue="email" />

          <button @click.prevent="login" class="btn-login mt-3" id="do-login">Submit</button>
          <!-- <a href="/" class="forgot">Forgot?</a> -->
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@prisma/client";

import { APIResponse } from '~/types/api'
let email: string;


// const emailTester = new RegExp(email)
async function login() {
  try {
    email.toLowerCase();
    const loginResponse: APIResponse<User> = await useLogin(email)
    if (loginResponse.status === 200) {
      const user: Ref<{ id: string }> = useCookie('user')
      if (user?.value?.id) {
        user.value.id = loginResponse.data.id
      } else {
        useSetCookie('user', {
          id: loginResponse.data?.id
        })
      }
      useState('currentUser', () => loginResponse.data)
      navigateTo('/')
    }
  } catch (err) {
    console.error(err);
  }
}
</script>
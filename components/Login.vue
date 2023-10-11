<template>
  <div>
    <!-- partial:index.partial.html -->
    <section class="login" id="login">
      <div class="head">
        <h1 class="company">Login</h1>
      </div>
      <div class="form">
        <form>
          <input type="text" placeholder="Email" class="text" id="email" required v-model="email" />

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

    const loginResponse: APIResponse<User> = await $fetch('/api/v1/users/login', {
      method: "POST",
      body: {
        email,
      },
    })
    if (loginResponse.status === 200) {
      const user = useCookie(
        'user',
        {
          default: () => ({ id: loginResponse.data?.id }),
          watch: false
        }
      )
      const currentUser = useState('currentUser', () => loginResponse.data)

    }
  } catch (err) {
    console.error(err);
  }
}
</script>
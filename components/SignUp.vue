<template>
  <div>
    <!-- partial:index.partial.html -->
    <section class="login" id="login">
      <div class="head">
        <h1 class="company">Sign Up</h1>
      </div>
      <p class="msg">Create Your Login</p>
      <div class="form">
        <form>
          <input type="text" placeholder="First name" class="text" id="firstName" required v-model="fName" /><br />
          <input type="text" placeholder="Last name" class="text" id="lastName" required v-model="lName" /><br />
          <input type="text" placeholder="Email" class="text" id="email" required v-model="email" /><br />

          <button rounded="xl" class="p-2 mt-1" bg="green" @click.once.prevent="signUp" id="do-login">Submit</button>
          <!-- <a href="/" class="forgot">Forgot?</a> -->
        </form>
        <div>
          <button rounded="xl" class="p-2 mt-1" bg="blue" @click="$router.push('/login')">Login</button>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@prisma/client";

import { APIResponse } from '~/types/api'


let name: string;
let email: string;
let lName: string;
let fName: string;

// const emailTester = new RegExp(email)
const signUp = async () => {
  name = fName + ' ' + lName;
  try {
    const firstName = fName;
    const lastName = lName;
    email.toLowerCase();

    const signUpResponse: APIResponse<User> = await $fetch('/api/v1/users/sign-up', {
      method: "POST",
      body: {
        name,
        firstName,
        lastName,
        email,
      },
    })
    // console.log(signUpResponse.status)

    if (signUpResponse.status === 200) {
      const user = useCookie(
        'user',
        {
          default: () => ({ id: signUpResponse.data?.id }),
          watch: false
        }
      )
      const currentUser = useState('currentUser', () => signUpResponse.data)
      // console.log(currentUser.value)
      // localStorage.setItem('User', JSON.stringify({
      //   id: signUpResponse.data?.id
      // }))

    }
  } catch (err) {
    console.error(err);
  }
}
</script>
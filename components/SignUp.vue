<template>
  <div>
    <!-- partial:index.partial.html -->
    <section class="login" id="login">
      <div class="head">
        <h1 class="company">Sign Up</h1>
      </div>
      <p class="msg">Create Your Login</p>
      <div class="form card">
        <form class="card">
          <VInput :label="'First Name'" type="text" placeholder="First name" id="firstName" required
            v-model:inputValue="fName" />
          <VInput :label="'Last Name'" type="text" placeholder="Last name" id="lastName" required
            v-model:inputValue="lName" />
          <VInput :label="'Email'" type="text" placeholder="Email" id="email" required v-model:inputValue="email" />

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



let email: Ref<string> = ref('');
let lName: Ref<string> = ref('');
let fName: Ref<string> = ref('');

// const emailTester = new RegExp(email)

const signUp = async () => {
  try {
    const mail = email.value.toLowerCase();
    const name = fName.value + ' ' + lName.value;
    const signUpResponse = await useSignUp({
      name,
      firstName: fName.value,
      lastName: lName.value,
      email: mail,
    })
    if (signUpResponse.status === 200) {
      const user: Ref<{ id: string }> = useCookie('user')
      if (user?.value?.id) {
        user.value.id = signUpResponse.data.id
      } else {
        useSetCookie('user', {
          id: signUpResponse.data?.id
        })
      }
      useState('currentUser', () => signUpResponse.data)
      navigateTo('/')
    }
  } catch (err) {
    console.error(err);
  }
}
</script>

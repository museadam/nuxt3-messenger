<template>
  <div ref="card" class="mb-1 mx-1 ">
    <div>
      <div v-for="(msg, index) in messages" :key="index">
        <div>
          <div v-if="msg.from !== currentUser.id" align="end" rounded="xl" class="pa-2 px-4 rounded-br-0 m-3 outline"
            bg="green" outline="black" text-light>
            <Message :msg="msg" />
            <!-- <v-btn color="red" icon small class="pa-1" @click="deleteMessage(index)">
                <v-icon small v-text="'mdi-delete'" />
              </v-btn> -->
          </div>
          <div v-else-if="msg.from === currentUser.id" rounded="xl" align="start"
            class="pa-3 px-4 rounded-bl-0 m-3 outline outline-black" bg="light-blue" text-light>
            <Message :msg="msg" />
            <!-- 
              <v-btn color="black" small icon class="pa-1 pr-2">
                <v-icon small v-text="'mdi-flag'" />
              </v-btn> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { messages, currentUser } from '~/store/store'
</script>
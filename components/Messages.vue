<template>
  <div ref="card" class="mb-1 mx-1 ">
    <div>
      <div v-for="(msg, index) in messages" :key="index">
        <div v-if="messages[index] !==
          messages[messages.length - 1]
          ">
          <div v-if="msg.from !== currentUser.id" align="end" rounded="xl" class="pa-2 px-4 rounded-br-0 m-1" outlined
            bg="green">
            <div>
              <div>
                <p class="text-xs">
                  {{ msg.date }}
                </p>
              </div>
            </div>
            <p class="blue--text">
              {{ msg.text }}
            </p>

            <!-- <v-btn color="red" icon small class="pa-1" @click="deleteMessage(index)">
                <v-icon small v-text="'mdi-delete'" />
              </v-btn> -->
          </div>
          <div v-else-if="msg.from === currentUser.id" rounded="xl" align="start" class="pa-3 px-4 rounded-bl-0 m-1"
            outlined bg="light-blue ">
            <div>
              <div>
                <p class="text-xs">
                  {{ msg.date }}
                </p>
              </div>
            </div>
            <p>
              {{ msg.text }}
            </p>
            <!-- 
              <v-btn color="black" small icon class="pa-1 pr-2">
                <v-icon small v-text="'mdi-flag'" />
              </v-btn> -->
          </div>
        </div>
        <div v-if="messages[index] ===
          messages[messages.length - 1]
          " ref="bottomMessage">
          <div v-if="msg.from !== currentUser.id" rounded="xl" align="end" class="pa-2 px-4 rounded-br-0 m-1" outlined
            bg="green lighten-4">
            <div>
              <div>
                <p class="text-xs">
                  {{ msg.date }}
                </p>
              </div>
            </div>
            <p class="blue--text">
              {{ msg.text }}
            </p>

            <!-- <v-btn color="red" class="pa-1" icon small @click="deleteMessage(index)">
                <v-icon small v-text="'mdi-delete'" />
              </v-btn> -->
          </div>
          <div v-else-if="msg.from === currentUser.id" rounded="xl" align="start" class="pa-3 px-4 rounded-bl-0 m-1"
            outlined bg="light-blue lighten-4">
            <div>
              <div>
                <p class="text-xs">
                  {{ msg.date }}
                </p>
              </div>
            </div>
            <p>
              {{ msg.text }}
            </p>

            <!-- <v-btn color="black" small class="pa-1 pr-2" icon>
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
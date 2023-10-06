<!-- <template>
  <v-col cols="12" lg="7" md="10">
    <v-card v-if="toName" rounded="xl" class="pa-1" outlined color="light-blue lighten-3">
      <v-list-item two-line>
        <v-badge :color="userBadgeColor" :offset-y="22" :offset-x="24" overlap dot bottom>
          <v-list-item-avatar>
            <v-img :src="toPhoto" />
          </v-list-item-avatar>
        </v-badge>

        <v-list-item-content>
          <v-list-item-title class v-text="toName" />

          <v-list-item-subtitle v-if="toUserOnline">
            Connected
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action v-if="job !== false">
          <div class="contracts-btn">
            <v-menu transition="scroll-x-transition" :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma-2" v-bind="attrs" color="accent" v-on="on">
                  <v-icon> mdi-account-cash </v-icon>
                </v-btn>
              </template>
              <v-card v-if="job !== false" class="overflow-x-hidden" height="60vh">
                <v-card-title> Details </v-card-title>
                <v-row v-if="length > 1" justify="center">
                  <v-col>
                    <div class="text-center">
                      <v-pagination v-model="page" :length="length" :total-visible="4" />
                    </div>
                  </v-col>
                </v-row>
                <v-divider />
                <job-request-snipit :job="job" />
                <create-contract :job="job" :slugs="slugs" />
              </v-card>
              <v-card v-else class="keep-all-word-break" right>
                <v-card-title>
                  Select a conversation to view the contract
                </v-card-title>
              </v-card>
            </v-menu>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </v-col>
</template> -->
<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="is-size-4 has-text-weight-light">&#x1F52C; KIKO APP</span>
        </b-navbar-item>
      </template>
      <template #start> </template>

      <template #end>
        <b-navbar-item tag="div" v-if="user.attributes">
          <small
            >Angemeldet als <strong>{{ user.attributes.email }}</strong></small
          >
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button type="light" @click="signOut">
              <span>&#x1F44B; Abmelden</span>
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import { Auth } from "@aws-amplify/auth";

export default {
  components: {},
  data() {
    return {
      user: {},
    };
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser().then((user) => {
      this.user = user;
    });
  },
  methods: {
    async signOut() {
      await Auth.signOut();
    },
  },
};
</script>
<style lang="scss"></style>

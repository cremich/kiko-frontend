<template>
  <div>
    <b-navbar :mobile-burger="isAuthenticated">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="is-size-4 has-text-weight-light">&#x1F52C; KIKO APP</span>
        </b-navbar-item>
      </template>
      <template #start> </template>

      <template #end v-if="userAttributes">
        <b-navbar-item tag="div">
          <small
            >Angemeldet als <strong>{{ userAttributes.email }}</strong></small
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
      user: null,
    };
  },
  computed: {
    isAuthenticated() {
      return this.user !== null;
    },
    userAttributes() {
      return this.user && this.user.attributes;
    },
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.user = user;
      })
      .catch(() => {
        this.user = null;
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

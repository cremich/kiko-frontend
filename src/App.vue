<template>
  <div id="app" class="has-background-light">
    <router-view />
  </div>
</template>

<script>
import { Hub } from "aws-amplify";

export default {
  name: "app",
  beforeCreate() {
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        this.$router.push("/dashboard");
      }
      if (payload.event === "signOut") {
        this.$router.push("/auth/login");
      }
    });
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>

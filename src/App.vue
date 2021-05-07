<template>
  <div id="app">
    <main class="has-background-light">
      <router-view />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>&copy; {{ year }}</strong> by <a href="https://cremich.dev">cremich.dev</a>. The source code is
          licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. View on
          <a href="https://github.com/cremich/kiko-backend">GitHub</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { Hub } from "@aws-amplify/core";

export default {
  name: "app",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
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

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  // We have to define a flex-basis height in order for child elements to be 100% height.
  // https://github.com/philipwalton/flexbugs/issues/197
  & > main {
    flex: 1 0 0;
  }
}
</style>

<template>
  <section>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container">
          <p class="title is-size-1 has-text-weight-light">&#x1F52C; KIKO APP</p>
          <router-view></router-view>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>&copy; {{ year }}</strong> by <a href="https://cremich.dev">cremich.dev</a>. The source code is
          licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. View on
          <a href="https://github.com/cremich/kiko-backend">GitHub</a>.
        </p>
      </div>
    </footer>
  </section>
</template>
<script>
export default {
  name: "auth-layout",
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
};
</script>
<style></style>

<template>
  <div class="authentication has-background-primary has-text-white">
    <h1 class="is-size-1 has-text-weight-light">&#x1F52C; KIKO APP</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "auth-layout",
};
</script>
<style lang="scss">
.authentication {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

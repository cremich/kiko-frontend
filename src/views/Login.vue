<template>
  <amplify-authenticator username-alias="email">
    <amplify-sign-in header-text="" slot="sign-in" hide-sign-up="true" username-alias="email"></amplify-sign-in>
  </amplify-authenticator>
</template>

<script>
export default {
  name: "login",
};
</script>

<style>
amplify-authenticator {
  --container-height: initial;
  --amplify-primary-color: #00d1b2;
}
</style>

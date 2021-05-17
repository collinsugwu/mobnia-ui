<template>
  <v-container>
      <h1>Login</h1>
      <auth-form buttonText="login" :submitForm="loginUser" />
  </v-container>
</template>

<script>

import AuthForm from '../components/auth/AuthForm.vue';

  export default {
    components: {
      AuthForm
    },
    methods: {
     async loginUser(loginInfo) {
       try {
          await this.$auth.loginWith('local', { data: loginInfo })
           this.$store.dispatch('notice/setNotice', {text: `Thanks for signing in, ${this.$auth.user.name}`})
          this.$router.push('/dashboard')
       } catch (error) {
         this.$store.dispatch('notice/setNotice', {color: 'red', text: 'There was an issue signing in.  Please try again.'})
       }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
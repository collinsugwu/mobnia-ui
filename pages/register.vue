<template>
  <v-container>
      <h1>Register</h1>
      <auth-form
       buttonText="sign up" 
        :submitForm="registerUser"
        hasFirstName="true"
        hasLastName="true"
        hasPasswordConfirmation="true" />
  </v-container>
</template>

<script>

import AuthForm from '../components/auth/AuthForm.vue';

  export default {
    components: {
      AuthForm,
    },
    methods: {
     async registerUser(signupInfo) {
       try {
          await this.$axios.post('/register', signupInfo);
          await this.$auth.loginWith('local', {
          data: signupInfo
          })
          this.$store.dispatch('notice/setNotice', {text: `Thanks for signing up, ${this.$auth.user.name}`})
          this.$router.push('/dashboard')
       } catch (error) {
         this.$store.dispatch('notice/setNotice', {color: 'red', text: 'There was an issue signing up.  Please try again.'})
       }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
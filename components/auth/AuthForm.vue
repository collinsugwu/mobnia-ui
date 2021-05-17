<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.first_name" 
                  label="First Name" 
                  :rules="[required('first name')]"
                  v-if="hasFirstName" />
    
    <v-text-field v-model="userInfo.last_name" 
                  label="Last Name" 
                  :rules="[required('last name')]"
                  v-if="hasLastName" />

    <v-text-field v-model="userInfo.email" 
                  label="Email" 
                  :rules="[required('email'), emailFormat()]"/>

    <v-text-field v-model="userInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'" 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('password'), minLength('password', 8)]"
                  />
    <v-text-field v-model="userInfo.password_confirmation"
                  label="Password Confirmation"
                  :type="showPassword ? 'text' : 'password'" 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('password'), minLength('password', 8)]"
                  v-if="hasPasswordConfirmation"
                  />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
  import validations from "@/utils/validations";

  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText", "hasFirstName", "hasLastName", "hasPasswordConfirmation"]
  }
</script>

<style lang="scss" scoped>
</style> 
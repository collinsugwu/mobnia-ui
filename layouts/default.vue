<template>
  <v-app>
    <v-app-bar
      app
      class="nav"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-title class="nav__auth-detail"><nuxt-link to="/pricing">Pricing</nuxt-link></v-toolbar-title>
      <div class="nav__auth" v-if="$auth.loggedIn">
        <v-toolbar-title class="nav__auth-detail">{{$auth.user.first_name}} </v-toolbar-title>
        <v-toolbar-title class="nav__auth-detail"><nuxt-link to="/dashboard">Dashboard</nuxt-link></v-toolbar-title>
        <v-toolbar-title class="nav__auth-detail"> <button @click="$auth.logout()">Logout</button> </v-toolbar-title>
      </div>

      <div class="nav__auth" v-else>
        <v-toolbar-title class="nav__auth-detail"> <nuxt-link to="/login"> Login </nuxt-link> </v-toolbar-title>
        <v-toolbar-title class="nav__auth-detail"><nuxt-link to="/register"> Register </nuxt-link> </v-toolbar-title>
      </div>
  
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: white;
  }
  .nav {
    &__auth {
      display: flex;
      &-detail {
        padding: 1rem;
      }
    }
  }
</style>
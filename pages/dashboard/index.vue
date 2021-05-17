<template>
  <div>
    <v-alert
      :type="type"
      v-if="alert"
    >
    {{message}}
    </v-alert>
    {{detail}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detail: null,
        alert: false,
        message: '',
        type: null
      }
    },
   async created(){
      try {
       const response = await this.$axios.get('/dashboard')
       this.detail = response.data.data
        this.type = 'success'
        this.alert = true
        this.message = "Welcome"
      } catch (error) {
        this.type = 'error'
        this.alert = true
        this.message = "You don't have an active subscription"
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
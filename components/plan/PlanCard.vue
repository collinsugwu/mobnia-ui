<template>
  <v-card
    class="mx-auto my-12 justify-center"
    max-width="374"
  >
    <v-alert
      :type="type"
      v-if="alert"
    >
    {{message}}
    </v-alert>
    <v-card-title class="justify-center">{{plan.name}}</v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="justify-center">{{amount(plan.amount)}}</v-card-title>

    <v-card-actions class="justify-center">
       <v-btn
        color="error"
        dark
        large
        @click="subscribe(plan.id)"
        >
         Subscribe
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['plan','color'],
    data() {
      return {
        alert: false,
        message: '',
        type: null
      }
    },
    methods: {
      amount(amount) {
        return 'ngn ' + amount
      },
     async subscribe(id) {
        if(!this.$auth.loggedIn){
          this.$router.push('/login')
        }
        try {
          let response = await this.$axios.get(`/plans/${id}`);
          this.$emit('pay', response.data.data)
        } catch (error) {
          this.alert = true;
          this.type = 'error';
          this.message = 'You have an active subscription'
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <v-container class="pricing">
    <h1>Pricing</h1>

    <div class="pricing__card">
      <plan-card v-for="plan in plans" :key="plan.id" :plan="plan" :color="colors[plan.id]" @pay="makePayment"/>
    </div>
    <form>
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </form>
  </v-container>
</template>

<script>
import PlanCard from '../components/plan/PlanCard.vue';
  
  export default {
  components: { PlanCard },
    data() {
      return {
        plans: {},
        colors: ['green', 'purple']
      }
    },
    async mounted() {
      try {
        let response = await this.$axios.get('/plans');
        this.plans = response.data.data;
      } catch (error) {
        console.log(error)
      }
      
    },
    methods: {
      makePayment(data) {
        try {
          var handler = PaystackPop.setup({
          key: process.env.paystackPublicKey,
          email: this.$auth.user.email,
          amount: data.amount,
          currency: "NGN",
          ref: data.reference, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          metadata: {
            custom_fields: [
              {
                display_name: "First Name",
                variable_name: "first_name",
                value: this.$auth.user.first_name,
              }
            ]
          },
          callback: function(response){
            this.verifyPayment(response.reference)
          },
          onClose: function(){
          }
        });
          handler.openIframe();
        } catch (error) {
          reject(error);
        }
      },
     async verifyPayment(ref) {
        const data = {'ref': ref}
        let responseData = await this.$axios.post('plans/payments/verify', data);
        if(responseData && (responseData.status == 200)) {
          this.$router.push('/dashboard');
        }
      },
    },
    created() {
     const ref = this.$route.query.reference;
     if(ref !== undefined){
       this.verifyPayment(ref);
     } 
    }
  }

</script>

<style lang="scss" scoped>

</style>
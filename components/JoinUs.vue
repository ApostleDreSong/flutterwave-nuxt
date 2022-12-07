<template>
  <div id="join-us">
    <h3>Join our Team of Writers</h3>
    <p>
      On dasdas, writers earn a living doing what they love. Getting started is
      easy. Just pay a one time $25 fee and everything is ready to go.
    </p>
    <button id="join-us__btn" @click="makePayment">JOIN US</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    let Script = document.createElement('script')
    Script.setAttribute('src', 'https://checkout.flutterwave.com/v3.js')
    document.head.appendChild(Script)
  },
  methods: {
    makePayment() {
      const modal = FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
        tx_ref: 'titanic-48981487343MDI0NzMx7',
        amount: 25,
        currency: 'USD',
        payment_options: 'card',
        callback: function (payment) {
          alert('payment successful')
          window.setTimeout(() => {
            modal.close()
          }, 10000)
        },
        meta: {
          consumer_id: 23,
          consumer_mac: '92a3-912ba-1192a'
        },
        customer: {
          email: 'rose@unsinkableship.com',
          phone_number: '08102909304',
          name: 'Rose DeWitt Bukater'
        },
        customizations: {
          title: 'The Titanic Store',
          description: 'Payment for an awesome cruise',
          logo: 'https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg'
        }
      })
    }
  }
})
</script>

<style scoped>
#join-us__btn {
  padding: 12px 55px;
  background-color: black;
  color: white;
}
</style>

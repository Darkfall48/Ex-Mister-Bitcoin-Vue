<template>
  <section class="home-page">
    <h1 class="home-page-title">Your current Balance</h1>
    <h2 class="home-page-balance">
      <span :title="`${bitcoinToDollar}$ in American Dollar`">{{
        user.balance
      }}</span>
      ₿itcoins
    </h2>
  </section>
</template>

<script>
import { userService } from '@/services/user.service'
import { bitcoinService } from '@/services/bitcoin.service'
export default {
  data() {
    return { user: {}, rate: null }
  },
  async created() {
    try {
      this.user = await userService.getCurrUser()
      this.rate = await bitcoinService.getRate()
    } catch (err) {
      console.log('Cannot get Rate:', err)
    }
  },
  computed: {
    bitcoinToDollar() {
      return (this.user.balance / this.rate).toFixed(2)
    },
  },
}
</script>

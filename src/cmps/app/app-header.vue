<template>
  <RouterLink to="/" class="app-header-logo" title="Check your current Balance"
    >Mr. ₿itcoin</RouterLink
  >
  <h2
    class="app-header-rate"
    title="Current Bitcoin Rate in American Dollar"
    v-if="rate"
  >
    1$ = {{ rate }}₿
  </h2>
  <nav class="app-header-nav">
    <RouterLink to="/">Balance</RouterLink>
    <RouterLink to="/contact">Contacts</RouterLink>
    <RouterLink to="/stats">Stats</RouterLink>
    <!-- <RouterLink to="/about">About</RouterLink> -->
  </nav>
  <div class="app-header-exchange">
    <h1 v-if="user" title="The best person!">{{ user.name }}</h1>
    <img
      :src="`https://robohash.org/set_set5/${user.name}`"
      :alt="user.name"
      :title="user.name"
    />
  </div>
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
}
</script>

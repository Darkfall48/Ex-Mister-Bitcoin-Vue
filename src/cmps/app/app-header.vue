<template>
  <h1 class="app-header-logo">Mister Bitcoin</h1>
  <h2 class="app-header-rate" v-if="rate">1$ = {{ rate }}₿</h2>
  <nav class="app-header-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/stats">Stats</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <div class="app-header-exchange">
    <h1 v-if="user">{{ user.name }}</h1>
    <img :src="`https://robohash.org/set_set5/${user.name}`" :alt="user.name" />
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

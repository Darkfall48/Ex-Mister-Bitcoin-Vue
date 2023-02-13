<template>
  <header>
    <h1>Mister Bitcoin</h1>
    <div>
      <h1 v-if="user">{{ user.name }}</h1>
      <h2 v-if="rate">1$ = {{ rate }}₿</h2>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
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

<style lang="scss" scoped></style>

<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/cmps/app/app-header.vue'
import AppFooter from '@/cmps/app/app-footer.vue'
import UserMsg from '@/cmps/app/user-msg.vue'
export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  },
}
</script>

<template>
  <main class="main-container">
    <header class="app-header">
      <AppHeader />
    </header>
    <main class="app-main">
      <RouterView />
    </main>
    <footer class="app-footer">
      <UserMsg />
      <AppFooter />
    </footer>
  </main>
</template>

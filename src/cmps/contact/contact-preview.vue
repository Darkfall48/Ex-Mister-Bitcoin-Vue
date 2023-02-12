<template>
  <h1>{{ contact.name }}</h1>
  <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  components: { RouterLink },
}
</script>

<style lang="sass" scoped></style>

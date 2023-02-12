<template>
  <h1>{{ contact.name }}</h1>
  <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
  <!-- <a @click="onRemoveContact(contact._id)">Delete</a> -->
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

<template>
  <img
    :src="`https://robohash.org/set_set4/bgset_bg2/${contact.name}`"
    :alt="contact.name"
    :title="contact.name"
  />
  <h1 class="contacts-list-contact-name">{{ contact.name }}</h1>
  <RouterLink
    class="contacts-list-contact-details-link"
    title="Show more information about this contact"
    :to="`/contact/${contact._id}`"
    >Details</RouterLink
  >
  <RouterLink
    class="contacts-list-contact-edit-link"
    title="Edit this contact"
    :to="`/contact/edit/${contact._id}`"
    >Edit</RouterLink
  >
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

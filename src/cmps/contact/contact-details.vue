<template>
  <section v-if="contact" class="contact-details">
    <h1>{{ contact.name }}</h1>
    <h2>{{ contact.email }}</h2>
    <h2>{{ contact.phone }}</h2>
    <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
    <RouterLink to="/contact">Back</RouterLink>
  </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
  data() {
    return {
      contact: null,
    }
  },

  async created() {
    const contactId = this.$route.params._id
    this.contact = await contactService.getContactById(contactId)
  },
}
</script>

<style lang="sass" scoped></style>

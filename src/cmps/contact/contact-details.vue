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
  // data() {
  //   return {
  //     contact: null,
  //   }
  // },

  async created() {
    try {
      await this.loadContact()
    } catch (err) {
      console.log('Cannot load contacts on mount', err)
    }
  },

  methods: {
    async loadContact() {
      const contactId = this.$route.params._id
      try {
        await this.$store.dispatch({
          type: 'loadContact',
          contactId,
        })
        // this.contact = await contactService.getContactById(contactId)
        console.log('Contact loaded')
      } catch (err) {
        console.log('Cannot load contact:', contactId, err)
        throw err
      }
    },
  },
  computed: {
    contact() {
      return this.$store.getters.contact
    },
  },
}
</script>

<style lang="sass" scoped></style>

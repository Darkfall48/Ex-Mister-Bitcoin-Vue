<template>
  <section v-if="currentContact">
    <h1>{{ getTitle }}</h1>
    <img
      :src="'https://robohash.org/set_set4/bgset_bg2/' + currentContact.name"
      :alt="currentContact.name"
    />
    <form @submit.prevent="onSave">
      <input
        v-model="currentContact.name"
        type="text"
        placeholder="Enter contact name..."
      />
      <input
        v-model="currentContact.email"
        type="text"
        placeholder="Enter contact email..."
      />
      <input
        v-model="currentContact.phone"
        type="text"
        placeholder="Enter contact phone..."
      />
      <button type="submit">Save</button>
    </form>
    <RouterLink to="/contact">Back</RouterLink>
  </section>
</template>

<script>
import { contactService } from '@/services/contact.service'
export default {
  async created() {
    try {
      const contactId = this.$route.params._id
      this.currentContact = contactId
        ? await this.loadContact(contactId)
        : contactService.getEmptyContact()
    } catch (err) {
      console.log('Cannot load contact', err)
    }
  },
  unmounted() {
    this.$store.commit('clearContact')
  },
  methods: {
    async loadContact(contactId) {
      try {
        await this.$store.dispatch({
          type: 'loadContact',
          contactId,
        })
        console.log('Contact loaded')
      } catch (err) {
        console.log('Cannot load contact:', contactId, err)
        throw err
      }
    },
    async onSave() {
      try {
        await this.$store.dispatch({
          type: 'saveContact',
          contact: this.currentContact,
        })
        this.$router.push('/contact')
      } catch (err) {
        console.log('Cannot save contact:', err)
      }
    },
  },
  computed: {
    currentContact() {
      return this.$store.getters.contact
    },
    getTitle() {
      return this.currentContact._id ? 'Edit contact' : 'Add contact'
    },
  },
}
</script>

<style lang="sass" scoped></style>

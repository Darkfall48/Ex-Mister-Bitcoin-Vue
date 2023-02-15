<template>
  <section v-if="currentContact" class="contact-edit">
    <h1 class="contact-edit-title">{{ getTitle }}</h1>
    <img
      class="contact-edit-img"
      :src="'https://robohash.org/set_set4/bgset_bg2/' + currentContact.name"
      :alt="currentContact.name"
    />
    <form @submit.prevent="onSave" class="contact-edit-form">
      <label for="edit-name">Full Name</label>
      <input
        v-model="currentContact.name"
        type="text"
        name="edit-name"
        placeholder="Enter contact name..."
      />
      <label for="edit-email">E-Mail</label>
      <input
        v-model="currentContact.email"
        type="text"
        name="edit-email"
        placeholder="Enter contact email..."
      />
      <label for="edit-phone">Phone Number</label>
      <input
        v-model="currentContact.phone"
        type="text"
        name="edit-phone"
        placeholder="Enter contact phone..."
      />
      <button type="submit" class="contact-edit-form-save-btn nice-button">
        Save
      </button>
    </form>
    <RouterLink
      to="/contact"
      class="contact-edit-back-link"
      title="Cancel contact"
      >Cancel</RouterLink
    >
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

<template>
  <section>
    <h1>{{ getTitle }}</h1>
    <img :src="'https://robohash.org/' + contact.name" :alt="contact.name" />
    <form @submit.prevent="onSave" v-if="contact">
      <input
        v-model="contact.name"
        type="text"
        placeholder="Enter contact name..."
      />
      <input
        v-model="contact.email"
        type="text"
        placeholder="Enter contact email..."
      />
      <input
        v-model="contact.phone"
        type="text"
        placeholder="Enter contact phone..."
      />
      <button>Save</button>
    </form>
    <RouterLink to="/contact">Back</RouterLink>
  </section>
</template>

<script>
import { contactService } from '@/services/contact.service'
export default {
  data() {
    return {
      contact: {},
    }
  },
  async created() {
    const contactId = this.$route.params._id
    if (contactId) {
      this.contact = await contactService.getContactById(contactId)
    } else {
      this.contact = contactService.getEmptyContact()
    }
  },
  methods: {
    async onSave() {
      await contactService.saveContact(this.contact)
      this.$router.push('/contact')
    },
  },
  computed: {
    getTitle() {
      return this.contact._id ? 'Edit contact' : 'Add contact'
    },
  },
}
</script>

<style lang="sass" scoped></style>

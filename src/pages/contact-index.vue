<template>
  <section>
    <h1>Contact Index</h1>
    <ContactList v-if="contacts" :contacts="filteredContacts" />
    <ContactFilter @filter="onSetFilterBy" />
  </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

import ContactList from '@/cmps/contact/contact-list.vue'
import ContactFilter from '@/cmps/contact/contact-filter.vue'

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    }
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.search, 'i')
      return this.contacts.filter((contact) => contact.name.match(regex))
    },
  },
  components: { ContactList, ContactFilter },
}
</script>

<style lang="sass" scoped></style>

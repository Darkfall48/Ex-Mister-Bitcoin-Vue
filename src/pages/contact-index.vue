<template>
  <section>
    <h1>Contacts:</h1>
    <UserMsg />
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList
      v-if="contacts"
      @remove="removeContact"
      :contacts="filteredContacts"
    />
  </section>
</template>

<script>
import { eventBus } from '@/services/connections/eventBus.service.js'
import { contactService } from '@/services/contact.service.js'

import ContactList from '@/cmps/contact/contact-list.vue'
import ContactFilter from '@/cmps/contact/contact-filter.vue'
import UserMsg from '../cmps/app/user-msg.vue'

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
    async removeContact(contactId) {
      const msg = {
        txt: `Contact ${contactId} deleted.`,
        type: 'success',
        timeout: 2500,
      }
      await contactService.deleteContact(contactId)
      this.contacts = this.contacts.filter(
        (contact) => contact.id !== contactId
      )
      eventBus.emit('user-msg', msg)
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, 'i')
      return this.contacts.filter((contact) => contact.name.match(regex))
    },
  },
  components: { ContactList, ContactFilter, UserMsg },
}
</script>

<style lang="sass" scoped></style>

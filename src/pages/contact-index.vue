<template>
  <section class="contact-index">
    <h1 class="contact-index-title">Contacts</h1>
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
  </section>
</template>

<script>
import { eventBus } from '@/services/connections/eventBus.service.js'

import ContactList from '@/cmps/contact/contact-list.vue'
import ContactFilter from '@/cmps/contact/contact-filter.vue'

export default {
  data() {
    return {
      filterBy: {},
    }
  },
  async created() {
    try {
      await this.loadContacts()
    } catch (err) {
      console.log('Cannot load contacts on mount', err)
    }
  },
  methods: {
    async loadContacts() {
      try {
        await this.$store.dispatch({
          type: 'loadContacts',
          filterBy: this.filterBy,
        })
        // this.contacts = await contactService.getContacts(this.filterBy)
        console.log('Contacts loaded')
      } catch (err) {
        // console.log('Cannot load contacts', err)
        throw err
      }
    },
    async onSetFilterBy(filterBy) {
      try {
        this.filterBy = filterBy
        await this.loadContacts()
      } catch (err) {
        console.log('Cannot load filtered contacts', err)
      }
    },
    async removeContact(contactId) {
      const msg = {
        txt: `Contact ${contactId} deleted.`,
        type: 'success',
        timeout: 2500,
      }
      await this.$store.dispatch({ type: 'removeContact', contactId })
      // await contactService.deleteContact(contactId)
      eventBus.emit('user-msg', msg)
    },
  },
  computed: {
    // filteredContacts() {
    //   const regex = new RegExp(this.filterBy.txt, 'i')
    //   return this.contacts.filter((contact) => contact.name.match(regex))
    // },
    contacts() {
      return this.$store.getters.contacts
    },
  },
  components: { ContactList, ContactFilter },
}
</script>

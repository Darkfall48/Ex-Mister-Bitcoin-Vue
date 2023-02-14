//? Services
import { contactService } from '../services/contact.service'

export const contactStore = {
  state: {
    contacts: [],
    contact: [],
    lastRemovedContact: null,
  },
  getters: {
    contacts({ contacts }) {
      return contacts
    },
    contact({ contact }) {
      return contact
    },
  },
  mutations: {
    setContacts(state, { contacts }) {
      state.contacts = contacts
    },
    setContact(state, { contact }) {
      state.contact = contact
    },
    removeContact(state, { contactId }) {
      const idx = state.contacts.findIndex(
        (contact) => contact._id === contactId
      )
      state.lastRemovedContact = state.contacts[idx]
      state.contacts.splice(idx, 1)
    },
    addContact(state, { contact }) {
      state.contacts.push(contact)
    },
    updateContact(state, { contact }) {
      const idx = state.contacts.findIndex((c) => c._id === c._id)
      state.contacts.splice(idx, 1, contact)
    },
    clearRemoveContact(state) {
      state.lastRemovedContact = null
    },
    undoRemoveContact(state) {
      state.contacts.unshift(state.lastRemovedContact)
      state.lastRemovedContact = null
    },
  },
  actions: {
    async loadContacts({ commit }, { filterBy }) {
      try {
        const contacts = await contactService.getContacts(filterBy)
        commit({ type: 'setContacts', contacts })
      } catch (err) {
        throw err
      }
    },
    async loadContact({ commit }, { contactId }) {
      try {
        const contact = await contactService.getContactById(contactId)
        commit({ type: 'setContact', contact })
      } catch (err) {
        throw err
      }
    },
    async removeContact({ commit }, payload) {
      commit(payload)
      try {
        await contactService.deleteContact(payload.contactId)
        commit({ type: 'clearRemoveContact' })
      } catch (err) {
        commit({ type: 'undoRemoveContact' })
        throw err
      }
    },
    async saveContact({ commit }, { contact }) {
      const actionType = contact._id ? 'updateContact' : 'addContact'
      try {
        const savedContact = await contactService.saveContact(contact)
        commit({ type: actionType, contact: savedContact })
        return savedContact
      } catch (err) {
        throw err
      }
    },
  },
}

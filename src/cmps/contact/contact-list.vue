<template>
  <TransitionGroup name="list" tag="section" class="contacts-list">
    <article
      v-for="contact in contacts"
      :key="contact._id"
      class="contacts-list-contact"
    >
      <ContactPreview :contact="contact" />
      <a
        class="contacts-list-contact-delete-btn"
        title="Delete this contact"
        @click="onRemoveContact(contact._id)"
        >Delete</a
      >
    </article>
  </TransitionGroup>
</template>

<script>
import ContactPreview from './contact-preview.vue'

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
  },
  components: { ContactPreview },
}
</script>

<style lang="scss" scoped></style>

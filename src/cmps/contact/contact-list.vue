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

<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: relative;
}
</style>

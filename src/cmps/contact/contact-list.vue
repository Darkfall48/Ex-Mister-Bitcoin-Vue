<template>
  <TransitionGroup name="list" tag="section" class="contact-list">
    <article
      v-for="contact in contacts"
      :key="contact._id"
      class="contact-preview"
    >
      <ContactPreview :contact="contact" />
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
  components: { ContactPreview },
}
</script>

<style lang="scss" scoped></style>

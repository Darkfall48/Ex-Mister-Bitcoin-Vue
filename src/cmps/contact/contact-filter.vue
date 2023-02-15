<template>
  <article class="contact-filter">
    <form class="contact-filter-form">
      <label class="contact-filter-form-title" for="filter-by-name"
        >Search:</label
      >
      <input
        class="contact-filter-form-input"
        @input="onFilter"
        v-model="filterBy.txt"
        type="text"
        name="filter-by-name"
        title="Find a contact by name"
        placeholder="Enter a name..."
      />
    </form>
    <RouterLink
      class="contact-filter-add-btn nice-button"
      title="Add a new contact"
      to="/contact/edit"
      >New Contact</RouterLink
    >
  </article>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: '',
      },
    }
  },
  methods: {
    onFilter() {
      this.$emit('filter', this.filterBy)
    },
  },
}
</script>

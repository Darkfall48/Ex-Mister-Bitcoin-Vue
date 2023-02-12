<template>
  <article>
    <h1>Search:</h1>
    <input
      @input="onFilter"
      v-model="filterBy.txt"
      type="text"
      title="Filter by name"
      placeholder="Filter by name"
    />
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

<style lang="sass" scoped></style>

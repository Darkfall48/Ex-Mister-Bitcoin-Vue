<template>
  <h1>{{ contact.name }}</h1>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped></style>

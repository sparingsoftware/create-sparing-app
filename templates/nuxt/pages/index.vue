<template>
  <div>Sparing Interactive Nuxt App</div>
</template>
<% if (programmingLanguage === 'JavaScript') { %>
<script>
export default {}
</script>
<% } else if (programmingLanguage === 'Typescript') { %>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<% } %>
<style lang="scss" scoped></style>

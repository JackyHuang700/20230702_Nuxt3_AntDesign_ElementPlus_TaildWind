<template>
  <div class="relative font-sans" n="green6">
    <div class="container px-4 py-10 mx-auto max-w-200">
      <h1>{{ error.message }}</h1>
      There was an error 😱

      <br />
      <button @click="handleError">Clear error</button>
      <br />
      <h1 v-if="error.statusCode === 404">Page not founddd</h1>
      <NuxtLink to="/404"> Trigger another error </NuxtLink>
      <br />
      <NuxtLink to="/"> Navigate home </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>


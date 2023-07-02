<template>
  <div>
    <h1 class="text-2xl font-bold text-center text-gray-400">ERP BACKEND</h1>
    <section class="ant-design-vue">
      <a-button type="primary"> Primary Button </a-button>
    </section>
    <section class="element-plus">
      <el-button @click="ElMessage('hello')">button</el-button>
      <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
      <LazyElButton type="warning">lazy button</LazyElButton>
    </section>
    <section class="recaptcha">
      <ClientOnly>
        <a href="https://hackmd.io/@C_ui2IwiRJm8iHGDtIvecw/B1BG-lxti?utm_source=preview-mode&utm_medium=rec" target="_blank" rel="noopener noreferrer">Ben Li</a>
        <Recaptcha />
      </ClientOnly>
    </section>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import Recaptcha from '@/components/recaptcha/Index.vue'
</script>
<style scoped lang="scss"></style>

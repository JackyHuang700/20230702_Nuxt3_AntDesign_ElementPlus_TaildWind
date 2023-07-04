<template>
  <div>
    <h1 class="text-2xl font-bold text-center text-gray-400">ERP BACKEND</h1>
    <section class="ant-design-vue">
      <a-button type="primary"> Primary Button </a-button>
    </section>
    <section class="ant-design-vue">
      <div class="collapse">
        <AntDCollapse
          v-model:activeKey="collapse_tem.activeKey"
          v-bind="{ ...collapse_tem.attrs }"
          v-on="{ ...collapse_tem.on }"
        >
          <a-collapse-panel key="1">
            <template #header> This is panel header 1 </template>
            <template #default>
              <p>{{ 'copplse title 1' }}</p>
            </template>
          </a-collapse-panel>
          <a-collapse-panel key="2" :disabled="true">
            <template #header> This is panel header 2 </template>
            <template #default>
              <p>{{ 'copplse title 2' }}</p>
            </template>
          </a-collapse-panel>
          <a-collapse-panel key="3">
            <template #header> This is panel header 3 </template>
            <template #default>
              <p>{{ 'copplse title 3' }}</p>
            </template>
          </a-collapse-panel>
        </AntDCollapse>
      </div>
      <div class="p-4 card">
        <AntDCard
          v-bind="{
            ...card_tem.attrs,
          }"
          v-on="{
            ...card_tem.on,
          }"
        >
          <template #title>
            <!-- FIXME: -->
            <div>title</div>
          </template>
          <template #extra>
            <!-- FIXME: -->
            <div>extra</div>
          </template>
          <template #default>
            <!-- FIXME: -->
            <div>content</div>
          </template>
        </AntDCard>
      </div>
      <div class="p-3 anchor">
        <AntDAnchor v-bind="{ ...anchor_tem.attrs }" v-on="{ ...anchor_tem.on }">
          <a-anchor-link href="#components-anchor-basic" title="Basic demo" />
          <a-anchor-link href="#components-anchor-static" title="Static demo" />
          <a-anchor-link href="#components-anchor-basic2" title="Basic demo with Target" target="_blank" />
        </AntDAnchor>
      </div>
    </section>
    <section class="element-plus">
      <el-button @click="ElMessage('hello')">button</el-button>
      <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
      <LazyElButton type="warning">lazy button</LazyElButton>
    </section>
    <section class="recaptcha">
      <ClientOnly>
        <a
          href="https://hackmd.io/@C_ui2IwiRJm8iHGDtIvecw/B1BG-lxti?utm_source=preview-mode&utm_medium=rec"
          target="_blank"
          rel="noopener noreferrer"
          >Ben Li</a
        >
        <Recaptcha />
      </ClientOnly>
    </section>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import Recaptcha from '@/components/recaptcha/Index.vue'
// ant-design-vue
import AntDCollapse, { useAntDCollapse } from '@/components/antDesignVue/collapse/AntDCollapse.vue'
import AntDCard, { useAntDCard } from '@/components/antDesignVue/card/AntDCard.vue'
import AntDAnchor, { useAntDComponent } from '@/components/antDesignVue/anchor/AntDAnchor.vue'

// element-plus

const collapse_tem = useAntDCollapse({
  activeKey: ['1', '3'],
  attrs: {
    class: '',
  },
  on: {},
})

const card_tem = useAntDCard({
  attrs: {
    class: '',
    loading: true,
  },
})

card_tem.attrs.loading = false // FIXME:

const anchor_tem = useAntDComponent({
  attrs: {
    class: '',
    getCurrentAnchor: () => {
      return '#components-anchor-basic'
    },
  },
})
// FIXME:
anchor_tem.attrs!.getCurrentAnchor = () => {
  return '#components-anchor-basic'
}
</script>
<style scoped lang="scss"></style>

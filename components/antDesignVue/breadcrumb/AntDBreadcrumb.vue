<template>
  <a-breadcrumb v-bind="{ ...$attrs, ...props }">
    <slot name="default" />
  </a-breadcrumb>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { BreadcrumbProps } from 'ant-design-vue'

interface IProps {
  // value: TValue
}

const props = defineProps<IProps & IAntDBreadcrumb['attrs'] & IAntDBreadcrumb['on']>()

type TEmit = {
}

const emit = defineEmits<TEmit>()

</script>

<script lang="ts">
export default {
  name: 'AntDBreadcrumb',
}
import { merge } from 'lodash-es'

interface IAntDBreadcrumb {
  attrs?: {
    class?: string
    itemRender?: BreadcrumbProps['itemRender']
    params?: BreadcrumbProps['params']
    routes?: BreadcrumbProps['routes']
    separator?: BreadcrumbProps['separator']
  }
  on?: {}
}

export function useAntDBreadcrumb(_data_initConfig?: IAntDBreadcrumb): IAntDBreadcrumb {
  const data_defaultSettings = reactive<IAntDBreadcrumb>({
    attrs: {},
    on: {},
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)
  return data_init
}
</script>
<style scoped lang="css"></style>

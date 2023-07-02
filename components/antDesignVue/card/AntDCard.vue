<template>
  <a-card v-bind="{ ...$attrs, ...props }">
    <template #title>
      <slot name="title" />
    </template>
    <template #extra>
      <slot name="extra" />
    </template>
    <slot name="default" />
  </a-card>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { CardProps } from 'ant-design-vue'

interface IProps {
  // value: TValue
}

const props = defineProps<IProps & IAntDCard['attrs'] & IAntDCard['on']>()

type TEmit = {
  // 'update:value': [value: TValue]
}

const emit = defineEmits<TEmit>()

// const modelValue = computed({
//   get() {
//     // return props.value
//   },
//   set(value) {
//     // emit('update:value', value)
//   },
// })
</script>

<script lang="ts">
export default {
  name: 'AntDComponent',
}
// type TValue = CardProps['checked']
import { merge } from 'lodash-es'

interface IAntDCard {
  // value: TValue
  attrs?: {
    class?: string
    activeTabKey?: CardProps['activeTabKey']
    bordered?: CardProps['bordered']
    loading?: CardProps['loading']
    size?: CardProps['size']
    title?: CardProps['title']
    type?: CardProps['type']
  }
  on?: {
    tabChange?: CardProps['onTabChange']
  }
}

export function useAntDCard(_data_initConfig?: IAntDCard): IAntDCard {
  const data_defaultSettings = reactive<IAntDCard>({
    // value: false,
    attrs: {
      loading: true,
    },
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)
  // if (_data_initConfig?.value !== undefined) {
  //   data_init.value = _data_initConfig.value
  // }

  return data_init
}
</script>
<style scoped lang="css"></style>
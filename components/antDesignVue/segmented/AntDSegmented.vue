<template>
   <a-segmented v-model:value="modelValue" v-bind="{...$attrs, ...props}" />
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { SegmentedProps } from 'ant-design-vue'

interface IProps {
  value: TValue
}

const props = defineProps<IProps & IAntDSegmented['attrs'] & IAntDSegmented['on']>()

type TEmit = {
  'update:value': [value: TValue]
}

const emit = defineEmits<TEmit>()

const modelValue = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('update:value', value)
  },
})
</script>

<script lang="ts">
export default {
  name: 'AntDSegmented',
}
type TValue = SegmentedProps['value']
import { merge } from 'lodash-es'

interface IAntDSegmented {
  value: TValue
  attrs?: {
    class?: string
    options?: SegmentedProps['options']
    block?: SegmentedProps['block']
    disabled?: SegmentedProps['disabled']
    size?: SegmentedProps['size']
  }  /* & Partial<Omit<SegmentedProps, 'onChange' | 'onUpdate:value'>> */
  on?: {
    change?: SegmentedProps['onChange']
    'onUpdate:value'?: SegmentedProps['onUpdate:value']
  }
}

export function useAntDSegmented(_data_initConfig?: IAntDSegmented): IAntDSegmented {
  const data_defaultSettings = reactive<IAntDSegmented>({
    value: '',
    attrs: {

    },
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)
  if (_data_initConfig?.value !== undefined) {
    data_init.value = _data_initConfig.value
  }

  return data_init
}
</script>
<style scoped lang="css">
</style>
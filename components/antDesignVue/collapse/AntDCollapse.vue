<template>

<a-collapse v-model:activeKey="modelValue" v-bind="{...$attrs, ...props}">
  <slot name="default"/>
</a-collapse>

</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { CollapseProps } from 'ant-design-vue'

interface IProps {
  activeKey: TValue
}

const props = defineProps<IProps & IAntDCollapse['attrs'] & IAntDCollapse['on']>()

type TEmit = {
  'update:activeKey': [value: TValue]
}

const emit = defineEmits<TEmit>()

const modelValue = computed({
  get() {
    return props.activeKey
  },
  set(value) {
    emit('update:activeKey', value)
  },
})
</script>

<script lang="ts">
export default {
  name: 'AntDCollapse',
}
type TValue = CollapseProps['activeKey']
import { merge } from 'lodash-es'

interface IAntDCollapse {
  activeKey: TValue
  attrs?: {
    class?: string
    ghost?: CollapseProps['ghost']
    bordered?: CollapseProps['bordered']
    accordion?: CollapseProps['accordion']
  }
  on?: {
    change?: CollapseProps['onChange']
  }
}

export function useAntDCollapse(_data_initConfig?: IAntDCollapse): IAntDCollapse {
  const data_defaultSettings = reactive<IAntDCollapse>({
    activeKey: '',
    attrs: {
      ghost: true,
    },
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)
  if (_data_initConfig?.activeKey !== undefined) {
    data_init.activeKey = _data_initConfig.activeKey
  }

  return data_init
}
</script>
<style scoped lang="css">
</style>
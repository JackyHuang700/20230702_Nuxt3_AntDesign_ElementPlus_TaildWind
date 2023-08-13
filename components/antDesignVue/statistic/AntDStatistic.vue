<template>
	<a-statistic v-bind="{...$attrs, ...props}" >
    <template #suffix>
      <slot name="suffix" />
    </template>
  </a-statistic>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { statisticProps } from 'ant-design-vue'
import type { CSSProperties } from 'vue'

interface IProps {
  // value: TValue
}

const props = defineProps<IProps & IAntDStatistic['attrs'] & IAntDStatistic['on']>()

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
  name: 'AntDStatistic',
}
type TValue = string
import { merge } from 'lodash-es'

interface IAntDStatistic {
  // value: TValue
  attrs?: {
		name?: string
    class?: string
		style?: CSSProperties
    value?: statisticProps['value']
    title?: statisticProps['title']
    decimalSeparator?: statisticProps['decimalSeparator']
    formatter?: statisticProps['formatter']
    groupSeparator?: statisticProps['groupSeparator']
    precision?: statisticProps['precision']
    prefix?: statisticProps['prefix']
    suffix?: statisticProps['suffix']
    valueStyle?: statisticProps['valueStyle']
  }
  on?: {}
}

export function useAntDStatistic(_data_initConfig?: IAntDStatistic): IAntDStatistic {
  const data_defaultSettings = reactive<IAntDStatistic>({
    // value: '',
    attrs: {},
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)
  // if (_data_initConfig?.value !== undefined) {
  //   data_init.value = _data_initConfig.value
  // }

  return data_init
}
</script>
<style scoped lang="css">
</style>
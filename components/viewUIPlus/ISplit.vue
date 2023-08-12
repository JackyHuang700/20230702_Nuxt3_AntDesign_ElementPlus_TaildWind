<template>
  <Split v-model="modelValue" v-bind="{ ...$attrs, ...props }" :class="'view-ui-plus-split'">
    <!-- <slot name="default" /> -->
    <template #left>
      <div class="view-ui-plus-split-pane">
        <slot name="left" />
      </div>
    </template>
    <template #right>
      <div class="view-ui-plus-split-pane">
        <slot name="right" />
      </div>
    </template>
  </Split>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { CSSProperties } from 'vue'
import type { Split } from 'view-ui-plus'
import type { Split as ISplit } from 'view-ui-plus/types'

interface IProps {
  value: TValue
}

const props = defineProps<IProps & IISplit['attrs'] & IISplit['on']>()

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
  name: 'ISplit',
}
type TValue = Number | String
import { merge } from 'lodash-es'

interface IISplit {
  value: TValue
  attrs?: {
    name?: string
    class?: string
    style?: CSSProperties
    mode?: 'horizontal' | 'vertical'
    max?: Number | String
    min?: Number | String
  }
  on?: {
    /**
     * 拖拽开始
     */
    onMoveStart?: (event?: any) => any

    /**
     * 拖拽中
     */
    onMoving?: (event?: any) => any

    /**
     * 拖拽结束
     */
    onMoveEnd?: (event?: any) => any
  }
}

export function useISplit(_data_initConfig?: IISplit): IISplit {
  const data_defaultSettings = reactive<IISplit>({
    value: '',
    attrs: {},
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)
  if (_data_initConfig?.value !== undefined) {
    data_init.value = _data_initConfig.value
  }

  return data_init
}
</script>
<style scoped lang="css">
.view-ui-plus-split {
  @apply h-[200px] border border-solid border-[#dcdee2];

  /* height: 200px;
  border: 1px solid #dcdee2; */
}
.view-ui-plus-split-pane {
  @apply p-[10px];
  /* padding: 10px; */
}
</style>

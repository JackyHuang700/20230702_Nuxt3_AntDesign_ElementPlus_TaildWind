<template>
   <a-anchor v-bind="{...$attrs, ...props}">
    <slot />
   </a-anchor>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { AnchorProps } from 'ant-design-vue'

interface IProps {
}

const props = defineProps<IProps & IAntDAnchor['attrs'] & IAntDAnchor['on']>()

</script>

<script lang="ts">
export default {
  name: 'AntDAnchor',
}
import { merge } from 'lodash-es'

interface IAntDAnchor {
  attrs?: {
    class?: string
    targetOffset?: AnchorProps['targetOffset']
    getCurrentAnchor?: AnchorProps['getCurrentAnchor']
    affix?: AnchorProps['affix']
    bounds?: AnchorProps['bounds']
  }
  on?: {
    click?: AnchorProps['onClick']
    change?: AnchorProps['onChange']
  }
}

export function useAntDAnchor(_data_initConfig?: IAntDAnchor): IAntDAnchor {
  const data_defaultSettings = reactive<IAntDAnchor>({
    attrs: {
      affix: false,
    },
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)

  return data_init
}
</script>
<style scoped lang="css">
</style>
<template>
  <a-table v-bind="{ ...$attrs, ...props }">
    <slot name="default" />
  </a-table>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { TableProps } from 'ant-design-vue'

interface IProps {
}

const props = defineProps<IProps & IAntDTable['attrs'] & IAntDTable['on']>()

type TEmit = {
}

const emit = defineEmits<TEmit>()
</script>

<script lang="ts">
export default {
  name: 'AntDTable',
}
import { merge } from 'lodash-es'
import type { TableColumnsType } from 'ant-design-vue'


interface IAntDTable {
  attrs?: {
    class?: string
    bordered?: TableProps['bordered']
    locale?: TableProps['locale']
    pagination?: TableProps['pagination']
    dataSource?: TableProps['dataSource']
    columns?: TableProps['columns']
    scroll?: TableProps['scroll']
    rowSelection?: TableProps['rowSelection']
  }
  on?: {
    change?: TableProps['onChange']
    resizeColumn?: TableProps['onResizeColumn'] // columns setting resizable: true
  }
}

export function useAntDTable(_data_initConfig?: IAntDTable): IAntDTable {
  const data_defaultSettings = reactive<IAntDTable>({
    attrs: {
      bordered: true,
      locale: {
        filterConfirm: 'Ok',
        filterReset: '重設',
        emptyText: '無資料',
      },
      pagination: {
        position: ['bottomCenter'],
        showSizeChanger: false, // 切換分業筆數

      },
    },
    on: {
      resizeColumn(w, col) {
        col.width = w
      },
    },
  })
  const data_init = merge(data_defaultSettings, _data_initConfig)

  return data_init
}

export function getColumns(_data_initConfig: TableColumnsType): TableColumnsType {
  return _data_initConfig
}
</script>
<style scoped lang="css"></style>

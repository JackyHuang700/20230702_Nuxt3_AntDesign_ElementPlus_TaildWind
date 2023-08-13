<template>
  <div>
    <h1 class="text-2xl font-bold text-center text-gray-400">ERP BACKEND</h1>
    <section class="view-ui-plus">
      <div class="split">
        <ISplit v-model:value="split_tem.value" v-bind="{ ...split_tem.attrs }" v-on="{ ...split_tem.on }">
          <template #left>
            <span>Left Pane</span>
          </template>
          <template #right>
            <span>Right Pane</span>
          </template>
        </ISplit>
      </div>
    </section>

    <section class="ant-design-vue">
      <div class="p-3 statistic ">
        <AntDStatistic
          v-bind="{
            ...statistic_tem.attrs,
          }"
        >
          <template #suffix> <span>/100</span> </template>
        </AntDStatistic>
      </div>
      <div class="p-3 segmented">
        <AntDSegmented
          v-model:value="segmented_tem.value"
          v-bind="{
            ...segmented_tem.attrs,
          }"
          v-on="{
            ...segmented_tem.on,
          }"
        />
      </div>
      <div class="p-3 button">
        <a-button type="primary"> Primary Button </a-button>
      </div>
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

      <div class="table p-3">
        <AntDTable
          v-bind="{
            ...table_tem.attrs,
          }"
          v-on="{
            ...table_tem.on,
          }"
        >
          <!-- FIXME: header插槽，column.key === '' -->
          <!-- <template #headerCell="{ title, column }">
              <template v-if="column.key === ''">
                <span class="text-red-500">{{ title }}</span>
              </template>
            </template> -->
          <template #bodyCell="{ column, text, index, record }">
            <!-- FIXME: body插槽。column.key === '' -->
            <template v-if="column.key === 'name'">
              <span>
                {{ text }}
              </span>
            </template>
            <!-- FIXME: column.key === '' -->
            <!-- <template v-else-if="column.key === ''">
              <span>
                {{ text }}
              </span>
            </template> -->
          </template>
          <!-- <template #title>Header</template>  FIXME: 用不到需要刪除 -->
          <!-- <template #footer>Footer</template>   FIXME: 用不到需要刪除 -->
        </AntDTable>
      </div>
      <div class="p-3 breadcrumb">
        <AntDBreadcrumb
          v-bind="{
            ...breadcrumb_tem.attrs,
          }"
          v-on="{
            ...breadcrumb_tem.on,
          }"
        >
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </AntDBreadcrumb>
      </div>
    </section>
    <section class="element-plus">
      <div class="infinite-scroll">
        <ul v-infinite-scroll="infiniteScroll_tem" class="h-[300px] overflow-auto">
          <li v-for="i in infiniteScroll_temCount" :key="i">{{ i }}</li>
        </ul>
      </div>

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
    <section class="use-async">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
      </ul>
    </section>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import Recaptcha from '@/components/recaptcha/Index.vue'
// ant-design-vue
import AntDCollapse, { useAntDCollapse } from '@/components/antDesignVue/collapse/AntDCollapse.vue'
import AntDCard, { useAntDCard } from '@/components/antDesignVue/card/AntDCard.vue'
import AntDAnchor, { useAntDAnchor } from '@/components/antDesignVue/anchor/AntDAnchor.vue'
import AntDTable, { useAntDTable, getColumns } from '@/components/antDesignVue/table/AntDTable.vue'
import AntDBreadcrumb, { useAntDBreadcrumb } from '@/components/antDesignVue/breadcrumb/AntDBreadcrumb.vue'
import AntDSegmented, { useAntDSegmented } from '@/components/antDesignVue/segmented/AntDSegmented.vue'
import AntDStatistic, { useAntDStatistic } from '@/components/antDesignVue/statistic/AntDStatistic.vue'
import { useAsync } from '@/composables/useAsync'

// view-ui-plus
import ISplit, { useISplit } from '@/components/viewUIPlus/ISplit.vue'

const statistic_tem = useAntDStatistic({
  attrs: {
    name: 'statistic_tem',
    value: 112893,
    class: '',
    title: '(CNY)', // FIXME: 不需要可以刪除
    precision: 2, // FIXME: 顯示到第幾位
    valueStyle: { color: '#3f8600' }, // FIXME: 數字顏色
  },
})

//view-ui-plus
const split_tem = useISplit({
  value: 0.5,
  attrs: {
    name: 'split_tem',
    class: '',
  },
  on: {},
})

// element-plus
const infiniteScroll_temCount = ref(0)
const infiniteScroll_tem = () => {
  infiniteScroll_temCount.value += 2
}

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

const anchor_tem = useAntDAnchor({
  attrs: {
    class: '',
    getCurrentAnchor: () => {
      return '#components-anchor-basic'
    },
    on: {},
  },
})
// FIXME:
anchor_tem.attrs!.getCurrentAnchor = () => {
  return '#components-anchor-basic'
}

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }])
    }, 1000)
  })
}

const { data: list } = useAsync(
  () => {
    return getUsers()
  },
  {
    initialData: [],
  }
)

interface DataType {
  key: string
  name: string
}

const table_tem = useAntDTable({
  attrs: {
    class: '',
    dataSource: [],
    columns: [],
    // pagination: false, // FIXME: pagination
    // FIXME: rowSelection，若沒有要用checkbox，可以刪除
    rowSelection: {
      checkStrictly: false,
      onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      },
      getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
      onSelect: (record: DataType, selected: boolean, selectedRows: DataType[]) => {
        console.log(record, selected, selectedRows)
      },
      onSelectAll: (selected: boolean, selectedRows: DataType[], changeRows: DataType[]) => {
        console.log(selected, selectedRows, changeRows)
      },
      onSelectChange: (selectedRowKeys: (string | number)[]) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
      },
    },
  },
})

table_tem.attrs.columns = getColumns([
  // FIXME: dataSource，resizable = 拖曳
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left', resizable: true },
])

table_tem.attrs.dataSource = getDataSource() // FIXME: dataSource

interface IDataItem {
  key: number
  name: string
  age: number
  // address: string;
}
function getDataSource() {
  return new Array(100).fill(null).map((i) => {
    return {
      key: i,
      name: `Edrward ${i}`,
      age: i + 32,
      // address: `London Park no. ${i}`,
    } as IDataItem
  })
}

const breadcrumb_tem = useAntDBreadcrumb({
  value: '',
  attrs: {
    class: '',
  },
  on: {},
})

const segmented_tem = useAntDSegmented({
  value: '',
  attrs: {
    class: '',
    options: [
      // FIXME:
      {
        value: '',
        payload: {
          src: 'https://joeschmoe.io/api/v1/random',
          style: { backgroundColor: '#f56aff' },
        },
      },
      {
        value: 'user1',
        payload: {
          src: 'https://joeschmoe.io/api/v1/random',
          style: { backgroundColor: '#f56a00' },
        },
      },
    ],
  },
  on: {
    change(val) {
      console.log('🚀 ~ file: index.vue:276 ~ onChange ~ val:', val) // FIXME:
    },
  },
})
</script>
<style scoped lang="css">
.infinite-list {
  height: 300px;
}
/* .infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
} */
</style>

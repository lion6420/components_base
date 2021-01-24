import VueRouter from 'vue-router'
import Vue from 'vue'
import DocTable from '@/components/table/doc-table'
import DocInput from '@/components/input/doc-input'
import DocSingleSelect from '@/components/single-select/doc-single-select'
import DocMultiSelect from '@/components/multi-select/doc-multi-select'


const routes = [
  {
    path: '/',
    redirect: '/doc/table'
  },
  {
    path: '/doc/table',
    name: 'table',
    component: DocTable,
  },
  {
    path: '/doc/input',
    name: 'input',
    component: DocInput
  },
  {
    path: '/doc/single-select',
    name: 'single-select',
    component: DocSingleSelect,
  },
  {
    path: '/doc/multi-select',
    name: 'multi-select',
    component: DocMultiSelect,
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
### code example
> v-model參數型別須為Object
```vue
<template>
  <div :class="$style.wrapper">
    <multi-select :options="options" v-model="selected" placeholder="Basic use"></multi-select>
  </div>
</template>

<script>
import multiSelect from '@/components/utils/multi-select'
export default {
  components: {
    multiSelect,
  },
  data() {
    return {
      options: [
        'Tony',
        'Darcy',
        'James',
        {label: 'Li', disabled:true},
      ],
      selected: {},
    }
  }
}
</script>
```
<template>
  <div>我的第二个组件</div>
  <button @click="countIncrement">
    Count is: {{ countState.count }}
  </button>

  
  <div v-if="showBox">这是一个盒子</div>
  <button @click="toggleShowBox">显示隐藏</button>
</template>

<script>

import Counter from './Count'
import { ref } from 'vue'

export default {
  setup() {

    const showBox = ref(false)

    const toggleShowBox = () => {
      showBox.value = !showBox.value
    }

    return {
      showBox,
      toggleShowBox,
      ...Counter()
    }
  }
}
</script>
<template>
  <div>点击计时器</div>
  <button @click="countIncrement">
    Count is: {{ countState.count }}, double is: {{ countState.double }}
  </button>
</template>

<script>

import Counter from './Count'

export default {
  setup() {
    return {
      ...Counter()
    }
  }
}
</script>
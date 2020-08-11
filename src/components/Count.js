import { reactive, computed } from 'vue'

export default () => {

    const countState = reactive({
      count: 0,
      double: computed(() => countState.count * 2)
    })

    function countIncrement() {
        countState.count++
    }


    return {
      countState,
      countIncrement
    }

}
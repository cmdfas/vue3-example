<template>
  <button @click="toggleModalState">打开弹层</button>
  <teleport to="#modal-wrapper">
    <modal 
      v-if="modalOpen"
      @close="toggleModalState">
      <p>hello 弹层</p>
    </modal>
  </teleport>

  
  <count></count>
  <count-one></count-one>
  
</template>

<script>
import { ref } from 'vue'
import Modal from './components/Modal.vue'
import Count from './components/Count.vue'
import CountOne from './components/CountOne.vue'

export default {
  components: { Modal, Count, CountOne },
  // data: () => ({
  //   modalOpen: false
  // }),
  // methods: {
  //   toggleModalState() {
  //     this.modalOpen = !this.modalOpen
  //   }
  // }
  setup() {
    const modalOpen = ref(false)
    const toggleModalState = () => {
      modalOpen.value = !modalOpen.value
    }

    return {
      modalOpen,
      toggleModalState
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<template>
    <div class="modal">
        <slot></slot>
        <button @click="$emit('close')">关闭弹层</button>
    </div>
</template>
<script>
export default {
    emits: ['close']
}
</script>
<style scoped>
    ::v-slotted(p) {
        color: red;
    }
</style>
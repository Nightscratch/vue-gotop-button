<template>
    <button @click="goToTop()" v-if="show">
        <slot></slot>
    </button>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
    top:Number
})
const show = ref(false);
const goToTop = ()=>{
    document.documentElement.scrollTop = 0
}
document.onscroll = ()=>{
    show.value = document.documentElement.scrollTop > props.top;
}
</script>
<style scoped>
@import url('./GoTopButton.css');
</style>
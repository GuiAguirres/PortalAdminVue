<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppBoxView'
});
</script>

<style scoped>
.box {
        background-color: whitesmoke;
        color: #2A3F54;
        border-radius: 10px;
        padding: 10px;
    }
</style>
<template>
    <div class="title-value">
        <label class="title">{{title}}</label>
        <label class="value">{{value}}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AppTitleValueView",
    props: {
        title: String,
        value: String
    }
})
</script>

<style>

.title-value {
    display: grid;
    grid-template-rows: 40% 60%;
    gap: 5px;
    padding: 10px;
}

.title-value > .title {
    font-weight: bold;
    font-size: 90%;
}

</style>
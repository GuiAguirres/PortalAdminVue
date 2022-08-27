<template>
    <div class="text-field">
        <label :for="id">{{title}}</label>
        <input type="text" :name="id" :id="id" :value="value" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AppTextField",
    props: {
        id: String,
        title: String,
        value: String,
        placeholder: String
    }
})
</script>

<style>

.text-field {
    display: grid;
    grid-template-rows: 40% 60%;
    gap: 5px;
    padding: 10px;
}

.text-field > label {
    font-weight: bold;
    font-size: 90%;
}

</style>
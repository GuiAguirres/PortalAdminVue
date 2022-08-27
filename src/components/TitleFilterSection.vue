<template>
    <div class="title_filter">
        <h1>{{title}}</h1>
        <h3>
            <i class="fa fa-filter"></i> Filtros
        </h3>
        <AppBoxView class="filters_section">
            <slot></slot>
        </AppBoxView>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBoxView from '@/components/AppBoxView.vue'

export default defineComponent({
 name: "TitleFilterSection",
 props: {
     title: String
 },
 components: {
     AppBoxView
 }
});
</script>

<style lang="scss" scoped>
    .title_filter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 20px;
    }

    .filters_section {
        width: 100%;
        //max-height: 0;
        //overflow: hidden;
    }
</style>
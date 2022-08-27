<template src="./Config.html" />

<script lang="ts">
  import { defineComponent } from 'vue';
  import AppBoxView from '@/components/AppBoxView.vue';
  import AppTextField from '@/components/form/AppTextField.vue';
  import AppTitleValueView from '@/components/AppTitleValueView.vue';

  export default defineComponent({
    name: 'Config',
    data() {
      return {
        cpf: "039.075.940-61"
      }
    },
    components: {
      AppBoxView,
      AppTextField,
      AppTitleValueView
    },
  });
</script>

<style lang="scss" src="./Config.scss" />
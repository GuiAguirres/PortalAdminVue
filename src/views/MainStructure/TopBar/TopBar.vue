<template src="./TopBar.html" />

<script lang="ts">
  import { defineComponent } from 'vue';
  import Dropdown from '@/components/Dropdown.vue';
  // import $ from 'jquery'

  export default defineComponent({
    name: 'TopBar',
    methods: {
        toggleSidebar() {
            $('#sidebar').toggleClass('min');
            $('#wrapper').toggleClass('min');
        }
    },
    components: {
      Dropdown
    }
  });
</script>

<style scoped lang="scss" src="./TopBar.scss" />
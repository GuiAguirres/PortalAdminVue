<template src="./Students.html" />

<script lang="ts">
import { defineComponent } from 'vue'
import TitleFilterSection from '@/components/TitleFilterSection.vue'
import AppTextField from '@/components/form/AppTextField.vue'

export default defineComponent({
  name: 'Students',
  components: {
    TitleFilterSection,
    AppTextField
  }
})
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-view/>
    <h2>{{ texto }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    
  },
})
</script>

<style scoped>

  .about {
    height: 2000px;
  }

</style>
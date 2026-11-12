<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopNav from './components/TopNav.vue';
</script>

<template>
  <header>
    <TopNav />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>

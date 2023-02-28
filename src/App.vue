<script setup lang="ts">
import SideBar from './components/SideBar.vue'
</script>
<template>
  <div>
    <SideBar />
    <!-- this where all the page view be view depending on the navigations -->
    <RouterView></RouterView>
  </div>
</template>

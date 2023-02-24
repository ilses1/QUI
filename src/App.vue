<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
</script>
<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
</style>

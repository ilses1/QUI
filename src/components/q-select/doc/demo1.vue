<script setup lang="ts">
import { ref } from "vue";
const options = ref([
  {
    label: "中国",
    value: "china",
  },
  {
    label: "英国",
    value: "uk",
  },
  {
    label: "日本",
    value: "japan",
  },
]);
</script>
<template>
  <q-select :options="options"></q-select>
</template>

<script setup lang="ts">
import { ref } from "vue";
const treeData = ref([
  {
    label: "1",
    children: [
      {
        label: "1-1",
        children: [
          { label: "1-1-1" },
          { label: "1-1-2" },
          { label: "1-1-3" },
          { label: "1-1-4" },
        ],
      },
      { label: "1-2" },
      { label: "1-3" },
      { label: "1-4" },
    ],
  },
  {
    label: "1",
    children: [
      { label: "1-1" },
      { label: "1-2" },
      { label: "1-3" },
      { label: "1-4" },
    ],
  },
]);
</script>
<template>
  <q-tree :options="treeData" ></q-tree>
</template>

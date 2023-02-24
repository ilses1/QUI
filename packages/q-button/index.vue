<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});
const qClass = computed(() => ["q-button", `q-button-${props.type}`]);
</script>
<script lang="ts">
export default {
  name: "QButton",
};
</script>
<template>
  <button :class="qClass">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  outline: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.9;
  }
}
.q-button {
  padding: 10px 20px;
  border-radius: 5px;
}
.q-button-success {
  background-color: #60f715;
}
.q-button-primary {
  background-color: #409eff;
}
.q-button-info {
  background-color: #909399;
}
.q-button-warning {
  background-color: #eebe77;
}
.q-button-danger {
  background-color: #f56c6c;
}
</style>

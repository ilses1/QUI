<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: Boolean,
  plain: Boolean,
});
// 类名组
const qClass = computed(() => [
  "q-button",
  `q-button-${props.type}`,
  props.disabled ? "q-button-disabled" : "",
  props.round ? "q-button-round" : "",
  props.plain ? "q-button-plain" : "",
]);
</script>
<script lang="ts">
export default {
  name: "QButton",
};
</script>
<template>
  <button :class="qClass" :disabled="disabled">
    <span> <slot></slot></span>
  </button>
</template>

<style scoped lang="scss">
.q-button {
  border: 0;
  padding: 10px 20px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  &:hover,

  &:focus {
    opacity: 0.8;
  }
  &-disabled {
    opacity: 0.4;
    cursor: not-allowed;
    &:hover,
    &:focus {
      opacity: 0.4;
    }
  }
  &-round {
    border-radius: 20px;
  }
}
.q-button-default {
  color: #333;  
  border: 1px solid #dcdfe6;
}
.q-button-success {
  background-color: $success;
  border-color: $success;
}
.q-button-primary {
  background-color: $primary;
  border-color: $primary;
}
.q-button-info {
  background-color: $info;
  border-color: $info;
}
.q-button-warning {
  background-color: $warning;
  border-color: $warning;
}
.q-button-error {
  background-color: $error;
  border-color: $error;
}
</style>

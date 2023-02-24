<script setup lang="ts">
const props = defineProps({
  modelValue: String || Number,
});
const emits = defineEmits(["update:modelValue"]);
const input = (e: any) => {
  emits("update:modelValue", e.target.value);
};
</script>
<script lang="ts">
export default {
  name: "QInput",
};
</script>

<template>
  <input type="text" :value="props.modelValue" @input="input" />
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  compname: String,
  demoname: String,
});

/**预览的代码 */
const sourceCode = ref("");
/**是否显示代码 */
const showCode = ref(false);
/** 获取对应组件的demo代码 */
async function getSourceCode() {
  sourceCode.value = (
    await import(`@/components/${props.compname}/doc/${props.demoname}.vue?raw`)
  ).default.trim();
}

onMounted(() => {
  getSourceCode();
});
</script>

<script lang="ts"></script>

<template>
  <div class="container">
    <pre v-if="showCode" v-highlight><code>{{ sourceCode }}</code>
        </pre>
    <div class="showBtn" @click="showCode = !showCode">
      {{ showCode ? "隐藏代码" : "显示代码" }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.showBtn {
  line-height: 40px;
  border: 1px solid #000;
  border-radius: 20px;
  text-align: center;
  background-color: #c1c1c1;
  &:hover {
    opacity: 0.8;
  }
}
</style>

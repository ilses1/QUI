<script setup lang="ts">
import { ref, computed } from "vue";

type treeItem = {
  label: string;
  children: treeItem[];
};
const props = defineProps({
  options: {
    type: Array<treeItem>,
    default: () => {
      return [];
    },
  },
});

const newOptions = ref(props.options);
// console.log(newOptions.value);

const emits = defineEmits(["update:modelValue"]);

// 点击展开收起
const isShow = ref(false);
const isOpen = (item) => {
  item.isOpened = !item.isOpened;
};

const getIsOpened = (item) => {
  return item.isOpened;
};
</script>
<script lang="ts">
export default {
  name: "QTree",
};
</script>

<template>
  <li
    v-for="(item, index) in newOptions"
    :key="index"
    @click.stop="() => isOpen(item)"
  >
    {{ item.label }}
    <Transition name="slide-fade">
      <ul
        v-show="getIsOpened(item)"
        v-if="item.children && item.children.length > 0"
      >
        <QTree :options="item.children"></QTree>
      </ul>
    </Transition>
  </li>
</template>

<style scoped lang="scss">
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
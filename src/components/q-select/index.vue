<script setup lang="ts">
import { ref, computed } from "vue";

type item = {
  label: string;
  value: string;
};
const props = defineProps({
  options: {
    type: Array<item>,
    default: () => {
      return [];
    },
  },
});

const emits = defineEmits(["update:modelValue"]);

/**input显示内容 */
const selectVal = ref("");
/**显示与否 */
const positionShow = ref(false);
// 自定义指令
// const vClickOutside = {
//   beforeMount(el) {
//     console.log(el);

//     let handler = (e) => {
//       // 如果点击区域在元素区域内选项显示
//       if (el.contains(e.target)) {
//         positionShow.value = true;
//       } else {
//         // 如果点击区域在元素区域外选项隐藏
//         positionShow.value = false;
//       }
//     };
//     // 监听全局点击事件
//     document.addEventListener("click", handler);
//   },
// };
const change = (item: item) => {
  selectVal.value = item.label;
  positionShow.value = false;
};

const dropdownRef = ref<null | HTMLElement>(null)

const handeloutside = () => {
  if (positionShow.value) {
    positionShow.value = false
  }
}
</script>
<script lang="ts">
export default {
  name: "QSelect",
};
</script>

<template>
  <div class="q_select" ref="dropdownRef" v-click-outside:[dropdownRef]="handeloutside">
    <input type="text" readonly :value="selectVal" @click="positionShow
      = true
    " />
    <div class="q-postion-box" v-if="positionShow">
      <li v-for="(item, index) in props.options" @click="change(item)">
        {{ item.label }}
      </li>
    </div>
  </div>
</template>

<style scoped lang="scss">
.q_select {
  display: inline-block;
  height: 40px;
  position: relative;

  input {
    border: 1px solid #000;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
  }

  .q-postion-box {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid #3c0f0f;
    z-index: 1;

    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        background-color: #c56156;
        color: aliceblue;
      }
    }
  }
}
</style>

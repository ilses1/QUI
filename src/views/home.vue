<script setup lang="ts">
import menulist from "@/router/routerPages/pages";
import { ref } from "vue";
import { useRouter } from "vue-router";
const currentIndex = ref(0);
const router = useRouter();
/**
 * 点击目录项切换高亮和右侧显示
 */
const switchMenu = (item: any, index: number) => {
  currentIndex.value = index;
  router.push({
    name: item.name,
  });
};
</script>

<script lang="ts"></script>

<template>
  <div class="container">
    <div class="left-menu">
      <ol>
        <li
          v-for="(item, index) in menulist[0].children"
          :key="item.name"
          :class="{ selected: currentIndex === index }"
          @click="switchMenu(item, index)"
        >
          {{ item.name }}
        </li>
      </ol>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: auto;
  display: flex;
  .left-menu {
    width: 360px;
    height: auto;
    overflow-y: auto;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    li.selected {
      border-right: 4px solid #ee80eb;
      color: #ee8eeb;
      background: rgba(14, 128, 235, 0.1);
    }
  }
  .right-content {
    flex: 1;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>

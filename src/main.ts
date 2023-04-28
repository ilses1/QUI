import { createApp } from "vue";
import App from "./App.vue";
// 本地引入QUI组件库
import QyxUI from "@/components/index";
// 导入路由
import router from "./router";
// 引入高亮
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";

// 引入指令
import ClickOutside from "./directives/clickoutside";
const app = createApp(App);
// 自定义指令
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.directive('click-outside', ClickOutside)

app.use(router).use(QyxUI).mount("#app");

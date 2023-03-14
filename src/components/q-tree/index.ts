import { App } from "vue";
import QTree from "./index.vue";

QTree.install = (app: App) => {
  app.component(QTree.name, QTree);
};

export default QTree;

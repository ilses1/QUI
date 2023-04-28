import { App } from "vue";
import QSelect from "./index.vue";

QSelect.install = (app: App) => {
  app.component(QSelect.name, QSelect);
};

export default QSelect;

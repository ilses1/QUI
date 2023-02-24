import { App } from "vue";
import QInput from "./index.vue";

QInput.install = (app: App) => {
  app.component(QInput.name, QInput);
};

export default QInput;

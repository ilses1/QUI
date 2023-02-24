import { App } from "vue";
import QButton from "./index.vue";

QButton.install = (app: App) => {
  app.component(QButton.name, QButton);
};

export default QButton;

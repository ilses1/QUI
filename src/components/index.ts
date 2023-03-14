import { App } from "vue";
import QButton from "./q-button/index";
import QInput from "./q-input/index";
import QTree from "./q-tree/index";
const install = (app: App) => {
  app.use(QButton as any);
  app.use(QInput as any);
  app.use(QTree as any);
};
const QUI = {
  install,
};

export { QButton, QInput, QTree };

export default QUI;

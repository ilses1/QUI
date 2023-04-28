import { App } from "vue";
import QButton from "./q-button/index";
import QInput from "./q-input/index";
import QTree from "./q-tree/index";
import QSelect from "./q-select/index";
const install = (app: App) => {
  app.use(QButton as any);
  app.use(QInput as any);
  app.use(QTree as any);
  app.use(QSelect as any);
};
const QUI = {
  install,
};

export { QButton, QInput, QTree, QSelect };

export default QUI;

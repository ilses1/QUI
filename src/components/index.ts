import { App } from "vue";
import QButton from "./q-button/index";
import QInput from "./q-input/index";
const install = (app: App) => {
  app.use(QButton as any);
  app.use(QInput as any);
};
const QUI = {
  install,
};

export { QButton, QInput };

export default QUI;

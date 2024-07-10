import type { App } from "vue";
import components from "./components";
export default {
  version: "1.0.0",
  isInstall: false,
  install(app: App) {
    if (this.isInstall) return;
    components.forEach((item) => {
      app.use(item);
    });
    this.isInstall = true;
  },
};

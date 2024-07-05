import Button from "./index.vue";
import { type App } from "vue";

export default {
  install(app: App) {
    app.component("h-button", Button);
  },
};

export { Button };

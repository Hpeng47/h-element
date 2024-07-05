import Input from "./index.vue";
import { type App } from "vue";

export default {
  install(app: App) {
    app.component("h-input", Input);
  },
};

export { Input };

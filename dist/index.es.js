import { defineComponent as e, openBlock as o, createElementBlock as s, toDisplayString as l } from "vue";
const i = /* @__PURE__ */ e({
  __name: "index",
  props: {
    text: {
      type: String,
      default: "按钮"
    }
  },
  setup(t) {
    const n = t;
    return (c, p) => (o(), s("button", null, l(n.text), 1));
  }
}), r = {
  install(t) {
    t.component("h-button", i);
  }
}, a = [r], f = {
  version: "1.0.0",
  isInstall: !1,
  install(t) {
    this.isInstall || (a.forEach((n) => {
      t.use(n);
    }), this.isInstall = !0);
  }
};
export {
  f as default
};

import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import "./vite.init";

export default defineConfig(async () => {
  return {
    resolve: {
      conditions: ["dev"],
    },
    plugins: [
      Vue({
        // https://vuejs.org/guide/extras/reactivity-transform.html
        // 开启响应性语法糖 （试验性特性）
        // Reactivity Transform
        reactivityTransform: true,
      }),
      Components({
        // TODO: vue-components-resolver
        // resolvers: [VueUiLibraryResolver()],
        dts: path.resolve("src/components.d.ts"),
      }),
    ],
  };
});

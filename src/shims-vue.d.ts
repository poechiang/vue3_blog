declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any, {}, any>;
  export default component;
}
declare namespace React {
  declare module "*.tsx" {
    import { h as createElement, Fragment } from "vue";

    export default { createElement, Fragment };
  }
}

import { createApp, type Component, h, type App } from 'vue';

export function createMount(cmp: Component) {
  const _createApp = (props?: object) => {
    const child = h(cmp, props);
    const Parent: Component = {
      render() {
        return h('div', null, child);
      },
    };
    return createApp(Parent);
  };
  const root = document.createElement('div');
  // eslint-disable-next-line functional/no-let
  let app!: App;
  return (props: object) => {
    app = _createApp(props);
    return app.mount(root);
  };
};

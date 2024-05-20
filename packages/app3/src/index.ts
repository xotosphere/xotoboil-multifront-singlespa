import singleSpaVue, { SingleSpaVueLifecycles } from "single-spa-vue";
import { h, createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { ComponentLibrary } from "@xotoboil-multifront/ui-vue";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

import "./index.scss";

const lifecycles: SingleSpaVueLifecycles = singleSpaVue({
	createApp,
	appOptions: {
		render() {
			return h(App, { name: this.name, globalEventDistributor: (this as any).globalEventDistributor });
		},
	},
	handleInstance(app: any) {
		app.use(store);
		app.use(ComponentLibrary);
	},
});

export const bootstrap: any = function (props: { globalEventDistributor: GlobalEventDistributor }) {
	return lifecycles.bootstrap(props as any);
};

export const mount: any = function (props: { globalEventDistributor: GlobalEventDistributor }) {
	return lifecycles.mount(props as any);
};

export const unmount: any = function (props: { globalEventDistributor: GlobalEventDistributor }) {
	return lifecycles.unmount(props as any);
};

export default { bootstrap, mount, unmount };

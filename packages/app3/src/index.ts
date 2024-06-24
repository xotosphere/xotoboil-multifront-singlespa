import singleSpaVue, { SingleSpaVueLifecycles } from "single-spa-vue";
import { h, createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { ComponentLibrary } from "@xotoboil-multifront-singlespa/ui-vue";
import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";

import "./index.scss";

const lifecycles: SingleSpaVueLifecycles = singleSpaVue({
	createApp,
	appOptions: {
		render() {
			return h(App, { name: this.name, crossEventDistributor: (this as any).crossEventDistributor });
		},
	},
	handleInstance(app: any) {
		app.use(store);
		app.use(ComponentLibrary);
	},
});

export const bootstrap: any = function (props: { crossEventDistributor: CrossEventDistributor }) {
	return lifecycles.bootstrap(props as any);
};

export const mount: any = function (props: { crossEventDistributor: CrossEventDistributor }) {
	return lifecycles.mount(props as any);
};

export const unmount: any = function (props: { crossEventDistributor: CrossEventDistributor }) {
	return lifecycles.unmount(props as any);
};

export default { bootstrap, mount, unmount };

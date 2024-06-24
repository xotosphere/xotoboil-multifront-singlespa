import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";
export let crossEventDistributor: CrossEventDistributor;
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { App } from "./App";
import React from "react";

const reactLifecycles = App
	? singleSpaReact({
			React,
			ReactDOM,
			rootComponent: App,
	  })
	: { bootstrap: () => {}, mount: () => {}, unmount: () => {} };

export function bootstrap(props: { crossEventDistributor: CrossEventDistributor }) {
	crossEventDistributor = props.crossEventDistributor;
	return reactLifecycles.bootstrap(props as any);
}

export function mount(props: { crossEventDistributor: CrossEventDistributor }) {
	return reactLifecycles.mount(props as any);
}

export function unmount(props: { crossEventDistributor: CrossEventDistributor }) {
	return reactLifecycles.unmount(props as any);
}

export default App;

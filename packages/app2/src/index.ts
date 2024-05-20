import { GlobalEventDistributor } from "@xotoboil-multifront/common";
export let globalEventDistributor: GlobalEventDistributor;
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

export function bootstrap(props: { globalEventDistributor: GlobalEventDistributor }) {
	globalEventDistributor = props.globalEventDistributor;
	return reactLifecycles.bootstrap(props as any);
}

export function mount(props: { globalEventDistributor: GlobalEventDistributor }) {
	return reactLifecycles.mount(props as any);
}

export function unmount(props: { globalEventDistributor: GlobalEventDistributor }) {
	return reactLifecycles.unmount(props as any);
}

export default App;

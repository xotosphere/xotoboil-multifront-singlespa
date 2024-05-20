import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { LifeCycleFn } from "single-spa";
import { NavBar } from "./components/NavBar";
import "./index.scss";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

export const App: any = (): JSX.Element => <NavBar />;

const headerLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
});

export const bootstrap: LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }> | LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }>[] = headerLifecycles.bootstrap;
export const mount: LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }> | LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }>[] = headerLifecycles.mount;
export const unmount: LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }> | LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }>[] = headerLifecycles.unmount;

export default App;

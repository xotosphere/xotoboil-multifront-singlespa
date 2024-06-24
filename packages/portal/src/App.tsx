import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { LifeCycleFn } from "single-spa";
import { NavBar } from "./components/NavBar";
import "./index.scss";
import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";

export const App: any = (): JSX.Element => <NavBar />;

const headerLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
});

export const bootstrap: LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }> | LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }>[] = headerLifecycles.bootstrap;
export const mount: LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }> | LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }>[] = headerLifecycles.mount;
export const unmount: LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }> | LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }>[] = headerLifecycles.unmount;

export default App;

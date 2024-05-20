// import "./index.scss";

import { enableProdMode, NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, NavigationStart } from "@angular/router";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { singleSpaAngular, getSingleSpaExtraProviders } from "single-spa-angular";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";
import { SingleSpaProps } from "./single-spa/single-spa-props";
import { AppProps, LifeCycleFn, LifeCycles } from "single-spa";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

if (environment.production) enableProdMode();

const lifecycles: LifeCycles<{ globalEventDistributor: GlobalEventDistributor }> = singleSpaAngular({
	bootstrapFunction: (singleSpaProps: SingleSpaProps) => {
		singleSpaPropsSubject.next(singleSpaProps);
		return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
	},
	template: "<app-root />",
	Router,
	NavigationStart,
	NgZone,
});

export const bootstrap: LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }> | LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }>[] = async <T extends { globalEventDistributor: GlobalEventDistributor } & AppProps>(props: T) => {
	if (typeof lifecycles.bootstrap === "function") lifecycles.bootstrap(props as any);
};

export const mount: LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }> | LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }>[] = async <T extends { globalEventDistributor: GlobalEventDistributor } & AppProps>(props: T) => {
	if (typeof lifecycles.mount === "function") lifecycles.mount(props as any);
};

export const unmount: LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }> | LifeCycleFn<{ globalEventDistributor: GlobalEventDistributor }>[] = async <T extends { globalEventDistributor: GlobalEventDistributor } & AppProps>(props: T) => {
	if (typeof lifecycles.unmount === "function") await lifecycles.unmount(props as any);
	if (document.getElementById("single-spa-application:app1")) document.getElementById("single-spa-application:app1").innerHTML = "";
};

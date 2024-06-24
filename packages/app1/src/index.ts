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
import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";

if (environment.production) enableProdMode();

const lifecycles: LifeCycles<{ crossEventDistributor: CrossEventDistributor }> = singleSpaAngular({
	bootstrapFunction: (singleSpaProps: SingleSpaProps) => {
		singleSpaPropsSubject.next(singleSpaProps);
		return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
	},
	template: "<app-root />",
	Router,
	NavigationStart,
	NgZone,
});

export const bootstrap: LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }> | LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }>[] = async <T extends { crossEventDistributor: CrossEventDistributor } & AppProps>(props: T) => {
	if (typeof lifecycles.bootstrap === "function") lifecycles.bootstrap(props as any);
};

export const mount: LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }> | LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }>[] = async <T extends { crossEventDistributor: CrossEventDistributor } & AppProps>(props: T) => {
	if (typeof lifecycles.mount === "function") lifecycles.mount(props as any);
};

export const unmount: LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }> | LifeCycleFn<{ crossEventDistributor: CrossEventDistributor }>[] = async <T extends { crossEventDistributor: CrossEventDistributor } & AppProps>(props: T) => {
	if (typeof lifecycles.unmount === "function") await lifecycles.unmount(props as any);
	if (document.getElementById("single-spa-application:app1")) document.getElementById("single-spa-application:app1").innerHTML = "";
};

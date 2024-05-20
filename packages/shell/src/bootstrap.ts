// @ts-nocheck
/* eslint-disable prettier/prettier */

import { start, registerApplication } from "single-spa";
import { GlobalEventDistributor } from "./classes/GlobalEventDistributor";
const globalEventDistributor: GlobalEventDistributor = new GlobalEventDistributor();

/**
 * Register applications here
 */

console.log(globalEventDistributor)

registerApplication(
	"portal",
	async () => import("portal/App"),
	() => true,
	{ globalEventDistributor, domElement: document.getElementById("single-spa-application:portal") },
);

registerApplication(
	"app1",
	() => import("app1/ApplicationPage"),
	(location: Location) => location.pathname.startsWith("/angular"),
	{ globalEventDistributor, domElement: document.getElementById("single-spa-application:app1") },
);
registerApplication(
	"app2",
	() => import("app2/ApplicationPage"),
	(location: Location) => location.pathname.startsWith("/react-vue"),
	{ globalEventDistributor, domElement: document.getElementById("single-spa-application:app2") },
);
registerApplication(
	"app3",
	() => import("app3/ApplicationPage"),
	(location: Location) => location.pathname.startsWith("/react-vue"),
	{ globalEventDistributor, domElement: document.getElementById("single-spa-application:app3") },
);

start();

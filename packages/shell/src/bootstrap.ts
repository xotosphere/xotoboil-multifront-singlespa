// @ts-nocheck
/* eslint-disable prettier/prettier */

import { start, registerApplication } from "single-spa";
import { CrossEventDistributor } from "./classes/CrossEventDistributor";
const crossEventDistributor: CrossEventDistributor = new CrossEventDistributor();

/**
 * Register applications here
 */

console.log(crossEventDistributor)

registerApplication(
	"portal",
	async () => import("portal/App"),
	() => true,
	{ crossEventDistributor, domElement: document.getElementById("single-spa-application:portal") },
);

registerApplication(
	"app1",
	() => import("app1/ApplicationPage"),
	(location: Location) => location.pathname.startsWith("/angular"),
	{ crossEventDistributor, domElement: document.getElementById("single-spa-application:app1") },
);
registerApplication(
	"app2",
	() => import("app2/ApplicationPage"),
	(location: Location) => location.pathname.startsWith("/react-vue"),
	{ crossEventDistributor, domElement: document.getElementById("single-spa-application:app2") },
);
registerApplication(
	"app3",
	() => import("app3/ApplicationPage"),
	(location: Location) => location.pathname.startsWith("/react-vue"),
	{ crossEventDistributor, domElement: document.getElementById("single-spa-application:app3") },
);

start();

import { registerApplication } from "single-spa";

export function loadApp(name: string, appImportPath: string, appRoutePath: string) {
	registerApplication(
		name,
		() => import(appImportPath),
		(location: Location): boolean => (appRoutePath ? location.pathname.startsWith(appRoutePath) : true),
	);
}

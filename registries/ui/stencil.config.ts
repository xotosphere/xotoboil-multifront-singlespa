import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { vueOutputTarget } from "@stencil/vue-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
	namespace: "stencil-components",
	globalStyle: "src/global/global.css ",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
			copy: [
				{
					src: "**/*.{jpg,png}",
					dest: "dist/components/assets",
					warn: true,
				},
			],
		},
		vueOutputTarget({
			componentCorePackage: "@xotoboil-multifront/ui",
			proxiesFile: "../ui-vue/src/components.ts",
		}),
		angularOutputTarget({
			componentCorePackage: "@xotoboil-multifront/ui",
			directivesProxyFile: "../ui-angular/src/components.ts",
			directivesArrayFile: "../ui-angular/src/directives.ts",
		}),
		reactOutputTarget({
			componentCorePackage: "@xotoboil-multifront/ui",
			proxiesFile: "../ui-react/src/index.ts",
			includeDefineCustomElements: true,
		}),
	],
	plugins: [sass()],
};

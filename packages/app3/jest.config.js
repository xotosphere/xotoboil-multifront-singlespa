module.exports = {
	preset: "ts-jest",
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/src/$1",
	},
	transform: {
		"^.+\\.vue$": "@vue/vue3-jest",
	},
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "ts", "json", "vue"],
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/src/$1",
		"@xotoboil-multifront/ui-vue": "<rootDir>../../registries/ui-vue/src",
	},
};

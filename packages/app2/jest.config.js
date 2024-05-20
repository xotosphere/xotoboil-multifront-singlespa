module.exports = {
	preset: "ts-jest",
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
	},
	coverageReporters: ["lcov", "text"],
	coverageDirectory: "build/coverage",
	transform: {
		"^.+\\.ts?$": ["ts-jest"],
	},
	testRegex: ".*\\.test\\.ts",
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/src/$1",
		"@xotoboil-multifront/ui-react": "<rootDir>../../registries/ui-react/src",
	},
	testEnvironment: "jsdom",
};

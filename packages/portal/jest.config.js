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
	},
	testEnvironment: "jsdom",
};

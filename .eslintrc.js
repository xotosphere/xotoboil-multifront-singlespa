/* eslint-disable @typescript-eslint/typedef */
const off = "off";
const error = "error";
const warn = process.argv.includes("--report-unused-disable-directives") ? "error" : "warn";

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	extends: ["plugin:prettier/recommended"],
	plugins: ["simple-import-sort", "@typescript-eslint/eslint-plugin", "unused-imports", "jest"],
	ignorePatterns: ["**/utilities/*", "**/*.json", "**/*.svg", "**/*.md", "**/*.csv", "**/*.lock", "**/*.css", "**/*.scss"],
	rules: {
		"@typescript-eslint/typedef": [off, { arrayDestructuring: true, arrowParameter: true, memberVariableDeclaration: true, objectDestructuring: true, parameter: true, propertyDeclaration: true, variableDeclaration: true }],
		"prettier/prettier": ["error", {}, { fileInfoOptions: { withNodeModules: true }, usePrettierrc: true }],
		"no-new": [off],
		"no-unused-vars": off,
		"unused-imports/no-unused-imports": error,
		"object-curly-spacing": off,
		"unused-imports/no-unused-vars": [off, { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }],
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : off,
		"@typescript-eslint/no-useless-constructor": off,
		"@typescript-eslint/no-this-alias": off,
		"@typescript-eslint/ban-types": off,
		"@typescript-eslint/no-unused-vars": off,
		"@typescript-eslint/no-non-null-assertion": off,
		"@typescript-eslint/no-empty-function": off,
		"@typescript-eslint/no-empty-interface": off,
		"@typescript-eslint/explicit-module-boundary-types": off,
		"@typescript-eslint/no-var-requires": off,
		"@typescript-eslint/no-explicit-any": off,
		"@typescript-eslint/no-namespace": off,
		"import/prefer-default-export": off,
	},
	overrides: [{ files: ["*.js"], rules: { "@typescript-eslint/no-var-requires": off } }],
};

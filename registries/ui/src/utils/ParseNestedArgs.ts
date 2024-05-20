export function parseNestedArgs(args: any) {
	for (let arg in args) {
		if (/_/.test(arg)) {
			const argArray = arg.split("_");
			const key = argArray[0];
			delete args[arg];
			if (!args[key]) args[key] = {};
			args[key][argArray[1]] = args[arg];
		}
	}
}

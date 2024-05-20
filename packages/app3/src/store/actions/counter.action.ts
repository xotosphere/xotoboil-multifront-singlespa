export function counterIncrement(context: { commit: (arg0: string) => void }): void {
	context.commit("counterAddIncrement");
}

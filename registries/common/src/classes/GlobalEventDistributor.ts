import { GlobalStore } from "./GlobalStore";

export interface GlobalEventDistributor {
	globalStore: GlobalStore;

	handlerList: { event: string; callback: Function }[];

	on(event: string, callback: Function): void;

	emit(event: string): void;
}

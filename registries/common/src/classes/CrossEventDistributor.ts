import { CrossStore } from "./CrossStore";

export interface CrossEventDistributor {
	crossStore: CrossStore;

	handlerList: { event: string; callback: Function }[];

	on(event: string, callback: Function): void;

	emit(event: string): void;
}

import { CrossStore } from "./CrossStore";
import { CrossEventDistributor as ICrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";

export class CrossEventDistributor implements ICrossEventDistributor {
	crossStore: CrossStore = new CrossStore();

	handlerList: { event: string; callback: Function }[] = [];

	on(event: string, callback: Function) {
		this.handlerList.push({ event, callback });
	}

	emit(event: string) {
		this.handlerList.filter((handler: any) => handler.event === event).forEach((handler: any) => handler.callback());
	}
}

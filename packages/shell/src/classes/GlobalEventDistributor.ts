import { GlobalStore } from "./GlobalStore";
import { GlobalEventDistributor as IGlobalEventDistributor } from "@xotoboil-multifront/common";

export class GlobalEventDistributor implements IGlobalEventDistributor {
	globalStore: GlobalStore = new GlobalStore();

	handlerList: { event: string; callback: Function }[] = [];

	on(event: string, callback: Function) {
		this.handlerList.push({ event, callback });
	}

	emit(event: string) {
		this.handlerList.filter((handler: any) => handler.event === event).forEach((handler: any) => handler.callback());
	}
}

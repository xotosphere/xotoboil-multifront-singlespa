import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { globalEventDistributor } from "../../../single-spa/single-spa-props";
import { select, Store } from "@ngrx/store";
import { CounterModel } from "../../models/CounterModel";
import { selectCounter } from "../../store/reducers/counter.reducer";
import { DecrementCounter, IncrementCounter, ResetCounter } from "../../store/actions/counter.actions";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

@Component({
	selector: "app-counter",
	templateUrl: "./counter.component.html",
	styleUrls: ["./counter.component.scss"],
})
export class CounterComponent implements OnInit {
	public localCounter: Observable<number>;
	public globalEventDistributor: GlobalEventDistributor;
	title: string = "angular app1";

	constructor(private store: Store<CounterModel>) {
		if (globalEventDistributor && globalEventDistributor.globalStore) this.globalEventDistributor = globalEventDistributor;
	}

	ngOnInit(): void {
		this.localCounter = this.store.pipe(select(selectCounter));
	}

	incrementCounter(): void {
		this.store.dispatch(new IncrementCounter());
	}

	decrementCounter(): void {
		this.store.dispatch(new DecrementCounter());
	}

	resetCounter(): void {
		this.store.dispatch(new ResetCounter());
	}

	incrementCounterGlobal(): void {
		if (globalEventDistributor && globalEventDistributor.globalStore) globalEventDistributor.globalStore.counter += 1;
	}
}

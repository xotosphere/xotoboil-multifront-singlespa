import { Action, createSelector } from "@ngrx/store";
import { COUNTER_KEY } from "../../enums/CounterEnums";
import { CounterModel } from "../../models/CounterModel";
import { ActionTypes } from "../actions/counter.actions";

export let counterState = +localStorage.getItem(COUNTER_KEY) ?? 0;

export function counterReducer(counter: number = counterState, action: Action): number {
	switch (action.type) {
		case ActionTypes.IncrementCounter:
			counterState++;
			localStorage.setItem(COUNTER_KEY, (counter + 1).toString());
			return counter + 1;
		case ActionTypes.DecrementCounter:
			counterState--;
			localStorage.setItem(COUNTER_KEY, (counter - 1).toString());
			return counter - 1;
		case ActionTypes.ResetCounter:
			counterState = 0;
			localStorage.setItem(COUNTER_KEY, "0");
			return counterState;
		default:
			return counter;
	}
}

export const selectFeature = (state: CounterModel) => state.counter;
export const selectCounter = createSelector(selectFeature, (e) => e);

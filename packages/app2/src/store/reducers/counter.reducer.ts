import { CounterModel } from "@/models/CounterModel";
import { counterIncrement } from "@/store/actions/counter.action";
import { counterState } from "@/store/states/counter.state";

export function counterReducer(state: CounterModel["counter"] = counterState, action: any) {
	switch (action.type) {
		case "counter/counterIncrement":
			return counterIncrement(state);
		default:
			return state;
	}
}

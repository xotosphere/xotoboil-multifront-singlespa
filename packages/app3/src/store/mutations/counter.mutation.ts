import { CounterModel } from "@/models/CounterModel";

export function counterAddIncrement(state: CounterModel) {
	state.counter += 1;
}

import { CounterModel } from "@/models/CounterModel";

export const counterIncrement: Function = (state: CounterModel["counter"]) => {
	return {
		counter: state.counter + 1,
	};
};

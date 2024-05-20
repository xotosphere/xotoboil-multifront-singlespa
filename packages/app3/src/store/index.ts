import { counterIncrement } from "./actions/counter.action";
import { counterAddIncrement } from "./mutations/counter.mutation";
import { createStore, Store } from "vuex";
import { counterState } from "./states/counter.state";
import { CounterModel } from "@/models/CounterModel";

const store: Store<CounterModel> = createStore({
	state: { ...counterState },
	mutations: { counterAddIncrement },
	actions: { counterIncrement },
});

export default store;

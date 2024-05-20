import { combineReducers, createStore, Store } from "redux";
import { globalEventDistributor } from "@/index";
import { counterReducer } from "@/store/reducers/counter.reducer";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

const store: Store<any, any> = createStore(
	combineReducers({
		counter: counterReducer,
	}),
);

export const getGlobalEventDistributer: Function = () => globalEventDistributor as GlobalEventDistributor;

export default store;

import { combineReducers, createStore, Store } from "redux";
import { crossEventDistributor } from "@/index";
import { counterReducer } from "@/store/reducers/counter.reducer";
import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";

const store: Store<any, any> = createStore(
	combineReducers({
		counter: counterReducer,
	}),
);

export const getCrossEventDistributer: Function = () => crossEventDistributor as CrossEventDistributor;

export default store;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UiButton } from "@xotoboil-multifront/ui-react";
import { CounterModel } from "@/models/CounterModel";
import store, { getGlobalEventDistributer } from "@/store";
import { globalEventDistributor } from "@/index";

export const Counter: any = (props: any): JSX.Element => {
	const localCounter = useSelector((state: CounterModel) => state.counter.counter);
	const [globalEventDistributerCounter, setGlobalEventDistributerCounterState] = useState(getGlobalEventDistributer() ? getGlobalEventDistributer().globalStore.counter : 0);
	const setGlobalEventDistributerCounter = (value: number) => {
		if (getGlobalEventDistributer()?.globalStore) {
			getGlobalEventDistributer().globalStore.counter = value;
			globalEventDistributor.emit("increment");
		}
	};
	useEffect(() => {
		let active = true;
		globalEventDistributor.on("increment", () => {
			if (active) setGlobalEventDistributerCounterState(getGlobalEventDistributer()?.globalStore?.counter);
		});

		return () => {
			active = false;
		};
	}, []);

	return (
		<div>
			<h2 data-testid="local_counter">Local Counter: {localCounter}</h2>
			<h2 data-testid="global_counter">Global Counter: {globalEventDistributerCounter}</h2>
			<div className="action">
				<UiButton
					onClick={() => {
						store.dispatch({ type: "counter/counterIncrement" });
					}}
				>
					increment
				</UiButton>
				<UiButton onClick={() => setGlobalEventDistributerCounter(globalEventDistributerCounter + 1)}>increment global</UiButton>
			</div>
		</div>
	);
};

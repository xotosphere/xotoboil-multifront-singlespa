import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UiButton } from "@xotoboil-multifront-singlespa/ui-react";
import { CounterModel } from "@/models/CounterModel";
import store, { getCrossEventDistributer } from "@/store";
import { crossEventDistributor } from "@/index";

export const Counter: any = (props: any): JSX.Element => {
	const localCounter = useSelector((state: CounterModel) => state.counter.counter);
	const [crossEventDistributerCounter, setCrossEventDistributerCounterState] = useState(getCrossEventDistributer() ? getCrossEventDistributer().crossStore.counter : 0);
	const setCrossEventDistributerCounter = (value: number) => {
		if (getCrossEventDistributer()?.crossStore) {
			getCrossEventDistributer().crossStore.counter = value;
			crossEventDistributor.emit("increment");
		}
	};
	useEffect(() => {
		let active = true;
		crossEventDistributor.on("increment", () => {
			if (active) setCrossEventDistributerCounterState(getCrossEventDistributer()?.crossStore?.counter);
		});

		return () => {
			active = false;
		};
	}, []);

	return (
		<div>
			<h2 data-testid="local_counter">Local Counter: {localCounter}</h2>
			<h2 data-testid="cross_counter">Cross Counter: {crossEventDistributerCounter}</h2>
			<div className="action">
				<UiButton
					onClick={() => {
						store.dispatch({ type: "counter/counterIncrement" });
					}}
				>
					increment
				</UiButton>
				<UiButton onClick={() => setCrossEventDistributerCounter(crossEventDistributerCounter + 1)}>increment cross</UiButton>
			</div>
		</div>
	);
};

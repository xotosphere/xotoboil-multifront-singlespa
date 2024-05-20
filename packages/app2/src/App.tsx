import { Provider } from "react-redux";
import { Counter } from "./components/counter/Counter";
import store from "./store/index";
import "./index.scss";
import React from "react";

export const App: React.FunctionComponent = (props: any): JSX.Element => (
	<div>
		<Provider store={store}>
			<h1>react {props.name}</h1>
			<Counter />
		</Provider>
	</div>
);

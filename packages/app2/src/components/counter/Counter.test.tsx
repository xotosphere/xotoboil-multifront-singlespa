import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import store from "@/store";

describe("Counter", () => {
	test("should render all the elements", () => {
		render(
			<Provider store={store}>
				<Counter />
			</Provider>,
		);

		expect(screen.getByText("increment")).toBeDefined();
		expect(screen.getByTestId("local_counter")).toBeDefined();
		expect(screen.getByText("increment global")).toBeDefined();
		expect(screen.getByTestId("global_counter")).toBeDefined();
	});
});

describe("Increment", () => {
	test("should increase the counter by clicking on increment button and display on h2 element", () => {
		render(
			<Provider store={store}>
				<Counter />
			</Provider>,
		);

		const fnDispatch = jest.spyOn(store, "dispatch");
		const incrementBtn = screen.getByText("increment");
		const localCounterEle = screen.getByTestId("local_counter");

		expect(incrementBtn).toBeDefined();
		expect(+localCounterEle.textContent.split(":")[1]).toBe(0);
		fireEvent.click(incrementBtn);
		expect(fnDispatch).toHaveBeenCalledTimes(1);
		expect(fnDispatch).toHaveBeenCalledWith({ type: "counter/counterIncrement" });
		expect(+localCounterEle.textContent.split(":")[1]).toBe(1);
	});
});

describe("Global Increment", () => {
	test("should increase the global counter by clicking on increment global button and display on h2 element", () => {
		render(
			<Provider store={store}>
				<Counter />
			</Provider>,
		);

		const fnDispatch = jest.spyOn(store, "dispatch");
		const incrementBtn = screen.getByText("increment global");
		const localCounterEle = screen.getByTestId("global_counter");

		expect(incrementBtn).toBeDefined();
		expect(+localCounterEle.textContent.split(":")[1]).toBe(0);
		fireEvent.click(incrementBtn);
		expect(fnDispatch).toHaveBeenCalledTimes(1);
		expect(fnDispatch).toHaveBeenCalledWith({ type: "counter/counterIncrement" });
		expect(+localCounterEle.textContent.split(":")[1]).toBe(1);
	});
});

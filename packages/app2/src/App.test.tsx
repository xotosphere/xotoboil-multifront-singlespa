import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

const AppTestWrapper: any = (): React.ReactElement => {
	return <App />;
};
describe("App", () => {
	test("should render <App/>", () => {
		render(<AppTestWrapper />);
		expect(screen.getByRole("heading", { name: /local counter/i })).toBeDefined();
	});
});

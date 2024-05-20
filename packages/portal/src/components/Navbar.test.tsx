import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

const ComponentWrapper: any = (): React.ReactElement => {
	return <NavBar />;
};
describe("Navbar", () => {
	test("should render <Navbar/>", () => {
		render(<ComponentWrapper />);
		expect(screen.getByRole("navigation")).toBeDefined();
	});

	test("should render four links", () => {
		const { container } = render(<ComponentWrapper />);
		expect(container.querySelectorAll("li").length).toBe(3);
	});

	test("Angular Application link should redirect to the angular page", () => {
		render(<ComponentWrapper />);
		expect(screen.getByText("Angular Application")).toBeDefined();
		fireEvent.click(screen.getByText("Angular Application"));
		expect(window.location.href.includes("angular")).toBeTruthy();
	});
});

// eslint-disable-next-line unused-imports/no-unused-imports
import { Component, Host, Prop, h } from "@stencil/core";

@Component({
	tag: "ui-button",
	styleUrl: "UiButton.scss",
	shadow: true,
})
export class UiButton {
	@Prop() text: string | undefined;
	@Prop() type: string | undefined;

	render() {
		return (
			<Host>
				<button class={`btn btn-${this.type}`}>
					<slot></slot>
				</button>
			</Host>
		);
	}
}

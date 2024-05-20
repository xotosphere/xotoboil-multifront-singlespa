import { newSpecPage } from "@stencil/core/testing";
import { UiButton } from "../UiButton";

describe("UiButton", () => {
	it("renders", async () => {
		const page = await newSpecPage({
			components: [UiButton],
			html: `<ui-button></ui-button>`,
		});
		expect(page.root).toEqualHtml(`
      <ui-button>
        <mock:shadow-root>
        <button class="btn btn-undefined"><slot></slot></button>
        </mock:shadow-root>
      </ui-button>
    `);
	});
});

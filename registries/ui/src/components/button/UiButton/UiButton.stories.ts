export default {
	title: "Components/Button ",
	args: {
		text: "Valider",
	},
	argTypes: {
		type: {
			options: ["primary", "secondary"],
			control: { type: "radio" },
		},
	},
};

const Template = (args: { type: any; text: any }) => `<ui-button type="${args.type}">${args.text}</ui-button>`;

export const Primary = Template.bind({}) as any;
Primary.args = {
	text: "My primary button",
	type: "primary",
};

export const Secondary = Template.bind({}) as any;
Secondary.args = {
	text: "My secondary button",
	type: "secondary",
};

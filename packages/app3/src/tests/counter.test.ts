// @ts-ignore
import Counter from "../components/Counter.vue";

import { mount } from "@vue/test-utils";
import store from "../store";

describe("Counter", () => {
	it("increment button should increment the counter", async () => {
		const wrapper = mount(Counter);
		const incrementGlobalBtn = wrapper.find("#incrementBtn");
		const incrementText = wrapper.find("#local_counter");

		const spy = jest.spyOn(wrapper.vm, "increment");
		const fnDispatch = jest.spyOn(store, "dispatch");
		incrementGlobalBtn.trigger("click");
		await wrapper.vm.$nextTick();
		expect(spy).toHaveBeenCalled();
		expect(fnDispatch).toHaveBeenCalledWith("counterIncrement");
		expect(+incrementText.text().split(" ")[2]).toBe(1);
	});

	it("increment global button should increment the global counter", async () => {
		const wrapper = mount(Counter);
		await wrapper.setProps({ globalEventDistributor: { globalStore: { counter: 0 } } });
		const incrementGlobalBtn = wrapper.find("#incrementGlobalBtn");

		incrementGlobalBtn.trigger("click");
		expect(wrapper.props().globalEventDistributor.globalStore.counter).toBe(1);
		await wrapper.vm.$nextTick();
		expect(wrapper.props().globalEventDistributor.globalStore.counter).toBe(1);
	});
});

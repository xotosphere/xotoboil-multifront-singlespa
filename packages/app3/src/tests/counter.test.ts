// @ts-ignore
import Counter from "../components/Counter.vue";

import { mount } from "@vue/test-utils";
import store from "../store";

describe("Counter", () => {
	it("increment button should increment the counter", async () => {
		const wrapper = mount(Counter);
		const incrementCrossBtn = wrapper.find("#incrementBtn");
		const incrementText = wrapper.find("#local_counter");

		const spy = jest.spyOn(wrapper.vm, "increment");
		const fnDispatch = jest.spyOn(store, "dispatch");
		incrementCrossBtn.trigger("click");
		await wrapper.vm.$nextTick();
		expect(spy).toHaveBeenCalled();
		expect(fnDispatch).toHaveBeenCalledWith("counterIncrement");
		expect(+incrementText.text().split(" ")[2]).toBe(1);
	});

	it("increment cross button should increment the cross counter", async () => {
		const wrapper = mount(Counter);
		await wrapper.setProps({ crossEventDistributor: { crossStore: { counter: 0 } } });
		const incrementCrossBtn = wrapper.find("#incrementCrossBtn");

		incrementCrossBtn.trigger("click");
		expect(wrapper.props().crossEventDistributor.crossStore.counter).toBe(1);
		await wrapper.vm.$nextTick();
		expect(wrapper.props().crossEventDistributor.crossStore.counter).toBe(1);
	});
});

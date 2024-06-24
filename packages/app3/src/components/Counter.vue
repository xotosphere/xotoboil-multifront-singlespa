<template>
	<div>
		<h1>vue app3</h1>
		<h2 id="local_counter">Local Counter {{ counter }}</h2>
		<h2 id="cross_counter">Cross Counter {{ crossCounter }}</h2>
		<div class="action">
			<ui-button id="incrementBtn" @click="increment()">increment</ui-button>
			<ui-button id="incrementCrossBtn" @click="incrementCross">increment cross</ui-button>
		</div>
	</div>
</template>

<script lang="ts">
import store from "../store";
import { Prop, Options, Watch } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";

import { UiButton } from "@xotoboil-multifront-singlespa/ui-vue";

@Options({ name: "Counter", components: { UiButton } })
export default class Counter extends Vue {
	@Prop()
	crossEventDistributor!: CrossEventDistributor;

	crossCounter = 0;

	get counter() {
		return store.state.counter;
	}

	increment() {
		store.dispatch("counterIncrement");
	}

	created(): void {
		this.crossCounter = this.crossEventDistributor.crossStore.counter;
		this.crossEventDistributor.on("increment", () => {
			this.crossCounter = this.crossEventDistributor.crossStore.counter;
		});
	}

	incrementCross() {
		if (this.crossEventDistributor) {
			this.crossEventDistributor.crossStore.counter += 1;
			this.crossEventDistributor.emit("increment");
		}
	}
}
</script>

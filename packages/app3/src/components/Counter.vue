<template>
	<div>
		<h1>vue app3</h1>
		<h2 id="local_counter">Local Counter {{ counter }}</h2>
		<h2 id="global_counter">Global Counter {{ globalCounter }}</h2>
		<div class="action">
			<ui-button id="incrementBtn" @click="increment()">increment</ui-button>
			<ui-button id="incrementGlobalBtn" @click="incrementGlobal">increment global</ui-button>
		</div>
	</div>
</template>

<script lang="ts">
import store from "../store";
import { Prop, Options, Watch } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

import { UiButton } from "@xotoboil-multifront/ui-vue";

@Options({ name: "Counter", components: { UiButton } })
export default class Counter extends Vue {
	@Prop()
	globalEventDistributor!: GlobalEventDistributor;

	globalCounter = 0;

	get counter() {
		return store.state.counter;
	}

	increment() {
		store.dispatch("counterIncrement");
	}

	created(): void {
		this.globalCounter = this.globalEventDistributor.globalStore.counter;
		this.globalEventDistributor.on("increment", () => {
			this.globalCounter = this.globalEventDistributor.globalStore.counter;
		});
	}

	incrementGlobal() {
		if (this.globalEventDistributor) {
			this.globalEventDistributor.globalStore.counter += 1;
			this.globalEventDistributor.emit("increment");
		}
	}
}
</script>

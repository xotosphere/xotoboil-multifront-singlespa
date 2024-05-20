<template>
	<Counter :globalEventDistributor="globalEventDistributor" />
</template>

<script lang="ts">
import Counter from "./components/Counter.vue";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";
import { Vue } from "vue-class-component";

import { Model, Options, Prop } from "vue-property-decorator";
import store from "./store";

@Options({
	name: "App",
	components: { Counter },
})
export default class App extends Vue {
	@Prop()
	globalEventDistributor!: GlobalEventDistributor;
}
</script>

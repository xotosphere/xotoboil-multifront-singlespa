<template>
	<Counter :crossEventDistributor="crossEventDistributor" />
</template>

<script lang="ts">
import Counter from "./components/Counter.vue";
import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";
import { Vue } from "vue-class-component";

import { Model, Options, Prop } from "vue-property-decorator";
import store from "./store";

@Options({
	name: "App",
	components: { Counter },
})
export default class App extends Vue {
	@Prop()
	crossEventDistributor!: CrossEventDistributor;
}
</script>

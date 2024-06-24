/* eslint-disable */
/* tslint:disable */
import { Plugin } from "vue";
import { defineCustomElements } from "@xotoboil-singlespa-multifront/ui/loader";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};

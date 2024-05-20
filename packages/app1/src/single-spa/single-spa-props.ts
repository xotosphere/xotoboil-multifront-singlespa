import { GlobalEventDistributor } from "@xotoboil-multifront/common";
import { ReplaySubject } from "rxjs";
import { AppProps } from "single-spa";

export const singleSpaPropsSubject: ReplaySubject<SingleSpaProps> = new ReplaySubject<SingleSpaProps>(1);

export let globalEventDistributor: GlobalEventDistributor;

singleSpaPropsSubject.subscribe((data: any) => {
	if (data && data.globalEventDistributor) globalEventDistributor = data.globalEventDistributor;
});

/**
 * Add any custom single-spa props you have to this type def
 * https://single-spa.js.org/docs/building-applications.html#custom-props
 */

export type SingleSpaProps = AppProps & {
	globalEventDistributor: GlobalEventDistributor;
};

import { CrossEventDistributor } from "@xotoboil-multifront-singlespa/cross";
import { ReplaySubject } from "rxjs";
import { AppProps } from "single-spa";

export const singleSpaPropsSubject: ReplaySubject<SingleSpaProps> = new ReplaySubject<SingleSpaProps>(1);

export let crossEventDistributor: CrossEventDistributor;

singleSpaPropsSubject.subscribe((data: any) => {
	if (data && data.crossEventDistributor) crossEventDistributor = data.crossEventDistributor;
});

/**
 * Add any custom single-spa props you have to this type def
 * https://single-spa.js.org/docs/building-applications.html#custom-props
 */

export type SingleSpaProps = AppProps & {
	crossEventDistributor: CrossEventDistributor;
};

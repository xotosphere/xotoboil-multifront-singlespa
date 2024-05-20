import { Action } from "@ngrx/store";

export function createAction(type: string): Action {
	return { type };
}

import { Action } from "@ngrx/store";

export enum ActionTypes {
	IncrementCounter = "[Counter] IncrementCounter",
	DecrementCounter = "[Counter] DecrementCounter",
	ResetCounter = "[Counter] ResetCounter",
}

export class IncrementCounter implements Action {
	readonly type = ActionTypes.IncrementCounter;
}

export class DecrementCounter implements Action {
	readonly type = ActionTypes.DecrementCounter;
}

export class ResetCounter implements Action {
	readonly type = ActionTypes.ResetCounter;
}

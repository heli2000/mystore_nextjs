import {
  ActionType as CounterActionType,
  Counter,
} from "./cartCounter/actionTypes";

export interface rootState {
  cartCounter: Counter;
}

export type rootAction = CounterActionType;

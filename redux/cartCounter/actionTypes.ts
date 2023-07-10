export const UPDATECOUNTER = "UPDATECOUNTER";

export interface ActionType {
  type: string;
  counter: number;
}

export interface Counter {
  count: number;
}

export type DispatchType = (args: ActionType) => ActionType;

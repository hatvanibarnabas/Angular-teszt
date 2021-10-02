export enum FieldType {
  SIMPLE = 'simple',
  EXTRA = 'extra'
}

export enum DefaultState {
  NONE= 'none',
  YES = 'yes',
  NO = 'no'
}

export interface IField {
  type: FieldType;
  defaultState: DefaultState;
  showInLeftSide: boolean;
  showInPortal: boolean;
  question: string;

  placeholder?: string;
}

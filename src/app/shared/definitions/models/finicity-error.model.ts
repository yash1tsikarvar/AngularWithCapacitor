export type FinicityErrorActions =
  'NONE'
  | 'RETRY'
  | 'EXIT'
  ;

export interface FinicityError {
  title: string;
  text: string;
  buttonText: string;
  returnCode: FinicityErrorActions;
}

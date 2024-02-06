export interface LandlordAnswer {
  questionHtmlText: string;
  formName: string;
  formGroup: string;
  answers: LandlordAnswerOptions[];
}

export interface LandlordAnswerOptions {
  id: string;
  value: string;
  txtResponse?: LandlordAnswerResponse[];
}

export interface LandlordAnswerResponse {
  text: string;
  fieldName: string;
  type: answerDetailType;
  maxLength?: number;
  max?: number;
  min?: number;
  validators: any[];
}

export type answerDetailType = 'text' | 'number';




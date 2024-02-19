export interface CharacterAnswer {
  questionHtmlText: string;
  formName: string;
  formGroup: string;
  answers: CharacterAnswerOptions[];
}

export interface CharacterAnswerOptions {
  id: string;
  value: string;
  txtResponse?: CharacterAnswerResponse[];
}

export interface CharacterAnswerResponse {
  text: string;
  fieldName: string;
  type: answerDetailType;
  maxLength?: number;
  max?: number;
  min?: number;
  validators: any[];
}

export type answerDetailType = 'text' | 'number';




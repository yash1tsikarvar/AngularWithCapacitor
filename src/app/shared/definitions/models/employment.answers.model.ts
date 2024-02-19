export interface EmploymentAnswer {
  questionHtmlText: string;
  formName: string;
  formGroup: string;
  answers: EmploymentAnswerOptions[];
}

export interface EmploymentAnswerOptions {
  id: string;
  value: string;
  txtResponse?: EmploymentAnswerResponse[];
}

export interface EmploymentAnswerResponse {
  text: string;
  fieldName: string;
  type: answerDetailType;
  maxLength?: number;
  max?: number;
  min?: number;
  validators: any[];
}

export type answerDetailType = 'text' | 'number';




  export interface VerifyCodeRequest {
    code: string;
    value: string;
    sentType: number;
    role: string;
  }

  export interface ResendCodeRequest {
    user: number;
    value: string;
    sentType: number;
    role: string;
  }

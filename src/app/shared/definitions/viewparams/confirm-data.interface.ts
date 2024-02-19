import { SweetAlertType } from "sweetalert2";

export interface ConfirmDataInterface {
  message: string;
  title?: string;
  html?: string;
  showCancel?: boolean;
  type?: SweetAlertType;
  confirmButtonText?: string;
  img?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface ErrorAlert {
  message: string;
  title?: string;
  html?: string;
  showCancel?: boolean;
  type?: SweetAlertType;
  confirmButtonText?: string;
}

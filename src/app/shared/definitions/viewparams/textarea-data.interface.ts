import { SweetAlertType } from 'sweetalert2';

export interface TextareaDataInterface {
  message: string;
  title?: string;
  showCancel?: boolean;
  type?: SweetAlertType;
  confirmButtonText?: string;
  textPlaceHolder: string;
}

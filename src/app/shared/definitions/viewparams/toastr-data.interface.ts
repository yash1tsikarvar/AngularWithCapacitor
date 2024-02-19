export type ToastrType = 'default' | 'success' | 'info' | 'warning' | 'error';
export interface ToastrDataInterface {
  message: string;
  title?: string;
  removeCurrent?: boolean;
  keepOpen?: boolean;
  positionClass?: string;
}

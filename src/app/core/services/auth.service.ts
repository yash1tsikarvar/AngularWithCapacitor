
import {of as observableOf, Observable, BehaviorSubject} from 'rxjs';

import {switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {NewTenantApplicantRequest} from '../../shared/definitions/requests/new-tenant-applicant.request';


import {LoginVmRequest} from '../../shared/definitions/requests/login-vm.request';
import {LoginResponse} from '../../shared/definitions/responses/login.response';
import {ServiceUtils} from './service.utils';
import {DecodeTokenModel} from '../../shared/definitions/models/decode-token.model';
import {ResendCodeRequest, VerifyCodeRequest } from '../../shared/definitions/requests/send-sms.request';

@Injectable()
export class AuthService {

  private authStatusSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  authStatus: string | null;
  authStatus$: Observable<string> = this.authStatusSubject.asObservable();
  public redirectUrl: string;

  /**
   *
   * @param email
   */
  set email(email: string) {
    localStorage.setItem('email', email);
  }

  get email(): string {
    return localStorage.getItem('email');
  }

  constructor(
    private httpService: HttpService,
  ) {
    this.isAuthenticated();
  }

  /**
   * Check if the user is authenticated or not by calling the current token id.
   */
  isAuthenticated(): boolean {
    return !!this.getUserIdToken();
  }

  /**
   * Login the user in the platform.
   *
   * @param credentials
   */
  login(data: LoginVmRequest): Observable<LoginResponse> {
    return this.httpService
      .login(data).pipe(
      switchMap(token => {
        this.saveToken(JSON.parse(token));
        return observableOf(token);
      }));
  }

  /**
   *  Register the user with the provided data.
   *
   * @param {NewTenantApplicantRequest} data
   * @returns {Observable<any>}
   */
  register(data: NewTenantApplicantRequest): Observable<any> {

    return this.httpService
      .register(data);
  }

  /**
   * Log Out the current user of the platform.
   */
  logOut(): Observable<boolean> {
    return Observable.create(
      (observer) => {
        const widgetStorage = localStorage.getItem('rWidget-faces');
        localStorage.clear();
        if (widgetStorage) localStorage.setItem('rWidget-faces', widgetStorage);
        this.authStatusSubject.next('');
        observer.next(true);
        observer.complete();
      }
    );
  }

  /**
   * Save the token in the local storage
   *
   * @param {LoginResponse} token
   */
  saveToken(token: LoginResponse) {
    const decodedToken: DecodeTokenModel = ServiceUtils.decodeToken(token.id_token);

    localStorage.setItem('decodedToken', JSON.stringify(decodedToken));
    localStorage.setItem('tenantEvToken', token.id_token);



    this.authStatusSubject.next(token.id_token);
  }

  /**
   * Get the Saved User Id Token
   *
   * @returns {string | null}
   */
  getUserIdToken(): string | null {
    this.authStatus = localStorage.getItem('tenantEvToken');
    this.authStatusSubject.next(this.authStatus);
    return this.authStatus;
  }

  getDecodedToken(): DecodeTokenModel {
    return this.getInfoFromLocalStorage<DecodeTokenModel>('decodedToken');
  }

  /**
   * Get information saved on the session storage.
   *
   * @param key
   * @return {T | null}
   */
  private getInfoFromLocalStorage<T>(key: string): T | null {
    const info = localStorage.getItem(key);
    return info ? JSON.parse(info) : null;
  }


 /**
   *  Verify code with the provided data.
   *
   * @param {VerifyCodeRequest} data
   * @returns {Observable<any>}
   */
  verifyCode(data: VerifyCodeRequest): Observable<any> {

    return this.httpService
      .verifyCode(data);
  }


 /**
   *  Resend code verification with the provided data.
   *
   * @param {ResendRequest} data
   * @returns {Observable<any>}
   */
  resendCode(data: ResendCodeRequest): Observable<any> {

    return this.httpService
      .resendCode(data);
  }

  isCallCenterL1(): boolean {
    return this.getDecodedToken() !== null && this.getDecodedToken().auth.includes('ROLE_CALL_CENTER_L1');
  }
}

import {FormGroup} from '@angular/forms';
import {Subject, Observable} from 'rxjs';
import {EventEmitter} from '@angular/core';

export interface ChildForm {
  childForm: FormGroup;
  formReady$: Subject<boolean>;
  dataReady$: Subject<boolean>;
  unsubscribeSubject: Subject<boolean>;
  info: Observable<any>;
  data: any;

  formChanged: EventEmitter<any>;

  /**
   * Init the Child Form
   */
  initForm();

  /**
   * Subscribe to form changes
   */
  subscribeToFormChanges();

  /**
   * Fill control values with information stored previously
   */
  defaultValues?();

  /**
   * Mark Form Controls as touched
   */
  markControlsAsTouched();

  /**
   * Get the error for the given control name.
   *
   * @param {string} controlName
   * @returns {string}
   */
  getError(controlName: string): string;

  /**
   * Submit the form
   */
  submit();

  /**
   * Subscribe to form validation.
   */
  listenForFormValidation();
}

import {FormGroup} from '@angular/forms';
import {ProfileForm} from '../../shared/definitions/forms/profile-form/profile-form.interface';
import {CoApplicantType} from '../../shared/definitions/types/co-applicant.type';
import {ApplicationSubType} from '../../shared/definitions/types/application-sub-type';
import {Subject} from '../../../../node_modules/rxjs/Subject';

export interface StepForm {
  stepForm: FormGroup;
  code: string;
  coApplicantType: CoApplicantType;
  unsubscribeSubject: Subject<boolean>;
  type: ApplicationSubType;
  mainFormValues: ProfileForm;

  /**
   * Subscribe to route params
   * @deprecated The profile form service
   */
  subscribeToRouteParams?();

  listenToApplicationParams();

  /**
   * Init the step form
   */
  initForm();

  /**
   * Submit the form
   */
  submit();

  /**
   * Subscribe to the main form provided in the {@link ProfileFormService}
   */
  subscribeToMainFormChanges();

  /**
   * Emit form values to child forms
   */
  emitMainFormValues();

  /**
   * Save the data with the {@link ProfileFormService}
   * @param {string} controlName
   * @param {T} data
   */
  saveData<T>(controlName: string, data: T);
}

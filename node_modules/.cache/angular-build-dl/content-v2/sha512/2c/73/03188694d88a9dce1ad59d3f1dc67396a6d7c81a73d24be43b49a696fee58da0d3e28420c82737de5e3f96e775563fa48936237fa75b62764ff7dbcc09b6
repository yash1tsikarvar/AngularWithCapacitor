function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifications-verifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/character/character.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsCharacterCharacterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\r\n\r\n  <mat-spinner class=\"centered\" *ngIf=\"status===''\"></mat-spinner>\r\n\r\n  <div *ngIf=\"status === 'Pending'\">\r\n\r\n    <tev-verification-title [status]=\"status\" [hasDecline]=\"true\" [description]=\"getDescription()\"\r\n                            [name]=\"character.applicantName\"\r\n                            [type]=\"type\"\r\n                            [verificationName]=\"title\" (decline)=\"declineEvent()\"></tev-verification-title>\r\n\r\n\r\n\r\n    <div class=\"verification-form-container py-2\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"row\">\r\n          <!-- knows --->\r\n          <div class=\"col-12 px-5 py-4\">\r\n            <p>Do you know <span class=\"txt-bold\">{{character.applicantName}}</span>?</p>\r\n            <mat-radio-group formControlName=\"knows\" required aria-label=\"Select an option\">\r\n              <mat-radio-button value=\"Y\">Yes</mat-radio-button>\r\n              <mat-radio-button value=\"N\">No</mat-radio-button>\r\n              <mat-error *ngIf=\"showError\">{{getError(\"knows\")}}</mat-error>\r\n            </mat-radio-group>\r\n          </div>\r\n          <!-- ./knows -->\r\n\r\n          <!--          Know ago-->\r\n          <div *ngIf=\"know\" class=\"col-sm-12 col-lg-6 px-5\">\r\n                <mat-label>* For how long have you known {{character.applicantName}}?:</mat-label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-lg-6\">\r\n                  <mat-form-field appearance=\"legacy\">\r\n                    <input matInput formControlName=\"knowAgoYears\" maxlength=\"2\" type=\"integer\"  placeholder=\"Years\">\r\n                    <mat-error *ngIf=\"showError\">\r\n                      <div ng-message='required'>At least years o months field is required</div></mat-error>\r\n                  </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-lg-6\">\r\n                  <mat-form-field appearance=\"legacy\">\r\n                    <input matInput formControlName=\"knowAgoMonths\" maxlength=\"2\" type=\"integer\" placeholder=\"Months\">\r\n                    <mat-error *ngIf=\"showError\">\r\n                      <div ng-message='required'>At least years o months field is required</div></mat-error>\r\n                  </mat-form-field>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n<!--          Relationship-->\r\n          <div *ngIf=\"know\" class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field>\r\n              <mat-label>* What is your relationship with {{character.applicantName}}?</mat-label>\r\n              <mat-select placeholder=\"Select one\" formControlName=\"relationship\">\r\n                <mat-option *ngFor=\"let option of relationship\" [value]=\"option.key\">{{option.name}}</mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"showError\">{{getError('relationship')}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n<!--        goodTenant  -->\r\n          <div *ngIf=\"know\" class=\"col-sm-12 col-lg-6 px-5\" style=\"margin-top: 2em\">\r\n            <p>* In your opinion, would you recommend <span class=\"txt-bold\">{{character.applicantName}}</span>? (If not, please further explain below in the remarks section).</p>\r\n          <mat-radio-group formControlName=\"goodTenant\" required aria-label=\"Select an option\">\r\n            <mat-radio-button value=\"Y\">Yes</mat-radio-button>\r\n            <mat-radio-button value=\"N\">No</mat-radio-button>\r\n            <mat-error *ngIf=\"showError\">{{getError(\"goodTenant\")}}</mat-error>\r\n          </mat-radio-group>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 px-4 py-4\">\r\n          <label class=\"txt-bold\">{{ remarks }}</label>\r\n          <textarea formControlName=\"remarks\" name=\"remarks\" class=\"form-control txt-xs\" rows=\"3\"></textarea>\r\n          <mat-error *ngIf=\"showError\">{{getError(\"remarks\")}}</mat-error>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>What is your name?</mat-label>\r\n              <input matInput formControlName=\"verifierName\" maxlength=\"50\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierName\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"know\" class=\"row\" style=\"margin-top: 2em\">\r\n          <div class=\"col-12 px-5\">\r\n            <div class=\"agreement-checkbox custom-checkbox\">\r\n              <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\r\n                            formControlName=\"agreeAndAuthorize\"\r\n                            id=\"agree\">I hereby certify the above statements are true and correct to the best of my\r\n                knowledge\r\n              </mat-checkbox>\r\n            </div>\r\n            <mat-error *ngIf=\"showError\">{{getErrorAgreeAndAuthorize()}}</mat-error>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <tev-verification-footer *ngIf=\"status!=='Complete'\" (submitEvent)=\"submitEvent()\"></tev-verification-footer>\r\n  </div>\r\n\r\n  <div *ngIf=\"status === 'Complete'\">\r\n    <tev-verification-finish [title]=\"title\" [complete]=\"status==='Complete'\" [id]=\"id\"\r\n                             [error]=\"errorData\"></tev-verification-finish>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/employment/employment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsEmploymentEmploymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\r\n\r\n  <mat-spinner class=\"centered\" *ngIf=\"status===''\"></mat-spinner>\r\n\r\n  <div *ngIf=\"status === 'Pending'\">\r\n\r\n    <tev-verification-title [status]=\"status\" [hasDecline]=\"true\" [description]=\"getDescription()\"\r\n                            [name]=\"employment.applicantName\"\r\n                            [type]=\"type\"\r\n                            [verificationName]=\"title\" (decline)=\"declineEvent()\"></tev-verification-title>\r\n\r\n\r\n    <div class=\"verification-form-container py-2\">\r\n      <div *ngIf=\"employment.authForm\" class=\"box px-4\">\r\n        <p>If you require an authorization form signed by the tenant, please click to download document. <a\r\n          class=\"btn btn-secondary tev-btn--common\" href=\"{{employment.authForm}}\" target=\"_blank\">Authorization\r\n          form</a></p>\r\n      </div>\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"row\" style=\"margin-top: 2em;\">\r\n          <!-- Name -->\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>* What is your name?</mat-label>\r\n              <input matInput formControlName=\"verifierName\" maxlength=\"50\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierName\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- Position -->\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>* What is your Position?</mat-label>\r\n              <input matInput formControlName=\"verifierPosition\" maxlength=\"100\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierPosition\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 2em;\">\r\n          <!-- Company -->\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>* Company Name</mat-label>\r\n              <input matInput formControlName=\"verifierCompanyName\" maxlength=\"50\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierCompanyName\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row verification-part\" style=\"margin-top: 2em;\">\r\n          <div class=\"col-12 form-group\">\r\n            <p class=\"text-center\"><strong>PLEASE ANSWER THESE QUESTIONS</strong></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 2em;\">\r\n          <!-- Begin work -->\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>* When {{employment.applicantName}} did begin working in {{ employment.companyName }}?</mat-label>\r\n              <input matInput\r\n                     formControlName=\"verifierBeginWork\"\r\n                     id=\"profileBeginWork\"\r\n                     (focus)=\"picker.open()\"\r\n                     [matDatepicker]=\"picker\"\r\n                     placeholder=\"Select a date\"\r\n              >\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker startView=\"multi-year\"></mat-datepicker>\r\n              <mat-error *ngIf=\"showError\">{{getError('verifierBeginWork')}}</mat-error>\r\n              <mat-hint>mm/dd/yyyy</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- Current Position -->\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>* What is {{employment.applicantName}}'s current position?</mat-label>\r\n              <input matInput formControlName=\"verifierCurrentPosition\" maxlength=\"100\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierCurrentPosition\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 2em;\">\r\n          <!-- Current Salary -->\r\n          <div class=\"col-sm px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>What is {{employment.applicantName}}'s current salary? ($)</mat-label>\r\n              <input matInput\r\n                     type=\"text\"\r\n                     class=\"form-control\"\r\n                     maxlength=\"9\"\r\n                     formControlName=\"verifierCurrentSalary\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierCurrentSalary\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- How often -->\r\n          <div class=\"col-sm-2\">\r\n              <mat-form-field appearance=\"legacy\">\r\n                <mat-select placeholder=\"How often?\" formControlName=\"verifierOften\">\r\n                  <mat-option *ngFor=\"let option of salaryPeriods\" [value]=\"option.key\">{{option.name}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </div>\r\n          <!-- Full or Part -->\r\n          <div class=\"col-sm px-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"* Is this full or part-time position?\" formControlName=\"verifierFullPart\">\r\n                  <mat-option *ngFor=\"let option of employmentTimeVerify\" [value]=\"option.key\">{{option.name}}</mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"showError\">{{getError('verifierFullPart')}}</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div style=\"margin-left: 1.5em; margin-top: 2em\">\r\n          All fields marked with * are required.\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <tev-verification-footer *ngIf=\"status!=='Complete'\" (submitEvent)=\"submitEvent()\"></tev-verification-footer>\r\n  </div>\r\n\r\n  <div *ngIf=\"status === 'Complete'\">\r\n    <tev-verification-finish [title]=\"title\" [complete]=\"status==='Complete'\" [id]=\"id\"\r\n                             [type]=\"type\"\r\n                             [error]=\"errorData\"></tev-verification-finish>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/landlord/landlord.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsLandlordLandlordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\r\n\r\n  <mat-spinner class=\"centered\" *ngIf=\"status===''\"></mat-spinner>\r\n\r\n  <div *ngIf=\"status === 'Pending'\">\r\n\r\n    <tev-verification-title [status]=\"status\" [hasDecline]=\"true\" [description]=\"getDescription()\"\r\n                            [name]=\"landlord.applicantName\"\r\n                            [type]=\"type\"\r\n                            [verificationName]=\"title\" (decline)=\"declineEvent()\"></tev-verification-title>\r\n\r\n\r\n\r\n    <div class=\"verification-form-container py-2\">\r\n      <div *ngIf=\"landlord.authForm\" class=\"box px-4\">\r\n        <p >If you require an authorization form signed by the tenant, please click to download document. <a class=\"btn btn-secondary tev-btn--common\" href=\"{{landlord.authForm}}\" target=\"_blank\">Authorization form</a></p>\r\n      </div>\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"row\">\r\n          <!-- knows --->\r\n          <div class=\"col-12 px-5 py-4\">\r\n            <p><span class=\"txt-bold\">{{landlord.applicantName}}</span> states he/she rents the property located at\r\n              {{landlord.address}}.\r\n            </p>\r\n            <p>Do you know <span class=\"txt-bold\">{{landlord.applicantName}}</span>?</p>\r\n            <mat-radio-group formControlName=\"knows\" required aria-label=\"Select an option\">\r\n              <mat-radio-button value=\"Y\">Yes</mat-radio-button>\r\n              <mat-radio-button value=\"N\">No</mat-radio-button>\r\n              <mat-error *ngIf=\"showError\">{{getError(\"knows\")}}</mat-error>\r\n            </mat-radio-group>\r\n          </div>\r\n          <!-- ./knows -->\r\n\r\n          <div *ngFor=\"let item of data; let i = index\" [class]=\"getClassRow(i)\">\r\n            <tev-answer *ngIf=\"know\" [showErrors]=\"showError\" [answer]=\"item\" [formGroup]=\"form\"></tev-answer>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-12 px-4 py-4\">\r\n          <label class=\"txt-bold\">Remarks?</label>\r\n          <textarea formControlName=\"remarks\" name=\"remarks\" class=\"form-control txt-xs\" rows=\"3\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>What is your name?</mat-label>\r\n              <input matInput formControlName=\"verifierName\" maxlength=\"50\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierName\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>What is your Relationship with the property?</mat-label>\r\n              <input matInput formControlName=\"verifierPosition\" maxlength=\"100\" type=\"text\">\r\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierPosition\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <!--\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>What is your email?</mat-label>\r\n              <input matInput type=\"email\" maxlength=\"100\" formControlName=\"verifierEmail\">\r\n              <mat-error>{{getError(\"verifierEmail\")}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-12 col-lg-6 px-5\">\r\n            <mat-checkbox formControlName=\"sendResult\">Send me a copy of my responses</mat-checkbox>\r\n          </div>\r\n          -->\r\n        </div>\r\n\r\n        <div *ngIf=\"know\" class=\"row\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"signature\">\r\n\r\n              <div class=\"signature__group\">\r\n                <label class=\"signature__label\">Signature</label>\r\n                <div class=\"signature-canvas\">\r\n\r\n                  <span class=\"signature__float\" *ngIf=\"!form.value['signature']\">SIGN HERE</span>\r\n\r\n                  <div class=\"signature-wrapper\">\r\n                    <canvas id=\"signature-pad\" #signaturePad2></canvas>\r\n                  </div>\r\n\r\n                  <div class=\"signature-text\">\r\n                    <canvas id=\"signature-text\" #signatureText2></canvas>\r\n                  </div>\r\n\r\n                </div>\r\n                <input class=\"custom-control-input\"\r\n                       type=\"hidden\"\r\n                       formControlName=\"signature\"\r\n                >\r\n                <div class=\"invalid-feedback\" *ngIf=\"showError\"><p>{{getError('signature')}}</p></div>\r\n              </div>\r\n\r\n              <button class=\"tev-btn tev-btn--large mb-5\"\r\n                      type=\"button\" (click)=\"clearSignature()\">Clear\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12 px-5\">\r\n            <div class=\"agreement-checkbox custom-checkbox\">\r\n              <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\r\n                            formControlName=\"agreeAndAuthorize\"\r\n                            id=\"agree\">I hereby certify the above statements are true and correct to the best of my\r\n                knowledge\r\n              </mat-checkbox>\r\n            </div>\r\n            <mat-error *ngIf=\"showError\">{{getErrorAgreeAndAuthorize()}}</mat-error>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <tev-verification-footer *ngIf=\"status!=='Complete'\" (submitEvent)=\"submitEvent()\"></tev-verification-footer>\r\n  </div>\r\n\r\n  <div *ngIf=\"status === 'Complete'\">\r\n    <tev-verification-finish [title]=\"title\" [complete]=\"status==='Complete'\" [id]=\"id\"\r\n                             [error]=\"errorData\"></tev-verification-finish>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification-finish/verification-finish.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationFinishVerificationFinishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<tev-verification-title [verificationName]=\"title\"></tev-verification-title>\r\n<div class=\"col-12\">\r\n  <div class=\"verification-lower-text\">\r\n    <br/>\r\n    <div *ngIf=\"error\">\r\n      <img src=\"assets/icon-alert.svg\" alt=\"error icon\" class=\"icon-result\"/>\r\n      <p>We're very sorry for the inconvenience but we are unable to process your request.</p>\r\n      <p *ngIf=\"error\"><strong>{{type}} Verification {{id}} was not found. </strong></p>\r\n    </div>\r\n    <div *ngIf=\"complete && !error\">\r\n      <img src=\"assets/icon-success.svg\" alt=\"error icon\" class=\"icon-result\"/>\r\n      <p><strong>{{type}} has been completed. Thank you for your time.</strong></p>\r\n      <br/>\r\n    </div>\r\n    <p>If you have questions, please call Tenant Evaluation Customer Support at <a href=\"tel:(305) 692-7900\">(305) 692-7900</a></p>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-footer/verification-footer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationVerificationFooterVerificationFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-5 footer my-5\">\r\n\r\n  <div class=\"col-12 col-md-6\">\r\n    <p class=\"caption\">\r\n      If you have any questions, please call Tenant Evaluation customer support at: 1-305.692.7900\r\n    </p>\r\n  </div>\r\n  <div class=\"col-12 col-md-6 d-flex justify-content-sm-center footer\">\r\n    <button class=\"btn btn-lg btn-primary btn-block ml-md-auto mt-4 mt-lg-0\" (click)=\"submitEmit()\" >Submit</button>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-question-answer/answer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationVerificationQuestionAnswerAnswerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"formGroupAnswer\" class=\"answer\">\r\n  <p [innerHTML]=\"answer.questionHtmlText\"></p>\r\n\r\n  <mat-radio-group class=\"row\" [formControlName]=\"answer.formName\" aria-label=\"Select an option\">\r\n    <div *ngFor=\"let item of answer.answers\" [class]=\"'col-'+(12/3) +' answer'\">\r\n      <mat-radio-button [value]=\"item.value\">{{item.id}}</mat-radio-button>\r\n    </div>\r\n    <mat-error *ngIf=\"showErrors\">{{getErrorMessage(answer.formName)}}</mat-error>\r\n  </mat-radio-group>\r\n\r\n  <div *ngFor=\"let item of answer.answers\">\r\n    <div class=\"row full-width\">\r\n      <div *ngFor=\"let item2 of item.txtResponse\" [class]=\"'col-'+getWidth(item.txtResponse.length)\">\r\n        <div *ngIf=\"item.value==this.selectedItem\">\r\n          <span class=\"txt-bold\" [innerHTML]=\"item2.text\"></span>\r\n          <mat-form-field [id]=\"item2.fieldName\" appearance=\"legacy\">\r\n            <input matInput [type]=\"item2.type\"   [maxlength]=\"item2.maxLength\"\r\n                   placeholder=\"\" [formControlName]=\"item2.fieldName\" />\r\n            <mat-error>{{getErrorMessage(item2.fieldName)}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-title/verification-title.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationVerificationTitleVerificationTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\r\n\r\n  <div class=\"logo\">\r\n    <img src=\"/assets/logo-tenant-evaluation-alt.svg\" alt=\"Logo Tenant Evaluation\">\r\n  </div>\r\n  <h1 class=\"title\">{{verificationName}}</h1>\r\n\r\n  <div *ngIf=\"status==='Pending'\">\r\n    <div class=\"description\" [innerHTML]=\"description\"></div>\r\n    <div *ngIf=\"hasDecline\" >\r\n      <br>\r\n      <p style=\"text-align:center\">{{declineText}}</p>\r\n      <button class=\"btn btn-primary tev-btn--common decline-bt\" (click)=\"confirmDecline()\">I decline to participate\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"status==='Error'\">\r\n    <p>{{error}}</p>\r\n  </div>\r\n  <div *ngIf=\"status==='Complete'\">\r\n\r\n    <tev-message-with-icon *ngIf=\"error==='' ; else errVerification\" [img]=\"'assets/icon-green-check.svg'\" [altText]=\"'green check'\"\r\n                           [text]=\"'Verification Completed'\"\r\n                           [smallText]=\"' mas informacion '\"></tev-message-with-icon>\r\n\r\n    <ng-template #errVerification>\r\n      <tev-message-with-icon [img]=\"'assets/icon-alert.svg'\" [altText]=\"'alert icon'\"\r\n                             [text]=\"error\"\r\n                             [smallText]=\"' mas informacion '\"></tev-message-with-icon>\r\n    </ng-template>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verifications-router/verifications.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationsRouterVerificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/shared/definitions/forms/profile-form/references/employmentTimeVerify.ts": function srcAppSharedDefinitionsFormsProfileFormReferencesEmploymentTimeVerifyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmploymentTimePeriods", function () {
      return EmploymentTimePeriods;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EmploymentTimePeriods = [{
      key: '1',
      name: 'Part Time'
    }, {
      key: '2',
      name: 'Full Time'
    }];
    /***/
  },

  /***/
  "./src/app/shared/definitions/models/personal-reference-verification.model.ts": function srcAppSharedDefinitionsModelsPersonalReferenceVerificationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnowAgoCharacter", function () {
      return KnowAgoCharacter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelationshipCharacter", function () {
      return RelationshipCharacter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var KnowAgoCharacter = [{
      key: 0,
      name: 'Less than 1 year'
    }, {
      key: 1,
      name: '1-2 years'
    }, {
      key: 2,
      name: '3-5 years'
    }, {
      key: 3,
      name: '5-10 years'
    }, {
      key: 4,
      name: 'more than 10 years'
    }];
    var RelationshipCharacter = [{
      key: 16,
      name: 'Business Partner'
    }, {
      key: 15,
      name: 'Co-Worker'
    }, {
      key: 18,
      name: 'Colleague'
    }, {
      key: 12,
      name: 'Friend'
    }];
    /***/
  },

  /***/
  "./src/app/verifications/character/character.component.scss": function srcAppVerificationsCharacterCharacterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  text-align: center;\n}\n.box button {\n  margin-bottom: 35px;\n}\n.mark-colum {\n  border-right: solid;\n  border-color: gray;\n}\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.signature .signature-text {\n  z-index: 0;\n}\n.signature .invalid-feedback {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n@media (max-width: 767.98px) {\n  .mark-colum {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9ucy9jaGFyYWN0ZXIvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdmVyaWZpY2F0aW9uc1xcY2hhcmFjdGVyXFxjaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0FDSkY7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURNQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBZGlCO0VBZWpCLGtCQUFBO0VBQ0EseUJBQUE7QUNGRjtBRElBO0VBQ0UsV0FBQTtFQUNBLGFBcEJpQjtBQ21CbkI7QURJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBNUJVO0VBNkJWLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLHlCQXBDUztFQXFDVCxjQW5DUTtFQW9DUix5QkFBQTtFQUNBLGlCQXBDZTtFQXFDZixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7QURNQTtFQUNFO0lBQ0Usa0JBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9ucy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XHJcbiRub3JtYWwtZ3JheTogI2RiZGJkYjtcclxuJGRhcmstZ3JheTogIzc3NzQ3ZTtcclxuJHNpZ25hdHVyZS1oZWlnaHQ6IDI2MHB4O1xyXG5cclxuLmJveCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgfVxyXG59XHJcbi5tYXJrLWNvbHVtIHtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG4uc2lnbmF0dXJlLWNhbnZhcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAkc2lnbmF0dXJlLWhlaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRlNjtcclxufVxyXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xyXG59XHJcbi5zaWduYXR1cmUge1xyXG4gICZfX2Zsb2F0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAkbm9ybWFsLWdyYXk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTtcclxuICB9XHJcbiAgLnNpZ25hdHVyZS13cmFwcGVyLCAuc2lnbmF0dXJlLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRub3JtYWwtZ3JheTtcclxuICAgIG1pbi1oZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnNpZ25hdHVyZS10ZXh0IHtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAubWFyay1jb2x1bSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIi5ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm94IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5tYXJrLWNvbHVtIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuXG4uc2lnbmF0dXJlLWNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XG59XG5cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cblxuLnNpZ25hdHVyZV9fZmxvYXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNkYmRiZGI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5O1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUgLnNpZ25hdHVyZS10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICM3Nzc0N2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIHotaW5kZXg6IDA7XG59XG4uc2lnbmF0dXJlIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubWFyay1jb2x1bSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verifications/character/character.component.ts": function srcAppVerificationsCharacterCharacterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterComponent", function () {
      return CharacterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/utils/HTTPStatusCode */
    "./src/app/shared/utils/HTTPStatusCode.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _shared_definitions_models_personal_reference_verification_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/definitions/models/personal-reference-verification.model */
    "./src/app/shared/definitions/models/personal-reference-verification.model.ts");

    var CharacterComponent = /*#__PURE__*/function () {
      function CharacterComponent(fb, httpService, activeRoute, uiService, route) {
        _classCallCheck(this, CharacterComponent);

        this.fb = fb;
        this.httpService = httpService;
        this.activeRoute = activeRoute;
        this.uiService = uiService;
        this.route = route;
        this.status = '';
        this.errorData = '';
        this.title = 'Character Verification Form';
        this.type = 'Character';
        this.know = Boolean(0);
        this.relationship = _shared_definitions_models_personal_reference_verification_model__WEBPACK_IMPORTED_MODULE_10__["RelationshipCharacter"];
        this.remarks = 'Remarks ?';
        this.listenToUrlParams();
      }

      _createClass(CharacterComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this = this;

          this.activeRoute.params.subscribe(function (params) {
            _this.id = params.id;
            _this.hash = params.hash;

            _this.getDataFromService(_this.id, _this.hash);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            knows: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remarks: ['', null],
            goodTenant: ['', null],
            knowAgoYears: ['', null],
            knowAgoMonths: ['', null],
            relationship: ['', null],
            verifierName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sendResult: [],
            agreeAndAuthorize: []
          });
        }
      }, {
        key: "getDataFromService",
        value: function getDataFromService(id, hash) {
          var _this2 = this;

          this.httpService.getCharacterVerification(id, hash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this2.errorCharacter(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
          })).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
              _this2.correctResponse(res);
            }
          });
        }
      }, {
        key: "correctResponse",
        value: function correctResponse(res) {
          if (res) {
            this.character = res;

            if (res.status === 'Complete') {
              this.status = 'Complete';
              return;
            }

            this.initForm();
            this.status = this.character.status;
            return;
          }

          this.errorData = 'Can´t Parse Object';
          return;
        }
      }, {
        key: "errorCharacter",
        value: function errorCharacter(error) {
          switch (error.status) {
            case _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].NOT_FOUND:
              this.errorData = 'Verification Not Found';
              break;

            default:
              this.errorData = error.message;
              break;
          }

          this.status = 'Complete';
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var _this3 = this;

          this.form.get('knows').valueChanges.subscribe(function (val) {
            _this3.changeKnows(val);
          });
          this.form.get('knowAgoYears').valueChanges.subscribe(function (val) {
            _this3.changeKnowAgo(val);
          });
          this.form.get('knowAgoMonths').valueChanges.subscribe(function (val) {
            _this3.changeKnowAgo(val);
          });
          this.form.get('goodTenant').valueChanges.subscribe(function (val) {
            _this3.changeGoodTenant(val);
          });
          this.form.get('sendResult').valueChanges.subscribe(function (val) {
            if (val) {
              _this3.form.get('verifierEmail').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            } else {
              _this3.form.get('verifierEmail').clearValidators();
            }

            _this3.form.get('verifierEmail').updateValueAndValidity();
          });
        }
      }, {
        key: "changeGoodTenant",
        value: function changeGoodTenant(val) {
          this.goodTenant = val && val === 'Y';

          if (this.goodTenant) {
            this.remarks = 'Remarks ?';
            this.cleanAndClearValidators(this.form, 'remarks', false);
          } else {
            this.remarks = '* Remarks ?';
            this.addValidators(this.form.get('remarks'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          }
        }
      }, {
        key: "changeKnowAgo",
        value: function changeKnowAgo(val) {
          if (this.form.get('knowAgoYears').value && !this.form.get('knowAgoMonths').value) {
            this.form.get('knowAgoMonths').clearValidators();
            this.form.get('knowAgoMonths').updateValueAndValidity({
              emitEvent: false
            });
          }

          if (this.form.get('knowAgoMonths').value && !this.form.get('knowAgoYears').value) {
            this.form.get('knowAgoYears').clearValidators();
            this.form.get('knowAgoYears').updateValueAndValidity({
              emitEvent: false
            });
          }

          if (!this.form.get('knowAgoMonths').value && !this.form.get('knowAgoYears').value) {
            this.form.get('knowAgoYears').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]);
            this.form.get('knowAgoYears').updateValueAndValidity({
              emitEvent: false
            });
            this.form.get('knowAgoMonths').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]);
            this.form.get('knowAgoMonths').updateValueAndValidity({
              emitEvent: false
            });
          }
        }
      }, {
        key: "changeKnows",
        value: function changeKnows(val) {
          this.know = val && val === 'Y';

          if (this.know) {
            this.addValidators(this.form.get('relationship'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.addValidators(this.form.get('knowAgoYears'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]);
            this.addValidators(this.form.get('knowAgoMonths'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]);
            this.addValidators(this.form.get('goodTenant'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.addValidators(this.form.get('agreeAndAuthorize'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue);
            this.remarks = 'Remarks ?';
            this.cleanAndClearValidators(this.form, 'remarks', false);
          } else {
            this.cleanAndClearValidators(this.form, 'relationship', false);
            this.cleanAndClearValidators(this.form, 'knowAgoYears', false);
            this.cleanAndClearValidators(this.form, 'knowAgoMonths', false);
            this.cleanAndClearValidators(this.form, 'goodTenant', false);
            this.cleanAndClearValidators(this.form, 'agreeAndAuthorize', false);
            this.remarks = '* Remarks ?';
            this.addValidators(this.form.get('remarks'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          }
        }
      }, {
        key: "addValidators",
        value: function addValidators(parentGroup, validators) {
          parentGroup.setValidators(validators);
          parentGroup.updateValueAndValidity({
            emitEvent: true
          });
        }
      }, {
        key: "cleanAndClearValidators",
        value: function cleanAndClearValidators(parentGroup, name) {
          var emitEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          parentGroup.get(name).reset(null, {
            emitEvent: emitEvent
          });
          parentGroup.get(name).setValue(null, {
            emitEvent: emitEvent
          });
          parentGroup.get(name).clearValidators();
          parentGroup.get(name).updateValueAndValidity({
            emitEvent: false
          });
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          if (this.character.applicantName) {
            return '<strong>' + this.character.applicantName + '</strong> has applied to a new residence. You are receiving this email because <strong>' + this.character.applicantName + '</strong> entered your contact information as their personal reference. As part of the application process, we need to verify ' + 'their character. Please take a moment to complete the following online character verification form.';
          }
        }
      }, {
        key: "submitEvent",
        value: function submitEvent() {
          var _this4 = this;

          this.form.markAllAsTouched();
          this.showError = true;

          if (this.form.valid) {
            var dto = this.getDTOFromForm();
            this.httpService.saveCharacterVerification(this.id, this.hash, dto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              _this4.errorCharacter(error);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            })).subscribe(function (res) {
              if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
                _this4.correctResponse(res);
              }
            });
          }
        }
      }, {
        key: "getDTOFromForm",
        value: function getDTOFromForm() {
          var dto = this.form.value;
          return {
            isKnown: dto.knows,
            remarks: dto.remarks,
            relationship: dto.relationship,
            knowAgoYears: dto.knowAgoYears,
            knowAgoMonths: dto.knowAgoMonths,
            goodTenant: dto.goodTenant === 'Y',
            name: dto.verifierName
          };
        }
      }, {
        key: "getClassRow",
        value: function getClassRow(i) {
          return i % 2 !== 0 ? 'col-sm-12 col-lg-6 px-5 mark-colum' : 'col-sm-12 col-lg-6 px-5';
        }
      }, {
        key: "declineEvent",
        value: function declineEvent() {
          var _this5 = this;

          this.httpService.declineCharacterVerification(this.id, this.hash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this5.errorCharacter(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
          })).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
              _this5.correctResponse(res);
            }
          });
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          if (this.form.get(controlName) && this.form.get(controlName).errors != null) {
            var _this$form$get = this.form.get(controlName),
                errors = _this$form$get.errors;

            return this.uiService.getControlError(errors);
          }

          return '';
        }
      }, {
        key: "getErrorAgreeAndAuthorize",
        value: function getErrorAgreeAndAuthorize() {
          if (this.know) {
            return this.form.get('agreeAndAuthorize').value ? '' : 'This field is required';
          } else {
            return '';
          }
        }
      }]);

      return CharacterComponent;
    }();

    CharacterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-character',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/character/character.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character.component.scss */
      "./src/app/verifications/character/character.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], CharacterComponent);
    /***/
  },

  /***/
  "./src/app/verifications/employment/employment.component.scss": function srcAppVerificationsEmploymentEmploymentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  text-align: center;\n}\n.box button {\n  margin-bottom: 35px;\n}\n.mark-colum {\n  border-right: solid;\n}\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.signature .signature-text {\n  z-index: 0;\n}\n.signature .invalid-feedback {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n@media (max-width: 767.98px) {\n  .mark-colum {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9ucy9lbXBsb3ltZW50L0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXHZlcmlmaWNhdGlvbnNcXGVtcGxveW1lbnRcXGVtcGxveW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvZW1wbG95bWVudC9lbXBsb3ltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7QUNKRjtBREtFO0VBQ0UsbUJBQUE7QUNISjtBRE1BO0VBQ0UsbUJBQUE7QUNIRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBYmlCO0VBY2pCLGtCQUFBO0VBQ0EseUJBQUE7QUNGRjtBRElBO0VBQ0UsV0FBQTtFQUNBLGFBbkJpQjtBQ2tCbkI7QURJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBM0JVO0VBNEJWLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLHlCQW5DUztFQW9DVCxjQWxDUTtFQW1DUix5QkFBQTtFQUNBLGlCQW5DZTtFQW9DZixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7QURNQTtFQUNFO0lBQ0Usa0JBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9ucy9lbXBsb3ltZW50L2VtcGxveW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGlnaHQtZ3JheTogI2Y3ZjdmNztcclxuJG5vcm1hbC1ncmF5OiAjZGJkYmRiO1xyXG4kZGFyay1ncmF5OiAjNzc3NDdlO1xyXG4kc2lnbmF0dXJlLWhlaWdodDogMjYwcHg7XHJcblxyXG4uYm94IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYnV0dG9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICB9XHJcbn1cclxuLm1hcmstY29sdW0ge1xyXG4gIGJvcmRlci1yaWdodDogc29saWQ7XHJcbn1cclxuLnNpZ25hdHVyZS1jYW52YXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XHJcbn1cclxuI3NpZ25hdHVyZS1wYWQsICNzaWduYXR1cmUtdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAkc2lnbmF0dXJlLWhlaWdodDtcclxufVxyXG4uc2lnbmF0dXJlIHtcclxuICAmX19mbG9hdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogJG5vcm1hbC1ncmF5O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgfVxyXG4gIC5zaWduYXR1cmUtd3JhcHBlciwgLnNpZ25hdHVyZS10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4gICAgY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbm9ybWFsLWdyYXk7XHJcbiAgICBtaW4taGVpZ2h0OiAkc2lnbmF0dXJlLWhlaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5zaWduYXR1cmUtdGV4dCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuICAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLm1hcmstY29sdW0ge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIuYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJveCBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4ubWFyay1jb2x1bSB7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG59XG5cbi5zaWduYXR1cmUtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRlNjtcbn1cblxuI3NpZ25hdHVyZS1wYWQsICNzaWduYXR1cmUtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xufVxuXG4uc2lnbmF0dXJlX19mbG9hdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2RiZGJkYjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk7XG59XG4uc2lnbmF0dXJlIC5zaWduYXR1cmUtd3JhcHBlciwgLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBjb2xvcjogIzc3NzQ3ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcbiAgbWluLWhlaWdodDogMjYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5zaWduYXR1cmUgLnNpZ25hdHVyZS10ZXh0IHtcbiAgei1pbmRleDogMDtcbn1cbi5zaWduYXR1cmUgLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5tYXJrLWNvbHVtIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/verifications/employment/employment.component.ts": function srcAppVerificationsEmploymentEmploymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmploymentComponent", function () {
      return EmploymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/utils/HTTPStatusCode */
    "./src/app/shared/utils/HTTPStatusCode.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var _application_profile_profile_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../application/profile/profile-form.service */
    "./src/app/application/profile/profile-form.service.ts");
    /* harmony import */


    var _shared_definitions_forms_profile_form_references_salary_periods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/definitions/forms/profile-form/references/salary-periods */
    "./src/app/shared/definitions/forms/profile-form/references/salary-periods.ts");
    /* harmony import */


    var _shared_definitions_forms_profile_form_references_employmentTimeVerify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/definitions/forms/profile-form/references/employmentTimeVerify */
    "./src/app/shared/definitions/forms/profile-form/references/employmentTimeVerify.ts");

    var EmploymentComponent = /*#__PURE__*/function () {
      function EmploymentComponent(fb, httpService, activeRoute, uiService, profileFormService, route) {
        _classCallCheck(this, EmploymentComponent);

        this.fb = fb;
        this.httpService = httpService;
        this.activeRoute = activeRoute;
        this.uiService = uiService;
        this.profileFormService = profileFormService;
        this.route = route;
        this.status = '';
        this.errorData = '';
        this.title = 'Employment Verification Form';
        this.type = 'Employment';
        this.know = Boolean(0);
        this.salaryPeriods = _shared_definitions_forms_profile_form_references_salary_periods__WEBPACK_IMPORTED_MODULE_12__["SalaryPeriods"];
        this.employmentTimeVerify = _shared_definitions_forms_profile_form_references_employmentTimeVerify__WEBPACK_IMPORTED_MODULE_13__["EmploymentTimePeriods"];
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listenToUrlParams();
        this.listenForFormValidation();
      }

      _createClass(EmploymentComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this6 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this6.id = params.id;
            _this6.hash = params.hash;

            _this6.getDataFromService(_this6.id, _this6.hash);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            verifierName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifierPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifierBeginWork: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifierCompanyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifierCurrentPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifierCurrentSalary: ['', _shared_custom_validators__WEBPACK_IMPORTED_MODULE_10__["CustomValidators"].currencyValidator()],
            verifierOften: [],
            verifierFullPart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getDataFromService",
        value: function getDataFromService(id, hash) {
          var _this7 = this;

          this.httpService.getEmploymentVerification(id, hash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this7.errorEmployment(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
          })).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
              _this7.correctResponse(res);
            }
          });
        }
      }, {
        key: "correctResponse",
        value: function correctResponse(res) {
          if (res) {
            this.employment = res;

            if (res.status === 'Complete') {
              this.status = 'Complete';
              return;
            }

            this.initForm();
            this.status = this.employment.status;
            return;
          }

          this.errorData = 'Can´t Parse Object';
          return;
        }
      }, {
        key: "errorEmployment",
        value: function errorEmployment(error) {
          switch (error.status) {
            case _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].NOT_FOUND:
              this.errorData = 'Verification Not Found';
              break;

            default:
              this.errorData = error.message;
              break;
          }

          this.status = 'Complete';
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form.markAllAsTouched();
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          if (this.employment.applicantName) {
            return '<strong> ' + this.employment.applicantName + ' </strong> has applied to a new residence. You are receiving this email because <strong>' + this.employment.applicantName + '</strong> entered your contact information as his/her current employer. As part of the application process, ' + 'we need to verify the applicant’s employment. Please take a moment to complete the following online employment verification form.';
          }
        }
      }, {
        key: "submitEvent",
        value: function submitEvent() {
          var _this8 = this;

          this.form.markAllAsTouched();
          this.showError = true;

          if (this.form.valid) {
            var dto = this.getDTOFromForm();
            this.httpService.saveEmploymentVerification(this.id, this.hash, dto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              _this8.errorEmployment(error);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            })).subscribe(function (res) {
              if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
                _this8.correctResponse(res);
              }
            });
          }
        }
      }, {
        key: "getDTOFromForm",
        value: function getDTOFromForm() {
          var dto = this.form.value;
          return {
            name: dto.verifierName,
            position: dto.verifierPosition,
            beginWork: dto.verifierBeginWork,
            companyNane: dto.verifierCompanyName,
            currentPosition: dto.verifierCurrentPosition,
            currentSalary: dto.verifierCurrentSalary,
            often: dto.verifierOften,
            fullPart: dto.verifierFullPart
          };
        }
      }, {
        key: "getClassRow",
        value: function getClassRow(i) {
          return i % 2 !== 0 ? 'col-sm-12 col-lg-6 px-5 mark-colum' : 'col-sm-12 col-lg-6 px-5';
        }
      }, {
        key: "declineEvent",
        value: function declineEvent() {
          var _this9 = this;

          this.httpService.declineEmploymentVerification(this.id, this.hash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this9.errorEmployment(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
          })).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
              _this9.correctResponse(res);
            }
          });
        }
      }, {
        key: "listenForFormValidation",
        value: function listenForFormValidation() {
          var _this10 = this;

          this.profileFormService.validateForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            _this10.form.markAllAsTouched();
          });
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          if (this.form.get(controlName) && this.form.get(controlName).errors != null) {
            var _this$form$get2 = this.form.get(controlName),
                errors = _this$form$get2.errors;

            return this.uiService.getControlError(errors);
          }

          return '';
        }
      }, {
        key: "getErrorAgreeAndAuthorize",
        value: function getErrorAgreeAndAuthorize() {
          if (this.know) {
            return this.form.get('agreeAndAuthorize').value ? '' : 'This field is required';
          } else {
            return '';
          }
        }
      }]);

      return EmploymentComponent;
    }();

    EmploymentComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"]
      }, {
        type: _application_profile_profile_form_service__WEBPACK_IMPORTED_MODULE_11__["ProfileFormService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    EmploymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-employment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/employment/employment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employment.component.scss */
      "./src/app/verifications/employment/employment.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"], _application_profile_profile_form_service__WEBPACK_IMPORTED_MODULE_11__["ProfileFormService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], EmploymentComponent);
    /***/
  },

  /***/
  "./src/app/verifications/landlord/landlord.component.scss": function srcAppVerificationsLandlordLandlordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  text-align: center;\n}\n.box button {\n  margin-bottom: 35px;\n}\n.mark-colum {\n  border-right: solid;\n}\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.signature .signature-text {\n  z-index: 0;\n}\n.signature .invalid-feedback {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n@media (max-width: 767.98px) {\n  .mark-colum {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9ucy9sYW5kbG9yZC9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFx2ZXJpZmljYXRpb25zXFxsYW5kbG9yZFxcbGFuZGxvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvbGFuZGxvcmQvbGFuZGxvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtBQ0pGO0FES0U7RUFDRSxtQkFBQTtBQ0hKO0FETUE7RUFDRSxtQkFBQTtBQ0hGO0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFiaUI7RUFjakIsa0JBQUE7RUFDQSx5QkFBQTtBQ0ZGO0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFuQmlCO0FDa0JuQjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0EzQlU7RUE0QlYsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0UseUJBbkNTO0VBb0NULGNBbENRO0VBbUNSLHlCQUFBO0VBQ0EsaUJBbkNlO0VBb0NmLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0U7RUFDRSxVQUFBO0FDREo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjtBRE1BO0VBQ0U7SUFDRSxrQkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92ZXJpZmljYXRpb25zL2xhbmRsb3JkL2xhbmRsb3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XHJcbiRub3JtYWwtZ3JheTogI2RiZGJkYjtcclxuJGRhcmstZ3JheTogIzc3NzQ3ZTtcclxuJHNpZ25hdHVyZS1oZWlnaHQ6IDI2MHB4O1xyXG5cclxuLmJveCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgfVxyXG59XHJcbi5tYXJrLWNvbHVtIHtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG59XHJcbi5zaWduYXR1cmUtY2FudmFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNGU2O1xyXG59XHJcbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XHJcbn1cclxuLnNpZ25hdHVyZSB7XHJcbiAgJl9fZmxvYXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICRub3JtYWwtZ3JheTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gIH1cclxuICAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJG5vcm1hbC1ncmF5O1xyXG4gICAgbWluLWhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuc2lnbmF0dXJlLXRleHQge1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbiAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC5tYXJrLWNvbHVtIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3ggYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLm1hcmstY29sdW0ge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xufVxuXG4uc2lnbmF0dXJlLWNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XG59XG5cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cblxuLnNpZ25hdHVyZV9fZmxvYXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNkYmRiZGI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5O1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUgLnNpZ25hdHVyZS10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICM3Nzc0N2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIHotaW5kZXg6IDA7XG59XG4uc2lnbmF0dXJlIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubWFyay1jb2x1bSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verifications/landlord/landlord.component.ts": function srcAppVerificationsLandlordLandlordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandlordComponent", function () {
      return LandlordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/utils/HTTPStatusCode */
    "./src/app/shared/utils/HTTPStatusCode.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var signature_pad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! signature_pad */
    "./node_modules/signature_pad/dist/signature_pad.js");

    var LandlordComponent = /*#__PURE__*/function () {
      function LandlordComponent(fb, httpService, activeRoute, uiService, route) {
        _classCallCheck(this, LandlordComponent);

        this.fb = fb;
        this.httpService = httpService;
        this.activeRoute = activeRoute;
        this.uiService = uiService;
        this.route = route;
        this.status = '';
        this.errorData = '';
        this.title = 'Residence / Landlord Verification Form';
        this.type = 'Landlord';
        this.know = Boolean(0);
        this.listenToUrlParams();
      }

      _createClass(LandlordComponent, [{
        key: "onResize",
        value: function onResize() {
          this.setCanvasSize();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "initSignature",
        value: function initSignature() {
          var _this11 = this;

          if (this.signaturePadRef2 && this.signaturePadRef2.nativeElement) {
            this.signatureCanvas = this.signaturePadRef2.nativeElement;
            this.signatureTextCanvas = this.signatureTextRef2.nativeElement;
            this.setCanvasSize();
            this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_10__["default"](this.signatureCanvas);

            this.signaturePad.onEnd = function () {
              var signature = _this11.signaturePad.toDataURL('image/png');

              _this11.form.patchValue({
                signature: signature
              });
            };
          }
        }
      }, {
        key: "setCanvasSize",
        value: function setCanvasSize() {
          var ratio = Math.max(window.devicePixelRatio || 1, 1);

          if (this.signatureCanvas) {
            this.signatureCanvas.width = this.signatureCanvas.offsetWidth * ratio;
            this.signatureCanvas.height = this.signatureCanvas.offsetHeight * ratio;
            this.signatureCanvas.getContext('2d').scale(ratio, ratio);

            if (this.signaturePad) {
              this.signaturePad.clear();
            }
          }

          if (this.signatureTextCanvas) {
            this.signatureTextCanvas.width = this.signatureTextCanvas.offsetWidth * ratio;
            this.signatureTextCanvas.height = this.signatureTextCanvas.offsetHeight * ratio;
            this.signatureTextCanvas.getContext('2d').scale(ratio, ratio);
          }
        }
      }, {
        key: "clearSignature",
        value: function clearSignature() {
          this.signaturePad.clear();
          this.form.patchValue({
            signature: null
          });
        }
      }, {
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this12 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this12.id = params.id;
            _this12.hash = params.hash;

            _this12.getDataFromService(_this12.id, _this12.hash);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            knows: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remarks: ['', null],
            verifierName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            verifierEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            verifierPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sendResult: [],
            signature: [],
            agreeAndAuthorize: []
          });
        }
      }, {
        key: "initData",
        value: function initData() {
          this.data = [{
            formGroup: 'moveInCorrect',
            formName: 'result',
            questionHtmlText: 'Has <strong>' + this.landlord.applicantName + '<strong> rented this property for <strong>' + this.landlord.strMonthYear + '</strong>?',
            answers: [{
              id: 'Yes',
              value: 'Y',
              txtResponse: []
            }, {
              id: 'No',
              value: 'N',
              txtResponse: [{
                text: 'Year',
                fieldName: 'years',
                type: 'number',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(-1)]
              }, {
                text: 'Months',
                fieldName: 'months',
                type: 'number',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(-1)]
              }]
            }]
          }, {
            formGroup: 'latePayment',
            formName: 'result',
            questionHtmlText: 'Has there been any late payments?',
            answers: [{
              id: 'Yes',
              value: 'Y',
              txtResponse: [{
                text: 'How many late payments were made? Enter amount',
                fieldName: 'lateCount',
                type: 'number',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]
              }]
            }, {
              id: 'No',
              value: 'N',
              txtResponse: []
            }, {
              id: 'N/A',
              value: 'K',
              txtResponse: [{
                text: 'Write below the reason why you cannot release this information',
                fieldName: 'latePaymentsNoAnswer',
                type: 'text',
                maxLength: 255,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]
              }]
            }]
          }, {
            formGroup: 'properNotice',
            formName: 'result',
            questionHtmlText: 'Was Proper notice to vacate given?',
            answers: [{
              id: 'Yes',
              value: 'Y',
              txtResponse: []
            }, {
              id: 'No',
              value: 'N',
              txtResponse: [{
                text: 'Please explain',
                fieldName: 'properNoticeRemarks',
                type: 'text',
                maxLength: 255,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]
              }]
            }]
          }, {
            formGroup: 'litigation',
            formName: 'result',
            questionHtmlText: 'Has there been any form of litigations or violations against <strong>' + this.landlord.applicantName + '</strong> ? ',
            answers: [{
              id: 'Yes',
              value: 'Y',
              txtResponse: [{
                text: 'Please explain',
                fieldName: 'litigationRemarks',
                type: 'text',
                maxLength: 255,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]
              }]
            }, {
              id: 'No',
              value: 'N',
              txtResponse: []
            }, {
              id: 'N/A',
              value: 'K',
              txtResponse: [{
                text: 'Write below the reason why you cannot release this information',
                fieldName: 'litigationNoAnswer',
                type: 'text',
                maxLength: 255,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]
              }]
            }]
          }, {
            formGroup: 'propertyCondition',
            formName: 'result',
            questionHtmlText: 'Has the property been kept in good conditions?',
            answers: [{
              id: 'Yes',
              value: 'G',
              txtResponse: []
            }, {
              id: 'No',
              value: 'B',
              txtResponse: []
            }, {
              id: 'N/A',
              value: 'K',
              txtResponse: [{
                text: 'Write below the reason why you cannot release this information',
                fieldName: 'propertyConditionNoAnswer',
                type: 'text',
                maxLength: 255,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]
              }]
            }]
          }, {
            formGroup: 'wouldRent',
            formName: 'result',
            questionHtmlText: 'Would you be willing to re-rent to <strong>' + this.landlord.applicantName + '</strong> in the future?',
            answers: [{
              id: 'Yes',
              value: 'Y',
              txtResponse: []
            }, {
              id: 'No',
              value: 'N',
              txtResponse: []
            }, {
              id: 'N/A',
              value: 'K',
              txtResponse: [{
                text: 'Write below the reason why you cannot release this information',
                fieldName: 'wouldRentNoAnswer',
                type: 'text',
                maxLength: 255,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]
              }]
            }]
          }];
        }
      }, {
        key: "getDataFromService",
        value: function getDataFromService(id, hash) {
          var _this13 = this;

          this.httpService.getLandLordVerification(id, hash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this13.errorLandlord(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
          })).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
              _this13.correctResponse(res);
            }
          });
        }
      }, {
        key: "correctResponse",
        value: function correctResponse(res) {
          if (res) {
            this.landlord = res;

            if (res.status === 'Complete') {
              this.status = 'Complete';
              return;
            }

            this.initData();
            this.initForm();
            this.status = this.landlord.status;
            return;
          }

          this.errorData = 'Can´t Parse Object';
          return;
        }
      }, {
        key: "errorLandlord",
        value: function errorLandlord(error) {
          switch (error.status) {
            case _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].NOT_FOUND:
              this.errorData = 'Verification Not Found';
              break;

            default:
              this.errorData = error.message;
              break;
          }

          this.status = 'Complete';
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var _this14 = this;

          this.data.forEach(function (value) {
            var newFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
            newFormGroup.addControl(value.formName, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
            value.answers.forEach(function (answer) {
              answer.txtResponse.forEach(function (control) {
                newFormGroup.addControl(control.fieldName, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
              });
            });

            _this14.form.addControl(value.formGroup, newFormGroup);
          });
          this.form.get('knows').valueChanges.subscribe(function (val) {
            _this14.changeKnows(val);
          });
          this.form.get('sendResult').valueChanges.subscribe(function (val) {
            if (val) {
              _this14.form.get('verifierEmail').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            } else {
              _this14.form.get('verifierEmail').clearValidators();
            }

            _this14.form.get('verifierEmail').updateValueAndValidity();
          });
        }
      }, {
        key: "changeKnows",
        value: function changeKnows(val) {
          var _this15 = this;

          this.know = val && val === 'Y';

          if (this.know) {
            setTimeout(function () {
              _this15.initSignature();
            }, 1000);

            var _iterator = _createForOfIteratorHelper(this.data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                this.addValidators(this.form.get(item.formGroup).get(item.formName), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.addValidators(this.form.get('signature'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.addValidators(this.form.get('agreeAndAuthorize'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue);
          } else {
            var _iterator2 = _createForOfIteratorHelper(this.data),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var questionItem = _step2.value;
                this.cleanAndClearValidators(this.form.get(questionItem.formGroup), questionItem.formName, false);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.cleanAndClearValidators(this.form, 'signature', false);
            this.cleanAndClearValidators(this.form, 'agreeAndAuthorize', false);
          }
        }
      }, {
        key: "addValidators",
        value: function addValidators(parentGroup, validators) {
          parentGroup.setValidators(validators);
          parentGroup.updateValueAndValidity({
            emitEvent: true
          });
        }
      }, {
        key: "cleanAndClearValidators",
        value: function cleanAndClearValidators(parentGroup, name) {
          var emitEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          parentGroup.get(name).reset();
          parentGroup.get(name).setValue(null, {
            emitEvent: emitEvent
          });
          parentGroup.get(name).clearValidators();
          parentGroup.get(name).updateValueAndValidity({
            emitEvent: false
          });
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          if (this.landlord.applicantName) {
            return '<strong> ' + this.landlord.applicantName + ' </strong> has applied to a new residence. You are receiving this email because <strong>' + this.landlord.applicantName + '</strong> entered your contact information as his/her current landlord. As part of the application process, ' + 'we need to verify the applicant’s current residence. ' + 'Please take a moment to complete the following online residence verification form. ' + 'As per FCRA regulations, please only disclose information on the last 7 years.';
          }
        }
      }, {
        key: "submitEvent",
        value: function submitEvent() {
          var _this16 = this;

          this.form.markAllAsTouched();
          this.showError = true;

          if (this.form.valid) {
            var dto = this.getDTOFromForm();
            this.httpService.saveLandlordVerification(this.id, this.hash, dto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              _this16.errorLandlord(error);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            })).subscribe(function (res) {
              if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
                _this16.correctResponse(res);
              }
            });
          }
        }
      }, {
        key: "getDTOFromForm",
        value: function getDTOFromForm() {
          var dto = this.form.value;
          return {
            isKnown: dto.knows,
            remarks: dto.remarks,
            verifierName: dto.verifierName,
            verifierEmail: dto.verifierEmail,
            verifierPosition: dto.verifierPosition,
            sendResult: dto.sendResult,
            moveInCorrect: dto.moveInCorrect.result,
            years: dto.moveInCorrect.years,
            months: dto.moveInCorrect.months,
            latePayment: dto.latePayment.result,
            lateCount: dto.latePayment.lateCount,
            latePaymentsNoAnswer: dto.latePayment.latePaymentsNoAnswer,
            properNotice: dto.properNotice.result,
            properNoticeRemarks: dto.properNotice.properNoticeRemarks,
            litigation: dto.litigation.result,
            litigationNoAnswer: dto.litigation.litigationNoAnswer,
            litigationRemarks: dto.litigation.litigationRemarks,
            propertyCondition: dto.propertyCondition.result,
            propertyConditionNoAnswer: dto.propertyCondition.propertyConditionNoAnswer,
            // violation: dto.violation.result,
            // violationNoAnswer: dto.violation.violationNoAnswer,
            // violationRemarks: dto.violation.violationRemarks,
            wouldRent: dto.wouldRent.result,
            wouldRentNoAnswer: dto.wouldRent.wouldRentNoAnswer,
            signature: dto.signature
          };
        }
      }, {
        key: "getClassRow",
        value: function getClassRow(i) {
          return i % 2 !== 0 ? 'col-sm-12 col-lg-6 px-5 mark-colum' : 'col-sm-12 col-lg-6 px-5';
        }
      }, {
        key: "declineEvent",
        value: function declineEvent() {
          var _this17 = this;

          this.httpService.declineLandlordVerification(this.id, this.hash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this17.errorLandlord(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
          })).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"])) {
              _this17.correctResponse(res);
            }
          });
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          if (this.form.get(controlName) && this.form.get(controlName).errors != null) {
            var _this$form$get3 = this.form.get(controlName),
                errors = _this$form$get3.errors;

            return this.uiService.getControlError(errors);
          }

          return '';
        }
      }, {
        key: "getErrorAgreeAndAuthorize",
        value: function getErrorAgreeAndAuthorize() {
          if (this.know) {
            return this.form.get('agreeAndAuthorize').value ? '' : 'This field is required';
          } else {
            return '';
          }
        }
      }]);

      return LandlordComponent;
    }();

    LandlordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signaturePad2', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LandlordComponent.prototype, "signaturePadRef2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureText2', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LandlordComponent.prototype, "signatureTextRef2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LandlordComponent.prototype, "onResize", null);
    LandlordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-landlord',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landlord.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/landlord/landlord.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landlord.component.scss */
      "./src/app/verifications/landlord/landlord.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], LandlordComponent);
    /***/
  },

  /***/
  "./src/app/verifications/verification-finish/verification-finish.component.scss": function srcAppVerificationsVerificationFinishVerificationFinishComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".verification-principal-text {\n  text-align: center;\n  font: italic normal normal 35px/45px Open Sans;\n  letter-spacing: -1.05px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.verification-lower-text {\n  text-align: center;\n  font: normal normal 300 14px/20px Roboto;\n  letter-spacing: -0.42px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.icon-result {\n  width: 10%;\n  margin-bottom: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9ucy92ZXJpZmljYXRpb24tZmluaXNoL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXHZlcmlmaWNhdGlvbnNcXHZlcmlmaWNhdGlvbi1maW5pc2hcXHZlcmlmaWNhdGlvbi1maW5pc2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uLWZpbmlzaC92ZXJpZmljYXRpb24tZmluaXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uLWZpbmlzaC92ZXJpZmljYXRpb24tZmluaXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcmlmaWNhdGlvbi1wcmluY2lwYWwtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQ6IGl0YWxpYyBub3JtYWwgbm9ybWFsIDM1cHgvNDVweCBPcGVuIFNhbnM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjA1cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4udmVyaWZpY2F0aW9uLWxvd2VyLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAxNHB4LzIwcHggUm9ib3RvO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40MnB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmljb24tcmVzdWx0IHtcclxuICB3aWR0aDogMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG5cclxuIiwiLnZlcmlmaWNhdGlvbi1wcmluY2lwYWwtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogaXRhbGljIG5vcm1hbCBub3JtYWwgMzVweC80NXB4IE9wZW4gU2FucztcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjA1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmVyaWZpY2F0aW9uLWxvd2VyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgMzAwIDE0cHgvMjBweCBSb2JvdG87XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmljb24tcmVzdWx0IHtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verifications/verification-finish/verification-finish.component.ts": function srcAppVerificationsVerificationFinishVerificationFinishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationFinishComponent", function () {
      return VerificationFinishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerificationFinishComponent = /*#__PURE__*/function () {
      function VerificationFinishComponent() {
        _classCallCheck(this, VerificationFinishComponent);
      }

      _createClass(VerificationFinishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerificationFinishComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationFinishComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationFinishComponent.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], VerificationFinishComponent.prototype, "complete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationFinishComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationFinishComponent.prototype, "type", void 0);
    VerificationFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-verification-finish',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification-finish.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification-finish/verification-finish.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification-finish.component.scss */
      "./src/app/verifications/verification-finish/verification-finish.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VerificationFinishComponent);
    /***/
  },

  /***/
  "./src/app/verifications/verification-routing.module.ts": function srcAppVerificationsVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationRoutingModule", function () {
      return VerificationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _landlord_landlord_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landlord/landlord.component */
    "./src/app/verifications/landlord/landlord.component.ts");
    /* harmony import */


    var _employment_employment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./employment/employment.component */
    "./src/app/verifications/employment/employment.component.ts");
    /* harmony import */


    var _verifications_router_verifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verifications-router/verifications.component */
    "./src/app/verifications/verifications-router/verifications.component.ts");
    /* harmony import */


    var _character_character_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./character/character.component */
    "./src/app/verifications/character/character.component.ts");

    var routes = [{
      path: '',
      component: _verifications_router_verifications_component__WEBPACK_IMPORTED_MODULE_5__["VerificationsComponent"],
      children: [{
        path: 'landlord/:id/:hash',
        component: _landlord_landlord_component__WEBPACK_IMPORTED_MODULE_3__["LandlordComponent"]
      }, {
        path: 'employment/:id/:hash',
        component: _employment_employment_component__WEBPACK_IMPORTED_MODULE_4__["EmploymentComponent"]
      }, {
        path: 'character/:id/:hash',
        component: _character_character_component__WEBPACK_IMPORTED_MODULE_6__["CharacterComponent"]
      }]
    }];

    var VerificationRoutingModule = function VerificationRoutingModule() {
      _classCallCheck(this, VerificationRoutingModule);
    };

    VerificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerificationRoutingModule);
    /***/
  },

  /***/
  "./src/app/verifications/verification/verification-footer/verification-footer.component.scss": function srcAppVerificationsVerificationVerificationFooterVerificationFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".caption {\n  background-image: url('icon-tenant-evaluation-dark-gray.svg');\n  background-size: 36px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 50px;\n  color: #bbbcbe;\n  line-height: 1.2rem;\n  font-size: 0.9rem;\n}\n\n.footer {\n  margin-bottom: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9ucy92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLWZvb3Rlci9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFx2ZXJpZmljYXRpb25zXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi1mb290ZXJcXHZlcmlmaWNhdGlvbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi1mb290ZXIvdmVyaWZpY2F0aW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi1mb290ZXIvdmVyaWZpY2F0aW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+YXNzZXRzL2ljb24tdGVuYW50LWV2YWx1YXRpb24tZGFyay1ncmF5LnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDM2cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgY29sb3I6ICNiYmJjYmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG59XHJcbiIsIi5jYXB0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifmFzc2V0cy9pY29uLXRlbmFudC1ldmFsdWF0aW9uLWRhcmstZ3JheS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzZweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgY29sb3I6ICNiYmJjYmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verifications/verification/verification-footer/verification-footer.component.ts": function srcAppVerificationsVerificationVerificationFooterVerificationFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationFooterComponent", function () {
      return VerificationFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerificationFooterComponent = /*#__PURE__*/function () {
      function VerificationFooterComponent() {
        _classCallCheck(this, VerificationFooterComponent);

        this.submitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(VerificationFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitEmit",
        value: function submitEmit() {
          this.submitEvent.emit(true);
        }
      }]);

      return VerificationFooterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VerificationFooterComponent.prototype, "submitEvent", void 0);
    VerificationFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-verification-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-footer/verification-footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification-footer.component.scss */
      "./src/app/verifications/verification/verification-footer/verification-footer.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VerificationFooterComponent);
    /***/
  },

  /***/
  "./src/app/verifications/verification/verification-question-answer/answer.component.scss": function srcAppVerificationsVerificationVerificationQuestionAnswerAnswerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi1xdWVzdGlvbi1hbnN3ZXIvYW5zd2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/verifications/verification/verification-question-answer/answer.component.ts": function srcAppVerificationsVerificationVerificationQuestionAnswerAnswerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerComponent", function () {
      return AnswerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");

    var AnswerComponent = /*#__PURE__*/function () {
      function AnswerComponent(uiService, ref) {
        _classCallCheck(this, AnswerComponent);

        this.uiService = uiService;
        this.ref = ref;
      }

      _createClass(AnswerComponent, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this18 = this;

          this.formGroupAnswer = this.formGroup.get(this.answer.formGroup);
          this.formGroup.get(this.answer.formGroup).valueChanges.subscribe(function (val) {
            _this18.selectedItem = val[_this18.answer.formName];

            if (_this18.validateRequired !== _this18.selectedItem) {
              _this18.changeValueRadioButton();
            }
          });
          this.group = this.formGroup.get(this.answer.formGroup);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeValueRadioButton",
        value: function changeValueRadioButton() {
          var _iterator3 = _createForOfIteratorHelper(this.answer.answers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var txtResponse = _step3.value;

              if (txtResponse.value === this.selectedItem) {
                this.setElementsRequired2(txtResponse);
              } else {
                this.restoreElement(txtResponse);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "setElementsRequired2",
        value: function setElementsRequired2(txtResponse) {
          var _iterator4 = _createForOfIteratorHelper(txtResponse.txtResponse),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var txtRe = _step4.value;
              this.validateRequired = this.selectedItem;
              this.group.get(txtRe.fieldName).setValidators(txtRe.validators);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "restoreElement",
        value: function restoreElement(txtResponse) {
          var _iterator5 = _createForOfIteratorHelper(txtResponse.txtResponse),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var txtRe = _step5.value;
              this.group.get(txtRe.fieldName).setValue(null, {
                emitEvent: false
              });
              this.group.get(txtRe.fieldName).clearValidators();
              this.group.get(txtRe.fieldName).updateValueAndValidity({
                emitEvent: false
              });
              this.validateRequired = this.selectedItem;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }, {
        key: "getWidth",
        value: function getWidth(number) {
          return number ? 12 / number : '12';
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(fieldName) {
          if (this.group.get(fieldName) && this.group.get(fieldName).errors != null) {
            var _this$group$get = this.group.get(fieldName),
                errors = _this$group$get.errors;

            return this.uiService.getControlError(errors);
          }

          return '';
        }
      }, {
        key: "getError",
        value: function getError(fieldName) {
          return this.group.get(fieldName).errors != null;
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          var target = event.currentTarget;
          target.type = 'text';
          target.setSelectionRange(0, target.value.length);
          target.type = 'number';
        }
      }]);

      return AnswerComponent;
    }();

    AnswerComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AnswerComponent.prototype, "answer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], AnswerComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AnswerComponent.prototype, "controlName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], AnswerComponent.prototype, "showErrors", void 0);
    AnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-answer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./answer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-question-answer/answer.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./answer.component.scss */
      "./src/app/verifications/verification/verification-question-answer/answer.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AnswerComponent);
    /***/
  },

  /***/
  "./src/app/verifications/verification/verification-title/verification-title.component.scss": function srcAppVerificationsVerificationVerificationTitleVerificationTitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".verifications .message-whit-icon {\n  margin: 0 auto !important;\n  padding: 0px !important;\n}\n.verifications .message-whit-icon .gifimg {\n  margin: 2% auto !important;\n}\n.verifications .message-whit-icon .text {\n  padding: 0px !important;\n  margin: 3% auto;\n}\n.verifications .message-whit-icon .small-text {\n  padding: 0px !important;\n  margin: 2% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9ucy92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLXRpdGxlL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXHZlcmlmaWNhdGlvbnNcXHZlcmlmaWNhdGlvblxcdmVyaWZpY2F0aW9uLXRpdGxlXFx2ZXJpZmljYXRpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi10aXRsZS92ZXJpZmljYXRpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FDQUo7QURDSTtFQUNFLDBCQUFBO0FDQ047QURDSTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi10aXRsZS92ZXJpZmljYXRpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZpY2F0aW9ucyB7XHJcbiAgLm1lc3NhZ2Utd2hpdC1pY29uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIC5naWZpbWcge1xyXG4gICAgICBtYXJnaW46IDIlIGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMyUgYXV0bztcclxuICAgIH1cclxuICAgIC5zbWFsbC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMiUgYXV0bztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCIudmVyaWZpY2F0aW9ucyAubWVzc2FnZS13aGl0LWljb24ge1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi52ZXJpZmljYXRpb25zIC5tZXNzYWdlLXdoaXQtaWNvbiAuZ2lmaW1nIHtcbiAgbWFyZ2luOiAyJSBhdXRvICFpbXBvcnRhbnQ7XG59XG4udmVyaWZpY2F0aW9ucyAubWVzc2FnZS13aGl0LWljb24gLnRleHQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzJSBhdXRvO1xufVxuLnZlcmlmaWNhdGlvbnMgLm1lc3NhZ2Utd2hpdC1pY29uIC5zbWFsbC10ZXh0IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMiUgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/verifications/verification/verification-title/verification-title.component.ts": function srcAppVerificationsVerificationVerificationTitleVerificationTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationTitleComponent", function () {
      return VerificationTitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");

    var VerificationTitleComponent = /*#__PURE__*/function () {
      function VerificationTitleComponent(uiService) {
        _classCallCheck(this, VerificationTitleComponent);

        this.uiService = uiService;
        this.decline = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(VerificationTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "confirmDecline",
        value: function confirmDecline() {
          var _this19 = this;

          this.uiService.confirmAction({
            title: 'Are you sure you want to decline?',
            type: 'question',
            confirmButtonText: 'Decline',
            message: ''
          }).subscribe(function (confirm) {
            if (confirm) {
              _this19.declineEvent();
            }
          });
        }
      }, {
        key: "declineEvent",
        value: function declineEvent() {
          this.decline.emit(true);
        }
      }]);

      return VerificationTitleComponent;
    }();

    VerificationTitleComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], VerificationTitleComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationTitleComponent.prototype, "verificationName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationTitleComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], VerificationTitleComponent.prototype, "hasDecline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationTitleComponent.prototype, "declineText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VerificationTitleComponent.prototype, "decline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationTitleComponent.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationTitleComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], VerificationTitleComponent.prototype, "type", void 0);
    VerificationTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-verification-title',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification-title.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-title/verification-title.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification-title.component.scss */
      "./src/app/verifications/verification/verification-title/verification-title.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]])], VerificationTitleComponent);
    /***/
  },

  /***/
  "./src/app/verifications/verifications-router/verifications.component.scss": function srcAppVerificationsVerificationsRouterVerificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9ucy1yb3V0ZXIvdmVyaWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/verifications/verifications-router/verifications.component.ts": function srcAppVerificationsVerificationsRouterVerificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationsComponent", function () {
      return VerificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerificationsComponent = /*#__PURE__*/function () {
      function VerificationsComponent() {
        _classCallCheck(this, VerificationsComponent);
      }

      _createClass(VerificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerificationsComponent;
    }();

    VerificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-verifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verifications-router/verifications.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verifications.component.scss */
      "./src/app/verifications/verifications-router/verifications.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VerificationsComponent);
    /***/
  },

  /***/
  "./src/app/verifications/verifications.module.ts": function srcAppVerificationsVerificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationsModule", function () {
      return VerificationsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _landlord_landlord_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landlord/landlord.component */
    "./src/app/verifications/landlord/landlord.component.ts");
    /* harmony import */


    var _verifications_router_verifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./verifications-router/verifications.component */
    "./src/app/verifications/verifications-router/verifications.component.ts");
    /* harmony import */


    var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification-routing.module */
    "./src/app/verifications/verification-routing.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _verification_verification_question_answer_answer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./verification/verification-question-answer/answer.component */
    "./src/app/verifications/verification/verification-question-answer/answer.component.ts");
    /* harmony import */


    var _mobile_mobile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../mobile/mobile.module */
    "./src/app/mobile/mobile.module.ts");
    /* harmony import */


    var _complete_signature_complete_signature_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../complete-signature/complete-signature.module */
    "./src/app/complete-signature/complete-signature.module.ts");
    /* harmony import */


    var _application_profile_payment_details_payment_details_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../application/profile/payment-details/payment-details.module */
    "./src/app/application/profile/payment-details/payment-details.module.ts");
    /* harmony import */


    var _verification_verification_footer_verification_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./verification/verification-footer/verification-footer.component */
    "./src/app/verifications/verification/verification-footer/verification-footer.component.ts");
    /* harmony import */


    var _verification_verification_title_verification_title_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./verification/verification-title/verification-title.component */
    "./src/app/verifications/verification/verification-title/verification-title.component.ts");
    /* harmony import */


    var _verification_finish_verification_finish_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./verification-finish/verification-finish.component */
    "./src/app/verifications/verification-finish/verification-finish.component.ts");
    /* harmony import */


    var _employment_employment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./employment/employment.component */
    "./src/app/verifications/employment/employment.component.ts");
    /* harmony import */


    var _character_character_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./character/character.component */
    "./src/app/verifications/character/character.component.ts");

    var VerificationsModule = function VerificationsModule() {
      _classCallCheck(this, VerificationsModule);
    };

    VerificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_character_character_component__WEBPACK_IMPORTED_MODULE_18__["CharacterComponent"], _employment_employment_component__WEBPACK_IMPORTED_MODULE_17__["EmploymentComponent"], _landlord_landlord_component__WEBPACK_IMPORTED_MODULE_3__["LandlordComponent"], _verifications_router_verifications_component__WEBPACK_IMPORTED_MODULE_4__["VerificationsComponent"], _verification_verification_question_answer_answer_component__WEBPACK_IMPORTED_MODULE_10__["AnswerComponent"], _verification_verification_footer_verification_footer_component__WEBPACK_IMPORTED_MODULE_14__["VerificationFooterComponent"], _verification_verification_title_verification_title_component__WEBPACK_IMPORTED_MODULE_15__["VerificationTitleComponent"], _verification_finish_verification_finish_component__WEBPACK_IMPORTED_MODULE_16__["VerificationFinishComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationRoutingModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _mobile_mobile_module__WEBPACK_IMPORTED_MODULE_11__["MobileModule"], _complete_signature_complete_signature_module__WEBPACK_IMPORTED_MODULE_12__["CompleteSignatureModule"], _application_profile_payment_details_payment_details_module__WEBPACK_IMPORTED_MODULE_13__["PaymentDetailsModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], VerificationsModule);
    /***/
  }
}]);
//# sourceMappingURL=verifications-verifications-module-es5.js.map
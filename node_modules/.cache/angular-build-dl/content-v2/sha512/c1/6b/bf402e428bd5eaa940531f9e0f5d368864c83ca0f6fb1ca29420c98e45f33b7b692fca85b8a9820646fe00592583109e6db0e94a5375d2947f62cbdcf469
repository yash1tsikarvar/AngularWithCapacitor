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


    __webpack_exports__["default"] = "<div class=\"verifications container\">\n\n  <mat-spinner class=\"centered\" *ngIf=\"status===''\"></mat-spinner>\n\n  <div *ngIf=\"status === 'Pending'\">\n\n    <tev-verification-title [status]=\"status\" [hasDecline]=\"true\" [description]=\"getDescription()\"\n                            [name]=\"character.applicantName\"\n                            [type]=\"type\"\n                            [verificationName]=\"title\" (decline)=\"declineEvent()\"></tev-verification-title>\n\n\n\n    <div class=\"verification-form-container py-2\">\n      <form [formGroup]=\"form\">\n        <div class=\"row\">\n          <!-- knows --->\n          <div class=\"col-12 px-5 py-4\">\n            <p>Do you know <span class=\"txt-bold\">{{character.applicantName}}</span>?</p>\n            <mat-radio-group formControlName=\"knows\" required aria-label=\"Select an option\">\n              <mat-radio-button value=\"Y\">Yes</mat-radio-button>\n              <mat-radio-button value=\"N\">No</mat-radio-button>\n              <mat-error *ngIf=\"showError\">{{getError(\"knows\")}}</mat-error>\n            </mat-radio-group>\n          </div>\n          <!-- ./knows -->\n\n          <!--          Know ago-->\n          <div *ngIf=\"know\" class=\"col-sm-12 col-lg-6 px-5\">\n                <mat-label>* For how long have you known {{character.applicantName}}?:</mat-label>\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-lg-6\">\n                  <mat-form-field appearance=\"legacy\">\n                    <input matInput formControlName=\"knowAgoYears\" maxlength=\"2\" type=\"integer\"  placeholder=\"Years\">\n                    <mat-error *ngIf=\"showError\">\n                      <div ng-message='required'>At least years o months field is required</div></mat-error>\n                  </mat-form-field>\n                  </div>\n                  <div class=\"col-sm-12 col-lg-6\">\n                  <mat-form-field appearance=\"legacy\">\n                    <input matInput formControlName=\"knowAgoMonths\" maxlength=\"2\" type=\"integer\" placeholder=\"Months\">\n                    <mat-error *ngIf=\"showError\">\n                      <div ng-message='required'>At least years o months field is required</div></mat-error>\n                  </mat-form-field>\n                  </div>\n                </div>\n          </div>\n\n<!--          Relationship-->\n          <div *ngIf=\"know\" class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field>\n              <mat-label>* What is your relationship with {{character.applicantName}}?</mat-label>\n              <mat-select placeholder=\"Select one\" formControlName=\"relationship\">\n                <mat-option *ngFor=\"let option of relationship\" [value]=\"option.key\">{{option.name}}</mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"showError\">{{getError('relationship')}}</mat-error>\n            </mat-form-field>\n          </div>\n<!--        goodTenant  -->\n          <div *ngIf=\"know\" class=\"col-sm-12 col-lg-6 px-5\" style=\"margin-top: 2em\">\n            <p>* In your opinion, would you recommend <span class=\"txt-bold\">{{character.applicantName}}</span>? (If not, please further explain below in the remarks section).</p>\n          <mat-radio-group formControlName=\"goodTenant\" required aria-label=\"Select an option\">\n            <mat-radio-button value=\"Y\">Yes</mat-radio-button>\n            <mat-radio-button value=\"N\">No</mat-radio-button>\n            <mat-error *ngIf=\"showError\">{{getError(\"goodTenant\")}}</mat-error>\n          </mat-radio-group>\n          </div>\n        </div>\n\n        <div class=\"col-12 px-4 py-4\">\n          <label class=\"txt-bold\">{{ remarks }}</label>\n          <textarea formControlName=\"remarks\" name=\"remarks\" class=\"form-control txt-xs\" rows=\"3\"></textarea>\n          <mat-error *ngIf=\"showError\">{{getError(\"remarks\")}}</mat-error>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>What is your name?</mat-label>\n              <input matInput formControlName=\"verifierName\" maxlength=\"50\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierName\")}}</mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div *ngIf=\"know\" class=\"row\" style=\"margin-top: 2em\">\n          <div class=\"col-12 px-5\">\n            <div class=\"agreement-checkbox custom-checkbox\">\n              <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\n                            formControlName=\"agreeAndAuthorize\"\n                            id=\"agree\">I hereby certify the above statements are true and correct to the best of my\n                knowledge\n              </mat-checkbox>\n            </div>\n            <mat-error *ngIf=\"showError\">{{getErrorAgreeAndAuthorize()}}</mat-error>\n          </div>\n        </div>\n\n      </form>\n    </div>\n    <tev-verification-footer *ngIf=\"status!=='Complete'\" (submitEvent)=\"submitEvent()\"></tev-verification-footer>\n  </div>\n\n  <div *ngIf=\"status === 'Complete'\">\n    <tev-verification-finish [title]=\"title\" [complete]=\"status==='Complete'\" [id]=\"id\"\n                             [error]=\"errorData\"></tev-verification-finish>\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/employment/employment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsEmploymentEmploymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\n\n  <mat-spinner class=\"centered\" *ngIf=\"status===''\"></mat-spinner>\n\n  <div *ngIf=\"status === 'Pending'\">\n\n    <tev-verification-title [status]=\"status\" [hasDecline]=\"true\" [description]=\"getDescription()\"\n                            [name]=\"employment.applicantName\"\n                            [type]=\"type\"\n                            [verificationName]=\"title\" (decline)=\"declineEvent()\"></tev-verification-title>\n\n\n    <div class=\"verification-form-container py-2\">\n      <div *ngIf=\"employment.authForm\" class=\"box px-4\">\n        <p>If you require an authorization form signed by the tenant, please click to download document. <a\n          class=\"btn btn-secondary tev-btn--common\" href=\"{{employment.authForm}}\" target=\"_blank\">Authorization\n          form</a></p>\n      </div>\n      <form [formGroup]=\"form\">\n        <div class=\"row\" style=\"margin-top: 2em;\">\n          <!-- Name -->\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>* What is your name?</mat-label>\n              <input matInput formControlName=\"verifierName\" maxlength=\"50\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierName\")}}</mat-error>\n            </mat-form-field>\n          </div>\n          <!-- Position -->\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>* What is your Position?</mat-label>\n              <input matInput formControlName=\"verifierPosition\" maxlength=\"100\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierPosition\")}}</mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 2em;\">\n          <!-- Company -->\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>* Company Name</mat-label>\n              <input matInput formControlName=\"verifierCompanyName\" maxlength=\"50\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierCompanyName\")}}</mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row verification-part\" style=\"margin-top: 2em;\">\n          <div class=\"col-12 form-group\">\n            <p class=\"text-center\"><strong>PLEASE ANSWER THESE QUESTIONS</strong></p>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 2em;\">\n          <!-- Begin work -->\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>* When {{employment.applicantName}} did begin working in {{ employment.companyName }}?</mat-label>\n              <input matInput\n                     formControlName=\"verifierBeginWork\"\n                     id=\"profileBeginWork\"\n                     (focus)=\"picker.open()\"\n                     [matDatepicker]=\"picker\"\n                     placeholder=\"Select a date\"\n              >\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker startView=\"multi-year\"></mat-datepicker>\n              <mat-error *ngIf=\"showError\">{{getError('verifierBeginWork')}}</mat-error>\n              <mat-hint>mm/dd/yyyy</mat-hint>\n            </mat-form-field>\n          </div>\n          <!-- Current Position -->\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>* What is {{employment.applicantName}}'s current position?</mat-label>\n              <input matInput formControlName=\"verifierCurrentPosition\" maxlength=\"100\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierCurrentPosition\")}}</mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 2em;\">\n          <!-- Current Salary -->\n          <div class=\"col-sm px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>What is {{employment.applicantName}}'s current salary? ($)</mat-label>\n              <input matInput\n                     type=\"text\"\n                     class=\"form-control\"\n                     maxlength=\"9\"\n                     formControlName=\"verifierCurrentSalary\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierCurrentSalary\")}}</mat-error>\n            </mat-form-field>\n          </div>\n          <!-- How often -->\n          <div class=\"col-sm-2\">\n              <mat-form-field appearance=\"legacy\">\n                <mat-select placeholder=\"How often?\" formControlName=\"verifierOften\">\n                  <mat-option *ngFor=\"let option of salaryPeriods\" [value]=\"option.key\">{{option.name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n          </div>\n          <!-- Full or Part -->\n          <div class=\"col-sm px-5\">\n              <mat-form-field>\n                <mat-select placeholder=\"* Is this full or part-time position?\" formControlName=\"verifierFullPart\">\n                  <mat-option *ngFor=\"let option of employmentTimeVerify\" [value]=\"option.key\">{{option.name}}</mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"showError\">{{getError('verifierFullPart')}}</mat-error>\n              </mat-form-field>\n            </div>\n        </div>\n        <div style=\"margin-left: 1.5em; margin-top: 2em\">\n          All fields marked with * are required.\n        </div>\n      </form>\n    </div>\n    <tev-verification-footer *ngIf=\"status!=='Complete'\" (submitEvent)=\"submitEvent()\"></tev-verification-footer>\n  </div>\n\n  <div *ngIf=\"status === 'Complete'\">\n    <tev-verification-finish [title]=\"title\" [complete]=\"status==='Complete'\" [id]=\"id\"\n                             [type]=\"type\"\n                             [error]=\"errorData\"></tev-verification-finish>\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/landlord/landlord.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsLandlordLandlordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\n\n  <mat-spinner class=\"centered\" *ngIf=\"status===''\"></mat-spinner>\n\n  <div *ngIf=\"status === 'Pending'\">\n\n    <tev-verification-title [status]=\"status\" [hasDecline]=\"true\" [description]=\"getDescription()\"\n                            [name]=\"landlord.applicantName\"\n                            [type]=\"type\"\n                            [verificationName]=\"title\" (decline)=\"declineEvent()\"></tev-verification-title>\n\n\n\n    <div class=\"verification-form-container py-2\">\n      <div *ngIf=\"landlord.authForm\" class=\"box px-4\">\n        <p >If you require an authorization form signed by the tenant, please click to download document. <a class=\"btn btn-secondary tev-btn--common\" href=\"{{landlord.authForm}}\" target=\"_blank\">Authorization form</a></p>\n      </div>\n      <form [formGroup]=\"form\">\n        <div class=\"row\">\n          <!-- knows --->\n          <div class=\"col-12 px-5 py-4\">\n            <p><span class=\"txt-bold\">{{landlord.applicantName}}</span> states he/she rents the property located at\n              {{landlord.address}}.\n            </p>\n            <p>Do you know <span class=\"txt-bold\">{{landlord.applicantName}}</span>?</p>\n            <mat-radio-group formControlName=\"knows\" required aria-label=\"Select an option\">\n              <mat-radio-button value=\"Y\">Yes</mat-radio-button>\n              <mat-radio-button value=\"N\">No</mat-radio-button>\n              <mat-error *ngIf=\"showError\">{{getError(\"knows\")}}</mat-error>\n            </mat-radio-group>\n          </div>\n          <!-- ./knows -->\n\n          <div *ngFor=\"let item of data; let i = index\" [class]=\"getClassRow(i)\">\n            <tev-answer *ngIf=\"know\" [showErrors]=\"showError\" [answer]=\"item\" [formGroup]=\"form\"></tev-answer>\n          </div>\n\n        </div>\n\n        <div class=\"col-12 px-4 py-4\">\n          <label class=\"txt-bold\">Remarks?</label>\n          <textarea formControlName=\"remarks\" name=\"remarks\" class=\"form-control txt-xs\" rows=\"3\"></textarea>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>What is your name?</mat-label>\n              <input matInput formControlName=\"verifierName\" maxlength=\"50\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierName\")}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>What is your Relationship with the property?</mat-label>\n              <input matInput formControlName=\"verifierPosition\" maxlength=\"100\" type=\"text\">\n              <mat-error *ngIf=\"showError\">{{getError(\"verifierPosition\")}}</mat-error>\n            </mat-form-field>\n          </div>\n          <!--\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>What is your email?</mat-label>\n              <input matInput type=\"email\" maxlength=\"100\" formControlName=\"verifierEmail\">\n              <mat-error>{{getError(\"verifierEmail\")}}</mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-sm-12 col-lg-6 px-5\">\n            <mat-checkbox formControlName=\"sendResult\">Send me a copy of my responses</mat-checkbox>\n          </div>\n          -->\n        </div>\n\n        <div *ngIf=\"know\" class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"signature\">\n\n              <div class=\"signature__group\">\n                <label class=\"signature__label\">Signature</label>\n                <div class=\"signature-canvas\">\n\n                  <span class=\"signature__float\" *ngIf=\"!form.value['signature']\">SIGN HERE</span>\n\n                  <div class=\"signature-wrapper\">\n                    <canvas id=\"signature-pad\" #signaturePad2></canvas>\n                  </div>\n\n                  <div class=\"signature-text\">\n                    <canvas id=\"signature-text\" #signatureText2></canvas>\n                  </div>\n\n                </div>\n                <input class=\"custom-control-input\"\n                       type=\"hidden\"\n                       formControlName=\"signature\"\n                >\n                <div class=\"invalid-feedback\" *ngIf=\"showError\"><p>{{getError('signature')}}</p></div>\n              </div>\n\n              <button class=\"tev-btn tev-btn--large mb-5\"\n                      type=\"button\" (click)=\"clearSignature()\">Clear\n              </button>\n            </div>\n          </div>\n\n\n          <div class=\"col-12 px-5\">\n            <div class=\"agreement-checkbox custom-checkbox\">\n              <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\n                            formControlName=\"agreeAndAuthorize\"\n                            id=\"agree\">I hereby certify the above statements are true and correct to the best of my\n                knowledge\n              </mat-checkbox>\n            </div>\n            <mat-error *ngIf=\"showError\">{{getErrorAgreeAndAuthorize()}}</mat-error>\n          </div>\n        </div>\n\n      </form>\n    </div>\n    <tev-verification-footer *ngIf=\"status!=='Complete'\" (submitEvent)=\"submitEvent()\"></tev-verification-footer>\n  </div>\n\n  <div *ngIf=\"status === 'Complete'\">\n    <tev-verification-finish [title]=\"title\" [complete]=\"status==='Complete'\" [id]=\"id\"\n                             [error]=\"errorData\"></tev-verification-finish>\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification-finish/verification-finish.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationFinishVerificationFinishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<tev-verification-title [verificationName]=\"title\"></tev-verification-title>\n<div class=\"col-12\">\n  <div class=\"verification-lower-text\">\n    <br/>\n    <div *ngIf=\"error\">\n      <img src=\"assets/icon-alert.svg\" alt=\"error icon\" class=\"icon-result\"/>\n      <p>We're very sorry for the inconvenience but we are unable to process your request.</p>\n      <p *ngIf=\"error\"><strong>{{type}} Verification {{id}} was not found. </strong></p>\n    </div>\n    <div *ngIf=\"complete && !error\">\n      <img src=\"assets/icon-success.svg\" alt=\"error icon\" class=\"icon-result\"/>\n      <p><strong>{{type}} has been completed. Thank you for your time.</strong></p>\n      <br/>\n    </div>\n    <p>If you have questions, please call Tenant Evaluation Customer Support at <a href=\"tel:(305) 692-7900\">(305) 692-7900</a></p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-footer/verification-footer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationVerificationFooterVerificationFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mt-5 footer my-5\">\n\n  <div class=\"col-12 col-md-6\">\n    <p class=\"caption\">\n      If you have any questions, please call Tenant Evaluation customer support at: 1-305.692.7900\n    </p>\n  </div>\n  <div class=\"col-12 col-md-6 d-flex justify-content-sm-center footer\">\n    <button class=\"btn btn-lg btn-primary btn-block ml-md-auto mt-4 mt-lg-0\" (click)=\"submitEmit()\" >Submit</button>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-question-answer/answer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationVerificationQuestionAnswerAnswerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"formGroupAnswer\" class=\"answer\">\n  <p [innerHTML]=\"answer.questionHtmlText\"></p>\n\n  <mat-radio-group class=\"row\" [formControlName]=\"answer.formName\" aria-label=\"Select an option\">\n    <div *ngFor=\"let item of answer.answers\" [class]=\"'col-'+(12/3) +' answer'\">\n      <mat-radio-button [value]=\"item.value\">{{item.id}}</mat-radio-button>\n    </div>\n    <mat-error *ngIf=\"showErrors\">{{getErrorMessage(answer.formName)}}</mat-error>\n  </mat-radio-group>\n\n  <div *ngFor=\"let item of answer.answers\">\n    <div class=\"row full-width\">\n      <div *ngFor=\"let item2 of item.txtResponse\" [class]=\"'col-'+getWidth(item.txtResponse.length)\">\n        <div *ngIf=\"item.value==this.selectedItem\">\n          <span class=\"txt-bold\" [innerHTML]=\"item2.text\"></span>\n          <mat-form-field [id]=\"item2.fieldName\" appearance=\"legacy\">\n            <input matInput [type]=\"item2.type\"   [maxlength]=\"item2.maxLength\"\n                   placeholder=\"\" [formControlName]=\"item2.fieldName\" />\n            <mat-error>{{getErrorMessage(item2.fieldName)}}</mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verification/verification-title/verification-title.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationVerificationTitleVerificationTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"verifications container\">\n\n  <div class=\"logo\">\n    <img src=\"/assets/logo-tenant-evaluation-alt.svg\" alt=\"Logo Tenant Evaluation\">\n  </div>\n  <h1 class=\"title\">{{verificationName}}</h1>\n\n  <div *ngIf=\"status==='Pending'\">\n    <div class=\"description\" [innerHTML]=\"description\"></div>\n    <div *ngIf=\"hasDecline\" >\n      <br>\n      <p style=\"text-align:center\">{{declineText}}</p>\n      <button class=\"btn btn-primary tev-btn--common decline-bt\" (click)=\"confirmDecline()\">I decline to participate\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"status==='Error'\">\n    <p>{{error}}</p>\n  </div>\n  <div *ngIf=\"status==='Complete'\">\n\n    <tev-message-with-icon *ngIf=\"error==='' ; else errVerification\" [img]=\"'assets/icon-green-check.svg'\" [altText]=\"'green check'\"\n                           [text]=\"'Verification Completed'\"\n                           [smallText]=\"' mas informacion '\"></tev-message-with-icon>\n\n    <ng-template #errVerification>\n      <tev-message-with-icon [img]=\"'assets/icon-alert.svg'\" [altText]=\"'alert icon'\"\n                             [text]=\"error\"\n                             [smallText]=\"' mas informacion '\"></tev-message-with-icon>\n    </ng-template>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verifications/verifications-router/verifications.component.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationsVerificationsRouterVerificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n";
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


    __webpack_exports__["default"] = ".box {\n  text-align: center;\n}\n.box button {\n  margin-bottom: 35px;\n}\n.mark-colum {\n  border-right: solid;\n  border-color: gray;\n}\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.signature .signature-text {\n  z-index: 0;\n}\n.signature .invalid-feedback {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n@media (max-width: 767.98px) {\n  .mark-colum {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC92ZXJpZmljYXRpb25zL2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0FDSkY7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURNQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBZGlCO0VBZWpCLGtCQUFBO0VBQ0EseUJBQUE7QUNGRjtBRElBO0VBQ0UsV0FBQTtFQUNBLGFBcEJpQjtBQ21CbkI7QURJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBNUJVO0VBNkJWLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLHlCQXBDUztFQXFDVCxjQW5DUTtFQW9DUix5QkFBQTtFQUNBLGlCQXBDZTtFQXFDZixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7QURNQTtFQUNFO0lBQ0Usa0JBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9ucy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XG4kbm9ybWFsLWdyYXk6ICNkYmRiZGI7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJHNpZ25hdHVyZS1oZWlnaHQ6IDI2MHB4O1xuXG4uYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBidXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxufVxuLm1hcmstY29sdW0ge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGdyYXk7XG59XG4uc2lnbmF0dXJlLWNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XG59XG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XG59XG4uc2lnbmF0dXJlIHtcbiAgJl9fZmxvYXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICRub3JtYWwtZ3JheTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogOTtcbiAgfVxuICAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUtdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XG4gICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJG5vcm1hbC1ncmF5O1xuICAgIG1pbi1oZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5zaWduYXR1cmUtdGV4dCB7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubWFyay1jb2x1bSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG4iLCIuYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJveCBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4ubWFyay1jb2x1bSB7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLnNpZ25hdHVyZS1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNGU2O1xufVxuXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG59XG5cbi5zaWduYXR1cmVfX2Zsb2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjZGJkYmRiO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTtcbn1cbi5zaWduYXR1cmUgLnNpZ25hdHVyZS13cmFwcGVyLCAuc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNzc3NDdlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXRleHQge1xuICB6LWluZGV4OiAwO1xufVxuLnNpZ25hdHVyZSAuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm1hcmstY29sdW0ge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".box {\n  text-align: center;\n}\n.box button {\n  margin-bottom: 35px;\n}\n.mark-colum {\n  border-right: solid;\n}\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.signature .signature-text {\n  z-index: 0;\n}\n.signature .invalid-feedback {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n@media (max-width: 767.98px) {\n  .mark-colum {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC92ZXJpZmljYXRpb25zL2VtcGxveW1lbnQvZW1wbG95bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmVyaWZpY2F0aW9ucy9lbXBsb3ltZW50L2VtcGxveW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtBQ0pGO0FES0U7RUFDRSxtQkFBQTtBQ0hKO0FETUE7RUFDRSxtQkFBQTtBQ0hGO0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFiaUI7RUFjakIsa0JBQUE7RUFDQSx5QkFBQTtBQ0ZGO0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFuQmlCO0FDa0JuQjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0EzQlU7RUE0QlYsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0UseUJBbkNTO0VBb0NULGNBbENRO0VBbUNSLHlCQUFBO0VBQ0EsaUJBbkNlO0VBb0NmLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0U7RUFDRSxVQUFBO0FDREo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjtBRE1BO0VBQ0U7SUFDRSxrQkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92ZXJpZmljYXRpb25zL2VtcGxveW1lbnQvZW1wbG95bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodC1ncmF5OiAjZjdmN2Y3O1xuJG5vcm1hbC1ncmF5OiAjZGJkYmRiO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRzaWduYXR1cmUtaGVpZ2h0OiAyNjBweDtcblxuLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYnV0dG9ue1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cbn1cbi5tYXJrLWNvbHVtIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbn1cbi5zaWduYXR1cmUtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRlNjtcbn1cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkc2lnbmF0dXJlLWhlaWdodDtcbn1cbi5zaWduYXR1cmUge1xuICAmX19mbG9hdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogJG5vcm1hbC1ncmF5O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiA5O1xuICB9XG4gIC5zaWduYXR1cmUtd3JhcHBlciwgLnNpZ25hdHVyZS10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbm9ybWFsLWdyYXk7XG4gICAgbWluLWhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLnNpZ25hdHVyZS10ZXh0IHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5tYXJrLWNvbHVtIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn1cbiIsIi5ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm94IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5tYXJrLWNvbHVtIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbn1cblxuLnNpZ25hdHVyZS1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNGU2O1xufVxuXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG59XG5cbi5zaWduYXR1cmVfX2Zsb2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjZGJkYmRiO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTtcbn1cbi5zaWduYXR1cmUgLnNpZ25hdHVyZS13cmFwcGVyLCAuc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNzc3NDdlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXRleHQge1xuICB6LWluZGV4OiAwO1xufVxuLnNpZ25hdHVyZSAuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm1hcmstY29sdW0ge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".box {\n  text-align: center;\n}\n.box button {\n  margin-bottom: 35px;\n}\n.mark-colum {\n  border-right: solid;\n}\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.signature .signature-text {\n  z-index: 0;\n}\n.signature .invalid-feedback {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n@media (max-width: 767.98px) {\n  .mark-colum {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC92ZXJpZmljYXRpb25zL2xhbmRsb3JkL2xhbmRsb3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZXJpZmljYXRpb25zL2xhbmRsb3JkL2xhbmRsb3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7QUNKRjtBREtFO0VBQ0UsbUJBQUE7QUNISjtBRE1BO0VBQ0UsbUJBQUE7QUNIRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBYmlCO0VBY2pCLGtCQUFBO0VBQ0EseUJBQUE7QUNGRjtBRElBO0VBQ0UsV0FBQTtFQUNBLGFBbkJpQjtBQ2tCbkI7QURJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBM0JVO0VBNEJWLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLHlCQW5DUztFQW9DVCxjQWxDUTtFQW1DUix5QkFBQTtFQUNBLGlCQW5DZTtFQW9DZixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7QURNQTtFQUNFO0lBQ0Usa0JBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9ucy9sYW5kbG9yZC9sYW5kbG9yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodC1ncmF5OiAjZjdmN2Y3O1xuJG5vcm1hbC1ncmF5OiAjZGJkYmRiO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRzaWduYXR1cmUtaGVpZ2h0OiAyNjBweDtcblxuLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYnV0dG9ue1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cbn1cbi5tYXJrLWNvbHVtIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbn1cbi5zaWduYXR1cmUtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRlNjtcbn1cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkc2lnbmF0dXJlLWhlaWdodDtcbn1cbi5zaWduYXR1cmUge1xuICAmX19mbG9hdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogJG5vcm1hbC1ncmF5O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiA5O1xuICB9XG4gIC5zaWduYXR1cmUtd3JhcHBlciwgLnNpZ25hdHVyZS10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbm9ybWFsLWdyYXk7XG4gICAgbWluLWhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLnNpZ25hdHVyZS10ZXh0IHtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5tYXJrLWNvbHVtIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn1cbiIsIi5ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm94IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5tYXJrLWNvbHVtIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbn1cblxuLnNpZ25hdHVyZS1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNGU2O1xufVxuXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG59XG5cbi5zaWduYXR1cmVfX2Zsb2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjZGJkYmRiO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTtcbn1cbi5zaWduYXR1cmUgLnNpZ25hdHVyZS13cmFwcGVyLCAuc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNzc3NDdlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXRleHQge1xuICB6LWluZGV4OiAwO1xufVxuLnNpZ25hdHVyZSAuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm1hcmstY29sdW0ge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".verification-principal-text {\n  text-align: center;\n  font: italic normal normal 35px/45px Open Sans;\n  letter-spacing: -1.05px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.verification-lower-text {\n  text-align: center;\n  font: normal normal 300 14px/20px Roboto;\n  letter-spacing: -0.42px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.icon-result {\n  width: 10%;\n  margin-bottom: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC92ZXJpZmljYXRpb25zL3ZlcmlmaWNhdGlvbi1maW5pc2gvdmVyaWZpY2F0aW9uLWZpbmlzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmVyaWZpY2F0aW9ucy92ZXJpZmljYXRpb24tZmluaXNoL3ZlcmlmaWNhdGlvbi1maW5pc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9ucy92ZXJpZmljYXRpb24tZmluaXNoL3ZlcmlmaWNhdGlvbi1maW5pc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZpY2F0aW9uLXByaW5jaXBhbC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250OiBpdGFsaWMgbm9ybWFsIG5vcm1hbCAzNXB4LzQ1cHggT3BlbiBTYW5zO1xuICBsZXR0ZXItc3BhY2luZzogLTEuMDVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDE7XG59XG4udmVyaWZpY2F0aW9uLWxvd2VyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgMzAwIDE0cHgvMjBweCBSb2JvdG87XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMTtcbn1cbi5pY29uLXJlc3VsdCB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG5cbiIsIi52ZXJpZmljYXRpb24tcHJpbmNpcGFsLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQ6IGl0YWxpYyBub3JtYWwgbm9ybWFsIDM1cHgvNDVweCBPcGVuIFNhbnM7XG4gIGxldHRlci1zcGFjaW5nOiAtMS4wNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnZlcmlmaWNhdGlvbi1sb3dlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAxNHB4LzIwcHggUm9ib3RvO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pY29uLXJlc3VsdCB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufSJdfQ== */";
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


    __webpack_exports__["default"] = ".caption {\n  background-image: url('icon-tenant-evaluation-dark-gray.svg');\n  background-size: 36px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 50px;\n  color: #bbbcbe;\n  line-height: 1.2rem;\n  font-size: 0.9rem;\n}\n\n.footer {\n  margin-bottom: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC92ZXJpZmljYXRpb25zL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24tZm9vdGVyL3ZlcmlmaWNhdGlvbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi1mb290ZXIvdmVyaWZpY2F0aW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbnMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi1mb290ZXIvdmVyaWZpY2F0aW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXB0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifmFzc2V0cy9pY29uLXRlbmFudC1ldmFsdWF0aW9uLWRhcmstZ3JheS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzZweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgY29sb3I6ICNiYmJjYmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9vdGVye1xuICAgIG1hcmdpbi1ib3R0b206IDYlO1xufVxuIiwiLmNhcHRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+YXNzZXRzL2ljb24tdGVuYW50LWV2YWx1YXRpb24tZGFyay1ncmF5LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzNnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBjb2xvcjogI2JiYmNiZTtcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".verifications .message-whit-icon {\n  margin: 0 auto !important;\n  padding: 0px !important;\n}\n.verifications .message-whit-icon .gifimg {\n  margin: 2% auto !important;\n}\n.verifications .message-whit-icon .text {\n  padding: 0px !important;\n  margin: 3% auto;\n}\n.verifications .message-whit-icon .small-text {\n  padding: 0px !important;\n  margin: 2% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC92ZXJpZmljYXRpb25zL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24tdGl0bGUvdmVyaWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZXJpZmljYXRpb25zL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24tdGl0bGUvdmVyaWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQ0FKO0FEQ0k7RUFDRSwwQkFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNDTjtBRENJO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC92ZXJpZmljYXRpb25zL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24tdGl0bGUvdmVyaWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcmlmaWNhdGlvbnMge1xuICAubWVzc2FnZS13aGl0LWljb24ge1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmdpZmltZyB7XG4gICAgICBtYXJnaW46IDIlIGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgfVxuICAgIC5zbWFsbC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAyJSBhdXRvO1xuICAgIH1cblxuICB9XG5cbn1cbiIsIi52ZXJpZmljYXRpb25zIC5tZXNzYWdlLXdoaXQtaWNvbiB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLnZlcmlmaWNhdGlvbnMgLm1lc3NhZ2Utd2hpdC1pY29uIC5naWZpbWcge1xuICBtYXJnaW46IDIlIGF1dG8gIWltcG9ydGFudDtcbn1cbi52ZXJpZmljYXRpb25zIC5tZXNzYWdlLXdoaXQtaWNvbiAudGV4dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDMlIGF1dG87XG59XG4udmVyaWZpY2F0aW9ucyAubWVzc2FnZS13aGl0LWljb24gLnNtYWxsLXRleHQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAyJSBhdXRvO1xufSJdfQ== */";
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-payment-extra-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"text-uppercase txt-xs font-weight-bold px-5 py-3 mb-0\">\n  Payment Submission and Agreement\n</h3>\n\n<div class=\"box-group box-group--signature\">\n\n  <p>I, <strong class=\"txt-applicant-name\">{{billingName}}</strong>\n    <br/>\n    Confirm that I authorize the payment of the above amount according to the card issuer agreement. I also understand\n    tha the application fee is required and <u style=\"color:red\">non-refundable</u> regardless of the outcome of the\n    application.</p>\n\n  <div class=\"agreement-text\">\n    <p><b><u>PLEASE SCROLL DOWN AND READ THE FOLLOWING AGREEMENT IN FULL BEFORE SUBMITTING THE PAYMENT:</u></b></p>\n    <p>Tenant Evaluation understands the importance of keeping your information secure from\n      unauthorized access. All of your sensitive data is encrypted before being transmitted to/from our\n      servers. Tenant Evaluation is a Level 1 Compliant Organization. For details on Level 1 security\n      standards please <a href=\"https://www.pcisecuritystandards.org/\" target=\"_blank\" style=\"color:blue\">Click\n        Here.</a></p>\n    <p><b style=\"color: red\">* Any additional occupants 18 years old or older will have to make a separate\n      application*</b></p>\n    <p><u>FEES:</u></p>\n    <p>\n      The expected fees for your application are listed below. Actual fees may vary depending on additional information\n      obtained for your application. The fees have been established by the community to which you are applying. Should\n      you have any questions, please contact the community directly.\n      <u>PLEASE NOTE THE APPLICATION FEES ARE REQUIRED AND NON-REFUNDABLE REGARDLESS OF THE OUTCOME OF THE\n        APPLICATION.</u></p>\n\n    <p><b style=\"color: red\">I understand that I may be offered the Quick Pass option at the time of payment.\n      The Quick Pass Service will make your application a priority within Tenant Evaluation's processing system.\n      It does not guarantee priority on the association's approval/denial time-frame.\n      This Quick Pass is Non-Refundable and it is an optional feature.</b>\n    <p>I UNDERSTAND THAT THE APPLICATION FEE ALONG WITH THE QUICK PASS FEE IS THE TOTAL AMOUNT LIST ON THIS PAGE</p>\n    <p>** ADDITIONAL DEPOSITS/FEES MAY BE COLLECTED AFTER APPROVAL**</p>\n    <p>If the community requires a Credit Report, a Hard inquiry FICO Score will be processed.</p>\n\n    <p>IF YOU AGREE WITH ALL PROPERTY NOTES AND REQUIREMENTS LISTED ON THIS SITE, ENTER YOUR FULL LEGAL NAME IN THE BOX\n      BELOW.\n      YOU MAY ALSO SIGN WITH YOUR MOUSE BY DRAWING YOUR SIGNATURE. THEN CLICK PAY. IF YOU DO NOT AGREE TO ALL THE\n      PROPERTY NOTES AND NOTICES, SIMPLY CLOSE YOUR BROWSER TO EXIT FROM THIS APPLICATION.</p>\n    <p> I FURTHER STATE THIS FORM WAS SIGNED BY ME AND WAS NOT ORIGINATED WITH FRAUDULENT INTENT BY ME OR ANY OTHER\n      PERSON, AND THAT THE SIGNATURE BELOW IS MY OWN LEGALLY BINDING DIGITAL SIGNATURE.</p>\n    <p>You are hereby authorized to release any and all information requested with regards to verification of my bank\n      account(s), credit history, residential history, criminal record history, employment verification and character\n      references to Tenant Evaluation LLC. This information is to be used for my/our credit report for my/our\n      Application for Occupancy.</p>\n\n    <p>I/We hereby waive any privileges I/We may have with respect to the said information in reference to its release\n      to the aforesaid party. Information obtained for this report is to be released to Tenant Evaluation LLC, Property\n      Manager, Board of Directors and The Landlord for their exclusive use only.</p>\n\n    <p>PLEASE INCLUDE COPY OF DRIVER’S LICENSE OR PASSPORT TO CONFIRM IDENTITY.</p>\n\n    <p>Please notify your Landlord(s), Employer(s), and Character References that we will be contacting them to obtain a\n      reference pursuant to your application.</p>\n\n    <p>I/We further state the Authorization Form were signed by me/us and was not originated with fraudulent intent by\n      me/ us or any other person, and that the signature(s) below are my/our own proper signature.</p>\n\n    <p>I/We certify under penalty of perjury that the foregoing is true and correct.</p>\n\n    <p>I/We further understand that any refundable monies paid through Tenant Evaluation in the form of deposits, extra\n      fees, etc. will be refunded by the Association directly.</p>\n\n    <p>Please allow 14 days from the date below to complete the application. Please be aware that the associations have their own approval process which will start once the report has been released and the time frame may vary per association.</p>\n\n    <p>If after 30 days from the date you created the application Tenant Evaluation has not received all the required documentation, your application will be considered abandoned and the incomplete application will be closed and sent to the community. The application can only be re-opened within 30 days of being abandoned with written request from the the applicant.</p>\n\n    <p>If you or the co-applicant have falsified, deliberately mislead or omitted to mention any information on your\n      application, you may not be approved for a purchase, lease and/or occupancy.</p>\n  </div>\n\n  <form class=\"signature\" [formGroup]=\"signatureForm\">\n\n\n\n    <h4 class=\"signature__title\">Review your signature</h4>\n\n    <div class=\"signature__group\">\n      <div class=\"signature-input\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"Type your name here or draw below\"\n               formControlName=\"signatureText\">\n      </div>\n\n      <div class=\"signature-canvas\">\n\n        <div class=\"signature-wrapper\">\n          <canvas id=\"signature-pad\" #signaturePad></canvas>\n        </div>\n\n        <div class=\"signature-text\">\n          <canvas id=\"signature-text\" #signatureText></canvas>\n\n        </div>\n      </div>\n      <input class=\"custom-control-input\"\n             type=\"hidden\"\n             formControlName=\"noticeSignature\"\n      >\n      <div class=\"invalid-feedback\">{{getError('noticeSignature')}}</div>\n      <br>\n      <p>Type your or draw your name above</p>\n    </div>\n\n    <button class=\"tev-btn mb-5\"\n            type=\"button\" (click)=\"clearSignature()\">Clear\n    </button>\n\n    <div class=\"custom-checkbox\">\n      <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\n                    type=\"checkbox\"\n                    id=\"agree\"\n                    formControlName=\"agreeAndAuthorize\"\n      >I agree and authorize this charge\n      </mat-checkbox>\n      <div class=\"invalid-feedback\">{{getError('agreeAndAuthorize')}}</div>\n    </div>\n\n  </form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-group box-group--connect\">\n\n  <form class=\"row\" [formGroup]=\"creditCardForm\">\n\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n      <h3 class=\"text-uppercase txt-xs no-bg mt-4\">\n        Billing Address\n      </h3>\n    </div><!-- ./col -->\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentBillingAddress\"\n                 class=\"form-control\"\n                 placeholder=\"Name (as it appears on your card)\"\n                 formControlName=\"billingName\"\n          >\n          <mat-error>{{getError('billingName')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div class=\"col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"custom-checkbox\">\n        <mat-checkbox class=\"mat-checkbox--rounded\"\n                      type=\"checkbox\"\n                      id=\"paymentNotUs\"\n                      formControlName=\"internationalBillingAddress\"\n        >Billing address is not in the United States\n        </mat-checkbox>\n        <div class=\"invalid-feedback\">{{getError('internationalBillingAddress')}}</div>\n      </div>\n    </div><!-- ./col -->\n\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentStreet\"\n                 class=\"form-control\"\n                 placeholder=\"Street\"\n                 formControlName=\"billingStreet1\"\n                 tevAsciiOnly\n          >\n          <mat-error>{{getError('billingStreet1')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentStreet2\"\n                 class=\"form-control\"\n                 placeholder=\"Street 2\"\n                 formControlName=\"billingStreet2\"\n                 tevAsciiOnly\n          >\n          <mat-error>{{getError('billingStreet2')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentCity\"\n                 class=\"form-control\"\n                 placeholder=\"City\"\n                 formControlName=\"billingCity\"\n                 tevAsciiOnly\n          >\n          <mat-error>{{getError('billingCity')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n      <div class=\"select-group\">\n\n        <mat-form-field>\n\n          <mat-select [formControlName]=\"'billingState'\" placeholder=\"State\">\n            <mat-option *ngFor=\"let state of states;\" [value]=\"state.abbreviation\">{{state.name}}</mat-option>\n          </mat-select>\n          <mat-error>{{getError('billingState')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentZipCode\"\n                 class=\"form-control\"\n                 placeholder=\"Zip Code\"\n                 formControlName=\"billingZipcode\"\n                 tevAsciiOnly\n          >\n          <mat-error>{{getError('billingZipcode')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <!-- @todo DONT ASK FOR / -->\n\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n      <h4 class=\"box-group__title\">\n        Card Information\n      </h4>\n    </div><!-- ./col -->\n\n    <div *ngIf=\"!showSquare\" class=\"col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentCreditCard\"\n                 class=\"form-control\"\n                 placeholder=\"Credit Card Number\"\n                 formControlName=\"cardNumber\"\n                 [maxlength]=\"16\"\n                 tevNumbersOnly\n          >\n          <mat-error>{{getError('cardNumber')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div *ngIf=\"!showSquare\" class=\"col-7 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentExpiration\"\n                 class=\"form-control\"\n                 placeholder=\"Expiration (MM/YY)\"\n                 formControlName=\"cardExp\"\n                 maxlength=\"5\"\n                 tevMonthYear (onMonthYearChanged)=onMonthYearChanged($event)\n\n          >\n          <mat-error>{{getError('cardExp')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div  *ngIf=\"!showSquare\"class=\"col-5 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentCVV\"\n                 class=\"form-control\"\n                 placeholder=\"CVV\"\n                 maxlength=\"4\"\n                 formControlName=\"cardCvv2\"\n                 tevNumbersOnly\n          >\n          <mat-error>{{getError('cardCvv2')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <div *ngIf=\"!showSquare\" class=\"col-12\">\n      <div class=\"payment-options mt-4\">\n        <ul>\n          <li>\n            <img src=\"./assets/icon-visa.svg\" alt=\"visa\">\n          </li>\n          <li>\n            <img src=\"./assets/icon-mastercard.svg\" alt=\"mastercard\">\n          </li>\n          <li>\n            <img src=\"./assets/icon-discover.svg\" alt=\"discover\">\n          </li>\n        </ul>\n      </div><!-- ./payment-options -->\n    </div><!-- ./col -->\n\n\n\n  </form><!-- ./row -->\n  <div *ngIf=\"showSquare\">\n    <mat-progress-spinner *ngIf=\"showLoading\" mode=\"indeterminate\"></mat-progress-spinner>\n    <div id=\"card-container\"></div>\n  </div>\n\n\n</div><!-- ./py-4 px-5 -->\n\n<div class=\"box-group box-group--total\">\n  <h4>\n    Total Payment Now\n  </h4>\n  <h4>\n    {{extraPayment.amount | currency}}\n  </h4>\n</div><!-- ./box-group -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-thank-you/ep-thank-you.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-thank-you/ep-thank-you.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content-white begin-enter-code\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6\">\n        <img src=\"/assets/logo-lets-begin.svg\" alt=\"Let's Begin\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"main-content begin-community-selection lower-content\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <section class=\"content-box\">\n          <article>\n            <div class=\"main-icon-holder xs-max\"></div>\n            <h1 class=\"txt-hero\">Thank you. Payment Received</h1>\n          </article>\n\n        </section>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"txt-xs font-weight-bold px-3 py-2 mb-0\">Payment Details</h3>\n\n<div class=\"py-4 px-5\">\n\n  <article>\n\n    <div class=\"payment-table\">\n\n      <div class=\"payment-table__row payment-table__row--head\">\n        <div class=\"payment-table__col payment-table__col--item\">\n          <h3 class=\"txt-all-caps txt-md column-title\">Reason</h3>\n        </div>\n        <div class=\"payment-table__col payment-table__col--price\">\n          <h3 class=\"txt-all-caps txt-md column-title\">Amount</h3>\n        </div>\n      </div>\n\n      <div class=\"payment-table__row\">\n        <ul class=\"payment-table__col payment-table__col--item\">\n          <li class=\"txt-xs\">{{extraPayment.reason}}</li>\n        </ul>\n        <ul class=\"payment-table__col payment-table__col--price\">\n          <li class=\"txt-xs\">{{extraPayment.amount | currency}}</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"payment-table__row payment-table__row--total\">\n      <div class=\"payment-table__col payment-table__col--item\">\n        <h3>Total Additional fee</h3>\n        <span class=\"payment-table__warn\">This charge will be collected immediately *</span>\n      </div>\n      <div class=\"payment-table__col payment-table__col--price\">\n        <h3>{{extraPayment.amount | currency}}\n\n        </h3>\n      </div>\n    </div>\n\n  </article>\n</div><!-- ./py-4 px-5 -->\n\n<div class=\"box-group box-group--total\">\n  <h4>\n    Total Payment Now\n  </h4>\n  <h4>\n    {{extraPayment.amount | currency}}\n  </h4>\n</div><!-- ./box-group -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment/extra-payment.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment/extra-payment.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid main-content profile bg-dark-\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <section class=\"content-box\">\n        <article>\n\n\n          <div class=\"back-wrapper d-flex\">\n            <div class=\"main-icon-holder ml-auto\">\n            </div>\n          </div>\n        </article>\n      </section><!-- ./content-box -->\n    </div><!-- ./col -->\n  </div><!-- ./row -->\n</div><!-- ./container-fluid -->\n\n<div class=\"container-fluid main-content profile accordion-wrapper\">\n\n  <tev-loader *ngIf=\"processing\" [loading_text]=\"loading_text\" ></tev-loader>\n\n  <div class=\"row mx-0 justify-content-center\">\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-11 col-xl-8 px-0\">\n      <div class=\"accordion txt-xs\">\n        <div class=\"form-personal-info floating-labels form-bg-light\">\n\n\n          <div class=\"tab-content\" role=\"tablist\">\n\n            <div class=\"card tab-pane fade show active\" #formContent>\n\n              <div id=\"collapseSix\" class=\"collapse show\" aria-labelledby=\"headingSix\" data-parent=\"#accordion\">\n\n                <div class=\"card-body txt-purple\">\n\n                  <tev-extra-payment-summary [extraPayment]=\"extraPayment\"></tev-extra-payment-summary>\n\n                  <tev-ep-credit-card-info [validate]=\"validate$\"\n                                           [extraPayment]=\"extraPayment\"\n                                           (formChanged)=\"paymentInfoChanged($event)\"\n                                           (nameChanged)=\"billingNameChanged($event)\"\n                                           (squareCard)=\"inputSquareCard($event)\"></tev-ep-credit-card-info>\n\n                  <tev-ep-agreement-signature [validate]=\"validate$\"\n                                              (formChanged)=\"paymentAgreeChanged($event)\"\n                                              [billingName]=\"billingName\"></tev-ep-agreement-signature>\n\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 d-flex\">\n                    <button class=\"btn btn-lg btn-primary btn-block mb-4 btn-submit mb-3 mt-5\"\n                            type=\"button\"\n                            [disabled]=\"processing\"\n                            (click)=\"submit()\">Pay {{extraPayment.amount | currency}}</button>\n                  </div><!-- ./col -->\n\n                </div><!-- ./card-body -->\n\n              </div><!-- ./collapse -->\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".agreement-text {\n  max-height: 15em;\n  overflow-y: auto;\n  padding: 1em;\n  margin: 1em 0;\n  border: 1px solid #f1f1f2;\n  background-color: #F5F5F5;\n}\n\n.signature-canvas {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 200px;\n}\n\n.signature .signature-input {\n  background-color: #f1f1f2;\n  color: #69616d;\n}\n\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #d0d1d3;\n  color: #77747e;\n  min-height: 200px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.signature .signature-text {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtcGF5bWVudC9lcC1hZ3JlZW1lbnQtc2lnbmF0dXJlL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZXh0cmEtcGF5bWVudFxcZXAtYWdyZWVtZW50LXNpZ25hdHVyZVxcZXAtYWdyZWVtZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXh0cmEtcGF5bWVudC9lcC1hZ3JlZW1lbnQtc2lnbmF0dXJlL2VwLWFncmVlbWVudC1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNFLHlCQTNCUztFQTRCVCxjQTNCUTtFQTRCUixpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREVFO0VBQ0UsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZXh0cmEtcGF5bWVudC9lcC1hZ3JlZW1lbnQtc2lnbmF0dXJlL2VwLWFncmVlbWVudC1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGlnaHQtZ3JheTogI2QwZDFkMztcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG5cbi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDE1ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cbi5zaWduYXR1cmUtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRlNjtcbn1cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5zaWduYXR1cmUge1xuICAuc2lnbmF0dXJlLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYyO1xuICAgIGNvbG9yOiAjNjk2MTZkO1xuICB9XG4gIC5zaWduYXR1cmUtd3JhcHBlciwgLnNpZ25hdHVyZS10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuc2lnbmF0dXJlLXRleHQge1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cbiIsIi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDE1ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLnNpZ25hdHVyZS1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNGU2O1xufVxuXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zaWduYXR1cmUgLnNpZ25hdHVyZS1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjI7XG4gIGNvbG9yOiAjNjk2MTZkO1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUgLnNpZ25hdHVyZS10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDFkMztcbiAgY29sb3I6ICM3Nzc0N2U7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIHotaW5kZXg6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EpAgreementSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpAgreementSignatureComponent", function() { return EpAgreementSignatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js");
/* harmony import */ var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/custom-validators */ "./src/app/shared/custom-validators.ts");








let EpAgreementSignatureComponent = class EpAgreementSignatureComponent {
    constructor(formBuilder, uiService) {
        this.formBuilder = formBuilder;
        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.billingName$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.viewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listenToBillingNameChange();
    }
    set validate(validate$) {
        validate$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(() => {
            this.markControlsAsTouched();
        });
    }
    set billingName(billingName) {
        this._billingName = billingName;
        this.billingName$.next(billingName);
    }
    get billingName() {
        return this._billingName;
    }
    onResize() {
        this.setCanvasSize();
    }
    ngOnInit() {
        this.initForm();
        this.listenToFormChanges();
        this.formReady$.next();
    }
    initForm() {
        this.signatureForm = this.formBuilder
            .group({
            agreeAndAuthorize: [false, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].agreeValidator()],
            noticeSignature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            signatureText: [''],
        });
    }
    listenToFormChanges() {
        this.signatureForm
            .statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(status => {
            if ('VALID' === status) {
                const { noticeSignature } = this.signatureForm.value;
                this.formChanged.emit({ signature: noticeSignature });
            }
            else {
                this.formChanged.emit(null);
            }
        });
        this.signatureForm
            .controls['signatureText']
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            let dataUrl = null;
            if (value) {
                const canvasContext = this.signatureTextCanvas.getContext('2d');
                canvasContext.clearRect(0, 0, this.signatureTextCanvas.width, this.signatureTextCanvas.height);
                canvasContext.font = 'italic 60px \'Herr Von Muellerhoff\'';
                canvasContext.fillText(value, 10, 110);
                dataUrl = this.signatureTextCanvas.toDataURL();
                this.signaturePad.clear();
                this.signaturePad.fromDataURL(dataUrl);
            }
            this.signatureForm
                .patchValue({
                noticeSignature: dataUrl
            });
        });
        this.signatureForm.updateValueAndValidity();
    }
    listenToBillingNameChange() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.formReady$, this.billingName$, this.viewInit$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(([formReady, name]) => {
            this.signatureForm
                .patchValue({
                signatureText: name
            });
        });
    }
    markControlsAsTouched() {
        this.uiService.markControlsAsTouched(this.signatureForm);
    }
    setCanvasSize() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
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
        if (this.signatureForm && this.signaturePad) {
            this.signatureForm
                .controls['signatureText']
                .updateValueAndValidity();
        }
    }
    getError(controlName) {
        const { errors } = this.signatureForm.controls[controlName];
        return this.uiService.getControlError(errors);
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ngAfterViewInit() {
        this.initSignature();
        this.viewInit$.next();
    }
    clearSignature() {
        this.signaturePad.clear();
        this.signatureForm
            .patchValue({
            noticeSignature: null
        });
    }
    initSignature() {
        this.signatureCanvas = this.signaturePadRef.nativeElement;
        this.signatureTextCanvas = this.signatureTextRef.nativeElement;
        this.setCanvasSize();
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_6__["default"](this.signatureCanvas);
        this.signaturePad.onEnd = () => {
            const signature = this.signaturePad.toDataURL('image/png');
            this.signatureForm
                .patchValue({
                noticeSignature: signature
            });
        };
    }
};
EpAgreementSignatureComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signaturePad', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EpAgreementSignatureComponent.prototype, "signaturePadRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureText', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EpAgreementSignatureComponent.prototype, "signatureTextRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]])
], EpAgreementSignatureComponent.prototype, "validate", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], EpAgreementSignatureComponent.prototype, "billingName", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], EpAgreementSignatureComponent.prototype, "formChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], EpAgreementSignatureComponent.prototype, "onResize", null);
EpAgreementSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-ep-agreement-signature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ep-agreement-signature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ep-agreement-signature.component.scss */ "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])
], EpAgreementSignatureComponent);



/***/ }),

/***/ "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXAtY3JlZGl0LWNhcmQtaW5mby9lcC1jcmVkaXQtY2FyZC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: EpCreditCardInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpCreditCardInfoComponent", function() { return EpCreditCardInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-validators */ "./src/app/shared/custom-validators.ts");
/* harmony import */ var _shared_definitions_forms_profile_form_payment_details_payment_details_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/definitions/forms/profile-form/payment-details/payment-details.interface */ "./src/app/shared/definitions/forms/profile-form/payment-details/payment-details.interface.ts");
/* harmony import */ var _shared_definitions_constants_us_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/definitions/constants/us_states */ "./src/app/shared/definitions/constants/us_states.ts");
/* harmony import */ var _square_square__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../square/square */ "./src/app/square/square.ts");










let EpCreditCardInfoComponent = class EpCreditCardInfoComponent {
    constructor(uiService, formBuilder) {
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showLoading = Boolean(1);
        this.states = _shared_definitions_constants_us_states__WEBPACK_IMPORTED_MODULE_8__["states"];
        this.defaultAddress = _shared_definitions_forms_profile_form_payment_details_payment_details_interface__WEBPACK_IMPORTED_MODULE_7__["ExtraPaymentDefaultAddress"];
        this.addressNotInUsa = false;
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.squareCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set validate(validate$) {
        validate$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(() => {
            this.markControlsAsTouched();
        });
    }
    ngOnInit() {
        this.showLoading = true;
        this.showSquare = this.extraPayment.paymentProcessor.startsWith('Square');
        this.initForm();
    }
    initForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.creditCardForm = this.formBuilder
                .group({
                billingName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                billingStreet1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                billingStreet2: ['', [_shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                billingCity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                billingState: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                billingZipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].usaZipCode()]],
                cardExp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].validCreditCardExpiration()]],
                cardCvv2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].validCreditCardCode()]],
                cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].validCreditCard()]],
                internationalBillingAddress: [false],
            });
            if (this.showSquare) {
                this.disableCardControls();
                yield this.initSquare();
            }
            this.listenToFormChanges();
        });
    }
    listenToFormChanges() {
        const { internationalBillingAddress, billingName } = this.creditCardForm.controls;
        this.creditCardForm
            .statusChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(status => {
            if ('VALID' === status) {
                this.formChanged.emit(this.creditCardForm.value);
            }
            else {
                this.formChanged.emit(null);
            }
        });
        internationalBillingAddress
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            this.addressNotInUsa = value;
            if (value) {
                this.disableAddressControls();
            }
            else {
                this.enableAddressControls();
            }
            this.creditCardForm.updateValueAndValidity();
        });
        billingName
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            this.nameChanged.emit(value);
        });
    }
    disableAddressControls() {
        Object.keys(this.defaultAddress)
            .forEach(key => {
            this.creditCardForm.controls[key].setValue(this.defaultAddress[key]);
        });
    }
    enableAddressControls() {
        Object.keys(this.defaultAddress)
            .forEach(key => {
            this.creditCardForm.controls[key].setValue('');
        });
    }
    markControlsAsTouched() {
        this.uiService.markControlsAsTouched(this.creditCardForm);
    }
    getError(controlName) {
        const { errors } = this.creditCardForm.controls[controlName];
        return this.uiService.getControlError(errors);
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    disableCardControls() {
        ['cardCvv2', 'cardExp', 'cardNumber']
            .forEach(key => {
            this.creditCardForm.controls[key].setValue('');
            this.creditCardForm.controls[key].disable();
            this.creditCardForm.controls[key].updateValueAndValidity();
        });
    }
    initSquare() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.cardPayment = yield Object(_square_square__WEBPACK_IMPORTED_MODULE_9__["initSquare"])();
            this.squareCard.emit(this.cardPayment);
            this.showLoading = false;
        });
    }
    onMonthYearChanged(value) {
        if (value) {
            this.creditCardForm.controls['cardExp'].setValue(value);
        }
    }
};
EpCreditCardInfoComponent.ctorParameters = () => [
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]])
], EpCreditCardInfoComponent.prototype, "validate", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EpCreditCardInfoComponent.prototype, "extraPayment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], EpCreditCardInfoComponent.prototype, "formChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], EpCreditCardInfoComponent.prototype, "nameChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], EpCreditCardInfoComponent.prototype, "squareCard", void 0);
EpCreditCardInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-ep-credit-card-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ep-credit-card-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ep-credit-card-info.component.scss */ "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], EpCreditCardInfoComponent);



/***/ }),

/***/ "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/extra-payment/ep-thank-you/ep-thank-you.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXAtdGhhbmsteW91L2VwLXRoYW5rLXlvdS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts ***!
  \**********************************************************************/
/*! exports provided: EpThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpThankYouComponent", function() { return EpThankYouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EpThankYouComponent = class EpThankYouComponent {
    constructor() { }
    ngOnInit() {
    }
};
EpThankYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-ep-thank-you',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ep-thank-you.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-thank-you/ep-thank-you.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ep-thank-you.component.scss */ "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EpThankYouComponent);



/***/ }),

/***/ "./src/app/extra-payment/extra-payment-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/extra-payment/extra-payment-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ExtraPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPaymentRoutingModule", function() { return ExtraPaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra-payment/extra-payment.component */ "./src/app/extra-payment/extra-payment/extra-payment.component.ts");
/* harmony import */ var _extra_payment_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extra-payment.guard */ "./src/app/extra-payment/extra-payment.guard.ts");
/* harmony import */ var _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ep-thank-you/ep-thank-you.component */ "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts");






const routes = [
    {
        path: 'thanks',
        component: _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["EpThankYouComponent"],
    },
    {
        path: ':paymentId',
        component: _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__["ExtraPaymentComponent"],
        canActivate: [_extra_payment_guard__WEBPACK_IMPORTED_MODULE_4__["ExtraPaymentGuard"]],
    },
];
let ExtraPaymentRoutingModule = class ExtraPaymentRoutingModule {
};
ExtraPaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _extra_payment_guard__WEBPACK_IMPORTED_MODULE_4__["ExtraPaymentGuard"],
        ]
    })
], ExtraPaymentRoutingModule);



/***/ }),

/***/ "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-inline {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtcGF5bWVudC9leHRyYS1wYXltZW50LXN1bW1hcnkvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFxleHRyYS1wYXltZW50XFxleHRyYS1wYXltZW50LXN1bW1hcnlcXGV4dHJhLXBheW1lbnQtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXh0cmEtcGF5bWVudC9leHRyYS1wYXltZW50LXN1bW1hcnkvZXh0cmEtcGF5bWVudC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXh0cmEtcGF5bWVudC1zdW1tYXJ5L2V4dHJhLXBheW1lbnQtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbiIsIi5idG4taW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExtraPaymentSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPaymentSummaryComponent", function() { return ExtraPaymentSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExtraPaymentSummaryComponent = class ExtraPaymentSummaryComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExtraPaymentSummaryComponent.prototype, "extraPayment", void 0);
ExtraPaymentSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-extra-payment-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./extra-payment-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./extra-payment-summary.component.scss */ "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExtraPaymentSummaryComponent);



/***/ }),

/***/ "./src/app/extra-payment/extra-payment.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/extra-payment/extra-payment.guard.ts ***!
  \******************************************************/
/*! exports provided: ExtraPaymentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPaymentGuard", function() { return ExtraPaymentGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ExtraPaymentGuard = class ExtraPaymentGuard {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    canActivate(next, state) {
        const { paymentId } = next.params;
        return this.httpService
            .getExtraPayment(paymentId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => !!response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(exists => {
            if (!exists) {
                this.router
                    .navigate(['/not-found'])
                    .then(console.log);
            }
        }));
    }
};
ExtraPaymentGuard.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ExtraPaymentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ExtraPaymentGuard);



/***/ }),

/***/ "./src/app/extra-payment/extra-payment.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/extra-payment/extra-payment.module.ts ***!
  \*******************************************************/
/*! exports provided: ExtraPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPaymentModule", function() { return ExtraPaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _extra_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extra-payment-routing.module */ "./src/app/extra-payment/extra-payment-routing.module.ts");
/* harmony import */ var _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra-payment/extra-payment.component */ "./src/app/extra-payment/extra-payment/extra-payment.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ep_credit_card_info_ep_credit_card_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ep-credit-card-info/ep-credit-card-info.component */ "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.ts");
/* harmony import */ var _ep_agreement_signature_ep_agreement_signature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ep-agreement-signature/ep-agreement-signature.component */ "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.ts");
/* harmony import */ var _extra_payment_summary_extra_payment_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extra-payment-summary/extra-payment-summary.component */ "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.ts");
/* harmony import */ var _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ep-thank-you/ep-thank-you.component */ "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let ExtraPaymentModule = class ExtraPaymentModule {
};
ExtraPaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _extra_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExtraPaymentRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
        ],
        declarations: [
            _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__["ExtraPaymentComponent"],
            _ep_credit_card_info_ep_credit_card_info_component__WEBPACK_IMPORTED_MODULE_5__["EpCreditCardInfoComponent"],
            _ep_agreement_signature_ep_agreement_signature_component__WEBPACK_IMPORTED_MODULE_6__["EpAgreementSignatureComponent"],
            _extra_payment_summary_extra_payment_summary_component__WEBPACK_IMPORTED_MODULE_7__["ExtraPaymentSummaryComponent"],
            _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_8__["EpThankYouComponent"],
        ]
    })
], ExtraPaymentModule);



/***/ }),

/***/ "./src/app/extra-payment/extra-payment/extra-payment.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/extra-payment/extra-payment/extra-payment.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXh0cmEtcGF5bWVudC9leHRyYS1wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/extra-payment/extra-payment/extra-payment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/extra-payment/extra-payment/extra-payment.component.ts ***!
  \************************************************************************/
/*! exports provided: ExtraPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPaymentComponent", function() { return ExtraPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _shared_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/dom */ "./src/app/shared/utils/dom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let ExtraPaymentComponent = class ExtraPaymentComponent {
    constructor(httpService, uiService, formBuilder, activatedRoute, router) {
        this.httpService = httpService;
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.validate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.processing = false;
        this.loading_text = 'Processing your payment....';
        this.listenToRouteParams();
    }
    ngOnInit() {
        this.listenToExtraPaymentDetails();
        this.initForm();
    }
    listenToRouteParams() {
        this.activatedRoute
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(params => {
            const { paymentId } = params;
            this.paymentId = Number(paymentId);
        });
    }
    initForm() {
        this.paymentForm = this.formBuilder
            .group({
            creditCardInfo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            paymentAgree: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    listenToExtraPaymentDetails() {
        this.httpService
            .extraPayment$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(response => {
            this.extraPayment = response;
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tokenResult;
            if (this.paymentForm.valid) {
                this.processing = true;
                if (this.squareCard) {
                    // @ts-ignore
                    tokenResult = yield this.squareCard.tokenize();
                }
                if ((!this.squareCard && this.paymentForm.valid) ||
                    (this.squareCard && tokenResult && tokenResult.status === 'OK')) {
                    const { creditCardInfo, paymentAgree } = this.paymentForm.value;
                    if (this.squareCard && tokenResult && tokenResult.token) {
                        creditCardInfo.squareToken = tokenResult.token;
                    }
                    this.httpService
                        .makeExtraPayment(Object.assign({}, creditCardInfo, paymentAgree, { extraPaymentId: this.paymentId }))
                        .subscribe(() => {
                        this.uiService.showSuccess({
                            title: 'Success',
                            message: 'Payment Successful',
                            removeCurrent: true
                        });
                        this.router
                            .navigate(['/payment/thanks'])
                            .catch(console.log);
                    }, (httpError) => {
                        const error = httpError.error;
                        this.uiService.showError({
                            message: error.title,
                            removeCurrent: true,
                        });
                        this.processing = false;
                    });
                }
                else {
                    this.processing = false;
                    this.uiService.showError({
                        title: 'Invalid data',
                        message: 'Missing credit card details',
                        removeCurrent: true
                    });
                }
            }
            else {
                this.processing = false;
                this.uiService.showError({
                    title: 'Invalid Form Fields',
                    message: 'Please verify all needed values are complete'
                });
                this.validate$.next();
                this.focusOnFirstInvalidField();
            }
        });
    }
    billingNameChanged(name) {
        this.billingName = name;
    }
    paymentInfoChanged(data) {
        this.paymentForm
            .patchValue({
            creditCardInfo: data
        });
    }
    paymentAgreeChanged(data) {
        this.paymentForm
            .patchValue({
            paymentAgree: data
        });
    }
    focusOnFirstInvalidField() {
        const invalidElementsList = this.formContent.nativeElement.getElementsByClassName('ng-invalid');
        Object(_shared_utils_dom__WEBPACK_IMPORTED_MODULE_7__["nodeListToArray"])(invalidElementsList)
            .some((element) => {
            return ['FORM', 'MAT-FORM-FIELD'].indexOf(element.tagName.toLocaleUpperCase()) === -1 ? (() => {
                element.focus();
                return true;
            })() : false;
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    inputSquareCard(squareCard) {
        this.squareCard = squareCard;
    }
};
ExtraPaymentComponent.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formContent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExtraPaymentComponent.prototype, "formContent", void 0);
ExtraPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-extra-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./extra-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment/extra-payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./extra-payment.component.scss */ "./src/app/extra-payment/extra-payment/extra-payment.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ExtraPaymentComponent);



/***/ }),

/***/ "./src/app/square/square.ts":
/*!**********************************!*\
  !*** ./src/app/square/square.ts ***!
  \**********************************/
/*! exports provided: initSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSquare", function() { return initSquare; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/script.service */ "./src/app/shared/services/script.service.ts");



function initSquare() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        return yield new _shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"]().load('square').then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const APPLICATION_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].square_application_id;
            const LOCATION_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].square_location_id;
            // @ts-ignore
            const paymentsSquare = Square.payments(APPLICATION_ID, LOCATION_ID);
            let cardPayment;
            try {
                const cardOptions = getCardOptions();
                cardPayment = yield paymentsSquare.card(cardOptions);
                yield cardPayment.attach('#card-container');
            }
            catch (e) {
                console.error('Initializing Card failed', e);
                return;
            }
            function getCardOptions() {
                return {
                    'style': {
                        'input': {
                            'color': '#383342',
                        },
                        '.input-container.is-focus': {
                            'borderWidth': '0'
                        },
                        // You can use media queries with valid selectors:
                        '@media screen and (max-width: 600px)': {
                            'input': {
                                'fontSize': '12px',
                            }
                        }
                    },
                };
            }
            return cardPayment;
        })).catch(error => console.log(error));
    });
}


/***/ })

}]);
//# sourceMappingURL=extra-payment-extra-payment-module-es2015.js.map
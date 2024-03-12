function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-payment-extra-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.html": function node_modulesRawLoaderDistCjsJsSrcAppExtraPaymentEpAgreementSignatureEpAgreementSignatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"text-uppercase txt-xs font-weight-bold px-5 py-3 mb-0\">\r\n  Payment Submission and Agreement\r\n</h3>\r\n\r\n<div class=\"box-group box-group--signature\">\r\n\r\n  <p>I, <strong class=\"txt-applicant-name\">{{billingName}}</strong>\r\n    <br/>\r\n    Confirm that I authorize the payment of the above amount according to the card issuer agreement. I also understand\r\n    tha the application fee is required and <u style=\"color:red\">non-refundable</u> regardless of the outcome of the\r\n    application.</p>\r\n\r\n  <div class=\"agreement-text\">\r\n    <p><b><u>PLEASE SCROLL DOWN AND READ THE FOLLOWING AGREEMENT IN FULL BEFORE SUBMITTING THE PAYMENT:</u></b></p>\r\n    <p>Tenant Evaluation understands the importance of keeping your information secure from\r\n      unauthorized access. All of your sensitive data is encrypted before being transmitted to/from our\r\n      servers. Tenant Evaluation is a Level 1 Compliant Organization. For details on Level 1 security\r\n      standards please <a href=\"https://www.pcisecuritystandards.org/\" target=\"_blank\" style=\"color:blue\">Click\r\n        Here.</a></p>\r\n    <p><b style=\"color: red\">* Any additional occupants 18 years old or older will have to make a separate\r\n      application*</b></p>\r\n    <p><u>FEES:</u></p>\r\n    <p>\r\n      The expected fees for your application are listed below. Actual fees may vary depending on additional information\r\n      obtained for your application. The fees have been established by the community to which you are applying. Should\r\n      you have any questions, please contact the community directly.\r\n      <u>PLEASE NOTE THE APPLICATION FEES ARE REQUIRED AND NON-REFUNDABLE REGARDLESS OF THE OUTCOME OF THE\r\n        APPLICATION.</u></p>\r\n\r\n    <p><b style=\"color: red\">I understand that I may be offered the Quick Pass option at the time of payment.\r\n      The Quick Pass Service will make your application a priority within Tenant Evaluation's processing system.\r\n      It does not guarantee priority on the association's approval/denial time-frame.\r\n      This Quick Pass is Non-Refundable and it is an optional feature.</b>\r\n    <p>I UNDERSTAND THAT THE APPLICATION FEE ALONG WITH THE QUICK PASS FEE IS THE TOTAL AMOUNT LIST ON THIS PAGE</p>\r\n    <p>** ADDITIONAL DEPOSITS/FEES MAY BE COLLECTED AFTER APPROVAL**</p>\r\n    <p>If the community requires a Credit Report, a Hard inquiry FICO Score will be processed.</p>\r\n\r\n    <p>IF YOU AGREE WITH ALL PROPERTY NOTES AND REQUIREMENTS LISTED ON THIS SITE, ENTER YOUR FULL LEGAL NAME IN THE BOX\r\n      BELOW.\r\n      YOU MAY ALSO SIGN WITH YOUR MOUSE BY DRAWING YOUR SIGNATURE. THEN CLICK PAY. IF YOU DO NOT AGREE TO ALL THE\r\n      PROPERTY NOTES AND NOTICES, SIMPLY CLOSE YOUR BROWSER TO EXIT FROM THIS APPLICATION.</p>\r\n    <p> I FURTHER STATE THIS FORM WAS SIGNED BY ME AND WAS NOT ORIGINATED WITH FRAUDULENT INTENT BY ME OR ANY OTHER\r\n      PERSON, AND THAT THE SIGNATURE BELOW IS MY OWN LEGALLY BINDING DIGITAL SIGNATURE.</p>\r\n    <p>You are hereby authorized to release any and all information requested with regards to verification of my bank\r\n      account(s), credit history, residential history, criminal record history, employment verification and character\r\n      references to Tenant Evaluation LLC. This information is to be used for my/our credit report for my/our\r\n      Application for Occupancy.</p>\r\n\r\n    <p>I/We hereby waive any privileges I/We may have with respect to the said information in reference to its release\r\n      to the aforesaid party. Information obtained for this report is to be released to Tenant Evaluation LLC, Property\r\n      Manager, Board of Directors and The Landlord for their exclusive use only.</p>\r\n\r\n    <p>PLEASE INCLUDE COPY OF DRIVER’S LICENSE OR PASSPORT TO CONFIRM IDENTITY.</p>\r\n\r\n    <p>Please notify your Landlord(s), Employer(s), and Character References that we will be contacting them to obtain a\r\n      reference pursuant to your application.</p>\r\n\r\n    <p>I/We further state the Authorization Form were signed by me/us and was not originated with fraudulent intent by\r\n      me/ us or any other person, and that the signature(s) below are my/our own proper signature.</p>\r\n\r\n    <p>I/We certify under penalty of perjury that the foregoing is true and correct.</p>\r\n\r\n    <p>I/We further understand that any refundable monies paid through Tenant Evaluation in the form of deposits, extra\r\n      fees, etc. will be refunded by the Association directly.</p>\r\n\r\n    <p>Please allow 14 days from the date below to complete the application. Please be aware that the associations have their own approval process which will start once the report has been released and the time frame may vary per association.</p>\r\n\r\n    <p>If after 30 days from the date you created the application Tenant Evaluation has not received all the required documentation, your application will be considered abandoned and the incomplete application will be closed and sent to the community. The application can only be re-opened within 30 days of being abandoned with written request from the the applicant.</p>\r\n\r\n    <p>If you or the co-applicant have falsified, deliberately mislead or omitted to mention any information on your\r\n      application, you may not be approved for a purchase, lease and/or occupancy.</p>\r\n  </div>\r\n\r\n  <form class=\"signature\" [formGroup]=\"signatureForm\">\r\n\r\n\r\n\r\n    <h4 class=\"signature__title\">Review your signature</h4>\r\n\r\n    <div class=\"signature__group\">\r\n      <div class=\"signature-input\">\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               placeholder=\"Type your name here or draw below\"\r\n               formControlName=\"signatureText\">\r\n      </div>\r\n\r\n      <div class=\"signature-canvas\">\r\n\r\n        <div class=\"signature-wrapper\">\r\n          <canvas id=\"signature-pad\" #signaturePad></canvas>\r\n        </div>\r\n\r\n        <div class=\"signature-text\">\r\n          <canvas id=\"signature-text\" #signatureText></canvas>\r\n\r\n        </div>\r\n      </div>\r\n      <input class=\"custom-control-input\"\r\n             type=\"hidden\"\r\n             formControlName=\"noticeSignature\"\r\n      >\r\n      <div class=\"invalid-feedback\">{{getError('noticeSignature')}}</div>\r\n      <br>\r\n      <p>Type your or draw your name above</p>\r\n    </div>\r\n\r\n    <button class=\"tev-btn mb-5\"\r\n            type=\"button\" (click)=\"clearSignature()\">Clear\r\n    </button>\r\n\r\n    <div class=\"custom-checkbox\">\r\n      <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\r\n                    type=\"checkbox\"\r\n                    id=\"agree\"\r\n                    formControlName=\"agreeAndAuthorize\"\r\n      >I agree and authorize this charge\r\n      </mat-checkbox>\r\n      <div class=\"invalid-feedback\">{{getError('agreeAndAuthorize')}}</div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.html": function node_modulesRawLoaderDistCjsJsSrcAppExtraPaymentEpCreditCardInfoEpCreditCardInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-group box-group--connect\">\r\n\r\n  <form class=\"row\" [formGroup]=\"creditCardForm\">\r\n\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <h3 class=\"text-uppercase txt-xs no-bg mt-4\">\r\n        Billing Address\r\n      </h3>\r\n    </div><!-- ./col -->\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentBillingAddress\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Name (as it appears on your card)\"\r\n                 formControlName=\"billingName\"\r\n          >\r\n          <mat-error>{{getError('billingName')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div class=\"col-sm-12 col-md-12 col-lg-6\">\r\n      <div class=\"custom-checkbox\">\r\n        <mat-checkbox class=\"mat-checkbox--rounded\"\r\n                      type=\"checkbox\"\r\n                      id=\"paymentNotUs\"\r\n                      formControlName=\"internationalBillingAddress\"\r\n        >Billing address is not in the United States\r\n        </mat-checkbox>\r\n        <div class=\"invalid-feedback\">{{getError('internationalBillingAddress')}}</div>\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentStreet\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Street\"\r\n                 formControlName=\"billingStreet1\"\r\n                 tevAsciiOnly\r\n          >\r\n          <mat-error>{{getError('billingStreet1')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentStreet2\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Street 2\"\r\n                 formControlName=\"billingStreet2\"\r\n                 tevAsciiOnly\r\n          >\r\n          <mat-error>{{getError('billingStreet2')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentCity\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"City\"\r\n                 formControlName=\"billingCity\"\r\n                 tevAsciiOnly\r\n          >\r\n          <mat-error>{{getError('billingCity')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\r\n      <div class=\"select-group\">\r\n\r\n        <mat-form-field>\r\n\r\n          <mat-select [formControlName]=\"'billingState'\" placeholder=\"State\">\r\n            <mat-option *ngFor=\"let state of states;\" [value]=\"state.abbreviation\">{{state.name}}</mat-option>\r\n          </mat-select>\r\n          <mat-error>{{getError('billingState')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentZipCode\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Zip Code\"\r\n                 formControlName=\"billingZipcode\"\r\n                 tevAsciiOnly\r\n          >\r\n          <mat-error>{{getError('billingZipcode')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <!-- @todo DONT ASK FOR / -->\r\n\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <h4 class=\"box-group__title\">\r\n        Card Information\r\n      </h4>\r\n    </div><!-- ./col -->\r\n\r\n    <div *ngIf=\"!showSquare\" class=\"col-sm-12 col-md-6 col-lg-6\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentCreditCard\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Credit Card Number\"\r\n                 formControlName=\"cardNumber\"\r\n                 [maxlength]=\"16\"\r\n                 tevNumbersOnly\r\n          >\r\n          <mat-error>{{getError('cardNumber')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div *ngIf=\"!showSquare\" class=\"col-7 col-sm-12 col-md-6 col-lg-6\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentExpiration\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Expiration (MM/YY)\"\r\n                 formControlName=\"cardExp\"\r\n                 maxlength=\"5\"\r\n                 tevMonthYear (onMonthYearChanged)=onMonthYearChanged($event)\r\n\r\n          >\r\n          <mat-error>{{getError('cardExp')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div  *ngIf=\"!showSquare\"class=\"col-5 col-sm-12 col-md-6 col-lg-6\">\r\n      <div class=\"form-label-group\">\r\n\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 id=\"paymentCVV\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"CVV\"\r\n                 maxlength=\"4\"\r\n                 formControlName=\"cardCvv2\"\r\n                 tevNumbersOnly\r\n          >\r\n          <mat-error>{{getError('cardCvv2')}}</mat-error>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n    </div><!-- ./col -->\r\n\r\n    <div *ngIf=\"!showSquare\" class=\"col-12\">\r\n      <div class=\"payment-options mt-4\">\r\n        <ul>\r\n          <li>\r\n            <img src=\"./assets/icon-visa.svg\" alt=\"visa\">\r\n          </li>\r\n          <li>\r\n            <img src=\"./assets/icon-mastercard.svg\" alt=\"mastercard\">\r\n          </li>\r\n          <li>\r\n            <img src=\"./assets/icon-discover.svg\" alt=\"discover\">\r\n          </li>\r\n        </ul>\r\n      </div><!-- ./payment-options -->\r\n    </div><!-- ./col -->\r\n\r\n\r\n\r\n  </form><!-- ./row -->\r\n  <div *ngIf=\"showSquare\">\r\n    <mat-progress-spinner *ngIf=\"showLoading\" mode=\"indeterminate\"></mat-progress-spinner>\r\n    <div id=\"card-container\"></div>\r\n  </div>\r\n\r\n\r\n</div><!-- ./py-4 px-5 -->\r\n\r\n<div class=\"box-group box-group--total\">\r\n  <h4>\r\n    Total Payment Now\r\n  </h4>\r\n  <h4>\r\n    {{extraPayment.amount | currency}}\r\n  </h4>\r\n</div><!-- ./box-group -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-thank-you/ep-thank-you.component.html": function node_modulesRawLoaderDistCjsJsSrcAppExtraPaymentEpThankYouEpThankYouComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-white begin-enter-code\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-6\">\r\n        <img src=\"/assets/logo-lets-begin.svg\" alt=\"Let's Begin\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main-content begin-community-selection lower-content\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <section class=\"content-box\">\r\n          <article>\r\n            <div class=\"main-icon-holder xs-max\"></div>\r\n            <h1 class=\"txt-hero\">Thank you. Payment Received</h1>\r\n          </article>\r\n\r\n        </section>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.html": function node_modulesRawLoaderDistCjsJsSrcAppExtraPaymentExtraPaymentSummaryExtraPaymentSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"txt-xs font-weight-bold px-3 py-2 mb-0\">Payment Details</h3>\r\n\r\n<div class=\"py-4 px-5\">\r\n\r\n  <article>\r\n\r\n    <div class=\"payment-table\">\r\n\r\n      <div class=\"payment-table__row payment-table__row--head\">\r\n        <div class=\"payment-table__col payment-table__col--item\">\r\n          <h3 class=\"txt-all-caps txt-md column-title\">Reason</h3>\r\n        </div>\r\n        <div class=\"payment-table__col payment-table__col--price\">\r\n          <h3 class=\"txt-all-caps txt-md column-title\">Amount</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"payment-table__row\">\r\n        <ul class=\"payment-table__col payment-table__col--item\">\r\n          <li class=\"txt-xs\">{{extraPayment.reason}}</li>\r\n        </ul>\r\n        <ul class=\"payment-table__col payment-table__col--price\">\r\n          <li class=\"txt-xs\">{{extraPayment.amount | currency}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"payment-table__row payment-table__row--total\">\r\n      <div class=\"payment-table__col payment-table__col--item\">\r\n        <h3>Total Additional fee</h3>\r\n        <span class=\"payment-table__warn\">This charge will be collected immediately *</span>\r\n      </div>\r\n      <div class=\"payment-table__col payment-table__col--price\">\r\n        <h3>{{extraPayment.amount | currency}}\r\n\r\n        </h3>\r\n      </div>\r\n    </div>\r\n\r\n  </article>\r\n</div><!-- ./py-4 px-5 -->\r\n\r\n<div class=\"box-group box-group--total\">\r\n  <h4>\r\n    Total Payment Now\r\n  </h4>\r\n  <h4>\r\n    {{extraPayment.amount | currency}}\r\n  </h4>\r\n</div><!-- ./box-group -->\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment/extra-payment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppExtraPaymentExtraPaymentExtraPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid main-content profile bg-dark-\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <section class=\"content-box\">\r\n        <article>\r\n\r\n\r\n          <div class=\"back-wrapper d-flex\">\r\n            <div class=\"main-icon-holder ml-auto\">\r\n            </div>\r\n          </div>\r\n        </article>\r\n      </section><!-- ./content-box -->\r\n    </div><!-- ./col -->\r\n  </div><!-- ./row -->\r\n</div><!-- ./container-fluid -->\r\n\r\n<div class=\"container-fluid main-content profile accordion-wrapper\">\r\n\r\n  <tev-loader *ngIf=\"processing\" [loading_text]=\"loading_text\" ></tev-loader>\r\n\r\n  <div class=\"row mx-0 justify-content-center\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-11 col-xl-8 px-0\">\r\n      <div class=\"accordion txt-xs\">\r\n        <div class=\"form-personal-info floating-labels form-bg-light\">\r\n\r\n\r\n          <div class=\"tab-content\" role=\"tablist\">\r\n\r\n            <div class=\"card tab-pane fade show active\" #formContent>\r\n\r\n              <div id=\"collapseSix\" class=\"collapse show\" aria-labelledby=\"headingSix\" data-parent=\"#accordion\">\r\n\r\n                <div class=\"card-body txt-purple\">\r\n\r\n                  <tev-extra-payment-summary [extraPayment]=\"extraPayment\"></tev-extra-payment-summary>\r\n\r\n                  <tev-ep-credit-card-info [validate]=\"validate$\"\r\n                                           [extraPayment]=\"extraPayment\"\r\n                                           (formChanged)=\"paymentInfoChanged($event)\"\r\n                                           (nameChanged)=\"billingNameChanged($event)\"\r\n                                           (squareCard)=\"inputSquareCard($event)\"></tev-ep-credit-card-info>\r\n\r\n                  <tev-ep-agreement-signature [validate]=\"validate$\"\r\n                                              (formChanged)=\"paymentAgreeChanged($event)\"\r\n                                              [billingName]=\"billingName\"></tev-ep-agreement-signature>\r\n\r\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 d-flex\">\r\n                    <button class=\"btn btn-lg btn-primary btn-block mb-4 btn-submit mb-3 mt-5\"\r\n                            type=\"button\"\r\n                            [disabled]=\"processing\"\r\n                            (click)=\"submit()\">Pay {{extraPayment.amount | currency}}</button>\r\n                  </div><!-- ./col -->\r\n\r\n                </div><!-- ./card-body -->\r\n\r\n              </div><!-- ./collapse -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.scss": function srcAppExtraPaymentEpAgreementSignatureEpAgreementSignatureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".agreement-text {\n  max-height: 15em;\n  overflow-y: auto;\n  padding: 1em;\n  margin: 1em 0;\n  border: 1px solid #f1f1f2;\n  background-color: #F5F5F5;\n}\n\n.signature-canvas {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 200px;\n}\n\n.signature .signature-input {\n  background-color: #f1f1f2;\n  color: #69616d;\n}\n\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #d0d1d3;\n  color: #77747e;\n  min-height: 200px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.signature .signature-text {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtcGF5bWVudC9lcC1hZ3JlZW1lbnQtc2lnbmF0dXJlL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGV4dHJhLXBheW1lbnRcXGVwLWFncmVlbWVudC1zaWduYXR1cmVcXGVwLWFncmVlbWVudC1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXAtYWdyZWVtZW50LXNpZ25hdHVyZS9lcC1hZ3JlZW1lbnQtc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUU7RUFDRSx5QkEzQlM7RUE0QlQsY0EzQlE7RUE0QlIsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNBSjs7QURFRTtFQUNFLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXAtYWdyZWVtZW50LXNpZ25hdHVyZS9lcC1hZ3JlZW1lbnQtc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWdyYXk6ICNkMGQxZDM7XHJcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XHJcblxyXG4uYWdyZWVtZW50LXRleHQge1xyXG4gIG1heC1oZWlnaHQ6IDE1ZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuLnNpZ25hdHVyZS1jYW52YXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XHJcbn1cclxuI3NpZ25hdHVyZS1wYWQsICNzaWduYXR1cmUtdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uc2lnbmF0dXJlIHtcclxuICAuc2lnbmF0dXJlLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjI7XHJcbiAgICBjb2xvcjogIzY5NjE2ZDtcclxuICB9XHJcbiAgLnNpZ25hdHVyZS13cmFwcGVyLCAuc2lnbmF0dXJlLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnNpZ25hdHVyZS10ZXh0IHtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDE1ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLnNpZ25hdHVyZS1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNGU2O1xufVxuXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zaWduYXR1cmUgLnNpZ25hdHVyZS1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjI7XG4gIGNvbG9yOiAjNjk2MTZkO1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUgLnNpZ25hdHVyZS10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDFkMztcbiAgY29sb3I6ICM3Nzc0N2U7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIHotaW5kZXg6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.ts": function srcAppExtraPaymentEpAgreementSignatureEpAgreementSignatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpAgreementSignatureComponent", function () {
      return EpAgreementSignatureComponent;
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
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var signature_pad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! signature_pad */
    "./node_modules/signature_pad/dist/signature_pad.js");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");

    var EpAgreementSignatureComponent = /*#__PURE__*/function () {
      function EpAgreementSignatureComponent(formBuilder, uiService) {
        _classCallCheck(this, EpAgreementSignatureComponent);

        this.formBuilder = formBuilder;
        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.billingName$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.viewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listenToBillingNameChange();
      }

      _createClass(EpAgreementSignatureComponent, [{
        key: "validate",
        set: function set(validate$) {
          var _this = this;

          validate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this.markControlsAsTouched();
          });
        }
      }, {
        key: "billingName",
        get: function get() {
          return this._billingName;
        },
        set: function set(billingName) {
          this._billingName = billingName;
          this.billingName$.next(billingName);
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.setCanvasSize();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.listenToFormChanges();
          this.formReady$.next();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.signatureForm = this.formBuilder.group({
            agreeAndAuthorize: [false, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].agreeValidator()],
            noticeSignature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            signatureText: ['']
          });
        }
      }, {
        key: "listenToFormChanges",
        value: function listenToFormChanges() {
          var _this2 = this;

          this.signatureForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (status) {
            if ('VALID' === status) {
              var noticeSignature = _this2.signatureForm.value.noticeSignature;

              _this2.formChanged.emit({
                signature: noticeSignature
              });
            } else {
              _this2.formChanged.emit(null);
            }
          });
          this.signatureForm.controls['signatureText'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (value) {
            var dataUrl = null;

            if (value) {
              var canvasContext = _this2.signatureTextCanvas.getContext('2d');

              canvasContext.clearRect(0, 0, _this2.signatureTextCanvas.width, _this2.signatureTextCanvas.height);
              canvasContext.font = 'italic 60px \'Herr Von Muellerhoff\'';
              canvasContext.fillText(value, 10, 110);
              dataUrl = _this2.signatureTextCanvas.toDataURL();

              _this2.signaturePad.clear();

              _this2.signaturePad.fromDataURL(dataUrl);
            }

            _this2.signatureForm.patchValue({
              noticeSignature: dataUrl
            });
          });
          this.signatureForm.updateValueAndValidity();
        }
      }, {
        key: "listenToBillingNameChange",
        value: function listenToBillingNameChange() {
          var _this3 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.formReady$, this.billingName$, this.viewInit$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                formReady = _ref2[0],
                name = _ref2[1];

            _this3.signatureForm.patchValue({
              signatureText: name
            });
          });
        }
      }, {
        key: "markControlsAsTouched",
        value: function markControlsAsTouched() {
          this.uiService.markControlsAsTouched(this.signatureForm);
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

          if (this.signatureForm && this.signaturePad) {
            this.signatureForm.controls['signatureText'].updateValueAndValidity();
          }
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          var errors = this.signatureForm.controls[controlName].errors;
          return this.uiService.getControlError(errors);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next();
          this.destroyed$.complete();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initSignature();
          this.viewInit$.next();
        }
      }, {
        key: "clearSignature",
        value: function clearSignature() {
          this.signaturePad.clear();
          this.signatureForm.patchValue({
            noticeSignature: null
          });
        }
      }, {
        key: "initSignature",
        value: function initSignature() {
          var _this4 = this;

          this.signatureCanvas = this.signaturePadRef.nativeElement;
          this.signatureTextCanvas = this.signatureTextRef.nativeElement;
          this.setCanvasSize();
          this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_6__["default"](this.signatureCanvas);

          this.signaturePad.onEnd = function () {
            var signature = _this4.signaturePad.toDataURL('image/png');

            _this4.signatureForm.patchValue({
              noticeSignature: signature
            });
          };
        }
      }]);

      return EpAgreementSignatureComponent;
    }();

    EpAgreementSignatureComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signaturePad', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EpAgreementSignatureComponent.prototype, "signaturePadRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureText', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EpAgreementSignatureComponent.prototype, "signatureTextRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]])], EpAgreementSignatureComponent.prototype, "validate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], EpAgreementSignatureComponent.prototype, "billingName", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], EpAgreementSignatureComponent.prototype, "formChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], EpAgreementSignatureComponent.prototype, "onResize", null);
    EpAgreementSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-ep-agreement-signature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ep-agreement-signature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ep-agreement-signature.component.scss */
      "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])], EpAgreementSignatureComponent);
    /***/
  },

  /***/
  "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.scss": function srcAppExtraPaymentEpCreditCardInfoEpCreditCardInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXAtY3JlZGl0LWNhcmQtaW5mby9lcC1jcmVkaXQtY2FyZC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.ts": function srcAppExtraPaymentEpCreditCardInfoEpCreditCardInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpCreditCardInfoComponent", function () {
      return EpCreditCardInfoComponent;
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
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var _shared_definitions_forms_profile_form_payment_details_payment_details_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/definitions/forms/profile-form/payment-details/payment-details.interface */
    "./src/app/shared/definitions/forms/profile-form/payment-details/payment-details.interface.ts");
    /* harmony import */


    var _shared_definitions_constants_us_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/definitions/constants/us_states */
    "./src/app/shared/definitions/constants/us_states.ts");
    /* harmony import */


    var _square_square__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../square/square */
    "./src/app/square/square.ts");

    var EpCreditCardInfoComponent = /*#__PURE__*/function () {
      function EpCreditCardInfoComponent(uiService, formBuilder) {
        _classCallCheck(this, EpCreditCardInfoComponent);

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

      _createClass(EpCreditCardInfoComponent, [{
        key: "validate",
        set: function set(validate$) {
          var _this5 = this;

          validate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this5.markControlsAsTouched();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showLoading = true;
          this.showSquare = this.extraPayment.paymentProcessor.startsWith('Square');
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.creditCardForm = this.formBuilder.group({
                      billingName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                      billingStreet1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                      billingStreet2: ['', [_shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                      billingCity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                      billingState: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].asciiValidator()]],
                      billingZipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].usaZipCode()]],
                      cardExp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].validCreditCardExpiration()]],
                      cardCvv2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].validCreditCardCode()]],
                      cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].validCreditCard()]],
                      internationalBillingAddress: [false]
                    });

                    if (!this.showSquare) {
                      _context.next = 5;
                      break;
                    }

                    this.disableCardControls();
                    _context.next = 5;
                    return this.initSquare();

                  case 5:
                    this.listenToFormChanges();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "listenToFormChanges",
        value: function listenToFormChanges() {
          var _this6 = this;

          var _this$creditCardForm$ = this.creditCardForm.controls,
              internationalBillingAddress = _this$creditCardForm$.internationalBillingAddress,
              billingName = _this$creditCardForm$.billingName;
          this.creditCardForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (status) {
            if ('VALID' === status) {
              _this6.formChanged.emit(_this6.creditCardForm.value);
            } else {
              _this6.formChanged.emit(null);
            }
          });
          internationalBillingAddress.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (value) {
            _this6.addressNotInUsa = value;

            if (value) {
              _this6.disableAddressControls();
            } else {
              _this6.enableAddressControls();
            }

            _this6.creditCardForm.updateValueAndValidity();
          });
          billingName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (value) {
            _this6.nameChanged.emit(value);
          });
        }
      }, {
        key: "disableAddressControls",
        value: function disableAddressControls() {
          var _this7 = this;

          Object.keys(this.defaultAddress).forEach(function (key) {
            _this7.creditCardForm.controls[key].setValue(_this7.defaultAddress[key]);
          });
        }
      }, {
        key: "enableAddressControls",
        value: function enableAddressControls() {
          var _this8 = this;

          Object.keys(this.defaultAddress).forEach(function (key) {
            _this8.creditCardForm.controls[key].setValue('');
          });
        }
      }, {
        key: "markControlsAsTouched",
        value: function markControlsAsTouched() {
          this.uiService.markControlsAsTouched(this.creditCardForm);
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          var errors = this.creditCardForm.controls[controlName].errors;
          return this.uiService.getControlError(errors);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next();
          this.destroyed$.complete();
        }
      }, {
        key: "disableCardControls",
        value: function disableCardControls() {
          var _this9 = this;

          ['cardCvv2', 'cardExp', 'cardNumber'].forEach(function (key) {
            _this9.creditCardForm.controls[key].setValue('');

            _this9.creditCardForm.controls[key].disable();

            _this9.creditCardForm.controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "initSquare",
        value: function initSquare() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(_square_square__WEBPACK_IMPORTED_MODULE_9__["initSquare"])();

                  case 2:
                    this.cardPayment = _context2.sent;
                    this.squareCard.emit(this.cardPayment);
                    this.showLoading = false;

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onMonthYearChanged",
        value: function onMonthYearChanged(value) {
          if (value) {
            this.creditCardForm.controls['cardExp'].setValue(value);
          }
        }
      }]);

      return EpCreditCardInfoComponent;
    }();

    EpCreditCardInfoComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]])], EpCreditCardInfoComponent.prototype, "validate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EpCreditCardInfoComponent.prototype, "extraPayment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], EpCreditCardInfoComponent.prototype, "formChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], EpCreditCardInfoComponent.prototype, "nameChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], EpCreditCardInfoComponent.prototype, "squareCard", void 0);
    EpCreditCardInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-ep-credit-card-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ep-credit-card-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ep-credit-card-info.component.scss */
      "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], EpCreditCardInfoComponent);
    /***/
  },

  /***/
  "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.scss": function srcAppExtraPaymentEpThankYouEpThankYouComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXAtdGhhbmsteW91L2VwLXRoYW5rLXlvdS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts": function srcAppExtraPaymentEpThankYouEpThankYouComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpThankYouComponent", function () {
      return EpThankYouComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EpThankYouComponent = /*#__PURE__*/function () {
      function EpThankYouComponent() {
        _classCallCheck(this, EpThankYouComponent);
      }

      _createClass(EpThankYouComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EpThankYouComponent;
    }();

    EpThankYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-ep-thank-you',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ep-thank-you.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/ep-thank-you/ep-thank-you.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ep-thank-you.component.scss */
      "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EpThankYouComponent);
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment-routing.module.ts": function srcAppExtraPaymentExtraPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraPaymentRoutingModule", function () {
      return ExtraPaymentRoutingModule;
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


    var _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./extra-payment/extra-payment.component */
    "./src/app/extra-payment/extra-payment/extra-payment.component.ts");
    /* harmony import */


    var _extra_payment_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./extra-payment.guard */
    "./src/app/extra-payment/extra-payment.guard.ts");
    /* harmony import */


    var _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ep-thank-you/ep-thank-you.component */
    "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts");

    var routes = [{
      path: 'thanks',
      component: _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["EpThankYouComponent"]
    }, {
      path: ':paymentId',
      component: _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__["ExtraPaymentComponent"],
      canActivate: [_extra_payment_guard__WEBPACK_IMPORTED_MODULE_4__["ExtraPaymentGuard"]]
    }];

    var ExtraPaymentRoutingModule = function ExtraPaymentRoutingModule() {
      _classCallCheck(this, ExtraPaymentRoutingModule);
    };

    ExtraPaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_extra_payment_guard__WEBPACK_IMPORTED_MODULE_4__["ExtraPaymentGuard"]]
    })], ExtraPaymentRoutingModule);
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.scss": function srcAppExtraPaymentExtraPaymentSummaryExtraPaymentSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-inline {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmEtcGF5bWVudC9leHRyYS1wYXltZW50LXN1bW1hcnkvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZXh0cmEtcGF5bWVudFxcZXh0cmEtcGF5bWVudC1zdW1tYXJ5XFxleHRyYS1wYXltZW50LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXh0cmEtcGF5bWVudC1zdW1tYXJ5L2V4dHJhLXBheW1lbnQtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9leHRyYS1wYXltZW50L2V4dHJhLXBheW1lbnQtc3VtbWFyeS9leHRyYS1wYXltZW50LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWlubGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcbiIsIi5idG4taW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.ts": function srcAppExtraPaymentExtraPaymentSummaryExtraPaymentSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraPaymentSummaryComponent", function () {
      return ExtraPaymentSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExtraPaymentSummaryComponent = /*#__PURE__*/function () {
      function ExtraPaymentSummaryComponent() {
        _classCallCheck(this, ExtraPaymentSummaryComponent);
      }

      _createClass(ExtraPaymentSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExtraPaymentSummaryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExtraPaymentSummaryComponent.prototype, "extraPayment", void 0);
    ExtraPaymentSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-extra-payment-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./extra-payment-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./extra-payment-summary.component.scss */
      "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExtraPaymentSummaryComponent);
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment.guard.ts": function srcAppExtraPaymentExtraPaymentGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraPaymentGuard", function () {
      return ExtraPaymentGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ExtraPaymentGuard = /*#__PURE__*/function () {
      function ExtraPaymentGuard(httpService, router) {
        _classCallCheck(this, ExtraPaymentGuard);

        this.httpService = httpService;
        this.router = router;
      }

      _createClass(ExtraPaymentGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this10 = this;

          var paymentId = next.params.paymentId;
          return this.httpService.getExtraPayment(paymentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            return !!response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (exists) {
            if (!exists) {
              _this10.router.navigate(['/not-found']).then(console.log);
            }
          }));
        }
      }]);

      return ExtraPaymentGuard;
    }();

    ExtraPaymentGuard.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ExtraPaymentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ExtraPaymentGuard);
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment.module.ts": function srcAppExtraPaymentExtraPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraPaymentModule", function () {
      return ExtraPaymentModule;
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


    var _extra_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./extra-payment-routing.module */
    "./src/app/extra-payment/extra-payment-routing.module.ts");
    /* harmony import */


    var _extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./extra-payment/extra-payment.component */
    "./src/app/extra-payment/extra-payment/extra-payment.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ep_credit_card_info_ep_credit_card_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ep-credit-card-info/ep-credit-card-info.component */
    "./src/app/extra-payment/ep-credit-card-info/ep-credit-card-info.component.ts");
    /* harmony import */


    var _ep_agreement_signature_ep_agreement_signature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ep-agreement-signature/ep-agreement-signature.component */
    "./src/app/extra-payment/ep-agreement-signature/ep-agreement-signature.component.ts");
    /* harmony import */


    var _extra_payment_summary_extra_payment_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./extra-payment-summary/extra-payment-summary.component */
    "./src/app/extra-payment/extra-payment-summary/extra-payment-summary.component.ts");
    /* harmony import */


    var _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ep-thank-you/ep-thank-you.component */
    "./src/app/extra-payment/ep-thank-you/ep-thank-you.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ExtraPaymentModule = function ExtraPaymentModule() {
      _classCallCheck(this, ExtraPaymentModule);
    };

    ExtraPaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _extra_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExtraPaymentRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]],
      declarations: [_extra_payment_extra_payment_component__WEBPACK_IMPORTED_MODULE_3__["ExtraPaymentComponent"], _ep_credit_card_info_ep_credit_card_info_component__WEBPACK_IMPORTED_MODULE_5__["EpCreditCardInfoComponent"], _ep_agreement_signature_ep_agreement_signature_component__WEBPACK_IMPORTED_MODULE_6__["EpAgreementSignatureComponent"], _extra_payment_summary_extra_payment_summary_component__WEBPACK_IMPORTED_MODULE_7__["ExtraPaymentSummaryComponent"], _ep_thank_you_ep_thank_you_component__WEBPACK_IMPORTED_MODULE_8__["EpThankYouComponent"]]
    })], ExtraPaymentModule);
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment/extra-payment.component.scss": function srcAppExtraPaymentExtraPaymentExtraPaymentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLXBheW1lbnQvZXh0cmEtcGF5bWVudC9leHRyYS1wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/extra-payment/extra-payment/extra-payment.component.ts": function srcAppExtraPaymentExtraPaymentExtraPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraPaymentComponent", function () {
      return ExtraPaymentComponent;
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


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _shared_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/utils/dom */
    "./src/app/shared/utils/dom.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ExtraPaymentComponent = /*#__PURE__*/function () {
      function ExtraPaymentComponent(httpService, uiService, formBuilder, activatedRoute, router) {
        _classCallCheck(this, ExtraPaymentComponent);

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

      _createClass(ExtraPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listenToExtraPaymentDetails();
          this.initForm();
        }
      }, {
        key: "listenToRouteParams",
        value: function listenToRouteParams() {
          var _this11 = this;

          this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(function (params) {
            var paymentId = params.paymentId;
            _this11.paymentId = Number(paymentId);
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.paymentForm = this.formBuilder.group({
            creditCardInfo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            paymentAgree: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }
      }, {
        key: "listenToExtraPaymentDetails",
        value: function listenToExtraPaymentDetails() {
          var _this12 = this;

          this.httpService.extraPayment$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(function (response) {
            _this12.extraPayment = response;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this13 = this;

            var tokenResult, _this$paymentForm$val, creditCardInfo, paymentAgree;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.paymentForm.valid) {
                      _context3.next = 9;
                      break;
                    }

                    this.processing = true;

                    if (!this.squareCard) {
                      _context3.next = 6;
                      break;
                    }

                    _context3.next = 5;
                    return this.squareCard.tokenize();

                  case 5:
                    tokenResult = _context3.sent;

                  case 6:
                    if (!this.squareCard && this.paymentForm.valid || this.squareCard && tokenResult && tokenResult.status === 'OK') {
                      _this$paymentForm$val = this.paymentForm.value, creditCardInfo = _this$paymentForm$val.creditCardInfo, paymentAgree = _this$paymentForm$val.paymentAgree;

                      if (this.squareCard && tokenResult && tokenResult.token) {
                        creditCardInfo.squareToken = tokenResult.token;
                      }

                      this.httpService.makeExtraPayment(Object.assign({}, creditCardInfo, paymentAgree, {
                        extraPaymentId: this.paymentId
                      })).subscribe(function () {
                        _this13.uiService.showSuccess({
                          title: 'Success',
                          message: 'Payment Successful',
                          removeCurrent: true
                        });

                        _this13.router.navigate(['/payment/thanks'])["catch"](console.log);
                      }, function (httpError) {
                        var error = httpError.error;

                        _this13.uiService.showError({
                          message: error.title,
                          removeCurrent: true
                        });

                        _this13.processing = false;
                      });
                    } else {
                      this.processing = false;
                      this.uiService.showError({
                        title: 'Invalid data',
                        message: 'Missing credit card details',
                        removeCurrent: true
                      });
                    }

                    _context3.next = 13;
                    break;

                  case 9:
                    this.processing = false;
                    this.uiService.showError({
                      title: 'Invalid Form Fields',
                      message: 'Please verify all needed values are complete'
                    });
                    this.validate$.next();
                    this.focusOnFirstInvalidField();

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "billingNameChanged",
        value: function billingNameChanged(name) {
          this.billingName = name;
        }
      }, {
        key: "paymentInfoChanged",
        value: function paymentInfoChanged(data) {
          this.paymentForm.patchValue({
            creditCardInfo: data
          });
        }
      }, {
        key: "paymentAgreeChanged",
        value: function paymentAgreeChanged(data) {
          this.paymentForm.patchValue({
            paymentAgree: data
          });
        }
      }, {
        key: "focusOnFirstInvalidField",
        value: function focusOnFirstInvalidField() {
          var invalidElementsList = this.formContent.nativeElement.getElementsByClassName('ng-invalid');
          Object(_shared_utils_dom__WEBPACK_IMPORTED_MODULE_7__["nodeListToArray"])(invalidElementsList).some(function (element) {
            return ['FORM', 'MAT-FORM-FIELD'].indexOf(element.tagName.toLocaleUpperCase()) === -1 ? function () {
              element.focus();
              return true;
            }() : false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next();
          this.destroyed$.complete();
        }
      }, {
        key: "inputSquareCard",
        value: function inputSquareCard(squareCard) {
          this.squareCard = squareCard;
        }
      }]);

      return ExtraPaymentComponent;
    }();

    ExtraPaymentComponent.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formContent', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ExtraPaymentComponent.prototype, "formContent", void 0);
    ExtraPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-extra-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./extra-payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/extra-payment/extra-payment/extra-payment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./extra-payment.component.scss */
      "./src/app/extra-payment/extra-payment/extra-payment.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], ExtraPaymentComponent);
    /***/
  },

  /***/
  "./src/app/square/square.ts": function srcAppSquareSquareTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initSquare", function () {
      return initSquare;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/script.service */
    "./src/app/shared/services/script.service.ts");

    function initSquare() {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this14 = this;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return new _shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"]().load('square').then(function () {
                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    var APPLICATION_ID, LOCATION_ID, paymentsSquare, cardPayment, cardOptions, getCardOptions;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            getCardOptions = function _getCardOptions() {
                              return {
                                'style': {
                                  'input': {
                                    'color': '#383342'
                                  },
                                  '.input-container.is-focus': {
                                    'borderWidth': '0'
                                  },
                                  // You can use media queries with valid selectors:
                                  '@media screen and (max-width: 600px)': {
                                    'input': {
                                      'fontSize': '12px'
                                    }
                                  }
                                }
                              };
                            };

                            APPLICATION_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].square_application_id;
                            LOCATION_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].square_location_id; // @ts-ignore

                            // @ts-ignore
                            paymentsSquare = Square.payments(APPLICATION_ID, LOCATION_ID);
                            _context4.prev = 4;
                            cardOptions = getCardOptions();
                            _context4.next = 8;
                            return paymentsSquare.card(cardOptions);

                          case 8:
                            cardPayment = _context4.sent;
                            _context4.next = 11;
                            return cardPayment.attach('#card-container');

                          case 11:
                            _context4.next = 17;
                            break;

                          case 13:
                            _context4.prev = 13;
                            _context4.t0 = _context4["catch"](4);
                            console.error('Initializing Card failed', _context4.t0);
                            return _context4.abrupt("return");

                          case 17:
                            return _context4.abrupt("return", cardPayment);

                          case 18:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[4, 13]]);
                  }));
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
    }
    /***/

  }
}]);
//# sourceMappingURL=extra-payment-extra-payment-module-es5.js.map
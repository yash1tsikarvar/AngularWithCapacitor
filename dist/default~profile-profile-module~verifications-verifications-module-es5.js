function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-profile-module~verifications-verifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/agreement-signature/agreement-signature.component.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsAgreementSignatureAgreementSignatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"txt-xs font-weight-bold px-5 py-3 mb-0\">\n  Payment Submission and Agreement\n</h3>\n\n<div class=\"box-group box-group--signature\">\n\n\n  <p class=\"agreement-intro\">I, <strong class=\"txt-applicant-name\">{{billingName}}</strong>\n    <br/>\n    Confirm that I authorize the payment of the above amount according to the card issuer agreement. I also understand\n    that the application fee is required and <u style=\"color:red\">non-refundable</u> regardless of the outcome of the\n    application.</p>\n\n  <div class=\"agreement-text\">\n    <p><b><u>PLEASE SCROLL DOWN AND READ THE FOLLOWING AGREEMENT IN FULL BEFORE SUBMITTING THE PAYMENT:</u></b></p>\n    <p>Tenant Evaluation understands the importance of keeping your information secure from unauthorized access.\n      All of your sensitive data is encrypted before being transmitted to/from our servers.\n      Tenant Evaluation is a Level 1 Compliant Organization. For details on Level 1 security standards please\n      <a href=\"https://www.pcisecuritystandards.org/\" target=\"_blank\" style=\"color:blue\">Click Here. </a></p>\n    <p><b style=\"color: red\">* Any additional occupants 18 years old or older will have to make a separate application*</b></p>\n\n    <p>Quick Pass is Non-Refundable and it is an optional feature.</p>\n\n    <p>I understand that the application fee along with the Quick Pass fee is the total amount list on this page\n      ** ADDITIONAL DEPOSITS/FEES MAY BE COLLECTED AFTER APPROVAL**.\n      If the community requires a Credit Report, a Soft/Hard Equifax FICO Score 8 Algorithm or a TransUnion FICO 4 Algorithm will be processed.</p>\n\n\n    <p>If you agree with all property notes and requirements listed on this site, enter your full legal name in the box below.\n      You may also sign with your mouse by drawing your signature. then click pay.\n      if you do not agree to all the property notes and notices, simply close your browser to exit from this application.</p>\n    <p> I further state this form was signed by me and was not originated with fraudulent intent by me or any other person,\n      and that the signature below is my own legally-binding digital signature.</p>\n    <p>You are hereby authorized to release any and all information requested with regards to veriﬁcation of my bank account(s),\n      credit history, residential history, criminal record history, employment veriﬁcation and character references to Tenant Evaluation LLC.\n      This information is to be used for my/our credit report for my/our Application for Occupancy.</p>\n\n    <p>I/We hereby waive any privileges I/We may have with respect to the said information in reference to its release to the aforesaid party.\n      Information obtained for this report is to be released to Tenant Evaluation LLC, Property Manager, Board of Directors and The Landlord for their exclusive use only.</p>\n\n    <p>IF APPLICABLE, PLEASE INCLUDE COPY OF DRIVER’S LICENSE OR PASSPORT TO CONFIRM IDENTITY.</p>\n\n    <p>Please notify your Landlord(s), Employer(s), and Character References that we might be contacting them to obtain a reference pursuant to your application if applicable.</p>\n\n    <p>I/We further state the Authorization Form was signed by me/us and was not originated with fraudulent intent by me/ us\n      or any other person, and that the signature(s) below are my/our own proper signature..</p>\n\n    <p>I/We certify under penalty of perjury that the foregoing is true and correct.</p>\n\n    <p>I/We further understand that any refundable monies paid through Tenant Evaluation in the form of deposits,\n      extra fees, etc. will be refunded by the Association directly.</p>\n\n    <p>Please allow 14 days from the date below to complete the application. Please be aware that the associations have their own approval process which will start once the report has been released and the time frame may vary per association.</p>\n\n    <p>If after 30 days from the date you created the application Tenant Evaluation has not received all the required documentation,\n      your application will be considered abandoned.\n      The application can only be re-opened within 30 days of being abandoned with written request from the Applicant.</p>\n\n    <p>If you or the co-applicant have falsiﬁed, deliberately mislead or omitted to mention any information on your application,\n      you may not be approved for a purchase, lease and/or occupancy.</p>\n\n  </div>\n\n  <form class=\"signature\" [formGroup]=\"childForm\">\n\n    <h4 class=\"signature__title\">Review your signature</h4>\n\n    <te-signature-pad #teSignaturePad id=\"my_signature\" signaturetext=\"\"></te-signature-pad>\n\n    <div class=\"agreement-checkbox custom-checkbox\">\n      <mat-checkbox class=\"mat-checkbox--rounded mat-checkbox--large\"\n                    type=\"checkbox\"\n                    id=\"agree\"\n                    formControlName=\"agreeAndAuthorize\"\n      >I agree and authorize this charge\n      </mat-checkbox>\n      <div class=\"invalid-feedback\">{{getError('agreeAndAuthorize')}}</div>\n    </div>\n\n\n  </form>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/credit-card-info/credit-card-info.component.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsCreditCardInfoCreditCardInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-group\">\n\n  <form class=\"row\" [formGroup]=\"childForm\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n      <h4 class=\"box-group__title\">\n        Billing Address\n      </h4>\n    </div><!-- ./col -->\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"form-label-group\">\n\n        <mat-form-field>\n          <input matInput\n                 type=\"text\"\n                 id=\"paymentBillingAddress\"\n                 class=\"form-control\"\n                 placeholder=\"Name (as it appears on your card)\"\n                 formControlName=\"name\"\n          >\n          <mat-error>{{getError('name')}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div><!-- ./col -->\n\n    <ng-template [ngIf]=\"applicationTotal > 0\">\n\n      <div class=\"col-sm-12 col-md-12 col-lg-6\">\n        <div class=\"custom-checkbox\">\n          <mat-checkbox class=\"mat-checkbox--rounded\"\n                        type=\"checkbox\"\n                        id=\"paymentNotUs\"\n                        formControlName=\"addressNotInUsa\"\n          >Billing address is not in the United\n            States\n          </mat-checkbox>\n          <div class=\"invalid-feedback\">{{getError('addressNotInUsa')}}</div>\n        </div>\n      </div><!-- ./col -->\n\n      <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n        <div class=\"form-label-group\">\n\n          <mat-form-field>\n            <input matInput\n                   type=\"text\"\n                   id=\"paymentStreet\"\n                   class=\"form-control\"\n                   placeholder=\"Street\"\n                   formControlName=\"address1\"\n                   tevAsciiOnly\n            >\n            <mat-error>{{getError('address1')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <div class=\"col-sm-12 col-md-6 col-lg-6\" [hidden]=\"addressNotInUsa\">\n        <div class=\"form-label-group\">\n\n          <mat-form-field>\n            <input matInput\n                   type=\"text\"\n                   id=\"paymentCity\"\n                   class=\"form-control\"\n                   placeholder=\"City\"\n                   formControlName=\"city\"\n                   tevAsciiOnly\n            >\n            <mat-error>{{getError('city')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <div class=\"col-sm-12 col-md-6 col-lg-2\" [hidden]=\"addressNotInUsa\">\n        <div class=\"select-group\">\n\n          <mat-form-field>\n\n            <mat-select [formControlName]=\"'state'\" placeholder=\"State\">\n              <mat-option *ngFor=\"let state of states;\" [value]=\"state.abbreviation\">{{state.name}}</mat-option>\n            </mat-select>\n            <mat-error>{{getError('state')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <div class=\"col-sm-12 col-md-6 col-lg-4\" [hidden]=\"addressNotInUsa\">\n        <div class=\"form-label-group\">\n\n          <mat-form-field>\n            <input matInput\n                   type=\"text\"\n                   id=\"paymentZipCode\"\n                   class=\"form-control\"\n                   placeholder=\"Zip Code\"\n                   formControlName=\"zip\"\n                   tevAsciiOnly\n            >\n            <mat-error>{{getError('zip')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <!-- @todo DONT ASK FOR / -->\n\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\n        <h4 class=\"box-group__title\">\n          Card Information\n        </h4>\n      </div><!-- ./col -->\n\n      <div *ngIf=\"!showSquare\" class=\"col-sm-12 col-md-6 col-lg-6\">\n        <div class=\"form-label-group\">\n\n          <mat-form-field>\n            <input matInput\n                   type=\"text\"\n                   id=\"paymentCreditCard\"\n                   class=\"form-control\"\n                   placeholder=\"Credit Card Number\"\n                   formControlName=\"creditCard\"\n                   [maxlength]=\"21\"\n                   tevNumbersOnly\n            >\n            <mat-error>{{getError('creditCard')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <div *ngIf=\"!showSquare\" class=\"col-7 col-sm-12 col-md-6 col-lg-6\">\n        <div class=\"form-label-group\">\n\n          <mat-form-field>\n            <input matInput\n                   type=\"text\"\n                   id=\"paymentExpiration\"\n                   class=\"form-control\"\n                   placeholder=\"Expiration (MM/YY)\"\n                   [maxlength]=\"5\"\n                   formControlName=\"creditCardExp\"\n                   tevMonthYear (onMonthYearChanged)=onMonthYearChanged($event)\n            >\n            <mat-error>{{getError('creditCardExp')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <div *ngIf=\"!showSquare\" class=\"col-5 col-sm-12 col-md-6 col-lg-6\">\n        <div class=\"form-label-group\">\n\n          <mat-form-field>\n            <input matInput\n                   type=\"text\"\n                   id=\"paymentCVV\"\n                   class=\"form-control\"\n                   placeholder=\"CVV\"\n                   [maxlength]=\"4\"\n                   formControlName=\"creditCardCvv\"\n                   tevNumbersOnly\n            >\n            <mat-error>{{getError('creditCardCvv')}}</mat-error>\n          </mat-form-field>\n\n        </div>\n      </div><!-- ./col -->\n\n      <div *ngIf=\"!showSquare\" class=\"col-sm-12 col-md-6 col-lg-6\">\n        <div class=\"payment-options\">\n          <ul>\n            <li>\n              <img src=\"./assets/icon-visa.svg\" alt=\"visa\">\n            </li>\n            <li>\n              <img src=\"./assets/icon-mastercard.svg\" alt=\"mastercard\">\n            </li>\n            <li>\n              <img src=\"./assets/icon-discover.svg\" alt=\"discover\">\n            </li>\n          </ul>\n        </div><!-- ./payment-options -->\n      </div><!-- ./col -->\n\n    </ng-template>\n\n\n  </form><!-- ./row -->\n  <div [hidden]=\"!showSquare\">\n    <mat-progress-spinner *ngIf=\"showLoading\" mode=\"indeterminate\"></mat-progress-spinner>\n    <div id=\"card-container\"></div>\n  </div>\n\n\n</div><!-- ./box-group -->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/expedite-reviews/expedite-reviews.component.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsExpediteReviewsExpediteReviewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"expediteReviews\">\n  <div class=\"expediteReviews-header\">\n    <div class=\"expediteReviews-header-title\">Check what people have to say</div>\n  </div>\n\n  <div class=\"expediteReviews-main\">\n    <button class=\"expediteReviews-main-actionBtn\" (click)=\"prevReview()\">\n      <img src=\"/assets/reviews-arrow.svg\" alt=\"arrow prev\">\n    </button>\n    <div class=\"expediteReviews-content\">\n      <div class=\"expediteReviews-content-img\">\n        <img *ngIf=\"currentReview.img\" [src]=\"currentReview.img\" alt=\"author\">\n      </div>\n      <div class=\"expediteReviews-content-info\">\n        <div *ngIf=\"currentReview.title\" class=\"expediteReviews-content-info-title\">{{currentReview.title}}</div>\n        <div class=\"expediteReviews-content-info-text\">{{currentReview.text}}</div>\n        <div class=\"expediteReviews-content-author\">\n          <div *ngIf=\"currentReview.img\" class=\"expediteReviews-content-author-img\">\n            <img [src]=\"currentReview.img\" alt=\"author\">\n          </div>\n          <div>\n            <div class=\"expediteReviews-content-author-name\">{{currentReview.author}}</div>\n            <div class=\"expediteReviews-content-author-position\">{{currentReview.position}}</div>\n            <div class=\"expediteReviews-content-author-rating\">\n              <i class=\"material-icons\" *ngFor=\"let star of getStars()\">star_rate</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"expediteReviews-content-quote\">\n        <img src=\"/assets/reviews-dquote.svg\" alt=\"quote\">\n      </div>\n    </div>\n    <button class=\"expediteReviews-main-actionBtn expediteReviews-main-actionBtn--next\" (click)=\"nextReview()\">\n      <img src=\"/assets/reviews-arrow.svg\" alt=\"arrow next\">\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-add-expedite/payment-add-expedite.component.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsPaymentAddExpeditePaymentAddExpediteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <form [formGroup]=\"childForm\" class=\"expedite-container\">\n\n    <div class=\"row pt-4 expedite-main\">\n\n      <!-- Premium -->\n      <div class=\"col-sm-12 col-md-6 col-lg-6 premimum-box\">\n        <div class=\"most-popular\">Best Option</div>\n        <div class=\"box-group box-add-expedite box-add-expedite--premium\">\n          <div class=\"form-group closed-question expedite-fix\" *ngIf=\"propertyInfo?.rushProcessingPrice > 0\">\n            <div class=\"expedite-body\">\n\n              <div class=\"expedite-header expedite-padding\">\n                <div>\n                  <img class=\"expedite-header-img\" src=\"/assets/premium2.svg\" alt=\"Quick Pass\">\n                </div>\n                <div class=\"expedite-header-infoContainer\">\n                  <div class=\"expedite-header-text\">\n                    <div>\n                      <div class=\"expedite-header-text-title\">Quick Pass</div>\n                      <div class=\"expedite-header-text-subtitle\">Fastest Application Processing</div>\n                    </div>\n                  </div>\n                  <div class=\"expedite-header-price\">${{ propertyInfo?.rushProcessingPrice }}</div>\n                  <div class=\"expedite-header-button\">\n                    <button class=\"expedite-btn expedite-btn--premium\" (click)=\"continueWithExpedite()\">Add Quick Pass Now</button>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"expedite-info expedite-padding\">\n                <p class=\"txt txt-bold\">It becomes our top priority!</p>\n                <p class=\"txt\">With this exclusive service, your application won't just be another number - Ensure you get that swift completion you urgently need.</p>\n                <p class=\"txt mt-4\">You will get:</p>\n                <ul>\n                  <li class=\"li-left\">\n                    Priority same day application processing\n                    <i id=\"priority-application-tooltip\" class=\"material-icons\">info_outline</i>\n                  </li>\n                  <li class=\"li-left\">Priority document and background processing</li>\n                  <li class=\"li-left\">Express Verifications</li>\n                  <li class=\"li-left li-left--plus\">Plus every benefit from the<b>&nbsp;Standard Package</b></li>\n                </ul>\n              </div>\n\n              <div class=\"expedite-hr-wrapper\">\n                <hr class=\"expedite-hr\" />\n              </div>\n\n              <div class=\"expedite-padding\">\n                <ul>\n                  <li class=\"li-left li-left--exclusive\">Exclusive Bonus</li>\n                  <li class=\"li-left\">Dedicated phone line support</li>\n                  <li class=\"li-left\">Copy of your report</li>\n                  <li class=\"li-left\">Money back Guaranteed</li>\n                </ul>\n              </div>\n<!--\n              <div class=\"expedite-offer expedite-padding\">\n                <div class=\"expedite-offer-text\">\n                  <img src=\"/assets/warning-expedite.svg\" alt=\"warning\">\n                  <div class=\"expedite-offer-text-title\">Limited-Time<br>Exclusive Offer!</div>\n                  <div class=\"expedite-offer-text-subtitle\">This is a one-off opportunity.<br>It cannot be added after submitting your application.</div>\n                </div>\n              </div> -->\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- -Premium -->\n\n      <!-- Standard -->\n      <div class=\"col-sm-12 col-md-6 col-lg-6 standard-box\">\n        <div class=\"box-group box-add-expedite\" style=\"height: 100%;\">\n          <div class=\"form-group closed-question expedite-fix\" *ngIf=\"propertyInfo?.rushProcessingPrice > 0\" style=\"height: 100%;\">\n            <div class=\"expedite-body\">\n\n                <div class=\"expedite-header expedite-header--standard expedite-padding\">\n                <div>\n                  <img class=\"expedite-header-img\" src=\"/assets/standard.svg\" alt=\"Standard\">\n                </div>\n                <div class=\"expedite-header-infoContainer\">\n                  <div class=\"expedite-header-text\">\n                    <div>\n                      <div class=\"expedite-header-text-title\">Standard</div>\n                      <div class=\"expedite-header-text-subtitle\">Up to 14 days application processing</div>\n                    </div>\n                  </div>\n                  <div class=\"expedite-header-price\"></div>\n                  <div class=\"expedite-header-button\">\n                    <button class=\"expedite-btn expedite-btn--standard\" (click)=\"continueWithoutExpedite()\">I Don't Want Quick Pass</button>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"expedite-info expedite-padding\">\n                <p class=\"txt txt-bold\">This might not be your fastest route.</p>\n                <p class=\"txt\">By choosing Standard, you risk potential delays in your moving timeline. If time is of the essence,</p>\n                <p class=\"txt mt-4\">Standard application service get:</p>\n                <ul>\n                  <li class=\"li-standard\">Help center and support tickets available</li>\n                  <li class=\"li-standard\">Standard phone support</li>\n                  <li class=\"li-standard\">Standard document and background processing</li>\n                  <li class=\"li-standard\">Copy of Your Report ( upon request )</li>\n                  <li class=\"li-standard\">Standard 2 weeks Verifications</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <!-- -Standard -->\n\n    </div>\n\n    <tev-expedite-reviews></tev-expedite-reviews>\n\n    <p class=\"txt-terms text-muted\">This service will expedite the application process within Tenant Evaluation. Please note after the application is closed, the associations have their own approval process (time frame may vary) which will start once the report has been released. For specific information, please contact your association.</p>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-details/payment-details.component.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsPaymentDetailsPaymentDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"collapseSix\" class=\"collapse show\" aria-labelledby=\"headingSix\" data-parent=\"#accordion\">\n\n  <tev-loader *ngIf=\"processing\" [loading_text]=\"loading_text\" ></tev-loader>\n\n  <div class=\"card-body txt-purple\">\n\n    <div *ngIf=\"!activeMilitary&&!expediteSelected; else paymentInfo\">\n      <!-- <h2 class=\"d-none d-lg-flex step-headline\">\n        <span class=\"flex-grow-1\">Additional Options</span>\n        <span class=\"theme-logo smaller\" [ngStyle]=\"{'background-image': smallLogo}\"></span>\n      </h2> -->\n      <div class=\"paymentDetails-header\">\n        <div class=\"paymentDetails-header-container\">\n          <div class=\"paymentDetails-header-title\">Eager to move? <label class=\"paymentDetails-header-quickPass\">Quick pass</label> makes things faster!</div>\n          <div class=\"paymentDetails-header-subtitle\">Choose our <label class=\"paymentDetails-header-quickPass\">Quick pass Now</label> and ensure your application starts today!</div>\n        </div>\n      </div>\n\n      <tev-payment-add-expedite (formChanged)=\"paymentAddExpediteChanged($event)\"></tev-payment-add-expedite>\n    </div>\n\n    <ng-template #paymentInfo>\n      <h2 class=\"d-none d-lg-flex step-headline\">Payment Info</h2>\n\n      <tev-credit-card-info [paymentProcessorInput]=\"paymentProcessor\"\n                            [expediteApplication]=\"expediteApplication\"\n                            (formChanged)=\"paymentInfoChanged($event)\"\n                            (nameChanged)=\"billingNameChanged($event)\"\n                            (squareCard)=\"inputSquareCard($event)\"></tev-credit-card-info>\n\n      <tev-agreement-signature [billingName]=\"billingName\"\n                               (formChanged)=\"paymentAgreeChanged($event)\"></tev-agreement-signature>\n\n      <tev-payment-summary [activeMilitary]=\"activeMilitary\" [addExpediteApplication]=\"addExpediteApplication\"\n       (formChanged)=\"paymentExpediteChanged($event)\"></tev-payment-summary>\n\n\n\n      <div class=\"py-4\">\n        <div class=\"foot-action\">\n          <button (click)=\"goBack()\"\n                  class=\"tev-btn tev-btn--block tev-btn--inverse tev-btn--large\">Back\n          </button>\n          <button class=\"tev-btn tev-btn--block tev-btn--large\"\n                  type=\"button\"\n                  [disabled]=\"processing\"\n                  data-cy=\"buttonPay\"\n                  (click)=\"submit()\">Pay</button>\n        </div>\n      </div>\n    </ng-template>\n\n  </div><!-- ./card-body -->\n</div><!-- ./collapse -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-details/payment-details.dialog.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsPaymentDetailsPaymentDetailsDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialog-icon-title\"><i class=\"material-icons\">highlight_off</i></div>\n<h2 mat-dialog-title class=\"mat-dialog-title\">{{dialogTitle}}</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>{{dialogText}}</h3>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button class=\"primary-button\" mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-summary/payment-summary.component.html": function node_modulesRawLoaderDistCjsJsSrcAppApplicationProfilePaymentDetailsPaymentSummaryPaymentSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"txt-xs font-weight-bold px-3 py-2 mb-0\">Payment Details</h3>\n<article>\n  <div class=\"box-group box-group--connect\">\n\n\n    <div class=\"payment-table\">\n\n      <div class=\"payment-table__row payment-table__row--head\">\n        <div class=\"payment-table__col payment-table__col--item\">\n          <h3 class=\"txt-all-caps txt-md column-title\">Application Fees</h3>\n        </div>\n        <div class=\"payment-table__col payment-table__col--price\">\n          <h3 class=\"txt-all-caps txt-md column-title\">Amount</h3>\n        </div>\n      </div>\n\n      <div class=\"payment-table__row\">\n        <ul class=\"payment-table__col payment-table__col--item\">\n          <li class=\"txt-xs\" *ngFor=\"let pricedItem of feesAndDocs.feesDueNow\">{{pricedItem | pricedItemDescription}}</li>\n        </ul>\n        <ul class=\"payment-table__col payment-table__col--price\">\n          <li class=\"txt-xs\" *ngFor=\"let pricedItem of feesAndDocs.feesDueNow\">{{pricedItem | pricedItemFee}}</li>\n        </ul>\n      </div>\n\n      <form [formGroup]=\"childForm\" *ngIf=\"!activeMilitary\">\n        <div class=\"payment-table__row\" *ngIf=\"propertyInfo?.rushProcessingPrice > 0\">\n          <ul class=\"payment-table__col payment-table__col--item\">\n            <li class=\"txt-xs\">Quick Pass Fee <button class=\"btn btn-sm btn-default\" style=\"color:blue\" (click)=\"addExpedite()\" *ngIf=\"!expediteApplication\">+ Add</button></li>\n          </ul>\n          <ul class=\"payment-table__col payment-table__col--price\">\n            <li class=\"txt-xs\">\n              <span *ngIf=\"expediteApplication\">\n                {{propertyInfo?.rushProcessingPrice | moneyFormat}} <button class=\"btn btn-sm btn-default\" style=\"color:gray\" (click)=\"removeExpedite()\">Remove</button>\n              </span>\n              <input type=\"hidden\" name=\"formControlName\" id=\"expedite-application\"/>\n            </li>\n          </ul>\n        </div>\n      </form>\n\n      <div class=\"payment-table__row payment-table__row--total\">\n        <div class=\"payment-table__col payment-table__col--item\">\n          <h3>Total Fees</h3>\n          <span class=\"payment-table__warn\">This charge will be collected immediately *</span>\n        </div>\n        <div class=\"payment-table__col payment-table__col--price\">\n          <h3>{{applicationTotal | moneyFormat}}\n            <a tabindex=\"0\"\n               class=\"btn btn-round btn-primary btn-inline\"\n               placement=\"top\"\n               role=\"button\"\n               data-toggle=\"popover\"\n               triggers=\"click\"\n               autoClose=\"outside\"\n               ngbPopover='This application fee was established by \"{{propertyInfo?.buildingName}}\" to which you are applying to. Should you have any questions, please contact the association directly.'>?</a>\n          </h3>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"feesAndDocs.feesDueLater.length > 0\" class=\"payment-table mb-0\">\n\n      <p class=\"txt-xs\">The following items will be collected after the application has been approved.</p>\n      <div class=\"payment-table__row payment-table__row--head\">\n        <div class=\"payment-table__col payment-table__col--item\">\n          <h3 class=\"txt-all-caps txt-md column-title\">Description</h3>\n        </div>\n        <div class=\"payment-table__col payment-table__col--price\">\n          <h3 class=\"txt-all-caps txt-md column-title\">Amount</h3>\n        </div>\n      </div>\n\n      <div class=\"payment-table__row\">\n        <ul class=\"payment-table__col payment-table__col--item\">\n          <li class=\"txt-xs\" *ngFor=\"let pricedItem of feesAndDocs.feesDueLater\">{{pricedItem |\n            pricedItemDescription}}\n          </li>\n        </ul>\n\n        <ul class=\"payment-table__col payment-table__col--price\">\n          <li class=\"txt-xs\" *ngFor=\"let pricedItem of feesAndDocs.feesDueLater\">{{pricedItem | pricedItemFee}}</li>\n        </ul>\n      </div>\n\n    </div>\n  </div><!-- ./box-group -->\n\n</article>\n\n";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/agreement-signature/agreement-signature.component.scss": function srcAppApplicationProfilePaymentDetailsAgreementSignatureAgreementSignatureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".agreement-text {\n  max-height: 15em;\n  overflow-y: auto;\n  padding: 1em;\n  margin: 1em 0;\n  border: 1px solid #f1f1f2;\n  background-color: #F5F5F5;\n}\n\n.agreement-checkbox {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS9wYXltZW50LWRldGFpbHMvYWdyZWVtZW50LXNpZ25hdHVyZS9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFxwcm9maWxlXFxwYXltZW50LWRldGFpbHNcXGFncmVlbWVudC1zaWduYXR1cmVcXGFncmVlbWVudC1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL2FncmVlbWVudC1zaWduYXR1cmUvYWdyZWVtZW50LXNpZ25hdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9wcm9maWxlL3BheW1lbnQtZGV0YWlscy9hZ3JlZW1lbnQtc2lnbmF0dXJlL2FncmVlbWVudC1zaWduYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGlnaHQtZ3JheTogI2QwZDFkMztcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG5cbi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDE1ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmFncmVlbWVudC1jaGVja2JveCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufSIsIi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDE1ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmFncmVlbWVudC1jaGVja2JveCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/agreement-signature/agreement-signature.component.ts": function srcAppApplicationProfilePaymentDetailsAgreementSignatureAgreementSignatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgreementSignatureComponent", function () {
      return AgreementSignatureComponent;
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


    var _profile_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../profile-form.service */
    "./src/app/application/profile/profile-form.service.ts");
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


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");

    var AgreementSignatureComponent = /*#__PURE__*/function () {
      function AgreementSignatureComponent(profileFormService, uiService, formBuilder) {
        _classCallCheck(this, AgreementSignatureComponent);

        this.profileFormService = profileFormService;
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dataReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.billingName$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.viewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listenToMainForm();
        this.listenToBillingNameChange();
        this.listenToSetup();
        this.listenForFormValidation();
      }

      _createClass(AgreementSignatureComponent, [{
        key: "info",
        set: function set(info$) {
          var _this = this;

          info$.subscribe(function (info) {
            if (_this.data = info) {
              _this.dataReady$.next(true);
            }
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
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.subscribeToFormChanges();
          this.formReady$.next(true);
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var agreeValidator = this.setupHasFee() ? _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].agreeValidator() : null;
          this.childForm = this.formBuilder.group({
            agreeAndAuthorize: [false, agreeValidator],
            noticeSignature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            signatureText: ['']
          });
        }
      }, {
        key: "subscribeToFormChanges",
        value: function subscribeToFormChanges() {
          var _this2 = this;

          this.childForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (status) {
            if ('VALID' === status) {
              _this2.formChanged.emit(_this2.childForm.value);
            } else {
              _this2.formChanged.emit(null);
            }
          });
          this.childForm.updateValueAndValidity();
        }
      }, {
        key: "listenToMainForm",
        value: function listenToMainForm() {
          var _this3 = this;

          this.profileFormService.formValues$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (values) {
            _this3.personalInfo = values.personalInfo;
          });
        }
      }, {
        key: "listenToBillingNameChange",
        value: function listenToBillingNameChange() {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.formReady$, this.billingName$, this.viewInit$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                formReady = _ref2[0],
                name = _ref2[1];

            var element = document.getElementById('my_signature');
            element.setAttribute('signaturetext', name);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          this.viewInit$.next();
          this.teSignaturePad.nativeElement.addEventListener('signaturechange', function (event) {
            //console.log('event.detail[0].isEmpty ' + event.detail[0].isEmpty); // base64 image data
            var noticeSignature = null;
            var signatureText = '';

            if (!event.detail[0].isEmpty) {
              noticeSignature = event.detail[0].data;
              var signature_input = document.getElementsByClassName('signature-input')[0];

              if (signature_input) {
                signatureText = signature_input.value;
              }
            }

            _this4.childForm.patchValue({
              noticeSignature: noticeSignature,
              signatureText: signatureText
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (!this.childForm.valid) {
            this.markControlsAsTouched();
          }
        }
      }, {
        key: "setupHasFee",
        value: function setupHasFee() {
          return this.setup.applicationFee > 0;
        }
      }, {
        key: "listenToSetup",
        value: function listenToSetup() {
          var _this5 = this;

          this.profileFormService.setup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this5.setup = info;
          });
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          var errors = this.childForm.controls[controlName].errors;
          return this.uiService.getControlError(errors);
        }
      }, {
        key: "markControlsAsTouched",
        value: function markControlsAsTouched() {
          this.uiService.markControlsAsTouched(this.childForm);
        }
      }, {
        key: "listenForFormValidation",
        value: function listenForFormValidation() {
          var _this6 = this;

          this.profileFormService.validateForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            return _this6.markControlsAsTouched();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next();
          this.unsubscribeSubject.complete();
        }
      }]);

      return AgreementSignatureComponent;
    }();

    AgreementSignatureComponent.ctorParameters = function () {
      return [{
        type: _profile_form_service__WEBPACK_IMPORTED_MODULE_2__["ProfileFormService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_7__["UiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('teSignaturePad', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AgreementSignatureComponent.prototype, "teSignaturePad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])], AgreementSignatureComponent.prototype, "info", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], AgreementSignatureComponent.prototype, "billingName", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgreementSignatureComponent.prototype, "formChanged", void 0);
    AgreementSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-agreement-signature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agreement-signature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/agreement-signature/agreement-signature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agreement-signature.component.scss */
      "./src/app/application/profile/payment-details/agreement-signature/agreement-signature.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_form_service__WEBPACK_IMPORTED_MODULE_2__["ProfileFormService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_7__["UiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], AgreementSignatureComponent);
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/credit-card-info/credit-card-info.component.scss": function srcAppApplicationProfilePaymentDetailsCreditCardInfoCreditCardInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL2NyZWRpdC1jYXJkLWluZm8vY3JlZGl0LWNhcmQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/credit-card-info/credit-card-info.component.ts": function srcAppApplicationProfilePaymentDetailsCreditCardInfoCreditCardInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditCardInfoComponent", function () {
      return CreditCardInfoComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _profile_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../profile-form.service */
    "./src/app/application/profile/profile-form.service.ts");
    /* harmony import */


    var _shared_definitions_forms_profile_form_payment_details_payment_details_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/definitions/forms/profile-form/payment-details/payment-details.interface */
    "./src/app/shared/definitions/forms/profile-form/payment-details/payment-details.interface.ts");
    /* harmony import */


    var _shared_definitions_constants_us_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/definitions/constants/us_states */
    "./src/app/shared/definitions/constants/us_states.ts");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _square_square__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../square/square */
    "./src/app/square/square.ts");

    var CreditCardInfoComponent = /*#__PURE__*/function () {
      function CreditCardInfoComponent(formBuilder, uiService, profileFormService) {
        _classCallCheck(this, CreditCardInfoComponent);

        this.formBuilder = formBuilder;
        this.uiService = uiService;
        this.profileFormService = profileFormService;
        this.dataReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.propertyInfoReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.expediteApplication$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.applicationTotal$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showLoading = Boolean(1);
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.squareCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.states = _shared_definitions_constants_us_states__WEBPACK_IMPORTED_MODULE_7__["states"];
        this.defaultAddress = _shared_definitions_forms_profile_form_payment_details_payment_details_interface__WEBPACK_IMPORTED_MODULE_6__["DefaultAddress"];
        this.addressNotInUsa = false;
        this.listenToFeesAndDocs();
        this.listenToSetup();
        this.calculateApplicationTotal();
        this.defaultValues();
        this.listenForFormValidation();
        this.listenToPropertyInfo();
        this.listenToApplicationTotal();
      }

      _createClass(CreditCardInfoComponent, [{
        key: "info",
        set: function set(info$) {
          var _this7 = this;

          info$.subscribe(function (info) {
            if (_this7.data = info) {
              _this7.dataReady$.next(true);
            }
          });
        }
      }, {
        key: "expediteApplication",
        get: function get() {
          return this._expediteApplication;
        },
        set: function set(expediteApplication) {
          this._expediteApplication = expediteApplication;
          this.expediteApplication$.next();
        }
      }, {
        key: "paymentProcessorInput",
        set: function set(paymentProcessor) {
          this.paymentProcessor = paymentProcessor;
          this.showSquare = this.paymentProcessor.startsWith('Square');
          this.checkSquareControls();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showLoading = true;
          this.showSquare = this.paymentProcessor.startsWith('Square');
          this.initForm();
          this.subscribeToFormChanges();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.childForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].asciiValidator()]],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].asciiValidator()]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].asciiValidator()]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].asciiValidator()]],
            zip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].usaZipCode()]],
            creditCard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].validCreditCard(), _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].validCreditCardNumber()]],
            creditCardExp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].validCreditCardExpiration()]],
            creditCardCvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].validCreditCardCode()]],
            addressNotInUsa: [false]
          });
          this.checkSquareControls();

          if (this.showSquare) {
            this.initSquare();
          }

          this.formReady$.next(true);
        }
      }, {
        key: "checkSquareControls",
        value: function checkSquareControls() {
          if (!this.childForm) {
            return;
          }

          if (this.showSquare) {
            this.disableCardControls();
          } else {
            this.squareCard.emit(null);
            this.enableCardControls();
          }
        }
      }, {
        key: "listenToApplicationTotal",
        value: function listenToApplicationTotal() {
          var _this8 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.applicationTotal$, this.formReady$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            if (_this8.setup.applicationFee > 0 || _this8.applicationTotal > 0 && _this8.expediteApplication) {
              _this8.enableAddressControls();

              _this8.enableCCControls();

              if (_this8.paymentProcessor.startsWith('Square')) {
                _this8.showSquare = true;

                _this8.disableCardControls();

                if (_this8.applicationTotal === 0) {
                  _this8.disableAddressControls();

                  _this8.disableCCControls();
                }
              }
            } else {
              _this8.showSquare = false;

              _this8.disableAddressControls();

              _this8.disableCCControls();
            }
          });
        }
      }, {
        key: "listenToFeesAndDocs",
        value: function listenToFeesAndDocs() {
          var _this9 = this;

          this.profileFormService.feesAndDocUploadRequirements$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this9.feesAndDocs = info;
          });
        }
      }, {
        key: "listenToSetup",
        value: function listenToSetup() {
          var _this10 = this;

          this.profileFormService.setup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this10.setup = info;
          });
        }
      }, {
        key: "listenToPropertyInfo",
        value: function listenToPropertyInfo() {
          var _this11 = this;

          this.profileFormService.propertyInfo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (propertyInfo) {
            _this11.propertyInfo = propertyInfo;

            _this11.propertyInfoReady$.next(true);
          });
        }
      }, {
        key: "defaultValues",
        value: function defaultValues() {
          var _this12 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.dataReady$, this.formReady$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            Object.keys(_this12.childForm.controls).forEach(function (controlName) {
              if (typeof _this12.data[controlName] !== 'undefined') {
                _this12.childForm.controls[controlName].setValue(_this12.data[controlName]);
              }
            });

            _this12.childForm.updateValueAndValidity();
          });
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          var errors = this.childForm.controls[controlName].errors;
          return this.uiService.getControlError(errors);
        }
      }, {
        key: "listenForFormValidation",
        value: function listenForFormValidation() {
          var _this13 = this;

          this.profileFormService.validateForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            _this13.markControlsAsTouched();
          });
        }
      }, {
        key: "markControlsAsTouched",
        value: function markControlsAsTouched() {
          this.uiService.markControlsAsTouched(this.childForm);
        }
      }, {
        key: "submit",
        value: function submit() {
          if (!this.childForm.valid) {
            this.markControlsAsTouched();
          }
        }
      }, {
        key: "subscribeToFormChanges",
        value: function subscribeToFormChanges() {
          var _this14 = this;

          var _this$childForm$contr = this.childForm.controls,
              name = _this$childForm$contr.name,
              addressNotInUsa = _this$childForm$contr.addressNotInUsa;
          this.childForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (status) {
            if ('VALID' === status) {
              _this14.formChanged.emit(_this14.childForm.value);
            } else {
              _this14.formChanged.emit(null);
            }
          });
          addressNotInUsa.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (value) {
            _this14.addressNotInUsa = value;

            if (value) {
              _this14.disableAddressControls();
            } else {
              _this14.enableAddressControls();
            }

            _this14.childForm.updateValueAndValidity();
          });
          name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (value) {
            _this14.nameChanged.emit(value);
          });
          this.childForm.updateValueAndValidity();
        }
      }, {
        key: "disableAddressControls",
        value: function disableAddressControls() {
          var _this15 = this;

          Object.keys(this.defaultAddress).forEach(function (key) {
            _this15.childForm.controls[key].setValue(_this15.defaultAddress[key]);

            _this15.childForm.controls[key].disable();

            _this15.childForm.controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "disableCCControls",
        value: function disableCCControls() {
          var _this16 = this;

          ['name', 'creditCard', 'creditCardExp', 'creditCardCvv'].forEach(function (key) {
            _this16.childForm.controls[key].setValue('');

            _this16.childForm.controls[key].disable();

            _this16.childForm.controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "disableCardControls",
        value: function disableCardControls() {
          var _this17 = this;

          ['creditCard', 'creditCardExp', 'creditCardCvv'].forEach(function (key) {
            _this17.childForm.controls[key].setValue('');

            _this17.childForm.controls[key].disable();

            _this17.childForm.controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "enableCardControls",
        value: function enableCardControls() {
          var _this18 = this;

          ['creditCard', 'creditCardExp', 'creditCardCvv'].forEach(function (key) {
            _this18.childForm.controls[key].setValue('');

            _this18.childForm.controls[key].enable();

            _this18.childForm.controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "enableAddressControls",
        value: function enableAddressControls() {
          var _this19 = this;

          if (!this.addressNotInUsa) {
            Object.keys(this.defaultAddress).forEach(function (key) {
              _this19.childForm.controls[key].setValue('');

              _this19.childForm.controls[key].enable();

              _this19.childForm.controls[key].updateValueAndValidity();
            });
          }
        }
      }, {
        key: "enableCCControls",
        value: function enableCCControls() {
          var _this20 = this;

          ['name', 'creditCard', 'creditCardExp', 'creditCardCvv'].forEach(function (key) {
            _this20.childForm.controls[key].enable();

            _this20.childForm.controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "getApplicationTotalValue",
        value: function getApplicationTotalValue() {
          var total = 0;

          if (this.setup) {
            total += this.setup.applicationFee;
          }

          if (this.expediteApplication) {
            total += this.propertyInfo.rushProcessingPrice;
          }

          return total;
        }
      }, {
        key: "calculateApplicationTotal",
        value: function calculateApplicationTotal() {
          var _this21 = this;

          this.expediteApplication$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            _this21.applicationTotal = _this21.getApplicationTotalValue();

            _this21.applicationTotal$.next(_this21.applicationTotal);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next(true);
        }
      }, {
        key: "onMonthYearChanged",
        value: function onMonthYearChanged(value) {
          this.childForm.controls['creditCardExp'].setValue(value);
        }
      }, {
        key: "initSquare",
        value: function initSquare() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Object(_square_square__WEBPACK_IMPORTED_MODULE_10__["initSquare"])();

                  case 2:
                    this.cardPayment = _context.sent;
                    this.squareCard.emit(this.cardPayment);
                    this.showLoading = false;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CreditCardInfoComponent;
    }();

    CreditCardInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]
      }, {
        type: _profile_form_service__WEBPACK_IMPORTED_MODULE_5__["ProfileFormService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])], CreditCardInfoComponent.prototype, "info", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], CreditCardInfoComponent.prototype, "expediteApplication", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], CreditCardInfoComponent.prototype, "paymentProcessorInput", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CreditCardInfoComponent.prototype, "formChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CreditCardInfoComponent.prototype, "nameChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CreditCardInfoComponent.prototype, "squareCard", void 0);
    CreditCardInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-credit-card-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./credit-card-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/credit-card-info/credit-card-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./credit-card-info.component.scss */
      "./src/app/application/profile/payment-details/credit-card-info/credit-card-info.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"], _profile_form_service__WEBPACK_IMPORTED_MODULE_5__["ProfileFormService"]])], CreditCardInfoComponent);
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/expedite-reviews/expedite-reviews.component.scss": function srcAppApplicationProfilePaymentDetailsExpediteReviewsExpediteReviewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expediteReviews {\n  color: #3B3445;\n  margin-bottom: 30px;\n}\n@media (max-width: 991px) {\n  .expediteReviews {\n    margin-top: 1rem;\n    padding: 20px;\n  }\n}\n.expediteReviews-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.expediteReviews-header-title {\n  font-size: clamp(1.2rem, 2.5vw, 2rem);\n}\n.expediteReviews-header-controls {\n  display: flex;\n  align-items: center;\n}\n.expediteReviews-header-controls > button {\n  border: none;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n}\n.expediteReviews-header-controls > button > i {\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  color: #3B3445;\n}\n.expediteReviews-header-controls > button > i:hover {\n  opacity: 0.8;\n}\n.expediteReviews-main {\n  position: relative;\n}\n.expediteReviews-main-actionBtn {\n  all: unset;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.expediteReviews-main-actionBtn--next {\n  left: auto;\n  right: 0;\n  transform: translate(50%, -50%) rotate(180deg);\n}\n@media (max-width: 991px) {\n  .expediteReviews-main-actionBtn > img {\n    width: 35px;\n    height: 35px;\n  }\n}\n.expediteReviews-content {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-areas: \"img info quote\";\n  gap: 20px;\n  margin-top: 30px;\n  background-color: #fff;\n  border-radius: 15px;\n  padding: 20px;\n  color: #3B3445;\n}\n.expediteReviews-content-img {\n  grid-area: img;\n}\n.expediteReviews-content-img > img {\n  width: 160px;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 15px;\n}\n.expediteReviews-content-author {\n  grid-area: author;\n  margin-top: auto;\n  margin-bottom: 0;\n  display: flex;\n  gap: 10px;\n}\n.expediteReviews-content-author-img {\n  display: none;\n  height: 50px;\n  width: 50px;\n}\n.expediteReviews-content-author-img > img {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.expediteReviews-content-author-name {\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n}\n.expediteReviews-content-author-position {\n  font-size: clamp(0.6rem, 2.5vw, 0.8rem);\n  color: #6D6F74;\n}\n.expediteReviews-content-author-rating {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n}\n.expediteReviews-content-author-rating > i {\n  font-size: clamp(1.2rem, 2.5vw, 1.8rem);\n  color: #FFC107;\n}\n.expediteReviews-content-info {\n  grid-area: info;\n  display: flex;\n  flex-direction: column;\n}\n.expediteReviews-content-info-title {\n  font-size: clamp(1.2rem, 2.5vw, 1.8rem);\n  margin-bottom: 20px;\n}\n.expediteReviews-content-info-text {\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n  color: #6D6F74;\n  margin-bottom: 20px;\n}\n.expediteReviews-content-quote {\n  grid-area: quote;\n}\n@media (max-width: 991px) {\n  .expediteReviews-content-quote > img {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .expediteReviews-content {\n    grid-template-columns: 1fr auto;\n    grid-template-areas: \"info quote\";\n  }\n  .expediteReviews-content-img {\n    display: none;\n  }\n  .expediteReviews-content-author-img {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS9wYXltZW50LWRldGFpbHMvZXhwZWRpdGUtcmV2aWV3cy9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFxwcm9maWxlXFxwYXltZW50LWRldGFpbHNcXGV4cGVkaXRlLXJldmlld3NcXGV4cGVkaXRlLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL2V4cGVkaXRlLXJldmlld3MvZXhwZWRpdGUtcmV2aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsYUFBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRUo7QURBSTtFQUNFLHFDQUFBO0FDRU47QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNFUjtBRERRO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FDR1Y7QURGVTtFQUNFLFlBQUE7QUNJWjtBREdFO0VBQ0Usa0JBQUE7QUNESjtBREVJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtBQ0FOO0FERU07RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDhDQUFBO0FDQVI7QURHTTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNEUjtBQUNGO0FETUU7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0pKO0FETUk7RUFDRSxjQUFBO0FDSk47QURLTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURPSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxTQUFBO0FDTk47QURRTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05SO0FEUVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ05WO0FEVU07RUFDRSxxQ0FBQTtBQ1JSO0FEV007RUFDRSx1Q0FBQTtFQUNBLGNBQUE7QUNUUjtBRFlNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1ZSO0FEV1E7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7QUNUVjtBRGNJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1pOO0FEYU07RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0FDWFI7QURjTTtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDWlI7QURnQkk7RUFDRSxnQkFBQTtBQ2ROO0FEZ0JRO0VBREY7SUFFSSxhQUFBO0VDYlI7QUFDRjtBRGlCSTtFQXZGRjtJQXdGSSwrQkFBQTtJQUNBLGlDQUFBO0VDZEo7RURnQkk7SUFDRSxhQUFBO0VDZE47RURpQkk7SUFDRSxjQUFBO0VDZk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL2V4cGVkaXRlLXJldmlld3MvZXhwZWRpdGUtcmV2aWV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlZGl0ZVJldmlld3Mge1xuICBjb2xvcjogIzNCMzQ0NTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAmLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAycmVtKTtcbiAgICB9XG5cbiAgICAmLWNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJiA+IGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICYgPiBpIHtcbiAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDIuNXZ3LCAzcmVtKTtcbiAgICAgICAgICBjb2xvcjogIzNCMzQ0NTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLW1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLWFjdGlvbkJ0biB7XG4gICAgICBhbGw6IHVuc2V0O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgICAgJi0tbmV4dCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgJiA+IGltZyB7XG4gICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltZyBpbmZvIHF1b3RlXCI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6ICMzQjM0NDU7XG5cbiAgICAmLWltZyB7XG4gICAgICBncmlkLWFyZWE6IGltZztcbiAgICAgICYgPiBpbWcge1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtYXV0aG9yIHtcbiAgICAgIGdyaWQtYXJlYTogYXV0aG9yO1xuICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgICYtaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcblxuICAgICAgICAmID4gaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gICAgICB9XG5cbiAgICAgICYtcG9zaXRpb24ge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuNnJlbSwgMi41dncsIDAuOHJlbSk7XG4gICAgICAgIGNvbG9yOiAjNkQ2Rjc0XG4gICAgICB9XG5cbiAgICAgICYtcmF0aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAmID4gaSB7XG4gICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAxLjhyZW0pO1xuICAgICAgICAgIGNvbG9yOiAjRkZDMTA3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pbmZvIHtcbiAgICAgIGdyaWQtYXJlYTogaW5mbztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgJi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS44cmVtKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgJi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDIuNXZ3LCAxcmVtKTtcbiAgICAgICAgY29sb3I6ICM2RDZGNzQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1xdW90ZSB7XG4gICAgICBncmlkLWFyZWE6IHF1b3RlO1xuICAgICAgJiA+IGltZyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImluZm8gcXVvdGVcIjtcblxuICAgICAgJi1pbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLWF1dGhvci1pbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5leHBlZGl0ZVJldmlld3Mge1xuICBjb2xvcjogIzNCMzQ0NTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZXhwZWRpdGVSZXZpZXdzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbi5leHBlZGl0ZVJldmlld3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmV4cGVkaXRlUmV2aWV3cy1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDJyZW0pO1xufVxuLmV4cGVkaXRlUmV2aWV3cy1oZWFkZXItY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmV4cGVkaXRlUmV2aWV3cy1oZWFkZXItY29udHJvbHMgPiBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1oZWFkZXItY29udHJvbHMgPiBidXR0b24gPiBpIHtcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAyLjV2dywgM3JlbSk7XG4gIGNvbG9yOiAjM0IzNDQ1O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1oZWFkZXItY29udHJvbHMgPiBidXR0b24gPiBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4cGVkaXRlUmV2aWV3cy1tYWluLWFjdGlvbkJ0biB7XG4gIGFsbDogdW5zZXQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmV4cGVkaXRlUmV2aWV3cy1tYWluLWFjdGlvbkJ0bi0tbmV4dCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5leHBlZGl0ZVJldmlld3MtbWFpbi1hY3Rpb25CdG4gPiBpbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufVxuLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltZyBpbmZvIHF1b3RlXCI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICMzQjM0NDU7XG59XG4uZXhwZWRpdGVSZXZpZXdzLWNvbnRlbnQtaW1nIHtcbiAgZ3JpZC1hcmVhOiBpbWc7XG59XG4uZXhwZWRpdGVSZXZpZXdzLWNvbnRlbnQtaW1nID4gaW1nIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5leHBlZGl0ZVJldmlld3MtY29udGVudC1hdXRob3Ige1xuICBncmlkLWFyZWE6IGF1dGhvcjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LWF1dGhvci1pbWcge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LWF1dGhvci1pbWcgPiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LWF1dGhvci1uYW1lIHtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDIuNXZ3LCAxcmVtKTtcbn1cbi5leHBlZGl0ZVJldmlld3MtY29udGVudC1hdXRob3ItcG9zaXRpb24ge1xuICBmb250LXNpemU6IGNsYW1wKDAuNnJlbSwgMi41dncsIDAuOHJlbSk7XG4gIGNvbG9yOiAjNkQ2Rjc0O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LWF1dGhvci1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZXhwZWRpdGVSZXZpZXdzLWNvbnRlbnQtYXV0aG9yLXJhdGluZyA+IGkge1xuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDEuOHJlbSk7XG4gIGNvbG9yOiAjRkZDMTA3O1xufVxuLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LWluZm8ge1xuICBncmlkLWFyZWE6IGluZm87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZXhwZWRpdGVSZXZpZXdzLWNvbnRlbnQtaW5mby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS44cmVtKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5leHBlZGl0ZVJldmlld3MtY29udGVudC1pbmZvLXRleHQge1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMi41dncsIDFyZW0pO1xuICBjb2xvcjogIzZENkY3NDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5leHBlZGl0ZVJldmlld3MtY29udGVudC1xdW90ZSB7XG4gIGdyaWQtYXJlYTogcXVvdGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LXF1b3RlID4gaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW5mbyBxdW90ZVwiO1xuICB9XG4gIC5leHBlZGl0ZVJldmlld3MtY29udGVudC1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmV4cGVkaXRlUmV2aWV3cy1jb250ZW50LWF1dGhvci1pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/expedite-reviews/expedite-reviews.component.ts": function srcAppApplicationProfilePaymentDetailsExpediteReviewsExpediteReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpediteReviewsComponent", function () {
      return ExpediteReviewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExpediteReviewsComponent = /*#__PURE__*/function () {
      function ExpediteReviewsComponent() {
        _classCallCheck(this, ExpediteReviewsComponent);

        this.reviews = [{
          title: '',
          text: 'We were very pleased with the service that we received from TenantEvaluation. The staff exemplified true professionalism and exceeded all of our expectations. They were informative and stood on top of our HOA application status. We were provided a daily update as to what documents/signatures were missing until the application was completed. This office understands the value of good service and it shows. Such a commitment to great service is to be commended!',
          author: 'S. Padilla',
          position: 'Applicant',
          img: 'https://lh3.googleusercontent.com/a/ACg8ocJ9yIQTbkrYprJqu49xcdl0bL_KupBpHH2haIRTJNMa1Q',
          rating: 5
        }, {
          title: '',
          text: 'After several extremely bad experiences with HOA application processes, this was absolutely phenomenal! The application process was easy to navigate, and their customer service staff is unbelievable!',
          author: 'Claudia Mendez',
          position: 'Applicant',
          img: 'https://lh3.googleusercontent.com/a-/ALV-UjUwYRMJ2RfiUmvBf3nN6yx5Es4S4P8UVte0w_6j30ySyA',
          rating: 5
        }, {
          title: '',
          text: 'Easy process! my clients needed help with the application, and it was great that I was able to log in with my account and help them to fill it out the application.',
          author: 'Melanie Prada',
          position: 'Realtor',
          img: 'https://lh3.googleusercontent.com/a/ACg8ocKLRoQRxFgekhn_JRAPEZGxxpMfQ8Xw5KBxlU4Z17R7',
          rating: 5
        }, {
          title: '',
          text: 'The application process for my customer was very comprehensive and they were very fast with the turn around to get the package to the condo association.',
          author: 'Caren Nealon',
          position: 'Realtor',
          img: 'https://lh3.googleusercontent.com/a-/ALV-UjXEZUo6BWPvIosPsQnstZwaAIXT4n2mfcCf7_YU-WzwZMk',
          rating: 5
        }, {
          title: '',
          text: 'They were very professional and prompt. They were very courteous and gave me their full attention. It was easy to upload the documents. I oved that they gave step by step instructions on how to complete the application. They earn their 5 star ratings.',
          author: 'Decarla Boggs',
          position: 'Applicant',
          img: 'https://lh3.googleusercontent.com/a/ACg8ocIVT5gxW_p2oKkMkwxo-SZuy7vsjh-qKLcysTic0ZkG',
          rating: 5
        }];
        this.currentReviewIndex = 0;
        this.currentReview = this.reviews[this.currentReviewIndex];
      }

      _createClass(ExpediteReviewsComponent, [{
        key: "nextReview",
        value: function nextReview() {
          this.currentReviewIndex++;

          if (this.currentReviewIndex >= this.reviews.length) {
            this.currentReviewIndex = 0;
          }

          this.currentReview = this.reviews[this.currentReviewIndex];
        }
      }, {
        key: "prevReview",
        value: function prevReview() {
          this.currentReviewIndex--;

          if (this.currentReviewIndex < 0) {
            this.currentReviewIndex = this.reviews.length - 1;
          }

          this.currentReview = this.reviews[this.currentReviewIndex];
        }
      }, {
        key: "getStars",
        value: function getStars() {
          return new Array(this.currentReview.rating);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('ExpediteReviewsComponent');
        }
      }]);

      return ExpediteReviewsComponent;
    }();

    ExpediteReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-expedite-reviews',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expedite-reviews.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/expedite-reviews/expedite-reviews.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expedite-reviews.component.scss */
      "./src/app/application/profile/payment-details/expedite-reviews/expedite-reviews.component.scss"))["default"]]
    })], ExpediteReviewsComponent);
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-add-expedite/payment-add-expedite.component.scss": function srcAppApplicationProfilePaymentDetailsPaymentAddExpeditePaymentAddExpediteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expedite-container {\n  padding: 0px;\n  max-width: 1127px;\n}\n\n@media (max-width: 991px) {\n  .expedite-container {\n    padding: 20px;\n  }\n}\n\n.expedite-main {\n  margin-bottom: 20px;\n}\n\n.expedite-fix {\n  margin-bottom: 0 !important;\n}\n\n.expedite-hr-wrapper {\n  padding: 0 20px;\n}\n\n@media (max-width: 991px) {\n  .expedite-hr-wrapper {\n    padding: 0 10px;\n  }\n}\n\n.expedite-hr {\n  border: none;\n  border-top: 1px solid #000;\n  margin: 0;\n}\n\n.expedite-padding {\n  padding: 20px;\n}\n\n@media (max-width: 991px) {\n  .expedite-padding {\n    padding: 20px 10px;\n  }\n}\n\n.expedite-header {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 20px;\n  background-color: #3B3445;\n  color: #fff;\n}\n\n.expedite-header--standard {\n  background-color: #e4e2e6 !important;\n  color: #3B3445;\n}\n\n.expedite-header-infoContainer {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\n\n.expedite-header-button {\n  grid-column: 1/span 2;\n}\n\n.expedite-header-img {\n  height: 100px;\n  width: auto;\n}\n\n.expedite-header-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.expedite-header-text-title {\n  font-size: clamp(1rem, 2.5vw, 1.5rem);\n  font-weight: 500;\n}\n\n.expedite-header-text-subtitle {\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n  font-weight: 400;\n}\n\n.expedite-header-price {\n  font-size: 1.6rem;\n  font-weight: bold;\n  display: inline;\n  margin: auto 0;\n}\n\n.expedite-offer {\n  background-color: #3B3445;\n  color: #fff;\n  text-align: center;\n}\n\n.expedite-offer-text {\n  background-color: #463E52;\n  border-radius: 15px;\n  padding: 30px;\n}\n\n.expedite-offer-text > img {\n  width: 60px;\n  height: auto;\n}\n\n@media (max-width: 991px) {\n  .expedite-offer-text > img {\n    width: 40px;\n  }\n}\n\n.expedite-offer-text-title {\n  color: #0E9CDC;\n  font-size: clamp(1.2rem, 2.5vw, 2rem);\n  line-height: 1.2;\n  font-weight: bold;\n  margin: 15px 0;\n}\n\n.expedite-offer-text-subtitle {\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n  font-weight: 400;\n}\n\n.expedite-standardButtons {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.expedite-standardButtons-info {\n  background-color: #E4E2E6;\n  color: #3B3445;\n  font-size: 1.1rem;\n  text-align: center;\n  font-weight: 500;\n  width: 100%;\n  border-radius: 15px;\n  padding: 15px;\n}\n\n.most-popular {\n  font-weight: bold;\n  background-color: #EF463F;\n  display: inline;\n  margin-left: 0rem;\n  padding: 10px 46px;\n  line-height: 36px;\n  color: #fff;\n  border-top-right-radius: 14px;\n  border-top-left-radius: 14px;\n}\n\n.txt-rush {\n  font-size: 0.9rem !important;\n}\n\n.txt-terms {\n  font-size: 0.9rem !important;\n}\n\n.premimum-box {\n  margin-top: -36px !important;\n  order: 1;\n}\n\n@media all and (max-width: 767px) {\n  .premimum-box {\n    order: 0;\n  }\n}\n\n.standard-box {\n  margin-bottom: 1rem;\n}\n\n.box-add-expedite {\n  color: #3B3445;\n  box-shadow: 0px 0px 10px #00000024;\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.box-add-expedite--premium {\n  border-top-left-radius: 0px;\n}\n\n.box-add-expedite h4 {\n  color: #373041;\n  float: center;\n  font-size: 1.8rem;\n  font-weight: 500;\n  padding-top: 20px;\n}\n\n.left-title {\n  padding-top: 9px !important;\n}\n\n.box-add-expedite .processing-price {\n  color: #ed4737;\n  font-size: 30px;\n  height: 30px;\n}\n\n@media all and (min-width: 767px) and (max-width: 991px) {\n  .expedite-col-txt {\n    min-height: 520px;\n  }\n}\n\n@media all and (min-width: 992px) and (max-width: 1299px) {\n  .expedite-col-txt {\n    min-height: 490px;\n  }\n}\n\n@media all and (min-width: 1300px) {\n  .expedite-col-txt {\n    min-height: 390px;\n  }\n}\n\n@media all and (max-width: 567px) {\n  .box-add-expedite .btn-primary {\n    font-size: 1.2rem;\n  }\n}\n\n.box-add-expedite .txt {\n  font-size: 1rem;\n}\n\n.box-add-expedite .txt-xs {\n  font-size: 1rem;\n}\n\n.text-black {\n  color: #000;\n}\n\n.li-standard {\n  list-style-image: url(\"/assets/li-circle.svg\");\n  list-style-position: inside;\n  margin-bottom: 12px;\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n}\n\n.li-standard::before {\n  content: \"\";\n  padding-right: 5px;\n  border-right: 10px solid transparent;\n}\n\n.box-add-expedite li.li-left {\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n  margin-bottom: 12px;\n  padding-left: 40px;\n  background: transparent url(\"/assets/icon-check-blue.svg\") 2px center no-repeat !important;\n  background-size: 18px;\n  display: flex;\n  align-items: center;\n  min-height: 25px;\n}\n\n.box-add-expedite li.li-left > i {\n  font-size: 1.2rem;\n  margin-left: 6px;\n}\n\n.box-add-expedite li.li-left--plus {\n  background: transparent url(\"/assets/add-blue.svg\") 2px center no-repeat !important;\n}\n\n.box-add-expedite li.li-left--exclusive {\n  background: transparent url(\"/assets/star-blue.svg\") 0px center no-repeat !important;\n  background-position: 0px center !important;\n  font-size: clamp(1.2rem, 2.5vw, 1.4rem);\n  font-weight: bold;\n  font-style: italic;\n  color: #000;\n}\n\n#priority-application-tooltip {\n  cursor: pointer;\n}\n\n.box-add-expedite li.li-right {\n  font-size: clamp(0.8rem, 2.5vw, 1rem);\n  margin-bottom: 8px;\n  padding-left: 30px;\n  background-size: 18px;\n}\n\n.expedite-body {\n  text-align: left;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.expedite-col {\n  text-align: center;\n}\n\n.expedite-btn {\n  margin-top: 20px;\n  background-color: transparent;\n  color: #fff;\n  font-size: clamp(0.6rem, 2.5vw, 1.2rem);\n  font-weight: 500;\n  width: 100%;\n  border-radius: 60px;\n  border: 1px solid transparent;\n  padding: 5px;\n}\n\n.expedite-btn:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.expedite-btn--premium {\n  background-color: #009CDC;\n}\n\n.expedite-btn--standard {\n  background-color: #f1f2f2;\n  border-color: #3B3445;\n  color: #3B3445;\n}\n\n.box-add-expedite .btn-primary {\n  background: #009CDC;\n  border-radius: 2px;\n}\n\n.btn-no-expedite {\n  background-color: transparent;\n  text-decoration: underline;\n  margin-top: 20px;\n  padding-top: 30px;\n  padding-bottom: 20px;\n  font-size: 1.1rem !important;\n}\n\n.btn-no-expedite:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS9wYXltZW50LWRldGFpbHMvcGF5bWVudC1hZGQtZXhwZWRpdGUvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFxhcHBsaWNhdGlvblxccHJvZmlsZVxccGF5bWVudC1kZXRhaWxzXFxwYXltZW50LWFkZC1leHBlZGl0ZVxccGF5bWVudC1hZGQtZXhwZWRpdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtYWRkLWV4cGVkaXRlL3BheW1lbnQtYWRkLWV4cGVkaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNJLGFBQUE7RUNDSjtBQUNGOztBRElFO0VBQ0UsbUJBQUE7QUNGSjs7QURJRTtFQUNFLDJCQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0FDSEo7O0FESUk7RUFGRjtJQUdJLGVBQUE7RUNESjtBQUNGOztBRElFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQ0ZKOztBREtFO0VBQ0UsYUFBQTtBQ0hKOztBRElJO0VBRkY7SUFHSSxrQkFBQTtFQ0RKO0FBQ0Y7O0FESUU7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0k7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNITjs7QURNSTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7QUNKTjs7QURPSTtFQUVFLHFCQUFBO0FDTk47O0FEU0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ1BOOztBRFVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNSTjs7QURTTTtFQUVFLHFDQUFBO0VBQ0EsZ0JBQUE7QUNSUjs7QURVTTtFQUVFLHFDQUFBO0VBQ0EsZ0JBQUE7QUNUUjs7QURhSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1hOOztBRGVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNiSjs7QURjSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDWk47O0FEY007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1pSOztBRGNRO0VBSkY7SUFLSSxXQUFBO0VDWFI7QUFDRjs7QURhTTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDWFI7O0FEYU07RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0FDWFI7O0FEZ0JFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDZEo7O0FEZ0JJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2ROOztBRHFCQTtFQUNFLGlCQUFBO0VBQ0QseUJBQUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNsQkY7O0FEcUJBO0VBQ0ksNEJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksNEJBQUE7QUNsQko7O0FEcUJBO0VBQ0UsNEJBQUE7RUFDQSxRQUFBO0FDbEJGOztBRG9CRTtFQUpGO0lBS0ksUUFBQTtFQ2pCRjtBQUNGOztBRG9CQTtFQUNFLG1CQUFBO0FDakJGOztBRG9CQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pCRjs7QURtQkU7RUFDRSwyQkFBQTtBQ2pCSjs7QURxQkE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSwyQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0k7SUFDSSxpQkFBQTtFQ2xCTjtBQUNGOztBRHFCQTtFQUNJO0lBQ0ksaUJBQUE7RUNuQk47QUFDRjs7QURzQkE7RUFDSTtJQUNJLGlCQUFBO0VDcEJOO0FBQ0Y7O0FEdUJBO0VBQ0k7SUFDSSxpQkFBQTtFQ3JCTjtBQUNGOztBRHdCQTtFQUNDLGVBQUE7QUN0QkQ7O0FEeUJBO0VBQ0MsZUFBQTtBQ3RCRDs7QUR5QkE7RUFDQyxXQUFBO0FDdEJEOztBRHlCQTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FDdEJGOztBRHdCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDdEJKOztBRDJCQTtFQUNDLHFDQUFBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBGQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQzFCRjs7QUQ0QkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDMUJKOztBRDZCRTtFQUNFLG1GQUFBO0FDM0JKOztBRDhCRTtFQUNFLG9GQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDNUJKOztBRGdDQTtFQUNFLGVBQUE7QUM3QkY7O0FEZ0NBO0VBQ0MscUNBQUE7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUM3Qko7O0FEZ0NBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDN0JKOztBRGdDQTtFQUNJLGtCQUFBO0FDN0JKOztBRGdDQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQzdCRjs7QUQrQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQzdCSjs7QURnQ0U7RUFDRSx5QkFBQTtBQzlCSjs7QURpQ0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQy9CSjs7QURtQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDaENKOztBRG1DQTtFQUNDLDZCQUFBO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQ2hDRjs7QURtQ0E7RUFDQywwQkFBQTtBQ2hDRCIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtYWRkLWV4cGVkaXRlL3BheW1lbnQtYWRkLWV4cGVkaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVkaXRlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMTI3cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZXhwZWRpdGUtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cblxuLy8gTkVXXG4uZXhwZWRpdGUge1xuICAmLW1haW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgJi1maXgge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gICYtaHItd3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICYtaHIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAmLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgJi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0IzNDQ1O1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJi0tc3RhbmRhcmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTJlNiAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMzQjM0NDU7XG4gICAgfVxuXG4gICAgJi1pbmZvQ29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICAgICAgY29sdW1uLWdhcDogMjBweDtcbiAgICB9XG5cbiAgICAmLWJ1dHRvbiB7XG4gICAgICAvLyBzcGFuIDJcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICAgIH1cblxuICAgICYtaW1nIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICYtdGl0bGUge1xuICAgICAgICAvLyBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgMS41cmVtKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgICYtc3VidGl0bGUge1xuICAgICAgICAvLyBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1wcmljZSB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgfVxuICB9XG5cbiAgJi1vZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCMzQ0NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJi10ZXh0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjNFNTI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgcGFkZGluZzogMzBweDtcblxuICAgICAgJiA+IGltZyB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYtdGl0bGUge1xuICAgICAgICBjb2xvcjogIzBFOUNEQztcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAycmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgfVxuICAgICAgJi1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1zdGFuZGFyZEJ1dHRvbnMge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAmLWluZm8ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTJFNjtcbiAgICAgIGNvbG9yOiAjM0IzNDQ1O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cbn1cbi8vLS0tLS0tXG5cblxuLm1vc3QtcG9wdWxhciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NjNGO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICBwYWRkaW5nOiAxMHB4IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE0cHg7XG59XG5cbi50eHQtcnVzaCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW0haW1wb3J0YW50O1xufVxuXG4udHh0LXRlcm1zIHtcbiAgICBmb250LXNpemU6IDAuOXJlbSFpbXBvcnRhbnQ7XG59XG5cbi5wcmVtaW11bS1ib3gge1xuICBtYXJnaW4tdG9wOiAtMzZweCFpbXBvcnRhbnQ7XG4gIG9yZGVyOiAxO1xuXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgb3JkZXI6IDA7XG4gIH1cbn1cblxuLnN0YW5kYXJkLWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5ib3gtYWRkLWV4cGVkaXRlIHtcbiAgY29sb3I6ICMzQjM0NDU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMjQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAmLS1wcmVtaXVtIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIH1cbn1cblxuLmJveC1hZGQtZXhwZWRpdGUgaDQge1xuICAgIGNvbG9yOiAjMzczMDQxO1xuICAgIGZsb2F0OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxlZnQtdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA5cHghaW1wb3J0YW50O1xufVxuXG4uYm94LWFkZC1leHBlZGl0ZSAucHJvY2Vzc2luZy1wcmljZSB7XG4gICAgY29sb3I6ICNlZDQ3Mzc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5leHBlZGl0ZS1jb2wtdHh0IHtcbiAgICAgICAgbWluLWhlaWdodDogNTIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCkgIGFuZCAobWF4LXdpZHRoOiAxMjk5cHgpIHtcbiAgICAuZXhwZWRpdGUtY29sLXR4dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ5MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgLmV4cGVkaXRlLWNvbC10eHQge1xuICAgICAgICBtaW4taGVpZ2h0OiAzOTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gICAgLmJveC1hZGQtZXhwZWRpdGUgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxufVxuXG4uYm94LWFkZC1leHBlZGl0ZSAudHh0IHtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4uYm94LWFkZC1leHBlZGl0ZSAudHh0LXhzIHtcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4udGV4dC1ibGFjayB7XG5cdGNvbG9yOiAjMDAwO1xufVxuXG4ubGktc3RhbmRhcmQge1xuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy9hc3NldHMvbGktY2lyY2xlLnN2ZycpO1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuXG4uYm94LWFkZC1leHBlZGl0ZSBsaS5saS1sZWZ0IHtcblx0Zm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDIuNXZ3LCAxcmVtKTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIvYXNzZXRzL2ljb24tY2hlY2stYmx1ZS5zdmdcIikgMnB4IGNlbnRlciBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWluLWhlaWdodDogMjVweDtcblxuICAmID4gaSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgfVxuXG4gICYtLXBsdXMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi9hc3NldHMvYWRkLWJsdWUuc3ZnXCIpIDJweCBjZW50ZXIgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLS1leGNsdXNpdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi9hc3NldHMvc3Rhci1ibHVlLnN2Z1wiKSAwcHggY2VudGVyIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDEuNHJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG59XG5cbiNwcmlvcml0eS1hcHBsaWNhdGlvbi10b29sdGlwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94LWFkZC1leHBlZGl0ZSBsaS5saS1yaWdodCB7XG5cdGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHg7XG59XG5cbi5leHBlZGl0ZS1ib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leHBlZGl0ZS1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4cGVkaXRlLWJ0biB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjZyZW0sIDIuNXZ3LCAxLjJyZW0pO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDVweDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi0tcHJlbWl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOUNEQztcbiAgfVxuXG4gICYtLXN0YW5kYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYyO1xuICAgIGJvcmRlci1jb2xvcjogIzNCMzQ0NTtcbiAgICBjb2xvcjogIzNCMzQ0NTtcbiAgfVxufVxuXG4uYm94LWFkZC1leHBlZGl0ZSAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICMwMDlDREM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuLW5vLWV4cGVkaXRlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtIWltcG9ydGFudDtcbn1cblxuLmJ0bi1uby1leHBlZGl0ZTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cblxuIiwiLmV4cGVkaXRlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMTI3cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZXhwZWRpdGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uZXhwZWRpdGUtbWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZXhwZWRpdGUtZml4IHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmV4cGVkaXRlLWhyLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmV4cGVkaXRlLWhyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxufVxuLmV4cGVkaXRlLWhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgbWFyZ2luOiAwO1xufVxuLmV4cGVkaXRlLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5leHBlZGl0ZS1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cbn1cbi5leHBlZGl0ZS1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBnYXA6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjM0NDU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmV4cGVkaXRlLWhlYWRlci0tc3RhbmRhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlMmU2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM0IzNDQ1O1xufVxuLmV4cGVkaXRlLWhlYWRlci1pbmZvQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgY29sdW1uLWdhcDogMjBweDtcbn1cbi5leHBlZGl0ZS1oZWFkZXItYnV0dG9uIHtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xufVxuLmV4cGVkaXRlLWhlYWRlci1pbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5leHBlZGl0ZS1oZWFkZXItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmV4cGVkaXRlLWhlYWRlci10ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgMS41cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5leHBlZGl0ZS1oZWFkZXItdGV4dC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZXhwZWRpdGUtaGVhZGVyLXByaWNlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuLmV4cGVkaXRlLW9mZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNCMzQ0NTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5leHBlZGl0ZS1vZmZlci10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2M0U1MjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5leHBlZGl0ZS1vZmZlci10ZXh0ID4gaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZXhwZWRpdGUtb2ZmZXItdGV4dCA+IGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cbi5leHBlZGl0ZS1vZmZlci10ZXh0LXRpdGxlIHtcbiAgY29sb3I6ICMwRTlDREM7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMnJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5leHBlZGl0ZS1vZmZlci10ZXh0LXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDIuNXZ3LCAxcmVtKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5leHBlZGl0ZS1zdGFuZGFyZEJ1dHRvbnMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmV4cGVkaXRlLXN0YW5kYXJkQnV0dG9ucy1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTJFNjtcbiAgY29sb3I6ICMzQjM0NDU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubW9zdC1wb3B1bGFyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRjQ2M0Y7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIHBhZGRpbmc6IDEwcHggNDZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTRweDtcbn1cblxuLnR4dC1ydXNoIHtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbn1cblxuLnR4dC10ZXJtcyB7XG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wcmVtaW11bS1ib3gge1xuICBtYXJnaW4tdG9wOiAtMzZweCAhaW1wb3J0YW50O1xuICBvcmRlcjogMTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wcmVtaW11bS1ib3gge1xuICAgIG9yZGVyOiAwO1xuICB9XG59XG5cbi5zdGFuZGFyZC1ib3gge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYm94LWFkZC1leHBlZGl0ZSB7XG4gIGNvbG9yOiAjM0IzNDQ1O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDI0O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYm94LWFkZC1leHBlZGl0ZS0tcHJlbWl1bSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLmJveC1hZGQtZXhwZWRpdGUgaDQge1xuICBjb2xvcjogIzM3MzA0MTtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubGVmdC10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cblxuLmJveC1hZGQtZXhwZWRpdGUgLnByb2Nlc3NpbmctcHJpY2Uge1xuICBjb2xvcjogI2VkNDczNztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmV4cGVkaXRlLWNvbC10eHQge1xuICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyOTlweCkge1xuICAuZXhwZWRpdGUtY29sLXR4dCB7XG4gICAgbWluLWhlaWdodDogNDkwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuZXhwZWRpdGUtY29sLXR4dCB7XG4gICAgbWluLWhlaWdodDogMzkwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5ib3gtYWRkLWV4cGVkaXRlIC5idG4tcHJpbWFyeSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbi5ib3gtYWRkLWV4cGVkaXRlIC50eHQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5ib3gtYWRkLWV4cGVkaXRlIC50eHQteHMge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5saS1zdGFuZGFyZCB7XG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIi9hc3NldHMvbGktY2lyY2xlLnN2Z1wiKTtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMi41dncsIDFyZW0pO1xufVxuLmxpLXN0YW5kYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmJveC1hZGQtZXhwZWRpdGUgbGkubGktbGVmdCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiL2Fzc2V0cy9pY29uLWNoZWNrLWJsdWUuc3ZnXCIpIDJweCBjZW50ZXIgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cbi5ib3gtYWRkLWV4cGVkaXRlIGxpLmxpLWxlZnQgPiBpIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4uYm94LWFkZC1leHBlZGl0ZSBsaS5saS1sZWZ0LS1wbHVzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiL2Fzc2V0cy9hZGQtYmx1ZS5zdmdcIikgMnB4IGNlbnRlciBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cbi5ib3gtYWRkLWV4cGVkaXRlIGxpLmxpLWxlZnQtLWV4Y2x1c2l2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi9hc3NldHMvc3Rhci1ibHVlLnN2Z1wiKSAwcHggY2VudGVyIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS40cmVtKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMwMDA7XG59XG5cbiNwcmlvcml0eS1hcHBsaWNhdGlvbi10b29sdGlwIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94LWFkZC1leHBlZGl0ZSBsaS5saS1yaWdodCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAyLjV2dywgMXJlbSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHg7XG59XG5cbi5leHBlZGl0ZS1ib2R5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhwZWRpdGUtY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXhwZWRpdGUtYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGNsYW1wKDAuNnJlbSwgMi41dncsIDEuMnJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmV4cGVkaXRlLWJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmV4cGVkaXRlLWJ0bi0tcHJlbWl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlDREM7XG59XG4uZXhwZWRpdGUtYnRuLS1zdGFuZGFyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjI7XG4gIGJvcmRlci1jb2xvcjogIzNCMzQ0NTtcbiAgY29sb3I6ICMzQjM0NDU7XG59XG5cbi5ib3gtYWRkLWV4cGVkaXRlIC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMwMDlDREM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1uby1leHBlZGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLW5vLWV4cGVkaXRlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-add-expedite/payment-add-expedite.component.ts": function srcAppApplicationProfilePaymentDetailsPaymentAddExpeditePaymentAddExpediteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentAddExpediteComponent", function () {
      return PaymentAddExpediteComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _profile_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../profile-form.service */
    "./src/app/application/profile/profile-form.service.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

    var PaymentAddExpediteComponent = /*#__PURE__*/function () {
      function PaymentAddExpediteComponent(uiService, profileFormService, formBuilder) {
        _classCallCheck(this, PaymentAddExpediteComponent);

        this.uiService = uiService;
        this.profileFormService = profileFormService;
        this.formBuilder = formBuilder;
        this.dataReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.propertyInfoReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.addExpediteApplication = false;
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultValues();
        this.listenToPropertyInformation();
        this.listenToSetup();
        this.listenForFormValidation();
      }

      _createClass(PaymentAddExpediteComponent, [{
        key: "info",
        set: function set(info$) {
          var _this22 = this;

          info$.subscribe(function (info) {
            if (_this22.data = info) {
              _this22.dataReady$.next(true);
            }
          });
        }
        /**
         * Listen for the property information.
         *
         * The other one if we are resuming an application
         */

      }, {
        key: "listenToPropertyInformation",
        value: function listenToPropertyInformation() {
          var _this23 = this;

          this.profileFormService.propertyInfo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (info) {
            return !!info;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this23.propertyInfo = info;

            _this23.propertyInfoReady$.next(true);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.subscribeToFormChanges();
          this.formReady$.next(true);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!window.tippy) return;
          window.tippy('#priority-application-tooltip', {
            theme: 'tenant',
            content: 'Same-day processing time depends on how soon documentation and information provided by the applicant is received.'
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var agreeValidator = this.setupHasFee() ? _shared_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].agreeValidator() : null;
          this.childForm = this.formBuilder.group({
            addExpediteApplication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "defaultValues",
        value: function defaultValues() {
          var _this24 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.formReady$, this.propertyInfoReady$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            if (_this24.propertyInfo.rushProcessingPrice === 0) {
              _this24.childForm.controls['addExpediteApplication'].setValue('no');
            }
          });
        }
      }, {
        key: "setupHasFee",
        value: function setupHasFee() {
          return this.setup.applicationFee > 0;
        }
      }, {
        key: "listenToSetup",
        value: function listenToSetup() {
          var _this25 = this;

          this.profileFormService.setup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this25.setup = info;
          });
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          var errors = this.childForm.controls[controlName].errors;
          return this.uiService.getControlError(errors);
        }
      }, {
        key: "listenForFormValidation",
        value: function listenForFormValidation() {
          var _this26 = this;

          this.profileFormService.validateForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            return _this26.markControlsAsTouched();
          });
        }
      }, {
        key: "markControlsAsTouched",
        value: function markControlsAsTouched() {
          this.uiService.markControlsAsTouched(this.childForm);
        }
      }, {
        key: "continueWithExpedite",
        value: function continueWithExpedite() {
          this.childForm.controls['addExpediteApplication'].setValue('yes');
          window.scrollTo(0, 0);
        }
      }, {
        key: "continueWithoutExpedite",
        value: function continueWithoutExpedite() {
          var _this27 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            customClass: 'confirm-remove-expedite-modal',
            title: 'We process all the applications in the order they come.',
            type: 'info',
            html: 'Please note due to high volume of applications, the completion of your report could take longer than usual.',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: true,
            confirmButtonText: 'Add Quick Pass',
            cancelButtonText: 'I don\'t want Quick Pass',
            confirmButtonClass: 'tev-btn tev-btn--block tev-btn--primary tev-btn--large',
            cancelButtonClass: 'tev-btn tev-btn--block tev-btn--large',
            buttonsStyling: false,
            animation: false
          }).then(function (result) {
            if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.close) {
              // Close popup only
              _this27.childForm.controls['addExpediteApplication'].setValue('no');
            } else {
              _this27.childForm.controls['addExpediteApplication'].setValue(result.value ? 'yes' : 'no');
            }

            window.scrollTo(0, 0);
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (!this.childForm.valid) {
            this.markControlsAsTouched();
          }
        }
      }, {
        key: "subscribeToFormChanges",
        value: function subscribeToFormChanges() {
          var _this28 = this;

          var addExpediteApplication = this.childForm.controls.addExpediteApplication;
          this.childForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (status) {
            if ('VALID' === status) {
              _this28.formChanged.emit(_this28.childForm.value);
            } else {
              _this28.formChanged.emit(null);
            }
          });
          addExpediteApplication.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (value) {
            _this28.addExpediteApplication = value === 'yes';
          });
          this.childForm.updateValueAndValidity();
          addExpediteApplication.updateValueAndValidity();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next(true);
        }
      }]);

      return PaymentAddExpediteComponent;
    }();

    PaymentAddExpediteComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]
      }, {
        type: _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])], PaymentAddExpediteComponent.prototype, "info", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], PaymentAddExpediteComponent.prototype, "formChanged", void 0);
    PaymentAddExpediteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-payment-add-expedite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-add-expedite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-add-expedite/payment-add-expedite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-add-expedite.component.scss */
      "./src/app/application/profile/payment-details/payment-add-expedite/payment-add-expedite.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"], _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], PaymentAddExpediteComponent);
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-details.module.ts": function srcAppApplicationProfilePaymentDetailsPaymentDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDetailsModule", function () {
      return PaymentDetailsModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment-details/payment-details.component */
    "./src/app/application/profile/payment-details/payment-details/payment-details.component.ts");
    /* harmony import */


    var _credit_card_info_credit_card_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./credit-card-info/credit-card-info.component */
    "./src/app/application/profile/payment-details/credit-card-info/credit-card-info.component.ts");
    /* harmony import */


    var _payment_summary_payment_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-summary/payment-summary.component */
    "./src/app/application/profile/payment-details/payment-summary/payment-summary.component.ts");
    /* harmony import */


    var _agreement_signature_agreement_signature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./agreement-signature/agreement-signature.component */
    "./src/app/application/profile/payment-details/agreement-signature/agreement-signature.component.ts");
    /* harmony import */


    var _payment_add_expedite_payment_add_expedite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./payment-add-expedite/payment-add-expedite.component */
    "./src/app/application/profile/payment-details/payment-add-expedite/payment-add-expedite.component.ts");
    /* harmony import */


    var _expedite_reviews_expedite_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./expedite-reviews/expedite-reviews.component */
    "./src/app/application/profile/payment-details/expedite-reviews/expedite-reviews.component.ts");
    /* harmony import */


    var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/services/script.service */
    "./src/app/shared/services/script.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var PaymentDetailsModule = function PaymentDetailsModule() {
      _classCallCheck(this, PaymentDetailsModule);
    };

    PaymentDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"]],
      declarations: [_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsComponent"], _credit_card_info_credit_card_info_component__WEBPACK_IMPORTED_MODULE_4__["CreditCardInfoComponent"], _payment_summary_payment_summary_component__WEBPACK_IMPORTED_MODULE_5__["PaymentSummaryComponent"], _agreement_signature_agreement_signature_component__WEBPACK_IMPORTED_MODULE_6__["AgreementSignatureComponent"], _payment_add_expedite_payment_add_expedite_component__WEBPACK_IMPORTED_MODULE_7__["PaymentAddExpediteComponent"], _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsDialog"], _expedite_reviews_expedite_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ExpediteReviewsComponent"]],
      exports: [_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsComponent"]],
      providers: [_shared_services_script_service__WEBPACK_IMPORTED_MODULE_9__["ScriptService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      entryComponents: [_payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsDialog"]]
    })], PaymentDetailsModule);
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-details/payment-details.component.scss": function srcAppApplicationProfilePaymentDetailsPaymentDetailsPaymentDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".paymentDetails-header {\n  margin-bottom: 40px;\n}\n@media (max-width: 991px) {\n  .paymentDetails-header {\n    margin-top: 1rem;\n    margin-bottom: 10px;\n  }\n}\n.paymentDetails-header-container {\n  color: #4d445a;\n  padding: 30px;\n  text-align: center;\n  border-radius: 15px;\n}\n.paymentDetails-header-title {\n  font-size: clamp(18px, 5vw, 45px);\n  line-height: clamp(18px, 5vw, 45px);\n  font-weight: 400;\n}\n.paymentDetails-header-subtitle {\n  margin-top: 10px;\n  font-size: clamp(12px, 3vw, 20px);\n  line-height: clamp(12px, 3vw, 20px);\n  font-weight: 400;\n}\n.paymentDetails-header-quickPass {\n  font-weight: bold;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcYXBwbGljYXRpb25cXHByb2ZpbGVcXHBheW1lbnQtZGV0YWlsc1xccGF5bWVudC1kZXRhaWxzXFxwYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQUU7RUFGRjtJQUdJLGdCQUFBO0lBQ0EsbUJBQUE7RUNHRjtBQUNGO0FEREU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREFFO0VBQ0UsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDRUo7QURDRTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudERldGFpbHMtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgJi1jb250YWluZXIgIHtcbiAgICBjb2xvcjogIzRkNDQ1YTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cbiAgJi10aXRsZSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCA1dncsIDQ1cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxOHB4LCA1dncsIDQ1cHgpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAmLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgM3Z3LCAyMHB4KTtcbiAgICBsaW5lLWhlaWdodDogY2xhbXAoMTJweCwgM3Z3LCAyMHB4KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgJi1xdWlja1Bhc3Mge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxufVxuIiwiLnBheW1lbnREZXRhaWxzLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBheW1lbnREZXRhaWxzLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4ucGF5bWVudERldGFpbHMtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjNGQ0NDVhO1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ucGF5bWVudERldGFpbHMtaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxOHB4LCA1dncsIDQ1cHgpO1xuICBsaW5lLWhlaWdodDogY2xhbXAoMThweCwgNXZ3LCA0NXB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYXltZW50RGV0YWlscy1oZWFkZXItc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IGNsYW1wKDEycHgsIDN2dywgMjBweCk7XG4gIGxpbmUtaGVpZ2h0OiBjbGFtcCgxMnB4LCAzdncsIDIwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnBheW1lbnREZXRhaWxzLWhlYWRlci1xdWlja1Bhc3Mge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-details/payment-details.component.ts": function srcAppApplicationProfilePaymentDetailsPaymentDetailsPaymentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDetailsComponent", function () {
      return PaymentDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDetailsDialog", function () {
      return PaymentDetailsDialog;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../profile-form.service */
    "./src/app/application/profile/profile-form.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var PaymentDetailsComponent = /*#__PURE__*/function () {
      function PaymentDetailsComponent(formBuilder, profileFormService, router, uiService, location, dialog) {
        _classCallCheck(this, PaymentDetailsComponent);

        this.formBuilder = formBuilder;
        this.profileFormService = profileFormService;
        this.router = router;
        this.uiService = uiService;
        this.location = location;
        this.dialog = dialog;
        this.paymentInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.paymentInfo = null;
        this.paymentAgree$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.expediteApplication = false;
        this.processing = false;
        this.expediteSelected = false;
        this.activeMilitary = false;
        this.addExpediteApplication = false;
        this.billingName = '';
        this.propertyInfoReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.addExpediteApplication$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.addExpediteApplication);
        this.expediteApplication$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.expediteApplication);
        this.applicationTotal$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loading_text = 'Processing your payment....';
        this.listenToApplicationParams();
        this.listenToSetup();
        this.calculateApplicationTotal();
        this.listenToPropertyInfo();
        this.listenToThemeValues();
      }

      _createClass(PaymentDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paymentProcessor = this.setup.paymentProcessor;
          this.initForm();
        }
      }, {
        key: "listenToThemeValues",
        value: function listenToThemeValues() {
          var _this29 = this;

          this.uiService.smallLogo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (value) {
            return _this29.smallLogo = "url(".concat(value, ")");
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this30 = this;

          this.processing = false;
          var dialogRef = this.dialog.open(PaymentDetailsDialog, {
            panelClass: 'fit-dialog'
          });
          var instance = dialogRef.componentInstance;
          instance['dialogTitle'] = this.errorTitle;
          instance['dialogText'] = this.errorMessage;
          dialogRef.afterClosed().subscribe(function () {
            _this30.uiService.clearCurrentToastr();
          });
        }
      }, {
        key: "listenToApplicationParams",
        value: function listenToApplicationParams() {
          var _this31 = this;

          this.profileFormService.applicationParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(function (params) {
            return !!params;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (params) {
            var coApplicantType = params.coApplicantType,
                code = params.code,
                applicationType = params.applicationType;
            _this31.code = code;
            _this31.type = applicationType;
            _this31.coApplicantType = coApplicantType;
          });
        }
      }, {
        key: "listenToSetup",
        value: function listenToSetup() {
          var _this32 = this;

          this.profileFormService.setup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (setup) {
            return _this32.setup = setup;
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.stepForm = this.formBuilder.group({
            paymentInfo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentExpedite: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentAgree: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.subscribeToMainFormChanges();
        }
      }, {
        key: "billingNameChanged",
        value: function billingNameChanged(name) {
          this.billingName = name;
        }
      }, {
        key: "paymentInfoChanged",
        value: function paymentInfoChanged(data) {
          this.paymentInfo = data;
          this.saveData('paymentInfo', data);
        }
      }, {
        key: "paymentAgreeChanged",
        value: function paymentAgreeChanged(data) {
          this.saveData('paymentAgree', data);
        }
      }, {
        key: "paymentAddExpediteChanged",
        value: function paymentAddExpediteChanged(data) {
          if (!!data) {
            this.expediteSelected = true;
            this.addExpediteApplication = data.addExpediteApplication === 'yes';
            this.addExpediteApplication$.next(this.addExpediteApplication);
          } //this.saveData<PaymentAddExpedite>('paymentExpedite', data);

        }
      }, {
        key: "paymentExpediteChanged",
        value: function paymentExpediteChanged(data) {
          if (!!data) {
            this.expediteApplication = data.expediteApplication === 'yes';
            this.expediteApplication$.next(this.expediteApplication);
          }

          this.saveData('paymentExpedite', data);
        }
      }, {
        key: "emitMainFormValues",
        value: function emitMainFormValues() {
          var paymentDetails = this.mainFormValues.paymentDetails;

          if (paymentDetails) {
            var paymentAgree = paymentDetails.paymentAgree,
                paymentInfo = paymentDetails.paymentInfo;

            if (paymentInfo) {
              this.paymentInfo$.next(paymentInfo);
            }

            if (paymentAgree) {
              this.paymentAgree$.next(paymentAgree);
            }
          }
        }
      }, {
        key: "saveData",
        value: function saveData(controlName, data) {
          this.stepForm.controls[controlName].setValue(data);
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this33 = this;

            var tokenResult;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.stepForm.valid) {
                      _context2.next = 10;
                      break;
                    }

                    this.processing = true;

                    if (!this.squareCard) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 5;
                    return this.squareCard.tokenize();

                  case 5:
                    tokenResult = _context2.sent;

                    if (tokenResult && tokenResult.status === 'OK') {
                      if (this.paymentInfo) {
                        this.paymentInfo.squareToken = tokenResult.token;
                      } else {
                        this.paymentInfo = {
                          address1: '',
                          addressNotInUsa: false,
                          city: '',
                          creditCard: '',
                          creditCardCvv: '',
                          creditCardExp: '',
                          name: '',
                          state: '',
                          zip: '',
                          squareToken: tokenResult.token
                        };
                      }
                    } else {
                      this.processing = false;

                      if (this.applicationTotal && this.applicationTotal > 0) {
                        this.uiService.showError({
                          title: 'Invalid data',
                          message: 'Missing credit card details',
                          removeCurrent: true
                        });
                      }
                    }

                  case 7:
                    if (!this.squareCard || tokenResult && tokenResult.status === 'OK' || this.applicationTotal == 0) {
                      this.profileFormService.makeApplicationRequest(this.stepForm.value).subscribe(function (applicationResponse) {
                        _this33.uiService.showSuccess({
                          title: 'Success',
                          message: 'Payment Successful',
                          removeCurrent: true
                        });

                        var nextFullPath = '';

                        switch (_this33.propertyInfo.shortApplication) {
                          case 'SHORT':
                            nextFullPath = "/dashboard/".concat(applicationResponse.applicationId, "/profile-success-dashboard");
                            break;

                          default:
                            nextFullPath = "/dashboard/".concat(applicationResponse.applicationId, "/profile-success");
                        }

                        _this33.router.navigate([nextFullPath])["catch"](console.log);
                      }, function (httpError) {
                        var error = httpError.error;
                        _this33.errorTitle = 'Payment failed';
                        _this33.errorMessage = error.title === 'Do not honor' ? 'Do not honor, payment not approved. Please try with another credit card or contact your financial institution.' : error.title;

                        switch (_this33.setup.paymentProcessor) {
                          case 'SquareTransfirst':
                            _this33.paymentProcessor = 'Transfirst';
                            break;

                          case 'TransfirstSquare':
                            _this33.paymentProcessor = 'Square';
                            break;
                        }

                        _this33.openDialog();
                      });
                    }

                    _context2.next = 12;
                    break;

                  case 10:
                    this.processing = false;
                    this.profileFormService.validateForm();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "subscribeToMainFormChanges",
        value: function subscribeToMainFormChanges() {
          var _this34 = this;

          this.profileFormService.formValues$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (data) {
            // Disable Expedite
            if (data.personalInfo.militaryInfo.activeMilitary == 'yes') {
              _this34.activeMilitary = true;
            }

            if (_this34.mainFormValues = data) {
              _this34.emitMainFormValues();
            }
          });
        }
      }, {
        key: "listenToPropertyInfo",
        value: function listenToPropertyInfo() {
          var _this35 = this;

          this.profileFormService.propertyInfo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (propertyInfo) {
            _this35.propertyInfo = propertyInfo;

            _this35.propertyInfoReady$.next(true);
          });
        }
      }, {
        key: "getApplicationTotalValue",
        value: function getApplicationTotalValue() {
          var total = 0;

          if (this.setup) {
            total += this.setup.applicationFee;
          }

          if (this.expediteApplication) {
            total += this.propertyInfo.rushProcessingPrice;
          }

          return total;
        }
      }, {
        key: "calculateApplicationTotal",
        value: function calculateApplicationTotal() {
          var _this36 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.expediteApplication$, this.propertyInfoReady$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            _this36.applicationTotal = _this36.getApplicationTotalValue();

            _this36.applicationTotal$.next(_this36.applicationTotal);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next(true);
        }
      }, {
        key: "inputSquareCard",
        value: function inputSquareCard(squareCard) {
          this.squareCard = squareCard;
        }
      }]);

      return PaymentDetailsComponent;
    }();

    PaymentDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_7__["UiService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
      }];
    };

    PaymentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-payment-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-details/payment-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-details.component.scss */
      "./src/app/application/profile/payment-details/payment-details/payment-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_7__["UiService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])], PaymentDetailsComponent);

    var PaymentDetailsDialog = function PaymentDetailsDialog() {
      _classCallCheck(this, PaymentDetailsDialog);

      this.dialogTitle = '';
      this.dialogText = '';
    };

    PaymentDetailsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'payment-details-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-details.dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-details/payment-details.dialog.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PaymentDetailsDialog);
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-summary/payment-summary.component.scss": function srcAppApplicationProfilePaymentDetailsPaymentSummaryPaymentSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-inline {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS9wYXltZW50LWRldGFpbHMvcGF5bWVudC1zdW1tYXJ5L0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcYXBwbGljYXRpb25cXHByb2ZpbGVcXHBheW1lbnQtZGV0YWlsc1xccGF5bWVudC1zdW1tYXJ5XFxwYXltZW50LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtc3VtbWFyeS9wYXltZW50LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS9wYXltZW50LWRldGFpbHMvcGF5bWVudC1zdW1tYXJ5L3BheW1lbnQtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbiIsIi5idG4taW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/application/profile/payment-details/payment-summary/payment-summary.component.ts": function srcAppApplicationProfilePaymentDetailsPaymentSummaryPaymentSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentSummaryComponent", function () {
      return PaymentSummaryComponent;
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


    var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! numeral */
    "./node_modules/numeral/numeral.js");
    /* harmony import */


    var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _profile_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../profile-form.service */
    "./src/app/application/profile/profile-form.service.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

    var PaymentSummaryComponent = /*#__PURE__*/function () {
      function PaymentSummaryComponent(uiService, profileFormService, formBuilder) {
        _classCallCheck(this, PaymentSummaryComponent);

        this.uiService = uiService;
        this.profileFormService = profileFormService;
        this.formBuilder = formBuilder;
        this.dataReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.propertyInfoReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.applicationTotal$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.expediteApplication = false;
        this.addExpediteApplication$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.activeMilitary$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultValues();
        this.listenToPropertyInformation();
        this.listenToFeesAndDocs();
        this.listenToSetup();
        this.listenForFormValidation();
      }

      _createClass(PaymentSummaryComponent, [{
        key: "info",
        set: function set(info$) {
          var _this37 = this;

          info$.subscribe(function (info) {
            if (_this37.data = info) {
              _this37.dataReady$.next(true);
            }
          });
        }
      }, {
        key: "addExpediteApplication",
        get: function get() {
          return this._addExpediteApplication;
        },
        set: function set(addExpediteApplication) {
          this._addExpediteApplication = addExpediteApplication;
          this.addExpediteApplication$.next();
        }
      }, {
        key: "activeMilitary",
        get: function get() {
          return this._activeMilitary;
        }
        /**
         * Listen for the property information.
         *
         * The other one if we are resuming an application
         */
        ,
        set: function set(activeMilitary) {
          this._activeMilitary = activeMilitary;
          this.activeMilitary$.next();
        }
      }, {
        key: "listenToPropertyInformation",
        value: function listenToPropertyInformation() {
          var _this38 = this;

          this.profileFormService.propertyInfo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (info) {
            return !!info;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this38.propertyInfo = info;

            _this38.propertyInfoReady$.next(true);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.subscribeToFormChanges();
          this.formReady$.next(true);
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var agreeValidator = this.setupHasFee() ? _shared_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].agreeValidator() : null;
          this.childForm = this.formBuilder.group({
            expediteApplication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.childForm.controls['expediteApplication'].setValue(this.addExpediteApplication ? 'yes' : 'no');
        }
      }, {
        key: "defaultValues",
        value: function defaultValues() {
          var _this39 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.formReady$, this.propertyInfoReady$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            if (_this39.propertyInfo.rushProcessingPrice === 0) {
              _this39.childForm.controls['expediteApplication'].setValue('no');
            }
          });
        }
      }, {
        key: "setupHasFee",
        value: function setupHasFee() {
          return this.setup.applicationFee > 0;
        }
      }, {
        key: "addExpedite",
        value: function addExpedite() {
          this.expediteApplication = true;
          this.calculateApplicationTotal(); // Emit change to parent component

          var pe = {
            expediteApplication: "yes"
          };
          this.formChanged.emit(pe);
        }
      }, {
        key: "removeExpedite",
        value: function removeExpedite() {
          var _this40 = this;

          //TODO:uiService

          /*
              this.uiService.confirmAction({
                message: '',
                showCancel: false
              });
          */
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            customClass: 'confirm-remove-expedite-modal',
            title: 'We process all the applications in the order they come.',
            type: 'info',
            html: 'Please remember due to high volume of applications, the completion of your report could take longer than usual.',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: true,
            confirmButtonText: 'Keep Quick Pass',
            cancelButtonText: 'Remove Quick Pass',
            confirmButtonClass: 'tev-btn tev-btn--block tev-btn--primary tev-btn--large',
            cancelButtonClass: 'tev-btn tev-btn--block tev-btn--large',
            buttonsStyling: false,
            animation: false
          }).then(function (result) {
            if (!result.value) {
              _this40.expediteApplication = false;

              _this40.calculateApplicationTotal(); // Emit change to parent component


              var pe = {
                expediteApplication: "no"
              };

              _this40.formChanged.emit(pe);
            }
          });
        }
      }, {
        key: "listenToFeesAndDocs",
        value: function listenToFeesAndDocs() {
          var _this41 = this;

          this.profileFormService.feesAndDocUploadRequirements$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this41.feesAndDocs = info;
          });
        }
      }, {
        key: "getApplicationTotalValue",
        value: function getApplicationTotalValue() {
          var total = 0;

          if (this.setup) {
            total += this.setup.applicationFee;
          }

          if (this.expediteApplication) {
            total += this.propertyInfo.rushProcessingPrice;
          }

          return total;
        }
      }, {
        key: "calculateApplicationTotal",
        value: function calculateApplicationTotal() {
          this.applicationTotal = this.getApplicationTotalValue();
          this.applicationTotal$.next(this.applicationTotal);
        }
      }, {
        key: "listenToSetup",
        value: function listenToSetup() {
          var _this42 = this;

          this.profileFormService.setup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (info) {
            _this42.setup = info;
          });
        }
      }, {
        key: "getApplicationTotal",
        value: function getApplicationTotal() {
          var total = 0;

          if (this.setup) {
            total += this.setup.applicationFee;
          }

          return numeral__WEBPACK_IMPORTED_MODULE_2__(total).format('$0,0.00');
        }
      }, {
        key: "getError",
        value: function getError(controlName) {
          var errors = this.childForm.controls[controlName].errors;
          return this.uiService.getControlError(errors);
        }
      }, {
        key: "listenForFormValidation",
        value: function listenForFormValidation() {
          var _this43 = this;

          this.profileFormService.validateForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function () {
            return _this43.markControlsAsTouched();
          });
        }
      }, {
        key: "markControlsAsTouched",
        value: function markControlsAsTouched() {
          this.uiService.markControlsAsTouched(this.childForm);
        }
      }, {
        key: "submit",
        value: function submit() {
          if (!this.childForm.valid) {
            this.markControlsAsTouched();
          }
        }
      }, {
        key: "subscribeToFormChanges",
        value: function subscribeToFormChanges() {
          var _this44 = this;

          var expediteApplication = this.childForm.controls.expediteApplication;
          this.childForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (status) {
            if ('VALID' === status) {
              _this44.formChanged.emit(_this44.childForm.value);
            } else {
              _this44.formChanged.emit(null);
            }
          });
          expediteApplication.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribeSubject)).subscribe(function (value) {
            _this44.expediteApplication = value === 'yes';

            _this44.calculateApplicationTotal();
          });
          this.childForm.updateValueAndValidity();
          expediteApplication.updateValueAndValidity();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next(true);
        }
      }]);

      return PaymentSummaryComponent;
    }();

    PaymentSummaryComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: _profile_form_service__WEBPACK_IMPORTED_MODULE_5__["ProfileFormService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]])], PaymentSummaryComponent.prototype, "info", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], PaymentSummaryComponent.prototype, "formChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], PaymentSummaryComponent.prototype, "addExpediteApplication", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], PaymentSummaryComponent.prototype, "activeMilitary", null);
    PaymentSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-payment-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/payment-details/payment-summary/payment-summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-summary.component.scss */
      "./src/app/application/profile/payment-details/payment-summary/payment-summary.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"], _profile_form_service__WEBPACK_IMPORTED_MODULE_5__["ProfileFormService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], PaymentSummaryComponent);
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
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this45 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return new _shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"]().load('square').then(function () {
                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this45, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    var APPLICATION_ID, LOCATION_ID, paymentsSquare, cardPayment, cardOptions, getCardOptions;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
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
                            _context3.prev = 4;
                            cardOptions = getCardOptions();
                            _context3.next = 8;
                            return paymentsSquare.card(cardOptions);

                          case 8:
                            cardPayment = _context3.sent;
                            _context3.next = 11;
                            return cardPayment.attach('#card-container');

                          case 11:
                            _context3.next = 17;
                            break;

                          case 13:
                            _context3.prev = 13;
                            _context3.t0 = _context3["catch"](4);
                            console.error('Initializing Card failed', _context3.t0);
                            return _context3.abrupt("return");

                          case 17:
                            return _context3.abrupt("return", cardPayment);

                          case 18:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[4, 13]]);
                  }));
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }
    /***/

  }
}]);
//# sourceMappingURL=default~profile-profile-module~verifications-verifications-module-es5.js.map
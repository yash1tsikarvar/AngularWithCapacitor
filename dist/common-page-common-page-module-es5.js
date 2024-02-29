function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-page-common-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/refund-app/refund-app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppCommonPageRefundAppRefundAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid profile dashboard accordion-wrapper txt-purple\">\n  <div class=\"row mx-0 justify-content-center floating-labels form-bg-light\">\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-11 col-xl-8 px-0\">\n      <a href=\"\" class=\"back-link\">\n        <mat-icon>arrow_back</mat-icon>\n        BACK</a>\n\n      <div class=\"box-group\">\n        <h3 class=\"box-group__title\">\n          Cancel and refund your application\n        </h3>\n        <h4 class=\"mb-4\">Disclosure</h4>\n        <p class=\"box-group__text\">I authorize Tenant Evaluation LLC to credit my account. I also understand that the\n          refund will be the total amount paid minus the 10% convenience fee (credit card surcharge). ONLY the\n          Payee/Card Holder can request a refund and sign below.</p>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6 col-lg-6\">\n\n            <div class=\"form-label-group\">\n              <mat-form-field>\n                <input matInput\n                       type=\"text\"\n                       id=\"card-holder-name\"\n                       class=\"form-control\"\n                       placeholder=\"Card Holder's Name\"\n                       maxlength=\"80\"\n                >\n              </mat-form-field>\n\n            </div>\n\n          </div><!-- ./col -->\n        </div><!-- ./row -->\n        <form class=\"signature\">\n\n          <div class=\"signature__group\">\n            <label class=\"signature__label\">Card Holder's Signature</label>\n            <div class=\"signature-canvas\">\n\n              <span class=\"signature__float\">SIGN HERE</span>\n\n              <div class=\"signature-wrapper\">\n                <canvas id=\"signature-pad\" #signaturePad></canvas>\n              </div>\n\n              <div class=\"signature-text\">\n                <canvas id=\"signature-text\" #signatureText></canvas>\n\n              </div>\n            </div>\n            <input class=\"custom-control-input\"\n                   type=\"hidden\"\n            >\n          </div>\n\n          <div class=\"custom-checkbox\">\n            <mat-checkbox class=\"mat-checkbox--rounded\"\n                          type=\"checkbox\"\n                          id=\"agree\"\n            >I agree and authorize these terms and conditions\n            </mat-checkbox>\n          </div>\n        </form>\n      </div><!-- ./box-group -->\n\n      <div class=\"box-group\">\n        <h3 class=\"box-group__title\">\n          Refund Details\n        </h3>\n        <div class=\"payment-table\">\n\n          <div class=\"payment-table__row payment-table__row--head\">\n            <div class=\"payment-table__col payment-table__col--item\">\n              <h3 class=\"txt-all-caps txt-md column-title\">Application Fees</h3>\n            </div>\n            <div class=\"payment-table__col payment-table__col--price\">\n              <h3 class=\"txt-all-caps txt-md column-title\">Amount</h3>\n            </div>\n          </div>\n\n          <div class=\"payment-table__row\">\n            <ul class=\"payment-table__col payment-table__col--item\">\n              <li class=\"txt-xs\" >Application Fee</li>\n              <li class=\"txt-xs\" >10% Convenience Fee</li>\n            </ul>\n            <ul class=\"payment-table__col payment-table__col--price\">\n              <li class=\"txt-xs\">$100.00</li>\n              <li class=\"txt-xs\">$-10.00</li>\n            </ul>\n          </div>\n\n          <div class=\"payment-table__row payment-table__row--total\">\n            <div class=\"payment-table__col payment-table__col--item\">\n              <h3 class=\"txt-md\">Total TO BE REFUNDED</h3>\n            </div>\n            <div class=\"payment-table__col payment-table__col--price\">\n              <h3 class=\"txt-md\">$90.00</h3>\n            </div>\n          </div>\n        </div><!-- ./payment-table -->\n\n        <div class=\"py-4\">\n          <div class=\"foot-action\">\n            <button class=\"tev-btn tev-btn--primary tev-btn--large\">Submit</button>\n          </div>\n        </div>\n      </div><!-- ./box-group -->\n\n    </div><!-- ./col -->\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/terms-and-conditions/terms-and-conditions.component.html": function node_modulesRawLoaderDistCjsJsSrcAppCommonPageTermsAndConditionsTermsAndConditionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid main-content\">\n  <div class=\"row justify-content-sm-center\">\n    <div class=\"col-12 col-sm-10 col-md-8 col-lg-8 col-xl-6\">\n\n      <section class=\"agreement-content-box\">\n\n        <article>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n\n            </div>\n            <div class=\"col-6 text-right\">\n              <div class=\"main-icon-holder\">\n                <a href=\"#\" (click)=\"logOut($event)\" *ngIf=\"isAuthenticated\">Log Out</a>\n              </div>\n            </div>\n          </div>\n\n          <h1 class=\"txt-lg pt-3\">Terms & Conditions</h1>\n\n          <p class=\"txt-xs pt-3 txt-bold\">READ THESE TERMS AND CONDITIONS (“TC”) CAREFULLY, BECAUSE BY\n            APPLYING ONLINE, YOU ARE AGREEING TO BE BOUND BY THESE TERMS AND\n            CONDITIONS. IF YOU DO NOT AGREE TO ALL OF THESE TERMS AND\n            CONDITIONS OR DO NOT WISH TO BE BOUND BY THIS TC, DO NOT CONTINUE\n            WITH THIS APPLICATION.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">IDENTITY THEFT</p>\n\n          <p class=\"txt-xs pt-3\">Falsifying information and entering information other than your own (social security, address, or\n            other personal information) can be considered as identity theft. The Identity Theft Penalty\n            Enhancement Act signed into legislation in 2004 established identity theft as a federal crime. The\n            law sets the penalty for identity theft as up to 15 years in prison and as much as $250,000 in\n            fines.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">GENERAL</p>\n          <p class=\"txt-xs pt-3\">This TC governs the use of the on line application made available by or on behalf of Tenant\n            Evaluation, LLC (“TE”, “we”, “us” or “our”). For purposes of this TC, “OA” means such online\n            application, together with all components thereof and all payments, online document collection,\n            electronic signatures, final report, criminal data, credit reports, eviction reports, landlord\n            verifications, employment verifications and character verifications. For purposes of this TC, “The\n            Applicant” refers to such party applying or party applying on behlaf of the applicant with\n            provided Authorization from the Applicant, (“I”, “me”, “my”, “our”, “applicant”, “party”,\n            “signer”, “Consumer”) and the “End User” herby can be referred to as the Community or\n            Residence to which is being applied (“Community”, “Association”, “End User”, \"requester”,\n            “residence”, “property”).</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">RESTRICTIONS</p>\n          <p class=\"txt-xs pt-3\">In addition, except as specifically provided in https://tenantevaluation.com, you are not\n            permitted to modify or otherwise circumvent the operation of the OA.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">CHANGE IN POLICIES</p>\n          <p class=\"txt-xs pt-3\">TE OA reserve the right to change these policies at any time. While it is not our intention to do\n            so, there may be factors outside of our control that require us to implement changes to our\n            policies.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">DATA COLLECTION AND USE</p>\n          <p class=\"txt-xs pt-3\"> We do not share your Social Security and Date of Birth with outside parties except to the extent\n            necessary to complete the final report: You hereby agree that TE, its parent, subsidiaries,\n            affiliates, and their respective successors and assigns, may collect and use certain information\n            associated with your OA, including, without limitation, any information provided in connection\n            with OA, in accordance with TE privacy policy available athttps://tenantevaluation.com. TE may\n            share aggregate data with vendors who assist TE in providing its products and services; with\n            third party business partners with whom TE provides joint promotions; and TE may share\n            aggregate data if TE believes it is necessary to comply with legal process (such as a court order,\n            subpoena, search warrant, etc.), or other legal requirements of any governmental authority; if TE\n            believes it would potentially mitigate TE’s liability in an actual or potential lawsuit; if TE\n            believes it is permitted by law or if doing so will not violate the law; or if TE believes it is\n            otherwise necessary to protect TE’s rights or property; or is necessary to protect the interests of\n            other users of the Software. In the unlikely event that all or part of TE’s business is sold or\n            acquired by a third party, TE will transfer such information to the new business owner.6. </p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">DISCLAIMER OF WARRANTY</p>\n          <p class=\"txt-xs pt-3\">There are no representations or warranties that apply or that are made to you in any way in\n            connection with the OA and final report. This product is furnished in response to an inquiry for\n            Residential Screening. The information contained in this report has been obtained from third\n            party sources and databases that are considered reliable. The results provided to you rely on the\n            information, which was submitted to us; therefore, Tenant Evaluation LLC cannot guarantee the\n            accuracy of this report. Use of this report for purposes other then those certified by you is\n            prohibited. This information was obtained in compliance with the Federal Credit Reporting Act\n            (FCRA) and is considered confidential. It is important to note that the data, by nature, may not be\n            current due to the lag between the time a suspect is charged or case has been concluded and the\n            time the data is actually reported to state, county and federal agencies.7.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">LIMITATIONS OF LIABILITY</p>\n          <p class=\"txt-xs pt-3\">YOU UNDERSTAND, ACKNOWLEDGE AND AGREE THAT TO THE FULLEST EXTENT\n            PERMISSIBLE BY LAW, NEITHER TE NOR ITS PARENT, SUBSIDIARIES, AFFILIATES,\n            THEIR RESPECTIVE SUCCESSORS AND ASSIGNS, OFFICERS, DIRECTORS,\n            EMPLOYEES, AGENTS, LICENSORS, REPRESENTATIVES, ADVERTISERS, BUSINESS\n            AND PROMOTIONAL PARTNERS, OPERATIONAL SERVICE PROVIDERS, SUPPLIERS,\n            RESELLERS AND CONTRACTORS SHALL, UNDER ANY CIRCUMSTANCES, BE\n            RESPONSIBLE OR LIABLE FOR ANY CLAIM, LOSS OR DAMAGE, OF ANY KIND,\n            DIRECT OR INDIRECT, INCLUDING, WITHOUT LIMITATION, ANY AND ALL\n            COMPENSATORY, CONSEQUENTIAL, INCIDENTAL, DIRECT, INDIRECT, SPECIAL,\n            EXEMPLARY OR PUNITIVE DAMAGES, IN CONNECTION WITH OR ARISING FROM\n            ANY USE OF THE OA OR OTHERWISE IN CONNECTION WITH THIS TC. YOU\n            FURTHER ACKNOWLEDGE AND AGREE YOUR SOLE RIGHT AND EXCLUSIVE\n            REMEDY FOR ANY LOSS OR DAMAGE ASSOCIATED WITH THE OA OR THIS TC,\n            EVEN IF YOU CLAIM THAT SUCH REMEDY FAILS OF ITS ESSENTIAL PURPOSE,\n            SHALL BE TO HAVE TE, UPON WRITTEN NOTICE FROM YOU, ATTEMPT TO REPAIR,\n            CORRECT OR REPLACE THE OA. IF REPAIR, CORRECTION OR REPLACEMENT IS\n            NOT REASONABLY COMMERCIALLY PRACTICABLE IN THE SOLE AND ABSOLUTE\n            DISCRETION OF TE, EITHER YOU OR TE SHALL HAVE THE RIGHT TO TERMINATE\n            AND DISCONTINUE YOUR USE OF THE OA. SOME JURISDICTIONS DO NOT ALLOW\n            THE EXCLUSION OF CERTAIN WARRANTIES OR CERTAIN LIMITATIONS ON\n            DAMAGES AND REMEDIES. ACCORDINGLY, SOME OF THE EXCLUSIONS AND\n            LIMITATIONS DESCRIBED IN THIS TC MAY NOT APPLY TO YOU.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">PERMISSIBLE PURPOSE</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC processes applications and services for the sole purpose of Tenant\n            Screening and HOA Fees. All information and documentation requested is pertinent and required\n            by the End User. ALL INFORMATION, REPORTING, AND COLLECTED\n            DOCUMENTATION IS TO BE PROVIDED TO THE END USER IN FULL SECURITY FOR\n            THEIR REVIEW AND EVALUATION. </p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">APPLICATION CODE</p>\n          <p class=\"txt-xs pt-3\">Application Codes are to be provided by the REQUESTER. Tenant Evaluation LLC does not\n            provide Application Codes to Applicant. BY PROCEEDING, APPLICANT UNDERSTAND\n            THAT THE END USER BEING APPLIED TO HAS PROVIDED THE CORRESPONDING\n            APPLICATION CODE AND THE PURPOSE AND/OR MANAGEMENT ADDRESS OF THE\n            CODE IS CORRECT TO PROCEED, AT WHICH TENANT EVALUATION LLC IS\n            RELEASED FROM LIABILITY OF THE APPLICATION CODE.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">UNDERSTANDING RIGHTS</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC is compliant to the laws of the Fair Credit Reporting Act. Amongst\n            authorizing, processing, and abiding by disputes regulations established, we provide the\n            Applicant with the following link to the Fair Credit Reporting Act for review: (LINK FCRA)\n            <a\n              href=\"https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/fair-credit-reporting-act\" target=\"_blank\">https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/fair-credit-reporting-act</a></p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">APPLICATION FEE AND NON-REFUNDABLE POLICY</p>\n          <p class=\"txt-xs pt-3\">The Applicant understands that the End User being applied to has set forth and established the\n            corresponding fees and costs corresponding to the Application. Furthermore, it is understood that\n            Tenant Evaluation LLC contains a no refund policy on all applications because credit reports,\n            criminal searches, eviction searches and other services are charged directly to TE once the\n            Applicant applies online. THE APPLICATION FEE IS REQUIRED AND NONREFUNDABLE\n            REGARDLESS OF THE OUTCOME OF THE APPLICATION</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">SECURITY</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC understands the importance of keeping the information secure from\n            unauthorized access. All of the sensitive data is encrypted before being transmitted to/from our\n            servers. Tenant Evaluation LLC is a Level 1 Compliant Organization. Tenantev.com,\n            guestev.com, tenantevaluation.com & tellcportal.com sites are fully encrypted using 256-bit\n            Encryption. The browser being used must be TLS 1.2 or above. TLS stands for Transport Layer\n            Security, which is a cryptographic protocol designed to provide communications security over a\n            computer network. Part of our responsibility is masking the consumer’s Personal Sensitive\n            Information (PSI), for the security of Tenant Evaluation, the End User, and the Consumer. With\n            that said, Tenant Evaluation LLC does not disclose Social Security Numbers, Date of Births,\n            Identification Numbers, Bank Account Numbers, or any Personal Sensitive Information on Final\n            Reports. THE APPLICANT UNDERSTANDS AND AGREES TO THE SECURITY\n            MEASURES ESTABLISHED BY TENANT EVALUATION LLC. </p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">NOTIFICATION CONSENT</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC will communicate with the Applicant for matters concerning the\n            application or inquiries through Email, Call, Text, Fax or Mail. THE APPLICANT\n            AUTHORIZES SUCH COMMUNICATION TO TAKE PLACE. TEXT COMMUNICATION\n            OPTION WILL BE AVAILABLE IN THE SEQUENCE OF THE APPLICATION</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">AUTHORIZATION OF SERVICES</p>\n          <p class=\"txt-xs pt-3\">The Applicant hereby authorizes to release any and all information requested with regards to\n            verification of bank account(s), credit history, residential history, criminal record history,\n            employment verification and character references to Tenant Evaluation LLC. This information is\n            to be used for credit report for Application for Occupancy. The Applicant hereby waives any\n            privileges The Applicant may have with respect to the said information in reference to its release\n            to the aforesaid party. Information obtained for this report is to be released to Tenant Evaluation\n            LLC, Community, Property Manager, Board of Directors and The Landlord for their exclusive\n            use only. Please notify The Applicant’s Landlord(s), Employer(s), and Character References that\n            we MAY be contacting them to obtain a reference pursuant to your application. THE\n            APPLICANT UNDERSTANDS THAT IF A CREDIT REPORT WILL BE PULLED FOR\n            RENTAL OR HOA FEES PURPOSES, THIS WILL RESULT IN A HARD-HIT INQUIRY</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">AGREEMENT TO REQUIREMENTS</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC will be required to gather documentation, personal sensitive information,\n            and general applicant information for the purpose of processing The Application. THE\n            APPLICANT UNDERSTANDS THAT THESE REQUIREMENTS ARE SET FORTH AND\n            ESTABLISHED BY THE END USER AND AGREE TO PROVIDE THE NECESSARY\n            INFORMATION FOR PROCESSING SERVICES, AS WELL AS AGREE TO UPLOAD AND/\n            OR FAX THE DOCUMENTATION TO TENANT EVALUATION LLC REQUIRED BY THE\n            END USER.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">ELECTRONIC SIGNATURES AND INITIALS</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC will require the Applicant to provide Electronic Signatures on one or\n            more document(s). Documentation may be pertinent to the End User application, or information\n            herby needed by Tenant Evaluation LLC for Application Processing. THE APPLICANT HERBY\n            AGREES TO SIGN OR INITIAL AND PROVIDE THE NEEDED SIGNATURES\n            CORRESPONDING TO THE APPLICATION IN METHODS REQUIRED AND PROVIDED\n            BY TENANT EVALUATION LLC.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">ACCOUNT ACCESS</p>\n          <p class=\"txt-xs pt-3\">The Applicant understands that Tenant Evaluation LLC may provide the Applicant with a portal,\n            dashboard, or corresponding access needed for the processing and communication of the\n            Application. Through this Portal, Tenant Evaluation LLC may require the Applicant to assist in\n            providing or uploading information for the Application. THE APPLICANT AUTHORIZES TO\n            PROCEED WITH THIS ACCESS NECESSARY FOR THE APPLICATION PROCESSING\n            AND COMMUNICATION NEEDED. THE APPLICANT UNDERSTANDS THIS ACCESS\n            MAY BE UPDATED THROUGH THE COURSE OF THE APPLICATION. </p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">APPLICATION CANCELLATION</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC allows and understands cancellations may be needed during the course\n            of an Application. Though an Application may be cancelled, once submitted, The Applicant has\n            authorized Tenant Evaluation LLC to process the information and the needed services for the\n            application, and therefore understands information may have been partially or fully processed.\n            AT WHICH POINT, THE APPLICANT UNDERSTANDS THAT, THOUGH CANCELLED,\n            THE APPLICATION PROCESSING HAS BEEN AUTHORIZED AND IS NONREFUNDABLE.</p>\n\n          <p class=\"txt-xs pt-3 txt-bold\">DISPUTING INFORMATION</p>\n          <p class=\"txt-xs pt-3\">Tenant Evaluation LLC understands and abides by the Fair Housing Act, Fair Credit Reporting\n            Act, and Credit Bureau Regulations to updated any inaccurate information within the time frame\n            by which the receiving method is legally directed. BY UNDERSTANDING THE\n            APPLICANT’S RIGHTS, THE APPLICANT FURTHERMORE AGREES THAT ANY\n            INFORMATION PROVIDED OR PROCESSED BEING INACCURATE, TENANT\n            EVALUATION LLC MAY PROVIDE THE APPLICANT WITH A COPY OF THE FINAL\n            REPORT, UPON REQUEST, WITHIN 60 DAYS OF COMPLETION. ANY INACCURATE\n            INFORMATION MUST BE DISPUTED IN THE PROVIDED METHOD, AND MAY BE\n            PROCESSED WITHIN THE LEGAL PERMISSIBLE TIME FRAME. FOR PROCESSING\n            PURPOSES, TENANT EVALUATION LLC MAY REQUIRE THE APPLICANT TO\n            PROVIDE ADDITIONAL INFORMATION OR DOCUMENTATION PERTAINING TO THE\n            RECORD, CASE, OR INFORMATION BEING DISPUTED. </p>\n\n        </article>\n\n      </section>\n      <input class=\"btn btn-lg btn-primary px-5 mb-4\" type=\"button\" value=\"Back\" onclick=\"history.back()\">\n      \n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/common-page/common-page-routing.module.ts": function srcAppCommonPageCommonPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonPageRoutingModule", function () {
      return CommonPageRoutingModule;
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


    var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terms-and-conditions/terms-and-conditions.component */
    "./src/app/common-page/terms-and-conditions/terms-and-conditions.component.ts");
    /* harmony import */


    var _refund_app_refund_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./refund-app/refund-app.component */
    "./src/app/common-page/refund-app/refund-app.component.ts");

    var routes = [{
      path: 'terms-and-conditions',
      component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsComponent"]
    }, {
      path: 'refund-app',
      component: _refund_app_refund_app_component__WEBPACK_IMPORTED_MODULE_4__["RefundAppComponent"]
    }];

    var CommonPageRoutingModule = function CommonPageRoutingModule() {
      _classCallCheck(this, CommonPageRoutingModule);
    };

    CommonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommonPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/common-page/common-page.module.ts": function srcAppCommonPageCommonPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonPageModule", function () {
      return CommonPageModule;
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


    var _common_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common-page-routing.module */
    "./src/app/common-page/common-page-routing.module.ts");
    /* harmony import */


    var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./terms-and-conditions/terms-and-conditions.component */
    "./src/app/common-page/terms-and-conditions/terms-and-conditions.component.ts");
    /* harmony import */


    var _refund_app_refund_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./refund-app/refund-app.component */
    "./src/app/common-page/refund-app/refund-app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CommonPageModule = function CommonPageModule() {
      _classCallCheck(this, CommonPageModule);
    };

    CommonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _common_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommonPageRoutingModule"]],
      declarations: [_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsComponent"], _refund_app_refund_app_component__WEBPACK_IMPORTED_MODULE_5__["RefundAppComponent"]]
    })], CommonPageModule);
    /***/
  },

  /***/
  "./src/app/common-page/refund-app/refund-app.component.scss": function srcAppCommonPageRefundAppRefundAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".agreement-text {\n  max-height: 15em;\n  overflow-y: auto;\n  padding: 1em;\n  margin: 1em 0;\n  border: 1px solid #f1f1f2;\n  background-color: #F5F5F5;\n}\n\n.signature-canvas {\n  width: 100%;\n  height: 260px;\n  position: relative;\n  background-color: #e3e4e6;\n}\n\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 260px;\n}\n\n.signature__float {\n  position: absolute;\n  font-size: 2rem;\n  color: #dbdbdb;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n}\n\n.signature .signature-wrapper, .signature .signature-text {\n  background-color: #f7f7f7;\n  color: #77747e;\n  border: 1px solid #dbdbdb;\n  min-height: 260px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.signature .signature-text {\n  z-index: 0;\n}\n\n.payment-table__col > li {\n  padding-top: 10px;\n}\n\n.payment-table__row--total {\n  padding-top: 20px;\n}\n\n.foot-action .tev-btn {\n  min-width: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2UvcmVmdW5kLWFwcC9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGNvbW1vbi1wYWdlXFxyZWZ1bmQtYXBwXFxyZWZ1bmQtYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24tcGFnZS9yZWZ1bmQtYXBwL3JlZnVuZC1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDSkY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsYUFaaUI7RUFhakIsa0JBQUE7RUFDQSx5QkFBQTtBQ0hGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGFBbEJpQjtBQ2dCbkI7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQTFCVTtFQTJCVixRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElFO0VBQ0UseUJBbENTO0VBbUNULGNBakNRO0VBa0NSLHlCQUFBO0VBQ0EsaUJBbENlO0VBbUNmLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElFO0VBQ0UsVUFBQTtBQ0ZKOztBRE9JO0VBQ0UsaUJBQUE7QUNKTjs7QURPRTtFQUNFLGlCQUFBO0FDTEo7O0FEU0U7RUFDRSxnQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLXBhZ2UvcmVmdW5kLWFwcC9yZWZ1bmQtYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XG4kbm9ybWFsLWdyYXk6ICNkYmRiZGI7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJHNpZ25hdHVyZS1oZWlnaHQ6IDI2MHB4O1xuXG4uYWdyZWVtZW50LXRleHQge1xuICBtYXgtaGVpZ2h0OiAxNWVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG4uc2lnbmF0dXJlLWNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XG59XG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHNpZ25hdHVyZS1oZWlnaHQ7XG59XG4uc2lnbmF0dXJlIHtcbiAgJl9fZmxvYXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICRub3JtYWwtZ3JheTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogOTtcbiAgfVxuICAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUtdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XG4gICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJG5vcm1hbC1ncmF5O1xuICAgIG1pbi1oZWlnaHQ6ICRzaWduYXR1cmUtaGVpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5zaWduYXR1cmUtdGV4dCB7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuLnBheW1lbnQtdGFibGUge1xuICAmX19jb2wge1xuICAgID4gbGkge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICB9XG4gICZfX3Jvdy0tdG90YWwge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG4uZm9vdC1hY3Rpb24ge1xuICAudGV2LWJ0biB7XG4gICAgbWluLXdpZHRoOiAyNDBweDtcbiAgfVxufVxuIiwiLmFncmVlbWVudC10ZXh0IHtcbiAgbWF4LWhlaWdodDogMTVlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDFlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uc2lnbmF0dXJlLWNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2U0ZTY7XG59XG5cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cblxuLnNpZ25hdHVyZV9fZmxvYXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNkYmRiZGI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5O1xufVxuLnNpZ25hdHVyZSAuc2lnbmF0dXJlLXdyYXBwZXIsIC5zaWduYXR1cmUgLnNpZ25hdHVyZS10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgY29sb3I6ICM3Nzc0N2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lnbmF0dXJlIC5zaWduYXR1cmUtdGV4dCB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5wYXltZW50LXRhYmxlX19jb2wgPiBsaSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBheW1lbnQtdGFibGVfX3Jvdy0tdG90YWwge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmZvb3QtYWN0aW9uIC50ZXYtYnRuIHtcbiAgbWluLXdpZHRoOiAyNDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common-page/refund-app/refund-app.component.ts": function srcAppCommonPageRefundAppRefundAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundAppComponent", function () {
      return RefundAppComponent;
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


    var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! signature_pad */
    "./node_modules/signature_pad/dist/signature_pad.js");

    var RefundAppComponent = /*#__PURE__*/function () {
      function RefundAppComponent() {
        _classCallCheck(this, RefundAppComponent);
      }

      _createClass(RefundAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initSignature();
        }
      }, {
        key: "initSignature",
        value: function initSignature() {
          var _this = this;

          this.signatureCanvas = this.signaturePadRef.nativeElement;
          this.signatureTextCanvas = this.signatureTextRef.nativeElement;
          this.setCanvasSize();
          this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_2__["default"](this.signatureCanvas);

          this.signaturePad.onEnd = function () {
            var signature = _this.signaturePad.toDataURL('image/png');
          };
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
      }]);

      return RefundAppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signaturePad', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], RefundAppComponent.prototype, "signaturePadRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureText', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], RefundAppComponent.prototype, "signatureTextRef", void 0);
    RefundAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-refund-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refund-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/refund-app/refund-app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refund-app.component.scss */
      "./src/app/common-page/refund-app/refund-app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RefundAppComponent);
    /***/
  },

  /***/
  "./src/app/common-page/terms-and-conditions/terms-and-conditions.component.scss": function srcAppCommonPageTermsAndConditionsTermsAndConditionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1wYWdlL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/common-page/terms-and-conditions/terms-and-conditions.component.ts": function srcAppCommonPageTermsAndConditionsTermsAndConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
      return TermsAndConditionsComponent;
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


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TermsAndConditionsComponent = /*#__PURE__*/function () {
      function TermsAndConditionsComponent(authService, router) {
        _classCallCheck(this, TermsAndConditionsComponent);

        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
        this.isAuthenticated = this.authService.isAuthenticated();
      }

      _createClass(TermsAndConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut(event) {
          var _this2 = this;

          event.preventDefault();
          this.authService.logOut().subscribe(function () {
            _this2.router.navigate(['/'])["catch"](console.log);
          });
        }
      }]);

      return TermsAndConditionsComponent;
    }();

    TermsAndConditionsComponent.ctorParameters = function () {
      return [{
        type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-terms-and-conditions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms-and-conditions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-page/terms-and-conditions/terms-and-conditions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms-and-conditions.component.scss */
      "./src/app/common-page/terms-and-conditions/terms-and-conditions.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], TermsAndConditionsComponent);
    /***/
  }
}]);
//# sourceMappingURL=common-page-common-page-module-es5.js.map
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finicity-finicity-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/spinner-loading/spinner-loading.component.html": function node_modulesRawLoaderDistCjsJsSrcAppCoreSpinnerLoadingSpinnerLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<div class=\"loading-wrapper\">\r\n  <h3>{{message}}</h3>\r\n  <div class=\"loading-indicator\">\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n  </div>\r\n</div>\r\n";
=======
    __webpack_exports__["default"] = "<div class=\"loading-wrapper\">\n  <h3>{{message}}</h3>\n  <div class=\"loading-indicator\">\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n</div>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-error/finicity-error.component.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicityFinicityErrorFinicityErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<div class=\"finicity-finish\">\r\n\r\n  <div class=\"logo-brand img-responsive\">\r\n    <img src=\"assets/finicity-trans.png\" class=\"logo\"/>\r\n  </div>\r\n  <div class=\"text\">\r\n    <img src=\"assets/icon-alert.svg\">\r\n    <h1>{{title}}</h1>\r\n    <p>{{text}}</p>\r\n  </div>\r\n  <div class=\"button-bar\">\r\n    <button (click)=\"actionBt()\" class=\"btn btn-blue float-right\">{{buttonText}}</button>\r\n  </div>\r\n\r\n</div>\r\n";
=======
    __webpack_exports__["default"] = "<div class=\"finicity-finish\">\n\n  <div class=\"logo-brand img-responsive\">\n    <img src=\"assets/finicity-trans.png\" class=\"logo\"/>\n  </div>\n  <div class=\"text\">\n    <img src=\"assets/icon-alert.svg\">\n    <h1>{{title}}</h1>\n    <p>{{text}}</p>\n  </div>\n  <div class=\"button-bar\">\n    <button (click)=\"actionBt()\" class=\"btn btn-blue float-right\">{{buttonText}}</button>\n  </div>\n\n</div>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicityFinicityFinishBankFinicityFinishBankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<div class=\"finicity-finish\">\r\n\r\n  <div class=\"logo-brand img-responsive\">\r\n    <img src=\"assets/finicity-trans.png\" class=\"logo\"/>\r\n  </div>\r\n  <div class=\"text\">\r\n    <img src=\"assets/icon-success.svg\">\r\n    <h1>Thank you!</h1>\r\n    <p>The proof of income source you selected was added successfully.<br/>We will be contacting you later if any additional information is required.</p>\r\n  </div>\r\n  <div class=\"button-bar\">\r\n    <button [routerLink]=\"['/dashboard', applicationId]\" class=\"btn btn-blue float-right\">FINISH & CLOSE</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n";
=======
    __webpack_exports__["default"] = "<div class=\"finicity-finish\">\n\n  <div class=\"logo-brand img-responsive\">\n    <img src=\"assets/finicity-trans.png\" class=\"logo\"/>\n  </div>\n  <div class=\"text\">\n    <img src=\"assets/icon-success.svg\">\n    <h1>Thank you!</h1>\n    <p>The proof of income source you selected was added successfully.<br/>We will be contacting you later if any additional information is required.</p>\n  </div>\n  <div class=\"button-bar\">\n    <button [routerLink]=\"['/dashboard', applicationId]\" class=\"btn btn-blue float-right\">FINISH & CLOSE</button>\n  </div>\n\n</div>\n\n\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicityFinicityNavFinicityNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<nav class=\"navbar fixed-top\" id=\"nav-var-proof\">\r\n  <div class=\"left-brand\">\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <img class=\"logo\" src=\"/assets/icon-te.svg\" alt=\"\"/>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <p *ngIf=\"mainApplication?.address\">    <i class=\"tev-icon tev-icon--location\"></i> {{mainApplication.address}}</p>\r\n      </div>\r\n      <div class=\"col-sm-4 col-xs-12 right-brand\">\r\n        <button [routerLink]=\"['/dashboard', mainApplication.applicationId]\" class=\"btn btn-success\">My Dashboard</button>\r\n        <button (click)=\"logOut($event)\" class=\"btn btn-success logoutButton\">Log Out</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
=======
    __webpack_exports__["default"] = "<nav class=\"navbar fixed-top\" id=\"nav-var-proof\">\n  <div class=\"left-brand\">\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <img class=\"logo\" src=\"/assets/icon-te.svg\" alt=\"\"/>\n      </div>\n      <div class=\"col-6\">\n        <p *ngIf=\"mainApplication?.address\">    <i class=\"tev-icon tev-icon--location\"></i> {{mainApplication.address}}</p>\n      </div>\n      <div class=\"col-sm-4 col-xs-12 right-brand\">\n        <button [routerLink]=\"['/dashboard', mainApplication.applicationId]\" class=\"btn btn-success\">My Dashboard</button>\n        <button (click)=\"logOut($event)\" class=\"btn btn-success logoutButton\">Log Out</button>\n      </div>\n    </div>\n  </div>\n</nav>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity/finicity.component.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicityFinicityFinicityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<tev-finicity-nav></tev-finicity-nav>\r\n<main role=\"main\" class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n";
=======
    __webpack_exports__["default"] = "<tev-finicity-nav></tev-finicity-nav>\n<main role=\"main\" class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</main>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicitySelectBankDialogNotFindBankHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<i class=\"tev-icon tev-icon--tenant-logo\"></i>\r\n<h2 mat-dialog-title>Proof of income<br/>\r\n  documents</h2>\r\n<div mat-dialog-content>\r\n  <p>If you don't have the Online Banking Credentials, the association will require the following documents to be provided:</p>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let document of proofOfIncomeTask.task\">\r\n      {{document.description}}\r\n    </li>\r\n  </ul>\r\n  <h2 mat-dialog-title>Would you like to do?</h2>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"continueWithFinicity()\" class=\"mat-dialog-actions mat-button mat-warning\">CONTINUE WITH ONLINE BANKING</button>\r\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"goToUploads()\" class=\"mat-dialog-actions mat-button\">UPLOAD DOCUMENTS NOW</button>\r\n</div>\r\n";
=======
    __webpack_exports__["default"] = "<i class=\"tev-icon tev-icon--tenant-logo\"></i>\n<h2 mat-dialog-title>Proof of income<br/>\n  documents</h2>\n<div mat-dialog-content>\n  <p>If you don't have the Online Banking Credentials, the association will require the following documents to be provided:</p>\n\n  <ul>\n    <li *ngFor=\"let document of proofOfIncomeTask.task\">\n      {{document.description}}\n    </li>\n  </ul>\n  <h2 mat-dialog-title>Would you like to do?</h2>\n</div>\n<div mat-dialog-actions>\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"continueWithFinicity()\" class=\"mat-dialog-actions mat-button mat-warning\">CONTINUE WITH ONLINE BANKING</button>\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"goToUploads()\" class=\"mat-dialog-actions mat-button\">UPLOAD DOCUMENTS NOW</button>\n</div>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-supported-bank.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicitySelectBankDialogNotSupportedBankHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<i class=\"tev-icon tev-icon--tenant-logo\"></i>\r\n<h2 mat-dialog-title>Proof of income<br/>\r\n  documents</h2>\r\n<div mat-dialog-content>\r\n  <p>The selected bank account is not available at this time. As a replacement, the association requires the following documents:</p>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let document of proofOfIncomeTask.task\">\r\n      {{document.description}}\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"goToUploads()\" class=\"mat-dialog-actions mat-button\">UPLOAD DOCUMENTS NOW</button>\r\n</div>\r\n";
=======
    __webpack_exports__["default"] = "<i class=\"tev-icon tev-icon--tenant-logo\"></i>\n<h2 mat-dialog-title>Proof of income<br/>\n  documents</h2>\n<div mat-dialog-content>\n  <p>The selected bank account is not available at this time. As a replacement, the association requires the following documents:</p>\n\n  <ul>\n    <li *ngFor=\"let document of proofOfIncomeTask.task\">\n      {{document.description}}\n    </li>\n  </ul>\n</div>\n<div mat-dialog-actions>\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"goToUploads()\" class=\"mat-dialog-actions mat-button\">UPLOAD DOCUMENTS NOW</button>\n</div>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/select-bank.component.html": function node_modulesRawLoaderDistCjsJsSrcAppDashboardFinicitySelectBankSelectBankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div>\r\n      <a [routerLink]=\"['/dashboard', paramsAppId]\" class=\"back-link\">\r\n        <span class=\"tev-icon tev-icon--back\"></span>\r\n        BACK</a>\r\n    </div>\r\n\r\n    <div *ngIf=\"!finishProcess && !hasError\">\r\n      <h1>Select your Bank Account(s)</h1>\r\n      <p>Select the Bank or Investment Account that you wish to provide to verify income.</p>\r\n      <div class=\"finicity-iframe-wrapper\">\r\n        <div id=\"connect-container\">\r\n          <!-- <iframe [src]=\"urlConnect | safe\" ></iframe> -->\r\n        </div>\r\n\r\n      </div>\r\n      <!-- *ngIf=\"!showLoading && !finishProcess && !hasError\"-->\r\n\r\n    </div>\r\n\r\n    <tev-finicity-finish-bank [applicationId]=\"paramsAppId\" *ngIf=\"finishProcess\"></tev-finicity-finish-bank>\r\n    <tev-spinner-loading *ngIf=\"showLoading\" [message]=\"loadingMessage\"></tev-spinner-loading>\r\n    <tev-finicity-error [applicationId]=\"paramsAppId\" [error]=\"error\"\r\n                         (actionButton)=\"actionError($event)\" *ngIf=\"hasError\"></tev-finicity-error>\r\n    <p *ngIf=\"!showLoading && !finishProcess\" class=\"link float-right\"><a href=\"#\"\r\n                                    (click)=\"bankNotFound($event,paramsApplicantId)\">I\r\n      can’t find my financial institution.</a></p>\r\n\r\n  </div>\r\n</div>\r\n";
=======
    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div>\n      <a [routerLink]=\"['/dashboard', paramsAppId]\" class=\"back-link\">\n        <span class=\"tev-icon tev-icon--back\"></span>\n        BACK</a>\n    </div>\n\n    <div *ngIf=\"!finishProcess && !hasError\">\n      <h1>Select your Bank Account(s)</h1>\n      <p>Select the Bank or Investment Account that you wish to provide to verify income.</p>\n      <div class=\"finicity-iframe-wrapper\">\n        <div id=\"connect-container\">\n          <!-- <iframe [src]=\"urlConnect | safe\" ></iframe> -->\n        </div>\n\n      </div>\n      <!-- *ngIf=\"!showLoading && !finishProcess && !hasError\"-->\n\n    </div>\n\n    <tev-finicity-finish-bank [applicationId]=\"paramsAppId\" *ngIf=\"finishProcess\"></tev-finicity-finish-bank>\n    <tev-spinner-loading *ngIf=\"showLoading\" [message]=\"loadingMessage\"></tev-spinner-loading>\n    <tev-finicity-error [applicationId]=\"paramsAppId\" [error]=\"error\"\n                         (actionButton)=\"actionError($event)\" *ngIf=\"hasError\"></tev-finicity-error>\n    <p *ngIf=\"!showLoading && !finishProcess\" class=\"link float-right\"><a href=\"#\"\n                                    (click)=\"bankNotFound($event,paramsApplicantId)\">I\n      can’t find my financial institution.</a></p>\n\n  </div>\n</div>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/core/spinner-loading/spinner-loading.component.scss": function srcAppCoreSpinnerLoadingSpinnerLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = ".loading-wrapper {\n  text-align: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-color: #EDEEEF;\n  background-size: 100%;\n  z-index: 999;\n}\n.loading-wrapper h3 {\n  padding-top: 15%;\n  padding-bottom: 5%;\n}\n.loading-wrapper .loading-indicator {\n  height: 2em;\n  width: 2em;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zcGlubmVyLWxvYWRpbmcvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcY29yZVxcc3Bpbm5lci1sb2FkaW5nXFxzcGlubmVyLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvc3Bpbm5lci1sb2FkaW5nL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvcmUvc3Bpbm5lci1sb2FkaW5nL3NwaW5uZXItbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ0lXO0VESFgscUJBQUE7RUFDQSxZQUFBO0FFQUY7QUZFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUVBSjtBRkdFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zcGlubmVyLWxvYWRpbmcvc3Bpbm5lci1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xyXG4ubG9hZGluZy13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctaW5kaWNhdG9yIHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXHJcbiRwdXJwbGU6ICMzODMzNDI7XHJcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XHJcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xyXG4kcmVkOiAjY2Y0NzQxO1xyXG4kbGctcmVkOiAjZmNkN2Q3O1xyXG4kZ3JlZW46ICM5ZWM1NGM7XHJcbiRzbm93OiAjZjVmNmY2O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRncmF5OiAjYmJiY2JlO1xyXG4kbGlnaHQtZ3JheTogI0VERUVFRjtcclxuJGRhcmstZ3JheTogIzc3NzQ3ZTtcclxuJGljZTogI2NmZDBkMjtcclxuJGJnLWdyYXk6ICNmNWY1ZjU7XHJcbiRiZy1ncmF5MjogI0U2RTZFNztcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRsZy1ibHVlOiMwMDlDREM7XHJcbiRsZy1ncmF5OiNBM0FBQjE7XHJcbiRmb3JtLWdyYXk6IzhFODc5ODtcclxuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcclxuIiwiLmxvYWRpbmctd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUVFRjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG4ubG9hZGluZy13cmFwcGVyIGgzIHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuLmxvYWRpbmctd3JhcHBlciAubG9hZGluZy1pbmRpY2F0b3Ige1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59Il19 */";
=======
    __webpack_exports__["default"] = ".loading-wrapper {\n  text-align: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-color: #EDEEEF;\n  background-size: 100%;\n  z-index: 999;\n}\n.loading-wrapper h3 {\n  padding-top: 15%;\n  padding-bottom: 5%;\n}\n.loading-wrapper .loading-indicator {\n  height: 2em;\n  width: 2em;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9jb3JlL3NwaW5uZXItbG9hZGluZy9zcGlubmVyLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FuamVldnNhaW5pL0Rlc2t0b3AvTm9kZUpTL0FuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29yZS9zcGlubmVyLWxvYWRpbmcvc3Bpbm5lci1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJDSVc7RURIWCxxQkFBQTtFQUNBLFlBQUE7QUVBRjtBRkVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBRUFKO0FGR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NwaW5uZXItbG9hZGluZy9zcGlubmVyLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XG4ubG9hZGluZy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgaDN7XG4gICAgcGFkZGluZy10b3A6IDE1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIH1cblxuICAubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG59XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIiwiLmxvYWRpbmctd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUVFRjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG4ubG9hZGluZy13cmFwcGVyIGgzIHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuLmxvYWRpbmctd3JhcHBlciAubG9hZGluZy1pbmRpY2F0b3Ige1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59Il19 */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/core/spinner-loading/spinner-loading.component.ts": function srcAppCoreSpinnerLoadingSpinnerLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerLoadingComponent", function () {
      return SpinnerLoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerLoadingComponent = /*#__PURE__*/function () {
      function SpinnerLoadingComponent() {
        _classCallCheck(this, SpinnerLoadingComponent);
      }

      _createClass(SpinnerLoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerLoadingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SpinnerLoadingComponent.prototype, "message", void 0);
    SpinnerLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-spinner-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner-loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/spinner-loading/spinner-loading.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner-loading.component.scss */
      "./src/app/core/spinner-loading/spinner-loading.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SpinnerLoadingComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-error/finicity-error.component.scss": function srcAppDashboardFinicityFinicityErrorFinicityErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = ".finicity-finish .logo-brand {\n  width: 100%;\n  min-height: 100px;\n  background-color: #383342;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.finicity-finish .logo-brand .logo {\n  height: 50px;\n  max-width: 90%;\n  margin-top: 25px;\n  margin-right: 50px;\n  float: right;\n}\n.finicity-finish .text {\n  background-color: white;\n  padding-top: 80px;\n  text-align: center;\n  min-height: 300px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-bottom: 20px;\n}\n.finicity-finish .text h1 {\n  font-size: 28px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text p {\n  font-size: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.finicity-finish .button-bar {\n  margin-top: 40px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWVycm9yL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGRhc2hib2FyZFxcZmluaWNpdHlcXGZpbmljaXR5LWVycm9yXFxmaW5pY2l0eS1lcnJvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWVycm9yL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS1lcnJvci9maW5pY2l0eS1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ05LO0VET0wsNEJBQUE7RUFDQSw2QkFBQTtBRUhKO0FGS0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FFSE47QUZPRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FFTEo7QUZPSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRUxOO0FGUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FFTk47QUZTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FFUE47QUZZRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FFVkoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZXJyb3IvZmluaWNpdHktZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uZmluaWNpdHktZmluaXNoIHtcclxuXHJcbiAgLmxvZ28tYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1iYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xyXG4kcHVycGxlOiAjMzgzMzQyO1xyXG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xyXG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcclxuJHJlZDogI2NmNDc0MTtcclxuJGxnLXJlZDogI2ZjZDdkNztcclxuJGdyZWVuOiAjOWVjNTRjO1xyXG4kc25vdzogI2Y1ZjZmNjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZ3JheTogI2JiYmNiZTtcclxuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XHJcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XHJcbiRpY2U6ICNjZmQwZDI7XHJcbiRiZy1ncmF5OiAjZjVmNWY1O1xyXG4kYmctZ3JheTI6ICNFNkU2RTc7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kbGctYmx1ZTojMDA5Q0RDO1xyXG4kbGctZ3JheTojQTNBQUIxO1xyXG4kZm9ybS1ncmF5OiM4RTg3OTg7XHJcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XHJcbiIsIi5maW5pY2l0eS1maW5pc2ggLmxvZ28tYnJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODMzNDI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAubG9nby1icmFuZCAubG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4uZmluaWNpdHktZmluaXNoIC5idXR0b24tYmFyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufSJdfQ== */";
=======
    __webpack_exports__["default"] = ".finicity-finish .logo-brand {\n  width: 100%;\n  min-height: 100px;\n  background-color: #383342;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.finicity-finish .logo-brand .logo {\n  height: 50px;\n  max-width: 90%;\n  margin-top: 25px;\n  margin-right: 50px;\n  float: right;\n}\n.finicity-finish .text {\n  background-color: white;\n  padding-top: 80px;\n  text-align: center;\n  min-height: 300px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-bottom: 20px;\n}\n.finicity-finish .text h1 {\n  font-size: 28px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text p {\n  font-size: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.finicity-finish .button-bar {\n  margin-top: 40px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZXJyb3IvZmluaWNpdHktZXJyb3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FuamVldnNhaW5pL0Rlc2t0b3AvTm9kZUpTL0FuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWVycm9yL2ZpbmljaXR5LWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJDTks7RURPTCw0QkFBQTtFQUNBLDZCQUFBO0FFSEo7QUZLSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUVITjtBRk9FO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUVMSjtBRk9JO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FFTE47QUZRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUVOTjtBRlNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUVQTjtBRllFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUVWSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS1lcnJvci9maW5pY2l0eS1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcblxuLmZpbmljaXR5LWZpbmlzaCB7XG5cbiAgLmxvZ28tYnJhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcblxuICAgIC5sb2dvIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgfVxuXG4gIH1cblxuICAuYnV0dG9uLWJhciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgfVxuXG59XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIiwiLmZpbmljaXR5LWZpbmlzaCAubG9nby1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzM0MjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4uZmluaWNpdHktZmluaXNoIC5sb2dvLWJyYW5kIC5sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IGgxIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbi5maW5pY2l0eS1maW5pc2ggLmJ1dHRvbi1iYXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59Il19 */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-error/finicity-error.component.ts": function srcAppDashboardFinicityFinicityErrorFinicityErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinicityErrorComponent", function () {
      return FinicityErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FinicityErrorComponent = /*#__PURE__*/function () {
      function FinicityErrorComponent() {
        _classCallCheck(this, FinicityErrorComponent);

        this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FinicityErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.text = this.error.text;
          this.buttonText = this.error.buttonText;
          this.title = this.error.title;
        }
      }, {
        key: "actionBt",
        value: function actionBt() {
          this.actionButton.emit(this.error.returnCode);
        }
      }]);

      return FinicityErrorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], FinicityErrorComponent.prototype, "applicationId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FinicityErrorComponent.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FinicityErrorComponent.prototype, "actionButton", void 0);
    FinicityErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-finicity-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finicity-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-error/finicity-error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finicity-error.component.scss */
      "./src/app/dashboard/finicity/finicity-error/finicity-error.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FinicityErrorComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.scss": function srcAppDashboardFinicityFinicityFinishBankFinicityFinishBankComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = ".finicity-finish .logo-brand {\n  width: 100%;\n  min-height: 100px;\n  background-color: #383342;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.finicity-finish .logo-brand .logo {\n  height: 50px;\n  max-width: 90%;\n  margin-top: 25px;\n  margin-right: 50px;\n  float: right;\n}\n.finicity-finish .text {\n  background-color: white;\n  padding-top: 80px;\n  text-align: center;\n  min-height: 300px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-bottom: 20px;\n}\n.finicity-finish .text h1 {\n  font-size: 28px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text p {\n  font-size: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.finicity-finish .button-bar {\n  margin-top: 40px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWZpbmlzaC1iYW5rL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGRhc2hib2FyZFxcZmluaWNpdHlcXGZpbmljaXR5LWZpbmlzaC1iYW5rXFxmaW5pY2l0eS1maW5pc2gtYmFuay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWZpbmlzaC1iYW5rL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS1maW5pc2gtYmFuay9maW5pY2l0eS1maW5pc2gtYmFuay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ05LO0VET0wsNEJBQUE7RUFDQSw2QkFBQTtBRUhKO0FGS0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FFSE47QUZPRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FFTEo7QUZPSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRUxOO0FGUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FFTk47QUZTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FFUE47QUZZRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FFVkoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZmluaXNoLWJhbmsvZmluaWNpdHktZmluaXNoLWJhbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uZmluaWNpdHktZmluaXNoIHtcclxuXHJcbiAgLmxvZ28tYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1iYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xyXG4kcHVycGxlOiAjMzgzMzQyO1xyXG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xyXG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcclxuJHJlZDogI2NmNDc0MTtcclxuJGxnLXJlZDogI2ZjZDdkNztcclxuJGdyZWVuOiAjOWVjNTRjO1xyXG4kc25vdzogI2Y1ZjZmNjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZ3JheTogI2JiYmNiZTtcclxuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XHJcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XHJcbiRpY2U6ICNjZmQwZDI7XHJcbiRiZy1ncmF5OiAjZjVmNWY1O1xyXG4kYmctZ3JheTI6ICNFNkU2RTc7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kbGctYmx1ZTojMDA5Q0RDO1xyXG4kbGctZ3JheTojQTNBQUIxO1xyXG4kZm9ybS1ncmF5OiM4RTg3OTg7XHJcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XHJcbiIsIi5maW5pY2l0eS1maW5pc2ggLmxvZ28tYnJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODMzNDI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAubG9nby1icmFuZCAubG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4uZmluaWNpdHktZmluaXNoIC5idXR0b24tYmFyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufSJdfQ== */";
=======
    __webpack_exports__["default"] = ".finicity-finish .logo-brand {\n  width: 100%;\n  min-height: 100px;\n  background-color: #383342;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.finicity-finish .logo-brand .logo {\n  height: 50px;\n  max-width: 90%;\n  margin-top: 25px;\n  margin-right: 50px;\n  float: right;\n}\n.finicity-finish .text {\n  background-color: white;\n  padding-top: 80px;\n  text-align: center;\n  min-height: 300px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-bottom: 20px;\n}\n.finicity-finish .text h1 {\n  font-size: 28px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text p {\n  font-size: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.finicity-finish .button-bar {\n  margin-top: 40px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZmluaXNoLWJhbmsvZmluaWNpdHktZmluaXNoLWJhbmsuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FuamVldnNhaW5pL0Rlc2t0b3AvTm9kZUpTL0FuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWZpbmlzaC1iYW5rL2ZpbmljaXR5LWZpbmlzaC1iYW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJDTks7RURPTCw0QkFBQTtFQUNBLDZCQUFBO0FFSEo7QUZLSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUVITjtBRk9FO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUVMSjtBRk9JO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FFTE47QUZRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUVOTjtBRlNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUVQTjtBRllFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUVWSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS1maW5pc2gtYmFuay9maW5pY2l0eS1maW5pc2gtYmFuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcblxuLmZpbmljaXR5LWZpbmlzaCB7XG5cbiAgLmxvZ28tYnJhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcblxuICAgIC5sb2dvIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgfVxuXG4gIH1cblxuICAuYnV0dG9uLWJhciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgfVxuXG59XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIiwiLmZpbmljaXR5LWZpbmlzaCAubG9nby1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzM0MjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4uZmluaWNpdHktZmluaXNoIC5sb2dvLWJyYW5kIC5sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IGgxIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZpbmljaXR5LWZpbmlzaCAudGV4dCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbi5maW5pY2l0eS1maW5pc2ggLmJ1dHRvbi1iYXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59Il19 */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.ts": function srcAppDashboardFinicityFinicityFinishBankFinicityFinishBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinicityFinishBankComponent", function () {
      return FinicityFinishBankComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FinicityFinishBankComponent = /*#__PURE__*/function () {
      function FinicityFinishBankComponent() {
        _classCallCheck(this, FinicityFinishBankComponent);
      }

      _createClass(FinicityFinishBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FinicityFinishBankComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], FinicityFinishBankComponent.prototype, "applicationId", void 0);
    FinicityFinishBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-finicity-finish-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finicity-finish-bank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finicity-finish-bank.component.scss */
      "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FinicityFinishBankComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.scss": function srcAppDashboardFinicityFinicityNavFinicityNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px;\n}\n@media (min-width: 992px) {\n  .navbar {\n    padding: 0px;\n    width: 100%;\n    text-align: center;\n    height: 60px;\n  }\n}\n@media (min-width: 600px) {\n  .navbar {\n    padding: 0px;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n  }\n}\n.navbar .navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  height: 60px !important;\n}\n.btn {\n  margin: 0 auto;\n  text-align: center;\n  min-width: 150px;\n  background-color: #2196f3;\n  border-radius: 35px;\n}\n.logoutButton {\n  background-color: #383342;\n  border: 0px;\n}\n#nav-var-proof .row {\n  margin: 0;\n  padding: 0;\n}\n#nav-var-proof .right-brand {\n  background-color: #383342;\n  height: 100%;\n  padding-bottom: 12px;\n}\n#nav-var-proof .right-brand button {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n#nav-var-proof .left-brand {\n  width: 100%;\n  height: 100%;\n  background-color: #4D445A;\n}\n#nav-var-proof .left-brand p {\n  margin-top: 18px;\n  text-align: left;\n}\n#nav-var-proof .logo {\n  height: 50px;\n  width: 60%;\n}\n#nav-var-proof .logo img {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LW5hdi9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX21lZGlhX3F1ZXJpZXMuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LW5hdi9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGZpbmljaXR5XFxmaW5pY2l0eS1uYXZcXGZpbmljaXR5LW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LW5hdi9maW5pY2l0eS1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS1uYXYvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzswREFBQTtBQ0lBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBRUEsZUFBQTtFQUVBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxZQUFBO0FDRUY7QUZBSTtFQ1pKO0lBYUksWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNHRjtBQUNGO0FGSUk7RUN4Qko7SUFvQkksWUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNJRjtBQUNGO0FERkU7RUFFRSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSUo7QURBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJFL0JLO0VGZ0NMLG1CQUFBO0FDR0Y7QURBQTtFQUNFLHlCRWxETztFRm1EUCxXQUFBO0FDR0Y7QURDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRUo7QURDRTtFQUNFLHlCRTdESztFRjhETCxZQUFBO0VBQ0Esb0JBQUE7QUNDSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NOO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRXhFUztBRHVFYjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FES0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktbmF2L2ZpbmljaXR5LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTUVESUEgUVVFUklFU1xyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgQGlmICRwb2ludCA9PSB4bCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOThweCkgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDlweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNhc3MvbWVkaWFfcXVlcmllc1wiO1xyXG5cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWQpIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh4cykge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxufVxyXG5cclxuLmxvZ291dEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuI25hdi12YXItcHJvb2Yge1xyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5yaWdodC1icmFuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGVmdC1icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXctcHVycGxlO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmF2YmFyIC5uYXZiYXItbmF2IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmxvZ291dEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODMzNDI7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4jbmF2LXZhci1wcm9vZiAucm93IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI25hdi12YXItcHJvb2YgLnJpZ2h0LWJyYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzM0MjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbiNuYXYtdmFyLXByb29mIC5yaWdodC1icmFuZCBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiNuYXYtdmFyLXByb29mIC5sZWZ0LWJyYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENDQ1QTtcbn1cbiNuYXYtdmFyLXByb29mIC5sZWZ0LWJyYW5kIHAge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI25hdi12YXItcHJvb2YgLmxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4jbmF2LXZhci1wcm9vZiAubG9nbyBpbWcge1xuICB3aWR0aDogNTBweDtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xyXG4kcHVycGxlOiAjMzgzMzQyO1xyXG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xyXG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcclxuJHJlZDogI2NmNDc0MTtcclxuJGxnLXJlZDogI2ZjZDdkNztcclxuJGdyZWVuOiAjOWVjNTRjO1xyXG4kc25vdzogI2Y1ZjZmNjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZ3JheTogI2JiYmNiZTtcclxuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XHJcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XHJcbiRpY2U6ICNjZmQwZDI7XHJcbiRiZy1ncmF5OiAjZjVmNWY1O1xyXG4kYmctZ3JheTI6ICNFNkU2RTc7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kbGctYmx1ZTojMDA5Q0RDO1xyXG4kbGctZ3JheTojQTNBQUIxO1xyXG4kZm9ybS1ncmF5OiM4RTg3OTg7XHJcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XHJcbiJdfQ== */";
=======
    __webpack_exports__["default"] = "/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px;\n}\n@media (min-width: 992px) {\n  .navbar {\n    padding: 0px;\n    width: 100%;\n    text-align: center;\n    height: 60px;\n  }\n}\n@media (min-width: 600px) {\n  .navbar {\n    padding: 0px;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n  }\n}\n.navbar .navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  height: 60px !important;\n}\n.btn {\n  margin: 0 auto;\n  text-align: center;\n  min-width: 150px;\n  background-color: #2196f3;\n  border-radius: 35px;\n}\n.logoutButton {\n  background-color: #383342;\n  border: 0px;\n}\n#nav-var-proof .row {\n  margin: 0;\n  padding: 0;\n}\n#nav-var-proof .right-brand {\n  background-color: #383342;\n  height: 100%;\n  padding-bottom: 12px;\n}\n#nav-var-proof .right-brand button {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n#nav-var-proof .left-brand {\n  width: 100%;\n  height: 100%;\n  background-color: #4D445A;\n}\n#nav-var-proof .left-brand p {\n  margin-top: 18px;\n  text-align: left;\n}\n#nav-var-proof .logo {\n  height: 50px;\n  width: 60%;\n}\n#nav-var-proof .logo img {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX21lZGlhX3F1ZXJpZXMuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktbmF2L2ZpbmljaXR5LW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LW5hdi9maW5pY2l0eS1uYXYuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FuamVldnNhaW5pL0Rlc2t0b3AvTm9kZUpTL0FuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzswREFBQTtBQ0lBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBRUEsZUFBQTtFQUVBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxZQUFBO0FDRUY7QUZBSTtFQ1pKO0lBYUksWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNHRjtBQUNGO0FGSUk7RUN4Qko7SUFvQkksWUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNJRjtBQUNGO0FERkU7RUFFRSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSUo7QURBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJFL0JLO0VGZ0NMLG1CQUFBO0FDR0Y7QURBQTtFQUNFLHlCRWxETztFRm1EUCxXQUFBO0FDR0Y7QURDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRUo7QURDRTtFQUNFLHlCRTdESztFRjhETCxZQUFBO0VBQ0Esb0JBQUE7QUNDSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NOO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRXhFUztBRHVFYjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FES0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktbmF2L2ZpbmljaXR5LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c2Fzcy9tZWRpYV9xdWVyaWVzXCI7XG5cblxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZCkge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh4cykge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmxvZ291dEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4jbmF2LXZhci1wcm9vZiB7XG4gIC5yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnJpZ2h0LWJyYW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxlZnQtYnJhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV3LXB1cnBsZTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNjAlO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTUVESUEgUVVFUklFU1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLm5hdmJhciAubmF2YmFyLW5hdiB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG5cbi5sb2dvdXRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzMzQyO1xuICBib3JkZXI6IDBweDtcbn1cblxuI25hdi12YXItcHJvb2YgLnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNuYXYtdmFyLXByb29mIC5yaWdodC1icmFuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODMzNDI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4jbmF2LXZhci1wcm9vZiAucmlnaHQtYnJhbmQgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4jbmF2LXZhci1wcm9vZiAubGVmdC1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDQ0NUE7XG59XG4jbmF2LXZhci1wcm9vZiAubGVmdC1icmFuZCBwIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNuYXYtdmFyLXByb29mIC5sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAlO1xufVxuI25hdi12YXItcHJvb2YgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcbiRwdXJwbGU6ICMzODMzNDI7XG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XG4kcmVkOiAjY2Y0NzQxO1xuJGxnLXJlZDogI2ZjZDdkNztcbiRncmVlbjogIzllYzU0YztcbiRzbm93OiAjZjVmNmY2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdyYXk6ICNiYmJjYmU7XG4kbGlnaHQtZ3JheTogI0VERUVFRjtcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG4kaWNlOiAjY2ZkMGQyO1xuJGJnLWdyYXk6ICNmNWY1ZjU7XG4kYmctZ3JheTI6ICNFNkU2RTc7XG4kYmx1ZTogIzIxOTZmMztcbiRsZy1ibHVlOiMwMDlDREM7XG4kbGctZ3JheTojQTNBQUIxO1xuJGZvcm0tZ3JheTojOEU4Nzk4O1xuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcbiJdfQ== */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.ts": function srcAppDashboardFinicityFinicityNavFinicityNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinicityNavComponent", function () {
      return FinicityNavComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FinicityNavComponent = /*#__PURE__*/function () {
      function FinicityNavComponent(authService, router, httpService) {
        _classCallCheck(this, FinicityNavComponent);

        this.authService = authService;
        this.router = router;
        this.httpService = httpService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listenToApplicationInfo();
      }

      _createClass(FinicityNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut($event) {
          var _this = this;

          event.preventDefault();
          this.authService.logOut().subscribe(function () {
            _this.router.navigate(['/'])["catch"](console.log);
          });
        }
      }, {
        key: "listenToApplicationInfo",
        value: function listenToApplicationInfo() {
          var _this2 = this;

          this.httpService.mainApplication$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (application) {
            _this2.mainApplication = application;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next();
        }
      }]);

      return FinicityNavComponent;
    }();

    FinicityNavComponent.ctorParameters = function () {
      return [{
        type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    FinicityNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-finicity-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finicity-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finicity-nav.component.scss */
      "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])], FinicityNavComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity-routing.module.ts": function srcAppDashboardFinicityFinicityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinicityRoutingModule", function () {
      return FinicityRoutingModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./finicity/finicity.component */
    "./src/app/dashboard/finicity/finicity/finicity.component.ts");
    /* harmony import */


    var _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-bank/select-bank.component */
    "./src/app/dashboard/finicity/select-bank/select-bank.component.ts");
    /* harmony import */


    var _dashboard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../dashboard.guard */
    "./src/app/dashboard/dashboard.guard.ts");
    /* harmony import */


    var _proof_income_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./proof-income-guard.guard */
    "./src/app/dashboard/finicity/proof-income-guard.guard.ts");

    var routes = [{
      path: '',
      component: _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_4__["FinicityComponent"],
      children: [{
        path: 'select-bank',
        component: _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_5__["SelectBankComponent"],
        canActivate: [_proof_income_guard_guard__WEBPACK_IMPORTED_MODULE_7__["ProofIncomeGuardGuard"]]
      }],
      canActivate: [_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]]
    }];

    var FinicityRoutingModule = function FinicityRoutingModule() {
      _classCallCheck(this, FinicityRoutingModule);
    };

    FinicityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]]
    })], FinicityRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity.module.ts": function srcAppDashboardFinicityFinicityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinicityModule", function () {
      return FinicityModule;
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


    var _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-bank/select-bank.component */
    "./src/app/dashboard/finicity/select-bank/select-bank.component.ts");
    /* harmony import */


    var _finicity_nav_finicity_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./finicity-nav/finicity-nav.component */
    "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.ts");
    /* harmony import */


    var _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finicity/finicity.component */
    "./src/app/dashboard/finicity/finicity/finicity.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var _finicity_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./finicity-routing.module */
    "./src/app/dashboard/finicity/finicity-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/services/script.service */
    "./src/app/shared/services/script.service.ts");
    /* harmony import */


    var _finicity_finish_bank_finicity_finish_bank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./finicity-finish-bank/finicity-finish-bank.component */
    "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.ts");
    /* harmony import */


    var _core_spinner_loading_spinner_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../core/spinner-loading/spinner-loading.component */
    "./src/app/core/spinner-loading/spinner-loading.component.ts");
    /* harmony import */


    var _finicity_error_finicity_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./finicity-error/finicity-error.component */
    "./src/app/dashboard/finicity/finicity-error/finicity-error.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var FinicityModule = function FinicityModule() {
      _classCallCheck(this, FinicityModule);
    };

    FinicityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["SelectBankComponent"], _finicity_nav_finicity_nav_component__WEBPACK_IMPORTED_MODULE_4__["FinicityNavComponent"], _finicity_nav_finicity_nav_component__WEBPACK_IMPORTED_MODULE_4__["FinicityNavComponent"], _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_5__["FinicityComponent"], _finicity_finish_bank_finicity_finish_bank_component__WEBPACK_IMPORTED_MODULE_12__["FinicityFinishBankComponent"], _core_spinner_loading_spinner_loading_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerLoadingComponent"], _finicity_error_finicity_error_component__WEBPACK_IMPORTED_MODULE_14__["FinicityErrorComponent"], _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotFindBankComponent"], _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotSupportedBankComponent"]],
      exports: [],
      entryComponents: [_select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotFindBankComponent"], _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotSupportedBankComponent"]],
      providers: [_shared_services_script_service__WEBPACK_IMPORTED_MODULE_11__["ScriptService"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _finicity_routing_module__WEBPACK_IMPORTED_MODULE_8__["FinicityRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]]
    })], FinicityModule);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity/finicity.component.scss": function srcAppDashboardFinicityFinicityFinicityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\nhtml, body {\n  background-color: #EDEEEF !important;\n}\nmain {\n  background-color: #EDEEEF;\n  color: black;\n}\n@media (min-width: 992px) {\n  main {\n    padding-left: 15px !important;\n    max-width: 960px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5L0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfbWVkaWFfcXVlcmllcy5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHkvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxmaW5pY2l0eVxcZmluaWNpdHlcXGZpbmljaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHkvZmluaWNpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzBEQUFBO0FDR0E7RUFDRSxvQ0FBQTtBQ0dGO0FEQUE7RUFDRSx5QkVFVztFRkRYLFlBQUE7QUNHRjtBRklJO0VDVEo7SUFJSSw2QkFBQTtJQUNBLGdCQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS9maW5pY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTUVESUEgUVVFUklFU1xyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgQGlmICRwb2ludCA9PSB4bCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOThweCkgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDlweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNhc3MvbWVkaWFfcXVlcmllc1wiO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobWQpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICB9XHJcbn1cclxuIiwiLyogICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1FRElBIFFVRVJJRVNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cbmh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFRUVGICFpbXBvcnRhbnQ7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFRUVGO1xuICBjb2xvcjogYmxhY2s7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgbWFpbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgfVxufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXHJcbiRwdXJwbGU6ICMzODMzNDI7XHJcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XHJcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xyXG4kcmVkOiAjY2Y0NzQxO1xyXG4kbGctcmVkOiAjZmNkN2Q3O1xyXG4kZ3JlZW46ICM5ZWM1NGM7XHJcbiRzbm93OiAjZjVmNmY2O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRncmF5OiAjYmJiY2JlO1xyXG4kbGlnaHQtZ3JheTogI0VERUVFRjtcclxuJGRhcmstZ3JheTogIzc3NzQ3ZTtcclxuJGljZTogI2NmZDBkMjtcclxuJGJnLWdyYXk6ICNmNWY1ZjU7XHJcbiRiZy1ncmF5MjogI0U2RTZFNztcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRsZy1ibHVlOiMwMDlDREM7XHJcbiRsZy1ncmF5OiNBM0FBQjE7XHJcbiRmb3JtLWdyYXk6IzhFODc5ODtcclxuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcclxuIl19 */";
=======
    __webpack_exports__["default"] = "/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\nhtml, body {\n  background-color: #EDEEEF !important;\n}\nmain {\n  background-color: #EDEEEF;\n  color: black;\n}\n@media (min-width: 992px) {\n  main {\n    padding-left: 15px !important;\n    max-width: 960px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX21lZGlhX3F1ZXJpZXMuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHkvZmluaWNpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS9maW5pY2l0eS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzBEQUFBO0FDR0E7RUFDRSxvQ0FBQTtBQ0dGO0FEQUE7RUFDRSx5QkVFVztFRkRYLFlBQUE7QUNHRjtBRklJO0VDVEo7SUFJSSw2QkFBQTtJQUNBLGdCQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS9maW5pY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c2Fzcy9tZWRpYV9xdWVyaWVzXCI7XG5cbmh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheSAhaW1wb3J0YW50O1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XG4gIGNvbG9yOiBibGFjaztcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZCkge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn1cbiIsIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5odG1sLCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUVFRiAhaW1wb3J0YW50O1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUVFRjtcbiAgY29sb3I6IGJsYWNrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIl19 */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/finicity/finicity.component.ts": function srcAppDashboardFinicityFinicityFinicityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinicityComponent", function () {
      return FinicityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FinicityComponent = /*#__PURE__*/function () {
      function FinicityComponent() {
        _classCallCheck(this, FinicityComponent);
      }

      _createClass(FinicityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FinicityComponent;
    }();

    FinicityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-finicity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finicity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity/finicity.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finicity.component.scss */
      "./src/app/dashboard/finicity/finicity/finicity.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FinicityComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/proof-income-guard.guard.ts": function srcAppDashboardFinicityProofIncomeGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProofIncomeGuardGuard", function () {
      return ProofIncomeGuardGuard;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");

    var ProofIncomeGuardGuard = /*#__PURE__*/function () {
      function ProofIncomeGuardGuard(httpService, router) {
        _classCallCheck(this, ProofIncomeGuardGuard);

        this.httpService = httpService;
        this.router = router;
      }

      _createClass(ProofIncomeGuardGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this3 = this;

          var _next$params = next.params,
              applicationId = _next$params.applicationId,
              applicantId = _next$params.applicantId;
          return this.httpService.mainApplication$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (mainApplication) {
            if (mainApplication.proofOfIncome.find(function (x) {
              return x.applicantId == applicantId;
            })) {
              return true;
            }

            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (canGo) {
            if (!canGo) {
              _this3.router.navigate(['/dashboard', applicationId])["catch"](console.log);
            }
          }));
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          var _this4 = this;

          var _next$params2 = next.params,
              applicationId = _next$params2.applicationId,
              applicantId = _next$params2.applicantId;
          return this.httpService.mainApplication$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (mainApplication) {
            if (mainApplication.proofOfIncome.find(function (x) {
              return x.applicantId === applicantId;
            })) {
              return true;
            }

            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (canGo) {
            if (!canGo) {
              _this4.router.navigate(['/dashboard', applicationId])["catch"](console.log);
            }
          }));
        }
      }]);

      return ProofIncomeGuardGuard;
    }();

    ProofIncomeGuardGuard.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ProofIncomeGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ProofIncomeGuardGuard);
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss": function srcAppDashboardFinicitySelectBankDialogNotFindBankScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "i {\n  margin-bottom: 10px;\n}\n\n.mat-dialog-actions {\n  flex-wrap: nowrap;\n}\n\n.mat-dialog-actions .mat-button {\n  min-width: 40%;\n  background-color: #2196f3;\n  border-radius: 10px;\n  border-color: #2196f3;\n}\n\n.mat-dialog-actions .mat-warning {\n  min-width: 40%;\n  border-radius: 10px;\n  background-color: #cf4741;\n  border-color: #cf4741;\n}\n\n.mat-dialog-actions .mat-button-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGRhc2hib2FyZFxcZmluaWNpdHlcXHNlbGVjdC1iYW5rXFxkaWFsb2ctbm90LWZpbmQtYmFuay5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvZGlhbG9nLW5vdC1maW5kLWJhbmsuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtBQ0FGOztBREVBO0VBRUUsaUJBQUE7QUNBRjs7QURFRTtFQUNFLGNBQUE7RUFDQSx5QkVLRztFRkpILG1CQUFBO0VBQ0EscUJFR0c7QURIUDs7QURFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRWJFO0VGY0YscUJFZEU7QURjTjs7QURHRTtFQUNFLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9zZWxlY3QtYmFuay9kaWFsb2ctbm90LWZpbmQtYmFuay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xyXG5pe1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcblxyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICAubWF0LWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XHJcbiAgfVxyXG4gIC5tYXQtd2FybmluZyB7XHJcbiAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcmVkO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtd2FybmluZyB7XG4gIG1pbi13aWR0aDogNDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y0NzQxO1xuICBib3JkZXItY29sb3I6ICNjZjQ3NDE7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcclxuJHB1cnBsZTogIzM4MzM0MjtcclxuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcclxuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XHJcbiRyZWQ6ICNjZjQ3NDE7XHJcbiRsZy1yZWQ6ICNmY2Q3ZDc7XHJcbiRncmVlbjogIzllYzU0YztcclxuJHNub3c6ICNmNWY2ZjY7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGdyYXk6ICNiYmJjYmU7XHJcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xyXG4kZGFyay1ncmF5OiAjNzc3NDdlO1xyXG4kaWNlOiAjY2ZkMGQyO1xyXG4kYmctZ3JheTogI2Y1ZjVmNTtcclxuJGJnLWdyYXkyOiAjRTZFNkU3O1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGxnLWJsdWU6IzAwOUNEQztcclxuJGxnLWdyYXk6I0EzQUFCMTtcclxuJGZvcm0tZ3JheTojOEU4Nzk4O1xyXG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xyXG4iXX0= */";
=======
    __webpack_exports__["default"] = "i {\n  margin-bottom: 10px;\n}\n\n.mat-dialog-actions {\n  flex-wrap: nowrap;\n}\n\n.mat-dialog-actions .mat-button {\n  min-width: 40%;\n  background-color: #2196f3;\n  border-radius: 10px;\n  border-color: #2196f3;\n}\n\n.mat-dialog-actions .mat-warning {\n  min-width: 40%;\n  border-radius: 10px;\n  background-color: #cf4741;\n  border-color: #cf4741;\n}\n\n.mat-dialog-actions .mat-button-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvZGlhbG9nLW5vdC1maW5kLWJhbmsuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL2RpYWxvZy1ub3QtZmluZC1iYW5rLnNjc3MiLCIvVXNlcnMvc2FuamVldnNhaW5pL0Rlc2t0b3AvTm9kZUpTL0FuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FDQUY7O0FERUE7RUFFRSxpQkFBQTtBQ0FGOztBREVFO0VBQ0UsY0FBQTtFQUNBLHlCRUtHO0VGSkgsbUJBQUE7RUFDQSxxQkVHRztBREhQOztBREVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJFYkU7RUZjRixxQkVkRTtBRGNOOztBREdFO0VBQ0UsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL2RpYWxvZy1ub3QtZmluZC1iYW5rLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XG5pe1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG5cbiAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgLm1hdC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZTtcbiAgfVxuICAubWF0LXdhcm5pbmcge1xuICAgIG1pbi13aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcbiAgICBib3JkZXItY29sb3I6ICRyZWQ7XG4gIH1cblxuICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxufVxuIiwiaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5tYXQtZGlhbG9nLWFjdGlvbnMgLm1hdC1idXR0b24ge1xuICBtaW4td2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xufVxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LXdhcm5pbmcge1xuICBtaW4td2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmNDc0MTtcbiAgYm9yZGVyLWNvbG9yOiAjY2Y0NzQxO1xufVxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXG4kcHVycGxlOiAjMzgzMzQyO1xuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xuJHJlZDogI2NmNDc0MTtcbiRsZy1yZWQ6ICNmY2Q3ZDc7XG4kZ3JlZW46ICM5ZWM1NGM7XG4kc25vdzogI2Y1ZjZmNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRncmF5OiAjYmJiY2JlO1xuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJGljZTogI2NmZDBkMjtcbiRiZy1ncmF5OiAjZjVmNWY1O1xuJGJnLWdyYXkyOiAjRTZFNkU3O1xuJGJsdWU6ICMyMTk2ZjM7XG4kbGctYmx1ZTojMDA5Q0RDO1xuJGxnLWdyYXk6I0EzQUFCMTtcbiRmb3JtLWdyYXk6IzhFODc5ODtcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XG4iXX0= */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/select-bank/select-bank.component.scss": function srcAppDashboardFinicitySelectBankSelectBankComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = ".finicity-iframe-wrapper {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.finicity-iframe-wrapper .connect-container {\n  width: 100%;\n}\n.finicity-iframe-wrapper h5 {\n  margin-top: 5%;\n}\n.link a {\n  color: #2196f3;\n}\niframe {\n  padding-left: 10% !important;\n  padding-right: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGRhc2hib2FyZFxcZmluaWNpdHlcXHNlbGVjdC1iYW5rXFxzZWxlY3QtYmFuay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL3NlbGVjdC1iYW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNGRjtBRElFO0VBQ0UsV0FBQTtBQ0ZKO0FES0U7RUFDRSxjQUFBO0FDSEo7QURVRTtFQUNFLGNFUEc7QURBUDtBRFdBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL3NlbGVjdC1iYW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmZpbmljaXR5LWlmcmFtZS13cmFwcGVyIHtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb25uZWN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4ubGluayB7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJGJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gIHBhZGRpbmctbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmZpbmljaXR5LWlmcmFtZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmluaWNpdHktaWZyYW1lLXdyYXBwZXIgLmNvbm5lY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmluaWNpdHktaWZyYW1lLXdyYXBwZXIgaDUge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmxpbmsgYSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG5pZnJhbWUge1xuICBwYWRkaW5nLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMCUgIWltcG9ydGFudDtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xyXG4kcHVycGxlOiAjMzgzMzQyO1xyXG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xyXG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcclxuJHJlZDogI2NmNDc0MTtcclxuJGxnLXJlZDogI2ZjZDdkNztcclxuJGdyZWVuOiAjOWVjNTRjO1xyXG4kc25vdzogI2Y1ZjZmNjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kZ3JheTogI2JiYmNiZTtcclxuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XHJcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XHJcbiRpY2U6ICNjZmQwZDI7XHJcbiRiZy1ncmF5OiAjZjVmNWY1O1xyXG4kYmctZ3JheTI6ICNFNkU2RTc7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kbGctYmx1ZTojMDA5Q0RDO1xyXG4kbGctZ3JheTojQTNBQUIxO1xyXG4kZm9ybS1ncmF5OiM4RTg3OTg7XHJcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XHJcbiJdfQ== */";
=======
    __webpack_exports__["default"] = ".finicity-iframe-wrapper {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.finicity-iframe-wrapper .connect-container {\n  width: 100%;\n}\n.finicity-iframe-wrapper h5 {\n  margin-top: 5%;\n}\n.link a {\n  color: #2196f3;\n}\niframe {\n  padding-left: 10% !important;\n  padding-right: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvc2VsZWN0LWJhbmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9zZWxlY3QtYmFuay9zZWxlY3QtYmFuay5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FESUU7RUFDRSxXQUFBO0FDRko7QURLRTtFQUNFLGNBQUE7QUNISjtBRFVFO0VBQ0UsY0VQRztBREFQO0FEV0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvc2VsZWN0LWJhbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XG5cbi5maW5pY2l0eS1pZnJhbWUtd3JhcHBlciB7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmNvbm5lY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGg1IHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG5cbn1cblxuLmxpbmsge1xuICBhIHtcbiAgICBjb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuaWZyYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAxMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTAlICFpbXBvcnRhbnQ7XG59XG4iLCIuZmluaWNpdHktaWZyYW1lLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5maW5pY2l0eS1pZnJhbWUtd3JhcHBlciAuY29ubmVjdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5maW5pY2l0eS1pZnJhbWUtd3JhcHBlciBoNSB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubGluayBhIHtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmctbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJSAhaW1wb3J0YW50O1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXG4kcHVycGxlOiAjMzgzMzQyO1xuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xuJHJlZDogI2NmNDc0MTtcbiRsZy1yZWQ6ICNmY2Q3ZDc7XG4kZ3JlZW46ICM5ZWM1NGM7XG4kc25vdzogI2Y1ZjZmNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRncmF5OiAjYmJiY2JlO1xuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJGljZTogI2NmZDBkMjtcbiRiZy1ncmF5OiAjZjVmNWY1O1xuJGJnLWdyYXkyOiAjRTZFNkU3O1xuJGJsdWU6ICMyMTk2ZjM7XG4kbGctYmx1ZTojMDA5Q0RDO1xuJGxnLWdyYXk6I0EzQUFCMTtcbiRmb3JtLWdyYXk6IzhFODc5ODtcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XG4iXX0= */";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/dashboard/finicity/select-bank/select-bank.component.ts": function srcAppDashboardFinicitySelectBankSelectBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectBankComponent", function () {
      return SelectBankComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogNotFindBankComponent", function () {
      return DialogNotFindBankComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogNotSupportedBankComponent", function () {
      return DialogNotSupportedBankComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/script.service */
    "./src/app/shared/services/script.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SelectBankComponent = /*#__PURE__*/function () {
      function SelectBankComponent(activeRoute, router, httpService, script, dialog) {
        _classCallCheck(this, SelectBankComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this.httpService = httpService;
        this.script = script;
        this.dialog = dialog;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.urlConnect = '';
        this.showLoading = Boolean(1);
        this.finishProcess = Boolean(0);
        this.loadingMessage = String('');
        this.hasError = Boolean(0);
        this.error = {
          title: '',
          text: '',
          buttonText: '',
          returnCode: 'NONE'
        };
        this.listenToUrlParams();
      }

      _createClass(SelectBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.deleteAllIframes();
        }
      }, {
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this5 = this;

          this.activeRoute.params.subscribe(function (params) {
            var applicantId = params.applicantId,
                applicationId = params.applicationId;
            _this5.paramsAppId = applicationId;
            _this5.paramsApplicantId = applicantId;
            console.log(_this5.paramsApplicantId + ' - ' + _this5.paramsAppId);

            _this5.listenToApplicationInfo();
          });
        }
      }, {
        key: "listenToApplicationInfo",
        value: function listenToApplicationInfo() {
          var _this6 = this;

          this.httpService.mainApplication$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function (application) {
            _this6.mainApplication = application;

            _this6.connectFinicity();

            console.log(_this6.mainApplication);
          }); // this.httpService.getUrlFromFinicity(this.paramsAppId,this.paramsApplicantId).
        }
      }, {
        key: "connectFinicity",
        value: function connectFinicity() {
          var _this7 = this;

          this.loadingMessage = 'Connecting with Mastercard';
          this.httpService.generateUrl(this.paramsAppId, this.paramsApplicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this7.showConnectionError(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe(function (res) {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"])) {
              _this7.urlConnect = res.link;

              _this7.script.load('finicity').then(function (data) {
                var loadSubscribe = document.getElementById('connect-container');

                if (loadSubscribe) {
                  // @ts-ignore
                  window.finicityConnect.launch(_this7.urlConnect, {
                    selector: '#connect-container',
                    success: function success(event) {
                      console.log('Yay! User went through Connect', event);

                      if (event.reason === 'complete' && event.reportData !== undefined) {
                        try {
                          _this7.reportId = event.reportData[0].reportId;
                        } catch (e) {
                          console.log(e);
                        }
                      } // @ts-ignore


                      window.finicityConnect.destroy();

                      _this7.finishProcessService();
                    },
                    cancel: function cancel(event) {
                      console.log('The user cancelled the iframe', event);

                      _this7.cancelProcess();
                    },
                    error: function error(_error) {
                      console.error('Some runtime error was generated during insideConnect ', _error); // @ts-ignore

                      _this7.unhandledError(_error);
                    },
                    loaded: function loaded() {
                      console.log('This gets called only once after the iframe has finished loading ');
                      document.getElementById('finicityConnectIframe').style.height = '755px';
                      document.getElementById('finicityConnectIframe').style.minWidth = '100%';
                      _this7.showLoading = false;
                    },
                    route: function route(event) {
                      if (event.data.screen === 'select-accounts') {
                        _this7.httpService.journalLogIn(_this7.paramsAppId, _this7.paramsApplicantId, event.data.screen, event.data.params.institutionId).subscribe();
                      }

                      console.log('This is called as the user navigates through Connect ', event);
                    },
                    user: function user(event) {
                      console.log('This is called as the user interacts with Connect ', event);

                      try {
                        if (event.data.action === 'SelectInstitution' && !event.data.supported) {
                          _this7.bankNotSupported(_this7.paramsApplicantId);
                        }
                      } catch (e) {
                        console.log('e');
                      }
                    }
                  });
                }
              })["catch"](function (error) {
                console.log(error);

                _this7.showUnexpectedError(error);
              });
            }
          }, function (error) {
            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["TimeoutError"]) {
              _this7.showTimeOutError(error);
            } else {
              _this7.showConnectionError(error);
            }
          });
        }
      }, {
        key: "errorProcess",
        value: function errorProcess(error, deleteIframes) {
          this.showLoading = false;
          this.finishProcess = false;
          this.hasError = true;

          if (deleteIframes) {
            try {
              // @ts-ignore
              window.finicityConnect.destroy();
            } catch (e) {
              console.log(e);
            }

            this.deleteAllIframes();
          }
        }
      }, {
        key: "showConnectionError",
        value: function showConnectionError(err) {
          this.errorProcess(err, true);
          this.error = {
            title: 'Network Error',
            text: 'Sorry, the operation couldn’t be completed. Please try again later.',
            buttonText: 'TRY AGAIN',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "showFinicityError",
        value: function showFinicityError(err) {
          this.errorProcess(err, true);
          console.log(err);
          this.error = {
            title: 'Please check!',
            text: err,
            buttonText: 'EXIT',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "showFinicityTitleError",
        value: function showFinicityTitleError(err, title) {
          this.errorProcess(err, true);
          console.log(err);
          this.error = {
            title: title,
            text: err,
            buttonText: 'EXIT',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "showUnexpectedError",
        value: function showUnexpectedError(err) {
          this.errorProcess(err, true);
          this.error = {
            title: 'Opss!',
            text: 'Something went wrong. We are working on getting this fixed as soon as we can.',
            buttonText: 'Retry',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "unhandledError",
        value: function unhandledError(err) {
          this.errorProcess(err, true);
          this.error = {
            title: 'Opss!',
            text: 'Something went wrong. We are working on getting this fixed as soon as we can.',
            buttonText: 'Retry',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "showTimeOutError",
        value: function showTimeOutError(err) {
          this.errorProcess(err, true);
          this.error = {
            title: 'Time Out',
            text: 'A network related error occurred while connecting. Please try one more time.',
            buttonText: 'TRY AGAIN',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "cancelProcess",
        value: function cancelProcess() {
          this.errorProcess('', true);
          this.error = {
            title: 'Oops!',
            text: 'You have closed the window during the connection. Please try again.',
            buttonText: 'TRY AGAIN',
            returnCode: 'RETRY'
          };
        }
      }, {
        key: "deleteAllIframes",
        value: function deleteAllIframes() {
          var iframes = document.querySelectorAll('iframe');

          for (var i = 0; i < iframes.length; i++) {
            if (iframes[i].title !== 'voiceflow-chat') {
              iframes[i].parentNode.removeChild(iframes[i]);
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.deleteAllIframes(); // @ts-ignore

          if (window.finicityConnect) {
            // @ts-ignore
            window.finicityConnect.destroy();
          }

          this.destroyed$.next();
        }
      }, {
        key: "finishProcessService",
        value: function finishProcessService() {
          var _this8 = this;

          this.loadingMessage = 'Processing ...';
          this.showLoading = true;
          this.deleteAllIframes();
          this.httpService.closeProofOfIncome(this.paramsAppId, this.paramsApplicantId, this.reportId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            // Finicity Error
            if (error && error.error) {
              if (error.error.detail) {
                var finicityError = JSON.parse(error.error.detail);
                console.log('Controlled Error ', finicityError.message);
                var errorText = finicityError.message;

                if (finicityError.message.includes('No matching account types apply')) {
                  errorText = 'A source of income was not found on the selected bank account.\nKindly select an alternate bank account with a source of income or upload documentation that presents your income details.';

                  _this8.showFinicityTitleError(errorText, 'Income Cannot be Verified');
                } else {
                  _this8.showFinicityError(errorText);
                }

                return [];
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            }

            console.log('Generic Error ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe(function (url) {
            _this8.showLoading = false;
            _this8.finishProcess = true;
          }, function (error) {
            _this8.showConnectionError(error);
          });
        }
      }, {
        key: "bankNotSupported",
        value: function bankNotSupported(paramsApplicantId) {
          var _this9 = this;

          this.dialog.open(DialogNotSupportedBankComponent, {
            panelClass: 'custom-dialog-container',
            data: this.mainApplication.proofOfIncome.find(function (i) {
              return i.applicantId == paramsApplicantId;
            })
          }).afterClosed().subscribe(function (result) {
            if (result === 'uploads') {
              _this9.httpService.proofOfIncomeDecline(_this9.paramsAppId, _this9.paramsApplicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                // Finicity Error
                if (error && error.error) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                }

                console.log('Generic Error ', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe(function (url) {
                _this9.router.navigate(['/dashboard', _this9.paramsAppId, 'upload-documents'])["catch"](console.log);
              }, function (error) {
                console.log(error);

                _this9.showConnectionError(error);
              });
            }
          });
        }
      }, {
        key: "bankNotFound",
        value: function bankNotFound(event, paramsApplicantId) {
          var _this10 = this;

          event.preventDefault();
          console.log(paramsApplicantId);
          console.log(this.mainApplication.proofOfIncome.find(function (i) {
            return i.applicantId == paramsApplicantId;
          }));
          this.dialog.open(DialogNotFindBankComponent, {
            panelClass: 'custom-dialog-container',
            data: this.mainApplication.proofOfIncome.find(function (i) {
              return i.applicantId == paramsApplicantId;
            })
          }).afterClosed().subscribe(function (result) {
            if (result === 'uploads') {
              _this10.httpService.proofOfIncomeDecline(_this10.paramsAppId, _this10.paramsApplicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                // Finicity Error
                if (error && error.error) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                }

                console.log('Generic Error ', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe(function (url) {
                _this10.router.navigate(['/dashboard', _this10.paramsAppId, 'upload-documents'])["catch"](console.log);
              }, function (error) {
                console.log(error);

                _this10.showConnectionError(error);
              });
            }
          });
        }
      }, {
        key: "actionError",
        value: function actionError($eve) {
          if ($eve === 'RETRY') {
            window.location.reload();
          } else if ($eve === 'EXIT') {
            this.deleteAllIframes();
            this.router.navigate(['/dashboard', this.paramsAppId])["catch"](console.log);
          }
        }
      }]);

      return SelectBankComponent;
    }();

    SelectBankComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _shared_services_script_service__WEBPACK_IMPORTED_MODULE_6__["ScriptService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    SelectBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-select-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-bank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/select-bank.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-bank.component.scss */
      "./src/app/dashboard/finicity/select-bank/select-bank.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _shared_services_script_service__WEBPACK_IMPORTED_MODULE_6__["ScriptService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])], SelectBankComponent);

    var DialogNotFindBankComponent =
    /*#__PURE__*/
    // tslint:disable-next-line:component-class-suffix
    function () {
      function DialogNotFindBankComponent(data, dialogRef) {
        _classCallCheck(this, DialogNotFindBankComponent);

        this.data = data;
        this.dialogRef = dialogRef;
      }

      _createClass(DialogNotFindBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // will log the entire data object
          console.log(this.data);
          this.proofOfIncomeTask = this.data;
        }
      }, {
        key: "continueWithFinicity",
        value: function continueWithFinicity() {
          this.dialogRef.close('continue');
        }
      }, {
        key: "goToUploads",
        value: function goToUploads() {
          this.dialogRef.close('uploads');
        }
      }]);

      return DialogNotFindBankComponent;
    }();

    DialogNotFindBankComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]
      }];
    };

    DialogNotFindBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-dialog-not-find-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-not-find-bank.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-not-find-bank.scss */
      "./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss"))["default"]]
    }) // tslint:disable-next-line:component-class-suffix
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])], DialogNotFindBankComponent);

    var DialogNotSupportedBankComponent = /*#__PURE__*/function () {
      function DialogNotSupportedBankComponent(data, dialogRef) {
        _classCallCheck(this, DialogNotSupportedBankComponent);

        this.data = data;
        this.dialogRef = dialogRef;
      }

      _createClass(DialogNotSupportedBankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // will log the entire data object
          console.log(this.data);
          this.proofOfIncomeTask = this.data;
        }
      }, {
        key: "goToUploads",
        value: function goToUploads() {
          this.dialogRef.close('uploads');
        }
      }]);

      return DialogNotSupportedBankComponent;
    }();

    DialogNotSupportedBankComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]
      }];
    };

    DialogNotSupportedBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-dialog-not-supported-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-not-supported-bank.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-supported-bank.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-not-find-bank.scss */
      "./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])], DialogNotSupportedBankComponent);
    /***/
  }
}]);
//# sourceMappingURL=finicity-finicity-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finicity-finicity-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/spinner-loading/spinner-loading.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/spinner-loading/spinner-loading.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading-wrapper\">\n  <h3>{{message}}</h3>\n  <div class=\"loading-indicator\">\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-error/finicity-error.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-error/finicity-error.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"finicity-finish\">\n\n  <div class=\"logo-brand img-responsive\">\n    <img src=\"assets/finicity-trans.png\" class=\"logo\"/>\n  </div>\n  <div class=\"text\">\n    <img src=\"assets/icon-alert.svg\">\n    <h1>{{title}}</h1>\n    <p>{{text}}</p>\n  </div>\n  <div class=\"button-bar\">\n    <button (click)=\"actionBt()\" class=\"btn btn-blue float-right\">{{buttonText}}</button>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"finicity-finish\">\n\n  <div class=\"logo-brand img-responsive\">\n    <img src=\"assets/finicity-trans.png\" class=\"logo\"/>\n  </div>\n  <div class=\"text\">\n    <img src=\"assets/icon-success.svg\">\n    <h1>Thank you!</h1>\n    <p>The proof of income source you selected was added successfully.<br/>We will be contacting you later if any additional information is required.</p>\n  </div>\n  <div class=\"button-bar\">\n    <button [routerLink]=\"['/dashboard', applicationId]\" class=\"btn btn-blue float-right\">FINISH & CLOSE</button>\n  </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-top\" id=\"nav-var-proof\">\n  <div class=\"left-brand\">\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <img class=\"logo\" src=\"/assets/icon-te.svg\" alt=\"\"/>\n      </div>\n      <div class=\"col-6\">\n        <p *ngIf=\"mainApplication?.address\">    <i class=\"tev-icon tev-icon--location\"></i> {{mainApplication.address}}</p>\n      </div>\n      <div class=\"col-sm-4 col-xs-12 right-brand\">\n        <button [routerLink]=\"['/dashboard', mainApplication.applicationId]\" class=\"btn btn-success\">My Dashboard</button>\n        <button (click)=\"logOut($event)\" class=\"btn btn-success logoutButton\">Log Out</button>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity/finicity.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity/finicity.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tev-finicity-nav></tev-finicity-nav>\n<main role=\"main\" class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<i class=\"tev-icon tev-icon--tenant-logo\"></i>\n<h2 mat-dialog-title>Proof of income<br/>\n  documents</h2>\n<div mat-dialog-content>\n  <p>If you don't have the Online Banking Credentials, the association will require the following documents to be provided:</p>\n\n  <ul>\n    <li *ngFor=\"let document of proofOfIncomeTask.task\">\n      {{document.description}}\n    </li>\n  </ul>\n  <h2 mat-dialog-title>Would you like to do?</h2>\n</div>\n<div mat-dialog-actions>\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"continueWithFinicity()\" class=\"mat-dialog-actions mat-button mat-warning\">CONTINUE WITH ONLINE BANKING</button>\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"goToUploads()\" class=\"mat-dialog-actions mat-button\">UPLOAD DOCUMENTS NOW</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-supported-bank.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-supported-bank.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<i class=\"tev-icon tev-icon--tenant-logo\"></i>\n<h2 mat-dialog-title>Proof of income<br/>\n  documents</h2>\n<div mat-dialog-content>\n  <p>The selected bank account is not available at this time. As a replacement, the association requires the following documents:</p>\n\n  <ul>\n    <li *ngFor=\"let document of proofOfIncomeTask.task\">\n      {{document.description}}\n    </li>\n  </ul>\n</div>\n<div mat-dialog-actions>\n  <button style=\"padding:1.5em;\" mat-button mat-dialog-close (click)=\"goToUploads()\" class=\"mat-dialog-actions mat-button\">UPLOAD DOCUMENTS NOW</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/select-bank.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/select-bank.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div>\n      <a [routerLink]=\"['/dashboard', paramsAppId]\" class=\"back-link\">\n        <span class=\"tev-icon tev-icon--back\"></span>\n        BACK</a>\n    </div>\n\n    <div *ngIf=\"!finishProcess && !hasError\">\n      <h1>Select your Bank Account(s)</h1>\n      <p>Select the Bank or Investment Account that you wish to provide to verify income.</p>\n      <div class=\"finicity-iframe-wrapper\">\n        <div id=\"connect-container\">\n          <!-- <iframe [src]=\"urlConnect | safe\" ></iframe> -->\n        </div>\n\n      </div>\n      <!-- *ngIf=\"!showLoading && !finishProcess && !hasError\"-->\n\n    </div>\n\n    <tev-finicity-finish-bank [applicationId]=\"paramsAppId\" *ngIf=\"finishProcess\"></tev-finicity-finish-bank>\n    <tev-spinner-loading *ngIf=\"showLoading\" [message]=\"loadingMessage\"></tev-spinner-loading>\n    <tev-finicity-error [applicationId]=\"paramsAppId\" [error]=\"error\"\n                         (actionButton)=\"actionError($event)\" *ngIf=\"hasError\"></tev-finicity-error>\n    <p *ngIf=\"!showLoading && !finishProcess\" class=\"link float-right\"><a href=\"#\"\n                                    (click)=\"bankNotFound($event,paramsApplicantId)\">I\n      can’t find my financial institution.</a></p>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/core/spinner-loading/spinner-loading.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/core/spinner-loading/spinner-loading.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-wrapper {\n  text-align: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-color: #EDEEEF;\n  background-size: 100%;\n  z-index: 999;\n}\n.loading-wrapper h3 {\n  padding-top: 15%;\n  padding-bottom: 5%;\n}\n.loading-wrapper .loading-indicator {\n  height: 2em;\n  width: 2em;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zcGlubmVyLWxvYWRpbmcvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFxjb3JlXFxzcGlubmVyLWxvYWRpbmdcXHNwaW5uZXItbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zcGlubmVyLWxvYWRpbmcvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb3JlL3NwaW5uZXItbG9hZGluZy9zcGlubmVyLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkNJVztFREhYLHFCQUFBO0VBQ0EsWUFBQTtBRUFGO0FGRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FFQUo7QUZHRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUVESiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc3Bpbm5lci1sb2FkaW5nL3NwaW5uZXItbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbi5sb2FkaW5nLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcblxuICBoM3tcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuXG4gIC5sb2FkaW5nLWluZGljYXRvciB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbn1cbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXG4kcHVycGxlOiAjMzgzMzQyO1xuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xuJHJlZDogI2NmNDc0MTtcbiRsZy1yZWQ6ICNmY2Q3ZDc7XG4kZ3JlZW46ICM5ZWM1NGM7XG4kc25vdzogI2Y1ZjZmNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRncmF5OiAjYmJiY2JlO1xuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJGljZTogI2NmZDBkMjtcbiRiZy1ncmF5OiAjZjVmNWY1O1xuJGJnLWdyYXkyOiAjRTZFNkU3O1xuJGJsdWU6ICMyMTk2ZjM7XG4kbGctYmx1ZTojMDA5Q0RDO1xuJGxnLWdyYXk6I0EzQUFCMTtcbiRmb3JtLWdyYXk6IzhFODc5ODtcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XG4iLCIubG9hZGluZy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFRUVGO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5sb2FkaW5nLXdyYXBwZXIgaDMge1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4ubG9hZGluZy13cmFwcGVyIC5sb2FkaW5nLWluZGljYXRvciB7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/spinner-loading/spinner-loading.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/spinner-loading/spinner-loading.component.ts ***!
  \*******************************************************************/
/*! exports provided: SpinnerLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerLoadingComponent", function() { return SpinnerLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerLoadingComponent = class SpinnerLoadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpinnerLoadingComponent.prototype, "message", void 0);
SpinnerLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-spinner-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner-loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/spinner-loading/spinner-loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner-loading.component.scss */ "./src/app/core/spinner-loading/spinner-loading.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SpinnerLoadingComponent);



/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-error/finicity-error.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-error/finicity-error.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".finicity-finish .logo-brand {\n  width: 100%;\n  min-height: 100px;\n  background-color: #383342;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.finicity-finish .logo-brand .logo {\n  height: 50px;\n  max-width: 90%;\n  margin-top: 25px;\n  margin-right: 50px;\n  float: right;\n}\n.finicity-finish .text {\n  background-color: white;\n  padding-top: 80px;\n  text-align: center;\n  min-height: 300px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-bottom: 20px;\n}\n.finicity-finish .text h1 {\n  font-size: 28px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text p {\n  font-size: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.finicity-finish .button-bar {\n  margin-top: 40px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWVycm9yL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxmaW5pY2l0eVxcZmluaWNpdHktZXJyb3JcXGZpbmljaXR5LWVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZXJyb3IvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZXJyb3IvZmluaWNpdHktZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNOSztFRE9MLDRCQUFBO0VBQ0EsNkJBQUE7QUVISjtBRktJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRUhOO0FGT0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBRUxKO0FGT0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUVMTjtBRlFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRU5OO0FGU0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRVBOO0FGWUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRVZKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWVycm9yL2ZpbmljaXR5LWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xuXG4uZmluaWNpdHktZmluaXNoIHtcblxuICAubG9nby1icmFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB9XG5cbiAgfVxuXG4gIC5idXR0b24tYmFyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG5cbn1cbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXG4kcHVycGxlOiAjMzgzMzQyO1xuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xuJHJlZDogI2NmNDc0MTtcbiRsZy1yZWQ6ICNmY2Q3ZDc7XG4kZ3JlZW46ICM5ZWM1NGM7XG4kc25vdzogI2Y1ZjZmNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRncmF5OiAjYmJiY2JlO1xuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJGljZTogI2NmZDBkMjtcbiRiZy1ncmF5OiAjZjVmNWY1O1xuJGJnLWdyYXkyOiAjRTZFNkU3O1xuJGJsdWU6ICMyMTk2ZjM7XG4kbGctYmx1ZTojMDA5Q0RDO1xuJGxnLWdyYXk6I0EzQUFCMTtcbiRmb3JtLWdyYXk6IzhFODc5ODtcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XG4iLCIuZmluaWNpdHktZmluaXNoIC5sb2dvLWJyYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzMzQyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLmxvZ28tYnJhbmQgLmxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQgaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLmZpbmljaXR5LWZpbmlzaCAuYnV0dG9uLWJhciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-error/finicity-error.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-error/finicity-error.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FinicityErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinicityErrorComponent", function() { return FinicityErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinicityErrorComponent = class FinicityErrorComponent {
    constructor() {
        this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.text = this.error.text;
        this.buttonText = this.error.buttonText;
        this.title = this.error.title;
    }
    actionBt() {
        this.actionButton.emit(this.error.returnCode);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FinicityErrorComponent.prototype, "applicationId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FinicityErrorComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FinicityErrorComponent.prototype, "actionButton", void 0);
FinicityErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-finicity-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finicity-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-error/finicity-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finicity-error.component.scss */ "./src/app/dashboard/finicity/finicity-error/finicity-error.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FinicityErrorComponent);



/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".finicity-finish .logo-brand {\n  width: 100%;\n  min-height: 100px;\n  background-color: #383342;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.finicity-finish .logo-brand .logo {\n  height: 50px;\n  max-width: 90%;\n  margin-top: 25px;\n  margin-right: 50px;\n  float: right;\n}\n.finicity-finish .text {\n  background-color: white;\n  padding-top: 80px;\n  text-align: center;\n  min-height: 300px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-bottom: 20px;\n}\n.finicity-finish .text h1 {\n  font-size: 28px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n}\n.finicity-finish .text p {\n  font-size: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.finicity-finish .button-bar {\n  margin-top: 40px;\n  width: 100%;\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWZpbmlzaC1iYW5rL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxmaW5pY2l0eVxcZmluaWNpdHktZmluaXNoLWJhbmtcXGZpbmljaXR5LWZpbmlzaC1iYW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZmluaXNoLWJhbmsvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktZmluaXNoLWJhbmsvZmluaWNpdHktZmluaXNoLWJhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNOSztFRE9MLDRCQUFBO0VBQ0EsNkJBQUE7QUVISjtBRktJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRUhOO0FGT0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBRUxKO0FGT0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUVMTjtBRlFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRU5OO0FGU0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRVBOO0FGWUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRVZKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LWZpbmlzaC1iYW5rL2ZpbmljaXR5LWZpbmlzaC1iYW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xuXG4uZmluaWNpdHktZmluaXNoIHtcblxuICAubG9nby1icmFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB9XG5cbiAgfVxuXG4gIC5idXR0b24tYmFyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG5cbn1cbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXG4kcHVycGxlOiAjMzgzMzQyO1xuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xuJHJlZDogI2NmNDc0MTtcbiRsZy1yZWQ6ICNmY2Q3ZDc7XG4kZ3JlZW46ICM5ZWM1NGM7XG4kc25vdzogI2Y1ZjZmNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRncmF5OiAjYmJiY2JlO1xuJGxpZ2h0LWdyYXk6ICNFREVFRUY7XG4kZGFyay1ncmF5OiAjNzc3NDdlO1xuJGljZTogI2NmZDBkMjtcbiRiZy1ncmF5OiAjZjVmNWY1O1xuJGJnLWdyYXkyOiAjRTZFNkU3O1xuJGJsdWU6ICMyMTk2ZjM7XG4kbGctYmx1ZTojMDA5Q0RDO1xuJGxnLWdyYXk6I0EzQUFCMTtcbiRmb3JtLWdyYXk6IzhFODc5ODtcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XG4iLCIuZmluaWNpdHktZmluaXNoIC5sb2dvLWJyYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzMzQyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLmxvZ28tYnJhbmQgLmxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5maW5pY2l0eS1maW5pc2ggLnRleHQgaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZmluaWNpdHktZmluaXNoIC50ZXh0IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLmZpbmljaXR5LWZpbmlzaCAuYnV0dG9uLWJhciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FinicityFinishBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinicityFinishBankComponent", function() { return FinicityFinishBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinicityFinishBankComponent = class FinicityFinishBankComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FinicityFinishBankComponent.prototype, "applicationId", void 0);
FinicityFinishBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-finicity-finish-bank',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finicity-finish-bank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finicity-finish-bank.component.scss */ "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FinicityFinishBankComponent);



/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px;\n}\n@media (min-width: 992px) {\n  .navbar {\n    padding: 0px;\n    width: 100%;\n    text-align: center;\n    height: 60px;\n  }\n}\n@media (min-width: 600px) {\n  .navbar {\n    padding: 0px;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n  }\n}\n.navbar .navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  height: 60px !important;\n}\n.btn {\n  margin: 0 auto;\n  text-align: center;\n  min-width: 150px;\n  background-color: #2196f3;\n  border-radius: 35px;\n}\n.logoutButton {\n  background-color: #383342;\n  border: 0px;\n}\n#nav-var-proof .row {\n  margin: 0;\n  padding: 0;\n}\n#nav-var-proof .right-brand {\n  background-color: #383342;\n  height: 100%;\n  padding-bottom: 12px;\n}\n#nav-var-proof .right-brand button {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n#nav-var-proof .left-brand {\n  width: 100%;\n  height: 100%;\n  background-color: #4D445A;\n}\n#nav-var-proof .left-brand p {\n  margin-top: 18px;\n  text-align: left;\n}\n#nav-var-proof .logo {\n  height: 50px;\n  width: 60%;\n}\n#nav-var-proof .logo img {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5LW5hdi9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfbWVkaWFfcXVlcmllcy5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktbmF2L0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxmaW5pY2l0eVxcZmluaWNpdHktbmF2XFxmaW5pY2l0eS1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS1uYXYvZmluaWNpdHktbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktbmF2L0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzswREFBQTtBQ0lBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBRUEsZUFBQTtFQUVBLG1CQUFBO0VBRUEsOEJBQUE7RUFDQSxZQUFBO0FDRUY7QUZBSTtFQ1pKO0lBYUksWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNHRjtBQUNGO0FGSUk7RUN4Qko7SUFvQkksWUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNJRjtBQUNGO0FERkU7RUFFRSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSUo7QURBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJFL0JLO0VGZ0NMLG1CQUFBO0FDR0Y7QURBQTtFQUNFLHlCRWxETztFRm1EUCxXQUFBO0FDR0Y7QURDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRUo7QURDRTtFQUNFLHlCRTdESztFRjhETCxZQUFBO0VBQ0Esb0JBQUE7QUNDSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NOO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRXhFUztBRHVFYjtBREdJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FES0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHktbmF2L2ZpbmljaXR5LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c2Fzcy9tZWRpYV9xdWVyaWVzXCI7XG5cblxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZCkge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh4cykge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmxvZ291dEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGU7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4jbmF2LXZhci1wcm9vZiB7XG4gIC5yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnJpZ2h0LWJyYW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxlZnQtYnJhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV3LXB1cnBsZTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNjAlO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTUVESUEgUVVFUklFU1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLm5hdmJhciAubmF2YmFyLW5hdiB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG5cbi5sb2dvdXRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzMzQyO1xuICBib3JkZXI6IDBweDtcbn1cblxuI25hdi12YXItcHJvb2YgLnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNuYXYtdmFyLXByb29mIC5yaWdodC1icmFuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODMzNDI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4jbmF2LXZhci1wcm9vZiAucmlnaHQtYnJhbmQgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4jbmF2LXZhci1wcm9vZiAubGVmdC1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDQ0NUE7XG59XG4jbmF2LXZhci1wcm9vZiAubGVmdC1icmFuZCBwIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNuYXYtdmFyLXByb29mIC5sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAlO1xufVxuI25hdi12YXItcHJvb2YgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcbiRwdXJwbGU6ICMzODMzNDI7XG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XG4kcmVkOiAjY2Y0NzQxO1xuJGxnLXJlZDogI2ZjZDdkNztcbiRncmVlbjogIzllYzU0YztcbiRzbm93OiAjZjVmNmY2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdyYXk6ICNiYmJjYmU7XG4kbGlnaHQtZ3JheTogI0VERUVFRjtcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG4kaWNlOiAjY2ZkMGQyO1xuJGJnLWdyYXk6ICNmNWY1ZjU7XG4kYmctZ3JheTI6ICNFNkU2RTc7XG4kYmx1ZTogIzIxOTZmMztcbiRsZy1ibHVlOiMwMDlDREM7XG4kbGctZ3JheTojQTNBQUIxO1xuJGZvcm0tZ3JheTojOEU4Nzk4O1xuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.ts ***!
  \***************************************************************************/
/*! exports provided: FinicityNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinicityNavComponent", function() { return FinicityNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let FinicityNavComponent = class FinicityNavComponent {
    constructor(authService, router, httpService) {
        this.authService = authService;
        this.router = router;
        this.httpService = httpService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listenToApplicationInfo();
    }
    ngOnInit() {
    }
    logOut($event) {
        event.preventDefault();
        this.authService
            .logOut()
            .subscribe(() => {
            this.router
                .navigate(['/'])
                .catch(console.log);
        });
    }
    listenToApplicationInfo() {
        this.httpService
            .mainApplication$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe(application => {
            this.mainApplication = application;
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
};
FinicityNavComponent.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
FinicityNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-finicity-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finicity-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finicity-nav.component.scss */ "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], FinicityNavComponent);



/***/ }),

/***/ "./src/app/dashboard/finicity/finicity-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FinicityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinicityRoutingModule", function() { return FinicityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finicity/finicity.component */ "./src/app/dashboard/finicity/finicity/finicity.component.ts");
/* harmony import */ var _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-bank/select-bank.component */ "./src/app/dashboard/finicity/select-bank/select-bank.component.ts");
/* harmony import */ var _dashboard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard.guard */ "./src/app/dashboard/dashboard.guard.ts");
/* harmony import */ var _proof_income_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proof-income-guard.guard */ "./src/app/dashboard/finicity/proof-income-guard.guard.ts");








const routes = [
    {
        path: '',
        component: _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_4__["FinicityComponent"],
        children: [
            { path: 'select-bank', component: _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_5__["SelectBankComponent"], canActivate: [_proof_income_guard_guard__WEBPACK_IMPORTED_MODULE_7__["ProofIncomeGuardGuard"]] },
        ],
        canActivate: [_dashboard_guard__WEBPACK_IMPORTED_MODULE_6__["DashboardGuard"]]
    },
];
let FinicityRoutingModule = class FinicityRoutingModule {
};
FinicityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"],
        ]
    })
], FinicityRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/finicity/finicity.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity.module.ts ***!
  \*******************************************************/
/*! exports provided: FinicityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinicityModule", function() { return FinicityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-bank/select-bank.component */ "./src/app/dashboard/finicity/select-bank/select-bank.component.ts");
/* harmony import */ var _finicity_nav_finicity_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finicity-nav/finicity-nav.component */ "./src/app/dashboard/finicity/finicity-nav/finicity-nav.component.ts");
/* harmony import */ var _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finicity/finicity.component */ "./src/app/dashboard/finicity/finicity/finicity.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _finicity_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finicity-routing.module */ "./src/app/dashboard/finicity/finicity-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/script.service */ "./src/app/shared/services/script.service.ts");
/* harmony import */ var _finicity_finish_bank_finicity_finish_bank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finicity-finish-bank/finicity-finish-bank.component */ "./src/app/dashboard/finicity/finicity-finish-bank/finicity-finish-bank.component.ts");
/* harmony import */ var _core_spinner_loading_spinner_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/spinner-loading/spinner-loading.component */ "./src/app/core/spinner-loading/spinner-loading.component.ts");
/* harmony import */ var _finicity_error_finicity_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./finicity-error/finicity-error.component */ "./src/app/dashboard/finicity/finicity-error/finicity-error.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
















let FinicityModule = class FinicityModule {
};
FinicityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["SelectBankComponent"],
            _finicity_nav_finicity_nav_component__WEBPACK_IMPORTED_MODULE_4__["FinicityNavComponent"],
            _finicity_nav_finicity_nav_component__WEBPACK_IMPORTED_MODULE_4__["FinicityNavComponent"],
            _finicity_finicity_component__WEBPACK_IMPORTED_MODULE_5__["FinicityComponent"],
            _finicity_finish_bank_finicity_finish_bank_component__WEBPACK_IMPORTED_MODULE_12__["FinicityFinishBankComponent"],
            _core_spinner_loading_spinner_loading_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerLoadingComponent"],
            _finicity_error_finicity_error_component__WEBPACK_IMPORTED_MODULE_14__["FinicityErrorComponent"],
            _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotFindBankComponent"],
            _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotSupportedBankComponent"]
        ],
        exports: [],
        entryComponents: [
            _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotFindBankComponent"],
            _select_bank_select_bank_component__WEBPACK_IMPORTED_MODULE_3__["DialogNotSupportedBankComponent"],
        ],
        providers: [_shared_services_script_service__WEBPACK_IMPORTED_MODULE_11__["ScriptService"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _finicity_routing_module__WEBPACK_IMPORTED_MODULE_8__["FinicityRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]
        ]
    })
], FinicityModule);



/***/ }),

/***/ "./src/app/dashboard/finicity/finicity/finicity.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity/finicity.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\nhtml, body {\n  background-color: #EDEEEF !important;\n}\nmain {\n  background-color: #EDEEEF;\n  color: black;\n}\n@media (min-width: 992px) {\n  main {\n    padding-left: 15px !important;\n    max-width: 960px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5L0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXHNhc3NcXF9tZWRpYV9xdWVyaWVzLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGRhc2hib2FyZFxcZmluaWNpdHlcXGZpbmljaXR5XFxmaW5pY2l0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L2ZpbmljaXR5L2ZpbmljaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvZmluaWNpdHkvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzBEQUFBO0FDR0E7RUFDRSxvQ0FBQTtBQ0dGO0FEQUE7RUFDRSx5QkVFVztFRkRYLFlBQUE7QUNHRjtBRklJO0VDVEo7SUFJSSw2QkFBQTtJQUNBLGdCQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9maW5pY2l0eS9maW5pY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c2Fzcy9tZWRpYV9xdWVyaWVzXCI7XG5cbmh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheSAhaW1wb3J0YW50O1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XG4gIGNvbG9yOiBibGFjaztcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtZCkge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn1cbiIsIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5odG1sLCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUVFRiAhaW1wb3J0YW50O1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUVFRjtcbiAgY29sb3I6IGJsYWNrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/finicity/finicity/finicity.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/finicity/finicity/finicity.component.ts ***!
  \*******************************************************************/
/*! exports provided: FinicityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinicityComponent", function() { return FinicityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinicityComponent = class FinicityComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinicityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-finicity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finicity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/finicity/finicity.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finicity.component.scss */ "./src/app/dashboard/finicity/finicity/finicity.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FinicityComponent);



/***/ }),

/***/ "./src/app/dashboard/finicity/proof-income-guard.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/finicity/proof-income-guard.guard.ts ***!
  \****************************************************************/
/*! exports provided: ProofIncomeGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofIncomeGuardGuard", function() { return ProofIncomeGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");





let ProofIncomeGuardGuard = class ProofIncomeGuardGuard {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    canActivate(next, state) {
        const { applicationId, applicantId } = next.params;
        return this.httpService.mainApplication$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mainApplication => {
            if (mainApplication.proofOfIncome.find(x => x.applicantId == applicantId)) {
                return true;
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(canGo => {
            if (!canGo) {
                this.router
                    .navigate(['/dashboard', applicationId])
                    .catch(console.log);
            }
        }));
    }
    canActivateChild(next, state) {
        const { applicationId, applicantId } = next.params;
        return this.httpService.mainApplication$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mainApplication => {
            if (mainApplication.proofOfIncome.find(x => x.applicantId === applicantId)) {
                return true;
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(canGo => {
            if (!canGo) {
                this.router
                    .navigate(['/dashboard', applicationId])
                    .catch(console.log);
            }
        }));
    }
};
ProofIncomeGuardGuard.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProofIncomeGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProofIncomeGuardGuard);



/***/ }),

/***/ "./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  margin-bottom: 10px;\n}\n\n.mat-dialog-actions {\n  flex-wrap: nowrap;\n}\n\n.mat-dialog-actions .mat-button {\n  min-width: 40%;\n  background-color: #2196f3;\n  border-radius: 10px;\n  border-color: #2196f3;\n}\n\n.mat-dialog-actions .mat-warning {\n  min-width: 40%;\n  border-radius: 10px;\n  background-color: #cf4741;\n  border-color: #cf4741;\n}\n\n.mat-dialog-actions .mat-button-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxmaW5pY2l0eVxcc2VsZWN0LWJhbmtcXGRpYWxvZy1ub3QtZmluZC1iYW5rLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9zZWxlY3QtYmFuay9kaWFsb2ctbm90LWZpbmQtYmFuay5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUNBRjs7QURFQTtFQUVFLGlCQUFBO0FDQUY7O0FERUU7RUFDRSxjQUFBO0VBQ0EseUJFS0c7RUZKSCxtQkFBQTtFQUNBLHFCRUdHO0FESFA7O0FERUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkViRTtFRmNGLHFCRWRFO0FEY047O0FER0U7RUFDRSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvZGlhbG9nLW5vdC1maW5kLWJhbmsuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbml7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcblxuICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICAubWF0LWJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItY29sb3I6ICRibHVlO1xuICB9XG4gIC5tYXQtd2FybmluZyB7XG4gICAgbWluLXdpZHRoOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xuICAgIGJvcmRlci1jb2xvcjogJHJlZDtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG59XG4iLCJpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLm1hdC1kaWFsb2ctYWN0aW9ucyAubWF0LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtd2FybmluZyB7XG4gIG1pbi13aWR0aDogNDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y0NzQxO1xuICBib3JkZXItY29sb3I6ICNjZjQ3NDE7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcbiRwdXJwbGU6ICMzODMzNDI7XG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XG4kcmVkOiAjY2Y0NzQxO1xuJGxnLXJlZDogI2ZjZDdkNztcbiRncmVlbjogIzllYzU0YztcbiRzbm93OiAjZjVmNmY2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdyYXk6ICNiYmJjYmU7XG4kbGlnaHQtZ3JheTogI0VERUVFRjtcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG4kaWNlOiAjY2ZkMGQyO1xuJGJnLWdyYXk6ICNmNWY1ZjU7XG4kYmctZ3JheTI6ICNFNkU2RTc7XG4kYmx1ZTogIzIxOTZmMztcbiRsZy1ibHVlOiMwMDlDREM7XG4kbGctZ3JheTojQTNBQUIxO1xuJGZvcm0tZ3JheTojOEU4Nzk4O1xuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/finicity/select-bank/select-bank.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/finicity/select-bank/select-bank.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".finicity-iframe-wrapper {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.finicity-iframe-wrapper .connect-container {\n  width: 100%;\n}\n.finicity-iframe-wrapper h5 {\n  margin-top: 5%;\n}\n.link a {\n  color: #2196f3;\n}\niframe {\n  padding-left: 10% !important;\n  padding-right: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbmljaXR5L3NlbGVjdC1iYW5rL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxmaW5pY2l0eVxcc2VsZWN0LWJhbmtcXHNlbGVjdC1iYW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZmluaWNpdHkvc2VsZWN0LWJhbmsvc2VsZWN0LWJhbmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9zZWxlY3QtYmFuay9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDRkY7QURJRTtFQUNFLFdBQUE7QUNGSjtBREtFO0VBQ0UsY0FBQTtBQ0hKO0FEVUU7RUFDRSxjRVBHO0FEQVA7QURXQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9maW5pY2l0eS9zZWxlY3QtYmFuay9zZWxlY3QtYmFuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcblxuLmZpbmljaXR5LWlmcmFtZS13cmFwcGVyIHtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcblxuICAuY29ubmVjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDUge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG5cblxufVxuXG4ubGluayB7XG4gIGEge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG5pZnJhbWUge1xuICBwYWRkaW5nLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMCUgIWltcG9ydGFudDtcbn1cbiIsIi5maW5pY2l0eS1pZnJhbWUtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbmljaXR5LWlmcmFtZS13cmFwcGVyIC5jb25uZWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbmljaXR5LWlmcmFtZS13cmFwcGVyIGg1IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5saW5rIGEge1xuICBjb2xvcjogIzIxOTZmMztcbn1cblxuaWZyYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAxMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTAlICFpbXBvcnRhbnQ7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcbiRwdXJwbGU6ICMzODMzNDI7XG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XG4kcmVkOiAjY2Y0NzQxO1xuJGxnLXJlZDogI2ZjZDdkNztcbiRncmVlbjogIzllYzU0YztcbiRzbm93OiAjZjVmNmY2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdyYXk6ICNiYmJjYmU7XG4kbGlnaHQtZ3JheTogI0VERUVFRjtcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG4kaWNlOiAjY2ZkMGQyO1xuJGJnLWdyYXk6ICNmNWY1ZjU7XG4kYmctZ3JheTI6ICNFNkU2RTc7XG4kYmx1ZTogIzIxOTZmMztcbiRsZy1ibHVlOiMwMDlDREM7XG4kbGctZ3JheTojQTNBQUIxO1xuJGZvcm0tZ3JheTojOEU4Nzk4O1xuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/finicity/select-bank/select-bank.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/finicity/select-bank/select-bank.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectBankComponent, DialogNotFindBankComponent, DialogNotSupportedBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBankComponent", function() { return SelectBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNotFindBankComponent", function() { return DialogNotFindBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNotSupportedBankComponent", function() { return DialogNotSupportedBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/script.service */ "./src/app/shared/services/script.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let SelectBankComponent = class SelectBankComponent {
    constructor(activeRoute, router, httpService, script, dialog) {
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
        this.error = { title: '', text: '', buttonText: '', returnCode: 'NONE' };
        this.listenToUrlParams();
    }
    ngOnInit() {
        this.deleteAllIframes();
    }
    listenToUrlParams() {
        this.activeRoute
            .params
            .subscribe((params) => {
            const { applicantId, applicationId } = params;
            this.paramsAppId = applicationId;
            this.paramsApplicantId = applicantId;
            console.log(this.paramsApplicantId + ' - ' + this.paramsAppId);
            this.listenToApplicationInfo();
        });
    }
    listenToApplicationInfo() {
        this.httpService
            .mainApplication$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(application => {
            this.mainApplication = application;
            this.connectFinicity();
            console.log(this.mainApplication);
        });
        // this.httpService.getUrlFromFinicity(this.paramsAppId,this.paramsApplicantId).
    }
    connectFinicity() {
        this.loadingMessage = 'Connecting with Mastercard';
        this.httpService.generateUrl(this.paramsAppId, this.paramsApplicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            this.showConnectionError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000))
            .subscribe((res) => {
            if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"])) {
                this.urlConnect = res.link;
                this.script.load('finicity').then(data => {
                    const loadSubscribe = document.getElementById('connect-container');
                    if (loadSubscribe) {
                        // @ts-ignore
                        window.finicityConnect.launch(this.urlConnect, {
                            selector: '#connect-container',
                            success: (event) => {
                                console.log('Yay! User went through Connect', event);
                                if (event.reason === 'complete' && event.reportData !== undefined) {
                                    try {
                                        this.reportId = event.reportData[0].reportId;
                                    }
                                    catch (e) {
                                        console.log(e);
                                    }
                                }
                                // @ts-ignore
                                window.finicityConnect.destroy();
                                this.finishProcessService();
                            },
                            cancel: (event) => {
                                console.log('The user cancelled the iframe', event);
                                this.cancelProcess();
                            },
                            error: (error) => {
                                console.error('Some runtime error was generated during insideConnect ', error);
                                // @ts-ignore
                                this.unhandledError(error);
                            },
                            loaded: () => {
                                console.log('This gets called only once after the iframe has finished loading ');
                                document.getElementById('finicityConnectIframe').style.height = '755px';
                                document.getElementById('finicityConnectIframe').style.minWidth = '100%';
                                this.showLoading = false;
                            },
                            route: (event) => {
                                if (event.data.screen === 'select-accounts') {
                                    this.httpService.journalLogIn(this.paramsAppId, this.paramsApplicantId, event.data.screen, event.data.params.institutionId).subscribe();
                                }
                                console.log('This is called as the user navigates through Connect ', event);
                            },
                            user: (event) => {
                                console.log('This is called as the user interacts with Connect ', event);
                                try {
                                    if (event.data.action === 'SelectInstitution' && !event.data.supported) {
                                        this.bankNotSupported(this.paramsApplicantId);
                                    }
                                }
                                catch (e) {
                                    console.log('e');
                                }
                            }
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    this.showUnexpectedError(error);
                });
            }
        }, (error) => {
            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["TimeoutError"]) {
                this.showTimeOutError(error);
            }
            else {
                this.showConnectionError(error);
            }
        });
    }
    errorProcess(error, deleteIframes) {
        this.showLoading = false;
        this.finishProcess = false;
        this.hasError = true;
        if (deleteIframes) {
            try {
                // @ts-ignore
                window.finicityConnect.destroy();
            }
            catch (e) {
                console.log(e);
            }
            this.deleteAllIframes();
        }
    }
    showConnectionError(err) {
        this.errorProcess(err, true);
        this.error = {
            title: 'Network Error', text: 'Sorry, the operation couldn’t be completed. Please try again later.',
            buttonText: 'TRY AGAIN', returnCode: 'RETRY'
        };
    }
    showFinicityError(err) {
        this.errorProcess(err, true);
        console.log(err);
        this.error = {
            title: 'Please check!',
            text: err,
            buttonText: 'EXIT', returnCode: 'RETRY'
        };
    }
    showFinicityTitleError(err, title) {
        this.errorProcess(err, true);
        console.log(err);
        this.error = {
            title: title,
            text: err,
            buttonText: 'EXIT', returnCode: 'RETRY'
        };
    }
    showUnexpectedError(err) {
        this.errorProcess(err, true);
        this.error = { title: 'Opss!', text: 'Something went wrong. We are working on getting this fixed as soon as we can.',
            buttonText: 'Retry', returnCode: 'RETRY' };
    }
    unhandledError(err) {
        this.errorProcess(err, true);
        this.error = {
            title: 'Opss!',
            text: 'Something went wrong. We are working on getting this fixed as soon as we can.', buttonText: 'Retry', returnCode: 'RETRY'
        };
    }
    showTimeOutError(err) {
        this.errorProcess(err, true);
        this.error = {
            title: 'Time Out', text: 'A network related error occurred while connecting. Please try one more time.',
            buttonText: 'TRY AGAIN', returnCode: 'RETRY'
        };
    }
    cancelProcess() {
        this.errorProcess('', true);
        this.error = {
            title: 'Oops!',
            text: 'You have closed the window during the connection. Please try again.', buttonText: 'TRY AGAIN', returnCode: 'RETRY'
        };
    }
    deleteAllIframes() {
        const iframes = document.querySelectorAll('iframe');
        for (let i = 0; i < iframes.length; i++) {
            if (iframes[i].title !== 'voiceflow-chat') {
                iframes[i].parentNode.removeChild(iframes[i]);
            }
        }
    }
    ngOnDestroy() {
        this.deleteAllIframes();
        // @ts-ignore
        if (window.finicityConnect) {
            // @ts-ignore
            window.finicityConnect.destroy();
        }
        this.destroyed$.next();
    }
    finishProcessService() {
        this.loadingMessage = 'Processing ...';
        this.showLoading = true;
        this.deleteAllIframes();
        this.httpService.closeProofOfIncome(this.paramsAppId, this.paramsApplicantId, this.reportId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            // Finicity Error
            if (error && error.error) {
                if (error.error.detail) {
                    const finicityError = JSON.parse(error.error.detail);
                    console.log('Controlled Error ', finicityError.message);
                    var errorText = finicityError.message;
                    if (finicityError.message.includes('No matching account types apply')) {
                        errorText = 'A source of income was not found on the selected bank account.\nKindly select an alternate bank account with a source of income or upload documentation that presents your income details.';
                        this.showFinicityTitleError(errorText, 'Income Cannot be Verified');
                    }
                    else {
                        this.showFinicityError(errorText);
                    }
                    return [];
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            }
            console.log('Generic Error ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe((url) => {
            this.showLoading = false;
            this.finishProcess = true;
        }, (error) => {
            this.showConnectionError(error);
        });
    }
    bankNotSupported(paramsApplicantId) {
        this.dialog.open(DialogNotSupportedBankComponent, {
            panelClass: 'custom-dialog-container', data: this.mainApplication.proofOfIncome.find(i => i.applicantId == paramsApplicantId)
        }).afterClosed().subscribe(result => {
            if (result === 'uploads') {
                this.httpService.proofOfIncomeDecline(this.paramsAppId, this.paramsApplicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
                    // Finicity Error
                    if (error && error.error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                    }
                    console.log('Generic Error ', error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe((url) => {
                    this.router
                        .navigate(['/dashboard', this.paramsAppId, 'upload-documents']).catch(console.log);
                }, (error) => {
                    console.log(error);
                    this.showConnectionError(error);
                });
            }
        });
    }
    bankNotFound(event, paramsApplicantId) {
        event.preventDefault();
        console.log(paramsApplicantId);
        console.log(this.mainApplication.proofOfIncome.find(i => i.applicantId == paramsApplicantId));
        this.dialog.open(DialogNotFindBankComponent, {
            panelClass: 'custom-dialog-container', data: this.mainApplication.proofOfIncome.find(i => i.applicantId == paramsApplicantId)
        }).afterClosed().subscribe(result => {
            if (result === 'uploads') {
                this.httpService.proofOfIncomeDecline(this.paramsAppId, this.paramsApplicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
                    // Finicity Error
                    if (error && error.error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                    }
                    console.log('Generic Error ', error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(59000)).subscribe((url) => {
                    this.router
                        .navigate(['/dashboard', this.paramsAppId, 'upload-documents']).catch(console.log);
                }, (error) => {
                    console.log(error);
                    this.showConnectionError(error);
                });
            }
        });
    }
    actionError($eve) {
        if ($eve === 'RETRY') {
            window.location.reload();
        }
        else if ($eve === 'EXIT') {
            this.deleteAllIframes();
            this.router
                .navigate(['/dashboard', this.paramsAppId]).catch(console.log);
        }
    }
};
SelectBankComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _shared_services_script_service__WEBPACK_IMPORTED_MODULE_6__["ScriptService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
SelectBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-select-bank',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-bank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/select-bank.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-bank.component.scss */ "./src/app/dashboard/finicity/select-bank/select-bank.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _shared_services_script_service__WEBPACK_IMPORTED_MODULE_6__["ScriptService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
], SelectBankComponent);

let DialogNotFindBankComponent = 
// tslint:disable-next-line:component-class-suffix
class DialogNotFindBankComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        // will log the entire data object
        console.log(this.data);
        this.proofOfIncomeTask = this.data;
    }
    continueWithFinicity() {
        this.dialogRef.close('continue');
    }
    goToUploads() {
        this.dialogRef.close('uploads');
    }
};
DialogNotFindBankComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }
];
DialogNotFindBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-dialog-not-find-bank',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-not-find-bank.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-not-find-bank.scss */ "./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss")).default]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])
], DialogNotFindBankComponent);

let DialogNotSupportedBankComponent = class DialogNotSupportedBankComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        // will log the entire data object
        console.log(this.data);
        this.proofOfIncomeTask = this.data;
    }
    goToUploads() {
        this.dialogRef.close('uploads');
    }
};
DialogNotSupportedBankComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }
];
DialogNotSupportedBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-dialog-not-supported-bank',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-not-supported-bank.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/finicity/select-bank/dialog-not-supported-bank.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-not-find-bank.scss */ "./src/app/dashboard/finicity/select-bank/dialog-not-find-bank.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])
], DialogNotSupportedBankComponent);



/***/ })

}]);
//# sourceMappingURL=finicity-finicity-module-es2015.js.map
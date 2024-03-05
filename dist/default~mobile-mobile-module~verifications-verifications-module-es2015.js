(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-mobile-module~verifications-verifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile/mobile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile/mobile.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-id-mobile\">\n<router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/message-with-icon/message-with-icon.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/message-with-icon/message-with-icon.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"message-whit-icon\">\n  <div class=\"gif-with-icon\">\n    <img [src]=\"img\" [alt]=\"altText\"\n         class=\"img-responsive img-circle gifimg\"/>\n  </div>\n\n  <div class=\"text\">{{text}}</div>\n  <div>{{subError}}</div>\n  <div class=\"small-text\">{{ smallText }}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/upload.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/upload.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"finish-upload\" *ngIf=\"uploadedFinish\">\n  <tev-awesome-message (closePopup)=\"closeUploadFinish()\" [message]=\"textFinal\" [additionalText]=\"additionalText\"\n                       [buttonText]=\"''\" [autoCloseTime]=\"105\"\n                       [auto_closeable]=\"false\"></tev-awesome-message>\n</div>\n<div *ngIf=\"!uploadedFinish\" class=\"mobile\" [class.upload-white]=\"showUploadFile()\">\n\n  <div class=\"row\">\n    <h1>\n      <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\n    </h1>\n  </div><!-- ./row -->\n\n  <div *ngIf=\"showUploadFile()\">\n\n    <div class=\"row\">\n      <h2>Take a picture of the <span class=\"highlighted-blue\">{{ type }}</span> of your ID</h2>\n    </div>\n    <div class=\"row\">\n      <p> Make sure your document is readable and well lit. No photocopies.</p>\n    </div>\n    <div class=\"row\">\n      <img class=\"img-icon\" [src]=\"getImage()\" alt=\"upload image from mobile\">\n    </div>\n  </div>\n\n  <div *ngIf=\"error && !uploading && !showForm\">\n    <tev-errors-id [error]=\"error\" [subError]=\"subError\" [smallText]=\"textFinal\"></tev-errors-id>\n  </div>\n\n  <div *ngIf=\"showButtonUploadOrRetry()\" class=\"row\">\n    <label class=\"btn btn-blue\">\n      <input type=\"file\" capture\n             accept=\"image/*\" #inputFile (change)=\"onFileChanged($event)\"/>\n      {{ error ? 'Retry' : 'Open Camera'}}\n    </label>\n  </div>\n\n  <div class=\"row\" *ngIf=\"uploading\">\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3\">\n      <tev-uploading-message init=\"60\"></tev-uploading-message>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"notTask\">\n    <tev-message-with-icon [img]=\"'assets/icon-green-check.svg'\" [altText]=\"'green check'\"\n                           [text]=\"'You don’t need to upload your document again!'\"\n                           [smallText]=\"'Your document has already been submitted. Now you can close and continue on your computer.'\"\n    ></tev-message-with-icon>\n  </div>\n\n  <div class=\"col-xs-12\" *ngIf=\"showForm\">\n    <tev-update-id-applicant [info]=\"photoIdVerification\"\n                             (dataSent)=\"verificationSended($event)\"\n                             [token]=\"token\"\n                             [checkFirstStep]=false\n                             [applicantFullName]=\"''\"></tev-update-id-applicant>\n  </div>\n\n</div><!-- ./intro -->\n<tev-expired-dialog *ngIf=\"requestExpired\" [errorBackRetries]=\"errorRetriesBack\"\n                    (responseExpired)=\"forceUploadExpiredId($event)\"></tev-expired-dialog>\n");

/***/ }),

/***/ "./src/app/mobile/mobile-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile/mobile-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MobileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRoutingModule", function() { return MobileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/mobile/upload/upload.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile/mobile.component.ts");





const routes = [
    {
        path: '',
        component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__["MobileComponent"],
        children: [
            { path: 'upload/:token', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"] },
        ],
    }
];
let MobileRoutingModule = class MobileRoutingModule {
};
MobileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileRoutingModule);



/***/ }),

/***/ "./src/app/mobile/mobile.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mobile/mobile.module.ts ***!
  \*****************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/mobile/upload/upload.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile/mobile.component.ts");
/* harmony import */ var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-routing.module */ "./src/app/mobile/mobile-routing.module.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload/message-with-icon/message-with-icon.component */ "./src/app/mobile/upload/message-with-icon/message-with-icon.component.ts");









let MobileModule = class MobileModule {
};
MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__["MobileComponent"], _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileRoutingModule"],
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"]
        ],
        exports: [
            _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]
        ]
    })
], MobileModule);



/***/ }),

/***/ "./src/app/mobile/mobile/mobile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/mobile/mobile/mobile.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/mobile/mobile/mobile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/mobile/mobile/mobile.component.ts ***!
  \***************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MobileComponent = class MobileComponent {
    constructor(uiService) {
        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.website = location.origin;
    }
    ngOnInit() {
    }
    listenToThemeValues() {
        this.uiService
            .smallLogo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            this.smallLogo = value ? value : '/assets/tenant-ev-logo-service.svg';
        });
    }
};
MobileComponent.ctorParameters = () => [
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-mobile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile/mobile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile.component.scss */ "./src/app/mobile/mobile/mobile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])
], MobileComponent);



/***/ }),

/***/ "./src/app/mobile/upload/message-with-icon/message-with-icon.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/mobile/upload/message-with-icon/message-with-icon.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-whit-icon .gifimg {\n  display: block;\n  border-radius: 50%;\n  margin: 10% auto 10%;\n  width: 25%;\n}\n.message-whit-icon .text {\n  font-size: 24px;\n  text-align: center;\n  font-weight: bold;\n  padding: 5% 20%;\n}\n.message-whit-icon .small-text {\n  font-size: 14px;\n  text-align: center;\n  padding: 5% 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Utd2hpdC1pY29uIHtcbiAgLmdpZmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1JSAyMCU7XG4gIH1cblxuICAuc21hbGwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1JSAxNSU7XG4gIH1cbn1cblxuIiwiLm1lc3NhZ2Utd2hpdC1pY29uIC5naWZpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tZXNzYWdlLXdoaXQtaWNvbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNSUgMjAlO1xufVxuLm1lc3NhZ2Utd2hpdC1pY29uIC5zbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDE1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/mobile/upload/message-with-icon/message-with-icon.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mobile/upload/message-with-icon/message-with-icon.component.ts ***!
  \********************************************************************************/
/*! exports provided: MessageWithIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageWithIconComponent", function() { return MessageWithIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageWithIconComponent = class MessageWithIconComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MessageWithIconComponent.prototype, "img", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MessageWithIconComponent.prototype, "altText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MessageWithIconComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MessageWithIconComponent.prototype, "subError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MessageWithIconComponent.prototype, "smallText", void 0);
MessageWithIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-message-with-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-with-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/message-with-icon/message-with-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-with-icon.component.scss */ "./src/app/mobile/upload/message-with-icon/message-with-icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageWithIconComponent);



/***/ }),

/***/ "./src/app/mobile/upload/upload.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/mobile/upload/upload.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".awesome-item {\n  width: 100%;\n  top: 5% !important;\n  left: 0;\n}\n\n.small-text {\n  font-size: 14px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-white {\n  background-color: white;\n  color: black !important;\n}\n\ntev-uploading-message .uploading {\n  padding: 0px !important;\n}\n\n.mobile {\n  height: 100vh;\n  padding: 10%;\n  color: white;\n}\n\n.mobile h1 {\n  margin-bottom: 10px;\n}\n\n.mobile h1 img {\n  width: 25%;\n  padding-bottom: 20px;\n  float: left;\n}\n\n.mobile h2 {\n  float: left;\n  text-align: left;\n  padding-bottom: 10%;\n}\n\n.mobile .img-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%;\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.mobile .highlighted-blue {\n  color: #2196f3;\n  font-weight: bold;\n}\n\n.mobile .btn-blue {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mobile input[type=file] {\n  display: none;\n}\n\n.mobile mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9tb2JpbGUvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9iaWxlL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FuamVldnNhaW5pL0Rlc2t0b3AvTm9kZUpTL0FuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNHLFdBQUE7QUNBSDs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURJRTtFQUNFLHVCQUFBO0FDREo7O0FES0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNGRjs7QURNRTtFQUNFLG1CQUFBO0FDSko7O0FETUk7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSk47O0FEUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUU7RUFDRSxjRTVDRztFRjZDSCxpQkFBQTtBQ1JKOztBRFdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZRTtFQUNFLGFBQUE7QUNWSjs7QURhRTtFQUNFLFdBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XG4uYXdlc29tZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbn1cblxuLnNtYWxsLXRleHR7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG4udXBsb2FkLXdoaXRle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbnRldi11cGxvYWRpbmctbWVzc2FnZXtcbiAgLnVwbG9hZGluZ3tcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTAlO1xuICBjb2xvcjogd2hpdGU7XG5cblxuXG4gIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIH1cblxuICAuaW1nLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICB9XG5cbiAgLmhpZ2hsaWdodGVkLWJsdWUge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5idG4tYmx1ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuIiwiLmF3ZXNvbWUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVwbG9hZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxudGV2LXVwbG9hZGluZy1tZXNzYWdlIC51cGxvYWRpbmcge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1vYmlsZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vYmlsZSBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubW9iaWxlIGgxIGltZyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5tb2JpbGUgaDIge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cbi5tb2JpbGUgLmltZy1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cbi5tb2JpbGUgLmhpZ2hsaWdodGVkLWJsdWUge1xuICBjb2xvcjogIzIxOTZmMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9iaWxlIC5idG4tYmx1ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm1vYmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2JpbGUgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIl19 */");

/***/ }),

/***/ "./src/app/mobile/upload/upload.component.ts":
/*!***************************************************!*\
  !*** ./src/app/mobile/upload/upload.component.ts ***!
  \***************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/HTTPStatusCode */ "./src/app/shared/utils/HTTPStatusCode.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! heic2any */ "./node_modules/heic2any/dist/heic2any.js");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_10__);











let UploadComponent = class UploadComponent {
    constructor(http, ui, activeRoute) {
        this.http = http;
        this.ui = ui;
        this.activeRoute = activeRoute;
        this.type = 'FRONT';
        this.endProcess = Boolean(0);
        this.uploadedFinish = Boolean(0);
        this.additionalText = '';
        this.showButtonUpload = Boolean(1);
        this.photoIdVerification = {
            id: null, firstName: null,
            lastName: null, dob: null, documentId: null, step1Name: null,
            step1Lastname: null, step1dob: null
        };
        this.forceUpload = Boolean(0);
        this.requestExpired = Boolean(0);
        this.errorRetriesBack = 0;
        this.blobToFile = (theBlob, fileName) => {
            const b = theBlob;
            b.lastModified = new Date();
            b.name = fileName;
            return theBlob;
        };
        this.listenToUrlParams();
    }
    listenToUrlParams() {
        this.activeRoute
            .params
            .subscribe((params) => {
            this.token = params.token;
            this.http.checkTokenUpload(params.token)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                this.uploadError(error, '');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
            }))
                .subscribe((res) => {
            });
        });
    }
    ngOnInit() {
        this.errorRetries = 0;
    }
    ngOnDestroy() {
        this.errorRetries = 0;
    }
    onFileChanged(event) {
        this.error = null;
        this.subError = '';
        this.uploading = true;
        const file = this.selectedFile = event.target.files[0];
        if (file.type.endsWith('pdf')) {
            this.selectedFile = file;
            this.onUpload();
        }
        else {
            const blob = file;
            heic2any__WEBPACK_IMPORTED_MODULE_10___default()({ blob, toType: 'image/jpeg', quality: 0.8 }).then((jpgBlob) => {
                this.selectedFile = this.blobToFile(jpgBlob, file.name);
                this.onUpload();
                return Promise.resolve(true);
            }).catch(err => {
                this.selectedFile = file;
                this.onUpload();
                return Promise.resolve(true);
            });
        }
    }
    readFileData(file) {
        return new Promise(((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = () => {
                reject(fileReader.error);
            };
            fileReader.readAsDataURL(file);
        }));
    }
    onUpload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.textFinal = null;
            const fileData = yield this.readFileData(this.selectedFile);
            const tenantFile = {
                filename: this.selectedFile.name,
                fileMimeType: this.selectedFile.type,
                fileData: fileData,
                fileSize: this.selectedFile.size,
                token: this.token,
                checkExpired: this.checkExpired,
                forceUpload: this.forceUpload,
                backId: this.type === 'BACK',
                retries: this.errorRetries
            };
            this.http
                .uploadDocumentFromMobile(tenantFile)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                this.uploadError(error, tenantFile.filename);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
            }))
                .subscribe((res) => {
                if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"])) {
                    if (res.result === 'OK') {
                        this.uploadSuccess();
                        this.errorRetries = 0;
                    }
                    else if (res.result === 'NR') {
                        this.uploadNeedReview();
                    }
                    else if (res.result === 'NM') {
                        this.error = 'The information doesn\'t match with the application.' +
                            ' Please make sure to upload the ID for correct applicant \n' +
                            '\n',
                            this.uploading = false;
                        this.errorRetries++;
                        this.forceUpload = this.errorRetries === 2;
                    }
                    else if (res.result === 'NB') {
                        this.type = 'BACK';
                        this.errorRetries = 0;
                    }
                    else if (res.result === 'NF') {
                        this.needForm(res.idInfoExtractDTO, res.documentId, res.applicantId);
                        this.errorRetries = 0;
                    }
                    this.uploading = false;
                }
            }, (error) => {
                this.errorRetries++;
                this.uploading = false;
                this.error = 'We are not able to read the document. Please try again!';
                this.forceUpload = this.errorRetries === 2;
            });
        });
    }
    uploadError(error, filename) {
        this.forceUpload = false;
        if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].REQUEST_TIMEOUT) {
            this.error = 'We are not able to read the document. Please try again!';
            this.forceUpload = this.errorRetries > 1;
        }
        else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].UNPROCESSABLE_ENTITY) {
            this.error = error.error.detail;
            this.forceUpload = true;
            if (this.error.includes('The session')) {
                this.textFinal = 'Please go back to the computer and generate a new QR ' +
                    'code by refreshing the page. Scan the code and try again.';
                this.endProcess = true;
                this.forceUpload = false;
            }
            else if (this.error.includes('expiration date') || this.error.includes('has expired')
                || this.error.includes('Non-US Driver’s License detected')) {
                if (this.type === 'FRONT') {
                    const expRetry = (2 - this.errorRetries);
                    if (expRetry === 1) {
                        this.checkExpired = false;
                        this.textFinal = 'We will upload and review this ID manually, if ID is expired the ' +
                            'document may be rejected and a new non-expired ID will be requested.';
                    }
                    this.subError = expRetry + ' tries left (then will upload document)';
                    this.forceUpload = false;
                }
                else {
                    this.showButtonUpload = false;
                    const expRetryBack = (2 - this.errorRetriesBack);
                    if (expRetryBack === 0) {
                        this.forceUpload = true;
                        this.http
                            .confirmExpiredMobile(this.token)
                            .subscribe(() => {
                            this.uploadNeedReview();
                        });
                    }
                    else {
                        this.requestExpired = true;
                        this.errorRetriesBack++;
                        this.forceUpload = false;
                    }
                    this.errorRetries++;
                    this.uploading = false;
                    return;
                }
            }
            else if (this.error === 'invalid.task.id') {
                this.notTask = true;
                this.error = '';
                this.forceUpload = false;
                return;
            }
        }
        else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].NOT_ACCEPTABLE) {
            this.error = error.error.detail;
            this.forceUpload = this.errorRetries > 1;
        }
        else {
            this.ui
                .showError({
                message: `There was a problem uploading the file ${filename}`
            });
        }
        this.errorRetries++;
        this.forceUpload = this.errorRetries > 1;
        this.uploading = false;
    }
    uploadSuccess() {
        this.ui
            .showSuccess({
            message: `Documents Uploaded`
        });
        this.selectedFile.progress = 100;
        this.textFinal = '';
        this.additionalText = 'You can now close and continue on to the computer.';
        this.uploading = false;
        this.uploadedFinish = true;
    }
    uploadNeedReview() {
        this.selectedFile.progress = 100;
        this.textFinal = 'Thank you for your cooperation! There is some information that needs to be manually verified. ' +
            ' Please review your dashboard for any additional documentation/ information that may be needed. ';
        this.additionalText = 'You can now close and continue on to the computer.';
        this.uploading = false;
        this.uploadedFinish = true;
    }
    uploadNew() {
        const el = this.inputFile.nativeElement;
        el.click();
    }
    needForm(extractInfo, documentId, applicantId) {
        this.errorRetries = 0;
        const name = (extractInfo.firstNameExt && extractInfo.matchFirstName) ? extractInfo.firstNameExt : '';
        const lastName = (extractInfo.lastNameExt && extractInfo.matchLastName) ? extractInfo.lastNameExt : '';
        const dob = ((extractInfo.dobExt && extractInfo.dobExt) && extractInfo.matchDob) ?
            moment__WEBPACK_IMPORTED_MODULE_9__(extractInfo.dobExt).toDate() : null;
        this.showForm = true;
        this.photoIdVerification = {
            id: applicantId,
            firstName: name,
            lastName: lastName,
            dob: dob,
            documentId: documentId,
            step1Name: null,
            step1Lastname: null,
            step1dob: null
        };
    }
    closeUploadFinish() {
    }
    verificationSended($event) {
        if ($event === 'retry') {
            this.type = 'FRONT';
            this.showForm = false;
            this.uploadedFinish = false;
            this.errorRetries++;
            this.uploading = false;
            return;
        }
        this.uploadSuccess();
    }
    showUploadFile() {
        return !this.uploading && !this.error && !this.uploadedFinish && !this.showForm && !this.notTask;
    }
    getImage() {
        if (this.type === 'FRONT') {
            return 'assets/upload_from_mobile.svg';
        }
        return 'assets/upload_back_mobile.svg';
    }
    showButtonUploadOrRetry() {
        if (!this.showButtonUpload) {
            return false;
        }
        else if (!this.uploading && !this.endProcess && !this.uploadedFinish && !this.showForm && !this.notTask) {
            return true;
        }
        return false;
    }
    forceUploadExpiredId($event) {
        if ($event === 'retry') {
            this.type = 'FRONT';
            this.errorRetries = 0;
            this.error = '';
            this.showButtonUpload = true;
            this.requestExpired = false;
        }
        else {
            this.http
                .confirmExpiredMobile(this.token)
                .subscribe(() => {
                this.uploadNeedReview();
            });
        }
    }
};
UploadComponent.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UploadComponent.prototype, "inputFile", void 0);
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/upload.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "./src/app/mobile/upload/upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], UploadComponent);



/***/ })

}]);
//# sourceMappingURL=default~mobile-mobile-module~verifications-verifications-module-es2015.js.map
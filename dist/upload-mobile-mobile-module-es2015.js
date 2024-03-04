(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-mobile-mobile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/mobile/mobile-root.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/mobile/mobile-root.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-id-mobile\">\n<router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"message-whit-icon\">\n  <div class=\"gif-with-icon\">\n    <img [src]=\"img\" [alt]=\"altText\"\n         class=\"img-responsive img-circle gifimg\"/>\n  </div>\n\n  <div class=\"text\">{{text}}</div>\n  <div>{{subError}}</div>\n  <div class=\"small-text\">{{ smallText }}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/upload-mobile.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/upload-mobile.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"finish-upload\" *ngIf=\"uploadedFinish\">\n  <tev-awesome-message (closePopup)=\"closeUploadFinish()\" [message]=\"textFinal\" [additionalText]=\"additionalText\"\n                       [buttonText]=\"''\" [autoCloseTime]=\"105\"\n                       [auto_closeable]=\"false\"></tev-awesome-message>\n</div>\n<div *ngIf=\"!uploadedFinish\" class=\"mobile\" [class.upload-white]=\"showUploadFile()\">\n\n  <div class=\"row\">\n    <h1>\n      <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\n    </h1>\n  </div><!-- ./row -->\n\n  <div *ngIf=\"showUploadFile()\">\n\n    <div class=\"row\">\n      <h2>Take a picture of the <span class=\"highlighted-blue\" [innerHTML]=\"typeText\"></span> of your {{lastTypeText}}</h2>\n    </div>\n    <div class=\"row\">\n      <p> Make sure your document is readable and well lit. No photocopies.</p>\n    </div>\n    <div class=\"row\">\n      <img class=\"img-icon\" [src]=\"getImage()\" alt=\"upload image from mobile\">\n    </div>\n  </div>\n\n  <div *ngIf=\"error && !uploading\">\n    <tev-errors-id [error]=\"error\" [errorCode]=\"errorCode\" [subError]=\"subError\" [smallText]=\"textFinal\"></tev-errors-id>\n  </div>\n\n  <div *ngIf=\"showButtonUploadOrRetry()\" class=\"row\">\n    <label class=\"btn btn-blue\">\n      <input type=\"file\" capture\n             accept=\"image/*\" #inputFile (change)=\"onFileChanged($event)\"/>\n      {{ error ? 'Retry' : 'Open Camera'}}\n    </label>\n  </div>\n\n  <div class=\"row\" *ngIf=\"uploading\">\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3\">\n      <tev-uploading-message init=\"60\"></tev-uploading-message>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"notTask\">\n    <tev-message-with-icon [img]=\"'assets/icon-green-check.svg'\" [altText]=\"'green check'\"\n                           [text]=\"'You don’t need to upload your document again!'\"\n                           [smallText]=\"'Your document has already been submitted. Now you can close and continue on your computer.'\"\n    ></tev-message-with-icon>\n  </div>\n\n</div><!-- ./intro -->\n<tev-expired-dialog *ngIf=\"requestExpired\" [errorBackRetries]=\"errorRetriesBack\"\n                    (responseExpired)=\"forceUploadExpiredId($event)\"></tev-expired-dialog>\n");

/***/ }),

/***/ "./src/app/upload-mobile/mobile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/upload-mobile/mobile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MobileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRoutingModule", function() { return MobileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload-mobile.component */ "./src/app/upload-mobile/upload/upload-mobile.component.ts");
/* harmony import */ var _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/mobile-root.component */ "./src/app/upload-mobile/mobile/mobile-root.component.ts");





const routes = [
    {
        path: '',
        component: _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__["MobileRootComponent"],
        children: [
            { path: 'upload/:token', component: _upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__["UploadMobileComponent"] },
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

/***/ "./src/app/upload-mobile/mobile.module.ts":
/*!************************************************!*\
  !*** ./src/app/upload-mobile/mobile.module.ts ***!
  \************************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload-mobile.component */ "./src/app/upload-mobile/upload/upload-mobile.component.ts");
/* harmony import */ var _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/mobile-root.component */ "./src/app/upload-mobile/mobile/mobile-root.component.ts");
/* harmony import */ var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-routing.module */ "./src/app/upload-mobile/mobile-routing.module.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload/message-with-icon/message-with-icon.component */ "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.ts");









let MobileModule = class MobileModule {
};
MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__["UploadMobileComponent"], _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__["MobileRootComponent"], _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]],
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

/***/ "./src/app/upload-mobile/mobile/mobile-root.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/upload-mobile/mobile/mobile-root.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #4D445A;\n  min-height: 100vh;\n  height: auto;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWQtbW9iaWxlL21vYmlsZS9tb2JpbGUtcm9vdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC91cGxvYWQtbW9iaWxlL21vYmlsZS9tb2JpbGUtcm9vdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQ0NXO0VEQVgsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBRUFGIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLW1vYmlsZS9tb2JpbGUvbW9iaWxlLXJvb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV3LXB1cnBsZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xufVxuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcbiRwdXJwbGU6ICMzODMzNDI7XG4kbGlnaHQtcHVycGxlOiAjM2YzYzRjO1xuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XG4kcmVkOiAjY2Y0NzQxO1xuJGxnLXJlZDogI2ZjZDdkNztcbiRncmVlbjogIzllYzU0YztcbiRzbm93OiAjZjVmNmY2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdyYXk6ICNiYmJjYmU7XG4kbGlnaHQtZ3JheTogI0VERUVFRjtcbiRkYXJrLWdyYXk6ICM3Nzc0N2U7XG4kaWNlOiAjY2ZkMGQyO1xuJGJnLWdyYXk6ICNmNWY1ZjU7XG4kYmctZ3JheTI6ICNFNkU2RTc7XG4kYmx1ZTogIzIxOTZmMztcbiRsZy1ibHVlOiMwMDlDREM7XG4kbGctZ3JheTojQTNBQUIxO1xuJGZvcm0tZ3JheTojOEU4Nzk4O1xuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ0NDVBO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/upload-mobile/mobile/mobile-root.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/upload-mobile/mobile/mobile-root.component.ts ***!
  \***************************************************************/
/*! exports provided: MobileRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileRootComponent", function() { return MobileRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MobileRootComponent = class MobileRootComponent {
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
MobileRootComponent.ctorParameters = () => [
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
MobileRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-mobile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile-root.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/mobile/mobile-root.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile-root.component.scss */ "./src/app/upload-mobile/mobile/mobile-root.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])
], MobileRootComponent);



/***/ }),

/***/ "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-whit-icon .gifimg {\n  display: block;\n  border-radius: 50%;\n  margin: 10% auto 10%;\n  width: 25%;\n}\n.message-whit-icon .text {\n  font-size: 24px;\n  text-align: center;\n  font-weight: bold;\n  padding: 5% 20%;\n}\n.message-whit-icon .small-text {\n  font-size: 14px;\n  text-align: center;\n  padding: 5% 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC9tZXNzYWdlLXdpdGgtaWNvbi9tZXNzYWdlLXdpdGgtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2FkLW1vYmlsZS91cGxvYWQvbWVzc2FnZS13aXRoLWljb24vbWVzc2FnZS13aXRoLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Utd2hpdC1pY29uIHtcbiAgLmdpZmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1JSAyMCU7XG4gIH1cblxuICAuc21hbGwtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1JSAxNSU7XG4gIH1cbn1cblxuIiwiLm1lc3NhZ2Utd2hpdC1pY29uIC5naWZpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tZXNzYWdlLXdoaXQtaWNvbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNSUgMjAlO1xufVxuLm1lc3NhZ2Utd2hpdC1pY29uIC5zbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDE1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.ts ***!
  \***************************************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-with-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-with-icon.component.scss */ "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageWithIconComponent);



/***/ }),

/***/ "./src/app/upload-mobile/upload/upload-mobile.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/upload-mobile/upload/upload-mobile.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".awesome-item {\n  width: 100%;\n  top: 5% !important;\n  left: 0;\n}\n\n.small-text {\n  font-size: 14px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-white {\n  background-color: white;\n  color: black !important;\n}\n\ntev-uploading-message .uploading {\n  padding: 0px !important;\n}\n\n.mobile {\n  padding: 10%;\n  color: white;\n}\n\n.mobile h1 {\n  margin-bottom: 10px;\n}\n\n.mobile h1 img {\n  width: 15%;\n  float: left;\n}\n\n.mobile h2 {\n  float: left;\n  text-align: left;\n  padding-bottom: 10%;\n}\n\n.mobile .img-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%;\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.mobile .highlighted-blue {\n  color: #2196f3;\n  font-weight: bold;\n}\n\n.mobile .btn-blue {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 80px;\n}\n\n.mobile input[type=file] {\n  display: none;\n}\n\n.mobile mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC91cGxvYWQtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC91cGxvYWQtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhbmplZXZzYWluaS9EZXNrdG9wL05vZGVKUy9Bbmd1bGFyV2l0aENhcGFjaXRvci9zcmMvc2Fzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRyxXQUFBO0FDREg7O0FESUE7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FDREY7O0FES0U7RUFDRSx1QkFBQTtBQ0ZKOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNIRjs7QURPRTtFQUNFLG1CQUFBO0FDTEo7O0FET0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRFNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdFO0VBQ0UsY0UzQ0c7RUY0Q0gsaUJBQUE7QUNUSjs7QURZRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURhRTtFQUNFLGFBQUE7QUNYSjs7QURjRTtFQUNFLFdBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1tb2JpbGUvdXBsb2FkL3VwbG9hZC1tb2JpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcblxuLmF3ZXNvbWUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG59XG5cbi5zbWFsbC10ZXh0e1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICB3aWR0aDogMTAwJTtcbn1cblxuLnVwbG9hZC13aGl0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG50ZXYtdXBsb2FkaW5nLW1lc3NhZ2V7XG4gIC51cGxvYWRpbmd7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1vYmlsZSB7XG4gIHBhZGRpbmc6IDEwJTtcbiAgY29sb3I6IHdoaXRlO1xuXG5cblxuICBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTUlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxuXG4gIC5pbWctaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIH1cblxuICAuaGlnaGxpZ2h0ZWQtYmx1ZSB7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bi1ibHVlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiIsIi5hd2Vzb21lLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1JSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51cGxvYWQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbnRldi11cGxvYWRpbmctbWVzc2FnZSAudXBsb2FkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2JpbGUge1xuICBwYWRkaW5nOiAxMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb2JpbGUgaDEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1vYmlsZSBoMSBpbWcge1xuICB3aWR0aDogMTUlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5tb2JpbGUgaDIge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cbi5tb2JpbGUgLmltZy1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cbi5tb2JpbGUgLmhpZ2hsaWdodGVkLWJsdWUge1xuICBjb2xvcjogIzIxOTZmMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9iaWxlIC5idG4tYmx1ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuLm1vYmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2JpbGUgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNQUlOIENPTE9SU1xuJHB1cnBsZTogIzM4MzM0MjtcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XG4kbmV3LXB1cnBsZTogIzRENDQ1QTtcbiRyZWQ6ICNjZjQ3NDE7XG4kbGctcmVkOiAjZmNkN2Q3O1xuJGdyZWVuOiAjOWVjNTRjO1xuJHNub3c6ICNmNWY2ZjY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ3JheTogI2JiYmNiZTtcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xuJGRhcmstZ3JheTogIzc3NzQ3ZTtcbiRpY2U6ICNjZmQwZDI7XG4kYmctZ3JheTogI2Y1ZjVmNTtcbiRiZy1ncmF5MjogI0U2RTZFNztcbiRibHVlOiAjMjE5NmYzO1xuJGxnLWJsdWU6IzAwOUNEQztcbiRsZy1ncmF5OiNBM0FBQjE7XG4kZm9ybS1ncmF5OiM4RTg3OTg7XG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xuIl19 */");

/***/ }),

/***/ "./src/app/upload-mobile/upload/upload-mobile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/upload-mobile/upload/upload-mobile.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMobileComponent", function() { return UploadMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/HTTPStatusCode */ "./src/app/shared/utils/HTTPStatusCode.ts");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! heic2any */ "./node_modules/heic2any/dist/heic2any.js");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_8__);









let UploadMobileComponent = class UploadMobileComponent {
    constructor(http, ui, activeRoute) {
        this.http = http;
        this.ui = ui;
        this.activeRoute = activeRoute;
        this.type = 'FRONT';
        this.errorRetries = 0;
        this.endProcess = Boolean(0);
        this.uploadedFinish = Boolean(0);
        this.additionalText = '';
        this.showButtonUpload = Boolean(1);
        this.forceUpload = Boolean(0);
        this.requestExpired = Boolean(0);
        this.errorRetriesBack = 0;
        this.tenMB = Math.pow(2, 20) * 20;
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
            this.http.checkTokenUploadV2(params.token)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                this.uploadError(error, '');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            }))
                .subscribe((res) => {
                this.data = res;
                if (!this.data && !this.data.idDocumentType) {
                    this.documentType = 'DRIVER_LICENSE';
                }
                else {
                    this.documentType = this.data.idDocumentType;
                }
                this.changeType(this.documentType);
            });
        });
    }
    ngOnDestroy() {
        this.errorRetries = 0;
    }
    onFileChanged(event) {
        this.error = null;
        this.subError = '';
        this.uploading = true;
        if (event.target.files[0]) {
            if (event.target.files[0].size > this.tenMB) {
                this.showErrors('Your document scanning was unsuccessful as the system could not extract the information from it. ' +
                    'The system detected that the image was in a format that is larger than allowed. ' +
                    'Please reduce the file before uploading it. ', 'ER', false, 130);
                return;
            }
            else if (event.target.files[0].type && event.target.files[0].type !== ''
                && !this.mimetypesAccept().includes(event.target.files[0].type)) {
                this.showErrors('Your document scanning was unsuccessful as the system could not extract the information from it. ' +
                    'The system detected that the image was in a format that is not compatible with our system (PNG, JPG, OR PDF). ' +
                    'Please upload your document in any of the preferred listed formats. ', 'ER', false, 102);
                return;
            }
        }
        const file = this.selectedFile = event.target.files[0];
        if (file.type.endsWith('pdf')) {
            this.selectedFile = file;
            this.onUpload();
        }
        else {
            const blob = file;
            heic2any__WEBPACK_IMPORTED_MODULE_8___default()({ blob, toType: 'image/jpeg', quality: 0.8 }).then((jpgBlob) => {
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
            if (!this.forceUpload) {
                this.forceUpload = this.errorRetries >= 4;
            }
            const tenantFile = {
                filename: this.selectedFile.name,
                fileMimeType: this.selectedFile.type,
                fileData: fileData,
                fileSize: this.selectedFile.size,
                token: this.token,
                checkExpired: this.checkExpired,
                forceUpload: this.forceUpload,
                backId: this.type === 'BACK',
                retries: this.errorRetries,
                idDocumentType: this.documentType
            };
            this.http
                .uploadDocumentFromMobileV2(tenantFile)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                this.unexpectedError(error, tenantFile.filename);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(59000))
                .subscribe((event) => {
                if (event.error) {
                    this.unexpectedError(event.error, tenantFile.filename);
                    return;
                }
                if (event) {
                    if (event.errors) {
                        if (event.errors === 'VENDOR_CONNECTION_EXCEPTION' || event.errors === 'TENANT_UNEXPECTED_ERROR') {
                            this.errorRetries = 3;
                        }
                        this.errorRetries++;
                        this.changeType(event.side);
                        this.showErrors(event.errorString, event.status, this.needShowRetries(event.errors), event.errorCode);
                        return;
                    }
                    if (event.status) {
                        const status = event.status;
                        if (status === 'NB') {
                            this.documentType = 'DRIVER_LICENSE_BACK';
                            this.uploading = false;
                            this.changeType(this.documentType);
                        }
                        else if (status === 'NFNT') {
                            this.documentType = 'DRIVER_LICENSE';
                            this.uploading = false;
                            this.changeType(this.documentType);
                        }
                        else if (status === 'NR') {
                            this.finishUpload(status, undefined);
                        }
                        else if (status === 'OK') {
                            this.finishUpload(status, undefined);
                        }
                    }
                }
            }, (error) => {
                this.errorRetries++;
                this.uploading = false;
                this.error = 'We are not able to read the document. Please try again!';
            });
        });
    }
    needShowRetries(errors) {
        switch (errors) {
            case 'GREEN_CARD_DETECTED':
            case 'ERROR_PROCESS_PDF':
                return false;
            default:
                return true;
        }
    }
    showErrors(reason, status, showRetries = true, errorCode) {
        if (status === 'NR') {
            this.finishUpload(status, undefined);
            return;
        }
        if (showRetries) {
            reason += '<br/><br/>';
            if ((5 - this.errorRetries) > 1) {
                reason += 'You have (' + (5 - this.errorRetries) + ') TRIES left before manual review';
            }
            if ((5 - this.errorRetries) <= 1) {
                reason += 'You have (' + (5 - this.errorRetries) + ') TRY left before manual review';
            }
        }
        this.error = reason;
        this.errorCode = errorCode;
        this.uploading = false;
    }
    unexpectedError(error, fileName) {
        const err = 'Unexpected error has occurred';
        this.finishUpload('NR_ER', err);
    }
    finishUpload(status, error) {
        if (status === 'OK') {
            this.uploadedFinish = true;
            this.uploadSuccess();
        }
        if (status === 'NR') {
            this.uploadedFinish = true;
            this.uploadNeedReview();
        }
        if (status === 'NR_ER') {
            this.uploadedFinish = true;
            this.uploadNeedReview();
        }
    }
    mimetypesAccept() {
        return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
    }
    uploadError(error, filename) {
        this.forceUpload = false;
        if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__["default"].REQUEST_TIMEOUT) {
            this.error = 'We are not able to read the document. Please try again!';
            this.forceUpload = this.errorRetries > 4;
        }
        else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__["default"].UNPROCESSABLE_ENTITY) {
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
                    const expRetry = (5 - this.errorRetries);
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
                    const expRetryBack = (5 - this.errorRetriesBack);
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
        else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__["default"].NOT_ACCEPTABLE) {
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
            ' Please review your dashboard for any additional documentation/ information that may be needed.';
        this.additionalText = 'You can now close and continue on to the computer.';
        this.uploading = false;
        this.uploadedFinish = true;
    }
    uploadNew() {
        const el = this.inputFile.nativeElement;
        el.click();
    }
    closeUploadFinish() {
    }
    verificationSended($event) {
        if ($event === 'retry') {
            this.type = 'FRONT';
            this.uploadedFinish = false;
            this.errorRetries++;
            this.uploading = false;
            return;
        }
        this.uploadSuccess();
    }
    showUploadFile() {
        return !this.uploading && !this.error && !this.uploadedFinish && !this.notTask;
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
        else if (!this.uploading && !this.endProcess && !this.uploadedFinish && !this.notTask) {
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
    changeType(documentSide) {
        if (this.documentType === 'PASSPORT') {
            this.typeText = '<b>information page</b>';
            this.lastTypeText = 'passport';
            return;
        }
        else if (this.documentType === 'DRIVER_LICENSE' || documentSide === 'FRONT_SIDE') {
            this.documentType = 'DRIVER_LICENSE';
            this.typeText = '<b>FRONT SIDE</b>';
            this.lastTypeText = 'US drivers license';
            return;
        }
        else if (this.documentType === 'DRIVER_LICENSE_BACK' || documentSide === 'BACK_SIDE') {
            this.documentType = 'DRIVER_LICENSE_BACK';
            this.typeText = '<b>BACK SIDE</b>';
            this.lastTypeText = 'US drivers license';
            return;
        }
    }
    getInfoFromLocalStorage(key) {
        const info = localStorage.getItem(key);
        return info ? JSON.parse(info) : null;
    }
    /**
     * Save information in the session storage.
     *
     * @param {string} key
     * @param data
     */
    saveInfoInLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
};
UploadMobileComponent.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UploadMobileComponent.prototype, "inputFile", void 0);
UploadMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-mobile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/upload-mobile.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-mobile.component.scss */ "./src/app/upload-mobile/upload/upload-mobile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], UploadMobileComponent);



/***/ })

}]);
//# sourceMappingURL=upload-mobile-mobile-module-es2015.js.map
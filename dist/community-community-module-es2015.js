(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["community-community-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community/community.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/community/community.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-code/access-property.dialog.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-code/access-property.dialog.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-icon-title\"><i class=\"material-icons\">highlight_off</i></div>\n<h2 mat-dialog-title class=\"mat-dialog-title\">{{dialogTitle}}</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>{{dialogText}}</h3>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button class=\"primary-button\" mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-code/enter-code.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-code/enter-code.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tev-header></tev-header>\n<div class=\"icon-house\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"container\">\n        <nav class=\"ecode-navbar mx-auto\"></nav>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-5 col-sm-12\">\n          <div class=\"align-items-baseline flex-column\">\n            <!-- <div\n              class=\"col-12 div-icon\"\n              style=\"\n                background: url('/assets/logo-tenant-evaluation.svg') no-repeat\n                  left center;\n              \"\n            ></div> -->\n            <br />\n            <div\n              class=\"col-12 div-icon\"\n              style=\"\n                background: url('/assets/lets-begin.svg') no-repeat left center;\n              \"\n            ></div>\n            <div>\n              <h1 style=\"font-weight: bolder\">Enter the property code here </h1>\n            </div>\n            <br />\n            <div>\n              <h6 class=\"p__1\">\n                Enter the 4-5 digit Unique Property Code applicable for this property \n              </h6>\n            </div>\n            <br />\n            <div class=\"col-md-9 col-sm-12\">\n              <a\n                href=\"https://support.tenantevaluation.com/support/solutions/articles/65000166339-where-can-i-find-the-unique-property-code-\"\n                target=\"_blank\"\n              >\n                <div class=\"row\">\n                  <!-- <div\n                    class=\"col-md-2 bg-building d-none d-md-block\"\n                    style=\"\n                      background: url('/assets/icon-building.svg') no-repeat\n                        left center;\n                    \"\n                  ></div> -->\n                  <div class=\"col-lg-3 d-none d-md-block\">\n                    <img\n                      src=\"/assets/icon-building.svg\"\n                      alt=\"Tenant Evaluation Logo\"\n                    />\n                  </div>\n                  <div class=\"col-lg-9 d-none d-md-block\">\n                    <div class=\"row flex-column\">\n                      <div class=\"col-12\">\n                        <button type=\"button\" class=\"btn btn-link\">\n                          <strong>How to get this code?</strong>\n                        </button>\n                      </div>\n                      <div class=\"col-12\">\n                        <small>Click here for more information</small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-5 col-sm-12 d-flex flex-column justify-content-end\">\n          <form (submit)=\"submit()\">\n            <!-- class=\"form-sign-in floating-labels\" -->\n            <!-- [formGroup]=\"enterCodeForm\" -->\n            <!-- (submit)=\"submit()\" -->\n            <div class=\"row\">\n              <div class=\"col\">\n                <!-- class=\"form-label-group form-label-group--center\" -->\n                <mat-form-field hideRequiredMarker appearance=\"standard\" floatLabel=\"always\">\n                  <input\n                    #box\n                    (input)=\"onKey(box.value)\"\n                    matInput\n                    name=\"code\"\n                    type=\"text\"\n                    id=\"input-code\"\n                    placeholder=\"Enter code here\"\n                    minlength=\"4\"\n                    maxlength=\"5\"\n                    inputmode=\"numeric\"\n                    pattern=\"[0-9]*\"\n                    tevNumbersOnly\n                    required\n                    style=\"background-color: white\"\n                    [ngClass]=\"{'input-touch': caretTransparent==true}\"\n                  />\n                  <!-- formControlName=\"code\" -->\n\n                  <!-- class=\"form-control text-center\" -->\n                  <!-- <mat-error>{{ getError('code') }}</mat-error> -->\n                </mat-form-field>\n                <p class=\"p__2\">Enter 4-5 digit code here</p>\n                <br />\n                <button class=\"enter-code-button\">\n                  <!-- [routerLink]=\"[code]\" -->\n                  <!-- type=\"submit\" -->\n                  Continue\n                </button>\n                <tev-alert-badge\n                  *ngIf=\"info\"\n                  [type]=\"infoType\"\n                  [message]=\"info\"\n                ></tev-alert-badge>\n                <br />\n              </div>\n              <div class=\"col-sm-10\">\n                <a\n                  href=\"https://support.tenantevaluation.com/support/solutions/articles/65000166339-where-can-i-find-the-unique-property-code-\"\n                  target=\"_blank\"\n                >\n                  <div class=\"row flex-column d-block d-md-none\">\n                    <div class=\"col\">\n                      <button type=\"button\" class=\"btn btn-link\">\n                        <strong>How to get this code?</strong>\n                      </button>\n                    </div>\n                    <div class=\"col\">\n                      <small>Click here for more information</small>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- ./row -->\n    </div>\n    <section class=\"enter-code-footer\">\n      <small class=\"enter-code-footer--text\"\n        >All rights reserved | Tenant Evaluation {{currentYear}}</small\n      >\n    </section>\n    <!-- ./container-fluid -->\n  </div>\n\n  <!-- ./begin-enter-code -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/access-type.dialog.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/access-type.dialog.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-icon-title\"><i class=\"material-icons\">highlight_off</i></div>\n<h2 mat-dialog-title class=\"mat-dialog-title\">{{dialogTitle}}</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>{{dialogText}}</h3>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button class=\"primary-button\" mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/cas-dialog/cas-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/cas-dialog/cas-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cas-dialog\">\n  <div class=\"mat-dialog-image\">\n    <img src=\"./assets/icon-te.svg\" alt=\"\" />\n  </div>\n  <h1 mat-dialog-title>Important, </h1>\n  <div mat-dialog-content class=\"mat-dialog-content\">\n    <p>All people over the age of 18 who are listed on the contract and/or will be residing in the property must submit an application.</p>\n    <!-- <p>on the contract and/or will be residing in</p>\n    <p>the property must submit an application.</p> -->\n  </div>\n  <div mat-dialog-content-md class=\"mat-dialog-content-md\">\n    <p>\n      All people over the age of 18 who are listed on the contract and/or will\n      be residing in the property must submit an application.\n    </p>\n  </div>\n  <div mat-dialog-actions>\n    <button class=\"mat-dialog-button\" (click)=\"onAccept()\">I Understand</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/enter-type.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/enter-type.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tev-header></tev-header>\n\n<div class=\"icon-house\">\n  <div class=\"select-enter-type\">\n<!--     <section class=\"enter-type-header\">\n      <img\n        class=\"enter-type-header--img\"\n        src=\"/assets/logo-tenant-evaluation.svg\"\n        alt=\"logo\"\n      />\n    </section> -->\n\n    <div class=\"enter-type-description\">\n      <h1>Select one application type</h1>\n      <p>To begin, please select the application type you would like to use. The application(s) listed below are allowed by the community</p>\n    </div>\n\n    <div class=\"enter-type-options\">\n      <div class=\"enter-type-option\"  *ngIf=\"allowLease\">\n        <!-- <div class=\"card box-group__cell\" style=\"width: 18rem\"> -->\n        <div>\n          <img\n            src=\"/assets/icon-rent-application.svg\"\n            alt=\"Tenant Evaluation Logo\"\n            class=\"enter-type-option__img\"\n          />\n        </div>\n        <h6 class=\"enter-type-option__text\">Apply to lease <br />a property</h6>\n        <button\n          class=\"enter-type-option__button\"\n          type=\"button\"\n          (click)=\"submit('T')\"\n        >\n          Select <span class=\"icon\"></span>\n        </button>\n      </div>\n\n      <div class=\"enter-type-option\" *ngIf=\"allowPurchase\">\n        <div>\n          <img\n            src=\"/assets/icon-buy-application.svg\"\n            alt=\"Tenant Evaluation Logo\"\n            class=\"enter-type-option__img\"\n          />\n        </div>\n        <h6 class=\"enter-type-option__text\">Apply to buy <br />a property</h6>\n        <button\n          class=\"enter-type-option__button\"\n          type=\"button\"\n          (click)=\"submit('O')\"\n        >\n          Select <span class=\"icon\"></span>\n        </button>\n      </div>\n\n      <div class=\"enter-type-option\" *ngIf=\"allowGuest\">\n        <div>\n          <img\n            src=\"/assets/icon-guest-application.svg\"\n            alt=\"Tenant Evaluation Logo\"\n            class=\"enter-type-option__img\"\n          />\n        </div>\n        <h6 class=\"enter-type-option__text\">\n          Apply as a guest or<br> additional resident\n        </h6>\n        <button\n          class=\"enter-type-option__button\"\n          type=\"button\"\n          (click)=\"submit('G')\"\n        >\n          Select <span class=\"icon\"></span>\n        </button>\n      </div>\n    </div>\n\n    <section class=\"enter-type-footer\">\n      <small class=\"enter-type-footer--text\"\n        >All rights reserved | Tenant Evaluation {{currentYear}}</small\n      >\n    </section>\n  </div>\n\n  <!-- ./begin-enter-code -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tev-header></tev-header>\n<div class=\"home-container\">\n  <div class=\"home-options\">\n    <div class=\"home-description\">\n      <div>\n        <img class=\"home-description__image\" src=\"/assets/tenant-2.0/title_welcome.svg\">\n        <h1 class=\"home-description__title\">What would you like to do today?</h1>\n      </div>\n      <div class=\"d-flex div-about-info home-description__question\">\n          <button mat-fab color=\"dark\" class=\"about-icon\" (click)=\"openExternalUrl()\">\n              <div class=\"\"></div>\n          </button>\n          <div class=\"about-info\">\n              <div class=\"txt-xs txt-bold txt-blue\">\n                  Learn more about how to apply\n              </div>\n              <div class=\"font-size-13px txt-white\" (click)=\"openExternalUrl()\">\n                  Click here for more information\n              </div>\n          </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!roleRealtor\" class=\"home-option\">\n      <div>\n        <img\n          src=\"/assets/tenant-2.0/icon_home_start.svg\"\n           alt=\"Start a new application\"\n          class=\"home-option__img\"\n        />\n      </div>\n      <h6 class=\"home-option__text\">Start a new<br />application</h6>\n      <button\n        class=\"home-option__button\"\n        type=\"button\"\n        [disabled]=\"processing\"\n        (click)=\"submit('NA')\"\n      >\n        Select <span class=\"icon\"></span>\n      </button>\n    </div>\n\n    <div class=\"home-option\">\n      <div>\n        <img\n          src=\"/assets/tenant-2.0/icon_home_resume.svg\"\n          alt=\"View or Resume application(s)\"\n          class=\"home-option__img\"\n        />\n      </div>\n      <h6 class=\"home-option__text\">\n        View or resume <span *ngIf=\"!roleRealtor\">my</span><br> application(s)\n      </h6>\n      <button\n        class=\"home-option__button\"\n        type=\"button\"\n        [disabled]=\"processing\"\n        [class.disabled]=\"processing\"\n        (click)=\"submit('RA')\"\n      >\n        Select <span class=\"icon\"></span>\n      </button>\n    </div>\n  </div>\n\n</div>\n<section class=\"home-footer\">\n  <small class=\"home-footer--text\"\n    >All rights reserved | Tenant Evaluation {{currentYear}}</small\n  >\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/user-info/user-info.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/user-info/user-info.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-video-content community-user-info\">\n    <svg style=\"margin: 10px;cursor:pointer;border: 2px solid#fff;border-radius: 5px;padding: 7px;\" (click)=\"back()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2em\" height=\"2em\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z\" />\n      </svg>\n    <div class=\"container-fluid p-3 col-lg-8 col-md-12\">\n        <div class=\"row justify-flex-start col-sm-12 col-md-12 col-lg-8\">\n            <div class=\"icon-te-info\"></div>\n        </div>\n    </div>\n    <div class=\"container-fluid col-sm-12 col-lg-8 col-md-12\">\n        <div>\n            <span class=\"info-video-title\">A few things to keep in mind before applying</span>\n        </div>\n        <div>\n            <span class=\"info-video-subtitle\">Tenant Evaluation</span>\n        </div>\n        <div class=\"videoWrapper full-width\">\n            <iframe [ngClass]=\"{'d-none': !playVideo}\" id=\"videoplayer1\" class=\"full-width\" src=\"https://player.vimeo.com/video/561330589?autoplay=1\" width=\"800\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n            <div *ngIf=\"!playVideo\" class=\"retry-container\">\n                <button (click)=\"retry()\">REPLAY VIDEO</button>\n                <button  (click)=\"submit()\">CONTINUE</button>\n            </div>\n        </div>\n        <div *ngIf=\"iphonePlayButton\" class=\"container-fluid flex-content-center mt-3 col-sm-12 col-lg-10 col-md-12\">\n            <button class=\"iphone-btn\" (click)=\"retryIphone()\">PLAY THE VIDEO</button>\n            <div class=\"mt-3\">Make sure to play the video. You will be able to continue after the video finishes.</div>\n        </div>\n        <div *ngIf=\"shownext\" class=\"container-fluid footer-elements col-sm-12 col-lg-10 col-md-12\">\n            <div class=\"d-flex col-sm-12 col-lg-8 col-md-8\">\n                <button mat-fab color=\"primary\" (click)=\"goToInfoPage()\">\n                    <mat-icon>article</mat-icon>\n                </button>\n                <div class=\"starting-guide-info\" (click)=\"goToInfoPage()\">\n                    <div class=\"blue-text\">\n                        GETTING STARTED GUIDE\n                    </div>\n                    <div class=\"font-size-13px\">\n                        Click here for more information\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"col-sm-12 col-lg-6 col-md-6\">\n                <a\n                    [routerLink]=\"['enter-code']\"\n                    class=\"tev-btn tev-btn--block tev-btn--large continue-btn\">\n                    Continue\n                </a>\n            </div> -->\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/community/community-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/community/community-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CommunityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityRoutingModule", function() { return CommunityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community/community.component.ts");
/* harmony import */ var _enter_code_enter_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter-code/enter-code.component */ "./src/app/community/enter-code/enter-code.component.ts");
/* harmony import */ var _enter_type_enter_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-type/enter-type.component */ "./src/app/community/enter-type/enter-type.component.ts");
/* harmony import */ var _core_guards_user_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/guards/user-logged-in.guard */ "./src/app/core/guards/user-logged-in.guard.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/community/user-info/user-info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/community/home/home.component.ts");









const routes = [
    {
        path: '',
        component: _community_community_component__WEBPACK_IMPORTED_MODULE_3__["CommunityComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                canActivate: [_core_guards_user_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__["UserLoggedInGuard"]],
            },
            {
                path: 'enter-code',
                component: _enter_code_enter_code_component__WEBPACK_IMPORTED_MODULE_4__["EnterCodeComponent"],
            },
            {
                path: 'video-info/:code',
                component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"]
            },
            {
                path: ':code',
                component: _enter_type_enter_type_component__WEBPACK_IMPORTED_MODULE_5__["EnterTypeComponent"],
                canActivate: [_core_guards_user_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__["UserLoggedInGuard"]],
            },
        ],
        canActivate: [_core_guards_user_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__["UserLoggedInGuard"]],
    },
];
let CommunityRoutingModule = class CommunityRoutingModule {
};
CommunityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CommunityRoutingModule);



/***/ }),

/***/ "./src/app/community/community.module.ts":
/*!***********************************************!*\
  !*** ./src/app/community/community.module.ts ***!
  \***********************************************/
/*! exports provided: CommunityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityModule", function() { return CommunityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _community_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community-routing.module */ "./src/app/community/community-routing.module.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community/community.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _enter_type_enter_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-type/enter-type.component */ "./src/app/community/enter-type/enter-type.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _enter_code_enter_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enter-code/enter-code.component */ "./src/app/community/enter-code/enter-code.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/community/user-info/user-info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/community/home/home.component.ts");
/* harmony import */ var _enter_type_cas_dialog_cas_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enter-type/cas-dialog/cas-dialog.component */ "./src/app/community/enter-type/cas-dialog/cas-dialog.component.ts");











let CommunityModule = class CommunityModule {
};
CommunityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyBTQWYzdpfXAKETg67auJ8TTsR5OLWR4ZU",
                libraries: ["places"]
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _community_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunityRoutingModule"]
        ],
        declarations: [
            _community_community_component__WEBPACK_IMPORTED_MODULE_3__["CommunityComponent"],
            _enter_code_enter_code_component__WEBPACK_IMPORTED_MODULE_7__["EnterCodeComponent"],
            _enter_type_enter_type_component__WEBPACK_IMPORTED_MODULE_5__["EnterTypeComponent"],
            _enter_code_enter_code_component__WEBPACK_IMPORTED_MODULE_7__["AccessPropertyDialog"],
            _enter_type_enter_type_component__WEBPACK_IMPORTED_MODULE_5__["AccessTypeDialog"],
            _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__["UserInfoComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _enter_type_cas_dialog_cas_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CoApplicantSelectionDialogComponent"]
        ],
        entryComponents: [_enter_code_enter_code_component__WEBPACK_IMPORTED_MODULE_7__["AccessPropertyDialog"], _enter_type_enter_type_component__WEBPACK_IMPORTED_MODULE_5__["AccessTypeDialog"], _enter_type_cas_dialog_cas_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CoApplicantSelectionDialogComponent"]],
    })
], CommunityModule);



/***/ }),

/***/ "./src/app/community/community/community.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/community/community/community.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkvY29tbXVuaXR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/community/community/community.component.ts":
/*!************************************************************!*\
  !*** ./src/app/community/community/community.component.ts ***!
  \************************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CommunityComponent = class CommunityComponent {
    constructor(httpService, uiService) {
        this.httpService = httpService;
        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.listenToThemeValues();
    }
    listenToThemeValues() {
        this.uiService
            .bigLogo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$))
            .subscribe(value => this.bigLogo = value);
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
};
CommunityComponent.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-community',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community/community.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./community.component.scss */ "./src/app/community/community/community.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])
], CommunityComponent);



/***/ }),

/***/ "./src/app/community/enter-code/enter-code.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/community/enter-code/enter-code.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-xl {\n  top: 0;\n  height: 100%;\n}\n\n.enter-code-footer {\n  grid-area: footer;\n  padding-top: 220px;\n  display: grid;\n  grid-template: 1fr/5% 1fr 5%;\n  grid-template-areas: \". col .\";\n}\n\n.enter-code-footer--text {\n  font-family: Open Sans, Regular;\n  font-size: 12px;\n  color: #a3aab1;\n  grid-area: col;\n}\n\n.enter-code-button {\n  display: grid;\n  grid-area: btn;\n  justify-items: center;\n  align-items: center;\n  margin-bottom: 0px;\n  padding: 1.25rem 1.25rem;\n  background: #009cdc;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: none;\n  text-transform: uppercase;\n  border-radius: 4px;\n  width: 100%;\n  border-style: none;\n  border: 1px solid transparent;\n  text-align: center;\n}\n\n.mat-form-field {\n  text-align: center;\n}\n\n.mat-form-field-label {\n  padding-left: 20px !important;\n}\n\n.ecode-navbar {\n  height: 10vh !important;\n}\n\n.btn {\n  padding: 0rem 0rem !important;\n}\n\nh1 {\n  font-family: Open Sans, Bold;\n  font-size: 40px;\n}\n\n#otp-holder {\n  width: 190px;\n  overflow: hidden;\n}\n\n#otp-content {\n  left: 0;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.p {\n  color: #ffffff;\n  line-height: 0vmax !important;\n}\n\n.p__1 {\n  font-weight: normal;\n  font-size: 19px;\n}\n\n.p__2 {\n  font-weight: normal;\n  font-size: 20px;\n}\n\n.lets-begin {\n  font-family: onetrickTony trial, Regular !important;\n}\n\n.tev-btn {\n  background: #009cdc !important;\n  width: 100%;\n  text-transform: uppercase;\n  font-size: 20px;\n}\n\n.icon-house {\n  background: url(\"/assets/icon-house.svg\") no-repeat right bottom;\n  opacity: 1;\n  height: 100vh;\n  background-color: #4D445A;\n}\n\n.sidebar {\n  height: 500px;\n}\n\n.bg-building {\n  height: 7vh;\n}\n\n.div-icon {\n  height: 10vh;\n}\n\n#input-code {\n  caret-color: #6d6f72;\n  color: #6d6f72;\n  text-align: center;\n  font-size: 60px !important;\n  background-color: white !important;\n  height: 100px !important;\n  letter-spacing: 42px;\n}\n\ninput:focus::-webkit-input-placeholder {\n  color: transparent !important;\n}\n\ninput:focus::-moz-placeholder {\n  color: transparent !important;\n}\n\ninput:focus::-ms-input-placeholder {\n  color: transparent !important;\n}\n\ninput:focus::placeholder {\n  color: transparent !important;\n}\n\n.input-touch {\n  caret-color: transparent !important;\n}\n\n::ng-deep .mat-input-element::-webkit-input-placeholder {\n  color: #6D6F72;\n  font-size: 20px;\n  letter-spacing: normal;\n  font-family: Roboto-Regular;\n  opacity: 1;\n}\n\n::ng-deep .mat-input-element::-moz-placeholder {\n  color: #6D6F72;\n  font-size: 20px;\n  letter-spacing: normal;\n  font-family: Roboto-Regular;\n  opacity: 1;\n}\n\n::ng-deep .mat-input-element::-ms-input-placeholder {\n  color: #6D6F72;\n  font-size: 20px;\n  letter-spacing: normal;\n  font-family: Roboto-Regular;\n  opacity: 1;\n}\n\n::ng-deep .mat-input-element::placeholder {\n  color: #6D6F72;\n  font-size: 20px;\n  letter-spacing: normal;\n  font-family: Roboto-Regular;\n  opacity: 1;\n}\n\n.z-input-digit__content {\n  display: flex;\n  justify-content: space-between;\n  gap: 5px;\n}\n\n.z-input-digit__input {\n  font-size: 19px;\n  text-align: center;\n  padding: 20px;\n  max-width: 50px;\n  min-width: 0;\n  background: #f1f5f7;\n  -moz-appearance: textfield;\n}\n\n.z-input-digit__input::-webkit-outer-spin-button, .z-input-digit__input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.z-input-digit__hint {\n  font-size: 10px;\n  color: #8c8c8c;\n  text-align: right;\n  width: 100%;\n  display: inline-block;\n}\n\n@media screen and (max-width: 1200px) {\n  .enter-code-footer {\n    grid-area: footer;\n    padding-top: 50px;\n    padding-bottom: 30px;\n    display: grid;\n    grid-template: 1fr/5% 1fr 5%;\n    grid-template-areas: \". col .\";\n  }\n  .enter-code-footer--text {\n    font-family: Open Sans, Regular;\n    font-size: 10px;\n    color: #a3aab1;\n    grid-area: col;\n  }\n\n  #input-code {\n    font-size: 40px !important;\n    letter-spacing: 20px;\n  }\n\n  .p {\n    color: #ffffff;\n    line-height: 0vmax !important;\n  }\n  .p__1 {\n    font-size: 14px;\n  }\n  .p__2 {\n    font-size: 14px;\n  }\n\n  h1 {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9jb21tdW5pdHkvZW50ZXItY29kZS9lbnRlci1jb2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tdW5pdHkvZW50ZXItY29kZS9lbnRlci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsTUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtBQ0FGOztBRENFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsNkJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0FDRkY7O0FES0E7RUFDRSw2QkFBQTtBQ0ZGOztBREtBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLE9BQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNERjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDRSxtREFBQTtBQ0RGOztBREtBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxnRUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURLQTtFQUNFLDZCQUFBO0FDRkY7O0FEQ0E7RUFDRSw2QkFBQTtBQ0ZGOztBRENBO0VBQ0UsNkJBQUE7QUNGRjs7QURDQTtFQUNFLDZCQUFBO0FDRkY7O0FETUE7RUFDRSxtQ0FBQTtBQ0hGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRFFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtBQ0xKOztBRFFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSwwQkFBQTtBQ1BKOztBRFNJO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDUk47O0FEWUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDVko7O0FEZUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLDhCQUFBO0VDWkY7RURhRTtJQUNFLCtCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDWEo7O0VEY0E7SUFFRSwwQkFBQTtJQUNBLG9CQUFBO0VDWkY7O0VEZUE7SUFDRSxjQUFBO0lBQ0EsNkJBQUE7RUNaRjtFRGFFO0lBQ0UsZUFBQTtFQ1hKO0VEYUU7SUFDRSxlQUFBO0VDWEo7O0VEY0E7SUFDRSxlQUFBO0VDWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9lbnRlci1jb2RlL2VudGVyLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXhsIHtcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7IC8qcG9zaXRpb246IGZpeGVkOyovXG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZW50ZXItY29kZS1mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgcGFkZGluZy10b3A6IDIyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgLyA1JSAxZnIgNSU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcuIGNvbCAuJztcbiAgJi0tdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNhM2FhYjE7XG4gICAgZ3JpZC1hcmVhOiBjb2w7XG4gIH1cbn1cblxuLmVudGVyLWNvZGUtYnV0dG9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBidG47XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogIzAwOWNkYztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lY29kZS1uYXZiYXIge1xuICBoZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDByZW0gMHJlbSAhaW1wb3J0YW50O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuI290cC1ob2xkZXIge1xuICB3aWR0aDogMTkwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jb3RwLWNvbnRlbnQge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4ucCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMHZtYXggIWltcG9ydGFudDtcbiAgJl9fMSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbiAgJl9fMiB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLmxldHMtYmVnaW4ge1xuICBmb250LWZhbWlseTogb25ldHJpY2tUb255IHRyaWFsLCBSZWd1bGFyICFpbXBvcnRhbnQ7XG4gIC8vaGVpZ2h0OiAzMHZoICFpbXBvcnRhbnQ7XG59XG5cbi50ZXYtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwOWNkYyAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaWNvbi1ob3VzZSB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pY29uLWhvdXNlLnN2ZycpIG5vLXJlcGVhdCByaWdodCBib3R0b207XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDQ0NUE7XG59XG5cbi5zaWRlYmFyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmJnLWJ1aWxkaW5nIHtcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbi5kaXYtaWNvbiB7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuI2lucHV0LWNvZGUge1xuICBjYXJldC1jb2xvcjogIzZkNmY3MjtcbiAgY29sb3I6ICM2ZDZmNzI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDQycHg7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG59XG5cbi5pbnB1dC10b3VjaCB7XG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzZENkY3MjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzpub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnotaW5wdXQtZGlnaXQge1xuICAmX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDVweDtcbiAgfVxuXG4gICZfX2lucHV0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICAvL2hlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmNztcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcblxuICAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgJl9faGludCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZW50ZXItY29kZS1mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gNSUgMWZyIDUlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcuIGNvbCAuJztcbiAgICAmLS10ZXh0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIFJlZ3VsYXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogI2EzYWFiMTtcbiAgICAgIGdyaWQtYXJlYTogY29sO1xuICAgIH1cbiAgfVxuICAjaW5wdXQtY29kZSB7XG5cbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcblxuICB9XG4gIC5wIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMHZtYXggIWltcG9ydGFudDtcbiAgICAmX18xIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgJl9fMiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbiIsIi5kaXYteGwge1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVudGVyLWNvZGUtZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIHBhZGRpbmctdG9wOiAyMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLzUlIDFmciA1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNvbCAuXCI7XG59XG4uZW50ZXItY29kZS1mb290ZXItLXRleHQge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBSZWd1bGFyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYTNhYWIxO1xuICBncmlkLWFyZWE6IGNvbDtcbn1cblxuLmVudGVyLWNvZGUtYnV0dG9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBidG47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQ6ICMwMDljZGM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lY29kZS1uYXZiYXIge1xuICBoZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDByZW0gMHJlbSAhaW1wb3J0YW50O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuI290cC1ob2xkZXIge1xuICB3aWR0aDogMTkwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNvdHAtY29udGVudCB7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbi5wIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAwdm1heCAhaW1wb3J0YW50O1xufVxuLnBfXzEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4ucF9fMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxldHMtYmVnaW4ge1xuICBmb250LWZhbWlseTogb25ldHJpY2tUb255IHRyaWFsLCBSZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi50ZXYtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwOWNkYyAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaWNvbi1ob3VzZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbi1ob3VzZS5zdmdcIikgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENDQ1QTtcbn1cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uYmctYnVpbGRpbmcge1xuICBoZWlnaHQ6IDd2aDtcbn1cblxuLmRpdi1pY29uIHtcbiAgaGVpZ2h0OiAxMHZoO1xufVxuXG4jaW5wdXQtY29kZSB7XG4gIGNhcmV0LWNvbG9yOiAjNmQ2ZjcyO1xuICBjb2xvcjogIzZkNmY3MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDYwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogNDJweDtcbn1cblxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC10b3VjaCB7XG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNkQ2RjcyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnotaW5wdXQtZGlnaXRfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNXB4O1xufVxuLnotaW5wdXQtZGlnaXRfX2lucHV0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogNTBweDtcbiAgbWluLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY3O1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbi56LWlucHV0LWRpZ2l0X19pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgLnotaW5wdXQtZGlnaXRfX2lucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4uei1pbnB1dC1kaWdpdF9faGludCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmVudGVyLWNvZGUtZm9vdGVyIHtcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmci81JSAxZnIgNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNvbCAuXCI7XG4gIH1cbiAgLmVudGVyLWNvZGUtZm9vdGVyLS10ZXh0IHtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2EzYWFiMTtcbiAgICBncmlkLWFyZWE6IGNvbDtcbiAgfVxuXG4gICNpbnB1dC1jb2RlIHtcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgfVxuXG4gIC5wIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMHZtYXggIWltcG9ydGFudDtcbiAgfVxuICAucF9fMSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5wX18yIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/community/enter-code/enter-code.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/community/enter-code/enter-code.component.ts ***!
  \**************************************************************/
/*! exports provided: EnterCodeComponent, AccessPropertyDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodeComponent", function() { return EnterCodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPropertyDialog", function() { return AccessPropertyDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_definitions_types_application_sub_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/definitions/types/application-sub-type */ "./src/app/shared/definitions/types/application-sub-type.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_services_endpoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../app/core/services/endpoints */ "./src/app/core/services/endpoints.ts");




//import { FormBuilder, Validators } from '@angular/forms'









let EnterCodeComponent = class EnterCodeComponent {
    constructor(
    //private formBuilder: FormBuilder,
    uiService, httpService, authService, router, dialog) {
        this.uiService = uiService;
        this.httpService = httpService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.applicationSubTypes = _shared_definitions_types_application_sub_type__WEBPACK_IMPORTED_MODULE_2__["ApplicationSubTypeValues"];
        this.code = '';
        this.caretTransparent = false;
        this.applications = [];
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('auto');
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    onKey(value) {
        this.code = value;
        if (this.code.length > 0) {
            this.caretTransparent = true;
        }
        else {
            this.caretTransparent = false;
        }
    }
    ngOnInit() {
        const dataUser = this.authService.getDecodedToken();
        const applications = this.getApplications();
        //ROLE_APPLICANT
        if ((dataUser.auth.includes('ROLE_REALTOR')) && (applications.length < 1)) {
            //this.router.navigate(['/application-list'])
            this.errorTitle = 'Error';
            this.errorMessage = 'Our records indicate that the email listed on this account has been registered as a realtor account. For this reason you are nt able to begin an application. Please create an account with a different email address in order to begin an application';
            this.openDialog();
            this.authService.logOut().subscribe(() => {
                this.router.navigate(['/']).catch(console.log);
            });
        }
        this.uiService.setThemeDefaultValues();
        //this.initForm();
        this.listenToThemeValues();
        this.currentYear = new Date().getFullYear();
    }
    listenToThemeValues() {
        this.uiService.bigLogo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$))
            .subscribe((value) => (this.bigLogo = value));
    }
    getApplications() {
        this.httpService
            .getApplicationList(true)
            .subscribe(applicationsResponse => {
            if (applicationsResponse) {
                this.applications = applicationsResponse.applications;
            }
        });
        return this.applications;
    }
    openDialog() {
        const dialogRef = this.dialog.open(AccessPropertyDialog, {
            panelClass: 'fit-dialog',
        });
        let instance = dialogRef.componentInstance;
        instance['dialogTitle'] = this.errorTitle;
        instance['dialogText'] = this.errorMessage;
        dialogRef.afterClosed().subscribe(() => this.clearInfo());
    }
    /**
     * Init the form
     */
    // initForm() {
    //   this.enterCodeForm = this.formBuilder.group({
    //     code: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    //     type: [""],
    //     //type: ["", Validators.required],
    //   });
    // }
    /**
     * Get the error for the given control name.
     *
     * @param {string} controlName
     * @returns {string}
     */
    getError(controlName) {
        const { errors } = this.enterCodeForm.controls[controlName];
        return this.uiService.getControlError(errors);
    }
    markControlsASTouched() {
        this.uiService.markControlsAsTouched(this.enterCodeForm);
    }
    /**
     * Submit the form.
     */
    submit() {
        // if (this.enterCodeForm.valid) {
        //   this.clearInfo();
        //   this.uiService.showInfo({
        //     message: "Getting Property Information",
        //     title: "Please Wait",
        //     keepOpen: true,
        //   });
        //   const { code, type } = <EnterCodeForm>this.enterCodeForm.value;
        this.httpService
            //.getPropertyInfo(code, type, false)
            .getPropertyInfoByCode(this.code, false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$))
            .subscribe(() => {
            //this.router.navigate(["/community", code, type]).catch(console.log);
            const cookieName = `${_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].api_url}/${_app_core_services_endpoints__WEBPACK_IMPORTED_MODULE_12__["apiEndpoints"].getPropertyInfo}/${this.code}`;
            const propertyInfo = JSON.parse(localStorage.getItem(cookieName));
            switch (propertyInfo.shortApplication) {
                case 'SHORT':
                    this.router.navigate(['/community', this.code]).catch(console.log);
                    break;
                case 'LONG':
                    this.router.navigate(['/community/video-info', this.code]).catch(console.log);
                    break;
                default:
                    return null;
            }
        }, (httpError) => {
            const error = httpError.error;
            console.log(error.status);
            /**
             * @todo Add this error codes as constants
             */
            if (error.errorKey === 'invalid.property.code' || error.errorKey === 'property.not.active') {
                //   const applicationType = this.applicationSubTypes.find(
                //     (appType) => appType.value === type
                //   );
                //   this.errorTitle = "Option not allowed";
                //   this.errorMessage = `${applicationType.name} is not permitted through this code. Please contact the community to advise on a different procedure`;
                // } else if (error.errorKey === "property.not.active") {
                //   const applicationType = this.applicationSubTypes.find(
                //     (appType) => appType.value === type
                //   );
                this.errorTitle = 'Property error';
                this.errorMessage =
                    'Property not active on our System. Please contact the community to advise on a different procedure';
            }
            // else if (error.errorKey === 'property.not.active') {
            //   this.errorTitle = 'Property error'
            //   this.errorMessage =
            //     'Property not active on our System. Please contact the community to advise on a different procedure'
            //}
            else if (error.status === 404) {
                this.errorTitle = 'No Property Coded Provided';
                this.errorMessage =
                    'Please make sure you provide a valid 4-5 digit number';
            }
            else {
                this.errorTitle = 'Error';
                this.errorMessage = error.message;
            }
            this.openDialog();
        });
        // } else {
        //   this.markControlsASTouched();
        // }
    }
    clearInfo() {
        this.uiService.clearCurrentToastr();
    }
    logOut(event) {
        event.preventDefault();
        this.authService.logOut().subscribe(() => {
            this.router.navigate(['/']).catch(console.log);
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
};
EnterCodeComponent.ctorParameters = () => [
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"] },
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
EnterCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-enter-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enter-code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-code/enter-code.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enter-code.component.scss */ "./src/app/community/enter-code/enter-code.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"],
        _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
], EnterCodeComponent);

let AccessPropertyDialog = class AccessPropertyDialog {
    constructor() {
        this.dialogTitle = '';
        this.dialogText = '';
    }
};
AccessPropertyDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'access-property-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./access-property.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-code/access-property.dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccessPropertyDialog);



/***/ }),

/***/ "./src/app/community/enter-type/cas-dialog/cas-dialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/community/enter-type/cas-dialog/cas-dialog.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cas-dialog {\n  text-align: left;\n  padding-left: 20px;\n}\n\n.mat-dialog {\n  font-family: Roboto;\n}\n\n.mat-dialog-container {\n  text-align: left;\n  padding: 30px 40px;\n}\n\n.mat-dialog-image img {\n  width: 35px;\n  height: 35px;\n  margin: 20px auto;\n  text-align: left;\n}\n\n.mat-dialog-title {\n  text-align: left;\n  font-size: 40px;\n  font-weight: bold;\n  margin: 0 0 10px !important;\n}\n\n.mat-dialog-content {\n  font-family: Roboto, Medium;\n  text-align: left;\n  font-size: 20px;\n}\n\n.mat-dialog-content p {\n  margin-top: 10px;\n  font-size: 20px;\n  color: #6d6471;\n}\n\n.mat-dialog-content-md p {\n  display: none;\n}\n\n.mat-dialog-button {\n  justify-items: center;\n  align-items: center;\n  margin-bottom: 15px;\n  background: #009cdc;\n  color: white;\n  font-size: 16px;\n  text-decoration: none;\n  text-transform: uppercase;\n  border-radius: 4px;\n  border-style: none;\n  border: 1px solid transparent;\n  text-align: center;\n  padding: 20px;\n  width: 60%;\n}\n\n@media screen and (max-width: 767px) {\n  .mat-dialog-content-md p {\n    margin-top: 0px;\n    display: block;\n  }\n  .mat-dialog-content p {\n    margin-top: 0px;\n    display: none;\n  }\n  .mat-dialog-title {\n    margin-top: 5px !important;\n    font-size: 28px !important;\n  }\n  .mat-dialog-title br {\n    display: none;\n  }\n  .mat-dialog-image img {\n    display: none;\n  }\n  .mat-dialog-content p {\n    font-size: 16px !important;\n  }\n  .mat-dialog-button {\n    justify-items: center;\n    align-items: center;\n    margin-bottom: 5px;\n    background: #009cdc;\n    color: white;\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    border-radius: 4px;\n    border-style: none;\n    border: 1px solid transparent;\n    text-align: center;\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .mat-dialog-title {\n    font-size: 26px !important;\n  }\n  .mat-dialog-title br {\n    display: none;\n  }\n  .mat-dialog-image img {\n    display: none;\n  }\n  .mat-dialog-content p {\n    font-size: 14px !important;\n  }\n  .mat-dialog-button {\n    font-size: 14px !important;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .mat-dialog-title {\n    font-size: 20px !important;\n  }\n  .mat-dialog-title br {\n    display: none;\n  }\n  .mat-dialog-image img {\n    display: none;\n  }\n  .mat-dialog-content p {\n    font-size: 10px !important;\n  }\n  .mat-dialog-content-md p {\n    font-size: 10px !important;\n    display: block;\n  }\n  .mat-dialog-button {\n    font-size: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9jb21tdW5pdHkvZW50ZXItdHlwZS9jYXMtZGlhbG9nL2Nhcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW11bml0eS9lbnRlci10eXBlL2Nhcy1kaWFsb2cvY2FzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDekJGOztBRDRCQTtFQUNFLG1CQUFBO0FDekJGOztBRDBCRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN4Qko7O0FEMkJJO0VBQ0UsV0FwQ2lCO0VBcUNqQixZQXJDaUI7RUFzQ2pCLGlCQUFBO0VBQ0EsZ0JBQUE7QUN6Qk47O0FENEJFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQzFCSjs7QUQ0QkU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzFCSjs7QUQ0Qkk7RUFDRSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxjQXBETztBQ3lCYjs7QUQrQkk7RUFDRSxhQUFBO0FDN0JOOztBRGdDRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQzlCSjs7QURxQ0U7RUFFSTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VDcENOO0VEd0NJO0lBQ0UsZUFBQTtJQUNBLGFBQUE7RUN0Q047RUR5Q0U7SUFDRSwwQkFBQTtJQUVBLDBCQUFBO0VDeENKO0VEeUNJO0lBQ0UsYUFBQTtFQ3ZDTjtFRDJDSTtJQUNFLGFBQUE7RUN6Q047RUQ2Q0k7SUFDRSwwQkFBQTtFQzNDTjtFRHFERTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLDZCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDbkRKO0FBQ0Y7O0FEc0RFO0VBQ0U7SUFDRSwwQkFBQTtFQ3BESjtFRHFESTtJQUNFLGFBQUE7RUNuRE47RUR1REk7SUFDRSxhQUFBO0VDckROO0VEeURJO0lBQ0UsMEJBQUE7RUN2RE47RUQyREU7SUFDRSwwQkFBQTtFQ3pESjtBQUNGOztBRDRERTtFQUNFO0lBQ0UsMEJBQUE7RUMxREo7RUQyREk7SUFDRSxhQUFBO0VDekROO0VENkRJO0lBQ0UsYUFBQTtFQzNETjtFRCtESTtJQUNFLDBCQUFBO0VDN0ROO0VEaUVJO0lBQ0UsMEJBQUE7SUFDQSxjQUFBO0VDL0ROO0VEa0VFO0lBQ0UsMEJBQUE7RUNoRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9lbnRlci10eXBlL2Nhcy1kaWFsb2cvY2FzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYXgtY29udGFpbmVyOiAxMTQwcHg7XG4kcmFkaW8tYnV0dG9uLXNpemU6IDI0cHg7XG4kdGV2LWhlYWRlci1oZWlnaHQ6IDE3MHB4O1xuJHRldi1kaWFsb2ctaWNvbi1zaXplOiAzNXB4O1xuJHRldi1kaWFsb2ctaWNvbi1zaXplLXNtOiAwcHg7XG4kdGUteWVzLW5vLXNpemU6IDE0MHB4O1xuXG4kb3Blbi1zYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiRjb2xvci1mb250OiAjNmQ2NDcxO1xuJHRldi1wdXJwbGU6ICMzNzMwNDE7XG4kdGV2LWxpZ2h0LXB1cnBsZTogIzNmM2M0YztcbiR0ZXYtdGV4dC1saWdodC1wdXJwbGU6ICM2OTYxNmQ7XG4kdGV2LXRleHQtZGFyay1wdXJwbGU6ICMyYzI4MzY7XG4kdGV2LXByaW1hcnk6ICMwZjlhZTM7XG4kdGV2LWFjY2VudDogI2VmNDYzZjtcbiR0ZXYtc3VjY2VzczogIzczYzQyMjtcbiR0ZXYtZ3JheS00MDA6ICM4MDgyODU7XG4kbWZmLW5vcm1hbDogI2E3YTlhYztcbiRtYWluLWJhY2tncm91bmQ6ICNmMWYyZjI7XG4kdGV2LW1hdC10YWItYmc6ICNmZmZmZmY7XG5cbiR0ZXYtbmF2LWJhci13aWR0aDogMTYzcHg7XG4kdGV2LW5hdi1iYXItbG9nby1zaXplOiAzMnB4O1xuXG4kdGV2LWRlZmF1bHQtYm9yZGVyOiAxcHggc29saWQgI2UyZGZkZjtcblxuLmNhcy1kaWFsb2cge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5tYXQtZGlhbG9nIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgJi1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICB9XG4gICYtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogJHRldi1kaWFsb2ctaWNvbi1zaXplO1xuICAgICAgaGVpZ2h0OiAkdGV2LWRpYWxvZy1pY29uLXNpemU7XG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG4gICYtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAmLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIE1lZGl1bTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvLyBsaW5lLWhlaWdodDogMTAwcHg7XG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgLy8gbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogJGNvbG9yLWZvbnQ7XG4gICAgfVxuICB9XG4gICYtY29udGVudC1tZCB7XG4gICAgcCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAmLWJ1dHRvbiB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Y2RjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLy8gJi1mdWxsLXNjcmVlbiB7XG4gIC8vICAgYmFja2dyb3VuZDogcmdiYSg2LCA2LCA2LCAwLjYpO1xuICAvLyB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAmLWNvbnRlbnQtbWQge1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgICYtY29udGVudCB7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAmLXRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuXG4gICAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICAgIGJyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1pbWFnZSB7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNvbnRlbnQge1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAmLWZ1bGwtc2NyZWVuIHtcbiAgICAvLyAgIH4gLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyAgICAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgJi1idXR0b24ge1xuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDljZGM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgJi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICAgIGJyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1pbWFnZSB7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNvbnRlbnQge1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgJi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGJyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi1pbWFnZSB7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNvbnRlbnQge1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAmLWNvbnRlbnQtbWQge1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gICAgJi1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuY2FzLWRpYWxvZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLm1hdC1kaWFsb2cge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xufVxuLm1hdC1kaWFsb2ctaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCAwIDEwcHggIWltcG9ydGFudDtcbn1cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBNZWRpdW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYXQtZGlhbG9nLWNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2ZDY0NzE7XG59XG4ubWF0LWRpYWxvZy1jb250ZW50LW1kIHAge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1hdC1kaWFsb2ctYnV0dG9uIHtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDA5Y2RjO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDYwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQtbWQgcCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXQtZGlhbG9nLXRpdGxlIGJyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tYXQtZGlhbG9nLWltYWdlIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubWF0LWRpYWxvZy1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXQtZGlhbG9nLWJ1dHRvbiB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDljZGM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1hdC1kaWFsb2ctdGl0bGUgYnIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1hdC1kaWFsb2ctaW1hZ2UgaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1hdC1kaWFsb2ctYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXQtZGlhbG9nLXRpdGxlIGJyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tYXQtZGlhbG9nLWltYWdlIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubWF0LWRpYWxvZy1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQtbWQgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1hdC1kaWFsb2ctYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/community/enter-type/cas-dialog/cas-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/community/enter-type/cas-dialog/cas-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: CoApplicantSelectionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoApplicantSelectionDialogComponent", function() { return CoApplicantSelectionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let CoApplicantSelectionDialogComponent = class CoApplicantSelectionDialogComponent {
    constructor(dialogRef, route, router, data) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.router = router;
        this.data = data;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const { code, type } = params;
            this.code = code;
            this.type = type;
        });
    }
    onAccept() {
        this.dialogRef.close();
        //console.log(this.type);
        /*switch (this.type) {
          case "T":
            this.router
              .navigate(["/application/new", this.code, this.type, "fees"])
              .catch(console.log);
            break;
          case "O":
            this.router.navigate(["add"]).catch(console.log);
            break;
          case "G":
            this.router
              .navigate(["/application/new", this.code, this.type, "fees", "W"])
              .catch(console.log);
            break;
          default:
            return null;
        }*/
        this.router.navigate(this.data.link);
    }
};
CoApplicantSelectionDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
CoApplicantSelectionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "tev-fees-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cas-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/cas-dialog/cas-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cas-dialog.component.scss */ "./src/app/community/enter-type/cas-dialog/cas-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
], CoApplicantSelectionDialogComponent);



/***/ }),

/***/ "./src/app/community/enter-type/enter-type.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/community/enter-type/enter-type.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n  color: #6d6f72;\n  font-weight: bold;\n  font-size: 24px;\n}\n\nh1 {\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.icon-house {\n  background: url(\"/assets/icon-house.svg\") no-repeat right bottom;\n  opacity: 1;\n  height: 100vh;\n  background-color: #4D445A;\n}\n\n.select-enter-type {\n  display: grid;\n  grid-template: 0.4fr 0.4fr 2fr 1fr/5% 90% 5%;\n  grid-template-areas: \". header .\" \". description .\" \". options .\" \"footer footer footer\";\n}\n\n.enter-type-header {\n  grid-area: header;\n}\n\n.enter-type-header--img {\n  padding-top: 100px;\n  padding-bottom: 50px;\n}\n\n.enter-type-description {\n  text-align: bottom;\n  grid-area: description;\n  align-content: end;\n  padding-bottom: 40px;\n  padding-left: 5em;\n}\n\n.enter-type-options {\n  grid-area: options;\n  display: grid;\n  grid-template: 0.9fr/1fr 1fr 1fr;\n  justify-items: center;\n  padding-bottom: 50px;\n}\n\n.enter-type-footer {\n  grid-area: footer;\n  padding-top: 11em;\n  display: grid;\n  grid-template: 1fr/5% 1fr 5%;\n  grid-template-areas: \". col .\";\n}\n\n.enter-type-footer--text {\n  font-family: Open Sans, Regular;\n  font-size: 12px;\n  color: #a3aab1;\n  grid-area: col;\n}\n\n.enter-type-option {\n  width: 75%;\n  display: grid;\n  padding: 8%;\n  box-sizing: none;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 8px;\n  display: grid;\n  grid-template: 1fr 1fr 0.8fr/1fr;\n  grid-template-areas: \"img\" \"txt\" \"btn\";\n}\n\n.enter-type-option__img {\n  height: 50px;\n  grid-area: img;\n}\n\n.enter-type-option__text {\n  grid-area: txt;\n  box-sizing: border-box;\n  color: #4D445A;\n}\n\n.enter-type-option__button {\n  display: grid;\n  grid-area: btn;\n  grid-template: 1fr/4fr 1fr;\n  align-items: center;\n  background: #009cdc;\n  padding: 1.25rem 1.25rem;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 10px;\n  width: 100%;\n  border-style: none;\n  border: 1px solid transparent;\n  text-align: left;\n}\n\n.enter-type-option__button span.icon {\n  margin-left: 50%;\n  width: 22px;\n  height: 22px;\n  background-image: url(\"/assets/intro/icon_more.svg\");\n}\n\n@media screen and (max-width: 767px) {\n  h1 {\n    font-size: 28px;\n    margin-bottom: 15px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  .icon-house {\n    background-size: 80%;\n    background-position-x: right;\n    background-position-y: bottom;\n  }\n\n  .select-enter-type {\n    display: grid;\n    grid-template: 0.2fr 0.2fr 2fr 1fr/1fr 80% 1fr;\n    grid-template-areas: \". header .\" \". description .\" \". options .\" \"footer footer footer\";\n  }\n\n  .enter-type-header {\n    grid-area: header;\n  }\n  .enter-type-header--img {\n    padding-top: 20px;\n    padding-bottom: 30px;\n  }\n\n  .enter-type-footer {\n    grid-area: footer;\n    padding-top: 1em;\n  }\n\n  .enter-type-description {\n    text-align: bottom;\n    grid-area: description;\n    align-content: end;\n    padding-bottom: 15px;\n    padding-left: 0em;\n  }\n\n  .enter-type-options {\n    grid-area: options;\n    display: grid;\n    grid-template: 0.8fr 0.8fr 0.8fr/1fr;\n    padding-bottom: 50px;\n  }\n\n  .enter-type-option {\n    padding: 5%;\n    margin-right: 0px;\n    width: 100%;\n    margin-bottom: 15px;\n    display: grid;\n    grid-template: 0.4fr 0.4fr/25% 75%;\n    grid-template-areas: \"option-img option-text\" \"option-button option-button\";\n  }\n  .enter-type-option__img {\n    grid-area: option-img;\n    height: 40px;\n  }\n  .enter-type-option__text {\n    font-size: 20px;\n    grid-area: option-text;\n  }\n  .enter-type-option__button {\n    grid-area: option-button;\n    grid-template: 1fr/1fr;\n    text-align: center;\n  }\n  .enter-type-option__button span.icon {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9jb21tdW5pdHkvZW50ZXItdHlwZS9lbnRlci10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tdW5pdHkvZW50ZXItdHlwZS9lbnRlci10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxnRUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLHdGQUNFO0FDR0o7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ0VKOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QURIRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDS0o7O0FERkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FDRTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURESTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtBQ0dOOztBREVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNDRjs7RURDQTtJQUNFLGVBQUE7RUNFRjs7RURBQTtJQUNFLG9CQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQ0dGOztFRERBO0lBQ0UsYUFBQTtJQUNBLDhDQUFBO0lBQ0Esd0ZBQ0U7RUNHSjs7RURFQTtJQUNFLGlCQUFBO0VDQ0Y7RURBRTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUNFSjs7RURDQTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUNFRjs7RURBQTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7RUNHRjs7RUREQTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG9DQUFBO0lBQ0Esb0JBQUE7RUNJRjs7RURGQTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDJFQUNFO0VDSUo7RURGRTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtFQ0lKO0VERkU7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUNJSjtFREZFO0lBQ0Usd0JBQUE7SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0VDSU47RURITTtJQUNJLGFBQUE7RUNLVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tbXVuaXR5L2VudGVyLXR5cGUvZW50ZXItdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcbiAgY29sb3I6ICM2ZDZmNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5oMXtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pY29uLWhvdXNlIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ljb24taG91c2Uuc3ZnJykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENDQ1QTtcbn1cbi5zZWxlY3QtZW50ZXItdHlwZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDAuNGZyIDAuNGZyIDJmciAxZnIgLyA1JSA5MCUgNSU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJy4gaGVhZGVyIC4nXG4gICAgJy4gZGVzY3JpcHRpb24gLidcbiAgICAnLiBvcHRpb25zIC4nXG4gICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyJztcbn1cbi5lbnRlci10eXBlLWhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICAmLS1pbWcge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxufVxuLmVudGVyLXR5cGUtZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBib3R0b207XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogNWVtO1xufVxuLmVudGVyLXR5cGUtb3B0aW9ucyB7XG4gIGdyaWQtYXJlYTogb3B0aW9ucztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMC45ZnIgLyAxZnIgMWZyIDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5lbnRlci10eXBlLWZvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBwYWRkaW5nLXRvcDogMTFlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gNSUgMWZyIDUlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnLiBjb2wgLic7XG4gICYtLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYTNhYWIxO1xuICAgIGdyaWQtYXJlYTogY29sO1xuICB9XG59XG4uZW50ZXItdHlwZS1vcHRpb24ge1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA4JTtcbiAgYm94LXNpemluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMC44ZnIgLyAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2ltZydcbiAgICAndHh0J1xuICAgICdidG4nO1xuICAmX19pbWcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBncmlkLWFyZWE6IGltZztcbiAgfVxuICAmX190ZXh0IHtcbiAgICBncmlkLWFyZWE6IHR4dDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjNEQ0NDVBO1xuICB9XG4gICZfX2J1dHRvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJ0bjtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyA0ZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzAwOWNkYztcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBzcGFuLmljb257XG4gICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ludHJvL2ljb25fbW9yZS5zdmdcIik7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmljb24taG91c2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OmJvdHRvbTtcbiAgfVxuICAuc2VsZWN0LWVudGVyLXR5cGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMC4yZnIgMC4yZnIgMmZyIDFmciAvIDFmciA4MCUgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnLiBoZWFkZXIgLidcbiAgICAgICcuIGRlc2NyaXB0aW9uIC4nXG4gICAgICAnLiBvcHRpb25zIC4nXG4gICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXInO1xuICB9XG4gIC5lbnRlci10eXBlLWhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgJi0taW1nIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgfVxuICB9XG4gIC5lbnRlci10eXBlLWZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgfVxuICAuZW50ZXItdHlwZS1kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogYm90dG9tO1xuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gICAgYWxpZ24tY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMGVtO1xuICB9XG4gIC5lbnRlci10eXBlLW9wdGlvbnMge1xuICAgIGdyaWQtYXJlYTogb3B0aW9ucztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDAuOGZyIDAuOGZyIDAuOGZyIC8gMWZyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG4gIC5lbnRlci10eXBlLW9wdGlvbiB7XG4gICAgcGFkZGluZzogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDAuNGZyIDAuNGZyLyAyNSUgNzUlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnb3B0aW9uLWltZyBvcHRpb24tdGV4dCdcbiAgICAgICdvcHRpb24tYnV0dG9uIG9wdGlvbi1idXR0b24nO1xuICAgICZfX2ltZyB7XG4gICAgICBncmlkLWFyZWE6IG9wdGlvbi1pbWc7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgICZfX3RleHQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZ3JpZC1hcmVhOiBvcHRpb24tdGV4dDtcbiAgICB9XG4gICAgJl9fYnV0dG9uIHtcbiAgICAgIGdyaWQtYXJlYTogb3B0aW9uLWJ1dHRvbjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHNwYW4uaWNvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImg2IHtcbiAgY29sb3I6ICM2ZDZmNzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb24taG91c2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb24taG91c2Uuc3ZnXCIpIG5vLXJlcGVhdCByaWdodCBib3R0b207XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDQ0NUE7XG59XG5cbi5zZWxlY3QtZW50ZXItdHlwZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDAuNGZyIDAuNGZyIDJmciAxZnIvNSUgOTAlIDUlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gaGVhZGVyIC5cIiBcIi4gZGVzY3JpcHRpb24gLlwiIFwiLiBvcHRpb25zIC5cIiBcImZvb3RlciBmb290ZXIgZm9vdGVyXCI7XG59XG5cbi5lbnRlci10eXBlLWhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xufVxuLmVudGVyLXR5cGUtaGVhZGVyLS1pbWcge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uZW50ZXItdHlwZS1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGJvdHRvbTtcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgYWxpZ24tY29udGVudDogZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1ZW07XG59XG5cbi5lbnRlci10eXBlLW9wdGlvbnMge1xuICBncmlkLWFyZWE6IG9wdGlvbnM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDAuOWZyLzFmciAxZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uZW50ZXItdHlwZS1mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgcGFkZGluZy10b3A6IDExZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmci81JSAxZnIgNSU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBjb2wgLlwiO1xufVxuLmVudGVyLXR5cGUtZm9vdGVyLS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2EzYWFiMTtcbiAgZ3JpZC1hcmVhOiBjb2w7XG59XG5cbi5lbnRlci10eXBlLW9wdGlvbiB7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDglO1xuICBib3gtc2l6aW5nOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAwLjhmci8xZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nXCIgXCJ0eHRcIiBcImJ0blwiO1xufVxuLmVudGVyLXR5cGUtb3B0aW9uX19pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGdyaWQtYXJlYTogaW1nO1xufVxuLmVudGVyLXR5cGUtb3B0aW9uX190ZXh0IHtcbiAgZ3JpZC1hcmVhOiB0eHQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNEQ0NDVBO1xufVxuLmVudGVyLXR5cGUtb3B0aW9uX19idXR0b24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJ0bjtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLzRmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDljZGM7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4yNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5lbnRlci10eXBlLW9wdGlvbl9fYnV0dG9uIHNwYW4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW50cm8vaWNvbl9tb3JlLnN2Z1wiKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmljb24taG91c2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XG4gIH1cblxuICAuc2VsZWN0LWVudGVyLXR5cGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMC4yZnIgMC4yZnIgMmZyIDFmci8xZnIgODAlIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gaGVhZGVyIC5cIiBcIi4gZGVzY3JpcHRpb24gLlwiIFwiLiBvcHRpb25zIC5cIiBcImZvb3RlciBmb290ZXIgZm9vdGVyXCI7XG4gIH1cblxuICAuZW50ZXItdHlwZS1oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICB9XG4gIC5lbnRlci10eXBlLWhlYWRlci0taW1nIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5lbnRlci10eXBlLWZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgfVxuXG4gIC5lbnRlci10eXBlLWRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBib3R0b207XG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgICBhbGlnbi1jb250ZW50OiBlbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwZW07XG4gIH1cblxuICAuZW50ZXItdHlwZS1vcHRpb25zIHtcbiAgICBncmlkLWFyZWE6IG9wdGlvbnM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAwLjhmciAwLjhmciAwLjhmci8xZnI7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cblxuICAuZW50ZXItdHlwZS1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAwLjRmciAwLjRmci8yNSUgNzUlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwib3B0aW9uLWltZyBvcHRpb24tdGV4dFwiIFwib3B0aW9uLWJ1dHRvbiBvcHRpb24tYnV0dG9uXCI7XG4gIH1cbiAgLmVudGVyLXR5cGUtb3B0aW9uX19pbWcge1xuICAgIGdyaWQtYXJlYTogb3B0aW9uLWltZztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmVudGVyLXR5cGUtb3B0aW9uX190ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZ3JpZC1hcmVhOiBvcHRpb24tdGV4dDtcbiAgfVxuICAuZW50ZXItdHlwZS1vcHRpb25fX2J1dHRvbiB7XG4gICAgZ3JpZC1hcmVhOiBvcHRpb24tYnV0dG9uO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8xZnI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5lbnRlci10eXBlLW9wdGlvbl9fYnV0dG9uIHNwYW4uaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/community/enter-type/enter-type.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/community/enter-type/enter-type.component.ts ***!
  \**************************************************************/
/*! exports provided: EnterTypeComponent, AccessTypeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterTypeComponent", function() { return EnterTypeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTypeDialog", function() { return AccessTypeDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_definitions_types_application_sub_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/definitions/types/application-sub-type */ "./src/app/shared/definitions/types/application-sub-type.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _enter_type_cas_dialog_cas_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enter-type/cas-dialog/cas-dialog.component */ "./src/app/community/enter-type/cas-dialog/cas-dialog.component.ts");
/* harmony import */ var _app_core_services_endpoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../app/core/services/endpoints */ "./src/app/core/services/endpoints.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");














let EnterTypeComponent = class EnterTypeComponent {
    constructor(formBuilder, uiService, httpService, authService, router, route, dialog) {
        this.formBuilder = formBuilder;
        this.uiService = uiService;
        this.httpService = httpService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.applicationSubTypes = _shared_definitions_types_application_sub_type__WEBPACK_IMPORTED_MODULE_2__["ApplicationSubTypeValues"];
        this.newPath = [];
        this.iconRentApplication = 'url("/assets/icon-rent-application.svg")';
        this.iconBuyApplication = 'url("/assets/icon-buy-application.svg")';
        this.iconGuestApplication = 'url("/assets/icon-guest-application.svg")';
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    ngOnInit() {
        this.uiService.setThemeDefaultValues();
        this.initForm();
        this.listenToThemeValues();
        this.route.params.subscribe((params) => {
            const { code } = params;
            this.code = code;
        });
        this.currentYear = new Date().getFullYear();
        const cookieName = `${_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].api_url}/${_app_core_services_endpoints__WEBPACK_IMPORTED_MODULE_12__["apiEndpoints"].getPropertyInfo}/${this.code}`;
        const propertyInfo = JSON.parse(localStorage.getItem(cookieName));
        this.allowLease = propertyInfo.allowLease;
        this.allowPurchase = propertyInfo.allowPurchase;
        this.allowGuest = propertyInfo.allowGuest;
    }
    listenToThemeValues() {
        this.uiService.smallLogo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$))
            .subscribe((value) => (this.smallLogo = value));
    }
    openDialog() {
        const dialogRef = this.dialog.open(AccessTypeDialog, {
            panelClass: 'fit-dialog',
        });
        let instance = dialogRef.componentInstance;
        instance['dialogTitle'] = this.errorTitle;
        instance['dialogText'] = this.errorMessage;
        dialogRef.afterClosed().subscribe(() => this.clearInfo());
    }
    /**
     * Init the form
     */
    initForm() {
        this.enterCodeForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    /**
     * Get the error for the given control name.
     *
     * @param {string} controlName
     * @returns {string}
     */
    // getError(controlName: string): string {
    //   const { errors } = this.enterCodeForm.controls[controlName];
    //   return this.uiService.getControlError(errors);
    // }
    markControlsASTouched() {
        this.uiService.markControlsAsTouched(this.enterCodeForm);
    }
    openAgeReminderAlert() {
        const dialogRef = this.dialog.open(_enter_type_cas_dialog_cas_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CoApplicantSelectionDialogComponent"], {
            // width: '450px',
            // maxWidth: '75vw',
            // maxHeight: '50vh',
            // backdropClass: 'mat-dialog-full-screen',
            panelClass: 'custom-dialog-container',
            data: { link: this.newPath },
        });
        dialogRef.afterClosed().subscribe((result) => {
        });
    }
    /**
     * Submit the form.
     */
    submit(type) {
        this.httpService
            .getPropertyInfo(this.code, type, false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$))
            .subscribe(() => {
            this.newPath = ['/application/new', this.code, type];
            this.openAgeReminderAlert();
        }, (httpError) => {
            const error = httpError.error;
            /**
             * @todo Add this error codes as constants
             */
            if (error.errorKey === 'invalid.application.type') {
                const applicationType = this.applicationSubTypes.find((appType) => appType.value === type);
                this.errorTitle = 'Option not allowed';
                this.errorMessage = `${applicationType.name} is not permitted through this code. Please contact the community to advise on a different procedure`;
            }
            else if (error.errorKey === 'property.not.active') {
                const applicationType = this.applicationSubTypes.find((appType) => appType.value === type);
                this.errorTitle = 'Property error';
                this.errorMessage =
                    'Property not active on our System. Please contact the community to advise on a different procedure';
            }
            else {
                this.errorTitle = 'Error';
                this.errorMessage = error.title;
            }
            this.openDialog();
        });
    }
    clearInfo() {
        this.uiService.clearCurrentToastr();
    }
    logOut(event) {
        event.preventDefault();
        this.authService.logOut().subscribe(() => {
            this.router.navigate(['/']).catch(console.log);
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
};
EnterTypeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"] },
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
EnterTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-enter-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enter-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/enter-type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enter-type.component.scss */ "./src/app/community/enter-type/enter-type.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"],
        _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
], EnterTypeComponent);

let AccessTypeDialog = class AccessTypeDialog {
    constructor() {
        this.dialogTitle = '';
        this.dialogText = '';
    }
};
AccessTypeDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'access-type-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./access-type.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/enter-type/access-type.dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccessTypeDialog);



/***/ }),

/***/ "./src/app/community/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/community/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/community/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");





let HomeComponent = class HomeComponent {
    constructor(httpService, authService, router) {
        this.httpService = httpService;
        this.authService = authService;
        this.router = router;
        this.applications = [];
        this.roleRealtor = false;
        this.processing = false;
    }
    ngOnInit() {
        const dataUser = this.authService.getDecodedToken();
        this.currentYear = new Date().getFullYear();
        if (dataUser.auth.includes('ROLE_CALL_CENTER_L1')) {
            this.openAppsDashboard();
        }
        if ((dataUser.auth.includes('ROLE_REALTOR'))) {
            this.roleRealtor = true;
        }
        // this.httpService
        // .getApplicationList(true)
        // .subscribe(applicationsResponse => {
        //   if (applicationsResponse) {
        //     this.applications = applicationsResponse.applications;
        //     if (this.applications.length < 1) {
        //       this.router
        //         .navigate(['/community'])
        //         .catch(console.log);
        //     }
        //   }
        // });
    }
    openExternalUrl() {
        window.open('https://support.tenantevaluation.com/support/solutions/articles/65000166337-getting-started-with-your-application', '_blank');
    }
    back() {
        window.history.back();
    }
    openCommunity() {
        this.router
            .navigate(['/community'])
            .catch(console.log);
    }
    openAppsDashboard() {
        this.router
            .navigate(['/application-list'])
            .catch(console.log);
    }
    submit(type) {
        this.processing = true;
        if (type === 'NA') {
            this.router
                .navigate(['/community/enter-code'])
                .catch(console.log);
        }
        else if (type === 'RA') {
            this.router
                .navigate(['/application-list'])
                .catch(console.log);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/community/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/community/user-info/user-info.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/community/user-info/user-info.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-video-content {\n  padding: 0;\n  background-color: #4D445A;\n  height: 100vh;\n}\n\n.retry-container button {\n  width: 20%;\n  margin-top: 4rem;\n}\n\n.retry-container button:last-child {\n  background-color: #009cdc;\n  margin-left: 1rem;\n}\n\n.d-none {\n  display: none;\n}\n\n@media (max-width: 1600px) {\n  .retry-container button {\n    width: 30%;\n  }\n}\n\n@media (max-width: 1060px) {\n  .container-fluid {\n    max-width: 90%;\n  }\n\n  .main-video-content {\n    padding: 1em;\n  }\n\n  .videoWrapper {\n    margin-top: 3em;\n  }\n  .videoWrapper iframe {\n    height: 500px;\n  }\n\n  .footer-elements {\n    min-height: 170px;\n    margin-top: 3em;\n  }\n\n  .community-user-info .blue-text {\n    font-size: 15px;\n  }\n\n  .tenant-bg {\n    width: 60vw;\n    height: 60vh;\n    top: 50px;\n    background-size: 60vw;\n  }\n\n  .retry-container {\n    height: 500px;\n  }\n  .retry-container button {\n    width: 40%;\n  }\n}\n\n@media (max-width: 659px) {\n  .container-fluid {\n    max-width: 100%;\n  }\n\n  .main-video-content {\n    padding: 1em;\n  }\n\n  .videoWrapper {\n    margin-top: 3em;\n  }\n  .videoWrapper iframe {\n    height: 185px;\n  }\n\n  .footer-elements {\n    flex-direction: column;\n    min-height: 170px;\n    margin-top: 3em;\n  }\n\n  .community-user-info .blue-text {\n    font-size: 15px;\n  }\n\n  .tenant-bg {\n    width: 60vw;\n    height: 60vh;\n    top: 50px;\n    background-size: 60vw;\n  }\n\n  .retry-container {\n    height: 185px;\n  }\n  .retry-container button {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC9jb21tdW5pdHkvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbXVuaXR5L3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUdJO0lBQ0UsVUFBQTtFQ0hKO0FBQ0Y7O0FEUUE7RUFDSTtJQUNJLGNBQUE7RUNOTjs7RURRRTtJQUNJLFlBQUE7RUNMTjs7RURPRTtJQUNJLGVBQUE7RUNKTjtFREtNO0lBQ0ksYUFBQTtFQ0hWOztFRE1FO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDSE47O0VES0U7SUFDSSxlQUFBO0VDRk47O0VESUU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxxQkFBQTtFQ0ROOztFREdFO0lBQ0ksYUFBQTtFQ0FOO0VEQ007SUFDRSxVQUFBO0VDQ1I7QUFDRjs7QURJQTtFQUNJO0lBQ0ksZUFBQTtFQ0ZOOztFRElFO0lBQ0ksWUFBQTtFQ0ROOztFREdFO0lBQ0ksZUFBQTtFQ0FOO0VEQ007SUFDSSxhQUFBO0VDQ1Y7O0VERUU7SUFDSSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ0NOOztFRENFO0lBQ0ksZUFBQTtFQ0VOOztFREFFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0lBQ0EscUJBQUE7RUNHTjs7RURERTtJQUNJLGFBQUE7RUNJTjtFREhNO0lBQ0UsaUJBQUE7RUNLUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tbXVuaXR5L3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi12aWRlby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RDQ0NUE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnJldHJ5LWNvbnRhaW5lciB7XG4gICYgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbiAgJiBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWNkYztcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxufVxuXG4uZC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG5cbiAgLnJldHJ5LWNvbnRhaW5lciB7XG4gICAgJiBidXR0b24ge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cbiAgICAubWFpbi12aWRlby1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbiAgICAudmlkZW9XcmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9vdGVyLWVsZW1lbnRzIHtcbiAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICB9XG4gICAgLmNvbW11bml0eS11c2VyLWluZm8gLmJsdWUtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLnRlbmFudC1iZyB7XG4gICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MHZ3O1xuICAgIH1cbiAgICAucmV0cnktY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgJiBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY1OXB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm1haW4tdmlkZW8tY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICB9XG4gICAgLnZpZGVvV3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3Rlci1lbGVtZW50cyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgfVxuICAgIC5jb21tdW5pdHktdXNlci1pbmZvIC5ibHVlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC50ZW5hbnQtYmcge1xuICAgICAgICB3aWR0aDogNjB2dztcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjB2dztcbiAgICB9XG4gICAgLnJldHJ5LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiLm1haW4tdmlkZW8tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDQ0NUE7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5yZXRyeS1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5yZXRyeS1jb250YWluZXIgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Y2RjO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLnJldHJ5LWNvbnRhaW5lciBidXR0b24ge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gIH1cblxuICAubWFpbi12aWRlby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cblxuICAudmlkZW9XcmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gIH1cbiAgLnZpZGVvV3JhcHBlciBpZnJhbWUge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cblxuICAuZm9vdGVyLWVsZW1lbnRzIHtcbiAgICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gIH1cblxuICAuY29tbXVuaXR5LXVzZXItaW5mbyAuYmx1ZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAudGVuYW50LWJnIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjB2dztcbiAgfVxuXG4gIC5yZXRyeS1jb250YWluZXIge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgLnJldHJ5LWNvbnRhaW5lciBidXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTlweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWFpbi12aWRlby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cblxuICAudmlkZW9XcmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gIH1cbiAgLnZpZGVvV3JhcHBlciBpZnJhbWUge1xuICAgIGhlaWdodDogMTg1cHg7XG4gIH1cblxuICAuZm9vdGVyLWVsZW1lbnRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgfVxuXG4gIC5jb21tdW5pdHktdXNlci1pbmZvIC5ibHVlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC50ZW5hbnQtYmcge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB0b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHZ3O1xuICB9XG5cbiAgLnJldHJ5LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxODVweDtcbiAgfVxuICAucmV0cnktY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/community/user-info/user-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/community/user-info/user-info.component.ts ***!
  \************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserInfoComponent = class UserInfoComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const { code } = params;
            this.code = code;
        });
        this.shownext = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() ? true : false;
        this.playVideo = true;
        this.iphonePlayButton = false;
        this.infoUrl = 'https://support.tenantevaluation.com/support/solutions/articles/65000166337-getting-started-with-your-application';
        this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_2__["default"]('videoplayer1');
        this.player.on('ended', () => {
            this.shownext = true;
            this.playVideo = false;
        });
        this.player.on('play', () => {
            this.player.off('ended');
            this.player.on('ended', () => {
                this.shownext = true;
                this.playVideo = false;
            });
        });
        this.player.on('timeupdate', () => {
            this.player.off('ended');
            this.player.on('ended', () => {
                this.shownext = true;
                this.playVideo = false;
            });
        });
        setTimeout(() => {
            this.shownext = true;
        }, 120000);
        if (navigator && navigator.userAgent) {
            if (/iPhone/.test(navigator.userAgent)) {
                this.iphonePlayButton = true;
            }
        }
    }
    ngAfterViewInit() {
        if (navigator && navigator.userAgent) {
            if (/iPhone/.test(navigator.userAgent)) {
                this.retry();
            }
        }
    }
    goToInfoPage() {
        window.open(this.infoUrl, "_blank");
    }
    back() {
        window.history.back();
    }
    retry() {
        this.playVideo = true;
        this.player.play();
    }
    retryIphone() {
        this.iphonePlayButton = false;
        this.retry();
    }
    submit() {
        this.router.navigate(['/community', this.code]).catch(console.log);
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-user-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/user-info/user-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.scss */ "./src/app/community/user-info/user-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], UserInfoComponent);



/***/ })

}]);
//# sourceMappingURL=community-community-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activate-activate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activate/activate/activate.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activate/activate/activate.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content-white begin-enter-code\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-6\">\r\n        <img src=\"/assets/logo-lets-begin.svg\" alt=\"Let's Begin\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main-content begin-community-selection lower-content\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <section class=\"content-box\">\r\n          <article>\r\n            <div class=\"main-icon-holder xs-max\"></div>\r\n            <h1 class=\"txt-hero\">The activation code was not found or has already been used.</h1>\r\n          </article>\r\n\r\n        </section>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/activate/activate-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/activate/activate-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ActivateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateRoutingModule", function() { return ActivateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activate/activate.component */ "./src/app/activate/activate/activate.component.ts");
/* harmony import */ var _activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate.guard */ "./src/app/activate/activate.guard.ts");





const routes = [
    {
        path: '',
        component: _activate_activate_component__WEBPACK_IMPORTED_MODULE_3__["ActivateComponent"],
        canActivate: [_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]]
    }
];
let ActivateRoutingModule = class ActivateRoutingModule {
};
ActivateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]
        ]
    })
], ActivateRoutingModule);



/***/ }),

/***/ "./src/app/activate/activate.guard.ts":
/*!********************************************!*\
  !*** ./src/app/activate/activate.guard.ts ***!
  \********************************************/
/*! exports provided: ActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateGuard", function() { return ActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui.service */ "./src/app/ui/ui.service.ts");







let ActivateGuard = class ActivateGuard {
    constructor(httpService, uiService, router) {
        this.httpService = httpService;
        this.uiService = uiService;
        this.router = router;
    }
    canActivate(next, state) {
        const { activationCode } = next.params;
        return this.httpService
            .activateAccount(activationCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => !response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((httpError) => {
            const error = httpError.error;
            this.uiService
                .showError({
                message: error.title
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(canActivate => {
            if (canActivate) {
                this.uiService
                    .showInfo({
                    title: 'Account Activated',
                    message: 'Please Login with your credentials'
                });
            }
            this.router
                .navigate(['/login'])
                .catch(console.log);
        }));
    }
};
ActivateGuard.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ActivateGuard);



/***/ }),

/***/ "./src/app/activate/activate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/activate/activate.module.ts ***!
  \*********************************************/
/*! exports provided: ActivateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateModule", function() { return ActivateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _activate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activate-routing.module */ "./src/app/activate/activate-routing.module.ts");
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate/activate.component */ "./src/app/activate/activate/activate.component.ts");





let ActivateModule = class ActivateModule {
};
ActivateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _activate_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivateRoutingModule"]
        ],
        declarations: [_activate_activate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateComponent"]]
    })
], ActivateModule);



/***/ }),

/***/ "./src/app/activate/activate/activate.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/activate/activate/activate.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2YXRlL2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/activate/activate/activate.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/activate/activate/activate.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateComponent", function() { return ActivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivateComponent = class ActivateComponent {
    constructor() { }
    ngOnInit() {
    }
};
ActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-activate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activate/activate/activate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activate.component.scss */ "./src/app/activate/activate/activate.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActivateComponent);



/***/ })

}]);
//# sourceMappingURL=activate-activate-module-es2015.js.map
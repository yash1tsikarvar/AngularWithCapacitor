(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete-signature/complete-signature/complete-signature.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complete-signature/complete-signature/complete-signature.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Signature Complete</h1>\r\n");

/***/ }),

/***/ "./src/app/complete-signature/complete-signature-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/complete-signature/complete-signature-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CompleteSignatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteSignatureRoutingModule", function() { return CompleteSignatureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complete-signature/complete-signature.component */ "./src/app/complete-signature/complete-signature/complete-signature.component.ts");
/* harmony import */ var _complete_signature_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete-signature.guard */ "./src/app/complete-signature/complete-signature.guard.ts");





const routes = [{
        path: '',
        component: _complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__["CompleteSignatureComponent"],
        canActivate: [_complete_signature_guard__WEBPACK_IMPORTED_MODULE_4__["CompleteSignatureGuard"]]
    }];
let CompleteSignatureRoutingModule = class CompleteSignatureRoutingModule {
};
CompleteSignatureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_complete_signature_guard__WEBPACK_IMPORTED_MODULE_4__["CompleteSignatureGuard"]],
    })
], CompleteSignatureRoutingModule);



/***/ }),

/***/ "./src/app/complete-signature/complete-signature.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/complete-signature/complete-signature.guard.ts ***!
  \****************************************************************/
/*! exports provided: CompleteSignatureGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteSignatureGuard", function() { return CompleteSignatureGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CompleteSignatureGuard = class CompleteSignatureGuard {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    canActivate(next, state) {
        const { applicationId } = next.params;
        return this.httpService
            .completeSignature(applicationId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.router
                .navigate([`/dashboard/${applicationId}`])
                .catch(console.log);
        }));
    }
};
CompleteSignatureGuard.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompleteSignatureGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CompleteSignatureGuard);



/***/ }),

/***/ "./src/app/complete-signature/complete-signature.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/complete-signature/complete-signature.module.ts ***!
  \*****************************************************************/
/*! exports provided: CompleteSignatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteSignatureModule", function() { return CompleteSignatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _complete_signature_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complete-signature-routing.module */ "./src/app/complete-signature/complete-signature-routing.module.ts");
/* harmony import */ var _complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete-signature/complete-signature.component */ "./src/app/complete-signature/complete-signature/complete-signature.component.ts");





let CompleteSignatureModule = class CompleteSignatureModule {
};
CompleteSignatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _complete_signature_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompleteSignatureRoutingModule"]
        ],
        declarations: [_complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_4__["CompleteSignatureComponent"]]
    })
], CompleteSignatureModule);



/***/ }),

/***/ "./src/app/complete-signature/complete-signature/complete-signature.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/complete-signature/complete-signature/complete-signature.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlLXNpZ25hdHVyZS9jb21wbGV0ZS1zaWduYXR1cmUvY29tcGxldGUtc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/complete-signature/complete-signature/complete-signature.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/complete-signature/complete-signature/complete-signature.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CompleteSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteSignatureComponent", function() { return CompleteSignatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompleteSignatureComponent = class CompleteSignatureComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompleteSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-complete-signature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complete-signature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete-signature/complete-signature/complete-signature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complete-signature.component.scss */ "./src/app/complete-signature/complete-signature/complete-signature.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CompleteSignatureComponent);



/***/ }),

/***/ "./src/app/shared/definitions/types/application-sub-type.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/definitions/types/application-sub-type.ts ***!
  \******************************************************************/
/*! exports provided: ApplicationSubTypeValues, ApplicationSubTypeAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSubTypeValues", function() { return ApplicationSubTypeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSubTypeAccess", function() { return ApplicationSubTypeAccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ApplicationSubTypeValues = [
    {
        name: "Rent/Lease",
        value: "T",
    },
    {
        name: "Purchase",
        value: "O",
    },
    {
        name: "Guest/Additional Resident",
        value: "G",
    },
];
const ApplicationSubTypeAccess = [
    {
        name: "leasing/renting",
        value: "T",
    },
    {
        name: "buying",
        value: "O",
    },
    {
        name: "moving into",
        value: "G",
    },
];


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
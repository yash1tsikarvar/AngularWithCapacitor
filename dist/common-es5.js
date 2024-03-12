function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/complete-signature/complete-signature/complete-signature.component.html": function node_modulesRawLoaderDistCjsJsSrcAppCompleteSignatureCompleteSignatureCompleteSignatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Signature Complete</h1>\r\n";
    /***/
  },

  /***/
  "./src/app/complete-signature/complete-signature-routing.module.ts": function srcAppCompleteSignatureCompleteSignatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteSignatureRoutingModule", function () {
      return CompleteSignatureRoutingModule;
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


    var _complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./complete-signature/complete-signature.component */
    "./src/app/complete-signature/complete-signature/complete-signature.component.ts");
    /* harmony import */


    var _complete_signature_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./complete-signature.guard */
    "./src/app/complete-signature/complete-signature.guard.ts");

    var routes = [{
      path: '',
      component: _complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__["CompleteSignatureComponent"],
      canActivate: [_complete_signature_guard__WEBPACK_IMPORTED_MODULE_4__["CompleteSignatureGuard"]]
    }];

    var CompleteSignatureRoutingModule = function CompleteSignatureRoutingModule() {
      _classCallCheck(this, CompleteSignatureRoutingModule);
    };

    CompleteSignatureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_complete_signature_guard__WEBPACK_IMPORTED_MODULE_4__["CompleteSignatureGuard"]]
    })], CompleteSignatureRoutingModule);
    /***/
  },

  /***/
  "./src/app/complete-signature/complete-signature.guard.ts": function srcAppCompleteSignatureCompleteSignatureGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteSignatureGuard", function () {
      return CompleteSignatureGuard;
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


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CompleteSignatureGuard = /*#__PURE__*/function () {
      function CompleteSignatureGuard(httpService, router) {
        _classCallCheck(this, CompleteSignatureGuard);

        this.httpService = httpService;
        this.router = router;
      }

      _createClass(CompleteSignatureGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          var applicationId = next.params.applicationId;
          return this.httpService.completeSignature(applicationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.router.navigate(["/dashboard/".concat(applicationId)])["catch"](console.log);
          }));
        }
      }]);

      return CompleteSignatureGuard;
    }();

    CompleteSignatureGuard.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CompleteSignatureGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CompleteSignatureGuard);
    /***/
  },

  /***/
  "./src/app/complete-signature/complete-signature.module.ts": function srcAppCompleteSignatureCompleteSignatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteSignatureModule", function () {
      return CompleteSignatureModule;
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


    var _complete_signature_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./complete-signature-routing.module */
    "./src/app/complete-signature/complete-signature-routing.module.ts");
    /* harmony import */


    var _complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./complete-signature/complete-signature.component */
    "./src/app/complete-signature/complete-signature/complete-signature.component.ts");

    var CompleteSignatureModule = function CompleteSignatureModule() {
      _classCallCheck(this, CompleteSignatureModule);
    };

    CompleteSignatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _complete_signature_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompleteSignatureRoutingModule"]],
      declarations: [_complete_signature_complete_signature_component__WEBPACK_IMPORTED_MODULE_4__["CompleteSignatureComponent"]]
    })], CompleteSignatureModule);
    /***/
  },

  /***/
  "./src/app/complete-signature/complete-signature/complete-signature.component.scss": function srcAppCompleteSignatureCompleteSignatureCompleteSignatureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlLXNpZ25hdHVyZS9jb21wbGV0ZS1zaWduYXR1cmUvY29tcGxldGUtc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/complete-signature/complete-signature/complete-signature.component.ts": function srcAppCompleteSignatureCompleteSignatureCompleteSignatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteSignatureComponent", function () {
      return CompleteSignatureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompleteSignatureComponent = /*#__PURE__*/function () {
      function CompleteSignatureComponent() {
        _classCallCheck(this, CompleteSignatureComponent);
      }

      _createClass(CompleteSignatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompleteSignatureComponent;
    }();

    CompleteSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-complete-signature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./complete-signature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/complete-signature/complete-signature/complete-signature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./complete-signature.component.scss */
      "./src/app/complete-signature/complete-signature/complete-signature.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompleteSignatureComponent);
    /***/
  },

  /***/
  "./src/app/shared/definitions/types/application-sub-type.ts": function srcAppSharedDefinitionsTypesApplicationSubTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationSubTypeValues", function () {
      return ApplicationSubTypeValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationSubTypeAccess", function () {
      return ApplicationSubTypeAccess;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ApplicationSubTypeValues = [{
      name: "Rent/Lease",
      value: "T"
    }, {
      name: "Purchase",
      value: "O"
    }, {
      name: "Guest/Additional Resident",
      value: "G"
    }];
    var ApplicationSubTypeAccess = [{
      name: "leasing/renting",
      value: "T"
    }, {
      name: "buying",
      value: "O"
    }, {
      name: "moving into",
      value: "G"
    }];
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map
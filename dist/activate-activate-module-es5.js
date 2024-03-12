function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activate-activate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/activate/activate/activate.component.html": function node_modulesRawLoaderDistCjsJsSrcAppActivateActivateActivateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<div class=\"main-content-white begin-enter-code\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-6\">\r\n        <img src=\"/assets/logo-lets-begin.svg\" alt=\"Let's Begin\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main-content begin-community-selection lower-content\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <section class=\"content-box\">\r\n          <article>\r\n            <div class=\"main-icon-holder xs-max\"></div>\r\n            <h1 class=\"txt-hero\">The activation code was not found or has already been used.</h1>\r\n          </article>\r\n\r\n        </section>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
=======
    __webpack_exports__["default"] = "<div class=\"main-content-white begin-enter-code\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6\">\n        <img src=\"/assets/logo-lets-begin.svg\" alt=\"Let's Begin\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"main-content begin-community-selection lower-content\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <section class=\"content-box\">\n          <article>\n            <div class=\"main-icon-holder xs-max\"></div>\n            <h1 class=\"txt-hero\">The activation code was not found or has already been used.</h1>\n          </article>\n\n        </section>\n\n      </div>\n    </div>\n  </div>\n</div>\n";
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5
    /***/
  },

  /***/
  "./src/app/activate/activate-routing.module.ts": function srcAppActivateActivateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateRoutingModule", function () {
      return ActivateRoutingModule;
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


    var _activate_activate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activate/activate.component */
    "./src/app/activate/activate/activate.component.ts");
    /* harmony import */


    var _activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./activate.guard */
    "./src/app/activate/activate.guard.ts");

    var routes = [{
      path: '',
      component: _activate_activate_component__WEBPACK_IMPORTED_MODULE_3__["ActivateComponent"],
      canActivate: [_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]]
    }];

    var ActivateRoutingModule = function ActivateRoutingModule() {
      _classCallCheck(this, ActivateRoutingModule);
    };

    ActivateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]]
    })], ActivateRoutingModule);
    /***/
  },

  /***/
  "./src/app/activate/activate.guard.ts": function srcAppActivateActivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateGuard", function () {
      return ActivateGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ui/ui.service */
    "./src/app/ui/ui.service.ts");

    var ActivateGuard = /*#__PURE__*/function () {
      function ActivateGuard(httpService, uiService, router) {
        _classCallCheck(this, ActivateGuard);

        this.httpService = httpService;
        this.uiService = uiService;
        this.router = router;
      }

      _createClass(ActivateGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          var activationCode = next.params.activationCode;
          return this.httpService.activateAccount(activationCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            return !response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (httpError) {
            var error = httpError.error;

            _this.uiService.showError({
              message: error.title
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (canActivate) {
            if (canActivate) {
              _this.uiService.showInfo({
                title: 'Account Activated',
                message: 'Please Login with your credentials'
              });
            }

            _this.router.navigate(['/login'])["catch"](console.log);
          }));
        }
      }]);

      return ActivateGuard;
    }();

    ActivateGuard.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ActivateGuard);
    /***/
  },

  /***/
  "./src/app/activate/activate.module.ts": function srcAppActivateActivateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateModule", function () {
      return ActivateModule;
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


    var _activate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activate-routing.module */
    "./src/app/activate/activate-routing.module.ts");
    /* harmony import */


    var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./activate/activate.component */
    "./src/app/activate/activate/activate.component.ts");

    var ActivateModule = function ActivateModule() {
      _classCallCheck(this, ActivateModule);
    };

    ActivateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _activate_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivateRoutingModule"]],
      declarations: [_activate_activate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateComponent"]]
    })], ActivateModule);
    /***/
  },

  /***/
  "./src/app/activate/activate/activate.component.scss": function srcAppActivateActivateActivateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2YXRlL2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/activate/activate/activate.component.ts": function srcAppActivateActivateActivateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateComponent", function () {
      return ActivateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ActivateComponent = /*#__PURE__*/function () {
      function ActivateComponent() {
        _classCallCheck(this, ActivateComponent);
      }

      _createClass(ActivateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActivateComponent;
    }();

    ActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-activate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./activate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/activate/activate/activate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./activate.component.scss */
      "./src/app/activate/activate/activate.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ActivateComponent);
    /***/
  }
}]);
//# sourceMappingURL=activate-activate-module-es5.js.map
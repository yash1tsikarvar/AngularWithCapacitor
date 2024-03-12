function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-complete-signature-owner-complete-signature-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.html": function node_modulesRawLoaderDistCjsJsSrcAppOwnerCompleteSignatureOwnerCompleteSignatureOwnerCompleteSignatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-white begin-enter-code\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-6\">\r\n        <img src=\"/assets/logo-lets-begin.svg\" alt=\"Let's Begin\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main-content begin-community-selection lower-content\">\r\n  <div class=\"container-fluid p-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <section class=\"content-box\">\r\n          <article>\r\n            <div class=\"main-icon-holder xs-max\"></div>\r\n            <h1 class=\"txt-hero\">Thank you we have received your Signature</h1>\r\n          </article>\r\n\r\n        </section>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/owner-complete-signature/owner-complete-signature-routing.module.ts": function srcAppOwnerCompleteSignatureOwnerCompleteSignatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerCompleteSignatureRoutingModule", function () {
      return OwnerCompleteSignatureRoutingModule;
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


    var _owner_complete_signature_owner_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./owner-complete-signature/owner-complete-signature.component */
    "./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.ts");

    var routes = [{
      path: '',
      component: _owner_complete_signature_owner_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__["OwnerCompleteSignatureComponent"]
    }];

    var OwnerCompleteSignatureRoutingModule = function OwnerCompleteSignatureRoutingModule() {
      _classCallCheck(this, OwnerCompleteSignatureRoutingModule);
    };

    OwnerCompleteSignatureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OwnerCompleteSignatureRoutingModule);
    /***/
  },

  /***/
  "./src/app/owner-complete-signature/owner-complete-signature.module.ts": function srcAppOwnerCompleteSignatureOwnerCompleteSignatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerCompleteSignatureModule", function () {
      return OwnerCompleteSignatureModule;
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


    var _owner_complete_signature_owner_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./owner-complete-signature/owner-complete-signature.component */
    "./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.ts");
    /* harmony import */


    var _owner_complete_signature_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./owner-complete-signature-routing.module */
    "./src/app/owner-complete-signature/owner-complete-signature-routing.module.ts");

    var OwnerCompleteSignatureModule = function OwnerCompleteSignatureModule() {
      _classCallCheck(this, OwnerCompleteSignatureModule);
    };

    OwnerCompleteSignatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _owner_complete_signature_routing_module__WEBPACK_IMPORTED_MODULE_4__["OwnerCompleteSignatureRoutingModule"]],
      declarations: [_owner_complete_signature_owner_complete_signature_component__WEBPACK_IMPORTED_MODULE_3__["OwnerCompleteSignatureComponent"]]
    })], OwnerCompleteSignatureModule);
    /***/
  },

  /***/
  "./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.scss": function srcAppOwnerCompleteSignatureOwnerCompleteSignatureOwnerCompleteSignatureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVyLWNvbXBsZXRlLXNpZ25hdHVyZS9vd25lci1jb21wbGV0ZS1zaWduYXR1cmUvb3duZXItY29tcGxldGUtc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.ts": function srcAppOwnerCompleteSignatureOwnerCompleteSignatureOwnerCompleteSignatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerCompleteSignatureComponent", function () {
      return OwnerCompleteSignatureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OwnerCompleteSignatureComponent = /*#__PURE__*/function () {
      function OwnerCompleteSignatureComponent() {
        _classCallCheck(this, OwnerCompleteSignatureComponent);
      }

      _createClass(OwnerCompleteSignatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OwnerCompleteSignatureComponent;
    }();

    OwnerCompleteSignatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-owner-complete-signature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./owner-complete-signature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./owner-complete-signature.component.scss */
      "./src/app/owner-complete-signature/owner-complete-signature/owner-complete-signature.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OwnerCompleteSignatureComponent);
    /***/
  }
}]);
//# sourceMappingURL=owner-complete-signature-owner-complete-signature-module-es5.js.map
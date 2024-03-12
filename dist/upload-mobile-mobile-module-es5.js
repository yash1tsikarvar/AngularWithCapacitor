function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-mobile-mobile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/mobile/mobile-root.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadMobileMobileMobileRootComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"upload-id-mobile\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadMobileUploadMessageWithIconMessageWithIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"message-whit-icon\">\r\n  <div class=\"gif-with-icon\">\r\n    <img [src]=\"img\" [alt]=\"altText\"\r\n         class=\"img-responsive img-circle gifimg\"/>\r\n  </div>\r\n\r\n  <div class=\"text\">{{text}}</div>\r\n  <div>{{subError}}</div>\r\n  <div class=\"small-text\">{{ smallText }}\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/upload-mobile.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadMobileUploadUploadMobileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"finish-upload\" *ngIf=\"uploadedFinish\">\r\n  <tev-awesome-message (closePopup)=\"closeUploadFinish()\" [message]=\"textFinal\" [additionalText]=\"additionalText\"\r\n                       [buttonText]=\"''\" [autoCloseTime]=\"105\"\r\n                       [auto_closeable]=\"false\"></tev-awesome-message>\r\n</div>\r\n<div *ngIf=\"!uploadedFinish\" class=\"mobile\" [class.upload-white]=\"showUploadFile()\">\r\n\r\n  <div class=\"row\">\r\n    <h1>\r\n      <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\r\n    </h1>\r\n  </div><!-- ./row -->\r\n\r\n  <div *ngIf=\"showUploadFile()\">\r\n\r\n    <div class=\"row\">\r\n      <h2>Take a picture of the <span class=\"highlighted-blue\" [innerHTML]=\"typeText\"></span> of your {{lastTypeText}}</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <p> Make sure your document is readable and well lit. No photocopies.</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <img class=\"img-icon\" [src]=\"getImage()\" alt=\"upload image from mobile\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"error && !uploading\">\r\n    <tev-errors-id [error]=\"error\" [errorCode]=\"errorCode\" [subError]=\"subError\" [smallText]=\"textFinal\"></tev-errors-id>\r\n  </div>\r\n\r\n  <div *ngIf=\"showButtonUploadOrRetry()\" class=\"row\">\r\n    <label class=\"btn btn-blue\">\r\n      <input type=\"file\" capture\r\n             accept=\"image/*\" #inputFile (change)=\"onFileChanged($event)\"/>\r\n      {{ error ? 'Retry' : 'Open Camera'}}\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"uploading\">\r\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3\">\r\n      <tev-uploading-message init=\"60\"></tev-uploading-message>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"notTask\">\r\n    <tev-message-with-icon [img]=\"'assets/icon-green-check.svg'\" [altText]=\"'green check'\"\r\n                           [text]=\"'You don’t need to upload your document again!'\"\r\n                           [smallText]=\"'Your document has already been submitted. Now you can close and continue on your computer.'\"\r\n    ></tev-message-with-icon>\r\n  </div>\r\n\r\n</div><!-- ./intro -->\r\n<tev-expired-dialog *ngIf=\"requestExpired\" [errorBackRetries]=\"errorRetriesBack\"\r\n                    (responseExpired)=\"forceUploadExpiredId($event)\"></tev-expired-dialog>\r\n";
    /***/
  },

  /***/
  "./src/app/upload-mobile/mobile-routing.module.ts": function srcAppUploadMobileMobileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileRoutingModule", function () {
      return MobileRoutingModule;
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


    var _upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload/upload-mobile.component */
    "./src/app/upload-mobile/upload/upload-mobile.component.ts");
    /* harmony import */


    var _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mobile/mobile-root.component */
    "./src/app/upload-mobile/mobile/mobile-root.component.ts");

    var routes = [{
      path: '',
      component: _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__["MobileRootComponent"],
      children: [{
        path: 'upload/:token',
        component: _upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__["UploadMobileComponent"]
      }]
    }];

    var MobileRoutingModule = function MobileRoutingModule() {
      _classCallCheck(this, MobileRoutingModule);
    };

    MobileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MobileRoutingModule);
    /***/
  },

  /***/
  "./src/app/upload-mobile/mobile.module.ts": function srcAppUploadMobileMobileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileModule", function () {
      return MobileModule;
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


    var _upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload/upload-mobile.component */
    "./src/app/upload-mobile/upload/upload-mobile.component.ts");
    /* harmony import */


    var _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mobile/mobile-root.component */
    "./src/app/upload-mobile/mobile/mobile-root.component.ts");
    /* harmony import */


    var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mobile-routing.module */
    "./src/app/upload-mobile/mobile-routing.module.ts");
    /* harmony import */


    var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./upload/message-with-icon/message-with-icon.component */
    "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.ts");

    var MobileModule = function MobileModule() {
      _classCallCheck(this, MobileModule);
    };

    MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_upload_upload_mobile_component__WEBPACK_IMPORTED_MODULE_3__["UploadMobileComponent"], _mobile_mobile_root_component__WEBPACK_IMPORTED_MODULE_4__["MobileRootComponent"], _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileRoutingModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"]],
      exports: [_upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]]
    })], MobileModule);
    /***/
  },

  /***/
  "./src/app/upload-mobile/mobile/mobile-root.component.scss": function srcAppUploadMobileMobileMobileRootComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  background-color: #4D445A;\n  min-height: 100vh;\n  height: auto;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLW1vYmlsZS9tb2JpbGUvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2FkLW1vYmlsZVxcbW9iaWxlXFxtb2JpbGUtcm9vdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2FkLW1vYmlsZS9tb2JpbGUvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXBsb2FkLW1vYmlsZS9tb2JpbGUvbW9iaWxlLXJvb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkNDVztFREFYLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUVBRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1tb2JpbGUvbW9iaWxlL21vYmlsZS1yb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zYXNzL3ZhcmlhYmxlc1wiO1xyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRuZXctcHVycGxlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcclxuJHB1cnBsZTogIzM4MzM0MjtcclxuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcclxuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XHJcbiRyZWQ6ICNjZjQ3NDE7XHJcbiRsZy1yZWQ6ICNmY2Q3ZDc7XHJcbiRncmVlbjogIzllYzU0YztcclxuJHNub3c6ICNmNWY2ZjY7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGdyYXk6ICNiYmJjYmU7XHJcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xyXG4kZGFyay1ncmF5OiAjNzc3NDdlO1xyXG4kaWNlOiAjY2ZkMGQyO1xyXG4kYmctZ3JheTogI2Y1ZjVmNTtcclxuJGJnLWdyYXkyOiAjRTZFNkU3O1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGxnLWJsdWU6IzAwOUNEQztcclxuJGxnLWdyYXk6I0EzQUFCMTtcclxuJGZvcm0tZ3JheTojOEU4Nzk4O1xyXG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xyXG4iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENDQ1QTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/upload-mobile/mobile/mobile-root.component.ts": function srcAppUploadMobileMobileMobileRootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileRootComponent", function () {
      return MobileRootComponent;
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


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MobileRootComponent = /*#__PURE__*/function () {
      function MobileRootComponent(uiService) {
        _classCallCheck(this, MobileRootComponent);

        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.website = location.origin;
      }

      _createClass(MobileRootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "listenToThemeValues",
        value: function listenToThemeValues() {
          var _this = this;

          this.uiService.smallLogo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (value) {
            _this.smallLogo = value ? value : '/assets/tenant-ev-logo-service.svg';
          });
        }
      }]);

      return MobileRootComponent;
    }();

    MobileRootComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }];
    };

    MobileRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-mobile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mobile-root.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/mobile/mobile-root.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mobile-root.component.scss */
      "./src/app/upload-mobile/mobile/mobile-root.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])], MobileRootComponent);
    /***/
  },

  /***/
  "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.scss": function srcAppUploadMobileUploadMessageWithIconMessageWithIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-whit-icon .gifimg {\n  display: block;\n  border-radius: 50%;\n  margin: 10% auto 10%;\n  width: 25%;\n}\n.message-whit-icon .text {\n  font-size: 24px;\n  text-align: center;\n  font-weight: bold;\n  padding: 5% 20%;\n}\n.message-whit-icon .small-text {\n  font-size: 14px;\n  text-align: center;\n  padding: 5% 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLW1vYmlsZS91cGxvYWQvbWVzc2FnZS13aXRoLWljb24vQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2FkLW1vYmlsZVxcdXBsb2FkXFxtZXNzYWdlLXdpdGgtaWNvblxcbWVzc2FnZS13aXRoLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZC1tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC9tZXNzYWdlLXdpdGgtaWNvbi9tZXNzYWdlLXdpdGgtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXdoaXQtaWNvbiB7XHJcbiAgLmdpZmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogNSUgMjAlO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSUgMTUlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLm1lc3NhZ2Utd2hpdC1pY29uIC5naWZpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tZXNzYWdlLXdoaXQtaWNvbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNSUgMjAlO1xufVxuLm1lc3NhZ2Utd2hpdC1pY29uIC5zbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDE1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.ts": function srcAppUploadMobileUploadMessageWithIconMessageWithIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageWithIconComponent", function () {
      return MessageWithIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MessageWithIconComponent = /*#__PURE__*/function () {
      function MessageWithIconComponent() {
        _classCallCheck(this, MessageWithIconComponent);
      }

      _createClass(MessageWithIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessageWithIconComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MessageWithIconComponent.prototype, "img", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MessageWithIconComponent.prototype, "altText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MessageWithIconComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MessageWithIconComponent.prototype, "subError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MessageWithIconComponent.prototype, "smallText", void 0);
    MessageWithIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-message-with-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-with-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-with-icon.component.scss */
      "./src/app/upload-mobile/upload/message-with-icon/message-with-icon.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MessageWithIconComponent);
    /***/
  },

  /***/
  "./src/app/upload-mobile/upload/upload-mobile.component.scss": function srcAppUploadMobileUploadUploadMobileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".awesome-item {\n  width: 100%;\n  top: 5% !important;\n  left: 0;\n}\n\n.small-text {\n  font-size: 14px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-white {\n  background-color: white;\n  color: black !important;\n}\n\ntev-uploading-message .uploading {\n  padding: 0px !important;\n}\n\n.mobile {\n  padding: 10%;\n  color: white;\n}\n\n.mobile h1 {\n  margin-bottom: 10px;\n}\n\n.mobile h1 img {\n  width: 15%;\n  float: left;\n}\n\n.mobile h2 {\n  float: left;\n  text-align: left;\n  padding-bottom: 10%;\n}\n\n.mobile .img-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%;\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.mobile .highlighted-blue {\n  color: #2196f3;\n  font-weight: bold;\n}\n\n.mobile .btn-blue {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 80px;\n}\n\n.mobile input[type=file] {\n  display: none;\n}\n\n.mobile mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLW1vYmlsZS91cGxvYWQvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2FkLW1vYmlsZVxcdXBsb2FkXFx1cGxvYWQtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC91cGxvYWQtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0csV0FBQTtBQ0RIOztBRElBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREtFO0VBQ0UsdUJBQUE7QUNGSjs7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSEY7O0FET0U7RUFDRSxtQkFBQTtBQ0xKOztBRE9JO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNMTjs7QURTRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXRTtFQUNFLGNFM0NHO0VGNENILGlCQUFBO0FDVEo7O0FEWUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVko7O0FEYUU7RUFDRSxhQUFBO0FDWEo7O0FEY0U7RUFDRSxXQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtbW9iaWxlL3VwbG9hZC91cGxvYWQtbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uYXdlc29tZS1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDUlICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNtYWxsLXRleHR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVwbG9hZC13aGl0ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxudGV2LXVwbG9hZGluZy1tZXNzYWdle1xyXG4gIC51cGxvYWRpbmd7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2JpbGUge1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hsaWdodGVkLWJsdWUge1xyXG4gICAgY29sb3I6ICRibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLWJsdWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuYXdlc29tZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbn1cblxuLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXBsb2FkLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG50ZXYtdXBsb2FkaW5nLW1lc3NhZ2UgLnVwbG9hZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9iaWxlIHtcbiAgcGFkZGluZzogMTAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW9iaWxlIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tb2JpbGUgaDEgaW1nIHtcbiAgd2lkdGg6IDE1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubW9iaWxlIGgyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG4ubW9iaWxlIC5pbWctaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG4ubW9iaWxlIC5oaWdobGlnaHRlZC1ibHVlIHtcbiAgY29sb3I6ICMyMTk2ZjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vYmlsZSAuYnRuLWJsdWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi5tb2JpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9iaWxlIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUFJTiBDT0xPUlNcclxuJHB1cnBsZTogIzM4MzM0MjtcclxuJGxpZ2h0LXB1cnBsZTogIzNmM2M0YztcclxuJG5ldy1wdXJwbGU6ICM0RDQ0NUE7XHJcbiRyZWQ6ICNjZjQ3NDE7XHJcbiRsZy1yZWQ6ICNmY2Q3ZDc7XHJcbiRncmVlbjogIzllYzU0YztcclxuJHNub3c6ICNmNWY2ZjY7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGdyYXk6ICNiYmJjYmU7XHJcbiRsaWdodC1ncmF5OiAjRURFRUVGO1xyXG4kZGFyay1ncmF5OiAjNzc3NDdlO1xyXG4kaWNlOiAjY2ZkMGQyO1xyXG4kYmctZ3JheTogI2Y1ZjVmNTtcclxuJGJnLWdyYXkyOiAjRTZFNkU3O1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGxnLWJsdWU6IzAwOUNEQztcclxuJGxnLWdyYXk6I0EzQUFCMTtcclxuJGZvcm0tZ3JheTojOEU4Nzk4O1xyXG4kbWFpbi1iYWNrZ3JvdW5kOiAjZjFmMmYyO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/upload-mobile/upload/upload-mobile.component.ts": function srcAppUploadMobileUploadUploadMobileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadMobileComponent", function () {
      return UploadMobileComponent;
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


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/utils/HTTPStatusCode */
    "./src/app/shared/utils/HTTPStatusCode.ts");
    /* harmony import */


    var heic2any__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! heic2any */
    "./node_modules/heic2any/dist/heic2any.js");
    /* harmony import */


    var heic2any__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_8__);

    var UploadMobileComponent = /*#__PURE__*/function () {
      function UploadMobileComponent(http, ui, activeRoute) {
        _classCallCheck(this, UploadMobileComponent);

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

        this.blobToFile = function (theBlob, fileName) {
          var b = theBlob;
          b.lastModified = new Date();
          b.name = fileName;
          return theBlob;
        };

        this.listenToUrlParams();
      }

      _createClass(UploadMobileComponent, [{
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this2 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this2.token = params.token;

            _this2.http.checkTokenUploadV2(params.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              _this2.uploadError(error, '');

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            })).subscribe(function (res) {
              _this2.data = res;

              if (!_this2.data && !_this2.data.idDocumentType) {
                _this2.documentType = 'DRIVER_LICENSE';
              } else {
                _this2.documentType = _this2.data.idDocumentType;
              }

              _this2.changeType(_this2.documentType);
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.errorRetries = 0;
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var _this3 = this;

          this.error = null;
          this.subError = '';
          this.uploading = true;

          if (event.target.files[0]) {
            if (event.target.files[0].size > this.tenMB) {
              this.showErrors('Your document scanning was unsuccessful as the system could not extract the information from it. ' + 'The system detected that the image was in a format that is larger than allowed. ' + 'Please reduce the file before uploading it. ', 'ER', false, 130);
              return;
            } else if (event.target.files[0].type && event.target.files[0].type !== '' && !this.mimetypesAccept().includes(event.target.files[0].type)) {
              this.showErrors('Your document scanning was unsuccessful as the system could not extract the information from it. ' + 'The system detected that the image was in a format that is not compatible with our system (PNG, JPG, OR PDF). ' + 'Please upload your document in any of the preferred listed formats. ', 'ER', false, 102);
              return;
            }
          }

          var file = this.selectedFile = event.target.files[0];

          if (file.type.endsWith('pdf')) {
            this.selectedFile = file;
            this.onUpload();
          } else {
            var blob = file;
            heic2any__WEBPACK_IMPORTED_MODULE_8___default()({
              blob: blob,
              toType: 'image/jpeg',
              quality: 0.8
            }).then(function (jpgBlob) {
              _this3.selectedFile = _this3.blobToFile(jpgBlob, file.name);

              _this3.onUpload();

              return Promise.resolve(true);
            })["catch"](function (err) {
              _this3.selectedFile = file;

              _this3.onUpload();

              return Promise.resolve(true);
            });
          }
        }
      }, {
        key: "readFileData",
        value: function readFileData(file) {
          return new Promise(function (resolve, reject) {
            var fileReader = new FileReader();

            fileReader.onload = function () {
              resolve(fileReader.result);
            };

            fileReader.onerror = function () {
              reject(fileReader.error);
            };

            fileReader.readAsDataURL(file);
          });
        }
      }, {
        key: "onUpload",
        value: function onUpload() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var fileData, tenantFile;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.textFinal = null;
                    _context.next = 3;
                    return this.readFileData(this.selectedFile);

                  case 3:
                    fileData = _context.sent;

                    if (!this.forceUpload) {
                      this.forceUpload = this.errorRetries >= 4;
                    }

                    tenantFile = {
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
                    this.http.uploadDocumentFromMobileV2(tenantFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                      _this4.unexpectedError(error, tenantFile.filename);

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(59000)).subscribe(function (event) {
                      if (event.error) {
                        _this4.unexpectedError(event.error, tenantFile.filename);

                        return;
                      }

                      if (event) {
                        if (event.errors) {
                          if (event.errors === 'VENDOR_CONNECTION_EXCEPTION' || event.errors === 'TENANT_UNEXPECTED_ERROR') {
                            _this4.errorRetries = 3;
                          }

                          _this4.errorRetries++;

                          _this4.changeType(event.side);

                          _this4.showErrors(event.errorString, event.status, _this4.needShowRetries(event.errors), event.errorCode);

                          return;
                        }

                        if (event.status) {
                          var status = event.status;

                          if (status === 'NB') {
                            _this4.documentType = 'DRIVER_LICENSE_BACK';
                            _this4.uploading = false;

                            _this4.changeType(_this4.documentType);
                          } else if (status === 'NFNT') {
                            _this4.documentType = 'DRIVER_LICENSE';
                            _this4.uploading = false;

                            _this4.changeType(_this4.documentType);
                          } else if (status === 'NR') {
                            _this4.finishUpload(status, undefined);
                          } else if (status === 'OK') {
                            _this4.finishUpload(status, undefined);
                          }
                        }
                      }
                    }, function (error) {
                      _this4.errorRetries++;
                      _this4.uploading = false;
                      _this4.error = 'We are not able to read the document. Please try again!';
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "needShowRetries",
        value: function needShowRetries(errors) {
          switch (errors) {
            case 'GREEN_CARD_DETECTED':
            case 'ERROR_PROCESS_PDF':
              return false;

            default:
              return true;
          }
        }
      }, {
        key: "showErrors",
        value: function showErrors(reason, status) {
          var showRetries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var errorCode = arguments.length > 3 ? arguments[3] : undefined;

          if (status === 'NR') {
            this.finishUpload(status, undefined);
            return;
          }

          if (showRetries) {
            reason += '<br/><br/>';

            if (5 - this.errorRetries > 1) {
              reason += 'You have (' + (5 - this.errorRetries) + ') TRIES left before manual review';
            }

            if (5 - this.errorRetries <= 1) {
              reason += 'You have (' + (5 - this.errorRetries) + ') TRY left before manual review';
            }
          }

          this.error = reason;
          this.errorCode = errorCode;
          this.uploading = false;
        }
      }, {
        key: "unexpectedError",
        value: function unexpectedError(error, fileName) {
          var err = 'Unexpected error has occurred';
          this.finishUpload('NR_ER', err);
        }
      }, {
        key: "finishUpload",
        value: function finishUpload(status, error) {
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
      }, {
        key: "mimetypesAccept",
        value: function mimetypesAccept() {
          return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
        }
      }, {
        key: "uploadError",
        value: function uploadError(error, filename) {
          var _this5 = this;

          this.forceUpload = false;

          if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__["default"].REQUEST_TIMEOUT) {
            this.error = 'We are not able to read the document. Please try again!';
            this.forceUpload = this.errorRetries > 4;
          } else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__["default"].UNPROCESSABLE_ENTITY) {
            this.error = error.error.detail;
            this.forceUpload = true;

            if (this.error.includes('The session')) {
              this.textFinal = 'Please go back to the computer and generate a new QR ' + 'code by refreshing the page. Scan the code and try again.';
              this.endProcess = true;
              this.forceUpload = false;
            } else if (this.error.includes('expiration date') || this.error.includes('has expired') || this.error.includes('Non-US Driver’s License detected')) {
              if (this.type === 'FRONT') {
                var expRetry = 5 - this.errorRetries;

                if (expRetry === 1) {
                  this.checkExpired = false;
                  this.textFinal = 'We will upload and review this ID manually, if ID is expired the ' + 'document may be rejected and a new non-expired ID will be requested.';
                }

                this.subError = expRetry + ' tries left (then will upload document)';
                this.forceUpload = false;
              } else {
                this.showButtonUpload = false;
                var expRetryBack = 5 - this.errorRetriesBack;

                if (expRetryBack === 0) {
                  this.forceUpload = true;
                  this.http.confirmExpiredMobile(this.token).subscribe(function () {
                    _this5.uploadNeedReview();
                  });
                } else {
                  this.requestExpired = true;
                  this.errorRetriesBack++;
                  this.forceUpload = false;
                }

                this.errorRetries++;
                this.uploading = false;
                return;
              }
            } else if (this.error === 'invalid.task.id') {
              this.notTask = true;
              this.error = '';
              this.forceUpload = false;
              return;
            }
          } else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_7__["default"].NOT_ACCEPTABLE) {
            this.error = error.error.detail;
            this.forceUpload = this.errorRetries > 1;
          } else {
            this.ui.showError({
              message: "There was a problem uploading the file ".concat(filename)
            });
          }

          this.errorRetries++;
          this.uploading = false;
        }
      }, {
        key: "uploadSuccess",
        value: function uploadSuccess() {
          this.ui.showSuccess({
            message: "Documents Uploaded"
          });
          this.selectedFile.progress = 100;
          this.textFinal = '';
          this.additionalText = 'You can now close and continue on to the computer.';
          this.uploading = false;
          this.uploadedFinish = true;
        }
      }, {
        key: "uploadNeedReview",
        value: function uploadNeedReview() {
          this.selectedFile.progress = 100;
          this.textFinal = 'Thank you for your cooperation! There is some information that needs to be manually verified. ' + ' Please review your dashboard for any additional documentation/ information that may be needed.';
          this.additionalText = 'You can now close and continue on to the computer.';
          this.uploading = false;
          this.uploadedFinish = true;
        }
      }, {
        key: "uploadNew",
        value: function uploadNew() {
          var el = this.inputFile.nativeElement;
          el.click();
        }
      }, {
        key: "closeUploadFinish",
        value: function closeUploadFinish() {}
      }, {
        key: "verificationSended",
        value: function verificationSended($event) {
          if ($event === 'retry') {
            this.type = 'FRONT';
            this.uploadedFinish = false;
            this.errorRetries++;
            this.uploading = false;
            return;
          }

          this.uploadSuccess();
        }
      }, {
        key: "showUploadFile",
        value: function showUploadFile() {
          return !this.uploading && !this.error && !this.uploadedFinish && !this.notTask;
        }
      }, {
        key: "getImage",
        value: function getImage() {
          if (this.type === 'FRONT') {
            return 'assets/upload_from_mobile.svg';
          }

          return 'assets/upload_back_mobile.svg';
        }
      }, {
        key: "showButtonUploadOrRetry",
        value: function showButtonUploadOrRetry() {
          if (!this.showButtonUpload) {
            return false;
          } else if (!this.uploading && !this.endProcess && !this.uploadedFinish && !this.notTask) {
            return true;
          }

          return false;
        }
      }, {
        key: "forceUploadExpiredId",
        value: function forceUploadExpiredId($event) {
          var _this6 = this;

          if ($event === 'retry') {
            this.type = 'FRONT';
            this.errorRetries = 0;
            this.error = '';
            this.showButtonUpload = true;
            this.requestExpired = false;
          } else {
            this.http.confirmExpiredMobile(this.token).subscribe(function () {
              _this6.uploadNeedReview();
            });
          }
        }
      }, {
        key: "changeType",
        value: function changeType(documentSide) {
          if (this.documentType === 'PASSPORT') {
            this.typeText = '<b>information page</b>';
            this.lastTypeText = 'passport';
            return;
          } else if (this.documentType === 'DRIVER_LICENSE' || documentSide === 'FRONT_SIDE') {
            this.documentType = 'DRIVER_LICENSE';
            this.typeText = '<b>FRONT SIDE</b>';
            this.lastTypeText = 'US drivers license';
            return;
          } else if (this.documentType === 'DRIVER_LICENSE_BACK' || documentSide === 'BACK_SIDE') {
            this.documentType = 'DRIVER_LICENSE_BACK';
            this.typeText = '<b>BACK SIDE</b>';
            this.lastTypeText = 'US drivers license';
            return;
          }
        }
      }, {
        key: "getInfoFromLocalStorage",
        value: function getInfoFromLocalStorage(key) {
          var info = localStorage.getItem(key);
          return info ? JSON.parse(info) : null;
        }
        /**
         * Save information in the session storage.
         *
         * @param {string} key
         * @param data
         */

      }, {
        key: "saveInfoInLocalStorage",
        value: function saveInfoInLocalStorage(key, data) {
          localStorage.setItem(key, JSON.stringify(data));
        }
      }]);

      return UploadMobileComponent;
    }();

    UploadMobileComponent.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], UploadMobileComponent.prototype, "inputFile", void 0);
    UploadMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-mobile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-mobile/upload/upload-mobile.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-mobile.component.scss */
      "./src/app/upload-mobile/upload/upload-mobile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])], UploadMobileComponent);
    /***/
  }
}]);
//# sourceMappingURL=upload-mobile-mobile-module-es5.js.map
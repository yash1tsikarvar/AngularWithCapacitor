function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mobile-mobile-module~verifications-verifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile/mobile.component.html": function node_modulesRawLoaderDistCjsJsSrcAppMobileMobileMobileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"upload-id-mobile\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/message-with-icon/message-with-icon.component.html": function node_modulesRawLoaderDistCjsJsSrcAppMobileUploadMessageWithIconMessageWithIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"message-whit-icon\">\r\n  <div class=\"gif-with-icon\">\r\n    <img [src]=\"img\" [alt]=\"altText\"\r\n         class=\"img-responsive img-circle gifimg\"/>\r\n  </div>\r\n\r\n  <div class=\"text\">{{text}}</div>\r\n  <div>{{subError}}</div>\r\n  <div class=\"small-text\">{{ smallText }}\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/upload.component.html": function node_modulesRawLoaderDistCjsJsSrcAppMobileUploadUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"finish-upload\" *ngIf=\"uploadedFinish\">\r\n  <tev-awesome-message (closePopup)=\"closeUploadFinish()\" [message]=\"textFinal\" [additionalText]=\"additionalText\"\r\n                       [buttonText]=\"''\" [autoCloseTime]=\"105\"\r\n                       [auto_closeable]=\"false\"></tev-awesome-message>\r\n</div>\r\n<div *ngIf=\"!uploadedFinish\" class=\"mobile\" [class.upload-white]=\"showUploadFile()\">\r\n\r\n  <div class=\"row\">\r\n    <h1>\r\n      <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\r\n    </h1>\r\n  </div><!-- ./row -->\r\n\r\n  <div *ngIf=\"showUploadFile()\">\r\n\r\n    <div class=\"row\">\r\n      <h2>Take a picture of the <span class=\"highlighted-blue\">{{ type }}</span> of your ID</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <p> Make sure your document is readable and well lit. No photocopies.</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <img class=\"img-icon\" [src]=\"getImage()\" alt=\"upload image from mobile\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"error && !uploading && !showForm\">\r\n    <tev-errors-id [error]=\"error\" [subError]=\"subError\" [smallText]=\"textFinal\"></tev-errors-id>\r\n  </div>\r\n\r\n  <div *ngIf=\"showButtonUploadOrRetry()\" class=\"row\">\r\n    <label class=\"btn btn-blue\">\r\n      <input type=\"file\" capture\r\n             accept=\"image/*\" #inputFile (change)=\"onFileChanged($event)\"/>\r\n      {{ error ? 'Retry' : 'Open Camera'}}\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"uploading\">\r\n    <div class=\"col-xs-12 col-sm-6 offset-sm-3\">\r\n      <tev-uploading-message init=\"60\"></tev-uploading-message>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"notTask\">\r\n    <tev-message-with-icon [img]=\"'assets/icon-green-check.svg'\" [altText]=\"'green check'\"\r\n                           [text]=\"'You don’t need to upload your document again!'\"\r\n                           [smallText]=\"'Your document has already been submitted. Now you can close and continue on your computer.'\"\r\n    ></tev-message-with-icon>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12\" *ngIf=\"showForm\">\r\n    <tev-update-id-applicant [info]=\"photoIdVerification\"\r\n                             (dataSent)=\"verificationSended($event)\"\r\n                             [token]=\"token\"\r\n                             [checkFirstStep]=false\r\n                             [applicantFullName]=\"''\"></tev-update-id-applicant>\r\n  </div>\r\n\r\n</div><!-- ./intro -->\r\n<tev-expired-dialog *ngIf=\"requestExpired\" [errorBackRetries]=\"errorRetriesBack\"\r\n                    (responseExpired)=\"forceUploadExpiredId($event)\"></tev-expired-dialog>\r\n";
    /***/
  },

  /***/
  "./src/app/mobile/mobile-routing.module.ts": function srcAppMobileMobileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/mobile/upload/upload.component.ts");
    /* harmony import */


    var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mobile/mobile.component */
    "./src/app/mobile/mobile/mobile.component.ts");

    var routes = [{
      path: '',
      component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__["MobileComponent"],
      children: [{
        path: 'upload/:token',
        component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]
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
  "./src/app/mobile/mobile.module.ts": function srcAppMobileMobileModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/mobile/upload/upload.component.ts");
    /* harmony import */


    var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mobile/mobile.component */
    "./src/app/mobile/mobile/mobile.component.ts");
    /* harmony import */


    var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mobile-routing.module */
    "./src/app/mobile/mobile-routing.module.ts");
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
    "./src/app/mobile/upload/message-with-icon/message-with-icon.component.ts");

    var MobileModule = function MobileModule() {
      _classCallCheck(this, MobileModule);
    };

    MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__["MobileComponent"], _upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mobile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileRoutingModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"]],
      exports: [_upload_message_with_icon_message_with_icon_component__WEBPACK_IMPORTED_MODULE_8__["MessageWithIconComponent"]]
    })], MobileModule);
    /***/
  },

  /***/
  "./src/app/mobile/mobile/mobile.component.scss": function srcAppMobileMobileMobileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/mobile/mobile/mobile.component.ts": function srcAppMobileMobileMobileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileComponent", function () {
      return MobileComponent;
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

    var MobileComponent = /*#__PURE__*/function () {
      function MobileComponent(uiService) {
        _classCallCheck(this, MobileComponent);

        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.website = location.origin;
      }

      _createClass(MobileComponent, [{
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

      return MobileComponent;
    }();

    MobileComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }];
    };

    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-mobile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mobile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile/mobile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mobile.component.scss */
      "./src/app/mobile/mobile/mobile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])], MobileComponent);
    /***/
  },

  /***/
  "./src/app/mobile/upload/message-with-icon/message-with-icon.component.scss": function srcAppMobileUploadMessageWithIconMessageWithIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-whit-icon .gifimg {\n  display: block;\n  border-radius: 50%;\n  margin: 10% auto 10%;\n  width: 25%;\n}\n.message-whit-icon .text {\n  font-size: 24px;\n  text-align: center;\n  font-weight: bold;\n  padding: 5% 20%;\n}\n.message-whit-icon .small-text {\n  font-size: 14px;\n  text-align: center;\n  padding: 5% 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL3VwbG9hZC9tZXNzYWdlLXdpdGgtaWNvbi9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFxtb2JpbGVcXHVwbG9hZFxcbWVzc2FnZS13aXRoLWljb25cXG1lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvdXBsb2FkL21lc3NhZ2Utd2l0aC1pY29uL21lc3NhZ2Utd2l0aC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Utd2hpdC1pY29uIHtcclxuICAuZ2lmaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA1JSAyMCU7XHJcbiAgfVxyXG5cclxuICAuc21hbGwtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JSAxNSU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIubWVzc2FnZS13aGl0LWljb24gLmdpZmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xuICB3aWR0aDogMjUlO1xufVxuLm1lc3NhZ2Utd2hpdC1pY29uIC50ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1JSAyMCU7XG59XG4ubWVzc2FnZS13aGl0LWljb24gLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNSUgMTUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/upload/message-with-icon/message-with-icon.component.ts": function srcAppMobileUploadMessageWithIconMessageWithIconComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/message-with-icon/message-with-icon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-with-icon.component.scss */
      "./src/app/mobile/upload/message-with-icon/message-with-icon.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MessageWithIconComponent);
    /***/
  },

  /***/
  "./src/app/mobile/upload/upload.component.scss": function srcAppMobileUploadUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".awesome-item {\n  width: 100%;\n  top: 5% !important;\n  left: 0;\n}\n\n.small-text {\n  font-size: 14px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.upload-white {\n  background-color: white;\n  color: black !important;\n}\n\ntev-uploading-message .uploading {\n  padding: 0px !important;\n}\n\n.mobile {\n  height: 100vh;\n  padding: 10%;\n  color: white;\n}\n\n.mobile h1 {\n  margin-bottom: 10px;\n}\n\n.mobile h1 img {\n  width: 25%;\n  padding-bottom: 20px;\n  float: left;\n}\n\n.mobile h2 {\n  float: left;\n  text-align: left;\n  padding-bottom: 10%;\n}\n\n.mobile .img-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%;\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.mobile .highlighted-blue {\n  color: #2196f3;\n  font-weight: bold;\n}\n\n.mobile .btn-blue {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mobile input[type=file] {\n  display: none;\n}\n\n.mobile mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL3VwbG9hZC9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFxtb2JpbGVcXHVwbG9hZFxcdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2JpbGUvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9iaWxlL3VwbG9hZC9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0csV0FBQTtBQ0FIOztBREdBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQ0FGOztBRElFO0VBQ0UsdUJBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRE1FO0VBQ0UsbUJBQUE7QUNKSjs7QURNSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNKTjs7QURRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVRTtFQUNFLGNFNUNHO0VGNkNILGlCQUFBO0FDUko7O0FEV0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlFO0VBQ0UsYUFBQTtBQ1ZKOztBRGFFO0VBQ0UsV0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcclxuLmF3ZXNvbWUtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1JSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zbWFsbC10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51cGxvYWQtd2hpdGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRldi11cGxvYWRpbmctbWVzc2FnZXtcclxuICAudXBsb2FkaW5ne1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9iaWxlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHRlZC1ibHVlIHtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1ibHVlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuYXdlc29tZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbn1cblxuLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXBsb2FkLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG50ZXYtdXBsb2FkaW5nLW1lc3NhZ2UgLnVwbG9hZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW9iaWxlIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tb2JpbGUgaDEgaW1nIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1vYmlsZSBoMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuLm1vYmlsZSAuaW1nLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuLm1vYmlsZSAuaGlnaGxpZ2h0ZWQtYmx1ZSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb2JpbGUgLmJ0bi1ibHVlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubW9iaWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vYmlsZSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1BSU4gQ09MT1JTXHJcbiRwdXJwbGU6ICMzODMzNDI7XHJcbiRsaWdodC1wdXJwbGU6ICMzZjNjNGM7XHJcbiRuZXctcHVycGxlOiAjNEQ0NDVBO1xyXG4kcmVkOiAjY2Y0NzQxO1xyXG4kbGctcmVkOiAjZmNkN2Q3O1xyXG4kZ3JlZW46ICM5ZWM1NGM7XHJcbiRzbm93OiAjZjVmNmY2O1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRncmF5OiAjYmJiY2JlO1xyXG4kbGlnaHQtZ3JheTogI0VERUVFRjtcclxuJGRhcmstZ3JheTogIzc3NzQ3ZTtcclxuJGljZTogI2NmZDBkMjtcclxuJGJnLWdyYXk6ICNmNWY1ZjU7XHJcbiRiZy1ncmF5MjogI0U2RTZFNztcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRsZy1ibHVlOiMwMDlDREM7XHJcbiRsZy1ncmF5OiNBM0FBQjE7XHJcbiRmb3JtLWdyYXk6IzhFODc5ODtcclxuJG1haW4tYmFja2dyb3VuZDogI2YxZjJmMjtcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/mobile/upload/upload.component.ts": function srcAppMobileUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/utils/HTTPStatusCode */
    "./src/app/shared/utils/HTTPStatusCode.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var heic2any__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! heic2any */
    "./node_modules/heic2any/dist/heic2any.js");
    /* harmony import */


    var heic2any__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_10__);

    var UploadComponent = /*#__PURE__*/function () {
      function UploadComponent(http, ui, activeRoute) {
        _classCallCheck(this, UploadComponent);

        this.http = http;
        this.ui = ui;
        this.activeRoute = activeRoute;
        this.type = 'FRONT';
        this.endProcess = Boolean(0);
        this.uploadedFinish = Boolean(0);
        this.additionalText = '';
        this.showButtonUpload = Boolean(1);
        this.photoIdVerification = {
          id: null,
          firstName: null,
          lastName: null,
          dob: null,
          documentId: null,
          step1Name: null,
          step1Lastname: null,
          step1dob: null
        };
        this.forceUpload = Boolean(0);
        this.requestExpired = Boolean(0);
        this.errorRetriesBack = 0;

        this.blobToFile = function (theBlob, fileName) {
          var b = theBlob;
          b.lastModified = new Date();
          b.name = fileName;
          return theBlob;
        };

        this.listenToUrlParams();
      }

      _createClass(UploadComponent, [{
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this2 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this2.token = params.token;

            _this2.http.checkTokenUpload(params.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this2.uploadError(error, '');

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
            })).subscribe(function (res) {});
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.errorRetries = 0;
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
          var file = this.selectedFile = event.target.files[0];

          if (file.type.endsWith('pdf')) {
            this.selectedFile = file;
            this.onUpload();
          } else {
            var blob = file;
            heic2any__WEBPACK_IMPORTED_MODULE_10___default()({
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
                    tenantFile = {
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
                    this.http.uploadDocumentFromMobile(tenantFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      _this4.uploadError(error, tenantFile.filename);

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
                    })).subscribe(function (res) {
                      if (res && !(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"])) {
                        if (res.result === 'OK') {
                          _this4.uploadSuccess();

                          _this4.errorRetries = 0;
                        } else if (res.result === 'NR') {
                          _this4.uploadNeedReview();
                        } else if (res.result === 'NM') {
                          _this4.error = 'The information doesn\'t match with the application.' + ' Please make sure to upload the ID for correct applicant \n' + '\n', _this4.uploading = false;
                          _this4.errorRetries++;
                          _this4.forceUpload = _this4.errorRetries === 2;
                        } else if (res.result === 'NB') {
                          _this4.type = 'BACK';
                          _this4.errorRetries = 0;
                        } else if (res.result === 'NF') {
                          _this4.needForm(res.idInfoExtractDTO, res.documentId, res.applicantId);

                          _this4.errorRetries = 0;
                        }

                        _this4.uploading = false;
                      }
                    }, function (error) {
                      _this4.errorRetries++;
                      _this4.uploading = false;
                      _this4.error = 'We are not able to read the document. Please try again!';
                      _this4.forceUpload = _this4.errorRetries === 2;
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "uploadError",
        value: function uploadError(error, filename) {
          var _this5 = this;

          this.forceUpload = false;

          if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].REQUEST_TIMEOUT) {
            this.error = 'We are not able to read the document. Please try again!';
            this.forceUpload = this.errorRetries > 1;
          } else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].UNPROCESSABLE_ENTITY) {
            this.error = error.error.detail;
            this.forceUpload = true;

            if (this.error.includes('The session')) {
              this.textFinal = 'Please go back to the computer and generate a new QR ' + 'code by refreshing the page. Scan the code and try again.';
              this.endProcess = true;
              this.forceUpload = false;
            } else if (this.error.includes('expiration date') || this.error.includes('has expired') || this.error.includes('Non-US Driver’s License detected')) {
              if (this.type === 'FRONT') {
                var expRetry = 2 - this.errorRetries;

                if (expRetry === 1) {
                  this.checkExpired = false;
                  this.textFinal = 'We will upload and review this ID manually, if ID is expired the ' + 'document may be rejected and a new non-expired ID will be requested.';
                }

                this.subError = expRetry + ' tries left (then will upload document)';
                this.forceUpload = false;
              } else {
                this.showButtonUpload = false;
                var expRetryBack = 2 - this.errorRetriesBack;

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
          } else if (error.status === _shared_utils_HTTPStatusCode__WEBPACK_IMPORTED_MODULE_8__["default"].NOT_ACCEPTABLE) {
            this.error = error.error.detail;
            this.forceUpload = this.errorRetries > 1;
          } else {
            this.ui.showError({
              message: "There was a problem uploading the file ".concat(filename)
            });
          }

          this.errorRetries++;
          this.forceUpload = this.errorRetries > 1;
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
          this.textFinal = 'Thank you for your cooperation! There is some information that needs to be manually verified. ' + ' Please review your dashboard for any additional documentation/ information that may be needed. ';
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
        key: "needForm",
        value: function needForm(extractInfo, documentId, applicantId) {
          this.errorRetries = 0;
          var name = extractInfo.firstNameExt && extractInfo.matchFirstName ? extractInfo.firstNameExt : '';
          var lastName = extractInfo.lastNameExt && extractInfo.matchLastName ? extractInfo.lastNameExt : '';
          var dob = extractInfo.dobExt && extractInfo.dobExt && extractInfo.matchDob ? moment__WEBPACK_IMPORTED_MODULE_9__(extractInfo.dobExt).toDate() : null;
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
      }, {
        key: "closeUploadFinish",
        value: function closeUploadFinish() {}
      }, {
        key: "verificationSended",
        value: function verificationSended($event) {
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
      }, {
        key: "showUploadFile",
        value: function showUploadFile() {
          return !this.uploading && !this.error && !this.uploadedFinish && !this.showForm && !this.notTask;
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
          } else if (!this.uploading && !this.endProcess && !this.uploadedFinish && !this.showForm && !this.notTask) {
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
      }]);

      return UploadComponent;
    }();

    UploadComponent.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], UploadComponent.prototype, "inputFile", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/upload/upload.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload.component.scss */
      "./src/app/mobile/upload/upload.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], UploadComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~mobile-mobile-module~verifications-verifications-module-es5.js.map
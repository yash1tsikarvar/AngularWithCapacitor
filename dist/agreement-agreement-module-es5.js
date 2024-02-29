function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agreement-agreement-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/agreement/agreement/agreement.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAgreementAgreementAgreementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid main-content\">\n  <div class=\"row justify-content-sm-center\">\n    <div class=\"col-12 col-sm-10 col-md-8 col-lg-8 col-xl-6\">\n      <section class=\"agreement-content-box\">\n        <article>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <h1 class=\"minimum-line-height\">\n                <div class=\"icon-holder\"></div>\n              </h1>\n            </div>\n            <div class=\"col-6 text-right\">\n              <div class=\"main-icon-holder\">\n                <a href=\"#\" (click)=\"logOut($event)\">Log Out</a>\n              </div>\n            </div>\n          </div>\n\n          <ul class=\"txt-sm pt-3\">\n            <li>Date: {{mainApplication.paymentDate | date:'short'}}</li>\n            <li>Transaction ID: {{mainApplication.transactionId}}</li>\n            <li>Account #: {{mainApplication.account}}</li>\n            <li>Amount: {{mainApplication.amountPaid | currency:'USD':true}}</li>\n          </ul>\n\n            <p class=\"txt-xs pt-3\">I, <strong class=\"txt-applicant-name\">{{mainApplication.payerName}}</strong> Confirm that I have paid the above amount according to the card issuer agreement. I also understand that the application fee is required and nonrefundable regardless of the outcome of the application.</p>\n\n          <div class=\"agreement-text\">\n            <p>PLEASE READ ALL THE PROPERTY SPECIAL NOTES LISTED BELOW CAREFULLY:</p>\n                <p><b>* Any additional occupants 18 years old or older will have to make a separate application*</b></p>\n                <p>Tenant Evaluation understands the importance of keeping your information secure from\n                    unauthorized access. All of your sensitive data is encrypted before being transmitted to/from our\n                    servers. Tenant Evaluation is a Level 1 Compliant Organization. For details on Level 1 security\n                    standards please click here.</p>\n            <p>You are hereby authorized to release any and all information requested with regards to verification of my bank account(s), \n              credit history, residential history, criminal record history, employment verification and character references to \n              Tenant Evaluation LLC. This information is to be used for my/our credit report for my/our Application for Occupancy.</p>\n\n            <p>I/We hereby waive any privileges I/We may have with respect to the said information in reference to its release to the aforesaid party. Information obtained for this report is to be released to Tenant Evaluation LLC, Property Manager, Board of Directors and The Landlord for their exclusive use only.</p>\n\n            <p>PLEASE INCLUDE COPY OF DRIVER’S LICENSE OR PASSPORT TO CONFIRM IDENTITY.</p>\n\n            <p>Please notify your Landlord(s), Employer(s), and Character References that we will be contacting them to obtain a reference pursuant to your application.</p>\n\n            <p>I/We further state the Authorization Form were signed by me/us and was not originated with fraudulent intent by me/ us or any other person, and that the signature(s) below are my/our own proper signature.</p>\n\n            <p>I/We certify under penalty of perjury that the foregoing is true and correct.</p>\n\n            <p>I/WE UNDERSTAND THAT THE APPLICATION FEE IS REQUIRED AND NONREFUNDABLE REGARDLESS OF THE OUTCOME OF THE APPLICATION.</p>\n\n            <p>I/We further understand that any refundable monies paid through Tenant Evaluation in the form of deposits, extra fees, etc. will be refunded by the Association directly.</p>\n\n            <p>Please allow 14 days from the date below to complete the application. Please be aware that the associations have their own approval process which will start once the report has been released and the time frame may vary per association.</p>\n\n            <p>If after 30 days from the date you created the application Tenant Evaluation has not received all the required documentation, your application will be considered abandoned and the incomplete application will be closed and sent to the community. The application can only be re-opened within 30 days of being abandoned with written request from the the applicant.</p>\n\n            <p>If you or the co-applicant have falsified, deliberately mislead or omitted to mention any information on your application, you may not be approved for a purchase, lease and/or occupancy.</p>\n          </div>\n\n          <h1 class=\"txt-lg pt-3\">Review Your signature</h1>\n          <form class=\"signature\" [formGroup]=\"signatureForm\" (submit)=\"submit()\">\n\n            <div class=\"signature-input\">\n              <input type=\"text\"\n                     class=\"form-control\"\n                     placeholder=\"Type your name here or draw below\"\n                     formControlName=\"signatureText\">\n            </div>\n\n            <div class=\"signature-canvas\">\n\n              <div class=\"signature-wrapper\">\n                <canvas id=\"signature-pad\" #signaturePad></canvas>\n              </div>\n\n              <div class=\"signature-text\">\n                <canvas id=\"signature-text\" #signatureText></canvas>\n              </div>\n\n            </div>\n\n\n            <button class=\"btn btn-lg btn-primary px-5 mb-4\"\n                    [disabled]=\"processing\"\n                    type=\"submit\">Submit</button>\n\n            <button class=\"btn btn-lg btn-primary px-5 mb-4\"\n                    [disabled]=\"processing\"\n                    type=\"button\" (click)=\"clearSignature()\">Clear</button>\n          </form>\n        </article>\n      </section><!-- ./agreement-content-box -->\n    </div><!-- ./col -->\n  </div><!-- ./row -->\n</div><!-- ./container-fluid -->\n";
    /***/
  },

  /***/
  "./src/app/agreement/agreement-routing.module.ts": function srcAppAgreementAgreementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgreementRoutingModule", function () {
      return AgreementRoutingModule;
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


    var _agreement_agreement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agreement/agreement.component */
    "./src/app/agreement/agreement/agreement.component.ts");
    /* harmony import */


    var _agreement_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./agreement.guard */
    "./src/app/agreement/agreement.guard.ts");

    var routes = [{
      path: '',
      component: _agreement_agreement_component__WEBPACK_IMPORTED_MODULE_3__["AgreementComponent"],
      canActivate: [_agreement_guard__WEBPACK_IMPORTED_MODULE_4__["AgreementGuard"]]
    }];

    var AgreementRoutingModule = function AgreementRoutingModule() {
      _classCallCheck(this, AgreementRoutingModule);
    };

    AgreementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_agreement_guard__WEBPACK_IMPORTED_MODULE_4__["AgreementGuard"]]
    })], AgreementRoutingModule);
    /***/
  },

  /***/
  "./src/app/agreement/agreement.guard.ts": function srcAppAgreementAgreementGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgreementGuard", function () {
      return AgreementGuard;
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

    var AgreementGuard = /*#__PURE__*/function () {
      function AgreementGuard(httpService, router) {
        _classCallCheck(this, AgreementGuard);

        this.httpService = httpService;
        this.router = router;
      }
      /**
       *
       * @param {ActivatedRouteSnapshot} next
       * @param {RouterStateSnapshot} state
       * @return {Observable<boolean>}
       */


      _createClass(AgreementGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          var applicationId = next.params.applicationId;
          return this.httpService.getApplicationById(applicationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (response) {
            if (!!response && response.signatureMissing) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (httpError) {
            console.log(httpError);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (canNavigate) {
            if (!canNavigate) {
              _this.router.navigate(['/application-list'])["catch"](console.log);
            } else {}
          }));
        }
      }]);

      return AgreementGuard;
    }();

    AgreementGuard.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AgreementGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AgreementGuard);
    /***/
  },

  /***/
  "./src/app/agreement/agreement.module.ts": function srcAppAgreementAgreementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgreementModule", function () {
      return AgreementModule;
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


    var _agreement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./agreement-routing.module */
    "./src/app/agreement/agreement-routing.module.ts");
    /* harmony import */


    var _agreement_agreement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agreement/agreement.component */
    "./src/app/agreement/agreement/agreement.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AgreementModule = function AgreementModule() {
      _classCallCheck(this, AgreementModule);
    };

    AgreementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _agreement_routing_module__WEBPACK_IMPORTED_MODULE_2__["AgreementRoutingModule"]],
      declarations: [_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_3__["AgreementComponent"]]
    })], AgreementModule);
    /***/
  },

  /***/
  "./src/app/agreement/agreement/agreement.component.scss": function srcAppAgreementAgreementAgreementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".agreement-text {\n  max-height: 10em;\n  overflow-y: auto;\n  padding: 1em;\n  margin: 1em 0;\n  background-color: #E0E0E0;\n}\n\n.signature-canvas {\n  width: 100%;\n  height: 200px;\n  position: relative;\n}\n\n#signature-pad, #signature-text {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdyZWVtZW50L2FncmVlbWVudC9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXGFncmVlbWVudFxcYWdyZWVtZW50XFxhZ3JlZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FncmVlbWVudC9hZ3JlZW1lbnQvYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hZ3JlZW1lbnQvYWdyZWVtZW50L2FncmVlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDEwZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcbn1cbi5zaWduYXR1cmUtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNzaWduYXR1cmUtcGFkLCAjc2lnbmF0dXJlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiIsIi5hZ3JlZW1lbnQtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDEwZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcbn1cblxuLnNpZ25hdHVyZS1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jc2lnbmF0dXJlLXBhZCwgI3NpZ25hdHVyZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/agreement/agreement/agreement.component.ts": function srcAppAgreementAgreementAgreementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgreementComponent", function () {
      return AgreementComponent;
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


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var signature_pad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! signature_pad */
    "./node_modules/signature_pad/dist/signature_pad.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/custom-validators */
    "./src/app/shared/custom-validators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AgreementComponent = /*#__PURE__*/function () {
      function AgreementComponent(authService, httpService, uiService, formBuilder, router) {
        _classCallCheck(this, AgreementComponent);

        this.authService = authService;
        this.httpService = httpService;
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.formReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dataReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.processing = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.defaultValues();
        this.listenToApplicationInformation();
        this.listenToThemeValues();
      }

      _createClass(AgreementComponent, [{
        key: "onResize",
        value: function onResize() {
          this.setCanvasSize();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "listenToThemeValues",
        value: function listenToThemeValues() {
          var _this2 = this;

          this.uiService.smallLogo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroyed$)).subscribe(function (value) {
            return _this2.smallLogo = "url(".concat(value, ")");
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.signatureForm = this.formBuilder.group({
            applicationId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_9__["CustomValidators"].asciiValidator()]],
            acknowledgerName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_9__["CustomValidators"].asciiValidator()]],
            noticeSignature: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_9__["CustomValidators"].asciiValidator()]],
            signatureText: ['']
          });
          this.listenToSignatureText();
          this.formReady$.next(true);
        }
      }, {
        key: "listenToSignatureText",
        value: function listenToSignatureText() {
          var _this3 = this;

          this.signatureForm.controls['signatureText'].valueChanges.subscribe(function (value) {
            var canvasContext = _this3.signatureTextCanvas.getContext('2d');

            canvasContext.clearRect(0, 0, _this3.signatureTextCanvas.width, _this3.signatureTextCanvas.height);
            canvasContext.font = "italic 60px 'Herr Von Muellerhoff";
            canvasContext.fillText(value, 10, 110);

            var dataUrl = _this3.signatureTextCanvas.toDataURL();

            _this3.signaturePad.clear();

            _this3.signaturePad.fromDataURL(dataUrl);
          });
        }
      }, {
        key: "listenToApplicationInformation",
        value: function listenToApplicationInformation() {
          var _this4 = this;

          this.httpService.mainApplication$.subscribe(function (application) {
            if (_this4.mainApplication = application) {
              _this4.dataReady$.next(true);
            }
          });
        }
      }, {
        key: "defaultValues",
        value: function defaultValues() {
          var _this5 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.formReady$, this.dataReady$]).subscribe(function () {
            var _this5$mainApplicatio = _this5.mainApplication,
                applicationId = _this5$mainApplicatio.applicationId,
                payerName = _this5$mainApplicatio.payerName;

            _this5.signatureForm.controls['applicationId'].setValue(applicationId);

            _this5.signatureForm.controls['acknowledgerName'].setValue(payerName);
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this6 = this;

          if (!this.signaturePad.isEmpty()) {
            this.processing = true;
            this.uiService.showInfo({
              message: 'Processing your request',
              keepOpen: true
            });
            this.signatureForm.controls['noticeSignature'].setValue(this.signaturePad.toDataURL('image/png'));
            var request = this.signatureForm.value;
            this.httpService.signApplication(request).subscribe(function (response) {
              _this6.uiService.showSuccess({
                message: 'Authorization Signed',
                removeCurrent: true
              });

              _this6.router.navigate(['/dashboard', response.applicationId])["catch"](console.log);
            }, function (httpError) {
              _this6.processing = false;
              var error = httpError.error;

              _this6.uiService.showError({
                message: error.title,
                removeCurrent: true
              });
            });
          } else {
            this.processing = false;
            this.uiService.showError({
              message: 'Please Sign the Application'
            });
          }
        }
      }, {
        key: "logOut",
        value: function logOut(mouseEvent) {
          var _this7 = this;

          mouseEvent.preventDefault();
          this.authService.logOut().subscribe(function () {
            _this7.router.navigate(['/'])["catch"](console.log);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initSignature();
        }
      }, {
        key: "clearSignature",
        value: function clearSignature() {
          this.signaturePad.clear();
        }
      }, {
        key: "initSignature",
        value: function initSignature() {
          this.signatureCanvas = this.signaturePadRef.nativeElement;
          this.signatureTextCanvas = this.signatureTextRef.nativeElement;
          this.setCanvasSize();
          this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_5__["default"](this.signatureCanvas);
        }
      }, {
        key: "setCanvasSize",
        value: function setCanvasSize() {
          var ratio = Math.max(window.devicePixelRatio || 1, 1);

          if (this.signatureCanvas) {
            this.signatureCanvas.width = this.signatureCanvas.offsetWidth * ratio;
            this.signatureCanvas.height = this.signatureCanvas.offsetHeight * ratio;
            this.signatureCanvas.getContext('2d').scale(ratio, ratio);

            if (this.signaturePad) {
              this.signaturePad.clear();
            }
          }

          if (this.signatureTextCanvas) {
            this.signatureTextCanvas.width = this.signatureTextCanvas.offsetWidth * ratio;
            this.signatureTextCanvas.height = this.signatureTextCanvas.offsetHeight * ratio;
            this.signatureTextCanvas.getContext('2d').scale(ratio, ratio);
          }

          if (this.signatureForm && this.signaturePad) {
            this.signatureForm.controls['signatureText'].updateValueAndValidity();
          }
        }
      }]);

      return AgreementComponent;
    }();

    AgreementComponent.ctorParameters = function () {
      return [{
        type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signaturePad', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AgreementComponent.prototype, "signaturePadRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureText', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AgreementComponent.prototype, "signatureTextRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AgreementComponent.prototype, "onResize", null);
    AgreementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-agreement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agreement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/agreement/agreement/agreement.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agreement.component.scss */
      "./src/app/agreement/agreement/agreement.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AgreementComponent);
    /***/
  }
}]);
//# sourceMappingURL=agreement-agreement-module-es5.js.map
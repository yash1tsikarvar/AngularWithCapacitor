function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploads-upload-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/css-gif/css-gif.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadsCssGifCssGifComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"item-image\" [style.background-image]=\"'url(' + image_selected + ')'\"> </div>\n<div class=\"text-image\">\n  {{text}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-id-document.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadsIdUploadIdDocumentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container upload-ids\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-12 instruction-upload-id\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-6\">\n            <h1>\n              <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\n            </h1>\n          </div>\n          <div class=\"col-sm-12 col-6\">\n            <a (click)=\"goBack()\" *ngIf=\"showBack()\" class=\"back-link\">\n              <span class=\"tev-icon tev-icon--back\"></span>\n              BACK</a>\n          </div>\n        </div>\n        <div *ngIf=\"!uploading && !uploadedFinish\" class=\"instruction-id\">\n          <tev-css-gif  [images]=images></tev-css-gif>\n          <div class=\"rules\">\n            <ul>\n              <li>Document size limit 20 MB max</li>\n              <li>Supported formats JEPG, PNG and PDF</li>\n              <li>Make sure the text is readable</li>\n            </ul>\n          </div>\n        </div>\n        <div *ngIf=\"uploading && !uploadedFinish\" class=\"instruction-id\">\n          <tev-css-gif  [images]=uploadingImages></tev-css-gif>\n        </div>\n        <div *ngIf=\"uploadedFinish\" class=\"instruction-id\">\n          <tev-css-gif  [images]=uploaded></tev-css-gif>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-sm-8 col-12\">\n      <div class=\"container-upload\">\n        <div class=\"row\">\n          <div class=\"col-sm-8 col-12 mx-auto\">\n            <div *ngIf=\"uploadedFinish; else upload\">\n\n              <tev-upload-finish-message [setTitle]=\"finishTitle\" [setSubTitle]=\"finishSubtitle\" [setError]=\"errorText\"\n                                         [auto_closeable]=\"false\" (closePopup)=\"backToDashboard()\" [autoCloseTime]=\"10\"\n                                         buttonText=\"Back to the Dashboard\"></tev-upload-finish-message>\n            </div>\n            <ng-template #upload>\n\n              <div class=\"help-link\">\n                <a class=\"help-link\" href=\"https://support.tenantevaluation.com/support/solutions/articles/65000166566-how-to-upload-documents-\" target=\"_blank\">\n                <mat-icon>support</mat-icon>\n                Need help?\n                </a>\n              </div>\n              <div class=\"title-upload\">\n                <h3>{{this.document?.description + ' ' + this.document?.name}}</h3>\n              </div>\n              <div *ngIf=\"error\" class=\"upload-id-error\">\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <mat-icon>warning</mat-icon><span class=\"error-span\" [hidden]=\"errorCode<=0\"> Error {{errorCode}}</span>\n                  </div>\n                  <div class=\"col-12\">\n                    <p [innerHTML]=\"error\">\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"\">\n                <div *ngIf=\"!uploadedFinish && !uploading\">\n\n\n                  <ngb-accordion #acc=\"ngbAccordion\" *ngIf=\"isDriverLicense();else passportUpload\"\n                                 (panelChange)=\"beforeChange($event)\" [closeOthers]=\"true\" activeIds=\"{{documentType}}\">\n\n                    <ngb-panel id=\"DRIVER_LICENSE\" [disabled]=\"this.documentType ==='DRIVER_LICENSE_BACK'\">\n                      <ng-template ngbPanelTitle>\n                        <span>STEP 1: <b>UPLOAD FRONT SIDE</b></span>\n                      </ng-template>\n                      <ng-template ngbPanelContent>\n\n                        <div class=\"image-drop__zone\" id=\"front-side-dropzone\" *ngIf=\"showInputFile;else other_content\"\n                             ngx-dropzone\n                             [accept]=\"mimetypesAccept()\"\n                             [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\n                          <ngx-dropzone-label>\n                            <div class=\"text-align-center\">\n                              <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\n                              <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\n                                                                        class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\n                            </div>\n                          </ngx-dropzone-label>\n                        </div>\n                        <ng-template #other_content>\n                          <div>other content</div>\n                        </ng-template>\n\n                      </ng-template>\n                    </ngb-panel>\n                    <ngb-panel id=\"DRIVER_LICENSE_BACK\" [disabled]=\"this.documentType ==='DRIVER_LICENSE'\">\n                      <ng-template ngbPanelTitle>\n                        <span>STEP 2: <b>UPLOAD BACK SIDE</b></span>\n                      </ng-template>\n                      <ng-template ngbPanelContent>\n                        <div class=\"image-drop__zone\" id=\"back-side-dropzone\" *ngIf=\"showInputFile;else other_content\"\n                             ngx-dropzone\n                             [accept]=\"mimetypesAccept()\"\n                             [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\n                          <ngx-dropzone-label>\n                            <div class=\"text-align-center\">\n                              <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\n                              <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\n                                                                        class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\n                            </div>\n                          </ngx-dropzone-label>\n                        </div>\n                        <ng-template #other_content>\n                          <div>other content</div>\n                        </ng-template>\n                      </ng-template>\n                    </ngb-panel>\n                  </ngb-accordion>\n\n                  <ng-template #passportUpload>\n                    <div class=\"image-drop__zone\" id=\"passport-dropzone\" *ngIf=\"showInputFile;else other_content\"\n                         ngx-dropzone\n                         [accept]=\"mimetypesAccept()\"\n                         [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\n                      <ngx-dropzone-label>\n                        <div class=\"text-align-center\">\n                          <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\n                          <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\n                                                                    class=\"image-upload-type\"></p>\n                          <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\n                            src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                          <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\n                            src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                          <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\n                        </div>\n                      </ngx-dropzone-label>\n                    </div>\n                    <ng-template #other_content>\n                      <div>other content</div>\n                    </ng-template>\n                  </ng-template>\n\n                  <div *ngIf=\"canUploadFromMobile()\" class=\"button-upload-zone\">\n                    <p class=\"text-center\">OR</p>\n                    <button (click)=\"uploadMobile()\" class=\"btn upload-button\">\n                      <mat-icon class=\"d-sm-none d-xs-none d-md-block\">mobile_screen_share</mat-icon>\n                      Upload from phone or tablet\n                    </button>\n                  </div>\n                </div>\n                <div *ngIf=\"uploading\">\n                  <div class=\"col-md-9 offset-md-1 awesome-item\">\n                    <tev-uploading-message init=\"60\" (closeMessage)=\"uploadTimeOut()\"></tev-uploading-message>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-mobile/upload-mobile-v2.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadsIdUploadMobileUploadMobileV2Html(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"upload-ids\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-12 instruction-upload-id\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <h1>\n              <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\n            </h1>\n          </div>\n          <div class=\"row\">\n            <a (click)=\"goBack()\" class=\"back-link\">\n              <span class=\"tev-icon tev-icon--back\"></span>\n              BACK</a>\n          </div>\n\n          <div class=\"instruction-id\">\n            <img src=\"assets/upload-id/upload_mobile.svg\" alt=\"upload from mobile image\">\n            <h5>Scan the QR code to take a picture from your phone.</h5>\n            <p>Once re-directed please make sure to keep this window open.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-8 col-12\">\n        <div class=\"container-upload\">\n          <div class=\"row\">\n            <div class=\"col-12 mx-auto\">\n              <div class=\"upload-mobile\">\n                <div class=\"row justify-content-md-center\">\n                  <div class=\"col-10\">\n                    <div class=\"task-name\">{{taskName}}</div>\n                  </div>\n                </div>\n                <div class=\"row justify-content-md-center\">\n                    <mat-card>\n                      <div class=\"title\">Scan the QR code with your mobile device</div>\n                      <div class=\"qrCode\" *ngIf=\"qrCode!=''; else elseBlock\">\n                        <qrcode [qrdata]=\"baseURl\" [width]=\"200\" [errorCorrectionLevel]=\"'M'\"\n                                elementType=\"url\"></qrcode>\n                      </div>\n                    </mat-card>\n                    <ng-template #elseBlock>Generating your qr code</ng-template>\n                    <button type=\"submit\" class=\"btn btn-blue\" (click)=\"continue()\">Continue\n                    </button>\n                </div>\n                <p id=\"url-text\" style=\"display: none\">{{baseURl}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/upload-finish-message/upload-finish-message.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadsUploadFinishMessageUploadFinishMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"awesome-item\">\n    <img src=\"assets/upload-generic/success.gif\" alt=\"image success to upload document\"\n         class=\"awesome-img\"/>\n    <tev-countdown [init]=\"timeAutoClose\" (onComplete)=\"closeUploadFinish()\" style=\"display: none;\"></tev-countdown>\n    <p *ngIf=\"title\" class=\"title\">{{title}}</p>\n    <p *ngIf=\"error\" class=\"small-text\"  [innerHTML]=\"error\"></p>\n    <p *ngIf=\"subtitle\" class=\"small-text\"  [innerHTML]=\"subtitle\"></p>\n    <button *ngIf=\"button_text!==''\" class=\"btn btn-blue\" data-test=\"btContinue\" (click)=\"close()\">{{button_text}}</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads/upload.component.html": function node_modulesRawLoaderDistCjsJsSrcAppUploadsUploadsUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"uploads-page\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/uploads/css-gif/css-gif.component.scss": function srcAppUploadsCssGifCssGifComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.item-image {\n  background-size: 130px 130px;\n  height: 150px;\n  width: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-bottom: 5px;\n}\n.text-image {\n  font-size: 20px;\n  font-weight: bold;\n}\n@media (min-width: 600px) {\n  .item-image {\n    background-size: 80px 80px;\n    height: 100px;\n    width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9jc3MtZ2lmL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXHNhc3NcXF9tZWRpYV9xdWVyaWVzLnNjc3MiLCJzcmMvYXBwL3VwbG9hZHMvY3NzLWdpZi9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXHVwbG9hZHNcXGNzcy1naWZcXGNzcy1naWYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZHMvY3NzLWdpZi9jc3MtZ2lmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzBEQUFBO0FDQ0E7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDS0Y7QURIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ01GO0FGV0k7RUNkRjtJQUNFLDBCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUNPRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXBsb2Fkcy9jc3MtZ2lmL2Nzcy1naWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTUVESUEgUVVFUklFU1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XG4gIEBpZiAkcG9pbnQgPT0geGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbGcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbGdfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OHB4KSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IG1kIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWRfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gc20ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gc21fbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY2cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHhzIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHhzX21heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHhzX21heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0OXB4KSAgeyBAY29udGVudDsgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwifnNhc3MvbWVkaWFfcXVlcmllc1wiO1xuLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4IDEzMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnRleHQtaW1hZ2V7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AaW5jbHVkZSBicmVha3BvaW50KHhzKSB7XG4gIC5pdGVtLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwcHggODBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuIiwiLyogICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1FRElBIFFVRVJJRVNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cbi5pdGVtLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMzBweCAxMzBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRleHQtaW1hZ2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLml0ZW0taW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODBweCA4MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/uploads/css-gif/css-gif.component.ts": function srcAppUploadsCssGifCssGifComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CssGifComponent", function () {
      return CssGifComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CssGifComponent = /*#__PURE__*/function () {
      function CssGifComponent() {
        _classCallCheck(this, CssGifComponent);

        this.image_counter = 0;
      }

      _createClass(CssGifComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.images) {
            this.image_selected = this.images[this.image_counter].image;
            this.text = this.images[this.image_counter].text;
            this.image_counter++;

            if (this.image_counter >= this.images.length) {
              this.image_counter = 0;
            }

            this.myFunction();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.changeImage) {
            clearTimeout(this.changeImage);
          }
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          var _this = this;

          this.changeImage = setTimeout(function () {
            if (_this.images) {
              _this.image_selected = _this.images[_this.image_counter].image;
              _this.text = _this.images[_this.image_counter].text;
              _this.image_counter++;

              if (_this.image_counter >= _this.images.length) {
                _this.image_counter = 0;
              }
            }

            _this.myFunction(); // Will result in true;

          }, 5000);
        }
      }]);

      return CssGifComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CssGifComponent.prototype, "images", void 0);
    CssGifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-css-gif',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./css-gif.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/css-gif/css-gif.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./css-gif.component.scss */
      "./src/app/uploads/css-gif/css-gif.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CssGifComponent);
    /***/
  },

  /***/
  "./src/app/uploads/id/upload-id-document.component.scss": function srcAppUploadsIdUploadIdDocumentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.container {\n  max-width: 2200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9pZC9EOlxcVGVuYW50X1xcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfbWVkaWFfcXVlcmllcy5zY3NzIiwic3JjL2FwcC91cGxvYWRzL2lkL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2Fkc1xcaWRcXHVwbG9hZC1pZC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9pZC91cGxvYWQtaWQtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MERBQUE7QUNJQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1pZC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3NyYy9zYXNzL21lZGlhX3F1ZXJpZXMnO1xuQGltcG9ydCAnc3JjL3Nhc3MvdmFyaWFibGVzJztcblxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOjIyMDBweDtcbn1cblxuIiwiLyogICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1FRElBIFFVRVJJRVNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDIyMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/uploads/id/upload-id-document.component.ts": function srcAppUploadsIdUploadIdDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadIdDocumentComponent", function () {
      return UploadIdDocumentComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var heic2any__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! heic2any */
    "./node_modules/heic2any/dist/heic2any.js");
    /* harmony import */


    var heic2any__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");

    var UploadIdDocumentComponent = /*#__PURE__*/function () {
      function UploadIdDocumentComponent(router, activeRoute, httpService, deviceDetector) {
        _classCallCheck(this, UploadIdDocumentComponent);

        this.router = router;
        this.activeRoute = activeRoute;
        this.httpService = httpService;
        this.deviceDetector = deviceDetector;
        this.images = [{
          image: '/assets/upload-id-v2/visible.svg',
          text: 'Make sure all four corners are visible'
        }, {
          image: '/assets/upload-id-v2/cover.svg',
          text: 'Must not be covered in any way'
        }, {
          image: '/assets/upload-id-v2/blurry.svg',
          text: 'Make sure the image is not blurry or distorted'
        }, {
          image: '/assets/upload-id-v2/double_image.svg',
          text: 'Do not upload more than one ID per image'
        }];
        this.uploaded = [{
          image: '/assets/upload-id-v2/uploaded.svg',
          text: 'You can now close or go back to the dashboard.'
        }];
        this.uploadingImages = [{
          image: '/assets/upload-id-v2/uploading.svg',
          text: 'Analyzing. Please wait.'
        }];
        this.files = [];
        this.fileQueue = [];
        this.pendingDocumentTasks = {};
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.uploadedFinish = Boolean(0);
        this.uploading = Boolean(0);
        this.forceUpload = Boolean(0);
        this.mobile = Boolean(0);
        this.showInputFile = true;
        this.tenMB = Math.pow(2, 20) * 20;
        this.errorRetries = 0;
        this.needBack = Boolean(0);

        this.blobToFile = function (theBlob, fileName) {
          var b = theBlob;
          b.lastModified = new Date();
          b.name = fileName;
          return theBlob;
        };

        this.listenToUrlParams();
      }

      _createClass(UploadIdDocumentComponent, [{
        key: "listenToApplicationInfo",
        value: function listenToApplicationInfo() {
          var _this2 = this;

          this.httpService.mainApplication$.subscribe(function (app) {
            _this2.mainApplication = app; // tslint:disable-next-line:triple-equals

            _this2.document = app.pendingDocumentTasks.filter(function (task) {
              return task.documentTaskId == _this2.documentTaskId;
            })[0];

            if (_this2.document == null && !_this2.uploadedFinish) {
              _this2.closeUploadFinish();
            }

            _this2.pendingDocumentTasks = app.pendingDocumentTasks.reduce(function (acc, current) {
              return Object.assign({}, acc, _defineProperty({}, current.documentTaskId.toString(10), current));
            }, {});
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.state$ = this.activeRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return window.history.state;
          }));
          this.state$.subscribe(function (returnValue) {
            if (returnValue.documentType === undefined) {
              _this3.documentType = _this3.getInfoFromLocalStorage('ID' + _this3.documentTaskId);

              if (!_this3.documentType) {
                _this3.documentType = 'DRIVER_LICENSE';
              }

              _this3.changeType(_this3.documentType);
            } else {
              _this3.saveInfoInLocalStorage('ID' + _this3.documentTaskId, returnValue.documentType);

              _this3.documentType = returnValue.documentType;

              _this3.changeType(_this3.documentType);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next(true);
        }
      }, {
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this4 = this;

          this.activeRoute.params.subscribe(function (params) {
            var documentTaskId = params.documentTaskId;
            _this4.documentTaskId = documentTaskId;

            _this4.listenToApplicationInfo();
          });
        }
      }, {
        key: "changeType",
        value: function changeType(documentSide) {
          if (this.documentType === 'PASSPORT') {
            this.typeText = 'Upload Face Photo Page';
          } else if (this.documentType === 'DRIVER_LICENSE' || documentSide === 'FRONT_SIDE') {
            this.documentType = 'DRIVER_LICENSE';
            this.typeText = 'Upload ID <b>Front Side</b>';
          } else if (this.documentType === 'DRIVER_LICENSE_BACK' || documentSide === 'BACK_SIDE') {
            this.documentType = 'DRIVER_LICENSE_BACK';
            this.typeText = 'Upload ID <b>Back Side</b>';
          }
        }
      }, {
        key: "mimetypesAccept",
        value: function mimetypesAccept() {
          return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
        }
      }, {
        key: "onSelect",
        value: function onSelect(event, type) {
          var _this5 = this;

          this.error = null;
          var errorCode = 0;
          var msg = 'Your document scanning was unsuccessful as the system could not extract the information from it.  ' + 'This could be caused by an unexpected connection error.' + ' Please try uploading again. If this error persists, please submit the document which will be reviewed manually.';

          if (event.rejectedFiles[0]) {
            if (event.rejectedFiles[0].reason === 'type') {
              msg = 'Your document scanning was unsuccessful as the system could not extract the information from it. ' + 'The system detected that the image was in a format that is not compatible with our system (PNG, JPG, OR PDF). ' + 'Please upload your document in any of the preferred listed formats. ';
              errorCode = 102;
            } else if (event.reevent.target.files[0].sizejectedFiles[0].reason === 'size') {
              msg = 'Your document scanning was unsuccessful as the system could not extract the information from it. ' + 'The system detected that the image was in a format that is larger than allowed. ' + 'Please reduce the file before uploading it. ';
              errorCode = 130;
            }

            this.showErrors(msg, 'ER', false, errorCode);
          } else {
            this.uploading = true;
            var file = event.addedFiles[0];

            if (file.type.endsWith('pdf')) {
              this.uploadDocument(file).then(function (r) {
                return _this5.callServiceUploapDocument(r, document);
              });
              this.files.push(file);
            } else {
              var blob = file;
              heic2any__WEBPACK_IMPORTED_MODULE_6___default()({
                blob: blob,
                toType: 'image/jpeg',
                quality: 0.8
              }).then(function (jpgBlob) {
                file = _this5.blobToFile(jpgBlob, file.name);

                _this5.uploadDocument(file).then(function (r) {
                  return _this5.callServiceUploapDocument(r, document);
                });

                _this5.files.push(file);

                return Promise.resolve(true);
              })["catch"](function (err) {
                _this5.uploadDocument(file).then(function (r) {
                  return _this5.callServiceUploapDocument(r, document);
                });

                _this5.files.push(file);

                return Promise.resolve(true);
              });
            }
          }
        }
      }, {
        key: "callServiceUploapDocument",
        value: function callServiceUploapDocument(uploadRequest, document) {
          uploadRequest.backId = this.typeText === 'BACK';
          uploadRequest.idDocumentType = this.documentType;
          uploadRequest.forceUpload = this.forceUpload;

          if (!uploadRequest.forceUpload) {
            uploadRequest.forceUpload = this.errorRetries >= 4;
          }

          uploadRequest.uploadCode = 'id-v2';
          this.uploadId(uploadRequest, document);
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
        key: "uploadId",
        value: function uploadId(uploadRequest, document) {
          var _this6 = this;

          var service = this.httpService.uploadDocumentId(uploadRequest);

          if (uploadRequest.backId) {
            service = this.httpService.uploadBackId(uploadRequest);
          }

          service.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this6.unexpectedError(error, document.fileName);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(59000)).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response) {
              _this6.fileQueue.splice(0, 1);

              if (event.body.errors) {
                if (event.body.errors === 'VENDOR_CONNECTION_EXCEPTION' || event.body.errors === 'TENANT_UNEXPECTED_ERROR') {
                  _this6.errorRetries = 3;
                }

                _this6.errorRetries++;

                _this6.changeType(event.body.side);

                _this6.showErrors(event.body.errorString, event.body.status, _this6.needShowRetries(event.body.errors), event.body.errorCode);

                return;
              }

              if (event.body.status) {
                var status = event.body.status;

                if (status === 'NB') {
                  _this6.documentType = 'DRIVER_LICENSE_BACK';
                  _this6.uploading = false;

                  _this6.changeType(_this6.documentType);
                } else if (status === 'NFNT') {
                  _this6.documentType = 'DRIVER_LICENSE';
                  _this6.uploading = false;

                  _this6.changeType(_this6.documentType);
                } else if (status === 'NR') {
                  _this6.finishUpload(status, undefined);
                } else if (status === 'OK') {
                  _this6.finishUpload(status, undefined);
                }
              }
            }
          }, function (error) {
            _this6.files.splice(0, 1);

            _this6.errorRetries++;
            _this6.uploading = false;
            _this6.error = 'We are not able to read the document. Please try again!';
          });
        }
      }, {
        key: "uploadDocument",
        value: function uploadDocument(file) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var fileData, tenantFile;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.readFileData(file);

                  case 2:
                    fileData = _context.sent;
                    tenantFile = {
                      filename: file.name,
                      fileMimeType: file.type,
                      fileData: fileData,
                      fileSize: file.size,
                      percentageUploaded: 'In Queue',
                      documentTaskId: this.documentTaskId,
                      doAutoSanitizer: true,
                      forceUpload: this.forceUpload,
                      uploadCode: 'id',
                      message: moment__WEBPACK_IMPORTED_MODULE_7__(file.lastModified).format('MM/DD/YYYY HH:mm') + ' - ' + Math.round(file.size / 1024) + 'KB',
                      uploadByType: 'A',
                      idDocumentType: this.documentType
                    };
                    return _context.abrupt("return", tenantFile);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
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
          this.uploading = false;
          this.errorCode = errorCode;
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
          }

          if (status === 'NR') {
            this.finishTitle = 'Thank you for your cooperation!';
            this.finishSubtitle = 'There is some information that needs to be manually verified.' + ' Please review your dashboard for any additional documentation/ information that may be needed';
            this.uploadedFinish = true;
          }

          if (status === 'NR_ER') {
            this.finishTitle = 'Thank you for your cooperation!';
            this.finishSubtitle = 'There is some information that needs to be manually verified.' + ' Please review your dashboard for any additional documentation/ information that may be needed';
            this.errorText = error;
            this.uploadedFinish = true;
          }

          this.saveInfoInLocalStorage('end-' + this.mainApplication.applicationId, true);
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation(event) {
          event.stopPropagation();
        }
      }, {
        key: "uploadTimeOut",
        value: function uploadTimeOut() {}
      }, {
        key: "onPopState",
        value: function onPopState(event) {
          this.backToDashboard();
        }
      }, {
        key: "closeUploadFinish",
        value: function closeUploadFinish() {
          this.saveInfoInLocalStorage('end-' + this.mainApplication.applicationId, true);
          this.router.navigate(['dashboard/' + this.mainApplication.applicationId + '/upload-documents'])["catch"](console.log);
        }
      }, {
        key: "backToDashboard",
        value: function backToDashboard() {
          this.closeUploadFinish();
        }
      }, {
        key: "uploadMobile",
        value: function uploadMobile() {
          var _this7 = this;

          var type = {
            taskId: this.documentTaskId,
            idDocumentType: this.getInfoFromLocalStorage('ID' + this.documentTaskId)
          };
          this.httpService.createUploadInPhoneV2(type).subscribe(function (data) {
            _this7.router.navigate(['../../upload-mobile/' + _this7.documentTaskId], {
              relativeTo: _this7.activeRoute
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['dashboard/' + this.mainApplication.applicationId + '/document-selector/' + this.documentTaskId])["catch"](console.log);
        }
      }, {
        key: "beforeChange",
        value: function beforeChange($event) {
          if ($event.panelId === 'back-side') {
            $event.preventDefault();
          }
        }
      }, {
        key: "isDriverLicense",
        value: function isDriverLicense() {
          return this.documentType !== 'PASSPORT';
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
      }, {
        key: "canUploadFromMobile",
        value: function canUploadFromMobile() {
          return this.deviceDetector.isDesktop() && this.documentType !== 'DRIVER_LICENSE_BACK';
        }
      }, {
        key: "showBack",
        value: function showBack() {
          return !this.uploadedFinish && !this.uploading;
        }
      }]);

      return UploadIdDocumentComponent;
    }();

    UploadIdDocumentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('acc', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordion"])], UploadIdDocumentComponent.prototype, "ngbAccordion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], UploadIdDocumentComponent.prototype, "onPopState", null);
    UploadIdDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-upload-id-document',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-id-document.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-id-document.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-id-document.component.scss */
      "./src/app/uploads/id/upload-id-document.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"]])], UploadIdDocumentComponent);
    /***/
  },

  /***/
  "./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts": function srcAppUploadsIdUploadMobileUploadMobileV2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadMobileV2Component", function () {
      return UploadMobileV2Component;
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
    /*! ../../../core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui/ui.service */
    "./src/app/ui/ui.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UploadMobileV2Component = /*#__PURE__*/function () {
      function UploadMobileV2Component(httpService, uiService, router, activeRoute) {
        _classCallCheck(this, UploadMobileV2Component);

        this.httpService = httpService;
        this.uiService = uiService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.baseURl = location.origin + '/upload-mobile/upload/';
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.listenToUrlParams();
      }

      _createClass(UploadMobileV2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSubject.next(true);
        }
      }, {
        key: "listenToUrlParams",
        value: function listenToUrlParams() {
          var _this8 = this;

          this.activeRoute.params.subscribe(function (params) {
            var documentTaskId = params.documentTaskId;
            _this8.documentTaskId = documentTaskId;

            _this8.getQrCode();

            _this8.httpService.mainApplication$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this8.unsubscribeSubject)).subscribe(function (application) {
              _this8.mainApplication = application;
              _this8.document = application.pendingDocumentTasks.find(function (task) {
                return task.documentTaskId == _this8.documentTaskId;
              });

              if (_this8.document == null) {
                _this8.router.navigate(['dashboard/' + application.applicationId + '/upload-documents'])["catch"](console.log);
              }

              _this8.taskName = _this8.document.description + ' ' + _this8.document.name;
            });
          });
        }
      }, {
        key: "getQrCode",
        value: function getQrCode() {
          var _this9 = this;

          var type = {
            taskId: this.documentTaskId,
            idDocumentType: this.getInfoFromLocalStorage('ID' + this.documentTaskId)
          };
          this.httpService.createUploadInPhoneV2(type).subscribe(function (data) {
            _this9.baseURl = _this9.baseURl + data.token;
            _this9.qrCode = data.token;
          });
        }
      }, {
        key: "continue",
        value: function _continue() {
          var _this10 = this;

          this.httpService.getApplicationById(this.mainApplication.applicationId.toString()).subscribe(function () {
            _this10.router.navigate(['dashboard/' + _this10.mainApplication.applicationId + '/upload-documents']);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/uploads/' + this.mainApplication.applicationId + '/id', this.documentTaskId]);
        }
      }, {
        key: "getInfoFromLocalStorage",
        value: function getInfoFromLocalStorage(key) {
          var info = localStorage.getItem(key);
          return info ? JSON.parse(info) : null;
        }
      }]);

      return UploadMobileV2Component;
    }();

    UploadMobileV2Component.ctorParameters = function () {
      return [{
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    UploadMobileV2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-upload-mobile-v2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-mobile-v2.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-mobile/upload-mobile-v2.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-mobile-v2.scss */
      "./src/app/uploads/id/upload-mobile/upload-mobile-v2.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], UploadMobileV2Component);
    /***/
  },

  /***/
  "./src/app/uploads/id/upload-mobile/upload-mobile-v2.scss": function srcAppUploadsIdUploadMobileUploadMobileV2Scss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".instruction-id img {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9pZC91cGxvYWQtbW9iaWxlL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2Fkc1xcaWRcXHVwbG9hZC1tb2JpbGVcXHVwbG9hZC1tb2JpbGUtdjIuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9pZC91cGxvYWQtbW9iaWxlL3VwbG9hZC1tb2JpbGUtdjIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1tb2JpbGUvdXBsb2FkLW1vYmlsZS12Mi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5zdHJ1Y3Rpb24taWR7XG4gIGltZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4iLCIuaW5zdHJ1Y3Rpb24taWQgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/uploads/upload-finish-message/upload-finish-message.component.scss": function srcAppUploadsUploadFinishMessageUploadFinishMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".awesome-item {\n  position: absolute;\n  top: 35%;\n  left: 0%;\n  border-radius: 10px;\n  text-align: center;\n  font-family: Roboto;\n  font-size: 24px;\n  color: black;\n  padding-bottom: 30px;\n  width: 100%;\n}\n.awesome-item .title {\n  font-size: 25px;\n  font-weight: bold;\n}\n.awesome-item .subtitle {\n  font-size: 18px;\n}\n.awesome-item .counter {\n  color: #F33D3D;\n  text-align: center;\n}\n.awesome-item .awesome-img {\n  border-radius: 50%;\n  margin: 10% auto 3%;\n  max-width: 60%;\n}\n.awesome-item .bold-small-text {\n  font-weight: bold;\n  font-size: 14px;\n}\n.awesome-item .btn-blue {\n  min-height: 50px;\n  padding: 20px 50px;\n}\n@media screen and (max-width: 767px) {\n  .awesome-item {\n    width: 80%;\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy91cGxvYWQtZmluaXNoLW1lc3NhZ2UvRDpcXFRlbmFudF9cXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFx1cGxvYWRzXFx1cGxvYWQtZmluaXNoLW1lc3NhZ2VcXHVwbG9hZC1maW5pc2gtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy91cGxvYWQtZmluaXNoLW1lc3NhZ2UvdXBsb2FkLWZpbmlzaC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDQUY7QURFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvdXBsb2FkLWZpbmlzaC1tZXNzYWdlL3VwbG9hZC1maW5pc2gtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Fzcy92YXJpYWJsZXNcIjtcbi5hd2Vzb21lLWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLmNvdW50ZXIge1xuICAgIGNvbG9yOiAjRjMzRDNEO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hd2Vzb21lLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMyU7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gIH1cblxuICAuYm9sZC1zbWFsbC10ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5idG4tYmx1ZXtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hd2Vzb21lLWl0ZW0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuXG4gIH1cbn1cblxuXG4iLCIuYXdlc29tZS1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hd2Vzb21lLWl0ZW0gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hd2Vzb21lLWl0ZW0gLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmF3ZXNvbWUtaXRlbSAuY291bnRlciB7XG4gIGNvbG9yOiAjRjMzRDNEO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXdlc29tZS1pdGVtIC5hd2Vzb21lLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxMCUgYXV0byAzJTtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uYXdlc29tZS1pdGVtIC5ib2xkLXNtYWxsLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmF3ZXNvbWUtaXRlbSAuYnRuLWJsdWUge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4IDUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hd2Vzb21lLWl0ZW0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/uploads/upload-finish-message/upload-finish-message.component.ts": function srcAppUploadsUploadFinishMessageUploadFinishMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFinishMessageComponent", function () {
      return UploadFinishMessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadFinishMessageComponent = /*#__PURE__*/function () {
      function UploadFinishMessageComponent() {
        _classCallCheck(this, UploadFinishMessageComponent);

        this.title = 'You are awesome!';
        this.subtitle = 'Your files have been submitted successfully.<br/>' + 'If we need additional information we will contact you later.';
        this.hasChange = Boolean(0);
        this.button_text = 'Back to the dashboard';
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UploadFinishMessageComponent, [{
        key: "auto_closeable",
        set: function set(autoCloseable) {
          this.autoCloseable = autoCloseable;
        }
      }, {
        key: "setTitle",
        set: function set(message) {
          if (message && message !== '') {
            this.title = message;
          }
        }
      }, {
        key: "setSubTitle",
        set: function set(message) {
          if (message && message !== '') {
            this.subtitle = message;
          }
        }
      }, {
        key: "setError",
        set: function set(message) {
          if (message && message !== '') {
            this.error = message;
          }
        }
      }, {
        key: "buttonText",
        set: function set(message) {
          this.button_text = message;
        }
      }, {
        key: "autoCloseTime",
        set: function set(timeAutoClose) {
          this.timeAutoClose = timeAutoClose;
        }
      }, {
        key: "close",
        value: function close() {
          this.closePopup.emit('finish');
        }
      }, {
        key: "closeUploadFinish",
        value: function closeUploadFinish() {
          if (this.auto_closeable) {
            this.closePopup.emit('finish');
          }
        }
      }]);

      return UploadFinishMessageComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], UploadFinishMessageComponent.prototype, "auto_closeable", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], UploadFinishMessageComponent.prototype, "setTitle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], UploadFinishMessageComponent.prototype, "setSubTitle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], UploadFinishMessageComponent.prototype, "setError", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], UploadFinishMessageComponent.prototype, "buttonText", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])], UploadFinishMessageComponent.prototype, "autoCloseTime", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UploadFinishMessageComponent.prototype, "closePopup", void 0);
    UploadFinishMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-upload-finish-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-finish-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/upload-finish-message/upload-finish-message.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-finish-message.component.scss */
      "./src/app/uploads/upload-finish-message/upload-finish-message.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UploadFinishMessageComponent);
    /***/
  },

  /***/
  "./src/app/uploads/upload-routing.module.ts": function srcAppUploadsUploadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadRoutingModule", function () {
      return UploadRoutingModule;
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


    var _uploads_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./uploads/upload.component */
    "./src/app/uploads/uploads/upload.component.ts");
    /* harmony import */


    var _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./id/upload-id-document.component */
    "./src/app/uploads/id/upload-id-document.component.ts");
    /* harmony import */


    var _uploads_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./uploads.guard */
    "./src/app/uploads/uploads.guard.ts");
    /* harmony import */


    var _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./id/upload-mobile/upload-mobile-v2.component */
    "./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts");

    var routes = [{
      path: '',
      component: _uploads_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadsComponent"],
      children: [{
        path: ':applicationId/id/:documentTaskId',
        component: _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_4__["UploadIdDocumentComponent"],
        canActivate: [_uploads_guard__WEBPACK_IMPORTED_MODULE_5__["UploadsGuard"]]
      }, {
        path: ':applicationId/upload-mobile/:documentTaskId',
        component: _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_6__["UploadMobileV2Component"],
        canActivate: [_uploads_guard__WEBPACK_IMPORTED_MODULE_5__["UploadsGuard"]]
      }]
    }];

    var UploadRoutingModule = function UploadRoutingModule() {
      _classCallCheck(this, UploadRoutingModule);
    };

    UploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_uploads_guard__WEBPACK_IMPORTED_MODULE_5__["UploadsGuard"]]
    })], UploadRoutingModule);
    /***/
  },

  /***/
  "./src/app/uploads/upload.module.ts": function srcAppUploadsUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadModule", function () {
      return UploadModule;
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


    var _upload_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload-routing.module */
    "./src/app/uploads/upload-routing.module.ts");
    /* harmony import */


    var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./id/upload-id-document.component */
    "./src/app/uploads/id/upload-id-document.component.ts");
    /* harmony import */


    var _uploads_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./uploads/upload.component */
    "./src/app/uploads/uploads/upload.component.ts");
    /* harmony import */


    var _css_gif_css_gif_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./css-gif/css-gif.component */
    "./src/app/uploads/css-gif/css-gif.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _upload_finish_message_upload_finish_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./upload-finish-message/upload-finish-message.component */
    "./src/app/uploads/upload-finish-message/upload-finish-message.component.ts");
    /* harmony import */


    var _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./id/upload-mobile/upload-mobile-v2.component */
    "./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");

    var UploadModule = function UploadModule() {
      _classCallCheck(this, UploadModule);
    };

    UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_6__["UploadIdDocumentComponent"], _uploads_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadsComponent"], _css_gif_css_gif_component__WEBPACK_IMPORTED_MODULE_8__["CssGifComponent"], _upload_finish_message_upload_finish_message_component__WEBPACK_IMPORTED_MODULE_12__["UploadFinishMessageComponent"], _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_13__["UploadMobileV2Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _upload_routing_module__WEBPACK_IMPORTED_MODULE_3__["UploadRoutingModule"], _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__["NgxDropzoneModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__["QRCodeModule"]],
      exports: []
    })], UploadModule);
    /***/
  },

  /***/
  "./src/app/uploads/uploads.guard.ts": function srcAppUploadsUploadsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadsGuard", function () {
      return UploadsGuard;
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
    /* harmony import */


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../core/services/auth.service */
    "./src/app/core/services/auth.service.ts");

    var UploadsGuard = /*#__PURE__*/function () {
      function UploadsGuard(authService, httpService, uiService, router) {
        _classCallCheck(this, UploadsGuard);

        this.authService = authService;
        this.httpService = httpService;
        this.uiService = uiService;
        this.router = router;
      }

      _createClass(UploadsGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this11 = this;

          // this.authService.redirectUrl = state.url;
          var _next$params = next.params,
              applicationId = _next$params.applicationId,
              documentTaskId = _next$params.documentTaskId;
          this.uiService.showInfo({
            title: 'Please Wait',
            message: 'Getting Task Application Information'
          });
          return this.httpService.getApplicationById(applicationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            _this11.application = response;
            var hasPendingTask = _this11.application.pendingDocumentTasks // tslint:disable-next-line:triple-equals
            .find(function (task) {
              return task.documentTaskId == documentTaskId;
            }) ? true : false;

            if (_this11.application.proofOfIncomeManual) {
              var _iterator = _createForOfIteratorHelper(_this11.application.proofOfIncomeManual),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var proof = _step.value;

                  if (hasPendingTask === false && proof.task.find(function (task) {
                    return task.documentTaskId == documentTaskId;
                  }) ? true : false) {
                    hasPendingTask = true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return hasPendingTask;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (httpError) {
            console.log(httpError);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (applicationExists) {
            if (!applicationExists) {
              _this11.router.navigate(['/dashboard', applicationId, 'upload-documents'])["catch"](console.log);
            }
          }));
        }
      }]);

      return UploadsGuard;
    }();

    UploadsGuard.ctorParameters = function () {
      return [{
        type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UploadsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UploadsGuard);
    /***/
  },

  /***/
  "./src/app/uploads/uploads/upload.component.scss": function srcAppUploadsUploadsUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy91cGxvYWRzL0Q6XFxUZW5hbnRfXFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2Fkc1xcdXBsb2Fkc1xcdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWRzL3VwbG9hZHMvdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvdXBsb2Fkcy91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuIiwiYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/uploads/uploads/upload.component.ts": function srcAppUploadsUploadsUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadsComponent", function () {
      return UploadsComponent;
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

    var UploadsComponent = /*#__PURE__*/function () {
      function UploadsComponent(uiService) {
        _classCallCheck(this, UploadsComponent);

        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.website = location.origin;
      }

      _createClass(UploadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "listenToThemeValues",
        value: function listenToThemeValues() {
          var _this12 = this;

          this.uiService.smallLogo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (value) {
            _this12.smallLogo = value ? value : '/assets/tenant-ev-logo-service.svg';
          });
        }
      }]);

      return UploadsComponent;
    }();

    UploadsComponent.ctorParameters = function () {
      return [{
        type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }];
    };

    UploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tev-uploads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads/upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload.component.scss */
      "./src/app/uploads/uploads/upload.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])], UploadsComponent);
    /***/
  }
}]);
//# sourceMappingURL=uploads-upload-module-es5.js.map
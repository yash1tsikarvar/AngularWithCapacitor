(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploads-upload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/css-gif/css-gif.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/css-gif/css-gif.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-image\" [style.background-image]=\"'url(' + image_selected + ')'\"> </div>\r\n<div class=\"text-image\">\r\n  {{text}}\r\n</div>\r\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-image\" [style.background-image]=\"'url(' + image_selected + ')'\"> </div>\n<div class=\"text-image\">\n  {{text}}\n</div>\n");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-id-document.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-id-document.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container upload-ids\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-12 instruction-upload-id\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-6\">\r\n            <h1>\r\n              <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12 col-6\">\r\n            <a (click)=\"goBack()\" *ngIf=\"showBack()\" class=\"back-link\">\r\n              <span class=\"tev-icon tev-icon--back\"></span>\r\n              BACK</a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!uploading && !uploadedFinish\" class=\"instruction-id\">\r\n          <tev-css-gif  [images]=images></tev-css-gif>\r\n          <div class=\"rules\">\r\n            <ul>\r\n              <li>Document size limit 20 MB max</li>\r\n              <li>Supported formats JEPG, PNG and PDF</li>\r\n              <li>Make sure the text is readable</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"uploading && !uploadedFinish\" class=\"instruction-id\">\r\n          <tev-css-gif  [images]=uploadingImages></tev-css-gif>\r\n        </div>\r\n        <div *ngIf=\"uploadedFinish\" class=\"instruction-id\">\r\n          <tev-css-gif  [images]=uploaded></tev-css-gif>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8 col-12\">\r\n      <div class=\"container-upload\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-8 col-12 mx-auto\">\r\n            <div *ngIf=\"uploadedFinish; else upload\">\r\n\r\n              <tev-upload-finish-message [setTitle]=\"finishTitle\" [setSubTitle]=\"finishSubtitle\" [setError]=\"errorText\"\r\n                                         [auto_closeable]=\"false\" (closePopup)=\"backToDashboard()\" [autoCloseTime]=\"10\"\r\n                                         buttonText=\"Back to the Dashboard\"></tev-upload-finish-message>\r\n            </div>\r\n            <ng-template #upload>\r\n\r\n              <div class=\"help-link\">\r\n                <a class=\"help-link\" href=\"https://support.tenantevaluation.com/support/solutions/articles/65000166566-how-to-upload-documents-\" target=\"_blank\">\r\n                <mat-icon>support</mat-icon>\r\n                Need help?\r\n                </a>\r\n              </div>\r\n              <div class=\"title-upload\">\r\n                <h3>{{this.document?.description + ' ' + this.document?.name}}</h3>\r\n              </div>\r\n              <div *ngIf=\"error\" class=\"upload-id-error\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <mat-icon>warning</mat-icon><span class=\"error-span\" [hidden]=\"errorCode<=0\"> Error {{errorCode}}</span>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p [innerHTML]=\"error\">\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"\">\r\n                <div *ngIf=\"!uploadedFinish && !uploading\">\r\n\r\n\r\n                  <ngb-accordion #acc=\"ngbAccordion\" *ngIf=\"isDriverLicense();else passportUpload\"\r\n                                 (panelChange)=\"beforeChange($event)\" [closeOthers]=\"true\" activeIds=\"{{documentType}}\">\r\n\r\n                    <ngb-panel id=\"DRIVER_LICENSE\" [disabled]=\"this.documentType ==='DRIVER_LICENSE_BACK'\">\r\n                      <ng-template ngbPanelTitle>\r\n                        <span>STEP 1: <b>UPLOAD FRONT SIDE</b></span>\r\n                      </ng-template>\r\n                      <ng-template ngbPanelContent>\r\n\r\n                        <div class=\"image-drop__zone\" id=\"front-side-dropzone\" *ngIf=\"showInputFile;else other_content\"\r\n                             ngx-dropzone\r\n                             [accept]=\"mimetypesAccept()\"\r\n                             [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\r\n                          <ngx-dropzone-label>\r\n                            <div class=\"text-align-center\">\r\n                              <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\r\n                              <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\r\n                                                                        class=\"image-upload-type\"></p>\r\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\r\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\r\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\r\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\r\n                              <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\r\n                            </div>\r\n                          </ngx-dropzone-label>\r\n                        </div>\r\n                        <ng-template #other_content>\r\n                          <div>other content</div>\r\n                        </ng-template>\r\n\r\n                      </ng-template>\r\n                    </ngb-panel>\r\n                    <ngb-panel id=\"DRIVER_LICENSE_BACK\" [disabled]=\"this.documentType ==='DRIVER_LICENSE'\">\r\n                      <ng-template ngbPanelTitle>\r\n                        <span>STEP 2: <b>UPLOAD BACK SIDE</b></span>\r\n                      </ng-template>\r\n                      <ng-template ngbPanelContent>\r\n                        <div class=\"image-drop__zone\" id=\"back-side-dropzone\" *ngIf=\"showInputFile;else other_content\"\r\n                             ngx-dropzone\r\n                             [accept]=\"mimetypesAccept()\"\r\n                             [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\r\n                          <ngx-dropzone-label>\r\n                            <div class=\"text-align-center\">\r\n                              <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\r\n                              <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\r\n                                                                        class=\"image-upload-type\"></p>\r\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\r\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\r\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\r\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\r\n                              <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\r\n                            </div>\r\n                          </ngx-dropzone-label>\r\n                        </div>\r\n                        <ng-template #other_content>\r\n                          <div>other content</div>\r\n                        </ng-template>\r\n                      </ng-template>\r\n                    </ngb-panel>\r\n                  </ngb-accordion>\r\n\r\n                  <ng-template #passportUpload>\r\n                    <div class=\"image-drop__zone\" id=\"passport-dropzone\" *ngIf=\"showInputFile;else other_content\"\r\n                         ngx-dropzone\r\n                         [accept]=\"mimetypesAccept()\"\r\n                         [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\r\n                      <ngx-dropzone-label>\r\n                        <div class=\"text-align-center\">\r\n                          <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\r\n                          <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\r\n                                                                    class=\"image-upload-type\"></p>\r\n                          <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\r\n                            src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\r\n                          <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\r\n                            src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\r\n                          <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\r\n                        </div>\r\n                      </ngx-dropzone-label>\r\n                    </div>\r\n                    <ng-template #other_content>\r\n                      <div>other content</div>\r\n                    </ng-template>\r\n                  </ng-template>\r\n\r\n                  <div *ngIf=\"canUploadFromMobile()\" class=\"button-upload-zone\">\r\n                    <p class=\"text-center\">OR</p>\r\n                    <button (click)=\"uploadMobile()\" class=\"btn upload-button\">\r\n                      <mat-icon class=\"d-sm-none d-xs-none d-md-block\">mobile_screen_share</mat-icon>\r\n                      Upload from phone or tablet\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"uploading\">\r\n                  <div class=\"col-md-9 offset-md-1 awesome-item\">\r\n                    <tev-uploading-message init=\"60\" (closeMessage)=\"uploadTimeOut()\"></tev-uploading-message>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container upload-ids\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-12 instruction-upload-id\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-6\">\n            <h1>\n              <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\n            </h1>\n          </div>\n          <div class=\"col-sm-12 col-6\">\n            <a (click)=\"goBack()\" *ngIf=\"showBack()\" class=\"back-link\">\n              <span class=\"tev-icon tev-icon--back\"></span>\n              BACK</a>\n          </div>\n        </div>\n        <div *ngIf=\"!uploading && !uploadedFinish\" class=\"instruction-id\">\n          <tev-css-gif  [images]=images></tev-css-gif>\n          <div class=\"rules\">\n            <ul>\n              <li>Document size limit 20 MB max</li>\n              <li>Supported formats JEPG, PNG and PDF</li>\n              <li>Make sure the text is readable</li>\n            </ul>\n          </div>\n        </div>\n        <div *ngIf=\"uploading && !uploadedFinish\" class=\"instruction-id\">\n          <tev-css-gif  [images]=uploadingImages></tev-css-gif>\n        </div>\n        <div *ngIf=\"uploadedFinish\" class=\"instruction-id\">\n          <tev-css-gif  [images]=uploaded></tev-css-gif>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-sm-8 col-12\">\n      <div class=\"container-upload\">\n        <div class=\"row\">\n          <div class=\"col-sm-8 col-12 mx-auto\">\n            <div *ngIf=\"uploadedFinish; else upload\">\n\n              <tev-upload-finish-message [setTitle]=\"finishTitle\" [setSubTitle]=\"finishSubtitle\" [setError]=\"errorText\"\n                                         [auto_closeable]=\"false\" (closePopup)=\"backToDashboard()\" [autoCloseTime]=\"10\"\n                                         buttonText=\"Back to the Dashboard\"></tev-upload-finish-message>\n            </div>\n            <ng-template #upload>\n\n              <div class=\"help-link\">\n                <a class=\"help-link\" href=\"https://support.tenantevaluation.com/support/solutions/articles/65000166566-how-to-upload-documents-\" target=\"_blank\">\n                <mat-icon>support</mat-icon>\n                Need help?\n                </a>\n              </div>\n              <div class=\"title-upload\">\n                <h3>{{this.document?.description + ' ' + this.document?.name}}</h3>\n              </div>\n              <div *ngIf=\"error\" class=\"upload-id-error\">\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <mat-icon>warning</mat-icon><span class=\"error-span\" [hidden]=\"errorCode<=0\"> Error {{errorCode}}</span>\n                  </div>\n                  <div class=\"col-12\">\n                    <p [innerHTML]=\"error\">\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"\">\n                <div *ngIf=\"!uploadedFinish && !uploading\">\n\n\n                  <ngb-accordion #acc=\"ngbAccordion\" *ngIf=\"isDriverLicense();else passportUpload\"\n                                 (panelChange)=\"beforeChange($event)\" [closeOthers]=\"true\" activeIds=\"{{documentType}}\">\n\n                    <ngb-panel id=\"DRIVER_LICENSE\" [disabled]=\"this.documentType ==='DRIVER_LICENSE_BACK'\">\n                      <ng-template ngbPanelTitle>\n                        <span>STEP 1: <b>UPLOAD FRONT SIDE</b></span>\n                      </ng-template>\n                      <ng-template ngbPanelContent>\n\n                        <div class=\"image-drop__zone\" id=\"front-side-dropzone\" *ngIf=\"showInputFile;else other_content\"\n                             ngx-dropzone\n                             [accept]=\"mimetypesAccept()\"\n                             [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\n                          <ngx-dropzone-label>\n                            <div class=\"text-align-center\">\n                              <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\n                              <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\n                                                                        class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\n                            </div>\n                          </ngx-dropzone-label>\n                        </div>\n                        <ng-template #other_content>\n                          <div>other content</div>\n                        </ng-template>\n\n                      </ng-template>\n                    </ngb-panel>\n                    <ngb-panel id=\"DRIVER_LICENSE_BACK\" [disabled]=\"this.documentType ==='DRIVER_LICENSE'\">\n                      <ng-template ngbPanelTitle>\n                        <span>STEP 2: <b>UPLOAD BACK SIDE</b></span>\n                      </ng-template>\n                      <ng-template ngbPanelContent>\n                        <div class=\"image-drop__zone\" id=\"back-side-dropzone\" *ngIf=\"showInputFile;else other_content\"\n                             ngx-dropzone\n                             [accept]=\"mimetypesAccept()\"\n                             [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\n                          <ngx-dropzone-label>\n                            <div class=\"text-align-center\">\n                              <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\n                              <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\n                                                                        class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\n                                src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                              <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\n                            </div>\n                          </ngx-dropzone-label>\n                        </div>\n                        <ng-template #other_content>\n                          <div>other content</div>\n                        </ng-template>\n                      </ng-template>\n                    </ngb-panel>\n                  </ngb-accordion>\n\n                  <ng-template #passportUpload>\n                    <div class=\"image-drop__zone\" id=\"passport-dropzone\" *ngIf=\"showInputFile;else other_content\"\n                         ngx-dropzone\n                         [accept]=\"mimetypesAccept()\"\n                         [maxFileSize]=\"tenMB\" [multiple]=\"false\" (change)=\"onSelect($event,'DRIVER_LICENSE')\">\n                      <ngx-dropzone-label>\n                        <div class=\"text-align-center\">\n                          <div class=\"title\"><h4 [innerHTML]=\"typeText\"></h4></div>\n                          <p *ngIf=\"documentType==='PASSPORT'\"><img src=\"../../../assets/upload-id/passport.svg\"\n                                                                    class=\"image-upload-type\"></p>\n                          <p *ngIf=\"documentType==='DRIVER_LICENSE'\"><img\n                            src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                          <p *ngIf=\"documentType==='DRIVER_LICENSE_BACK'\"><img\n                            src=\"../../../assets/upload-id/identification.svg\" class=\"image-upload-type\"></p>\n                          <p class=\"drop-p-text\">Drop your image here, or <span>browse</span></p>\n                        </div>\n                      </ngx-dropzone-label>\n                    </div>\n                    <ng-template #other_content>\n                      <div>other content</div>\n                    </ng-template>\n                  </ng-template>\n\n                  <div *ngIf=\"canUploadFromMobile()\" class=\"button-upload-zone\">\n                    <p class=\"text-center\">OR</p>\n                    <button (click)=\"uploadMobile()\" class=\"btn upload-button\">\n                      <mat-icon class=\"d-sm-none d-xs-none d-md-block\">mobile_screen_share</mat-icon>\n                      Upload from phone or tablet\n                    </button>\n                  </div>\n                </div>\n                <div *ngIf=\"uploading\">\n                  <div class=\"col-md-9 offset-md-1 awesome-item\">\n                    <tev-uploading-message init=\"60\" (closeMessage)=\"uploadTimeOut()\"></tev-uploading-message>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-mobile/upload-mobile-v2.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-mobile/upload-mobile-v2.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-ids\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 col-12 instruction-upload-id\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <h1>\r\n              <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\r\n            </h1>\r\n          </div>\r\n          <div class=\"row\">\r\n            <a (click)=\"goBack()\" class=\"back-link\">\r\n              <span class=\"tev-icon tev-icon--back\"></span>\r\n              BACK</a>\r\n          </div>\r\n\r\n          <div class=\"instruction-id\">\r\n            <img src=\"assets/upload-id/upload_mobile.svg\" alt=\"upload from mobile image\">\r\n            <h5>Scan the QR code to take a picture from your phone.</h5>\r\n            <p>Once re-directed please make sure to keep this window open.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8 col-12\">\r\n        <div class=\"container-upload\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 mx-auto\">\r\n              <div class=\"upload-mobile\">\r\n                <div class=\"row justify-content-md-center\">\r\n                  <div class=\"col-10\">\r\n                    <div class=\"task-name\">{{taskName}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row justify-content-md-center\">\r\n                    <mat-card>\r\n                      <div class=\"title\">Scan the QR code with your mobile device</div>\r\n                      <div class=\"qrCode\" *ngIf=\"qrCode!=''; else elseBlock\">\r\n                        <qrcode [qrdata]=\"baseURl\" [width]=\"200\" [errorCorrectionLevel]=\"'M'\"\r\n                                elementType=\"url\"></qrcode>\r\n                      </div>\r\n                    </mat-card>\r\n                    <ng-template #elseBlock>Generating your qr code</ng-template>\r\n                    <button type=\"submit\" class=\"btn btn-blue\" (click)=\"continue()\">Continue\r\n                    </button>\r\n                </div>\r\n                <p id=\"url-text\" style=\"display: none\">{{baseURl}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-ids\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-12 instruction-upload-id\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <h1>\n              <img src=\"/assets/icon-te.svg\" alt=\"Tenant Evaluation\">\n            </h1>\n          </div>\n          <div class=\"row\">\n            <a (click)=\"goBack()\" class=\"back-link\">\n              <span class=\"tev-icon tev-icon--back\"></span>\n              BACK</a>\n          </div>\n\n          <div class=\"instruction-id\">\n            <img src=\"assets/upload-id/upload_mobile.svg\" alt=\"upload from mobile image\">\n            <h5>Scan the QR code to take a picture from your phone.</h5>\n            <p>Once re-directed please make sure to keep this window open.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-8 col-12\">\n        <div class=\"container-upload\">\n          <div class=\"row\">\n            <div class=\"col-12 mx-auto\">\n              <div class=\"upload-mobile\">\n                <div class=\"row justify-content-md-center\">\n                  <div class=\"col-10\">\n                    <div class=\"task-name\">{{taskName}}</div>\n                  </div>\n                </div>\n                <div class=\"row justify-content-md-center\">\n                    <mat-card>\n                      <div class=\"title\">Scan the QR code with your mobile device</div>\n                      <div class=\"qrCode\" *ngIf=\"qrCode!=''; else elseBlock\">\n                        <qrcode [qrdata]=\"baseURl\" [width]=\"200\" [errorCorrectionLevel]=\"'M'\"\n                                elementType=\"url\"></qrcode>\n                      </div>\n                    </mat-card>\n                    <ng-template #elseBlock>Generating your qr code</ng-template>\n                    <button type=\"submit\" class=\"btn btn-blue\" (click)=\"continue()\">Continue\n                    </button>\n                </div>\n                <p id=\"url-text\" style=\"display: none\">{{baseURl}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/upload-finish-message/upload-finish-message.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/upload-finish-message/upload-finish-message.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"awesome-item\">\r\n    <img src=\"assets/upload-generic/success.gif\" alt=\"image success to upload document\"\r\n         class=\"awesome-img\"/>\r\n    <tev-countdown [init]=\"timeAutoClose\" (onComplete)=\"closeUploadFinish()\" style=\"display: none;\"></tev-countdown>\r\n    <p *ngIf=\"title\" class=\"title\">{{title}}</p>\r\n    <p *ngIf=\"error\" class=\"small-text\"  [innerHTML]=\"error\"></p>\r\n    <p *ngIf=\"subtitle\" class=\"small-text\"  [innerHTML]=\"subtitle\"></p>\r\n    <button *ngIf=\"button_text!==''\" class=\"btn btn-blue\" data-test=\"btContinue\" (click)=\"close()\">{{button_text}}</button>\r\n  </div>\r\n</div>\r\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"awesome-item\">\n    <img src=\"assets/upload-generic/success.gif\" alt=\"image success to upload document\"\n         class=\"awesome-img\"/>\n    <tev-countdown [init]=\"timeAutoClose\" (onComplete)=\"closeUploadFinish()\" style=\"display: none;\"></tev-countdown>\n    <p *ngIf=\"title\" class=\"title\">{{title}}</p>\n    <p *ngIf=\"error\" class=\"small-text\"  [innerHTML]=\"error\"></p>\n    <p *ngIf=\"subtitle\" class=\"small-text\"  [innerHTML]=\"subtitle\"></p>\n    <button *ngIf=\"button_text!==''\" class=\"btn btn-blue\" data-test=\"btContinue\" (click)=\"close()\">{{button_text}}</button>\n  </div>\n</div>\n");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads/upload.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads/upload.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uploads-page\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uploads-page\">\n  <router-outlet></router-outlet>\n</div>\n");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./src/app/uploads/css-gif/css-gif.component.scss":
/*!********************************************************!*\
  !*** ./src/app/uploads/css-gif/css-gif.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.item-image {\n  background-size: 130px 130px;\n  height: 150px;\n  width: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-bottom: 5px;\n}\n.text-image {\n  font-size: 20px;\n  font-weight: bold;\n}\n@media (min-width: 600px) {\n  .item-image {\n    background-size: 80px 80px;\n    height: 100px;\n    width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9jc3MtZ2lmL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxzYXNzXFxfbWVkaWFfcXVlcmllcy5zY3NzIiwic3JjL2FwcC91cGxvYWRzL2Nzcy1naWYvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2Fkc1xcY3NzLWdpZlxcY3NzLWdpZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9jc3MtZ2lmL2Nzcy1naWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MERBQUE7QUNDQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNLRjtBREhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTUY7QUZXSTtFQ2RGO0lBQ0UsMEJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ09GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL2Nzcy1naWYvY3NzLWdpZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTUVESUEgUVVFUklFU1xyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgQGlmICRwb2ludCA9PSB4bCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOThweCkgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDlweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zYXNzL21lZGlhX3F1ZXJpZXNcIjtcclxuLml0ZW0taW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTMwcHggMTMwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi50ZXh0LWltYWdle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5AaW5jbHVkZSBicmVha3BvaW50KHhzKSB7XHJcbiAgLml0ZW0taW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIvKiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTUVESUEgUVVFUklFU1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4IDEzMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGV4dC1pbWFnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaXRlbS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4IDgwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn0iXX0= */");
=======
/* harmony default export */ __webpack_exports__["default"] = ("/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.item-image {\n  background-size: 130px 130px;\n  height: 150px;\n  width: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-bottom: 5px;\n}\n.text-image {\n  font-size: 20px;\n  font-weight: bold;\n}\n@media (min-width: 600px) {\n  .item-image {\n    background-size: 80px 80px;\n    height: 100px;\n    width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX21lZGlhX3F1ZXJpZXMuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWRzL2Nzcy1naWYvY3NzLWdpZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9jc3MtZ2lmL2Nzcy1naWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MERBQUE7QUNDQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNLRjtBREhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTUY7QUZXSTtFQ2RGO0lBQ0UsMEJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ09GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL2Nzcy1naWYvY3NzLWdpZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+c2Fzcy9tZWRpYV9xdWVyaWVzXCI7XG4uaXRlbS1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTMwcHggMTMwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGV4dC1pbWFnZXtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBpbmNsdWRlIGJyZWFrcG9pbnQoeHMpIHtcbiAgLml0ZW0taW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODBweCA4MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG4iLCIvKiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTUVESUEgUVVFUklFU1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4IDEzMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGV4dC1pbWFnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaXRlbS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4IDgwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn0iXX0= */");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./src/app/uploads/css-gif/css-gif.component.ts":
/*!******************************************************!*\
  !*** ./src/app/uploads/css-gif/css-gif.component.ts ***!
  \******************************************************/
/*! exports provided: CssGifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssGifComponent", function() { return CssGifComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CssGifComponent = class CssGifComponent {
    constructor() {
        this.image_counter = 0;
    }
    ngOnInit() {
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
    ngOnDestroy() {
        if (this.changeImage) {
            clearTimeout(this.changeImage);
        }
    }
    myFunction() {
        this.changeImage = setTimeout(() => {
            if (this.images) {
                this.image_selected = this.images[this.image_counter].image;
                this.text = this.images[this.image_counter].text;
                this.image_counter++;
                if (this.image_counter >= this.images.length) {
                    this.image_counter = 0;
                }
            }
            this.myFunction(); // Will result in true;
        }, 5000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CssGifComponent.prototype, "images", void 0);
CssGifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-css-gif',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./css-gif.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/css-gif/css-gif.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./css-gif.component.scss */ "./src/app/uploads/css-gif/css-gif.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CssGifComponent);



/***/ }),

/***/ "./src/app/uploads/id/upload-id-document.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/uploads/id/upload-id-document.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.container {\n  max-width: 2200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9pZC9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcc2Fzc1xcX21lZGlhX3F1ZXJpZXMuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9pZC9DOlxcb2ZmaWNlXFxUZW5hbnRcXEFuZ3VsYXJXaXRoQ2FwYWNpdG9yL3NyY1xcYXBwXFx1cGxvYWRzXFxpZFxcdXBsb2FkLWlkLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1pZC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OzswREFBQTtBQ0lBO0VBQ0UsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvaWQvdXBsb2FkLWlkLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NRURJQSBRVUVSSUVTXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50ID09IHhsIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IGxnIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IGxnX21heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OHB4KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IG1kX21heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHNtIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHNtX21heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY2cHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSB4cyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpICB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSB4c19tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHhzIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4c19tYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0OXB4KSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc2Fzcy9tZWRpYV9xdWVyaWVzJztcclxuQGltcG9ydCAnc3JjL3Nhc3MvdmFyaWFibGVzJztcclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6MjIwMHB4O1xyXG59XHJcblxyXG4iLCIvKiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTUVESUEgUVVFUklFU1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMjIwMHB4O1xufSJdfQ== */");
=======
/* harmony default export */ __webpack_exports__["default"] = ("/*   ----------------------------------------------------\n\nMEDIA QUERIES\n\n-------------------------------------------------------  */\n.container {\n  max-width: 2200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL3Nhc3MvX21lZGlhX3F1ZXJpZXMuc2NzcyIsIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1pZC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9pZC91cGxvYWQtaWQtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MERBQUE7QUNJQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1pZC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NRURJQSBRVUVSSUVTXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgQGlmICRwb2ludCA9PSB4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBsZ19tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZF9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBzbV9tYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0geHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJHBvaW50ID09IHh4cyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSAgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSB4eHNfbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpICB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3NyYy9zYXNzL21lZGlhX3F1ZXJpZXMnO1xuQGltcG9ydCAnc3JjL3Nhc3MvdmFyaWFibGVzJztcblxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOjIyMDBweDtcbn1cblxuIiwiLyogICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1FRElBIFFVRVJJRVNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDIyMDBweDtcbn0iXX0= */");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./src/app/uploads/id/upload-id-document.component.ts":
/*!************************************************************!*\
  !*** ./src/app/uploads/id/upload-id-document.component.ts ***!
  \************************************************************/
/*! exports provided: UploadIdDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadIdDocumentComponent", function() { return UploadIdDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! heic2any */ "./node_modules/heic2any/dist/heic2any.js");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");











let UploadIdDocumentComponent = class UploadIdDocumentComponent {
    constructor(router, activeRoute, httpService, deviceDetector) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.httpService = httpService;
        this.deviceDetector = deviceDetector;
        this.images = [
            { image: '/assets/upload-id-v2/visible.svg', text: 'Make sure all four corners are visible' },
            { image: '/assets/upload-id-v2/cover.svg', text: 'Must not be covered in any way' },
            { image: '/assets/upload-id-v2/blurry.svg', text: 'Make sure the image is not blurry or distorted' },
            { image: '/assets/upload-id-v2/double_image.svg', text: 'Do not upload more than one ID per image' },
        ];
        this.uploaded = [
            { image: '/assets/upload-id-v2/uploaded.svg', text: 'You can now close or go back to the dashboard.' },
        ];
        this.uploadingImages = [
            { image: '/assets/upload-id-v2/uploading.svg', text: 'Analyzing. Please wait.' },
        ];
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
        this.blobToFile = (theBlob, fileName) => {
            const b = theBlob;
            b.lastModified = new Date();
            b.name = fileName;
            return theBlob;
        };
        this.listenToUrlParams();
    }
    listenToApplicationInfo() {
        this.httpService
            .mainApplication$
            .subscribe(app => {
            this.mainApplication = app;
            // tslint:disable-next-line:triple-equals
            this.document = app.pendingDocumentTasks.filter(task => task.documentTaskId == this.documentTaskId)[0];
            if (this.document == null && !this.uploadedFinish) {
                this.closeUploadFinish();
            }
            this.pendingDocumentTasks = app
                .pendingDocumentTasks
                .reduce((acc, current) => {
                return Object.assign({}, acc, { [current.documentTaskId.toString(10)]: current });
            }, {});
        });
    }
    ngOnInit() {
        this.state$ = this.activeRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => window.history.state));
        this.state$.subscribe(returnValue => {
            if (returnValue.documentType === undefined) {
                this.documentType = this.getInfoFromLocalStorage('ID' + this.documentTaskId);
                if (!this.documentType) {
                    this.documentType = 'DRIVER_LICENSE';
                }
                this.changeType(this.documentType);
            }
            else {
                this.saveInfoInLocalStorage('ID' + this.documentTaskId, returnValue.documentType);
                this.documentType = returnValue.documentType;
                this.changeType(this.documentType);
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribeSubject.next(true);
    }
    listenToUrlParams() {
        this.activeRoute
            .params
            .subscribe((params) => {
            const { documentTaskId } = params;
            this.documentTaskId = documentTaskId;
            this.listenToApplicationInfo();
        });
    }
    changeType(documentSide) {
        if (this.documentType === 'PASSPORT') {
            this.typeText = 'Upload Face Photo Page';
        }
        else if (this.documentType === 'DRIVER_LICENSE' || documentSide === 'FRONT_SIDE') {
            this.documentType = 'DRIVER_LICENSE';
            this.typeText = 'Upload ID <b>Front Side</b>';
        }
        else if (this.documentType === 'DRIVER_LICENSE_BACK' || documentSide === 'BACK_SIDE') {
            this.documentType = 'DRIVER_LICENSE_BACK';
            this.typeText = 'Upload ID <b>Back Side</b>';
        }
    }
    mimetypesAccept() {
        return 'application/pdf, image/jpeg, image/png, image/gif, image/jpg';
    }
    onSelect(event, type) {
        this.error = null;
        let errorCode = 0;
        let msg = 'Your document scanning was unsuccessful as the system could not extract the information from it.  ' +
            'This could be caused by an unexpected connection error.' +
            ' Please try uploading again. If this error persists, please submit the document which will be reviewed manually.';
        if (event.rejectedFiles[0]) {
            if (event.rejectedFiles[0].reason === 'type') {
                msg = 'Your document scanning was unsuccessful as the system could not extract the information from it. ' +
                    'The system detected that the image was in a format that is not compatible with our system (PNG, JPG, OR PDF). ' +
                    'Please upload your document in any of the preferred listed formats. ';
                errorCode = 102;
            }
            else if (event.reevent.target.files[0].sizejectedFiles[0].reason === 'size') {
                msg =
                    'Your document scanning was unsuccessful as the system could not extract the information from it. ' +
                        'The system detected that the image was in a format that is larger than allowed. ' +
                        'Please reduce the file before uploading it. ';
                errorCode = 130;
            }
            this.showErrors(msg, 'ER', false, errorCode);
        }
        else {
            this.uploading = true;
            let file = event.addedFiles[0];
            if (file.type.endsWith('pdf')) {
                this.uploadDocument(file).then(r => this.callServiceUploapDocument(r, document));
                this.files.push(file);
            }
            else {
                const blob = file;
                heic2any__WEBPACK_IMPORTED_MODULE_6___default()({ blob, toType: 'image/jpeg', quality: 0.8 }).then((jpgBlob) => {
                    file = this.blobToFile(jpgBlob, file.name);
                    this.uploadDocument(file).then(r => this.callServiceUploapDocument(r, document));
                    this.files.push(file);
                    return Promise.resolve(true);
                }).catch(err => {
                    this.uploadDocument(file).then(r => this.callServiceUploapDocument(r, document));
                    this.files.push(file);
                    return Promise.resolve(true);
                });
            }
        }
    }
    callServiceUploapDocument(uploadRequest, document) {
        uploadRequest.backId = this.typeText === 'BACK';
        uploadRequest.idDocumentType = this.documentType;
        uploadRequest.forceUpload = this.forceUpload;
        if (!uploadRequest.forceUpload) {
            uploadRequest.forceUpload = this.errorRetries >= 4;
        }
        uploadRequest.uploadCode = 'id-v2';
        this.uploadId(uploadRequest, document);
    }
    needShowRetries(errors) {
        switch (errors) {
            case 'GREEN_CARD_DETECTED':
            case 'ERROR_PROCESS_PDF':
                return false;
            default:
                return true;
        }
    }
    uploadId(uploadRequest, document) {
        let service = this.httpService
            .uploadDocumentId(uploadRequest);
        if (uploadRequest.backId) {
            service = this.httpService.uploadBackId(uploadRequest);
        }
        service
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((event) => {
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            this.unexpectedError(error, document.fileName);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(59000))
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response) {
                this.fileQueue.splice(0, 1);
                if (event.body.errors) {
                    if (event.body.errors === 'VENDOR_CONNECTION_EXCEPTION' || event.body.errors === 'TENANT_UNEXPECTED_ERROR') {
                        this.errorRetries = 3;
                    }
                    this.errorRetries++;
                    this.changeType(event.body.side);
                    this.showErrors(event.body.errorString, event.body.status, this.needShowRetries(event.body.errors), event.body.errorCode);
                    return;
                }
                if (event.body.status) {
                    const status = event.body.status;
                    if (status === 'NB') {
                        this.documentType = 'DRIVER_LICENSE_BACK';
                        this.uploading = false;
                        this.changeType(this.documentType);
                    }
                    else if (status === 'NFNT') {
                        this.documentType = 'DRIVER_LICENSE';
                        this.uploading = false;
                        this.changeType(this.documentType);
                    }
                    else if (status === 'NR') {
                        this.finishUpload(status, undefined);
                    }
                    else if (status === 'OK') {
                        this.finishUpload(status, undefined);
                    }
                }
            }
        }, (error) => {
            this.files.splice(0, 1);
            this.errorRetries++;
            this.uploading = false;
            this.error = 'We are not able to read the document. Please try again!';
        });
    }
    uploadDocument(file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const fileData = yield this.readFileData(file);
            const tenantFile = {
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
            return tenantFile;
        });
    }
    readFileData(file) {
        return new Promise(((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = () => {
                reject(fileReader.error);
            };
            fileReader.readAsDataURL(file);
        }));
    }
    showErrors(reason, status, showRetries = true, errorCode) {
        if (status === 'NR') {
            this.finishUpload(status, undefined);
            return;
        }
        if (showRetries) {
            reason += '<br/><br/>';
            if ((5 - this.errorRetries) > 1) {
                reason += 'You have (' + (5 - this.errorRetries) + ') TRIES left before manual review';
            }
            if ((5 - this.errorRetries) <= 1) {
                reason += 'You have (' + (5 - this.errorRetries) + ') TRY left before manual review';
            }
        }
        this.error = reason;
        this.uploading = false;
        this.errorCode = errorCode;
    }
    unexpectedError(error, fileName) {
        const err = 'Unexpected error has occurred';
        this.finishUpload('NR_ER', err);
    }
    finishUpload(status, error) {
        if (status === 'OK') {
            this.uploadedFinish = true;
        }
        if (status === 'NR') {
            this.finishTitle = 'Thank you for your cooperation!';
            this.finishSubtitle = 'There is some information that needs to be manually verified.' +
                ' Please review your dashboard for any additional documentation/ information that may be needed';
            this.uploadedFinish = true;
        }
        if (status === 'NR_ER') {
            this.finishTitle = 'Thank you for your cooperation!';
            this.finishSubtitle = 'There is some information that needs to be manually verified.' +
                ' Please review your dashboard for any additional documentation/ information that may be needed';
            this.errorText = error;
            this.uploadedFinish = true;
        }
        this.saveInfoInLocalStorage('end-' + this.mainApplication.applicationId, true);
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    uploadTimeOut() {
    }
    onPopState(event) {
        this.backToDashboard();
    }
    closeUploadFinish() {
        this.saveInfoInLocalStorage('end-' + this.mainApplication.applicationId, true);
        this.router
            .navigate(['dashboard/' + this.mainApplication.applicationId + '/upload-documents'])
            .catch(console.log);
    }
    backToDashboard() {
        this.closeUploadFinish();
    }
    uploadMobile() {
        const type = { taskId: this.documentTaskId, idDocumentType: this.getInfoFromLocalStorage('ID' + this.documentTaskId) };
        this.httpService
            .createUploadInPhoneV2(type)
            .subscribe(data => {
            this.router.navigate(['../../upload-mobile/' + this.documentTaskId], { relativeTo: this.activeRoute });
        });
    }
    goBack() {
        this.router
            .navigate(['dashboard/' + this.mainApplication.applicationId + '/document-selector/' + this.documentTaskId])
            .catch(console.log);
    }
    beforeChange($event) {
        if ($event.panelId === 'back-side') {
            $event.preventDefault();
        }
    }
    isDriverLicense() {
        return this.documentType !== 'PASSPORT';
    }
    getInfoFromLocalStorage(key) {
        const info = localStorage.getItem(key);
        return info ? JSON.parse(info) : null;
    }
    /**
     * Save information in the session storage.
     *
     * @param {string} key
     * @param data
     */
    saveInfoInLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    canUploadFromMobile() {
        return this.deviceDetector.isDesktop() && this.documentType !== 'DRIVER_LICENSE_BACK';
    }
    showBack() {
        return !this.uploadedFinish && !this.uploading;
    }
};
UploadIdDocumentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('acc', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordion"])
], UploadIdDocumentComponent.prototype, "ngbAccordion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], UploadIdDocumentComponent.prototype, "onPopState", null);
UploadIdDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-upload-id-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-id-document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-id-document.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-id-document.component.scss */ "./src/app/uploads/id/upload-id-document.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
        ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"]])
], UploadIdDocumentComponent);



/***/ }),

/***/ "./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts ***!
  \************************************************************************/
/*! exports provided: UploadMobileV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMobileV2Component", function() { return UploadMobileV2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let UploadMobileV2Component = class UploadMobileV2Component {
    constructor(httpService, uiService, router, activeRoute) {
        this.httpService = httpService;
        this.uiService = uiService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.baseURl = location.origin + '/upload-mobile/upload/';
        this.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.listenToUrlParams();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.unsubscribeSubject.next(true);
    }
    listenToUrlParams() {
        this.activeRoute
            .params
            .subscribe((params) => {
            const { documentTaskId } = params;
            this.documentTaskId = documentTaskId;
            this.getQrCode();
            this.httpService
                .mainApplication$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribeSubject))
                .subscribe(application => {
                this.mainApplication = application;
                this.document = application.pendingDocumentTasks.find(task => task.documentTaskId == this.documentTaskId);
                if (this.document == null) {
                    this.router
                        .navigate(['dashboard/' + application.applicationId + '/upload-documents'])
                        .catch(console.log);
                }
                this.taskName = this.document.description + ' ' + this.document.name;
            });
        });
    }
    getQrCode() {
        const type = { taskId: this.documentTaskId, idDocumentType: this.getInfoFromLocalStorage('ID' + this.documentTaskId) };
        this.httpService
            .createUploadInPhoneV2(type)
            .subscribe(data => {
            this.baseURl = this.baseURl + data.token;
            this.qrCode = data.token;
        });
    }
    continue() {
        this.httpService
            .getApplicationById(this.mainApplication.applicationId.toString())
            .subscribe(() => {
            this.router.navigate(['dashboard/' + this.mainApplication.applicationId + '/upload-documents']);
        });
    }
    goBack() {
        this.router.navigate(['/uploads/' + this.mainApplication.applicationId + '/id', this.documentTaskId]);
    }
    getInfoFromLocalStorage(key) {
        const info = localStorage.getItem(key);
        return info ? JSON.parse(info) : null;
    }
};
UploadMobileV2Component.ctorParameters = () => [
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UploadMobileV2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-upload-mobile-v2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-mobile-v2.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/id/upload-mobile/upload-mobile-v2.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-mobile-v2.scss */ "./src/app/uploads/id/upload-mobile/upload-mobile-v2.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], UploadMobileV2Component);



/***/ }),

/***/ "./src/app/uploads/id/upload-mobile/upload-mobile-v2.scss":
/*!****************************************************************!*\
  !*** ./src/app/uploads/id/upload-mobile/upload-mobile-v2.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = (".instruction-id img {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9pZC91cGxvYWQtbW9iaWxlL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXHVwbG9hZHNcXGlkXFx1cGxvYWQtbW9iaWxlXFx1cGxvYWQtbW9iaWxlLXYyLnNjc3MiLCJzcmMvYXBwL3VwbG9hZHMvaWQvdXBsb2FkLW1vYmlsZS91cGxvYWQtbW9iaWxlLXYyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdXBsb2Fkcy9pZC91cGxvYWQtbW9iaWxlL3VwbG9hZC1tb2JpbGUtdjIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5zdHJ1Y3Rpb24taWR7XHJcbiAgaW1ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuIiwiLmluc3RydWN0aW9uLWlkIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");
=======
/* harmony default export */ __webpack_exports__["default"] = (".instruction-id img {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1tb2JpbGUvdXBsb2FkLW1vYmlsZS12Mi5zY3NzIiwic3JjL2FwcC91cGxvYWRzL2lkL3VwbG9hZC1tb2JpbGUvdXBsb2FkLW1vYmlsZS12Mi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvaWQvdXBsb2FkLW1vYmlsZS91cGxvYWQtbW9iaWxlLXYyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbnN0cnVjdGlvbi1pZHtcbiAgaW1ne1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbiIsIi5pbnN0cnVjdGlvbi1pZCBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./src/app/uploads/upload-finish-message/upload-finish-message.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/uploads/upload-finish-message/upload-finish-message.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = (".awesome-item {\n  position: absolute;\n  top: 35%;\n  left: 0%;\n  border-radius: 10px;\n  text-align: center;\n  font-family: Roboto;\n  font-size: 24px;\n  color: black;\n  padding-bottom: 30px;\n  width: 100%;\n}\n.awesome-item .title {\n  font-size: 25px;\n  font-weight: bold;\n}\n.awesome-item .subtitle {\n  font-size: 18px;\n}\n.awesome-item .counter {\n  color: #F33D3D;\n  text-align: center;\n}\n.awesome-item .awesome-img {\n  border-radius: 50%;\n  margin: 10% auto 3%;\n  max-width: 60%;\n}\n.awesome-item .bold-small-text {\n  font-weight: bold;\n  font-size: 14px;\n}\n.awesome-item .btn-blue {\n  min-height: 50px;\n  padding: 20px 50px;\n}\n@media screen and (max-width: 767px) {\n  .awesome-item {\n    width: 80%;\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy91cGxvYWQtZmluaXNoLW1lc3NhZ2UvQzpcXG9mZmljZVxcVGVuYW50XFxBbmd1bGFyV2l0aENhcGFjaXRvci9zcmNcXGFwcFxcdXBsb2Fkc1xcdXBsb2FkLWZpbmlzaC1tZXNzYWdlXFx1cGxvYWQtZmluaXNoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZHMvdXBsb2FkLWZpbmlzaC1tZXNzYWdlL3VwbG9hZC1maW5pc2gtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNISjtBRE1FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsU0FBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL3VwbG9hZC1maW5pc2gtbWVzc2FnZS91cGxvYWQtZmluaXNoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XHJcbi5hd2Vzb21lLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICBsZWZ0OiAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvdW50ZXIge1xyXG4gICAgY29sb3I6ICNGMzNEM0Q7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXdlc29tZS1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAxMCUgYXV0byAzJTtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLmJvbGQtc21hbGwtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1ibHVle1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5hd2Vzb21lLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiLmF3ZXNvbWUtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXdlc29tZS1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYXdlc29tZS1pdGVtIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hd2Vzb21lLWl0ZW0gLmNvdW50ZXIge1xuICBjb2xvcjogI0YzM0QzRDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF3ZXNvbWUtaXRlbSAuYXdlc29tZS1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTAlIGF1dG8gMyU7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmF3ZXNvbWUtaXRlbSAuYm9sZC1zbWFsbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hd2Vzb21lLWl0ZW0gLmJ0bi1ibHVlIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMjBweCA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXdlc29tZS1pdGVtIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */");
=======
/* harmony default export */ __webpack_exports__["default"] = (".awesome-item {\n  position: absolute;\n  top: 35%;\n  left: 0%;\n  border-radius: 10px;\n  text-align: center;\n  font-family: Roboto;\n  font-size: 24px;\n  color: black;\n  padding-bottom: 30px;\n  width: 100%;\n}\n.awesome-item .title {\n  font-size: 25px;\n  font-weight: bold;\n}\n.awesome-item .subtitle {\n  font-size: 18px;\n}\n.awesome-item .counter {\n  color: #F33D3D;\n  text-align: center;\n}\n.awesome-item .awesome-img {\n  border-radius: 50%;\n  margin: 10% auto 3%;\n  max-width: 60%;\n}\n.awesome-item .bold-small-text {\n  font-weight: bold;\n  font-size: 14px;\n}\n.awesome-item .btn-blue {\n  min-height: 50px;\n  padding: 20px 50px;\n}\n@media screen and (max-width: 767px) {\n  .awesome-item {\n    width: 80%;\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWRzL3VwbG9hZC1maW5pc2gtbWVzc2FnZS91cGxvYWQtZmluaXNoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZHMvdXBsb2FkLWZpbmlzaC1tZXNzYWdlL3VwbG9hZC1maW5pc2gtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNISjtBRE1FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsU0FBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL3VwbG9hZC1maW5pc2gtbWVzc2FnZS91cGxvYWQtZmluaXNoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNhc3MvdmFyaWFibGVzXCI7XG4uYXdlc29tZS1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5jb3VudGVyIHtcbiAgICBjb2xvcjogI0YzM0QzRDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYXdlc29tZS1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDEwJSBhdXRvIDMlO1xuICAgIG1heC13aWR0aDogNjAlO1xuICB9XG5cbiAgLmJvbGQtc21hbGwtdGV4dHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuYnRuLWJsdWV7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXdlc29tZS1pdGVtIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxlZnQ6IDEwJTtcblxuICB9XG59XG5cblxuIiwiLmF3ZXNvbWUtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXdlc29tZS1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYXdlc29tZS1pdGVtIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hd2Vzb21lLWl0ZW0gLmNvdW50ZXIge1xuICBjb2xvcjogI0YzM0QzRDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF3ZXNvbWUtaXRlbSAuYXdlc29tZS1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTAlIGF1dG8gMyU7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmF3ZXNvbWUtaXRlbSAuYm9sZC1zbWFsbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hd2Vzb21lLWl0ZW0gLmJ0bi1ibHVlIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMjBweCA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXdlc29tZS1pdGVtIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./src/app/uploads/upload-finish-message/upload-finish-message.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/uploads/upload-finish-message/upload-finish-message.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UploadFinishMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFinishMessageComponent", function() { return UploadFinishMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UploadFinishMessageComponent = class UploadFinishMessageComponent {
    constructor() {
        this.title = 'You are awesome!';
        this.subtitle = 'Your files have been submitted successfully.<br/>' +
            'If we need additional information we will contact you later.';
        this.hasChange = Boolean(0);
        this.button_text = 'Back to the dashboard';
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set auto_closeable(autoCloseable) {
        this.autoCloseable = autoCloseable;
    }
    set setTitle(message) {
        if (message && message !== '') {
            this.title = message;
        }
    }
    set setSubTitle(message) {
        if (message && message !== '') {
            this.subtitle = message;
        }
    }
    set setError(message) {
        if (message && message !== '') {
            this.error = message;
        }
    }
    set buttonText(message) {
        this.button_text = message;
    }
    set autoCloseTime(timeAutoClose) {
        this.timeAutoClose = timeAutoClose;
    }
    close() {
        this.closePopup.emit('finish');
    }
    closeUploadFinish() {
        if (this.auto_closeable) {
            this.closePopup.emit('finish');
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], UploadFinishMessageComponent.prototype, "auto_closeable", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], UploadFinishMessageComponent.prototype, "setTitle", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], UploadFinishMessageComponent.prototype, "setSubTitle", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], UploadFinishMessageComponent.prototype, "setError", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], UploadFinishMessageComponent.prototype, "buttonText", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], UploadFinishMessageComponent.prototype, "autoCloseTime", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UploadFinishMessageComponent.prototype, "closePopup", void 0);
UploadFinishMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-upload-finish-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-finish-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/upload-finish-message/upload-finish-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-finish-message.component.scss */ "./src/app/uploads/upload-finish-message/upload-finish-message.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UploadFinishMessageComponent);



/***/ }),

/***/ "./src/app/uploads/upload-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/uploads/upload-routing.module.ts ***!
  \**************************************************/
/*! exports provided: UploadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRoutingModule", function() { return UploadRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uploads_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploads/upload.component */ "./src/app/uploads/uploads/upload.component.ts");
/* harmony import */ var _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./id/upload-id-document.component */ "./src/app/uploads/id/upload-id-document.component.ts");
/* harmony import */ var _uploads_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploads.guard */ "./src/app/uploads/uploads.guard.ts");
/* harmony import */ var _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./id/upload-mobile/upload-mobile-v2.component */ "./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts");







const routes = [
    {
        path: '',
        component: _uploads_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadsComponent"],
        children: [
            { path: ':applicationId/id/:documentTaskId', component: _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_4__["UploadIdDocumentComponent"], canActivate: [_uploads_guard__WEBPACK_IMPORTED_MODULE_5__["UploadsGuard"]] },
            { path: ':applicationId/upload-mobile/:documentTaskId', component: _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_6__["UploadMobileV2Component"], canActivate: [_uploads_guard__WEBPACK_IMPORTED_MODULE_5__["UploadsGuard"]] },
        ],
    }
];
let UploadRoutingModule = class UploadRoutingModule {
};
UploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _uploads_guard__WEBPACK_IMPORTED_MODULE_5__["UploadsGuard"]
        ]
    })
], UploadRoutingModule);



/***/ }),

/***/ "./src/app/uploads/upload.module.ts":
/*!******************************************!*\
  !*** ./src/app/uploads/upload.module.ts ***!
  \******************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-routing.module */ "./src/app/uploads/upload-routing.module.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./id/upload-id-document.component */ "./src/app/uploads/id/upload-id-document.component.ts");
/* harmony import */ var _uploads_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploads/upload.component */ "./src/app/uploads/uploads/upload.component.ts");
/* harmony import */ var _css_gif_css_gif_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css-gif/css-gif.component */ "./src/app/uploads/css-gif/css-gif.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _upload_finish_message_upload_finish_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-finish-message/upload-finish-message.component */ "./src/app/uploads/upload-finish-message/upload-finish-message.component.ts");
/* harmony import */ var _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./id/upload-mobile/upload-mobile-v2.component */ "./src/app/uploads/id/upload-mobile/upload-mobile-v2.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");















let UploadModule = class UploadModule {
};
UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _id_upload_id_document_component__WEBPACK_IMPORTED_MODULE_6__["UploadIdDocumentComponent"],
            _uploads_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadsComponent"],
            _css_gif_css_gif_component__WEBPACK_IMPORTED_MODULE_8__["CssGifComponent"],
            _upload_finish_message_upload_finish_message_component__WEBPACK_IMPORTED_MODULE_12__["UploadFinishMessageComponent"],
            _id_upload_mobile_upload_mobile_v2_component__WEBPACK_IMPORTED_MODULE_13__["UploadMobileV2Component"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _upload_routing_module__WEBPACK_IMPORTED_MODULE_3__["UploadRoutingModule"],
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__["NgxDropzoneModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__["QRCodeModule"],
        ],
        exports: []
    })
], UploadModule);



/***/ }),

/***/ "./src/app/uploads/uploads.guard.ts":
/*!******************************************!*\
  !*** ./src/app/uploads/uploads.guard.ts ***!
  \******************************************/
/*! exports provided: UploadsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsGuard", function() { return UploadsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");








let UploadsGuard = class UploadsGuard {
    constructor(authService, httpService, uiService, router) {
        this.authService = authService;
        this.httpService = httpService;
        this.uiService = uiService;
        this.router = router;
    }
    canActivate(next, state) {
        // this.authService.redirectUrl = state.url;
        const { applicationId, documentTaskId } = next.params;
        this.uiService
            .showInfo({
            title: 'Please Wait',
            message: 'Getting Task Application Information',
        });
        return this.httpService
            .getApplicationById(applicationId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            this.application = response;
            let hasPendingTask = this.application.pendingDocumentTasks
                // tslint:disable-next-line:triple-equals
                .find(task => task.documentTaskId == documentTaskId) ? true : false;
            if (this.application.proofOfIncomeManual) {
                for (const proof of this.application.proofOfIncomeManual) {
                    if (hasPendingTask === false && (proof.task.find(task => task.documentTaskId == documentTaskId)) ? true : false) {
                        hasPendingTask = true;
                    }
                }
            }
            return hasPendingTask;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((httpError) => {
            console.log(httpError);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(applicationExists => {
            if (!applicationExists) {
                this.router
                    .navigate(['/dashboard', applicationId, 'upload-documents'])
                    .catch(console.log);
            }
        }));
    }
};
UploadsGuard.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UploadsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _ui_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UploadsGuard);



/***/ }),

/***/ "./src/app/uploads/uploads/upload.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/uploads/uploads/upload.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy91cGxvYWRzL0M6XFxvZmZpY2VcXFRlbmFudFxcQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjXFxhcHBcXHVwbG9hZHNcXHVwbG9hZHNcXHVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy91cGxvYWRzL3VwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRzL3VwbG9hZHMvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIiwiYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */");
=======
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5qZWV2c2FpbmkvRGVza3RvcC9Ob2RlSlMvQW5ndWxhcldpdGhDYXBhY2l0b3Ivc3JjL2FwcC91cGxvYWRzL3VwbG9hZHMvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWRzL3VwbG9hZHMvdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvdXBsb2Fkcy91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuIiwiYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */");
>>>>>>> c0ac9275dc0b2b4a2d72274fddb999f5b1790bf5

/***/ }),

/***/ "./src/app/uploads/uploads/upload.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/uploads/uploads/upload.component.ts ***!
  \*****************************************************/
/*! exports provided: UploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsComponent", function() { return UploadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/ui.service */ "./src/app/ui/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UploadsComponent = class UploadsComponent {
    constructor(uiService) {
        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.website = location.origin;
    }
    ngOnInit() {
    }
    listenToThemeValues() {
        this.uiService
            .smallLogo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$))
            .subscribe(value => {
            this.smallLogo = value ? value : '/assets/tenant-ev-logo-service.svg';
        });
    }
};
UploadsComponent.ctorParameters = () => [
    { type: _ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] }
];
UploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tev-uploads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads/upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "./src/app/uploads/uploads/upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ui_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]])
], UploadsComponent);



/***/ })

}]);
//# sourceMappingURL=uploads-upload-module-es2015.js.map
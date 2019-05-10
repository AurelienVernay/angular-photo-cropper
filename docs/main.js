(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"mat-app-background full-height\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"space-between stretch\"\n    fxLayoutGap=\"1em\"\n>\n    <app-header></app-header>\n    <app-picture-loader\n        *ngIf=\"!pictureSource; else imageEditor\"\n        (pictureLoaded)=\"onPictureLoaded($event)\"\n    ></app-picture-loader>\n    <ng-template #imageEditor>\n        <app-image-editor\n            [(pictureSource)]=\"pictureSource\"\n            fxFlex=\"3 0 auto\"\n            fxLayout=\"column\"\n            fxLayoutAlign=\"center stretch\"\n        ></app-image-editor>\n    </ng-template>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#picture-canvas {\n  border: 1px solid black; }\n\n#pictureCanvas::before {\n  content: 'test'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxhbmd1bGFyLXBob3RvLWNyb3BwZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaWN0dXJlLWNhbnZhcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNwaWN0dXJlQ2FudmFzOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICd0ZXN0Jztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @class AppComponent
 * Central logic of the app - picture editing and exporting happens here
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pictureSource = null;
    }
    AppComponent.prototype.onPictureLoaded = function (source) {
        this.pictureSource = source;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./image-editor/image-editor.component */ "./src/app/image-editor/image-editor.component.ts");
/* harmony import */ var _image_editor_save_file_popup_save_file_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./image-editor/save-file-popup/save-file-popup.component */ "./src/app/image-editor/save-file-popup/save-file-popup.component.ts");
/* harmony import */ var _picture_loader_picture_loader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./picture-loader/picture-loader.component */ "./src/app/picture-loader/picture-loader.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");


























var matModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _picture_loader_picture_loader_component__WEBPACK_IMPORTED_MODULE_24__["PictureLoaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_25__["ToolbarComponent"],
                _image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_22__["ImageEditorComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _image_editor_save_file_popup_save_file_popup_component__WEBPACK_IMPORTED_MODULE_23__["SaveFilePopupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ].concat(matModules),
            entryComponents: [_image_editor_save_file_popup_save_file_popup_component__WEBPACK_IMPORTED_MODULE_23__["SaveFilePopupComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<div class=\"footer text-muted\">\n    <p>\n        Cette application a été réalisée avec le framework\n        <a href=\"https://angular.io\">Angular</a>, ainsi que la bibliothèque\n        <a\n            href=\"https://github.com/fengyuanchen/cropperjs/blob/master/README.md\"\n            target=\"_blank\"\n            rel=\"noopener noreferer\"\n            >Cropper.js</a\n        >\n        et les bibliothèques UI\n        <a\n            href=\"https://github.com/angular/flex-layout\"\n            target=\"_blank\"\n            rel=\"noopener noreferer\"\n            >Angular Flex Layout</a\n        >\n        et\n        <a\n            href=\"https://material.angular.io\"\n            target=\"_blank\"\n            rel=\"noopener noreferer\"\n            >Angular Material</a\n        >.\n    </p>\n    <p>\n        <img src=\"./assets/logo-mini.svg\" height=\"32\" />\n        2019 - Fait par Aurélien VERNAY (visitez mon\n        <a href=\"https://aurelienvernay.github.io\">site web</a> pour en savoir\n        plus)\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 1em 0;\n  background-color: #f5f5f5;\n  width: 100%; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxwcm9qZWN0c1xcYW5ndWxhci1waG90by1jcm9wcGVyL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcGFkZGluZzogMWVtIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Footer component - dumb component
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n    class=\"ribbon\"\n    target=\"_blank\"\n    href=\"https://github.com/aurelienvernay/angular-photo-cropper\"\n    ><img\n        width=\"129\"\n        height=\"129\"\n        src=\"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149\"\n        class=\"attachment-full size-full\"\n        alt=\"Fork me on GitHub\"\n        data-recalc-dims=\"1\"\n/></a>\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"1em\">\n    <a href=\"https://aurelienvernay.github.io\">\n        <img\n            src=\"./assets/logo.png\"\n            style=\"max-width: 100%; max-height: 100px;margin: 0 0 auto 0;\"\n        />\n    </a>\n    <h1>Angular Photo Editor</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ribbon {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxwcm9qZWN0c1xcYW5ndWxhci1waG90by1jcm9wcGVyL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmliYm9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/image-editor/image-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-editor/image-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar\n    fxFlex=\"1 0 auto\"\n    class=\"full-width\"\n    (toggleCrop)=\"onToggleCrop()\"\n    (rotate)=\"onRotate($event)\"\n    (saveFile)=\"onSaveFile($event)\"\n    (zoom)=\"onZoom($event)\"\n    (resetZoom)=\"onResetZoom()\"\n    (closeFile)=\"onCloseFile()\"\n    (copyToClipboard)=\"onCopyToClipboard()\"\n    [loading]=\"pictureLoading\"\n></app-toolbar>\n<div\n    class=\"container\"\n    fxFlex=\"5 0 auto\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center stretch\"\n>\n    <img id=\"picture\" #picture />\n</div>\n<button\n    *ngIf=\"cropping\"\n    (click)=\"onCrop()\"\n    id=\"confirm-crop\"\n    mat-raised-button\n    fxFlex=\"1 0 auto\"\n    fxFlexAlign=\"center\"\n>\n    <mat-icon>crop</mat-icon> Rogner\n</button>\n<a id=\"download-anchor\" #downloadAnchor href=\"\" download=\"untitled\"></a>\n"

/***/ }),

/***/ "./src/app/image-editor/image-editor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-editor/image-editor.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 1em !important; }\n\n#picture {\n  max-width: 100%; }\n\n#confirm-crop {\n  position: relative;\n  top: -3em;\n  z-index: 999; }\n\n#download-anchor {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtZWRpdG9yL0M6XFxwcm9qZWN0c1xcYW5ndWxhci1waG90by1jcm9wcGVyL3NyY1xcYXBwXFxpbWFnZS1lZGl0b3JcXGltYWdlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVksRUFBQTs7QUFFaEI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1lZGl0b3IvaW1hZ2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxZW0gIWltcG9ydGFudDtcbn1cblxuI3BpY3R1cmUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbiNjb25maXJtLWNyb3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zZW07XG4gICAgei1pbmRleDogOTk5O1xufVxuI2Rvd25sb2FkLWFuY2hvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/image-editor/image-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-editor/image-editor.component.ts ***!
  \********************************************************/
/*! exports provided: ImageEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditorComponent", function() { return ImageEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _save_file_popup_save_file_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-file-popup/save-file-popup.component */ "./src/app/image-editor/save-file-popup/save-file-popup.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var ImageEditorComponent = /** @class */ (function () {
    function ImageEditorComponent(dialog, snackBar) {
        var _this = this;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.pictureSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._ready = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._cropping = false;
        this.cropperConfig = {
            viewMode: 2,
            dragMode: 'none',
            initialAspectRatio: 16 / 9,
            zoomOnTouch: false,
            zoomOnWheel: false,
            center: false,
            zoomable: true,
            movable: true,
            background: false,
            toggleDragModeOnDblclick: false,
            width: 800,
            ready: function () { return _this._ready.next(true); },
        };
    }
    Object.defineProperty(ImageEditorComponent.prototype, "cropping", {
        get: function () {
            return this._cropping;
        },
        set: function (value) {
            this._cropping = value;
            if (this._cropping) {
                this.cropper.crop();
            }
            else {
                this.cropper.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    ImageEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ready.subscribe(function (ready) { return (ready ? _this.cropper.clear() : null); });
        this.picture.nativeElement.onload = function () {
            _this.cropper = new Cropper(_this.picture.nativeElement, _this.cropperConfig);
        };
        this.picture.nativeElement.src = this.pictureSource;
    };
    ImageEditorComponent.prototype.ngOnDestroy = function () { };
    ImageEditorComponent.prototype.onZoom = function (ratio) {
        this.cropper.zoom(ratio);
    };
    ImageEditorComponent.prototype.onRotate = function (degree) {
        this.cropper.rotate(degree).zoomTo(1);
    };
    ImageEditorComponent.prototype.onToggleCrop = function () {
        this.cropping = !this.cropping;
    };
    ImageEditorComponent.prototype.onCrop = function () {
        this.cropper = this.cropper
            .replace(this.cropper.getCroppedCanvas().toDataURL())
            .clear();
        this.cropping = false;
    };
    ImageEditorComponent.prototype.onSaveFile = function () {
        var _this = this;
        //open save file dialog
        this.dialogRef = this.dialog.open(_save_file_popup_save_file_popup_component__WEBPACK_IMPORTED_MODULE_3__["SaveFilePopupComponent"]);
        this.dialogRef.afterClosed().subscribe(function (filename) {
            if (filename) {
                _this.downloadAnchor.nativeElement.href = _this.cropper
                    .getCroppedCanvas()
                    .toDataURL('image/png');
                _this.downloadAnchor.nativeElement.download = filename;
                _this.downloadAnchor.nativeElement.click();
            }
        });
    };
    ImageEditorComponent.prototype.onCopyToClipboard = function () {
        var canvas = this.cropper.getCroppedCanvas();
        canvas.setAttribute('contenteditable', 'true');
        var body = document.body;
        var range;
        if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(canvas);
            range.select();
        }
        else if (window.getSelection) {
            var selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(canvas);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        canvas.removeAttribute('contenteditable');
        this.snackBar.open("L'image a \u00E9t\u00E9 copi\u00E9e dans le presse-papiers !", null, {
            duration: 3000,
        });
    };
    ImageEditorComponent.prototype.onCloseFile = function () {
        this.pictureSourceChange.emit(null);
    };
    ImageEditorComponent.prototype.onResetZoom = function () {
        this.cropper.zoomTo(1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageEditorComponent.prototype, "pictureSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageEditorComponent.prototype, "pictureSourceChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picture'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ImageEditorComponent.prototype, "picture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadAnchor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ImageEditorComponent.prototype, "downloadAnchor", void 0);
    ImageEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-editor',
            template: __webpack_require__(/*! ./image-editor.component.html */ "./src/app/image-editor/image-editor.component.html"),
            styles: [__webpack_require__(/*! ./image-editor.component.scss */ "./src/app/image-editor/image-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ImageEditorComponent);
    return ImageEditorComponent;
}());



/***/ }),

/***/ "./src/app/image-editor/save-file-popup/save-file-popup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/image-editor/save-file-popup/save-file-popup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enregistrer l'image</h1>\n<form [formGroup]=\"fg\">\n    <mat-form-field>\n        <mat-label>Nom du fichier</mat-label>\n        <input matInput type=\"text\" placeholder=\"\" formControlName=\"filename\" />\n    </mat-form-field>\n</form>\n<mat-dialog-actions>\n    <button\n        mat-raised-button\n        color=\"primary\"\n        [disabled]=\"!fg.valid\"\n        [mat-dialog-close]=\"fg.get('filename').value\"\n    >\n        <mat-icon>save</mat-icon>Enregistrer\n    </button>\n    <button mat-raised-button color=\"warn\" mat-dialog-close>\n        <mat-icon>close</mat-icon>Annuler\n    </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/image-editor/save-file-popup/save-file-popup.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/image-editor/save-file-popup/save-file-popup.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWVkaXRvci9zYXZlLWZpbGUtcG9wdXAvc2F2ZS1maWxlLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/image-editor/save-file-popup/save-file-popup.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/image-editor/save-file-popup/save-file-popup.component.ts ***!
  \***************************************************************************/
/*! exports provided: SaveFilePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFilePopupComponent", function() { return SaveFilePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SaveFilePopupComponent = /** @class */ (function () {
    function SaveFilePopupComponent(fb) {
        this.fb = fb;
        this.fg = this.fb.group({
            filename: this.fb.control('Untitled', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    SaveFilePopupComponent.prototype.ngOnInit = function () { };
    SaveFilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-save-file-popup',
            template: __webpack_require__(/*! ./save-file-popup.component.html */ "./src/app/image-editor/save-file-popup/save-file-popup.component.html"),
            styles: [__webpack_require__(/*! ./save-file-popup.component.scss */ "./src/app/image-editor/save-file-popup/save-file-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SaveFilePopupComponent);
    return SaveFilePopupComponent;
}());



/***/ }),

/***/ "./src/app/picture-loader/picture-loader.component.html":
/*!**************************************************************!*\
  !*** ./src/app/picture-loader/picture-loader.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Ouvrir une image</h2>\n<p>Choississez la source d'importation de l'image :</p>\n<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"loadMethod\">\n    <mat-button-toggle value=\"file\">\n        <mat-icon>photo</mat-icon> Depuis un fichier\n    </mat-button-toggle>\n    <mat-button-toggle value=\"link\">\n        <mat-icon>link</mat-icon> Depuis une URL\n    </mat-button-toggle>\n</mat-button-toggle-group>\n<div [ngSwitch]=\"loadMethod\">\n    <ng-container *ngSwitchCase=\"'file'\">\n        <div class=\"padding\">\n            <p>\n                Cliquez sur le bouton suivant pour télécharger une image de\n                votre ordinateur :\n            </p>\n            <button mat-raised-button color=\"primary\" (click)=\"loadPicture()\">\n                <mat-icon>photo</mat-icon> Charger une image\n            </button>\n        </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'link'\">\n        <form\n            class=\"padding\"\n            [formGroup]=\"fg\"\n            fxLayout=\"column\"\n            fxLayoutAlign=\"space-between center\"\n            fxLayoutGap=\"1em\"\n        >\n            <p>\n                Saisissez une URL dirigeant vers une image dans le champ\n                ci-dessous, et cliquer sur le bouton <em>Charger</em> :\n            </p>\n            <mat-form-field class=\"full-width\">\n                <mat-label>URL de l'image</mat-label>\n                <input type=\"url\" matInput formControlName=\"link\" />\n                <mat-error *ngIf=\"fg.controls['link'].invalid\">{{\n                    getErrorMessage()\n                }}</mat-error>\n            </mat-form-field>\n            <button\n                [disabled]=\"!fg.valid\"\n                mat-raised-button\n                color=\"primary\"\n                type=\"submit\"\n                (click)=\"onUploadByLink()\"\n            >\n                <mat-icon>cloud_upload</mat-icon> Charger\n            </button>\n        </form>\n    </ng-container>\n</div>\n<input\n    id=\"fileInput\"\n    type=\"file\"\n    accept=\".jpeg, .png, .gif, image/gif, image/png, image/jpeg\"\n    (change)=\"onFileUploaded($event)\"\n/>\n"

/***/ }),

/***/ "./src/app/picture-loader/picture-loader.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/picture-loader/picture-loader.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fileInput {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZS1sb2FkZXIvQzpcXHByb2plY3RzXFxhbmd1bGFyLXBob3RvLWNyb3BwZXIvc3JjXFxhcHBcXHBpY3R1cmUtbG9hZGVyXFxwaWN0dXJlLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BpY3R1cmUtbG9hZGVyL3BpY3R1cmUtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbGVJbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/picture-loader/picture-loader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/picture-loader/picture-loader.component.ts ***!
  \************************************************************/
/*! exports provided: PictureLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureLoaderComponent", function() { return PictureLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * Picture Loader Component
 * Used to load image into canvas from various sources
 */
var PictureLoaderComponent = /** @class */ (function () {
    function PictureLoaderComponent(fb) {
        this.fb = fb;
        /**
         * load method : from a file or from a link
         * @type 'file' | 'link'
         */
        this.loadMethod = null;
        /**
         * Event emitter used to tell app that content is loading
         */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitter used to tell app that content is loaded
         */
        this.pictureLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * regex used to restrain user input to links (URLs)
         */
        this.linkRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        this.fg = this.fb.group({
            link: this.fb.control(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.linkRegex),
            ]),
        });
    }
    /**
     * @method loadPicture
     * Loads a picture file from system prompt
     */
    PictureLoaderComponent.prototype.loadPicture = function () {
        document.getElementById('fileInput').click();
    };
    /**
     * @method onFileUploaded
     * Callback when file has been selected - load file
     * @param event the event containing the file ref
     */
    PictureLoaderComponent.prototype.onFileUploaded = function (event) {
        var _this = this;
        var file = event.srcElement.files.item(0);
        if (file) {
            this.loading.emit(true);
            var FR = new FileReader();
            FR.onload = function (e) {
                _this.pictureLoaded.emit(e.target.result);
            };
            FR.readAsDataURL(file);
        }
    };
    /**
     * @method getErrorMessage
     * @returns the error message to display according to error in form group
     */
    PictureLoaderComponent.prototype.getErrorMessage = function () {
        return this.fg.controls['link'].hasError('pattern')
            ? "L'URL doit \u00EAtre valide"
            : this.fg.get('link').hasError('invalid')
                ? "L'URL saisie ne pointe pas vers une image"
                : "L'URL est requise";
    };
    /**
     * @method onUploadByLink
     * loads picture by URL input
     */
    PictureLoaderComponent.prototype.onUploadByLink = function () {
        this.pictureLoaded.emit(this.fg.get('link').value);
    };
    /**
     * @method drawImage
     * draws image loaded in canvas. Ensure display ratio is correct
     * @param source the source of the image to draw
     */
    PictureLoaderComponent.prototype.drawImage = function (source) {
        var _this = this;
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.addEventListener('load', function () { });
        img.addEventListener('error', function (errorDetails) {
            console.error('error occured ! ', errorDetails);
            _this.fg.get('link').setErrors({
                invalid: true,
            });
        });
        img.src = source;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PictureLoaderComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PictureLoaderComponent.prototype, "pictureLoaded", void 0);
    PictureLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-picture-loader',
            template: __webpack_require__(/*! ./picture-loader.component.html */ "./src/app/picture-loader/picture-loader.component.html"),
            styles: [__webpack_require__(/*! ./picture-loader.component.scss */ "./src/app/picture-loader/picture-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PictureLoaderComponent);
    return PictureLoaderComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<mat-toolbar role=\"heading\">\n    <mat-toolbar-row\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-between center\"\n        fxLayoutGap=\"1em\"\n        fxLayoutGap.lt-sm=\"1px\"\n    >\n        <span>\n            <mat-menu #toolbarMenu>\n                <button mat-menu-item (click)=\"clickClose()\">\n                    <mat-icon>close</mat-icon> Fermer\n                </button>\n                <button mat-menu-item (click)=\"clickSave()\">\n                    <mat-icon>save</mat-icon> Enregistrer\n                </button>\n                <!-- Disabled for now , Clipboard API experimental\n                <button mat-menu-item (click)=\"clickCopy()\">\n                    <mat-icon>file_copy</mat-icon> Copier dans le presse-papiers\n                </button>\n                -->\n            </mat-menu>\n            <button mat-button [matMenuTriggerFor]=\"toolbarMenu\">\n                Image\n            </button>\n        </span>\n        <span\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center center\"\n            fxLayoutGap=\"1em\"\n            fxLayoutGap.lt-sm=\"1px\"\n        >\n            <button\n                mat-raised-button\n                color=\"primary\"\n                (click)=\"clickZoomOut()\"\n                matTooltip=\"Dézoomer\"\n                [disabled]=\"loading\"\n            >\n                <mat-icon>zoom_out</mat-icon>\n            </button>\n            <button\n                mat-raised-button\n                color=\"primary\"\n                (click)=\"clickZoomIn()\"\n                matTooltip=\"Zoomer\"\n                [disabled]=\"loading\"\n            >\n                <mat-icon>zoom_in</mat-icon>\n            </button>\n            <button\n                mat-raised-button\n                color=\"primary\"\n                (click)=\"clickResetZoom()\"\n                matTooltip=\"Revenir au zoom initial\"\n                [disabled]=\"loading\"\n            >\n                <mat-icon>pageview</mat-icon>\n            </button>\n            <button\n                mat-raised-button\n                color=\"primary\"\n                (click)=\"rotateLeft()\"\n                matTooltip=\"Retourner vers la gauche (90°)\"\n                [disabled]=\"loading\"\n            >\n                <mat-icon>rotate_left</mat-icon>\n            </button>\n            <button\n                mat-raised-button\n                color=\"primary\"\n                (click)=\"rotateRight()\"\n                matTooltip=\"Retourner vers la droite (90°)\"\n                [disabled]=\"loading\"\n            >\n                <mat-icon>rotate_right</mat-icon>\n            </button>\n            <button\n                mat-raised-button\n                color=\"primary\"\n                (click)=\"toggleCropping()\"\n                matTooltip=\"Découper\"\n            >\n                <mat-icon>crop</mat-icon>\n            </button>\n        </span>\n        <span></span>\n    </mat-toolbar-row>\n</mat-toolbar>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.scss":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Toolbar component - sends event when button are clicked
 */
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        /**
         * Input for cropping - in order to keep the same state between appComponent and this one
         * @type boolean
         */
        this.loading = false;
        /**
         * Event fired when the boolean changes value - used for 2-way data-binding
         * @type EventEmitter
         */
        this.toggleCrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event fired when user wants to rotate picture
         * @type EventEmitter
         */
        this.rotate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event fired when user wants to save picture into file (export)
         * @type EventEmitter
         */
        this.saveFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.copyToClipboard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * name of exported file
         * @type string
         */
        this.filename = 'Image sans titre';
    }
    /**
     * Emits value to app component (that user wants to toggle on/off cropping)
     * @method toggleCropping
     */
    ToolbarComponent.prototype.toggleCropping = function () {
        this.toggleCrop.emit();
    };
    /**
     * Emits value to app component (that user wants to rotate picture on the left)
     * @method rotateLeft
     */
    ToolbarComponent.prototype.rotateLeft = function () {
        this.rotate.emit(-90);
    };
    /**
     * Emits value to app component (that user wants to rotate picture on the right)
     * @method rotateRight
     */
    ToolbarComponent.prototype.rotateRight = function () {
        this.rotate.emit(90);
    };
    /**
     * Emits value to app component (that user wants to save file)
     * @method save
     */
    ToolbarComponent.prototype.save = function () {
        this.saveFile.emit(this.filename);
    };
    /**
     *
     */
    ToolbarComponent.prototype.clickZoomIn = function () {
        this.zoom.emit(0.1);
    };
    /**
     *
     */
    ToolbarComponent.prototype.clickZoomOut = function () {
        this.zoom.emit(-0.1);
    };
    ToolbarComponent.prototype.clickResetZoom = function () {
        this.resetZoom.emit();
    };
    ToolbarComponent.prototype.clickSave = function () {
        this.saveFile.emit(this.filename);
    };
    ToolbarComponent.prototype.clickClose = function () {
        this.closeFile.emit();
    };
    ToolbarComponent.prototype.clickCopy = function () {
        this.copyToClipboard.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "toggleCrop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "rotate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "saveFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "zoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "resetZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "closeFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "copyToClipboard", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\angular-photo-cropper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
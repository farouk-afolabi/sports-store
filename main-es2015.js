(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app",
                template: "<router-outlet></router-outlet>"
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _store_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeFirst.guard */ "./src/app/storeFirst.guard.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                {
                    path: "store", component: _store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"],
                    canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                },
                {
                    path: "cart", component: _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_6__["CartDetailComponent"],
                    canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                },
                {
                    path: "checkout", component: _store_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"],
                    canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                },
                {
                    path: "admin",
                    loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts"))
                        .then(m => m.AdminModule),
                    canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                },
                { path: "**", redirectTo: "/store" }
            ]),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["StoreModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                        {
                            path: "store", component: _store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"],
                            canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                        },
                        {
                            path: "cart", component: _store_cartDetail_component__WEBPACK_IMPORTED_MODULE_6__["CartDetailComponent"],
                            canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                        },
                        {
                            path: "checkout", component: _store_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"],
                            canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                        },
                        {
                            path: "admin",
                            loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts"))
                                .then(m => m.AdminModule),
                            canActivate: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]]
                        },
                        { path: "**", redirectTo: "/store" }
                    ]),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })],
                providers: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_8__["StoreFirstGuard"]],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/model/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");



class AuthService {
    constructor(datasource) {
        this.datasource = datasource;
    }
    authenticate(username, password) {
        return this.datasource.authenticate(username, password);
    }
    get authenticated() {
        return this.datasource.auth_token != null;
    }
    clear() {
        this.datasource.auth_token = null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/cart.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/cart.model.ts ***!
  \*************************************/
/*! exports provided: Cart, CartLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartLine", function() { return CartLine; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Cart {
    constructor() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    addLine(product, quantity = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }
    updateQuantity(product, quantity) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }
    removeLine(id) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
        });
    }
}
Cart.ɵfac = function Cart_Factory(t) { return new (t || Cart)(); };
Cart.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Cart, factory: Cart.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class CartLine {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    get lineTotal() {
        return this.quantity * this.product.price;
    }
}


/***/ }),

/***/ "./src/app/model/connection.service.ts":
/*!*********************************************!*\
  !*** ./src/app/model/connection.service.ts ***!
  \*********************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ConnectionService {
    constructor() {
        this.connEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        window.addEventListener("online", (e) => this.handleConnectionChange(e));
        window.addEventListener("offline", (e) => this.handleConnectionChange(e));
    }
    handleConnectionChange(event) {
        this.connEvents.next(this.connected);
    }
    get connected() {
        return window.navigator.onLine;
    }
    get Changes() {
        return this.connEvents;
    }
}
ConnectionService.ɵfac = function ConnectionService_Factory(t) { return new (t || ConnectionService)(); };
ConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectionService, factory: ConnectionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var _order_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/model/auth.service.ts");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./connection.service */ "./src/app/model/connection.service.ts");











class ModelModule {
}
ModelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModelModule });
ModelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModelModule_Factory(t) { return new (t || ModelModule)(); }, providers: [_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"], _cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"], _order_model__WEBPACK_IMPORTED_MODULE_4__["Order"], _order_repository__WEBPACK_IMPORTED_MODULE_5__["OrderRepository"],
        { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_2__["StaticDataSource"], useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_6__["RestDataSource"] },
        _rest_datasource__WEBPACK_IMPORTED_MODULE_6__["RestDataSource"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _connection_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionService"]], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModelModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
                providers: [_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"], _cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"], _order_model__WEBPACK_IMPORTED_MODULE_4__["Order"], _order_repository__WEBPACK_IMPORTED_MODULE_5__["OrderRepository"],
                    { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_2__["StaticDataSource"], useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_6__["RestDataSource"] },
                    _rest_datasource__WEBPACK_IMPORTED_MODULE_6__["RestDataSource"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _connection_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.model */ "./src/app/model/cart.model.ts");



class Order {
    constructor(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}
Order.ɵfac = function Order_Factory(t) { return new (t || Order)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
Order.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Order, factory: Order.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Order, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/order.repository.ts":
/*!*******************************************!*\
  !*** ./src/app/model/order.repository.ts ***!
  \*******************************************/
/*! exports provided: OrderRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRepository", function() { return OrderRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");



class OrderRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders);
    }
    getOrders() {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    saveOrder(order) {
        return this.dataSource.saveOrder(order);
    }
    updateOrder(order) {
        this.dataSource.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.
                findIndex(o => o.id == order.id), 1, order);
        });
    }
    deleteOrder(id) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
        });
    }
}
OrderRepository.ɵfac = function OrderRepository_Factory(t) { return new (t || OrderRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
OrderRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderRepository, factory: OrderRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/product.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/product.model.ts ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/model/product.repository.ts":
/*!*********************************************!*\
  !*** ./src/app/model/product.repository.ts ***!
  \*********************************************/
/*! exports provided: ProductRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRepository", function() { return ProductRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/model/rest.datasource.ts");



class ProductRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }
    getProducts(category = null) {
        return this.products
            .filter(p => category == null || category == p.category);
    }
    getProduct(id) {
        return this.products.find(p => p.id == id);
    }
    getCategories() {
        return this.categories;
    }
    saveProduct(product) {
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product)
                .subscribe(p => this.products.push(p));
        }
        else {
            this.dataSource.updateProduct(product)
                .subscribe(p => {
                this.products.splice(this.products.
                    findIndex(p => p.id == product.id), 1, product);
            });
        }
    }
    deleteProduct(id) {
        this.dataSource.deleteProduct(id).subscribe(p => {
            this.products.splice(this.products.
                findIndex(p => p.id == id), 1);
        });
    }
}
ProductRepository.ɵfac = function ProductRepository_Factory(t) { return new (t || ProductRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
ProductRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductRepository, factory: ProductRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/rest.datasource.ts":
/*!******************************************!*\
  !*** ./src/app/model/rest.datasource.ts ***!
  \******************************************/
/*! exports provided: RestDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataSource", function() { return RestDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





const PROTOCOL = "http";
const PORT = 3500;
class RestDataSource {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        // this.baseUrl = "/api/"
    }
    getProducts() {
        return this.http.get(this.baseUrl + "products");
    }
    saveOrder(order) {
        return this.http.post(this.baseUrl + "orders", order);
    }
    authenticate(user, pass) {
        return this.http.post(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }
    saveProduct(product) {
        return this.http.post(this.baseUrl + "products", product, this.getOptions());
    }
    updateProduct(product) {
        return this.http.put(`${this.baseUrl}products/${product.id}`, product, this.getOptions());
    }
    deleteProduct(id) {
        return this.http.delete(`${this.baseUrl}products/${id}`, this.getOptions());
    }
    getOrders() {
        return this.http.get(this.baseUrl + "orders", this.getOptions());
    }
    deleteOrder(id) {
        return this.http.delete(`${this.baseUrl}orders/${id}`, this.getOptions());
    }
    updateOrder(order) {
        return this.http.put(`${this.baseUrl}orders/${order.id}`, order, this.getOptions());
    }
    getOptions() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        };
    }
}
RestDataSource.ɵfac = function RestDataSource_Factory(t) { return new (t || RestDataSource)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RestDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestDataSource, factory: RestDataSource.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestDataSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/static.datasource.ts":
/*!********************************************!*\
  !*** ./src/app/model/static.datasource.ts ***!
  \********************************************/
/*! exports provided: StaticDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataSource", function() { return StaticDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/model/product.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class StaticDataSource {
    constructor() {
        this.products = [
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
            new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
        ];
    }
    getProducts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([this.products]);
    }
    saveOrder(order) {
        console.log(JSON.stringify(order));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([order]);
    }
}
StaticDataSource.ɵfac = function StaticDataSource_Factory(t) { return new (t || StaticDataSource)(); };
StaticDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaticDataSource, factory: StaticDataSource.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticDataSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/cartDetail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/store/cartDetail.component.ts ***!
  \***********************************************/
/*! exports provided: CartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailComponent", function() { return CartDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _model_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/connection.service */ "./src/app/model/connection.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function CartDetailComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your cart is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartDetailComponent_tr_22_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const line_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cart.updateQuantity(line_r16.product, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailComponent_tr_22_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const line_r16 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.cart.removeLine(line_r16.product.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", line_r16.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r16.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 4, line_r16.product.price, "USD", "symbol", "2.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 9, line_r16.lineTotal, "USD", "symbol", "2.2-2"), " ");
} }
class CartDetailComponent {
    constructor(cart, connection) {
        this.cart = cart;
        this.connection = connection;
        this.connected = true;
        this.connected = this.connection.connected;
        connection.Changes.subscribe((state) => this.connected = state);
    }
}
CartDetailComponent.ɵfac = function CartDetailComponent_Factory(t) { return new (t || CartDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"])); };
CartDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartDetailComponent, selectors: [["ng-component"]], decls: 37, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "bg-dark", "text-white"], [1, "navbar-brand"], [1, "col", "mt-2"], [1, "text-center"], [1, "table", "table-bordered", "table-striped", "p-2"], [1, "text-right"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "text-right"], [1, "col"], ["routerLink", "/store", 1, "btn", "btn-primary", "m-1"], ["routerLink", "/checkout", 1, "btn", "btn-secondary", "m-1", 3, "disabled"], ["colspan", "4", 1, "text-center"], ["type", "number", 1, "form-control-sm", 2, "width", "5em", 3, "value", "change"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function CartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SPORTS STORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CartDetailComponent_tr_21_Template, 3, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CartDetailComponent_tr_22_Template, 14, 14, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Continue Shopping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.lines.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.lines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](29, 5, ctx.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.lines.length == 0 || !ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.connected ? "Checkout" : "Offline", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "cartDetail.component.html"
            }]
    }], function () { return [{ type: _model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"] }, { type: _model_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/cartSummary.component.ts":
/*!************************************************!*\
  !*** ./src/app/store/cartSummary.component.ts ***!
  \************************************************/
/*! exports provided: CartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function() { return CartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function CartSummaryComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r12.cart.itemCount, " item(s) ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 2, ctx_r12.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
} }
function CartSummaryComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (empty) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartSummaryComponent {
    constructor(cart) {
        this.cart = cart;
    }
}
CartSummaryComponent.ɵfac = function CartSummaryComponent_Factory(t) { return new (t || CartSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
CartSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartSummaryComponent, selectors: [["cart-summary"]], decls: 7, vars: 3, consts: [[1, "float-right"], [4, "ngIf"], ["routerLink", "/cart", 1, "btn", "btn-sm", "bg-dark", "text-white", 3, "disabled"], [1, "fa", "fa-shopping-cart"]], template: function CartSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your cart: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartSummaryComponent_span_3_Template, 3, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartSummaryComponent_span_4_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.itemCount == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "cart-summary",
                templateUrl: "cartSummary.component.html"
            }]
    }], function () { return [{ type: _model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/checkout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/store/checkout.component.ts ***!
  \*********************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/order.repository */ "./src/app/model/order.repository.ts");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function CheckoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thanks!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thanks for placing your order.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We'll ship your goods as soon as possible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Return to Store");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your state ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your zip/postal code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.submitOrder(_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_6_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.order.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckoutComponent_form_6_span_7_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_6_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.order.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CheckoutComponent_form_6_span_13_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_6_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.order.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CheckoutComponent_form_6_span_19_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_6_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.order.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckoutComponent_form_6_span_25_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Zip/Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_6_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.order.zip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CheckoutComponent_form_6_span_31_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_6_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.order.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CheckoutComponent_form_6_span_37_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Complete Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.order.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.submitted && _r23.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.order.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.submitted && _r25.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.order.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.submitted && _r27.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.order.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.submitted && _r29.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.order.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.submitted && _r31.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.order.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.submitted && _r33.invalid);
} }
class CheckoutComponent {
    constructor(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    submitOrder(form) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["ng-component"]], decls: 7, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "bg-dark", "text-white"], [1, "navbar-brand"], ["class", "m-2 text-center", 4, "ngIf"], ["novalidate", "", "class", "m-2", 3, "ngSubmit", 4, "ngIf"], [1, "m-2", "text-center"], ["routerLink", "/store", 1, "btn", "btn-primary"], ["novalidate", "", 1, "m-2", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["name", "state", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["state", "ngModel"], ["name", "zip", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["zip", "ngModel"], ["name", "country", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], [1, "text-center"], ["routerLink", "/cart", 1, "btn", "btn-secondary", "m-1"], ["type", "submit", 1, "btn", "btn-primary", "m-1"], [1, "text-danger"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SPORTS STORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_5_Template, 9, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckoutComponent_form_6_Template, 43, 12, "form", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.orderSent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["input.ng-dirty.ng-invalid[_ngcontent-%COMP%] { border: 2px solid #ff0000 }\ninput.ng-dirty.ng-valid[_ngcontent-%COMP%] { border: 2px solid #6bc502 }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsMEJBQTBCO0FBQ3RELDBCQUEwQiwwQkFBMEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7IGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDAgfVxuaW5wdXQubmctZGlydHkubmctdmFsaWQgeyBib3JkZXI6IDJweCBzb2xpZCAjNmJjNTAyIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "checkout.component.html",
                styleUrls: ["checkout.component.css"]
            }]
    }], function () { return [{ type: _model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"] }, { type: _model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/counter.directive.ts":
/*!********************************************!*\
  !*** ./src/app/store/counter.directive.ts ***!
  \********************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CounterDirective {
    constructor(container, template) {
        this.container = container;
        this.template = template;
    }
    ngOnChanges(changes) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }
}
CounterDirective.ɵfac = function CounterDirective_Factory(t) { return new (t || CounterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CounterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CounterDirective, selectors: [["", "counterOf", ""]], inputs: { counter: ["counterOf", "counter"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[counterOf]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { counter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["counterOf"]
        }] }); })();
class CounterDirectiveContext {
    constructor($implicit) {
        this.$implicit = $implicit;
    }
}


/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cartSummary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartSummary.component */ "./src/app/store/cartSummary.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter.directive */ "./src/app/store/counter.directive.ts");









function StoreComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const cat_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeCategory(cat_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", cat_r3 == ctx_r0.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r3, " ");
} }
function StoreComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_div_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const product_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addProductToCart(product_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 3, product_r6.price, "USD", "symbol", "2.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r6.description, " ");
} }
function StoreComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const page_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePage(page_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r9 == ctx_r2.selectedPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9, " ");
} }
class StoreComponent {
    constructor(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    get products() {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    get categories() {
        return this.repository.getCategories();
    }
    changeCategory(newCategory) {
        this.selectedCategory = newCategory;
    }
    changePage(newPage) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageCount() {
        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage);
    }
    addProductToCart(product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["store"]], decls: 27, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "bg-dark", "text-white"], [1, "navbar-brand"], [1, "col-3", "p-2"], [1, "btn", "btn-block", "btn-outline-primary", 3, "click"], ["class", "btn btn-outline-primary btn-block", 3, "active", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/admin", 1, "btn", "btn-block", "btn-danger", "mt-5"], [1, "col-9", "p-2"], ["class", "card m-1 p-1 bg-light", 4, "ngFor", "ngForOf"], [1, "form-inline", "float-left", "mr-1"], [1, "form-control", 3, "value", "change"], ["value", "3"], ["value", "4"], ["value", "6"], ["value", "8"], [1, "btn-group", "float-right"], ["class", "btn btn-outline-primary", 3, "active", "click", 4, "counter", "counterOf"], [1, "btn", "btn-outline-primary", "btn-block", 3, "click"], [1, "card", "m-1", "p-1", "bg-light"], [1, "badge", "badge-pill", "badge-primary", "float-right"], [1, "card-text", "bg-white", "p-1"], [1, "btn", "btn-success", "btn-sm", "float-right", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " FAROUK'S SPORTS STORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "cart-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreComponent_Template_button_click_8_listener() { return ctx.changeCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoreComponent_button_10_Template, 2, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StoreComponent_div_14_Template, 10, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StoreComponent_Template_select_change_16_listener($event) { return ctx.changePageSize($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3 per Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4 per Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "6 per Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "8 per Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, StoreComponent_button_26_Template, 2, 3, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.productsPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counterOf", ctx.pageCount);
    } }, directives: [_cartSummary_component__WEBPACK_IMPORTED_MODULE_4__["CartSummaryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _counter_directive__WEBPACK_IMPORTED_MODULE_7__["CounterDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "store",
                templateUrl: "store.component.html"
            }]
    }], function () { return [{ type: _model_product_repository__WEBPACK_IMPORTED_MODULE_1__["ProductRepository"] }, { type: _model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter.directive */ "./src/app/store/counter.directive.ts");
/* harmony import */ var _cartSummary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartSummary.component */ "./src/app/store/cartSummary.component.ts");
/* harmony import */ var _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class StoreModule {
}
StoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreModule });
StoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreModule_Factory(t) { return new (t || StoreModule)(); }, imports: [[_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreModule, { declarations: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"], _cartSummary_component__WEBPACK_IMPORTED_MODULE_6__["CartSummaryComponent"],
        _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]], imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]], exports: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
                declarations: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"], _cartSummary_component__WEBPACK_IMPORTED_MODULE_6__["CartSummaryComponent"],
                    _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]],
                exports: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/storeFirst.guard.ts":
/*!*************************************!*\
  !*** ./src/app/storeFirst.guard.ts ***!
  \*************************************/
/*! exports provided: StoreFirstGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFirstGuard", function() { return StoreFirstGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class StoreFirstGuard {
    constructor(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    canActivate(route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != _store_store_component__WEBPACK_IMPORTED_MODULE_1__["StoreComponent"]) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
StoreFirstGuard.ɵfac = function StoreFirstGuard_Factory(t) { return new (t || StoreFirstGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StoreFirstGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreFirstGuard, factory: StoreFirstGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFirstGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/faroukafolabi/Desktop/FaroukSportsStore/SportsStore/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
webpackJsonp([0],{

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_voos_form_voos_form__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_carros_form_carros_form__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_hoteis_form_hoteis_form__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [{ 'label': 'Voos', 'route': __WEBPACK_IMPORTED_MODULE_2__components_voos_form_voos_form__["a" /* VoosFormComponent */], 'icon': 'plane', 'desc': 'Encontre os voos mais baratos' },
            { 'label': 'Hotéis', 'route': __WEBPACK_IMPORTED_MODULE_4__components_hoteis_form_hoteis_form__["a" /* HoteisFormComponent */], 'icon': 'home', 'desc': 'Encontre a melhor acomodação' },
            { 'label': 'Carros', 'route': __WEBPACK_IMPORTED_MODULE_3__components_carros_form_carros_form__["a" /* CarrosFormComponent */], icon: 'car', 'desc': 'Alugue um carro para sua viagem' }];
    }
    HomePage.prototype.goToOutro = function (item) {
        this.navCtrl.push(item.route);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n  <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>Amadeus</ion-title>\n\n\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n<ion-card>\n\n  <img src="assets/img/home.jpg"/>\n\n</ion-card>\n\n\n\n<ion-list>\n\n  <ion-item *ngFor="let item of items" (click)="goToOutro(item)">\n\n    <!--<ion-avatar item-left>\n\n      <img [src]="item?.img">\n\n    </ion-avatar>-->\n\n\n\n    <ion-icon [name]="item?.icon" item-left></ion-icon>\n\n\n\n\n\n    <h2> {{ item.label }}</h2>\n\n    <!--<h3>Don\'t Know What To Do!</h3>-->\n\n    <p> {{ item.desc }}</p>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\home\home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoosFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_voos_origem_modal_voos_origem__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_voos_destino_modal_voos_destino__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the VoosForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var VoosFormComponent = (function () {
    function VoosFormComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        // default tab
        this.voo = 'ida-volta';
        this.origem = { 'name': 'Origem', 'iata': '' };
        this.destino = { 'name': 'Destino', 'iata': '' };
        console.log('Hello VoosForm Component');
        this.text = 'Hello World';
    }
    VoosFormComponent.prototype.escolheOrigem = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_voos_origem_modal_voos_origem__["a" /* ModalVoosOrigemComponent */], data);
        modal.onDidDismiss(function (selectedItem) {
            console.log('onDidDismiss', selectedItem);
            if (selectedItem)
                _this.origem = selectedItem;
        });
        modal.present();
    };
    VoosFormComponent.prototype.escolheDestino = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_voos_destino_modal_voos_destino__["a" /* ModalVoosDestinoComponent */], data);
        modal.onDidDismiss(function (selectedItem) {
            console.log('onDidDismiss', selectedItem);
            if (selectedItem)
                _this.destino = selectedItem;
        });
        modal.present();
    };
    VoosFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'voos-form',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\components\voos-form\voos-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Voos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div>\n\n    <ion-segment [(ngModel)]="voo">\n\n      <ion-segment-button value="ida-volta">\n\n        Ida e volta\n\n      </ion-segment-button>\n\n      <ion-segment-button value="ida">\n\n        Somente ida\n\n      </ion-segment-button>\n\n      <ion-segment-button value="varias">\n\n        Varias paradas\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n\n\n  <div [ngSwitch]="voo">\n\n    <ion-list *ngSwitchCase="\'ida-volta\'">\n\n      <!--<ion-item>\n\n      <ion-thumbnail item-left>\n\n        <img src="img/thumbnail-puppy-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Ruby</h2>\n\n    </ion-item>-->\n\n      <!--<ion-item>-->\n\n\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col center width-48 offset-2 (click)=\'escolheOrigem()\' style="text-align: center">\n\n              <h5>{{origem?.name}}</h5>\n\n              <p>\n\n                <small>\n\n                  {{origem?.iata}}\n\n                </small>\n\n              </p>\n\n            </ion-col>\n\n            <ion-col center width-48 (click)=\'escolheDestino()\' style="text-align: center">\n\n              <h5>{{destino?.name}}</h5>\n\n              <p>\n\n                <small>\n\n                  {{destino?.iata}}\n\n                </small>\n\n              </p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n\n\n\n\n      <!--</ion-item>-->\n\n\n\n      <ion-item>\n\n\n\n        <ion-label>Data de partida</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY" [(ngModel)]="dataPartida"></ion-datetime>\n\n\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n\n\n        <ion-label>Data de volta</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY" [(ngModel)]="dataVolta"></ion-datetime>\n\n\n\n      </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n\n      <ion-item>\n\n        <ion-thumbnail item-left>\n\n          <img src="img/thumbnail-kitten-1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Luna</h2>\n\n      </ion-item>\n\n      ...\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n\n\n  <!--<div padding>\n\n  <ion-segment [(ngModel)]="pet">\n\n    <ion-segment-button value="kittens">\n\n      Kittens\n\n    </ion-segment-button>\n\n    <ion-segment-button value="puppies">\n\n      Puppies\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</div>\n\n\n\n<div [ngSwitch]="pet">\n\n  <ion-list *ngSwitchCase="\'puppies\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-left>\n\n        <img src="img/thumbnail-puppy-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Ruby</h2>\n\n    </ion-item>\n\n    ...\n\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'kittens\'">\n\n    <ion-item>\n\n      <ion-thumbnail item-left>\n\n        <img src="img/thumbnail-kitten-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Luna</h2>\n\n    </ion-item>\n\n    ...\n\n  </ion-list>\n\n</div>-->\n\n\n\n\n\n  <button ion-button block>Pesquisar Voos</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\components\voos-form\voos-form.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], VoosFormComponent);
    return VoosFormComponent;
}());
//# sourceMappingURL=voos-form.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalVoosOrigemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_voos_origem_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_remove_accents__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_remove_accents___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_remove_accents__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ModalVoosOrigem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var ModalVoosOrigemComponent = (function () {
    function ModalVoosOrigemComponent(platform, params, viewCtrl, mvoS) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.mvoS = mvoS;
        this.searchQuery = '';
        this.results = [];
        console.log('Hello ModalVoosOrigem Component');
        this.itemsAll = this.mvoS.getAirportsWeb();
        this.items = this.itemsAll;
        // this.mvoS.getAirportsWeb().subscribe((res) => {
        //   this.items = res.json();
        // });
    }
    ModalVoosOrigemComponent.prototype.initializeItems = function () {
        this.items = this.itemsAll;
    };
    ModalVoosOrigemComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        console.log("getItems");
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '' && val.length >= 3) {
            this.items = this.items.filter(function (item) {
                return ((item.name || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ModalVoosOrigemComponent.prototype.getResults = function (ev) {
        var val = __WEBPACK_IMPORTED_MODULE_3_remove_accents___default()(ev.target.value);
        // console.log(removeAccents);
        // val = removeAccents(val);
        console.log(val);
        if (val && val.trim() != "" && val.length >= 2) {
            this.results = this.itemsAll.filter(function (item) {
                var tmpName = item.name || '';
                // tmpName = removeAccents(tmpName);
                return ((tmpName || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.results = [];
        }
    };
    ModalVoosOrigemComponent.prototype.dismiss = function (args) {
        this.viewCtrl.dismiss(args);
    };
    ModalVoosOrigemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'modal-voos-origem',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\components\modal-voos-origem\modal-voos-origem.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n\n\n    <ion-searchbar animated="on" autocomplete="on"  debounce="400" start placeholder="Digite a cidade de origem"\n\n      (ionInput)="getResults($event)"></ion-searchbar>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary">Cancel</span>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of results" (click)="dismiss(item)">\n\n      {{ item.name }}\n\n    </button >\n\n    <ion-item *ngIf="results.length < 1">\n\n      Nenhum item encontrado\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\components\modal-voos-origem\modal-voos-origem.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__modal_voos_origem_service__["a" /* ModalVoosOrigemService */]])
    ], ModalVoosOrigemComponent);
    return ModalVoosOrigemComponent;
}());
//# sourceMappingURL=modal-voos-origem.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalVoosOrigemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalVoosOrigemService = (function () {
    function ModalVoosOrigemService(http) {
        this.http = http;
        // console.log("getAirportsWeb Constructor");
        // this.prom = this.http.get('assets/airports.json');
        // var x;
        // this.http.get('assets/airports.json').subscribe((res) => {
        //     x = res.json()
        // });
        // this.tmp = x;
    }
    ModalVoosOrigemService.prototype.getAirportsWeb = function () {
        // return this.http.get('assets/airports.json');
        // console.log(this.getAirports());
        // return this.prom;
        return window.airports;
        // return (<any>window).airplanes || {};
        // return this.http.get('https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json');
    };
    ModalVoosOrigemService.prototype.getAirports = function () {
        return window.airports;
    };
    ModalVoosOrigemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ModalVoosOrigemService);
    return ModalVoosOrigemService;
}());
//# sourceMappingURL=modal-voos-origem-service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalVoosDestinoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ModalVoosDestino component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var ModalVoosDestinoComponent = (function () {
    function ModalVoosDestinoComponent(platform, params, viewCtrl) {
        // console.log('Hello ModalVoosOrigem Component');
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.searchQuery = '';
        this.results = [];
        this.itemsAll = window.airports;
        this.items = this.itemsAll;
        // this.mvoS.getAirportsWeb().subscribe((res) => {
        //   this.items = res.json();
        // });
    }
    ModalVoosDestinoComponent.prototype.initializeItems = function () {
        this.items = this.itemsAll;
    };
    ModalVoosDestinoComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // console.log("getItems");
        // this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '' && val.length >= 3) {
            this.items = this.items.filter(function (item) {
                return ((item.name || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ModalVoosDestinoComponent.prototype.getResults = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != "" && val.length >= 2) {
            this.results = this.itemsAll.filter(function (item) {
                return ((item.name || '').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.results = [];
        }
    };
    ModalVoosDestinoComponent.prototype.dismiss = function (args) {
        this.viewCtrl.dismiss(args);
    };
    ModalVoosDestinoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'modal-voos-destino',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\components\modal-voos-destino\modal-voos-destino.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n\n\n    <ion-searchbar start placeholder="Digite a cidade de destino" (ionInput)="getResults($event)"></ion-searchbar>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary">Cancel</span>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of results" (click)="dismiss(item)">\n\n      {{ item.name }}\n\n    </ion-item>\n\n    <ion-item *ngIf="results.length < 1">\n\n      Nenhum item encontrado\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\components\modal-voos-destino\modal-voos-destino.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], ModalVoosDestinoComponent);
    return ModalVoosDestinoComponent;
}());
//# sourceMappingURL=modal-voos-destino.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the CarrosForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var CarrosFormComponent = (function () {
    function CarrosFormComponent() {
        console.log('Hello CarrosForm Component');
        this.text = 'Hello World';
    }
    CarrosFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'carros-form',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\components\carros-form\carros-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Other Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>\n\n    I\'m the other page!\n\n  </h3>\n\n\n\n</ion-content>`'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\components\carros-form\carros-form.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], CarrosFormComponent);
    return CarrosFormComponent;
}());
//# sourceMappingURL=carros-form.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoteisFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the HoteisForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var HoteisFormComponent = (function () {
    function HoteisFormComponent() {
        console.log('Hello HoteisForm Component');
        this.text = 'Hello World';
    }
    HoteisFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'hoteis-form',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\components\hoteis-form\hoteis-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Other Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>\n\n    I\'m the other page!\n\n  </h3>\n\n\n\n</ion-content>`'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\components\hoteis-form\hoteis-form.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], HoteisFormComponent);
    return HoteisFormComponent;
}());
//# sourceMappingURL=hoteis-form.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.jao = 'jaozinho';
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About {{jao}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\about\about.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\contact\contact.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(568);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_voos_form_voos_form__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_carros_form_carros_form__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_hoteis_form_hoteis_form__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_modal_voos_origem_modal_voos_origem__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_modal_voos_destino_modal_voos_destino__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modal_voos_origem_modal_voos_origem_service__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__components_voos_form_voos_form__["a" /* VoosFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_carros_form_carros_form__["a" /* CarrosFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_hoteis_form_hoteis_form__["a" /* HoteisFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_modal_voos_origem_modal_voos_origem__["a" /* ModalVoosOrigemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_modal_voos_destino_modal_voos_destino__["a" /* ModalVoosDestinoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__components_voos_form_voos_form__["a" /* VoosFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_carros_form_carros_form__["a" /* CarrosFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_hoteis_form_hoteis_form__["a" /* HoteisFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_modal_voos_origem_modal_voos_origem__["a" /* ModalVoosOrigemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_modal_voos_destino_modal_voos_destino__["a" /* ModalVoosDestinoComponent */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_12__components_modal_voos_origem_modal_voos_origem_service__["a" /* ModalVoosOrigemService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, http) {
        this.http = http;
        // rootPage = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // airplanes = "";
            // this.http.get('assets/airports.json').subscribe((res) => {
            //     (<any>window).airplanes = res.json();
            // });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\app\app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\dev\repository\ionic-amadeus-api-demo\src\pages\tabs\tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ })

},[469]);
//# sourceMappingURL=main.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n\n</div>\n\n<app-grid></app-grid>\n\n<app-detail-grid></app-detail-grid>\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-grid/detail-grid.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-grid/detail-grid.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailGridDetailGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "o\n<div id=\"detailsFrame\">\n\n  <h3>\n    <mat-icon (click)=\"openDialog()\">playlist_add</mat-icon>\n    Monthly Sales\n    <small>\n      {{filter}}\n    </small>\n  </h3>\n  <ngx-datatable\n    #myTable\n    class=\"ngx-detailsTable material expandable\"\n    [columnMode]=\"ColumnMode.force\"\n    [headerHeight]=\"40\"\n    [footerHeight]=\"40\"\n    [rowHeight]=\"40\"\n    [scrollbarV]=\"true\"\n    [rows]=\"rows\"\n    (page)=\"onPage($event)\">\n    <!-- Row Detail Template -->\n    <ngx-datatable-row-detail [rowHeight]=\"50\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\n      <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\n        <div style=\"padding-left:60px; font-size:14px\">\n          <div>{{ row.sumQty | number}} pcs, {{ row.suma | number :'1.2-2'}}</div>\n        </div>\n      </ng-template>\n    </ngx-datatable-row-detail>\n\n    <!-- Column Templates -->\n    <ngx-datatable-column\n      headerClass='desktop-hidden'\n      cellClass='desktop-hidden'\n      [width]=\"50\"\n      [resizeable]=\"false\"\n      [sortable]=\"false\"\n      [draggable]=\"false\"\n      [canAutoResize]=\"false\">\n      <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n        <a href=\"#\" [class.datatable-icon-right]=\"!expanded\"\n           [class.datatable-icon-down]=\"expanded\"\n           title=\"Expand/Collapse Row\" (click)=\"toggleExpandRow(row)\" class=\"desktop-hidden\">\n        </a>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column prop=\"workDate\" name=\"Sales Date\"\n                          [flexGrow]=\"2\"\n                          [minWidth]=\"50\">\n      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n        {{ value | date:'d-MMM' }}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column prop=\"itemName\" name=\"Item\"\n                          [flexGrow]=\"2\"\n                          [minWidth]=\"100\">\n      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n        {{ value }}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column prop=\"sumQty\" name=\"Qty\" [flexGrow]=\"1\" headerClass='alignR mobile-hidden' cellClass='alignR'>\n<!--      <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template> <span (click)=\"sort()\">qty</span> </ng-template>-->\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <span class=\"mobile-hidden\">{{ value | number}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column prop=\"suma\" name=\"Cash\" [flexGrow]=\"1\" headerClass='alignR mobile-hidden' cellClass='alignR'>\n      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n        <span class=\"mobile-hidden smallPrice\">{{ value | number:'1.2-2'}}</span>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-grid/dialog-form-dialog.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-grid/dialog-form-dialog.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailGridDialogFormDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>New Data in {{data.name}}</p>\n<div mat-dialog-content>\n\n  <mat-form-field>\n    <input matInput  readonly [matDatepicker]=\"picker\" [(ngModel)]=\"data.workDate\" placeholder=\" Date of sale \">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker ></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.itemName\" placeholder=\"Item Name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input type=\"number\" matInput [(ngModel)]=\"data.sumQty\" placeholder=\"Qty\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input type=\"number\" matInput [(ngModel)]=\"data.suma\" placeholder=\"Cash\">\n  </mat-form-field>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/grid/grid.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grid/grid.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGridGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"mainFrame\">\n  <h3>\n    Product groups\n\n  </h3>\n\n  <ngx-datatable\n    #myTable\n    class=\"ngxMain material expandable\"\n    [columnMode]=\"ColumnMode.force\"\n    [headerHeight]=\"40\"\n    [footerHeight]=\"40\"\n    [rowHeight]=\"50\"\n    [scrollbarV]=\"true\"\n    [rows]=\"rows\"\n    (page)=\"onPage($event)\"\n    [selected]=\"selected\"\n    [selectionType]=\"SelectionType.single\"\n    (activate)=\"onActivate($event)\"\n    (select)=\"onSelect($event)\"\n  >\n    <!-- Row Detail Template -->\n    <ngx-datatable-row-detail [rowHeight]=\"50\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\n      <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\n        <div style=\"padding-left:60px; font-size:14px\">\n          <div>{{ row.sumQty | number}}pcs, {{ row.suma |number:'1.2-2'}}</div>\n        </div>\n      </ng-template>\n    </ngx-datatable-row-detail>\n\n    <!-- Column Templates -->\n    <ngx-datatable-column\n      headerClass='desktop-hidden'\n      cellClass='desktop-hidden'\n      [width]=\"50\"\n      [resizeable]=\"false\"\n      [sortable]=\"false\"\n      [draggable]=\"true\"\n      [canAutoResize]=\"false\"\n    >\n      <ng-template\n        let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n        <a\n          href=\"#\"\n          [class.datatable-icon-right]=\"!expanded\"\n          [class.datatable-icon-down]=\"expanded\"\n          title=\"Expand/Collapse Row\"\n          (click)=\"toggleExpandRow(row)\"\n          class=\"desktop-hidden\"\n        >\n        </a>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column\n      name=\"Name\" [flexGrow]=\"1\" [minWidth]=\"150\">\n       <ng-template let-value=\"value\" ngx-datatable-cell-template>\n        {{ value }}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column headerClass='mobile-hidden' name=\"Qty\" prop=\"sumQty\" [flexGrow]=\"1\" >\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <span class=\"mobile-hidden\">{{ value | number }}</span>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column headerClass='mobile-hidden' name=\"Cash\" prop=\"suma\" [flexGrow]=\"1\">\n      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n        <span class=\"mobile-hidden smallPrice\">{{ value }}</span>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /*margin-left: 8px;*/\n}\n\np {\n    margin: 0;\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n            flex: 1;\n}\n\n.toolbar {\n    height: 60px;\n    margin: -8px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n}\n\n.toolbar img {\n    margin: 0 16px;\n}\n\n.toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n}\n\n.toolbar #twitter-logo:hover {\n    opacity: 0.8;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7O0lBTUksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQU87WUFBUCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgLyptYXJnaW4tbGVmdDogOHB4OyovXG59XG5cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IC04cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'grid';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid/grid.component */
    "./src/app/grid/grid.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _detail_grid_detail_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./detail-grid/detail-grid.component */
    "./src/app/detail-grid/detail-grid.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], _detail_grid_detail_grid_component__WEBPACK_IMPORTED_MODULE_7__["DetailGridComponent"], _detail_grid_detail_grid_component__WEBPACK_IMPORTED_MODULE_7__["DialogFormComponent"]],
      imports: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
      entryComponents: [_detail_grid_detail_grid_component__WEBPACK_IMPORTED_MODULE_7__["DialogFormComponent"]],
      providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.rowFilter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.filter = this.rowFilter.asObservable();
        this.rows = [];
        this.selected = [];
        this.local = [];
      }

      _createClass(DataService, [{
        key: "fetchDetails",
        value: function fetchDetails(cb) {
          var _this = this;

          var req = new XMLHttpRequest();
          req.open('GET', "https://api.bilkata.bg/info/dashboard/SalesDetails/2020-01-23?ApiKey=0dd46cac448dce1591f7993b79bc8785");

          req.onload = function () {
            var val = JSON.parse(req.response).month;
            _this.local = _this.getLocal(); // console.log(val);

            cb(val.concat(_this.local));
          };

          req.send();
        }
      }, {
        key: "fetchMain",
        value: function fetchMain(cb) {
          var req = new XMLHttpRequest();
          req.open('GET', "https://api.bilkata.bg/info/dashboard/SalesByCategory/2020-01-23?ApiKey=0dd46cac448dce1591f7993b79bc8785"); // https://restcountries.eu/rest/v2/all

          req.onload = function () {
            var val = JSON.parse(req.response).today;
            cb(val);
          };

          req.send();
        }
      }, {
        key: "getLocal",
        value: function getLocal() {
          return JSON.parse(localStorage.getItem('salesData')) || [];
        }
      }, {
        key: "setLocal",
        value: function setLocal(data) {
          localStorage.setItem('salesData', JSON.stringify(this.local.concat(data)));
        }
      }, {
        key: "setFilter",
        value: function setFilter(row) {
          this.rowFilter.next(row);
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/detail-grid/detail-grid.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/detail-grid/detail-grid.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailGridDetailGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n  .ngx-datatable [hidden] {\n    display: none !important; }\n  .ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }\n  .ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n  .ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }\n  .ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n  .ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n  .ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n  .ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-inner {\n      -webkit-box-align: stretch;\n              align-items: stretch;\n      -webkit-align-items: stretch; }\n  .ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n  .ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n  .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n  .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n  .ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n  .ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n  .ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n  .ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      flex-direction: column; }\n  .ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n  .ngx-datatable .datatable-body .datatable-body-row > div {\n        display: -webkit-box;\n        display: flex; }\n  .ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }\n  .ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 100%; }\n  .ngx-datatable .datatable-footer .selected-count .page-count {\n      -webkit-box-flex: 1;\n              flex: 1 1 40%; }\n  .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      -webkit-box-flex: 1;\n              flex: 1 1 60%; }\n  .ngx-datatable .datatable-footer .page-count {\n      -webkit-box-flex: 1;\n              flex: 1 1 20%; }\n  .ngx-datatable .datatable-footer .datatable-pager {\n      -webkit-box-flex: 1;\n              flex: 1 1 80%;\n      text-align: right; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n  /*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/\n  @charset \"UTF-8\";\n  @font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n  [data-icon]:before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  [class^='datatable-icon-']:before,\n[class*=' datatable-icon-']:before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  .datatable-icon-filter:before {\n  content: '\\62';\n}\n  .datatable-icon-collapse:before {\n  content: '\\61';\n}\n  .datatable-icon-expand:before {\n  content: '\\63';\n}\n  .datatable-icon-close:before {\n  content: '\\64';\n}\n  .datatable-icon-up:before {\n  content: '\\65';\n}\n  .datatable-icon-down:before {\n  content: '\\66';\n}\n  .datatable-icon-sort:before {\n  content: '\\67';\n}\n  .datatable-icon-done:before {\n  content: '\\68';\n}\n  .datatable-icon-done-all:before {\n  content: '\\69';\n}\n  .datatable-icon-search:before {\n  content: '\\6a';\n}\n  .datatable-icon-pin:before {\n  content: '\\6b';\n}\n  .datatable-icon-add:before {\n  content: '\\6d';\n}\n  .datatable-icon-left:before {\n  content: '\\6f';\n}\n  .datatable-icon-right:before {\n  content: '\\70';\n}\n  .datatable-icon-skip:before {\n  content: '\\71';\n}\n  .datatable-icon-prev:before {\n  content: '\\72';\n}\n  .ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}\n  .ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}\n  .ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  -webkit-transition-property: background;\n  transition-property: background;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  -webkit-transition-property: background;\n  transition-property: background;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n  .ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n  .ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n  .ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}\n  .ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}\n  .ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  -webkit-transition: opacity 400ms ease, -webkit-transform 400ms ease;\n  transition: opacity 400ms ease, -webkit-transform 400ms ease;\n  transition: transform 400ms ease, opacity 400ms ease;\n  transition: transform 400ms ease, opacity 400ms ease, -webkit-transform 400ms ease;\n  opacity: 0.5;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  -webkit-filter: none;\n          filter: none;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}\n  .ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}\n  .ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}\n  .ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n  .ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n}\n  .ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  -webkit-transform: translate(0, 0) scale(1, 1);\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}\n  .ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: -webkit-transform 0.2s linear;\n  -webkit-transition: -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear;\n  transition: transform 0.2s linear, -webkit-transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}\n  .ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}\n  .ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n  /**\n * Checkboxes\n**/\n  .datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}\n  .datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}\n  .datatable-checkbox input[type=checkbox]:before {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}\n  .datatable-checkbox input[type=checkbox]:checked:before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}\n  .datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}\n  /**\n * Progress bar animations\n */\n  @-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n  @keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n  #detailsFrame {\n  position: absolute;\n  top: 50px;\n  left: 53vw;\n  right: 20px;\n  height: 100vh;\n}\n  .ngx-detailsTable {\n  height: 70%;\n  width: 100%;\n}\n  .mat-icon {\n  position: relative;\n  top: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MiLCIvVXNlcnMvYi56YWhhcmlldi9hbmdHcmlkL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwic3JjL2FwcC9kZXRhaWwtZ3JpZC9kZXRhaWwtZ3JpZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iLnphaGFyaWV2L2FuZ0dyaWQvc3JjL2FwcC9kZXRhaWwtZ3JpZC9kZXRhaWwtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUUsRUFBRTtFQUNKO0lBQ0Usd0JBQXdCLEVBQUU7RUFDNUI7OztJQUtFLHNCQUFzQixFQUFFO0VBQzFCO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixpQ0FBaUMsRUFBRTtFQUNyQztJQUNFLG1CQUFtQixFQUFFO0VBQ3JCO01BQ0UsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBRTtFQUM3QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3JCO01BQ0UsbUJBQW1CLEVBQUU7RUFDckI7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFO0VBQzNCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRTtFQUMvQjs7O0lBR0Usb0JBQW9C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RUZ3SUE7O0VBQUE7RUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FFcklGO0VGdUlFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FFcklKO0VGdUlJO0VBQ0Usd0NBQUE7RUFFQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRXJJTjtFRndJSTtFQUNFLGlDQUFBO0VBR0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FFdElOO0VGeUlJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRXZJTjtFRjRJQTs7RUFBQTtFQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0RBQUE7WUFBQSx3Q0FBQTtFRXpJRjtFRjRJQTtJQUNFLFVBQUE7SUFDQSwrQ0FBQTtZQUFBLHVDQUFBO0VFMUlGO0FBQ0Y7RUZpSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxnREFBQTtZQUFBLHdDQUFBO0VFeklGO0VGNElBO0lBQ0UsVUFBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7RUUxSUY7QUFDRjtFQzdVQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRCtVRjtFQzVVQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FEK1VGO0VDNVVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBRCtVRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1ncmlkL2RldGFpbC1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuXG4vLyBjb21tb24gZGF0YXRhYmxlIGNvbG9yc1xuJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDogI2VlZSAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCByb3cgYW5kIGNlbGwgYmFja2dyb3VuZCBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9ycyBmb3IgY2VsbCBzZWxlY3Rpb24gc3R5bGVcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBjb2xvcnMgZm9yIHNlbGVjdGVkIGNlbGwgLyByb3dcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMzA0ZmZlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6ICMxOTNhZTQgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1czogIzIwNDFlZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1czogI2ZmZiAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBoZWFkZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjogI2VlZSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciB0YWJsZSBib2R5IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXJvdy1kZXRhaWwtYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci10b3AtY29sb3I6ICNkOWQ4ZDkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIGZvb3RlciBlbGVtZW50c1xuJGRhdGF0YWJsZS1mb290ZXItY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMikgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3Igc3VtbWFyeSByb3cgZWxlbWVudHNcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZDogI2RkZCAhZGVmYXVsdDtcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZC1ob3ZlcjogI2RkZCAhZGVmYXVsdDtcblxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAkbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93O1xuXG4gICYuc3RyaXBlZCB7XG4gICAgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAmLnNpbmdsZS1zZWxlY3Rpb24sXG4gICYubXVsdGktc2VsZWN0aW9uLFxuICAmLm11bHRpLWNsaWNrLXNlbGVjdGlvbiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICYuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmhvdmVyLFxuICAgICAgJi5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6Zm9jdXMsXG4gICAgICAmLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bm90KC5jZWxsLXNlbGVjdGlvbikge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuY2VsbC1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogU2hhcmVkIFN0eWxlc1xuXHQgKi9cbiAgLmVtcHR5LXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAubG9hZGluZy1yb3cge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtaGVhZGVyLFxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtcm93LWxlZnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXRhdGFibGUtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG5cbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJi5sb25ncHJlc3Mge1xuICAgICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UsIG9wYWNpdHkgNDAwbXMgZWFzZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJi5kcmFnZ2luZyB7XG4gICAgICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWhlYWRlci1yZXNpemUtaGFuZGxlLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBCb2R5IFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgYmFja2dyb3VuZDogJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgIC8vIGNlbGwgYWN0aXZlIGNsYXNzXG4gICAgICAgIC8vICYuYWN0aXZlIHtcbiAgICAgICAgLy8gIGJhY2tncm91bmQ6ICMwODI5ZTBcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDIwOSwgMjQ5KTtcblxuICAgICAgICAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTA4LCAyMDApO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I7XG5cbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAmLmRpc2FibGVkIGEge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNnB4IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWNvbG9yLWhvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdW1tYXJ5IHJvdyBzdHlsZXNcbiAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuXG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAsIDEpO1xuICB9XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG4uZGF0YXRhYmxlLWljb24tdXA6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuLmRhdGF0YWJsZS1pY29uLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuLmRhdGF0YWJsZS1pY29uLWRvbmU6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuLmRhdGF0YWJsZS1pY29uLXBpbjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG4uZGF0YXRhYmxlLWljb24tYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cbi5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG4uZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG4uZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbi8qXG4gIFRoaXMgc3R5bGVzaGVldCB1c2VzIHNjc3MgdmFsaWFibGVzIGZvciBtb3N0IG9mIHRoZSBjb2xvcnMgLyBiYWNrZ3JvdW5kLWNvbG9ycyBvZiB0aGUgdGFibGVcbiAgdG8gZW5hYmxlIHRoZSBjdXN0b21pemF0aW9uIG9mIHRoZSBkaXNwbGF5ZWQgdGFibGUgd2l0aG91dCBjbG9uaW5nIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlXG4gIG93biBhcHBsaWNhdGlvbi5cblxuICBUbyBtb2RpZnkgdGFibGUgY29sb3JzLCBhZGQgdGhlIGZvbGxvd2luZyBsaW5lcyB0byB0aGUgc2NzcyBmaWxlIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgKHRoaXMgZXhhbXBsZSBtb2RpZmllcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHJvdyAtIHNlbGVjdGlvblR5cGUgPSBzaW5nbGUsIG11bHRpIG9yIG11bHRpQ2xpY2spOlxuXG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHllbGxvdywgMC4yKTtcblxuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG5UaGF0J3MgYWxsLlxuKi9cbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAvKipcbiAgKiBTaGFyZWQgU3R5bGVzXG4gICovXG4gIC8qKlxuICAqIEdsb2JhbCBSb3cgU3R5bGVzXG4gICovXG4gIC8qKlxuICAqIEhlYWRlciBTdHlsZXNcbiAgKi9cbiAgLyoqXG4gICogQm9keSBTdHlsZXNcbiAgKi9cbiAgLyoqXG4gICogRm9vdGVyIFN0eWxlc1xuICAqL1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc3RyaXBlZCAuZGF0YXRhYmxlLXJvdy1vZGQge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cywgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cywgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlciwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5M2FlNDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6Zm9jdXMsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmVtcHR5LXJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDA7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1yb3ctcmlnaHQsXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB6LWluZGV4OiA5OTk5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuZHJhZ2dpbmcgLnJlc2l6ZS1oYW5kbGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAucmVzaXplLWhhbmRsZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWdyb3VwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDlkOGQ5O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDFmOTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAucHJvZ3Jlc3MtbGluZWFyIC5jb250YWluZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gIGFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwNmNjODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxLjJyZW07XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gIGhlaWdodDogMjJweDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiA2cHggM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDNweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XG59XG4uZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTtcbiAgfVxufVxuI2RldGFpbHNGcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiA1M3Z3O1xuICByaWdodDogMjBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5neC1kZXRhaWxzVGFibGUge1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblxuI2RldGFpbHNGcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiA1M3Z3O1xuICByaWdodDogMjBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5neC1kZXRhaWxzVGFibGUge1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtaWNvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/detail-grid/detail-grid.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/detail-grid/detail-grid.component.ts ***!
    \******************************************************/

  /*! exports provided: DetailGridComponent, DialogFormComponent */

  /***/
  function srcAppDetailGridDetailGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailGridComponent", function () {
      return DetailGridComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogFormComponent", function () {
      return DialogFormComponent;
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


    var _swimlane_ngx_datatable___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @swimlane/ngx-datatable/ */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DetailGridComponent =
    /*#__PURE__*/
    function () {
      function DetailGridComponent(dat, dialog) {
        var _this2 = this;

        _classCallCheck(this, DetailGridComponent);

        this.dat = dat;
        this.dialog = dialog;
        this.today = new Date();
        this.hiddenForm = true;
        this.dataSource = [];
        this.rows = [];
        this.expanded = {};
        this.ColumnMode = _swimlane_ngx_datatable___WEBPACK_IMPORTED_MODULE_2__["ColumnMode"];
        this.data = dat;
        dat.filter.subscribe(function (row) {
          _this2.filter = row['name'];

          _this2.filterData(row['name']);
        });
        dat.fetchDetails(function (data1) {
          _this2.dataSource = Object.values(data1); //  console.log(this.dataSource);
        });
      }

      _createClass(DetailGridComponent, [{
        key: "filterData",
        value: function filterData(name) {
          this.filter = name || this.filter;
          this.rows = this.dataSource.filter(function (row) {
            return row ? row.name === name : 0;
          });
        }
      }, {
        key: "onPage",
        value: function onPage(event) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(function () {// console.log('paged!', event);
          }, 100);
        }
      }, {
        key: "toggleExpandRow",
        value: function toggleExpandRow(row) {
          // console.log('Toggled Expand Row!', row);
          this.table.rowDetail.toggleExpandRow(row);
        }
      }, {
        key: "onDetailToggle",
        value: function onDetailToggle(event) {
          console.log('Detail Toggled', event);
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this3 = this;

          // can add dialog to remind active group is a must
          if (!this.filter) {
            return;
          }

          var dialogRef = this.dialog.open(DialogFormComponent, {
            width: '250px',
            data: {
              name: this.filter,
              workDate: this.today
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // console.log(result);
            // result.workDate = result.workDate.slice(0, 10);
            _this3.data.setLocal(result); // console.log(this.dataSource);


            _this3.dataSource.push(result);

            _this3.filterData(_this3.filter); // console.log(this.data);

          });
        }
      }]);

      return DetailGridComponent;
    }();

    DetailGridComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTable', {
      static: false
    })], DetailGridComponent.prototype, "table", void 0);
    DetailGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-grid/detail-grid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail-grid.component.scss */
      "./src/app/detail-grid/detail-grid.component.scss")).default]
    })], DetailGridComponent);

    var DialogFormComponent =
    /*#__PURE__*/
    function () {
      function DialogFormComponent(dialogRef, data) {
        _classCallCheck(this, DialogFormComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.someValue = false;
      }

      _createClass(DialogFormComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close(this.someValue);
        }
      }]);

      return DialogFormComponent;
    }();

    DialogFormComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-form-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-grid/dialog-form-dialog.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], DialogFormComponent);
    /***/
  },

  /***/
  "./src/app/grid/grid.component.scss":
  /*!******************************************!*\
    !*** ./src/app/grid/grid.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGridGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n  .ngx-datatable [hidden] {\n    display: none !important; }\n  .ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }\n  .ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n  .ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }\n  .ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n  .ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n  .ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n  .ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-inner {\n      -webkit-box-align: stretch;\n              align-items: stretch;\n      -webkit-align-items: stretch; }\n  .ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n  .ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n  .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n  .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n  .ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n  .ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n  .ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n  .ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      flex-direction: column; }\n  .ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n  .ngx-datatable .datatable-body .datatable-body-row > div {\n        display: -webkit-box;\n        display: flex; }\n  .ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }\n  .ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 100%; }\n  .ngx-datatable .datatable-footer .selected-count .page-count {\n      -webkit-box-flex: 1;\n              flex: 1 1 40%; }\n  .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      -webkit-box-flex: 1;\n              flex: 1 1 60%; }\n  .ngx-datatable .datatable-footer .page-count {\n      -webkit-box-flex: 1;\n              flex: 1 1 20%; }\n  .ngx-datatable .datatable-footer .datatable-pager {\n      -webkit-box-flex: 1;\n              flex: 1 1 80%;\n      text-align: right; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n  /*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/\n  @charset \"UTF-8\";\n  @font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n  [data-icon]:before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  [class^='datatable-icon-']:before,\n[class*=' datatable-icon-']:before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  .datatable-icon-filter:before {\n  content: '\\62';\n}\n  .datatable-icon-collapse:before {\n  content: '\\61';\n}\n  .datatable-icon-expand:before {\n  content: '\\63';\n}\n  .datatable-icon-close:before {\n  content: '\\64';\n}\n  .datatable-icon-up:before {\n  content: '\\65';\n}\n  .datatable-icon-down:before {\n  content: '\\66';\n}\n  .datatable-icon-sort:before {\n  content: '\\67';\n}\n  .datatable-icon-done:before {\n  content: '\\68';\n}\n  .datatable-icon-done-all:before {\n  content: '\\69';\n}\n  .datatable-icon-search:before {\n  content: '\\6a';\n}\n  .datatable-icon-pin:before {\n  content: '\\6b';\n}\n  .datatable-icon-add:before {\n  content: '\\6d';\n}\n  .datatable-icon-left:before {\n  content: '\\6f';\n}\n  .datatable-icon-right:before {\n  content: '\\70';\n}\n  .datatable-icon-skip:before {\n  content: '\\71';\n}\n  .datatable-icon-prev:before {\n  content: '\\72';\n}\n  .ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}\n  .ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}\n  .ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  -webkit-transition-property: background;\n  transition-property: background;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  -webkit-transition-property: background;\n  transition-property: background;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}\n  .ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n  .ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}\n  .ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}\n  .ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}\n  .ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  -webkit-transition: opacity 400ms ease, -webkit-transform 400ms ease;\n  transition: opacity 400ms ease, -webkit-transform 400ms ease;\n  transition: transform 400ms ease, opacity 400ms ease;\n  transition: transform 400ms ease, opacity 400ms ease, -webkit-transform 400ms ease;\n  opacity: 0.5;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  -webkit-filter: none;\n          filter: none;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}\n  .ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}\n  .ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}\n  .ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}\n  .ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n}\n  .ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  -webkit-transform: translate(0, 0) scale(1, 1);\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}\n  .ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: -webkit-transform 0.2s linear;\n  -webkit-transition: -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear;\n  transition: transform 0.2s linear, -webkit-transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}\n  .ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}\n  .ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n  /**\n * Checkboxes\n**/\n  .datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}\n  .datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}\n  .datatable-checkbox input[type=checkbox]:before {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}\n  .datatable-checkbox input[type=checkbox]:checked:before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}\n  .datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}\n  /**\n * Progress bar animations\n */\n  @-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n  @keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n  #mainFrame {\n  padding-left: 20px;\n  height: 100vh;\n}\n  .ngx-datatable {\n  height: 70%;\n  width: 55%;\n}\n  small {\n  font-size: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MiLCIvVXNlcnMvYi56YWhhcmlldi9hbmdHcmlkL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwic3JjL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYi56YWhhcmlldi9hbmdHcmlkL3NyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkM7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFO0VBQ0o7SUFDRSx3QkFBd0IsRUFBRTtFQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUU7RUFDMUI7SUFDRSxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLGtCQUFrQixFQUFFO0VBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFO0VBQ3JDO0lBQ0UsbUJBQW1CLEVBQUU7RUFDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFO0VBQzdCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDckI7TUFDRSxtQkFBbUIsRUFBRTtFQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUU7RUFDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFO0VBQy9COzs7SUFHRSxvQkFBb0I7SUFJcEIsYUFBYTtJQUNiLDhCQUFtQjtJQUFu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RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUVySUY7RUZ1SUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUVySUo7RUZ1SUk7RUFDRSx3Q0FBQTtFQUVBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FFcklOO0VGd0lJO0VBQ0UsaUNBQUE7RUFHQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUV0SU47RUZ5SUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFdklOO0VGNElBOztFQUFBO0VBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxnREFBQTtZQUFBLHdDQUFBO0VFeklGO0VGNElBO0lBQ0UsVUFBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7RUUxSUY7QUFDRjtFRmlJQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGdEQUFBO1lBQUEsd0NBQUE7RUV6SUY7RUY0SUE7SUFDRSxVQUFBO0lBQ0EsK0NBQUE7WUFBQSx1Q0FBQTtFRTFJRjtBQUNGO0VDNVVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FEOFVGO0VDM1VBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUQ4VUY7RUMzVUE7RUFDRSxjQUFBO0FEOFVGIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuXG4vLyBjb21tb24gZGF0YXRhYmxlIGNvbG9yc1xuJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDogI2VlZSAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCByb3cgYW5kIGNlbGwgYmFja2dyb3VuZCBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9ycyBmb3IgY2VsbCBzZWxlY3Rpb24gc3R5bGVcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBjb2xvcnMgZm9yIHNlbGVjdGVkIGNlbGwgLyByb3dcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMzA0ZmZlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6ICMxOTNhZTQgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1czogIzIwNDFlZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1czogI2ZmZiAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBoZWFkZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjogI2VlZSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciB0YWJsZSBib2R5IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXJvdy1kZXRhaWwtYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci10b3AtY29sb3I6ICNkOWQ4ZDkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIGZvb3RlciBlbGVtZW50c1xuJGRhdGF0YWJsZS1mb290ZXItY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMikgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3Igc3VtbWFyeSByb3cgZWxlbWVudHNcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZDogI2RkZCAhZGVmYXVsdDtcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZC1ob3ZlcjogI2RkZCAhZGVmYXVsdDtcblxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAkbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93O1xuXG4gICYuc3RyaXBlZCB7XG4gICAgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAmLnNpbmdsZS1zZWxlY3Rpb24sXG4gICYubXVsdGktc2VsZWN0aW9uLFxuICAmLm11bHRpLWNsaWNrLXNlbGVjdGlvbiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICYuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmhvdmVyLFxuICAgICAgJi5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6Zm9jdXMsXG4gICAgICAmLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bm90KC5jZWxsLXNlbGVjdGlvbikge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuY2VsbC1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogU2hhcmVkIFN0eWxlc1xuXHQgKi9cbiAgLmVtcHR5LXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAubG9hZGluZy1yb3cge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtaGVhZGVyLFxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtcm93LWxlZnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXRhdGFibGUtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG5cbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJi5sb25ncHJlc3Mge1xuICAgICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UsIG9wYWNpdHkgNDAwbXMgZWFzZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJi5kcmFnZ2luZyB7XG4gICAgICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWhlYWRlci1yZXNpemUtaGFuZGxlLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBCb2R5IFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgYmFja2dyb3VuZDogJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgIC8vIGNlbGwgYWN0aXZlIGNsYXNzXG4gICAgICAgIC8vICYuYWN0aXZlIHtcbiAgICAgICAgLy8gIGJhY2tncm91bmQ6ICMwODI5ZTBcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDIwOSwgMjQ5KTtcblxuICAgICAgICAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTA4LCAyMDApO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I7XG5cbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAmLmRpc2FibGVkIGEge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNnB4IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWNvbG9yLWhvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdW1tYXJ5IHJvdyBzdHlsZXNcbiAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuXG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAsIDEpO1xuICB9XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG4uZGF0YXRhYmxlLWljb24tdXA6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuLmRhdGF0YWJsZS1pY29uLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuLmRhdGF0YWJsZS1pY29uLWRvbmU6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuLmRhdGF0YWJsZS1pY29uLXBpbjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG4uZGF0YXRhYmxlLWljb24tYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cbi5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG4uZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG4uZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbi8qXG4gIFRoaXMgc3R5bGVzaGVldCB1c2VzIHNjc3MgdmFsaWFibGVzIGZvciBtb3N0IG9mIHRoZSBjb2xvcnMgLyBiYWNrZ3JvdW5kLWNvbG9ycyBvZiB0aGUgdGFibGVcbiAgdG8gZW5hYmxlIHRoZSBjdXN0b21pemF0aW9uIG9mIHRoZSBkaXNwbGF5ZWQgdGFibGUgd2l0aG91dCBjbG9uaW5nIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlXG4gIG93biBhcHBsaWNhdGlvbi5cblxuICBUbyBtb2RpZnkgdGFibGUgY29sb3JzLCBhZGQgdGhlIGZvbGxvd2luZyBsaW5lcyB0byB0aGUgc2NzcyBmaWxlIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgKHRoaXMgZXhhbXBsZSBtb2RpZmllcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHJvdyAtIHNlbGVjdGlvblR5cGUgPSBzaW5nbGUsIG11bHRpIG9yIG11bHRpQ2xpY2spOlxuXG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHllbGxvdywgMC4yKTtcblxuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG5UaGF0J3MgYWxsLlxuKi9cbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAvKipcbiAgKiBTaGFyZWQgU3R5bGVzXG4gICovXG4gIC8qKlxuICAqIEdsb2JhbCBSb3cgU3R5bGVzXG4gICovXG4gIC8qKlxuICAqIEhlYWRlciBTdHlsZXNcbiAgKi9cbiAgLyoqXG4gICogQm9keSBTdHlsZXNcbiAgKi9cbiAgLyoqXG4gICogRm9vdGVyIFN0eWxlc1xuICAqL1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc3RyaXBlZCAuZGF0YXRhYmxlLXJvdy1vZGQge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cywgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cywgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlciwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5M2FlNDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6Zm9jdXMsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmVtcHR5LXJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDA7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1yb3ctcmlnaHQsXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB6LWluZGV4OiA5OTk5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuZHJhZ2dpbmcgLnJlc2l6ZS1oYW5kbGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAucmVzaXplLWhhbmRsZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWdyb3VwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDlkOGQ5O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDFmOTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAucHJvZ3Jlc3MtbGluZWFyIC5jb250YWluZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gIGFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwNmNjODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxLjJyZW07XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gIGhlaWdodDogMjJweDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiA2cHggM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDNweDtcbn1cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XG59XG4uZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTtcbiAgfVxufVxuI21haW5GcmFtZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5neC1kYXRhdGFibGUge1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDU1JTtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDUwJTtcbn0iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblxuXG4jbWFpbkZyYW1le1xuICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5neC1kYXRhdGFibGUge1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDU1JTtcbn1cblxuc21hbGx7XG4gIGZvbnQtc2l6ZTogNTAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/grid/grid.component.ts":
  /*!****************************************!*\
    !*** ./src/app/grid/grid.component.ts ***!
    \****************************************/

  /*! exports provided: GridComponent */

  /***/
  function srcAppGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
      return GridComponent;
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


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _swimlane_ngx_datatable___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-datatable/ */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js"); // templateUrl: './grid.component.html',
    // styleUrls: ['./grid.component.css']


    var GridComponent =
    /*#__PURE__*/
    function () {
      function GridComponent(data) {
        var _this4 = this;

        _classCallCheck(this, GridComponent);

        this.data = data;
        this.rows = [];
        this.expanded = {};
        this.selected = [];
        this.ColumnMode = _swimlane_ngx_datatable___WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.SortType = _swimlane_ngx_datatable___WEBPACK_IMPORTED_MODULE_3__["SortType"];
        this.SelectionType = _swimlane_ngx_datatable___WEBPACK_IMPORTED_MODULE_3__["SelectionType"];
        this.data = data;
        data.fetchMain(function (data1) {
          _this4.rows = Object.values(data1);

          _this4.addLocalData();
        });
      }

      _createClass(GridComponent, [{
        key: "addLocalData",
        value: function addLocalData() {
          var local = localStorage.getItem('dailySales') || {}; // console.log(local);
        }
      }, {
        key: "onPage",
        value: function onPage(event) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(function () {// console.log('paged!', event);
          }, 100);
        }
      }, {
        key: "toggleExpandRow",
        value: function toggleExpandRow(row) {
          // console.log('Toggled Expand Row!', row);
          this.table.rowDetail.toggleExpandRow(row);
        }
      }, {
        key: "onDetailToggle",
        value: function onDetailToggle(event) {// console.log('Detail Toggled', event);
        }
      }, {
        key: "onSelect",
        value: function onSelect(_ref) {
          var selected = _ref.selected;
          this.data.setFilter(selected[0]); // console.log('Select Event', selected, this.selected);
        }
      }, {
        key: "onActivate",
        value: function onActivate(event) {// console.log('Activate Event', event);
          // this.selected = event.row;
        }
      }]);

      return GridComponent;
    }();

    GridComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTable', {
      static: false
    })], GridComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', {
      static: false
    })], GridComponent.prototype, "picker", void 0);
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/grid/grid.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grid.component.scss */
      "./src/app/grid/grid.component.scss")).default]
    })], GridComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/b.zahariev/angGrid/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
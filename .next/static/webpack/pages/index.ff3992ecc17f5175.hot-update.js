"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/menu-ribbon/index.js":
/*!***************************************************!*\
  !*** ./src/pages/components/menu-ribbon/index.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst MenuRibbon = (props)=>{\n    const { page , setPage  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {\n        direction: \"horizontal\",\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().icons),\n        split: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n            type: \"vertical\",\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().divider)\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.HomeOutlined, {\n                onClick: ()=>setPage(1),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().home)\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CalculatorOutlined, {\n                onClick: ()=>setPage(2),\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().calc)\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MenuRibbon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuRibbon);\nvar _c;\n$RefreshReg$(_c, \"MenuRibbon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51LXJpYmJvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRVk7QUFJWDtBQUVtQjtBQUU5QyxNQUFNTSxhQUFhLENBQUNDLFFBQVU7SUFDNUIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRSxHQUFHRjtJQUMxQixxQkFDRSw4REFBQ0wsdUNBQUtBO1FBQ0pRLFdBQVc7UUFDWEMsV0FBV04sc0VBQVk7UUFDdkJRLHFCQUFPLDhEQUFDWix5Q0FBT0E7WUFBQ2EsTUFBSztZQUFXSCxXQUFXTix3RUFBYzs7OzBCQUV6RCw4REFBQ0YsMkRBQVlBO2dCQUFDYSxTQUFTLElBQU1QLFFBQVE7Z0JBQUlFLFdBQVdOLHFFQUFXOzs7Ozs7MEJBQy9ELDhEQUFDRCxpRUFBa0JBO2dCQUFDWSxTQUFTLElBQU1QLFFBQVE7Z0JBQUlFLFdBQVdOLHFFQUFXOzs7Ozs7Ozs7Ozs7QUFHM0U7S0FaTUM7QUFjTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51LXJpYmJvbi9pbmRleC5qcz8xY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IERpdmlkZXIsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBIb21lT3V0bGluZWQsXHJcbiAgQ2FsY3VsYXRvck91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNZW51UmliYm9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwYWdlLCBzZXRQYWdlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFNwYWNlXHJcbiAgICAgIGRpcmVjdGlvbj17XCJob3Jpem9udGFsXCJ9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25zfVxyXG4gICAgICBzcGxpdD17PERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz59XHJcbiAgICA+XHJcbiAgICAgIDxIb21lT3V0bGluZWQgb25DbGljaz17KCkgPT4gc2V0UGFnZSgxKX0gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0vPlxyXG4gICAgICA8Q2FsY3VsYXRvck91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoMil9IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN9Lz5cclxuICAgIDwvU3BhY2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVSaWJib247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRpdmlkZXIiLCJTcGFjZSIsIkhvbWVPdXRsaW5lZCIsIkNhbGN1bGF0b3JPdXRsaW5lZCIsInN0eWxlcyIsIk1lbnVSaWJib24iLCJwcm9wcyIsInBhZ2UiLCJzZXRQYWdlIiwiZGlyZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWNvbnMiLCJzcGxpdCIsInR5cGUiLCJkaXZpZGVyIiwib25DbGljayIsImhvbWUiLCJjYWxjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/menu-ribbon/index.js\n"));

/***/ })

});
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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menu_ribbon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-ribbon */ \"./src/pages/components/menu-ribbon/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_faq_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faq-list */ \"./src/pages/components/faq-list/index.js\");\n/* harmony import */ var _components_tracking_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tracking-list */ \"./src/pages/components/tracking-list/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_mac_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mac-calculator */ \"./node_modules/react-mac-calculator/dist/index.es.js\");\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile */ \"./src/pages/components/profile/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst { defaultAlgorithm , darkAlgorithm  } = antd__WEBPACK_IMPORTED_MODULE_8__.theme;\nfunction Home() {\n    _s();\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const handleClick = ()=>{\n        setIsDarkMode((previousValue)=>!previousValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.ConfigProvider, {\n        theme: {\n            algorithm: !isDarkMode ? darkAlgorithm : defaultAlgorithm\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"InfriendsCargo\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Трекинг системы\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    page === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tracking_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 24\n                    }, this),\n                    page === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_mac_calculator__WEBPACK_IMPORTED_MODULE_6__.Calculator, {}, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 24\n                    }, this),\n                    page === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        loggedIn: loggedIn,\n                        setLoggedIn: setLoggedIn\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faq_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_ribbon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        page: page,\n                        setPage: setPage,\n                        loggedIn: loggedIn\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IX8MBAWhSkR57RlQle+Ew3oPWuQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDcUI7QUFFSjtBQUNGO0FBQ1U7QUFFckI7QUFDb0I7QUFDSDtBQUNQO0FBRTNDLE1BQU0sRUFBRVcsaUJBQWdCLEVBQUVDLGNBQWEsRUFBRSxHQUFHTCx1Q0FBS0E7QUFFbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDLE1BQU1lLGNBQWMsSUFBTTtRQUN4QkwsY0FBYyxDQUFDTSxnQkFBa0IsQ0FBQ0E7SUFDcEM7SUFFQSxxQkFDRSw4REFBQ2YsZ0RBQWNBO1FBQ2JDLE9BQU87WUFDTGUsV0FBVyxDQUFDUixhQUFhRixnQkFBZ0JELGdCQUFnQjtRQUMzRDs7MEJBRUEsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUN1QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBVzdCLHFFQUFXOztvQkFDekJjLFNBQVMsbUJBQUssOERBQUNaLGlFQUFZQTs7Ozs7b0JBQzNCWSxTQUFTLG1CQUFLLDhEQUFDUCw0REFBVUE7Ozs7O29CQUN6Qk8sU0FBUyxtQkFDUiw4REFBQ04sMkRBQU9BO3dCQUFDUSxVQUFVQTt3QkFBVUMsYUFBYUE7Ozs7OztrQ0FFNUMsOERBQUNoQiw0REFBT0E7Ozs7O2tDQUNSLDhEQUFDRiwrREFBVUE7d0JBQUNlLE1BQU1BO3dCQUFNQyxTQUFTQTt3QkFBU0MsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RCxDQUFDO0dBakN1Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTWVudVJpYmJvbiBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUtcmliYm9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEZhcUxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9mYXEtbGlzdFwiO1xyXG5pbXBvcnQgVHJhY2tpbmdMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvdHJhY2tpbmctbGlzdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIsIHRoZW1lLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yIH0gZnJvbSBcInJlYWN0LW1hYy1jYWxjdWxhdG9yXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgeyBkZWZhdWx0QWxnb3JpdGhtLCBkYXJrQWxnb3JpdGhtIH0gPSB0aGVtZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDMpO1xyXG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldElzRGFya01vZGUoKHByZXZpb3VzVmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbmZpZ1Byb3ZpZGVyXHJcbiAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgYWxnb3JpdGhtOiAhaXNEYXJrTW9kZSA/IGRhcmtBbGdvcml0aG0gOiBkZWZhdWx0QWxnb3JpdGhtLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SW5mcmllbmRzQ2FyZ288L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLQotGA0LXQutC40L3QsyDRgdC40YHRgtC10LzRi1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAge3BhZ2UgPT09IDEgJiYgPFRyYWNraW5nTGlzdCAvPn1cclxuICAgICAgICB7cGFnZSA9PT0gMiAmJiA8Q2FsY3VsYXRvciAvPn1cclxuICAgICAgICB7cGFnZSA9PT0gMyAmJiAoXHJcbiAgICAgICAgICA8UHJvZmlsZSBsb2dnZWRJbj17bG9nZ2VkSW59IHNldExvZ2dlZEluPXtzZXRMb2dnZWRJbn0gLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGYXFMaXN0IC8+XHJcbiAgICAgICAgPE1lbnVSaWJib24gcGFnZT17cGFnZX0gc2V0UGFnZT17c2V0UGFnZX0gbG9nZ2VkSW49e2xvZ2dlZElufSAvPlxyXG4gICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L0J1dHRvbj4gKi99XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvQ29uZmlnUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIk1lbnVSaWJib24iLCJzdHlsZXMiLCJGYXFMaXN0IiwiVHJhY2tpbmdMaXN0IiwidXNlU3RhdGUiLCJDb25maWdQcm92aWRlciIsInRoZW1lIiwiQnV0dG9uIiwiQ2FsY3VsYXRvciIsIlByb2ZpbGUiLCJkZWZhdWx0QWxnb3JpdGhtIiwiZGFya0FsZ29yaXRobSIsIkhvbWUiLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsInBhZ2UiLCJzZXRQYWdlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsImhhbmRsZUNsaWNrIiwicHJldmlvdXNWYWx1ZSIsImFsZ29yaXRobSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
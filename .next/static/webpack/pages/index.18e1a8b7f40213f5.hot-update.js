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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst MenuRibbon = (props)=>{\n    const { page , setPage , loggedIn , admin  } = props;\n    const homeButtonProps = {\n        onClick: loggedIn ? ()=>setPage(1) : ()=>null,\n        className: loggedIn ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().home) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().unauth)\n    };\n    const calcButtonProps = {\n        onClick: loggedIn ? ()=>setPage(2) : ()=>null,\n        className: loggedIn ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().calc) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().unauth)\n    };\n    const userButtonProps = {\n        onClick: ()=>setPage(3),\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().calc)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {\n        direction: \"horizontal\",\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().icons),\n        split: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n            type: \"vertical\",\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().divider)\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.HomeOutlined, {\n                ...homeButtonProps\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CalculatorOutlined, {\n                ...calcButtonProps\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {\n                ...userButtonProps\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                style: {\n                    justifyContent: \"center\",\n                    alignSelf: \"center\"\n                },\n                onClick: ()=>{\n                    window.open(\"http://api.infriends.kz/admin/\", \"_blank\");\n                },\n                children: \"Админ\"\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                style: {\n                    justifyContent: \"center\",\n                    alignSelf: \"center\"\n                },\n                onClick: loggedIn && !admin ? ()=>setPage(4) : ()=>null,\n                disabled: !admin,\n                children: \"Админ - Добавление посылок\"\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MenuRibbon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuRibbon);\nvar _c;\n$RefreshReg$(_c, \"MenuRibbon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51LXJpYmJvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRWdDO0FBSy9CO0FBRW1CO0FBRTlDLE1BQU1TLGFBQWEsQ0FBQ0MsUUFBVTtJQUM1QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFHSjtJQUUzQyxNQUFNSyxrQkFBa0I7UUFDdEJDLFNBQVNILFdBQVcsSUFBTUQsUUFBUSxLQUFLLElBQU0sSUFBSTtRQUNqREssV0FBV0osV0FBV0wscUVBQVcsR0FBR0EsdUVBQWE7SUFDbkQ7SUFFQSxNQUFNWSxrQkFBa0I7UUFDdEJKLFNBQVNILFdBQVcsSUFBTUQsUUFBUSxLQUFLLElBQU0sSUFBSTtRQUNqREssV0FBV0osV0FBV0wscUVBQVcsR0FBR0EsdUVBQWE7SUFDbkQ7SUFFQSxNQUFNYyxrQkFBa0I7UUFDdEJOLFNBQVMsSUFBTUosUUFBUTtRQUN2QkssV0FBV1QscUVBQVc7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0wsdUNBQUtBO1FBQ0pvQixXQUFXO1FBQ1hOLFdBQVdULHNFQUFZO1FBQ3ZCaUIscUJBQU8sOERBQUN2Qix5Q0FBT0E7WUFBQ3dCLE1BQUs7WUFBV1QsV0FBV1Qsd0VBQWM7OzswQkFFekQsOERBQUNILDJEQUFZQTtnQkFBRSxHQUFHVSxlQUFlOzs7Ozs7MEJBQ2pDLDhEQUFDVCxpRUFBa0JBO2dCQUFFLEdBQUdjLGVBQWU7Ozs7OzswQkFDdkMsOERBQUNiLDJEQUFZQTtnQkFBRSxHQUFHZSxlQUFlOzs7Ozs7MEJBQ2pDLDhEQUFDckIsd0NBQU1BO2dCQUNMMkIsT0FBTztvQkFBRUMsZ0JBQWdCO29CQUFVQyxXQUFXO2dCQUFTO2dCQUN2RGQsU0FBUyxJQUFNO29CQUNiZSxPQUFPQyxJQUFJLENBQUMsa0NBQWtDO2dCQUNoRDswQkFDRDs7Ozs7OzBCQUdELDhEQUFDL0Isd0NBQU1BO2dCQUNMMkIsT0FBTztvQkFBRUMsZ0JBQWdCO29CQUFVQyxXQUFXO2dCQUFTO2dCQUN2RGQsU0FBU0gsWUFBWSxDQUFDQyxRQUFRLElBQU1GLFFBQVEsS0FBSyxJQUFNLElBQUk7Z0JBQzNEcUIsVUFBVSxDQUFDbkI7MEJBQ1o7Ozs7Ozs7Ozs7OztBQUtQO0tBNUNNTDtBQThDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51LXJpYmJvbi9pbmRleC5qcz8xY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgU3BhY2UsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBDYWxjdWxhdG9yT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNZW51UmliYm9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwYWdlLCBzZXRQYWdlLCBsb2dnZWRJbiwgYWRtaW4gfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBob21lQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBvbkNsaWNrOiBsb2dnZWRJbiA/ICgpID0+IHNldFBhZ2UoMSkgOiAoKSA9PiBudWxsLFxyXG4gICAgY2xhc3NOYW1lOiBsb2dnZWRJbiA/IHN0eWxlcy5ob21lIDogc3R5bGVzLnVuYXV0aCxcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBvbkNsaWNrOiBsb2dnZWRJbiA/ICgpID0+IHNldFBhZ2UoMikgOiAoKSA9PiBudWxsLFxyXG4gICAgY2xhc3NOYW1lOiBsb2dnZWRJbiA/IHN0eWxlcy5jYWxjIDogc3R5bGVzLnVuYXV0aCxcclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VyQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRQYWdlKDMpLFxyXG4gICAgY2xhc3NOYW1lOiBzdHlsZXMuY2FsYyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNwYWNlXHJcbiAgICAgIGRpcmVjdGlvbj17XCJob3Jpem9udGFsXCJ9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25zfVxyXG4gICAgICBzcGxpdD17PERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz59XHJcbiAgICA+XHJcbiAgICAgIDxIb21lT3V0bGluZWQgey4uLmhvbWVCdXR0b25Qcm9wc30gLz5cclxuICAgICAgPENhbGN1bGF0b3JPdXRsaW5lZCB7Li4uY2FsY0J1dHRvblByb3BzfSAvPlxyXG4gICAgICA8VXNlck91dGxpbmVkIHsuLi51c2VyQnV0dG9uUHJvcHN9IC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwOi8vYXBpLmluZnJpZW5kcy5rei9hZG1pbi9cIiwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgINCQ0LTQvNC40L1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgb25DbGljaz17bG9nZ2VkSW4gJiYgIWFkbWluID8gKCkgPT4gc2V0UGFnZSg0KSA6ICgpID0+IG51bGx9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyFhZG1pbn1cclxuICAgICAgPlxyXG4gICAgICAgINCQ0LTQvNC40L0gLSDQlNC+0LHQsNCy0LvQtdC90LjQtSDQv9C+0YHRi9C70L7QulxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3BhY2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVSaWJib247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJTcGFjZSIsIlR5cG9ncmFwaHkiLCJIb21lT3V0bGluZWQiLCJDYWxjdWxhdG9yT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJzdHlsZXMiLCJNZW51UmliYm9uIiwicHJvcHMiLCJwYWdlIiwic2V0UGFnZSIsImxvZ2dlZEluIiwiYWRtaW4iLCJob21lQnV0dG9uUHJvcHMiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaG9tZSIsInVuYXV0aCIsImNhbGNCdXR0b25Qcm9wcyIsImNhbGMiLCJ1c2VyQnV0dG9uUHJvcHMiLCJkaXJlY3Rpb24iLCJpY29ucyIsInNwbGl0IiwidHlwZSIsImRpdmlkZXIiLCJzdHlsZSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25TZWxmIiwid2luZG93Iiwib3BlbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/menu-ribbon/index.js\n"));

/***/ })

});
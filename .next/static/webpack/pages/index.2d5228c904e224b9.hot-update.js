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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst MenuRibbon = (props)=>{\n    const { page , setPage , loggedIn  } = props;\n    const homeButtonProps = {\n        onClick: loggedIn ? ()=>setPage(1) : ()=>null,\n        className: loggedIn ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().home) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().unauth)\n    };\n    const calcButtonProps = {\n        onClick: loggedIn ? ()=>setPage(2) : ()=>null,\n        className: loggedIn ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().calc) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().unauth)\n    };\n    const userButtonProps = {\n        onClick: ()=>setPage(3),\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().calc)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {\n        direction: \"horizontal\",\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().icons),\n        split: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n            type: \"vertical\",\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().divider)\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.HomeOutlined, {\n                ...homeButtonProps\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CalculatorOutlined, {\n                ...calcButtonProps\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {\n                ...userButtonProps\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                style: {\n                    justifyContent: \"center\",\n                    alignSelf: \"center\"\n                },\n                onClick: ()=>{\n                    window.open(\"http://api.infriends.kz/admin\", \"_blank\");\n                },\n                children: \"Админ\"\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\menu-ribbon\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MenuRibbon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuRibbon);\nvar _c;\n$RefreshReg$(_c, \"MenuRibbon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51LXJpYmJvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRWdDO0FBSy9CO0FBRW1CO0FBRTlDLE1BQU1TLGFBQWEsQ0FBQ0MsUUFBVTtJQUM1QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxTQUFRLEVBQUUsR0FBR0g7SUFFcEMsTUFBTUksa0JBQWtCO1FBQ3RCQyxTQUFTRixXQUFZLElBQU1ELFFBQVEsS0FBSyxJQUFNLElBQUk7UUFDbERJLFdBQVdILFdBQVdMLHFFQUFXLEdBQUdBLHVFQUFhO0lBQ25EO0lBRUEsTUFBTVcsa0JBQWtCO1FBQ3RCSixTQUFTRixXQUFZLElBQU1ELFFBQVEsS0FBSyxJQUFNLElBQUk7UUFDbERJLFdBQVdILFdBQVdMLHFFQUFXLEdBQUdBLHVFQUFhO0lBQ25EO0lBRUEsTUFBTWEsa0JBQWtCO1FBQ3RCTixTQUFTLElBQU1ILFFBQVE7UUFDdkJJLFdBQVdSLHFFQUFXO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNMLHVDQUFLQTtRQUNKbUIsV0FBVztRQUNYTixXQUFXUixzRUFBWTtRQUN2QmdCLHFCQUFPLDhEQUFDdEIseUNBQU9BO1lBQUN1QixNQUFLO1lBQVdULFdBQVdSLHdFQUFjOzs7MEJBRXpELDhEQUFDSCwyREFBWUE7Z0JBQUUsR0FBR1MsZUFBZTs7Ozs7OzBCQUNqQyw4REFBQ1IsaUVBQWtCQTtnQkFBRSxHQUFHYSxlQUFlOzs7Ozs7MEJBQ3ZDLDhEQUFDWiwyREFBWUE7Z0JBQUUsR0FBR2MsZUFBZTs7Ozs7OzBCQUNqQyw4REFBQ3BCLHdDQUFNQTtnQkFBQzBCLE9BQU87b0JBQUNDLGdCQUFnQjtvQkFBVUMsV0FBVztnQkFBUTtnQkFBR2QsU0FBUyxJQUFNO29CQUFDZSxPQUFPQyxJQUFJLENBQUMsaUNBQWlDO2dCQUFVOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFHaEo7S0E5Qk10QjtBQWdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51LXJpYmJvbi9pbmRleC5qcz8xY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgU3BhY2UsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBDYWxjdWxhdG9yT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNZW51UmliYm9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwYWdlLCBzZXRQYWdlLCBsb2dnZWRJbiB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGhvbWVCdXR0b25Qcm9wcyA9IHtcclxuICAgIG9uQ2xpY2s6IGxvZ2dlZEluICA/ICgpID0+IHNldFBhZ2UoMSkgOiAoKSA9PiBudWxsLFxyXG4gICAgY2xhc3NOYW1lOiBsb2dnZWRJbiA/IHN0eWxlcy5ob21lIDogc3R5bGVzLnVuYXV0aCxcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBvbkNsaWNrOiBsb2dnZWRJbiAgPyAoKSA9PiBzZXRQYWdlKDIpIDogKCkgPT4gbnVsbCxcclxuICAgIGNsYXNzTmFtZTogbG9nZ2VkSW4gPyBzdHlsZXMuY2FsYyA6IHN0eWxlcy51bmF1dGgsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXNlckJ1dHRvblByb3BzID0ge1xyXG4gICAgb25DbGljazogKCkgPT4gc2V0UGFnZSgzKSxcclxuICAgIGNsYXNzTmFtZTogc3R5bGVzLmNhbGMsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcGFjZVxyXG4gICAgICBkaXJlY3Rpb249e1wiaG9yaXpvbnRhbFwifVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uc31cclxuICAgICAgc3BsaXQ9ezxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJ9IC8+fVxyXG4gICAgPlxyXG4gICAgICA8SG9tZU91dGxpbmVkIHsuLi5ob21lQnV0dG9uUHJvcHN9IC8+XHJcbiAgICAgIDxDYWxjdWxhdG9yT3V0bGluZWQgey4uLmNhbGNCdXR0b25Qcm9wc30gLz5cclxuICAgICAgPFVzZXJPdXRsaW5lZCB7Li4udXNlckJ1dHRvblByb3BzfSAvPlxyXG4gICAgICA8QnV0dG9uIHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnblNlbGY6ICdjZW50ZXInfX0gb25DbGljaz17KCkgPT4ge3dpbmRvdy5vcGVuKCdodHRwOi8vYXBpLmluZnJpZW5kcy5rei9hZG1pbicsICdfYmxhbmsnKTt9fT7QkNC00LzQuNC9PC9CdXR0b24+XHJcbiAgICA8L1NwYWNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51UmliYm9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJEaXZpZGVyIiwiU3BhY2UiLCJUeXBvZ3JhcGh5IiwiSG9tZU91dGxpbmVkIiwiQ2FsY3VsYXRvck91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwic3R5bGVzIiwiTWVudVJpYmJvbiIsInByb3BzIiwicGFnZSIsInNldFBhZ2UiLCJsb2dnZWRJbiIsImhvbWVCdXR0b25Qcm9wcyIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJob21lIiwidW5hdXRoIiwiY2FsY0J1dHRvblByb3BzIiwiY2FsYyIsInVzZXJCdXR0b25Qcm9wcyIsImRpcmVjdGlvbiIsImljb25zIiwic3BsaXQiLCJ0eXBlIiwiZGl2aWRlciIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnblNlbGYiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/menu-ribbon/index.js\n"));

/***/ })

});
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

/***/ "./src/pages/components/profile/index.js":
/*!***********************************************!*\
  !*** ./src/pages/components/profile/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst { Panel  } = antd__WEBPACK_IMPORTED_MODULE_2__.Collapse;\n\nconst Profile = (props)=>{\n    _s();\n    const [questions, setQuestions] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        fetch(\"http://api.infriends.kz/questions\").then((r)=>r.data).then((rInner)=>{\n            console.log(rInner);\n            setQuestions(rInner);\n        }).catch((e)=>console.log(e));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                        label: \"Логин\",\n                        labelCol: {\n                            span: 24\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                            placeholder: \"Введите логин...\",\n                            style: {\n                                width: \"100%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                            label: \"Пароль\",\n                            labelCol: {\n                                span: 24\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                placeholder: \"Введите пароль...\",\n                                style: {\n                                    width: \"100%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        span: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            children: \"Войти\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        span: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            children: \"Регистрация\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\profile\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"1ery3Y2F+nTWSbC27k3nmjCRtvo=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9wcm9maWxlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTJDO0FBRXJFLE1BQU0sRUFBRVEsTUFBSyxFQUFFLEdBQUdQLDBDQUFRQTtBQUVvQjtBQUU5QyxNQUFNUyxVQUFVLENBQUNDLFFBQVU7O0lBQ3pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHYixxREFBYyxDQUFDLEVBQUU7SUFFbkRBLHNEQUFlLENBQUMsSUFBTTtRQUNwQmdCLE1BQU8scUNBQ0pDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJLEVBQ2xCRixJQUFJLENBQUMsQ0FBQ0csU0FBVztZQUNoQkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaUCxhQUFhTztRQUNmLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQyxJQUFNSCxRQUFRQyxHQUFHLENBQUNFO0lBQzlCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbEIsc0NBQUlBOzswQkFDSCw4REFBQ0gscUNBQUdBOzBCQUNGLDRFQUFDQyxxQ0FBR0E7OEJBQ0YsNEVBQUNGLDJDQUFTO3dCQUFDd0IsT0FBTTt3QkFBUUMsVUFBVTs0QkFBRUMsTUFBTTt3QkFBRztrQ0FDNUMsNEVBQUN2Qix1Q0FBS0E7NEJBQ0p3QixhQUFZOzRCQUNaQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSy9CLDhEQUFDNUIscUNBQUdBOzBCQUNGLDRFQUFDQyxxQ0FBR0E7O3NDQUNGLDhEQUFDRiwyQ0FBUzs0QkFBQ3dCLE9BQU07NEJBQVNDLFVBQVU7Z0NBQUVDLE1BQU07NEJBQUc7c0NBQzdDLDRFQUFDdkIsdUNBQUtBO2dDQUNKd0IsYUFBWTtnQ0FDWkMsT0FBTztvQ0FBRUMsT0FBTztnQ0FBTzs7Ozs7Ozs7Ozs7d0JBRWQ7Ozs7Ozs7Ozs7OzswQkFHakIsOERBQUM1QixxQ0FBR0E7O2tDQUNGLDhEQUFDQyxxQ0FBR0E7d0JBQUN3QixNQUFNO2tDQUNULDRFQUFDckIsd0NBQU1BO3NDQUFDOzs7Ozs7Ozs7OztrQ0FFViw4REFBQ0gscUNBQUdBO3dCQUFDd0IsTUFBTTtrQ0FDVCw0RUFBQ3JCLHdDQUFNQTtzQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0E3Q01HO0tBQUFBO0FBK0NOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXguanM/Yjc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb2xsYXBzZSwgRm9ybSwgUm93LCBDb2wsIElucHV0LCBDYXJkLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgeyBQYW5lbCB9ID0gQ29sbGFwc2U7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9hcGkuaW5mcmllbmRzLmt6L3F1ZXN0aW9uc2ApXHJcbiAgICAgIC50aGVuKChyKSA9PiByLmRhdGEpXHJcbiAgICAgIC50aGVuKChySW5uZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhySW5uZXIpO1xyXG4gICAgICAgIHNldFF1ZXN0aW9ucyhySW5uZXIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cItCb0L7Qs9C40L1cIiBsYWJlbENvbD17eyBzcGFuOiAyNCB9fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9Li4uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLQn9Cw0YDQvtC70YxcIiBsYWJlbENvbD17eyBzcGFuOiAyNCB9fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwuLi5cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPntcIiBcIn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uPtCS0L7QudGC0Lg8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgIDxCdXR0b24+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29sbGFwc2UiLCJGb3JtIiwiUm93IiwiQ29sIiwiSW5wdXQiLCJDYXJkIiwiQnV0dG9uIiwiUGFuZWwiLCJzdHlsZXMiLCJQcm9maWxlIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInIiLCJkYXRhIiwicklubmVyIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZSIsIkl0ZW0iLCJsYWJlbCIsImxhYmVsQ29sIiwic3BhbiIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/profile/index.js\n"));

/***/ })

});
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

/***/ "./src/pages/components/faq-list/index.js":
/*!************************************************!*\
  !*** ./src/pages/components/faq-list/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\nconst { Panel  } = antd__WEBPACK_IMPORTED_MODULE_2__.Collapse;\n\nconst FaqList = (props)=>{\n    _s();\n    const [questions, setQuestions] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        fetch(\"http://api.infriends.kz/questions\").then((r)=>r.data).then((rInner)=>{\n            console.log(rInner);\n            setQuestions(rInner);\n        }).catch((e)=>console.log(e));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),\n        children: [\n            questions === null || questions === void 0 ? void 0 : questions.map((x, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Panel, {\n                    header: x.question,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: x.answer\n                    }, void 0, false, {\n                        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                }, i, false, {\n                    fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Panel, {\n                header: \"Где фактически находится офис вашей компании?\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Всю информацию можно найти на странице контакты\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, questions ? questions.length + 1 : 1, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Panel, {\n                header: \"В чем разница при регистрации на юридическое лицо или на физическое?\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"У юридических лиц есть ограничения в методах оплаты, они могут оплатить счет строго через банк, наличными в офисе либо сделать взнос на пластиковую карту (Оплата наличными в любом городе). Юридическим лицам предоставляются закрывающие документы по оплате (акт выполненных работ и счет фактура). Также для юридических лиц не доступен для покупки тарифный план хостинга Малый Бизнес. Для физических лиц мы предоставляем бухгалтерские документы при условии, что оплата будет произведена через банк, либо наличными в офисе нашей компании.\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, questions ? questions.length + 2 : 2, false, {\n                fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\еее\\\\tracking-next-js\\\\src\\\\pages\\\\components\\\\faq-list\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FaqList, \"dQZvvII9Wd051MdtqfvnR/Vf/F0=\");\n_c = FaqList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FaqList);\nvar _c;\n$RefreshReg$(_c, \"FaqList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9mYXEtbGlzdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRU07QUFFaEMsTUFBTSxFQUFFRSxNQUFLLEVBQUUsR0FBR0QsMENBQVFBO0FBRW9CO0FBRTlDLE1BQU1HLFVBQVUsQ0FBQ0MsUUFBVTs7SUFDekIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLHFEQUFjLENBQUMsSUFBSTtJQUVyREEsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCVSxNQUFPLHFDQUNKQyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSSxFQUNsQkYsSUFBSSxDQUFDLENBQUNHLFNBQVc7WUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWlAsYUFBYU87UUFDZixHQUNDRyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUgsUUFBUUMsR0FBRyxDQUFDRTtJQUM5QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2pCLDBDQUFRQTtRQUFDa0IsV0FBV2hCLHFFQUFXOztZQUM3Qkcsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXZSxHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTTtnQkFDeEIscUJBQ0UsOERBQUNyQjtvQkFBTXNCLFFBQVFGLEVBQUVHLFFBQVE7OEJBQ3ZCLDRFQUFDQztrQ0FBR0osRUFBRUssTUFBTTs7Ozs7O21CQURrQko7Ozs7O1lBSXBDOzBCQUNBLDhEQUFDckI7Z0JBQ0NzQixRQUFPOzBCQUdQLDRFQUFDRTs4QkFBRTs7Ozs7O2VBRkVwQixZQUFZQSxVQUFVc0IsTUFBTSxHQUFHLElBQUksQ0FBQzs7Ozs7MEJBSTNDLDhEQUFDMUI7Z0JBQ0NzQixRQUFPOzBCQUdQLDRFQUFDRTs4QkFBRTs7Ozs7O2VBRkVwQixZQUFZQSxVQUFVc0IsTUFBTSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7QUFlakQ7R0E3Q014QjtLQUFBQTtBQStDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9mYXEtbGlzdC9pbmRleC5qcz9hZTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBGYXFMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9hcGkuaW5mcmllbmRzLmt6L3F1ZXN0aW9uc2ApXHJcbiAgICAgIC50aGVuKChyKSA9PiByLmRhdGEpXHJcbiAgICAgIC50aGVuKChySW5uZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhySW5uZXIpO1xyXG4gICAgICAgIHNldFF1ZXN0aW9ucyhySW5uZXIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sbGFwc2UgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgIHtxdWVzdGlvbnM/Lm1hcCgoeCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGFuZWwgaGVhZGVyPXt4LnF1ZXN0aW9ufSBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8cD57eC5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAgPFBhbmVsXHJcbiAgICAgICAgaGVhZGVyPVwi0JPQtNC1INGE0LDQutGC0LjRh9C10YHQutC4INC90LDRhdC+0LTQuNGC0YHRjyDQvtGE0LjRgSDQstCw0YjQtdC5INC60L7QvNC/0LDQvdC40Lg/XCJcclxuICAgICAgICBrZXk9e3F1ZXN0aW9ucyA/IHF1ZXN0aW9ucy5sZW5ndGggKyAxIDogMX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPtCS0YHRjiDQuNC90YTQvtGA0LzQsNGG0LjRjiDQvNC+0LbQvdC+INC90LDQudGC0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC60L7QvdGC0LDQutGC0Ys8L3A+XHJcbiAgICAgIDwvUGFuZWw+XHJcbiAgICAgIDxQYW5lbFxyXG4gICAgICAgIGhlYWRlcj1cItCSINGH0LXQvCDRgNCw0LfQvdC40YbQsCDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQvdCwINGO0YDQuNC00LjRh9C10YHQutC+0LUg0LvQuNGG0L4g0LjQu9C4INC90LAg0YTQuNC30LjRh9C10YHQutC+0LU/XCJcclxuICAgICAgICBrZXk9e3F1ZXN0aW9ucyA/IHF1ZXN0aW9ucy5sZW5ndGggKyAyIDogMn1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAg0KMg0Y7RgNC40LTQuNGH0LXRgdC60LjRhSDQu9C40YYg0LXRgdGC0Ywg0L7Qs9GA0LDQvdC40YfQtdC90LjRjyDQsiDQvNC10YLQvtC00LDRhSDQvtC/0LvQsNGC0YssINC+0L3QuCDQvNC+0LPRg9GCXHJcbiAgICAgICAgICDQvtC/0LvQsNGC0LjRgtGMINGB0YfQtdGCINGB0YLRgNC+0LPQviDRh9C10YDQtdC3INCx0LDQvdC6LCDQvdCw0LvQuNGH0L3Ri9C80Lgg0LIg0L7RhNC40YHQtSDQu9C40LHQviDRgdC00LXQu9Cw0YLRjCDQstC30L3QvtGBXHJcbiAgICAgICAgICDQvdCwINC/0LvQsNGB0YLQuNC60L7QstGD0Y4g0LrQsNGA0YLRgyAo0J7Qv9C70LDRgtCwINC90LDQu9C40YfQvdGL0LzQuCDQsiDQu9GO0LHQvtC8INCz0L7RgNC+0LTQtSkuINCu0YDQuNC00LjRh9C10YHQutC40LxcclxuICAgICAgICAgINC70LjRhtCw0Lwg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9GO0YLRgdGPINC30LDQutGA0YvQstCw0Y7RidC40LUg0LTQvtC60YPQvNC10L3RgtGLINC/0L4g0L7Qv9C70LDRgtC1ICjQsNC60YIg0LLRi9C/0L7Qu9C90LXQvdC90YvRhVxyXG4gICAgICAgICAg0YDQsNCx0L7RgiDQuCDRgdGH0LXRgiDRhNCw0LrRgtGD0YDQsCkuINCi0LDQutC20LUg0LTQu9GPINGO0YDQuNC00LjRh9C10YHQutC40YUg0LvQuNGGINC90LUg0LTQvtGB0YLRg9C/0LXQvSDQtNC70Y9cclxuICAgICAgICAgINC/0L7QutGD0L/QutC4INGC0LDRgNC40YTQvdGL0Lkg0L/Qu9Cw0L0g0YXQvtGB0YLQuNC90LPQsCDQnNCw0LvRi9C5INCR0LjQt9C90LXRgS4g0JTQu9GPINGE0LjQt9C40YfQtdGB0LrQuNGFINC70LjRhiDQvNGLXHJcbiAgICAgICAgICDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXQvCDQsdGD0YXQs9Cw0LvRgtC10YDRgdC60LjQtSDQtNC+0LrRg9C80LXQvdGC0Ysg0L/RgNC4INGD0YHQu9C+0LLQuNC4LCDRh9GC0L4g0L7Qv9C70LDRgtCwINCx0YPQtNC10YJcclxuICAgICAgICAgINC/0YDQvtC40LfQstC10LTQtdC90LAg0YfQtdGA0LXQtyDQsdCw0L3Quiwg0LvQuNCx0L4g0L3QsNC70LjRh9C90YvQvNC4INCyINC+0YTQuNGB0LUg0L3QsNGI0LXQuSDQutC+0LzQv9Cw0L3QuNC4LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9QYW5lbD5cclxuICAgIDwvQ29sbGFwc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbGxhcHNlIiwiUGFuZWwiLCJzdHlsZXMiLCJGYXFMaXN0IiwicHJvcHMiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInIiLCJkYXRhIiwicklubmVyIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZSIsImNsYXNzTmFtZSIsIm1lbnUiLCJtYXAiLCJ4IiwiaSIsImhlYWRlciIsInF1ZXN0aW9uIiwicCIsImFuc3dlciIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/faq-list/index.js\n"));

/***/ })

});
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignUpForm */ \"./components/SignUpForm.tsx\");\n/* harmony import */ var _hooks_useDwitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useDwitter */ \"./hooks/useDwitter.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n// import type { NextPage } from 'next'\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,_hooks_useDwitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), connect = ref.connect, account = ref.account, user = ref.user, createUser = ref.createUser;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), dweetContent = ref1[0], setDweetContent = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-center py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dwitter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-1 flex-col items-center justify-center px-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-8 text-6xl font-bold\",\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-blue-500\",\n                                children: \"Dwitter \"\n                            }, void 0, false, {\n                                fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Connect with Ethereum\",\n                        onClick: connect\n                    }, void 0, false, {\n                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this) : account.toUpperCase() !== (user === null || user === void 0 ? void 0 : user.wallet.toUpperCase()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        createUser: createUser\n                    }, void 0, false, {\n                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center w-80\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: user === null || user === void 0 ? void 0 : user.avatar,\n                                        className: \"rounded-full h-16 w-16 mr-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"rounded-xl ml-4 w-64\",\n                                        placeholder: \"What's happening?\",\n                                        value: dweetContent,\n                                        onChange: function(e) {\n                                            return setDweetContent(e.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2 flex justify-end w-72\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    label: \"Dweet\",\n                                    onClick: function() {\n                                        return console.log(dweetContent);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"flex h-24 w-full items-center justify-center border-t\",\n                children: \"Powered by Ethereum\"\n            }, void 0, false, {\n                fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roshanthankar/Desktop/dwitter/dapp/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"QxtQz9+OwgRIHnw2ngLHVk/EdnI=\", false, function() {\n    return [\n        _hooks_useDwitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwRm9ybSc7XG5pbXBvcnQgdXNlRHdpdHRlciBmcm9tICcuLi9ob29rcy91c2VEd2l0dGVyJztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgY29ubmVjdCwgYWNjb3VudCwgdXNlciwgY3JlYXRlVXNlciwgfSA9IHVzZUR3aXR0ZXIoKTtcbiAgY29uc3QgW2R3ZWV0Q29udGVudCwgc2V0RHdlZXRDb250ZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ed2l0dGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi04IHRleHQtNnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgIFdlbGNvbWUgdG8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPkR3aXR0ZXIgPC9zcGFuPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshYWNjb3VudCA/IChcbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ29ubmVjdCB3aXRoIEV0aGVyZXVtXCIgb25DbGljaz17Y29ubmVjdH0gLz5cbiAgICAgICAgKSA6IGFjY291bnQudG9VcHBlckNhc2UoKSAhPT0gdXNlcj8ud2FsbGV0LnRvVXBwZXJDYXNlKCkgPyAoXG4gICAgICAgICAgPFNpZ25VcEZvcm0gY3JlYXRlVXNlcj17Y3JlYXRlVXNlcn0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy04MFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3VzZXI/LmF2YXRhcn0gY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgaC0xNiB3LTE2IG1yLTQnIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSdyb3VuZGVkLXhsIG1sLTQgdy02NCcgcGxhY2Vob2xkZXI9XCJXaGF0J3MgaGFwcGVuaW5nP1wiIHZhbHVlPXtkd2VldENvbnRlbnR9IG9uQ2hhbmdlPXtlPT5zZXREd2VldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGp1c3RpZnktZW5kIHctNzJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiRHdlZXRcIiBvbkNsaWNrPXsoKT0+Y29uc29sZS5sb2coZHdlZXRDb250ZW50KX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIHsvKiB7XG4gICAgICAgIGR3ZWV0cy5tYXAoZHdlZXQgPT4gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndy02NCBweS0yIHB4LTQnPlxuICAgICAgICAgICAge2R3ZWV0LmNvbnRlbnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKVxuICAgICAgfSAqL31cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaC0yNCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci10XCI+XG4gICAgICAgIFBvd2VyZWQgYnkgRXRoZXJldW1cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiQnV0dG9uIiwiU2lnblVwRm9ybSIsInVzZUR3aXR0ZXIiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJjb25uZWN0IiwiYWNjb3VudCIsInVzZXIiLCJjcmVhdGVVc2VyIiwiZHdlZXRDb250ZW50Iiwic2V0RHdlZXRDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInNwYW4iLCJsYWJlbCIsIm9uQ2xpY2siLCJ0b1VwcGVyQ2FzZSIsIndhbGxldCIsImltZyIsInNyYyIsImF2YXRhciIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
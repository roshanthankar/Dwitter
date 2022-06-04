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

/***/ "./hooks/useDwitter.ts":
/*!*****************************!*\
  !*** ./hooks/useDwitter.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dwitter.json */ \"./hooks/Dwitter.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar ContractABI = _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__.abi;\nvar ContractAddress = \"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0\";\nvar Ethereum =  true && window.ethereum;\nvar getDwitterContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(Ethereum);\n    var signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(ContractAddress, ContractABI, signer);\n};\nvar useDwitter = function() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"\"\n    ]), dweets1 = ref1[0], setDweets = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), currentUser = ref2[0], setCurrentUser = ref2[1];\n    var connect = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (Ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert(\"Please install Metamask\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return Ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (!(accounts.length == 0)) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        console.log(\"No authorized accounts\");\n                        return _ctx.abrupt(\"return\");\n                    case 10:\n                        account = accounts[0];\n                        console.log(\"Connected to account: \", account);\n                        setCurrentAccount(account);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    15\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!Ethereum) {\n            console.log(\"No ethereum wallets found, please get metamask\");\n            return;\n        }\n        connect();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (currentAccount) {\n            getUser();\n        }\n    }, [\n        currentAccount\n    ]);\n    var getUser = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, user, avatar, bio, name, username, wallet;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.getUser(currentAccount);\n                    case 3:\n                        user = _ctx.sent;\n                        avatar = user.avatar, bio = user.bio, name = user.name, username = user.username, wallet = user.wallet;\n                        setCurrentUser({\n                            avatar: avatar,\n                            bio: bio,\n                            name: name,\n                            username: username,\n                            wallet: wallet\n                        });\n                        return _ctx.abrupt(\"return\", user);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createUser = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, name, bio, avatar) {\n            var contract, user;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.signup(username, name, bio, avatar);\n                    case 3:\n                        user = _ctx.sent;\n                        console.log(user);\n                        getUser();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createUser(username, name, bio, avatar) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var postDweet = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dweet) {\n            var contract;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.postDweet(dweet);\n                    case 3:\n                        _ctx.next = 5;\n                        return getDweets();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function postDweet(dweet) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getDweets = function() {\n        var _ref = _asyncToGenerator(_Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, dweets;\n            return _Users_roshanthankar_Desktop_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.getDweets();\n                    case 3:\n                        dweets = _ctx.sent;\n                        console.log(dweets);\n                        setDweets(dweets);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getDweets() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connect: connect,\n        account: currentAccount,\n        user: currentUser,\n        createUser: createUser,\n        postDweet: postDweet,\n        dweets: dweets1\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDwitter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUMsS0FBYTs7O09BSXJDO0lBRUQsSUFBTUMsU0FBUzttQkFBRywwTEFBWTtnQkFDcEJYLFFBQVEsRUFDUmYsTUFBTTs7Ozt3QkFETmUsUUFBUSxHQUFHekIsa0JBQWtCLEVBQUUsQ0FBQzs7K0JBQ2pCeUIsUUFBUSxDQUFDVyxTQUFTLEVBQUU7O3dCQUFuQzFCLE1BQU0sWUFBNkI7d0JBQ3pDVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osTUFBTSxDQUFDLENBQUM7d0JBQ3BCQyxTQUFTLENBQUNELE1BQU0sQ0FBQyxDQUFDOzs7Ozs7U0FDckI7d0JBTEswQixTQUFTOzs7T0FLZDtJQUVELE9BQU87UUFBRXRCLE9BQU8sRUFBUEEsT0FBTztRQUFFRSxPQUFPLEVBQUVSLGNBQWM7UUFBRWtCLElBQUksRUFBRWQsV0FBVztRQUFFb0IsVUFBVSxFQUFWQSxVQUFVO1FBQUVFLFNBQVMsRUFBVEEsU0FBUztRQUFFeEIsTUFBTSxFQUFOQSxPQUFNO0tBQUMsQ0FBQztDQUNoRztBQUVELCtEQUFlSCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRHdpdHRlci50cz9iNjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEd2l0dGVyIGZyb20gJy4vRHdpdHRlci5qc29uJztcbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29udHJhY3RBQkkgPSBEd2l0dGVyLmFiaTtcbmNvbnN0IENvbnRyYWN0QWRkcmVzcyA9ICcweDlmRTQ2NzM2Njc5ZDJEOWE2NUYwOTkyRjIyNzJkRTlmM2M3ZmE2ZTAnO1xuY29uc3QgRXRoZXJldW0gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuZXRoZXJldW07XG5cbmNvbnN0IGdldER3aXR0ZXJDb250cmFjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoRXRoZXJldW0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBldGhlcnMuQ29udHJhY3QoQ29udHJhY3RBZGRyZXNzLCBDb250cmFjdEFCSSwgc2lnbmVyKTtcbn07XG5cbnR5cGUgVXNlciA9IHtcbiAgICBhdmF0YXIgOiBzdHJpbmc7XG4gICAgYmlvIDogc3RyaW5nO1xuICAgIG5hbWUgOiBzdHJpbmc7XG4gICAgdXNlcm5hbWUgOiBzdHJpbmc7XG4gICAgd2FsbGV0IDogc3RyaW5nOyBcbn1cblxuY29uc3QgdXNlRHdpdHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IFtkd2VldHMsIHNldER3ZWV0c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oWycnXSk7IFxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGwgPihudWxsKTsgXG5cbiAgICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFFdGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBNZXRhbWFzaycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgRXRoZXJldW0ucmVxdWVzdCAoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSk7XG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnRzJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gYWNjb3VudDogJywgYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIH1jYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGlmKCFFdGhlcmV1bSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZXRoZXJldW0gd2FsbGV0cyBmb3VuZCwgcGxlYXNlIGdldCBtZXRhbWFzaycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3QoKTtcbiAgICB9LCBbXSk7IFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY2NvdW50KSB7XG4gICAgICAgICAgICBnZXRVc2VyKCk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sIFtjdXJyZW50QWNjb3VudF0pO1xuXG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbnRyYWN0LmdldFVzZXIoY3VycmVudEFjY291bnQpO1xuICAgICAgICBjb25zdCB7YXZhdGFyLCBiaW8sIG5hbWUsIHVzZXJuYW1lLCB3YWxsZXR9ID0gdXNlcjsgXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKHthdmF0YXIsIGJpbywgbmFtZSwgdXNlcm5hbWUsIHdhbGxldH0pO1xuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGJpbzogc3RyaW5nLCBhdmF0YXI6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldER3aXR0ZXJDb250cmFjdCgpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgIGNvbnRyYWN0LnNpZ251cCh1c2VybmFtZSwgbmFtZSwgYmlvLCBhdmF0YXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgZ2V0VXNlcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBwb3N0RHdlZXQgPSBhc3luYyAoZHdlZXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldER3aXR0ZXJDb250cmFjdCgpO1xuICAgICAgICBhd2FpdCBjb250cmFjdC5wb3N0RHdlZXQoZHdlZXQpO1xuICAgICAgICBhd2FpdCBnZXREd2VldHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RHdlZXRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldER3aXR0ZXJDb250cmFjdCgpO1xuICAgICAgICBjb25zdCBkd2VldHMgPSBhd2FpdCBjb250cmFjdC5nZXREd2VldHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coZHdlZXRzKTtcbiAgICAgICAgc2V0RHdlZXRzKGR3ZWV0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29ubmVjdCwgYWNjb3VudDogY3VycmVudEFjY291bnQsIHVzZXI6IGN1cnJlbnRVc2VyLCBjcmVhdGVVc2VyLCBwb3N0RHdlZXQsIGR3ZWV0c307IFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRHdpdHRlcjsiXSwibmFtZXMiOlsiRHdpdHRlciIsImV0aGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udHJhY3RBQkkiLCJhYmkiLCJDb250cmFjdEFkZHJlc3MiLCJFdGhlcmV1bSIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0RHdpdHRlckNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsInVzZUR3aXR0ZXIiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiZHdlZXRzIiwic2V0RHdlZXRzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImNvbm5lY3QiLCJhY2NvdW50cyIsImFjY291bnQiLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRVc2VyIiwiY29udHJhY3QiLCJ1c2VyIiwiYXZhdGFyIiwiYmlvIiwibmFtZSIsInVzZXJuYW1lIiwid2FsbGV0IiwiY3JlYXRlVXNlciIsInNpZ251cCIsInBvc3REd2VldCIsImR3ZWV0IiwiZ2V0RHdlZXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useDwitter.ts\n");

/***/ })

});
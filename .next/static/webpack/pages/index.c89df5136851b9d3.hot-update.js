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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/mutations */ \"./src/graphql/mutations.js\");\n\n\n\n\n\n\n\nlet resp;\nasync function createNewBlog() {\n    const user = {\n        name: \"Alpha Wolf\"\n    };\n    resp = await aws_amplify__WEBPACK_IMPORTED_MODULE_4__.API.graphql((0,aws_amplify__WEBPACK_IMPORTED_MODULE_4__.graphqlOperation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.createBanda, {\n        input: user\n    }));\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                type: \"button\",\n                id: \"MutationEventButton\",\n                onClick: createNewBlog,\n                children: \"Testeando ando\"\n            }, void 0, false, {\n                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                id: \"MutationResult\",\n                children: resp ? resp.data.createBlog.name : \"\"\n            }, void 0, false, {\n                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main), \" \").concat((next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get started by editing\\xa0\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                                        children: \"src/pages/index.js\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: [\n                                        \"By\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/vercel.svg\",\n                                            alt: \"Vercel Logo\",\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().vercelLogo),\n                                            width: 100,\n                                            height: 24,\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().center),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            src: \"/next.svg\",\n                            alt: \"Next.js Logo\",\n                            width: 180,\n                            height: 37,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Docs \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 20\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Find in-depth information about Next.js features and\\xa0API.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Learn \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Learn about Next.js in an interactive course with\\xa0quizzes!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Templates \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Discover and deploy boilerplate example Next.js\\xa0projects.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Deploy \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 22\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Instantly deploy your Next.js site to a shareable URL with\\xa0Vercel.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/wartrek/Documentos/agiles_2023/src/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBU2Y7S0E1R3dCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQVBJLCBncmFwaHFsT3BlcmF0aW9uIH0gZnJvbSAnYXdzLWFtcGxpZnknO1xuXG5pbXBvcnQgeyBjcmVhdGVCbG9nLCBjcmVhdGVCYW5kYSB9IGZyb20gJy4uL2dyYXBocWwvbXV0YXRpb25zJztcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxubGV0IHJlc3BcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3QmxvZygpIHtcbiAgY29uc3QgdXNlciA9IHtcbiAgICBuYW1lOiAnQWxwaGEgV29sZicsXG4gIH07XG4gIHJlc3AgPSBhd2FpdCBBUEkuZ3JhcGhxbChncmFwaHFsT3BlcmF0aW9uKGNyZWF0ZUJhbmRhLCB7IGlucHV0OiB1c2VyIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGEgdHlwZT0nYnV0dG9uJyBpZD1cIk11dGF0aW9uRXZlbnRCdXR0b25cIiBvbkNsaWNrPXtjcmVhdGVOZXdCbG9nfT5UZXN0ZWFuZG8gYW5kbzwvYT5cbiAgICAgIDxwIGlkPVwiTXV0YXRpb25SZXN1bHRcIj57cmVzcCA/IHJlc3AuZGF0YS5jcmVhdGVCbG9nLm5hbWUgOiBcIlwifTwvcD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW59ICR7aW50ZXIuY2xhc3NOYW1lfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcmbmJzcDtcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnNyYy9wYWdlcy9pbmRleC5qczwvY29kZT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQnl7JyAnfVxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZlcmNlbExvZ299XG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgICBzcmM9XCIvbmV4dC5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiTmV4dC5qcyBMb2dvXCJcbiAgICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgICBoZWlnaHQ9ezM3fVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3M/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIERvY3MgPHNwYW4+LSZndDs8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQmbmJzcDtBUEkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm4/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIExlYXJuIDxzcGFuPi0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBMZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoJm5ic3A7cXVpenplcyFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS90ZW1wbGF0ZXM/ZnJhbWV3b3JrPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIFRlbXBsYXRlcyA8c3Bhbj4tJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMmbmJzcDtwcm9qZWN0cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9uZXc/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIERlcGxveSA8c3Bhbj4tJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHNoYXJlYWJsZSBVUkxcbiAgICAgICAgICAgICAgd2l0aCZuYnNwO1ZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiQVBJIiwiZ3JhcGhxbE9wZXJhdGlvbiIsImNyZWF0ZUJsb2ciLCJjcmVhdGVCYW5kYSIsInJlc3AiLCJjcmVhdGVOZXdCbG9nIiwidXNlciIsIm5hbWUiLCJncmFwaHFsIiwiaW5wdXQiLCJIb21lIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYSIsInR5cGUiLCJpZCIsIm9uQ2xpY2siLCJwIiwiZGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJ0YXJnZXQiLCJzcmMiLCJhbHQiLCJ2ZXJjZWxMb2dvIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsImNlbnRlciIsImxvZ28iLCJncmlkIiwiY2FyZCIsImgyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
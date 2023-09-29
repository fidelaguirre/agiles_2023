(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 4600:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "signup_container__MX0cG",
	"header": "signup_header__jsGPK",
	"text": "signup_text__K2XZm",
	"underline": "signup_underline__To5u7",
	"inputs": "signup_inputs__1NPPA",
	"input": "signup_input__myLTI",
	"forgotpassword": "signup_forgotpassword__nVJrz",
	"submitcontainer": "signup_submitcontainer__SmbWm",
	"submit": "signup_submit__Q1bOf"
};


/***/ }),

/***/ 7417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fsignup_preferredRegion_absolutePagePath_private_next_pages_2Fsignup_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/signup/index.jsx
var signup_namespaceObject = {};
__webpack_require__.r(signup_namespaceObject);
__webpack_require__.d(signup_namespaceObject, {
  "default": () => (signup)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(894);
// EXTERNAL MODULE: ./src/pages/_app.js + 1 modules
var _app = __webpack_require__(5205);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/pages/signup/signup.module.css
var signup_module = __webpack_require__(4600);
var signup_module_default = /*#__PURE__*/__webpack_require__.n(signup_module);
// EXTERNAL MODULE: ./src/pages/components/Layout.jsx
var Layout = __webpack_require__(3572);
;// CONCATENATED MODULE: ./public/img/person.png
/* harmony default export */ const person = ({"src":"/_next/static/media/person.929f262f.png","height":21,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42j1MwQ1GUBjr/7MHRzEBpmANBws4mOC1QzkJAzhYQiKRSHieJ/E1/Zq0TaE/wE4Hd7aAfgCY0cqBljmeY/EZBQAFjjVnLmoAhb5jElOayqSdX4jY0/LFoBgaZXU6+s8JXHXx8vmj2w02MEHpDHlmNAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./public/img/email.png
var email = __webpack_require__(356);
// EXTERNAL MODULE: ./public/img/password.png
var img_password = __webpack_require__(4664);
;// CONCATENATED MODULE: ./src/pages/signup/index.jsx








const Signup = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Layout["default"], {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (signup_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (signup_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (signup_module_default()).text,
                            children: "Reg\xedstrate"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (signup_module_default()).underline
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (signup_module_default()).inputs,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (signup_module_default()).input,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: person,
                                    alt: "User Icon"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    placeholder: "Nombre"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (signup_module_default()).input,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: email/* default */.Z,
                                    alt: "Email Icon"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "email",
                                    placeholder: "Correo"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (signup_module_default()).input,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: img_password/* default */.Z,
                                    alt: "Password Icon"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "password",
                                    placeholder: "Contrase\xf1a"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (signup_module_default()).forgotpassword,
                    children: [
                        "Ya tienes cuenta? ",
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: "Iniciar Sesi\xf3n"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (signup_module_default()).submitcontainer,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (signup_module_default()).submit,
                        children: "Reg\xedstrate"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const signup = (Signup);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fsignup&preferredRegion=&absolutePagePath=private-next-pages%2Fsignup%2Findex.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fsignup_preferredRegion_absolutePagePath_private_next_pages_2Fsignup_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(signup_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(signup_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(signup_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(signup_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/signup",
        pathname: "/signup",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: signup_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 5581:
/***/ ((module) => {

"use strict";
module.exports = require("aws-amplify");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2540:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [461,636,675,664,132,839,697], () => (__webpack_exec__(7417)));
module.exports = __webpack_exports__;

})();
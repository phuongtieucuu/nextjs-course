"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[pid]";
exports.ids = ["pages/[pid]"];
exports.modules = {

/***/ "./pages/[pid].js":
/*!************************!*\
  !*** ./pages/[pid].js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HomePage(props) {\n    const { payload  } = props;\n    if (!payload) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tiena\\\\Desktop\\\\thuchanh\\\\next13\\\\pages\\\\[pid].js\",\n            lineNumber: 7,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: payload.title\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tiena\\\\Desktop\\\\thuchanh\\\\next13\\\\pages\\\\[pid].js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tiena\\\\Desktop\\\\thuchanh\\\\next13\\\\pages\\\\[pid].js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps(constext) {\n    const { params  } = constext;\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"dummy-backend.json\");\n    const dataJson = await fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath);\n    const data = JSON.parse(dataJson);\n    const product = data.products.find((product)=>product.id === params.pid);\n    if (!product) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            payload: product\n        }\n    };\n}\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    pid: \"p1\"\n                }\n            }\n        ],\n        fallback: true\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcGlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUNKO0FBRXBCLFNBQVNFLFNBQVNDLEtBQUssRUFBRTtJQUN2QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUNwQixJQUFJLENBQUNDLFNBQVM7UUFDWixxQkFBTyw4REFBQ0M7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFDRCxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO3NCQUFJSCxRQUFRSSxLQUFLOzs7Ozs7Ozs7OztBQUd4QjtBQUVPLGVBQWVDLGVBQWVDLFFBQVEsRUFBRTtJQUM3QyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRDtJQUNuQixNQUFNRSxXQUFXWixnREFBUyxDQUFDYyxRQUFRQyxHQUFHLElBQUksUUFBUTtJQUNsRCxNQUFNQyxXQUFXLE1BQU1mLHNEQUFlLENBQUNXO0lBQ3ZDLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0o7SUFDeEIsTUFBTUssVUFBVUgsS0FBS0ksUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0YsVUFBWUEsUUFBUUcsRUFBRSxLQUFLYixPQUFPYyxHQUFHO0lBQ3pFLElBQUksQ0FBQ0osU0FBUztRQUNaLE9BQU87WUFDTEssVUFBVSxJQUFJO1FBQ2hCO0lBQ0YsQ0FBQztJQUNELE9BQU87UUFDTHZCLE9BQU87WUFDTEMsU0FBU2lCO1FBQ1g7SUFDRjtBQUNGLENBQUM7QUFDTSxlQUFlTSxpQkFBaUI7SUFDckMsT0FBTztRQUNMQyxPQUFPO1lBQUM7Z0JBQUVqQixRQUFRO29CQUFFYyxLQUFLO2dCQUFLO1lBQUU7U0FBRTtRQUNsQ0ksVUFBVSxJQUFJO0lBQ2hCO0FBQ0YsQ0FBQztBQUVELGlFQUFlM0IsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQxMy8uL3BhZ2VzL1twaWRdLmpzPzRiZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICBjb25zdCB7IHBheWxvYWQgfSA9IHByb3BzO1xyXG4gIGlmICghcGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntwYXlsb2FkLnRpdGxlfTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29uc3RleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29uc3RleHQ7XHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZHVtbXktYmFja2VuZC5qc29uXCIpO1xyXG4gIGNvbnN0IGRhdGFKc29uID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkYXRhSnNvbik7XHJcbiAgY29uc3QgcHJvZHVjdCA9IGRhdGEucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gcGFyYW1zLnBpZCk7XHJcbiAgaWYgKCFwcm9kdWN0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwYXlsb2FkOiBwcm9kdWN0LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFt7IHBhcmFtczogeyBwaWQ6IFwicDFcIiB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJIb21lUGFnZSIsInByb3BzIiwicGF5bG9hZCIsInAiLCJkaXYiLCJoMSIsInRpdGxlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb25zdGV4dCIsInBhcmFtcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYXRhSnNvbiIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiaWQiLCJwaWQiLCJub3RGb3VuZCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[pid].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[pid].js"));
module.exports = __webpack_exports__;

})();
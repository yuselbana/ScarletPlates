"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[campus]/page",{

/***/ "(app-pages-browser)/./src/app/Components /FoodInformation/FoodInformation.js":
/*!****************************************************************!*\
  !*** ./src/app/Components /FoodInformation/FoodInformation.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FoodInformation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction FoodInformation(props) {\n    _s();\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const campus = props.campus;\n    const getFood = async ()=>{\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8080/api/plate?campus=\".concat(campus));\n        const food = await data.data;\n        setFood(await food);\n        console.log(food);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getFood();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: food === null || food === void 0 ? void 0 : food.map((food, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: food.Name\n                }, void 0, false, {\n                    fileName: \"/Users/arushverma/Desktop/Coding/ScarletPlates/client/src/app/Components /FoodInformation/FoodInformation.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, index, false, {\n                fileName: \"/Users/arushverma/Desktop/Coding/ScarletPlates/client/src/app/Components /FoodInformation/FoodInformation.js\",\n                lineNumber: 33,\n                columnNumber: 15\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/arushverma/Desktop/Coding/ScarletPlates/client/src/app/Components /FoodInformation/FoodInformation.js\",\n        lineNumber: 30,\n        columnNumber: 8\n    }, this);\n}\n_s(FoodInformation, \"EuXhNCkLLYRmUTbPTAM71BULzPE=\");\n_c = FoodInformation;\nvar _c;\n$RefreshReg$(_c, \"FoodInformation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cyAvRm9vZEluZm9ybWF0aW9uL0Zvb2RJbmZvcm1hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lEO0FBQ0w7QUFDbEI7QUFLWCxTQUFTSSxnQkFBZ0JDLEtBQUs7O0lBQ3pDLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2xDLE1BQU1PLFNBQVNILE1BQU1HLE1BQU07SUFHM0IsTUFBTUMsVUFBVTtRQUNkLE1BQU1DLE9BQU8sTUFBTVAsNkNBQUtBLENBQUNRLEdBQUcsQ0FBQywwQ0FBaUQsT0FBUEg7UUFDdkUsTUFBTUYsT0FBTyxNQUFNSSxLQUFLQSxJQUFJO1FBQzVCSCxRQUFRLE1BQU1EO1FBQ2RNLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFZDtJQUdGSixnREFBU0EsQ0FBQztRQUNSTztJQUVGLEdBQUUsRUFBRTtJQUdGLHFCQUNHLDhEQUFDSztrQkFDQ1IsaUJBQUFBLDJCQUFBQSxLQUFNUyxHQUFHLENBQUMsQ0FBQ1QsTUFBS1U7WUFDZixxQkFDSSw4REFBQ0Y7MEJBQ0MsNEVBQUNHOzhCQUFHWCxLQUFLWSxJQUFJOzs7Ozs7ZUFETEY7Ozs7O1FBS2hCOzs7Ozs7QUFHUjtHQWhDd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29tcG9uZW50cyAvRm9vZEluZm9ybWF0aW9uL0Zvb2RJbmZvcm1hdGlvbi5qcz9hNDRmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb29kSW5mb3JtYXRpb24ubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb29kSW5mb3JtYXRpb24ocHJvcHMpIHtcbiAgICBjb25zdCBbZm9vZCxzZXRGb29kXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBjYW1wdXMgPSBwcm9wcy5jYW1wdXM7XG5cblxuICAgIGNvbnN0IGdldEZvb2QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwODAvYXBpL3BsYXRlP2NhbXB1cz0ke2NhbXB1c31gKVxuICAgICAgY29uc3QgZm9vZCA9IGF3YWl0IGRhdGEuZGF0YTtcbiAgICAgIHNldEZvb2QoYXdhaXQgZm9vZCk7XG4gICAgICBjb25zb2xlLmxvZyhmb29kKVxuICAgIFxuICAgIH1cblxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBnZXRGb29kKCk7XG4gICAgXG4gIH0sW10pXG5cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2PlxuICAgICAgICB7Zm9vZD8ubWFwKChmb29kLGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8cD57Zm9vZC5OYW1lfTwvcD5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJGb29kSW5mb3JtYXRpb24iLCJwcm9wcyIsImZvb2QiLCJzZXRGb29kIiwiY2FtcHVzIiwiZ2V0Rm9vZCIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFwIiwiaW5kZXgiLCJwIiwiTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components /FoodInformation/FoodInformation.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FoodInformation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction FoodInformation(param) {\n    let { campus } = param;\n    _s();\n    const [food, setFood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getFood = async ()=>{\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/food\");\n        const food = await data.data;\n        setFood(await food);\n        console.log(food);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getFood();\n    }, []);\n    const sendCampus = async ()=>{\n        try {\n            const data = {\n                campus: \"\".concat(campus)\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://127.0.0.1:8080/api/plate\", data);\n            console.log(response.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: food === null || food === void 0 ? void 0 : food.map((food, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: food.Name\n                }, void 0, false, {\n                    fileName: \"/Users/yusufelbana/Desktop/nextjs-flask/client/src/app/Components /FoodInformation/FoodInformation.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, index, false, {\n                fileName: \"/Users/yusufelbana/Desktop/nextjs-flask/client/src/app/Components /FoodInformation/FoodInformation.js\",\n                lineNumber: 42,\n                columnNumber: 15\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/yusufelbana/Desktop/nextjs-flask/client/src/app/Components /FoodInformation/FoodInformation.js\",\n        lineNumber: 39,\n        columnNumber: 8\n    }, this);\n}\n_s(FoodInformation, \"EuXhNCkLLYRmUTbPTAM71BULzPE=\");\n_c = FoodInformation;\nvar _c;\n$RefreshReg$(_c, \"FoodInformation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cyAvRm9vZEluZm9ybWF0aW9uL0Zvb2RJbmZvcm1hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lEO0FBQ0w7QUFDbEI7QUFLWCxTQUFTSSxnQkFBZ0IsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUNwQyxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUdsQyxNQUFNTyxVQUFVO1FBQ2QsTUFBTUMsT0FBTyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDO1FBQzdCLE1BQU1KLE9BQU8sTUFBTUcsS0FBS0EsSUFBSTtRQUM1QkYsUUFBUSxNQUFNRDtRQUNkSyxRQUFRQyxHQUFHLENBQUNOO0lBRWQ7SUFHRkosZ0RBQVNBLENBQUM7UUFDUk07SUFFRixHQUFFLEVBQUU7SUFFSixNQUFNSyxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNSixPQUFPO2dCQUNYSixRQUFPLEdBQVUsT0FBUEE7WUFDWjtZQUNBLE1BQU1TLFdBQVcsTUFBTVgsNkNBQUtBLENBQUNZLEdBQUcsQ0FBQyxtQ0FBbUNOO1lBQ3BFRSxRQUFRQyxHQUFHLENBQUNFLFNBQVNMLElBQUk7UUFDM0IsRUFBRSxPQUFPTyxPQUFPO1lBQ2RMLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDZDtJQUNGO0lBQ0UscUJBQ0csOERBQUNDO2tCQUNDWCxpQkFBQUEsMkJBQUFBLEtBQU1ZLEdBQUcsQ0FBQyxDQUFDWixNQUFLYTtZQUNmLHFCQUNJLDhEQUFDRjswQkFDQyw0RUFBQ0c7OEJBQUdkLEtBQUtlLElBQUk7Ozs7OztlQURMRjs7Ozs7UUFLaEI7Ozs7OztBQUdSO0dBekN3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db21wb25lbnRzIC9Gb29kSW5mb3JtYXRpb24vRm9vZEluZm9ybWF0aW9uLmpzP2E0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb2RJbmZvcm1hdGlvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb2RJbmZvcm1hdGlvbih7Y2FtcHVzfSkge1xuICAgIGNvbnN0IFtmb29kLHNldEZvb2RdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgICBjb25zdCBnZXRGb29kID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb29kJylcbiAgICAgIGNvbnN0IGZvb2QgPSBhd2FpdCBkYXRhLmRhdGE7XG4gICAgICBzZXRGb29kKGF3YWl0IGZvb2QpO1xuICAgICAgY29uc29sZS5sb2coZm9vZClcbiAgICBcbiAgICB9XG5cblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgZ2V0Rm9vZCgpO1xuICAgIFxuICB9LFtdKVxuXG4gIGNvbnN0IHNlbmRDYW1wdXMgPSBhc3luYygpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2FtcHVzOmAke2NhbXB1c31gXG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dCgnaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FwaS9wbGF0ZScsIGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbiAgICByZXR1cm4gKFxuICAgICAgIDxkaXY+XG4gICAgICAgIHtmb29kPy5tYXAoKGZvb2QsaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxwPntmb29kLk5hbWV9PC9wPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkZvb2RJbmZvcm1hdGlvbiIsImNhbXB1cyIsImZvb2QiLCJzZXRGb29kIiwiZ2V0Rm9vZCIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic2VuZENhbXB1cyIsInJlc3BvbnNlIiwicHV0IiwiZXJyb3IiLCJkaXYiLCJtYXAiLCJpbmRleCIsInAiLCJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components /FoodInformation/FoodInformation.js\n"));

/***/ })

});
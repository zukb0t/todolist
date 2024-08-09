/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getProjectsFromLocalStorage: () => (/* binding */ getProjectsFromLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _projectlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist.js */ \"./src/projectlist.js\");\n\n\nfunction addProjectToLocalStorage(){\n    if(localStorage){\n        localStorage.setItem('projects', JSON.stringify(_projectlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    }\n}\n\nconst getProjectsFromLocalStorage = () => JSON.parse(localStorage.getItem('projects')) || [];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectToLocalStorage);\n\n\n//# sourceURL=webpack://todolist/./src/localstorage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction Project(title){\n    const project = title;\n    const tasks = [];\n\n    return {project, tasks};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/projectlist.js":
/*!****************************!*\
  !*** ./src/projectlist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet projectList = JSON.parse(localStorage.getItem('projects')) || [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todolist/./src/projectlist.js?");

/***/ }),

/***/ "./src/projectproperties.js":
/*!**********************************!*\
  !*** ./src/projectproperties.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   removeProject: () => (/* binding */ removeProject)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectlist.js */ \"./src/projectlist.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.js */ \"./src/localstorage.js\");\n\n\n\n\n\nfunction addProject(title){\n    _projectlist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title));\n    (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n}\n\nfunction removeProject(index){\n    _projectlist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(index,1);\n    (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n\n\n//# sourceURL=webpack://todolist/./src/projectproperties.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projectproperties.js");
/******/ 	
/******/ })()
;
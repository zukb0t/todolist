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

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   displayDefault: () => (/* binding */ displayDefault),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   displayTodayOrWeek: () => (/* binding */ displayTodayOrWeek)\n/* harmony export */ });\n/* harmony import */ var _projectlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist.js */ \"./src/projectlist.js\");\n/* harmony import */ var _taskproperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskproperties.js */ \"./src/taskproperties.js\");\n/* harmony import */ var _projectproperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectproperties.js */ \"./src/projectproperties.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localstorage.js */ \"./src/localstorage.js\");\n\n\n\n\n\nfunction displayDefault(){\n    const content = document.querySelector('.content');\n    content.innerHTML = '';\n    content.textContent = \"Welcome\";\n    displayProjects();\n\n}\n\nfunction displayProjects(){\n    const sidebar = document.querySelector('.sidebar');\n    const listContainer = document.querySelector('.listprojects');\n    listContainer.innerHTML = '';\n    const projects = document.createElement('ul');\n    projects.classList.add('project');\n    const projectStorage = (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_3__.getProjectsFromLocalStorage)();\n    projectStorage.forEach((currentProject,index) => {\n        const deleteBtn = document.createElement('button');\n        const insertTask = document.createElement('button');\n        const project = document.createElement('li');\n        project.setAttribute('data-project-index',index);\n        project.classList.add('projectli');\n\n        deleteBtn.textContent = \"Delete\";\n        project.textContent = currentProject.project;\n\n        insertTask.textContent = \"Add Task\";\n\n        project.appendChild(insertTask);\n        project.appendChild(deleteBtn);\n        projects.appendChild(project);\n\n        deleteBtn.addEventListener(\"click\", () => {\n            const index = project.dataset.projectIndex;\n            (0,_projectproperties_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(index);\n            displayDefault();\n            displayProjects();\n        });\n     \n        insertTask.addEventListener('click', (event) => {\n            const index = project.dataset.projectIndex;\n            (0,_taskproperties_js__WEBPACK_IMPORTED_MODULE_1__.addTaskForm)(index);\n        });\n    });\n\n    listContainer.appendChild(projects);\n    sidebar.appendChild(listContainer);\n\n    projects.addEventListener(\"click\",function(event){\n        const projectIndex = event.target.dataset.projectIndex;\n        displayTasks(projectStorage[projectIndex].tasks);\n    });\n};\n\nfunction displayTasks(taskList){\n    const content = document.querySelector('.content');\n    content.innerHTML = '';\n    taskList.forEach((currentTask,index) =>{\n        const card = document.createElement('div');\n        card.classList.add('card');\n        card.setAttribute('data-task-index',index);\n        const tasks = document.createElement('ul');\n        tasks.classList.add('task');\n\n        const title = document.createElement('li');\n        const description = document.createElement('li');\n        const dueDate = document.createElement('li');\n        const priority = document.createElement('li');\n\n        const buttons = document.createElement('div');\n        buttons.classList.add('buttons');\n        const remove = document.createElement('button');\n        const edit = document.createElement('button');\n\n        title.textContent = \"Task: \" + currentTask.title;\n        description.textContent = \"Description: \" + currentTask.description;\n        dueDate.textContent = \"Due date: \" + currentTask.dueDate;\n        priority.textContent = \"Priority: \" + currentTask.priority;\n        remove.textContent = \"Remove\";\n        edit.textContent = \"Edit\";\n\n        tasks.appendChild(title);\n        tasks.appendChild(description);\n        tasks.appendChild(dueDate);\n        tasks.appendChild(priority);\n\n        buttons.appendChild(remove);\n        buttons.appendChild(edit);\n\n        card.appendChild(tasks);\n        card.appendChild(buttons);\n\n        content.appendChild(card);\n\n        remove.addEventListener(\"click\", function(){\n            const taskIndex = card.dataset.taskIndex;\n            (0,_taskproperties_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(taskList,taskIndex);\n            displayTasks(taskList);  \n        });\n\n        edit.addEventListener(\"click\", () => {\n            const task = taskList[card.dataset.taskIndex];\n            (0,_taskproperties_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(task,taskList);\n            \n        });\n    });\n\n}\n\nfunction displayTodayOrWeek(taskList){\n    const content = document.querySelector('.content');\n    content.innerHTML = '';\n    taskList.forEach((currentTask,index) =>{\n        const card = document.createElement('div');\n        card.classList.add('card');\n        card.setAttribute('data-task-index',index);\n\n        const tasks = document.createElement('ul');\n        tasks.classList.add('task');\n\n        const title = document.createElement('li');\n        const description = document.createElement('li');\n        const dueDate = document.createElement('li');\n        const priority = document.createElement('li');\n\n        title.textContent = \"Task: \" + currentTask.title;\n        description.textContent = \"Description: \" + currentTask.description;\n        dueDate.textContent = \"Due date: \" + currentTask.dueDate;\n        priority.textContent = \"Priority: \" + currentTask.priority;\n\n        tasks.appendChild(title);\n        tasks.appendChild(description);\n        tasks.appendChild(dueDate);\n        tasks.appendChild(priority);\n\n        card.appendChild(tasks);\n\n        content.appendChild(card);\n    });\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjects);\n\n\n//# sourceURL=webpack://todolist/./src/interface.js?");

/***/ }),

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

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction Task(title,description,dueDate,priority){\n    return{title,description,dueDate,priority};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todolist/./src/task.js?");

/***/ }),

/***/ "./src/taskproperties.js":
/*!*******************************!*\
  !*** ./src/taskproperties.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskForm: () => (/* binding */ addTaskForm),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _projectlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist.js */ \"./src/projectlist.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface.js */ \"./src/interface.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localstorage.js */ \"./src/localstorage.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/lightFormat.mjs\");\n\n\n\n\n\n\nlet edit = null;\nlet addATask = null;\n\n\nfunction addTaskForm(index){\n    const modal = document.querySelector('#add-task');\n    const submitEdit = document.querySelector('#addtoproject');\n    const addTitle = document.querySelector('#addtask');\n    const addDescription = document.querySelector('#adddescription');\n    const addDueDate = document.querySelector('#addduedate');\n    const addPriority = document.querySelector('#addpriority');\n\n    addDueDate.setAttribute('min',(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.lightFormat)(new Date(), 'yyyy-MM-dd'));\n\n    modal.showModal();\n\n    if(addATask){\n        submitEdit.removeEventListener(\"click\",addATask);\n    }\n\n    addATask = (event) => {\n        event.preventDefault();\n        const title = addTitle.value;\n        const description = addDescription.value;\n        const dueDate = addDueDate.value;\n        const priority = addPriority.value;\n        modal.close();\n        addTask(index, title, description, dueDate, priority);\n        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        (0,_interface_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_projectlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index].tasks);\n    }\n\n    submitEdit.addEventListener(\"click\" , addATask);\n}\n\n\nfunction addTask(index,title,description,dueDate,priority){\n    _projectlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index].tasks.push((0,_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title,description,dueDate,priority));\n}\n\nfunction removeTask(tasks,taskIndex){\n    tasks.splice(taskIndex, 1);\n}\n\nfunction editTask(task,taskList){\n    const modal = document.querySelector('#edit-task');\n    const update = document.querySelector('#update');\n    const updateTask = document.querySelector('#task');\n    const updateDescription = document.querySelector('#description');\n    const updateDueDate = document.querySelector('#duedate');\n    const updatePriority = document.querySelector('#priority');\n \n    updateDueDate.setAttribute('min',(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.lightFormat)(new Date(), 'yyyy-MM-dd'));\n\n    modal.showModal();\n\n    if(edit){\n        update.removeEventListener(\"click\",edit);\n    }\n\n    edit = (event) => {\n        event.preventDefault();\n        task.title = updateTask.value;\n        task.description = updateDescription.value;\n        task.dueDate = updateDueDate.value;\n        task.priority = updatePriority.value;\n        modal.close();\n        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        (0,_interface_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(taskList);\n    }\n\n    update.addEventListener(\"click\" , edit);\n}  \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n\n//# sourceURL=webpack://todolist/./src/taskproperties.js?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  const sign = number < 0 ? \"-\" : \"\";\n  const output = Math.abs(number).toString().padStart(targetLength, \"0\");\n  return sign + output;\n}\n\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/_lib/addLeadingZeros.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)\n/* harmony export */ });\n/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ \"./node_modules/date-fns/_lib/addLeadingZeros.mjs\");\n\n\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* |                                |\n * |  d  | Day of month                   |  D  |                                |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  m  | Minute                         |  M  | Month                          |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  y  | Year (abs)                     |  Y  |                                |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n */\n\nconst lightFormatters = {\n  // Year\n  y(date, token) {\n    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens\n    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |\n    // |----------|-------|----|-------|-------|-------|\n    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |\n    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |\n    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |\n    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |\n    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |\n\n    const signedYear = date.getFullYear();\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    const year = signedYear > 0 ? signedYear : 1 - signedYear;\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === \"yy\" ? year % 100 : year, token.length);\n  },\n\n  // Month\n  M(date, token) {\n    const month = date.getMonth();\n    return token === \"M\" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);\n  },\n\n  // Day of the month\n  d(date, token) {\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);\n  },\n\n  // AM or PM\n  a(date, token) {\n    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? \"pm\" : \"am\";\n\n    switch (token) {\n      case \"a\":\n      case \"aa\":\n        return dayPeriodEnumValue.toUpperCase();\n      case \"aaa\":\n        return dayPeriodEnumValue;\n      case \"aaaaa\":\n        return dayPeriodEnumValue[0];\n      case \"aaaa\":\n      default:\n        return dayPeriodEnumValue === \"am\" ? \"a.m.\" : \"p.m.\";\n    }\n  },\n\n  // Hour [1-12]\n  h(date, token) {\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);\n  },\n\n  // Hour [0-23]\n  H(date, token) {\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);\n  },\n\n  // Minute\n  m(date, token) {\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);\n  },\n\n  // Second\n  s(date, token) {\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);\n  },\n\n  // Fraction of second\n  S(date, token) {\n    const numberOfDigits = token.length;\n    const milliseconds = date.getMilliseconds();\n    const fractionalSeconds = Math.trunc(\n      milliseconds * Math.pow(10, numberOfDigits - 3),\n    );\n    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);\n  },\n};\n\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/_lib/format/lightFormatters.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isDate: () => (/* binding */ isDate)\n/* harmony export */ });\n/**\n * @name isDate\n * @category Common Helpers\n * @summary Is the given value a date?\n *\n * @description\n * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.\n *\n * @param value - The value to check\n *\n * @returns True if the given value is a date\n *\n * @example\n * // For a valid date:\n * const result = isDate(new Date())\n * //=> true\n *\n * @example\n * // For an invalid date:\n * const result = isDate(new Date(NaN))\n * //=> true\n *\n * @example\n * // For some value:\n * const result = isDate('2014-02-31')\n * //=> false\n *\n * @example\n * // For an object:\n * const result = isDate({})\n * //=> false\n */\nfunction isDate(value) {\n  return (\n    value instanceof Date ||\n    (typeof value === \"object\" &&\n      Object.prototype.toString.call(value) === \"[object Date]\")\n  );\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);\n\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/isDate.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isValid: () => (/* binding */ isValid)\n/* harmony export */ });\n/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ \"./node_modules/date-fns/isDate.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n\n/**\n * @name isValid\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n *\n * @returns The date is valid\n *\n * @example\n * // For the valid date:\n * const result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the value, convertable into a date:\n * const result = isValid(1393804800000)\n * //=> true\n *\n * @example\n * // For the invalid date:\n * const result = isValid(new Date(''))\n * //=> false\n */\nfunction isValid(date) {\n  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== \"number\") {\n    return false;\n  }\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);\n  return !isNaN(Number(_date));\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);\n\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/isValid.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/lightFormat.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/lightFormat.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   lightFormat: () => (/* binding */ lightFormat),\n/* harmony export */   lightFormatters: () => (/* reexport safe */ _lib_format_lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters)\n/* harmony export */ });\n/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isValid.mjs */ \"./node_modules/date-fns/isValid.mjs\");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n/* harmony import */ var _lib_format_lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/lightFormatters.mjs */ \"./node_modules/date-fns/_lib/format/lightFormatters.mjs\");\n\n\n\n\n// Rexports of internal for libraries to use.\n// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874\n\n\n// This RegExp consists of three parts separated by `|`:\n// - (\\w)\\1* matches any sequences of the same letter\n// - '' matches two quote characters in a row\n// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),\n//   except a single quote symbol, which ends the sequence.\n//   Two quote characters do not end the sequence.\n//   If there is no matching single quote\n//   then the sequence will continue until the end of the string.\n// - . matches any single character unmatched by previous parts of the RegExps\nconst formattingTokensRegExp = /(\\w)\\1*|''|'(''|[^'])+('|$)|./g;\n\nconst escapedStringRegExp = /^'([^]*?)'?$/;\nconst doubleQuoteRegExp = /''/g;\nconst unescapedLatinCharacterRegExp = /[a-zA-Z]/;\n\n/**\n * @private\n */\n\n/**\n * @name lightFormat\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format. Unlike `format`,\n * `lightFormat` doesn't use locales and outputs date using the most popular tokens.\n *\n * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.\n * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * The characters wrapped between two single quotes characters (') are escaped.\n * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.\n *\n * Format of the string is based on Unicode Technical Standard #35:\n * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table\n *\n * Accepted patterns:\n * | Unit                            | Pattern | Result examples                   |\n * |---------------------------------|---------|-----------------------------------|\n * | AM, PM                          | a..aaa  | AM, PM                            |\n * |                                 | aaaa    | a.m., p.m.                        |\n * |                                 | aaaaa   | a, p                              |\n * | Calendar year                   | y       | 44, 1, 1900, 2017                 |\n * |                                 | yy      | 44, 01, 00, 17                    |\n * |                                 | yyy     | 044, 001, 000, 017                |\n * |                                 | yyyy    | 0044, 0001, 1900, 2017            |\n * | Month (formatting)              | M       | 1, 2, ..., 12                     |\n * |                                 | MM      | 01, 02, ..., 12                   |\n * | Day of month                    | d       | 1, 2, ..., 31                     |\n * |                                 | dd      | 01, 02, ..., 31                   |\n * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |\n * |                                 | hh      | 01, 02, ..., 11, 12               |\n * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |\n * |                                 | HH      | 00, 01, 02, ..., 23               |\n * | Minute                          | m       | 0, 1, ..., 59                     |\n * |                                 | mm      | 00, 01, ..., 59                   |\n * | Second                          | s       | 0, 1, ..., 59                     |\n * |                                 | ss      | 00, 01, ..., 59                   |\n * | Fraction of second              | S       | 0, 1, ..., 9                      |\n * |                                 | SS      | 00, 01, ..., 99                   |\n * |                                 | SSS     | 000, 001, ..., 999                |\n * |                                 | SSSS    | ...                               |\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n * @param format - The string of tokens\n *\n * @returns The formatted date string\n *\n * @throws `Invalid time value` if the date is invalid\n * @throws format string contains an unescaped latin alphabet character\n *\n * @example\n * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')\n * //=> '2014-02-11'\n */\nfunction lightFormat(date, formatStr) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);\n\n  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_2__.isValid)(_date)) {\n    throw new RangeError(\"Invalid time value\");\n  }\n\n  const tokens = formatStr.match(formattingTokensRegExp);\n\n  // The only case when formattingTokensRegExp doesn't match the string is when it's empty\n  if (!tokens) return \"\";\n\n  const result = tokens\n    .map((substring) => {\n      // Replace two single quote characters with one single quote character\n      if (substring === \"''\") {\n        return \"'\";\n      }\n\n      const firstCharacter = substring[0];\n      if (firstCharacter === \"'\") {\n        return cleanEscapedString(substring);\n      }\n\n      const formatter = _lib_format_lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters[firstCharacter];\n      if (formatter) {\n        return formatter(_date, substring);\n      }\n\n      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {\n        throw new RangeError(\n          \"Format string contains an unescaped latin alphabet character `\" +\n            firstCharacter +\n            \"`\",\n        );\n      }\n\n      return substring;\n    })\n    .join(\"\");\n\n  return result;\n}\n\nfunction cleanEscapedString(input) {\n  const matches = input.match(escapedStringRegExp);\n\n  if (!matches) {\n    return input;\n  }\n\n  return matches[1].replace(doubleQuoteRegExp, \"'\");\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightFormat);\n\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/lightFormat.mjs?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === \"object\" && argStr === \"[object Date]\")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === \"number\" ||\n    argStr === \"[object Number]\" ||\n    typeof argument === \"string\" ||\n    argStr === \"[object String]\"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/toDate.mjs?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/taskproperties.js");
/******/ 	
/******/ })()
;
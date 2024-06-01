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
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n// pages/api/profile.js\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const result = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.query)(`SELECT * FROM users WHERE user_id = ?`, [\n            1\n        ]); // Assuming user with id 1 is logged in\n        res.status(200).json(result[0]);\n    } else if (req.method === \"PUT\") {\n        const { firstname , lastname , email , image , bio  } = req.body;\n        const result1 = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.query)(`UPDATE users SET user_firstname = ?, user_lastname = ?, user_email = ?, user_bio = ?, user_photo = ? WHERE id = ?`, [\n            firstname,\n            lastname,\n            email,\n            image,\n            bio,\n            1\n        ]);\n        res.status(200).json(result1);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVCQUF1QjtBQUNnQjtBQUV4QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNQyxNQUFNLEdBQUcsTUFBTUwsZ0RBQUssQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLEVBQUU7QUFBQyxhQUFDO1NBQUMsQ0FBQyxFQUFFLHVDQUF1QztRQUNqSEcsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsT0FBTyxJQUFJSCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDL0IsTUFBTSxFQUFFSSxTQUFTLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFQyxLQUFLLEdBQUVDLEdBQUcsR0FBRSxHQUFHVixHQUFHLENBQUNXLElBQUk7UUFDM0QsTUFBTVIsT0FBTSxHQUFHLE1BQU1MLGdEQUFLLENBQ3hCLENBQUMsaUhBQWlILENBQUMsRUFDbkg7WUFBQ1EsU0FBUztZQUFFQyxRQUFRO1lBQUVDLEtBQUs7WUFBRUMsS0FBSztZQUFFQyxHQUFHO0FBQUUsYUFBQztTQUFDLENBQzVDO1FBQ0RULEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWx3ZWJzLy4vcGFnZXMvYXBpL3Byb2ZpbGUuanM/MTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcHJvZmlsZS5qc1xuaW1wb3J0IHsgcXVlcnkgfSBmcm9tICcuLi8uLi91dGlscy9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcl9pZCA9ID9gLCBbMV0pOyAvLyBBc3N1bWluZyB1c2VyIHdpdGggaWQgMSBpcyBsb2dnZWQgaW5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRbMF0pO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XG4gICAgY29uc3QgeyBmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgaW1hZ2UsIGJpbyB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICBgVVBEQVRFIHVzZXJzIFNFVCB1c2VyX2ZpcnN0bmFtZSA9ID8sIHVzZXJfbGFzdG5hbWUgPSA/LCB1c2VyX2VtYWlsID0gPywgdXNlcl9iaW8gPSA/LCB1c2VyX3Bob3RvID0gPyBXSEVSRSBpZCA9ID9gLFxuICAgICAgW2ZpcnN0bmFtZSwgbGFzdG5hbWUsIGVtYWlsLCBpbWFnZSwgYmlvLCAxXVxuICAgICk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsImltYWdlIiwiYmlvIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"query\": () => (/* binding */ query)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n// utils/db.js\n\nasync function query(sql, values) {\n    const db = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"sera\",\n        database: \"web_drill\"\n    });\n    const [results] = await db.execute(sql, values);\n    db.end();\n    return results;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjO0FBQ3FCO0FBRTVCLGVBQWVDLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxNQUFNLEVBQUU7SUFDdkMsTUFBTUMsRUFBRSxHQUFHLE1BQU1KLHNFQUFzQixDQUFDO1FBQ3RDTSxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFFBQVEsRUFBRSxXQUFXO0tBQ3RCLENBQUM7SUFDRixNQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLE1BQU1OLEVBQUUsQ0FBQ08sT0FBTyxDQUFDVCxHQUFHLEVBQUVDLE1BQU0sQ0FBQztJQUMvQ0MsRUFBRSxDQUFDUSxHQUFHLEVBQUUsQ0FBQztJQUNULE9BQU9GLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWx3ZWJzLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1dGlscy9kYi5qc1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHNxbCwgdmFsdWVzKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICdzZXJhJyxcclxuICAgIGRhdGFiYXNlOiAnd2ViX2RyaWxsJyxcclxuICB9KTtcclxuICBjb25zdCBbcmVzdWx0c10gPSBhd2FpdCBkYi5leGVjdXRlKHNxbCwgdmFsdWVzKTtcclxuICBkYi5lbmQoKTtcclxuICByZXR1cm4gcmVzdWx0cztcclxufVxyXG4gIl0sIm5hbWVzIjpbIm15c3FsIiwicXVlcnkiLCJzcWwiLCJ2YWx1ZXMiLCJkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJyZXN1bHRzIiwiZXhlY3V0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile.js"));
module.exports = __webpack_exports__;

})();
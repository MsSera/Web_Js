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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n\n// Handle signup without image upload\nasync function handler(req, res) {\n    const { firstname , lastname , email , password , bio  } = req.body;\n    try {\n        const result = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.query)(`INSERT INTO users (user_firstname, user_lastname, user_email, user_password, user_bio) VALUES (?, ?, ?, ?, ?)`, [\n            firstname,\n            lastname,\n            email,\n            password,\n            bio\n        ]);\n        res.status(201).json({\n            message: \"Signup successful\"\n        });\n    } catch (error) {\n        console.error(\"Signup error\", error);\n        res.status(500).json({\n            error: \"Signup failed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVDO0FBRXZDLHFDQUFxQztBQUN0QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxHQUFHLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBRTlELElBQUk7UUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTVYsZ0RBQUssQ0FDeEIsQ0FBQyw2R0FBNkcsQ0FBQyxFQUMvRztZQUFDSSxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDLEdBQUc7U0FBQyxDQUM1QztRQUVETCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxtQkFBbUI7U0FBRSxDQUFDLENBQUM7SUFDekQsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUNyQ1gsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxLQUFLLEVBQUUsZUFBZTtTQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsd2Vicy8uL3BhZ2VzL2FwaS9zaWdudXAuanM/YTg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSB9IGZyb20gJy4uLy4uL3V0aWxzL2RiJztcclxuXHJcbi8vIEhhbmRsZSBzaWdudXAgd2l0aG91dCBpbWFnZSB1cGxvYWRcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgZmlyc3RuYW1lLCBsYXN0bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHJlcS5ib2R5O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXHJcbiAgICAgIGBJTlNFUlQgSU5UTyB1c2VycyAodXNlcl9maXJzdG5hbWUsIHVzZXJfbGFzdG5hbWUsIHVzZXJfZW1haWwsIHVzZXJfcGFzc3dvcmQsIHVzZXJfYmlvKSBWQUxVRVMgKD8sID8sID8sID8sID8pYCxcclxuICAgICAgW2ZpcnN0bmFtZSwgbGFzdG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvXVxyXG4gICAgKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTaWdudXAgc3VjY2Vzc2Z1bCcgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1NpZ251cCBlcnJvcicsIGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdTaWdudXAgZmFpbGVkJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJpbyIsImJvZHkiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.js"));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 9052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUserGrades": () => (/* binding */ fetchUserGrades)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4178);

const fetchUserGrades = async (options) => {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("https://bigdata.insper-comp.com.br/iag/grade_by_exercice/megadados/23-2", {
        headers: {
            "Authorization": `Bearer ${options.token}`
        }
    });
    const data = await response.data;
    return data;
};


/***/ })

};
;
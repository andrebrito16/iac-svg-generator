"use strict";
exports.id = 466;
exports.ids = [466];
exports.modules = {

/***/ 466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseData": () => (/* binding */ parseData)
/* harmony export */ });
const parseData = (data) => {
    // Remove extra quotes from start and end
    data = data.slice(1, data.length - 1);
    // Replace escaped newlines with actual newlines
    data = data.replace(/\\n/g, '\n');
    const lines = data.split("\n").slice(2); // Skip the first two lines
    // Check if lines are empty
    if (lines.length === 0 || lines[0] === '') {
        return [];
    }
    return lines.map(line => {
        const [_, , activity, exercise, weight, grade] = line.split("|").map(s => s.trim());
        return {
            activity,
            exercise,
            weight: parseInt(weight, 10),
            grade: parseInt(grade, 10),
        };
    });
};


/***/ })

};
;
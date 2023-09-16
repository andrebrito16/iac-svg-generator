"use strict";
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 1329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateSVG": () => (/* binding */ generateSVG)
/* harmony export */ });
const generateSVG = (grades) => {
    const badgeWidth = 180;
    const badgeHeight = 22;
    const gap = 5;
    const maxSvgWidth = 905;
    const badgesPerRow = Math.floor(maxSvgWidth / (badgeWidth + gap));
    const mimimumRows = Math.ceil(grades.length / badgesPerRow);
    const svgHeight = mimimumRows * (badgeHeight + gap);
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${maxSvgWidth}" height="${svgHeight}">`;
    grades.forEach((grade, index) => {
        const row = Math.floor(index / badgesPerRow);
        const col = index % badgesPerRow;
        const x = col * (badgeWidth + gap);
        const y = row * (badgeHeight + gap);
        const gradeColor = grade.grade === 10 ? '#00b300' : '#ff0000';
        svg += `<rect rx="3" x="${x}" y="${y}" width="${badgeWidth}" height="${badgeHeight}" fill="#595959"/>`;
        svg += `<rect rx="3" x="${x + badgeWidth * 0.80}" y="${y}" width="${badgeWidth * 0.20}" height="${badgeHeight}" fill="${gradeColor}"/>`;
        svg += `<rect rx="0" x="${x + badgeWidth * 0.50}" y="${y}" width="${badgeWidth * 0.30}" height="${badgeHeight}" fill="#005ce6"/>`;
        svg += `<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">`;
        svg += `<text x="${x + badgeWidth * 0.25}" y="${y + badgeHeight * 0.75}" fill="#010101" fill-opacity=".3">${grade.activity}</text><text x="${x + badgeWidth * 0.25}" y="${y + badgeHeight * 0.70}">${grade.activity}</text>`;
        svg += `<text x="${x + badgeWidth * 0.65}" y="${y + badgeHeight * 0.75}" fill="#010101" fill-opacity=".3">${grade.exercise}</text><text x="${x + badgeWidth * 0.65}" y="${y + badgeHeight * 0.70}">${grade.exercise}</text>`;
        svg += `<text x="${x + badgeWidth * 0.90}" y="${y + badgeHeight * 0.75}" fill="#010101" fill-opacity=".3">${grade.grade}</text><text x="${x + badgeWidth * 0.90}" y="${y + badgeHeight * 0.70}">${grade.grade}</text>`;
        svg += `</g>`;
    });
    svg += `</svg>`;
    return svg;
};


/***/ })

};
;
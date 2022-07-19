"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var CustomButton = (0, styles_1.styled)(material_1.Button)(function (_a) {
    var theme = _a.theme;
    return "\n  background-color: ".concat(theme.palette.primary.main, "\n");
});
var Button = function () {
    return (0, jsx_runtime_1.jsx)(CustomButton, { children: "Hello" });
};
exports.Button = Button;

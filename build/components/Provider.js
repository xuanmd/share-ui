"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryThemeProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var LibraryThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, __assign({ theme: theme }, { children: children })));
};
exports.LibraryThemeProvider = LibraryThemeProvider;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSearchResults = exports.appSearchInput = exports.appSearchHistory = void 0;
const recoil_1 = require("recoil");
//Search state
exports.appSearchHistory = (0, recoil_1.atom)({
    key: 'appSearchHistory',
    default: [], // default value (aka initial value)
});
exports.appSearchInput = (0, recoil_1.atom)({
    key: 'appSearchInput',
    default: '', // default value (aka initial value)
});
exports.appSearchResults = (0, recoil_1.atom)({
    key: 'appSearchResult',
    default: {
        'hello': [{
                primary: 'Request Orders',
                secondary: 'Hello',
                details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.'
            }, {
                primary: 'Hello!',
                details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.'
            }]
    }, // default value (aka initial value)
});

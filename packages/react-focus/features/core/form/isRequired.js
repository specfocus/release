"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isRequired = validate => {
    if (validate && validate.isRequired) {
        return true;
    }
    if (Array.isArray(validate)) {
        return validate.some(it => it.isRequired);
    }
    return false;
};
exports.default = isRequired;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const maybe_1 = require("../../maybe");
function validate(value) {
    if ((0, maybe_1.isUndefined)(value)) {
        return false;
    }
    return true;
}
exports.validate = validate;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const auth_1 = __importDefault(require("./auth"));
const callback_1 = __importDefault(require("./callback"));
const fetch_1 = __importDefault(require("./fetch"));
const notification_1 = __importDefault(require("./notification"));
const redirection_1 = __importDefault(require("./redirection"));
const accumulate_1 = __importDefault(require("./accumulate"));
const refresh_1 = __importDefault(require("./refresh"));
const undo_1 = __importDefault(require("./undo"));
/**
 * @param {Object} dataProvider A Data Provider function
 * @param {Function} authProvider An Authentication Provider object
 */
exports.default = (dataProvider, authProvider) => function* admin() {
    yield (0, effects_1.all)([
        (0, auth_1.default)(authProvider)(),
        (0, undo_1.default)(),
        (0, fetch_1.default)(dataProvider)(),
        (0, accumulate_1.default)(),
        (0, redirection_1.default)(),
        (0, refresh_1.default)(),
        (0, notification_1.default)(),
        (0, callback_1.default)(),
    ]);
};

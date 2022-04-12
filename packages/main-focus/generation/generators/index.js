"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generators = void 0;
const string_1 = require("../../string");
const uuid_1 = require("uuid");
const date_1 = __importDefault(require("./date"));
const email_1 = __importDefault(require("./email"));
const password_1 = __importDefault(require("./password"));
const phrase_1 = __importDefault(require("./phrase"));
const regex_1 = __importDefault(require("./regex"));
const url_1 = __importDefault(require("./url"));
const username_1 = __importDefault(require("./username"));
exports.generators = {
    [string_1.DATE_STR]: date_1.default,
    [string_1.EMAIL]: email_1.default,
    [string_1.GUID]: uuid_1.v4,
    [string_1.NAME]: username_1.default,
    [string_1.PASSWORD]: password_1.default,
    [string_1.REGEX]: regex_1.default,
    [string_1.STRING]: phrase_1.default,
    [string_1.URL]: url_1.default,
    [string_1.USERNAME]: username_1.default,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.STRING_TYPE = void 0;
const base_1 = __importDefault(require("./base"));
const isAbsent_1 = __importDefault(require("./validate/isAbsent"));
const locale_1 = require("./validate/locale");
exports.STRING_TYPE = 'string';
// eslint-disable-next-line
let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
// eslint-disable-next-line
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
// eslint-disable-next-line
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => (0, isAbsent_1.default)(value) || value === value.trim();
let objStringTag = {}.toString();
function create() {
    return new StringSchema();
}
exports.create = create;
class StringSchema extends base_1.default {
    constructor() {
        super({ type: 'string' });
        this.withMutation(() => {
            this.transform(function (value) {
                if (this.isType(value))
                    return value;
                if (Array.isArray(value))
                    return value;
                const strValue = value != null && value.toString ? value.toString() : value;
                if (strValue === objStringTag)
                    return value;
                return strValue;
            });
        });
    }
    _typeCheck(value) {
        if (value instanceof String)
            value = value.valueOf();
        return typeof value === 'string';
    }
    _isPresent(value) {
        return super._isPresent(value) && !!value.length;
    }
    length(length, message = locale_1.string.length) {
        return this.test({
            message,
            name: 'length',
            exclusive: true,
            params: { length },
            test(value) {
                return (0, isAbsent_1.default)(value) || value.length === this.resolve(length);
            },
        });
    }
    min(min, message = locale_1.string.min) {
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: { min },
            test(value) {
                return (0, isAbsent_1.default)(value) || value.length >= this.resolve(min);
            },
        });
    }
    max(max, message = locale_1.string.max) {
        return this.test({
            name: 'max',
            exclusive: true,
            message,
            params: { max },
            test(value) {
                return (0, isAbsent_1.default)(value) || value.length <= this.resolve(max);
            },
        });
    }
    matches(regex, options) {
        let excludeEmptyString = false;
        let message;
        let name;
        if (options) {
            if (typeof options === 'object') {
                ({
                    excludeEmptyString = false,
                    message,
                    name,
                } = options);
            }
            else {
                message = options;
            }
        }
        return this.test({
            name: name || 'matches',
            message: message || locale_1.string.matches,
            params: { regex },
            test: (value) => (0, isAbsent_1.default)(value) ||
                (value === '' && excludeEmptyString) ||
                value.search(regex) !== -1,
        });
    }
    email(message = locale_1.string.email) {
        return this.matches(rEmail, {
            name: 'email',
            message,
            excludeEmptyString: true,
        });
    }
    url(message = locale_1.string.url) {
        return this.matches(rUrl, {
            name: 'url',
            message,
            excludeEmptyString: true,
        });
    }
    uuid(message = locale_1.string.uuid) {
        return this.matches(rUUID, {
            name: 'uuid',
            message,
            excludeEmptyString: false,
        });
    }
    //-- transforms --
    ensure() {
        return this.default('').transform((val) => val === null ? '' : val);
    }
    trim(message = locale_1.string.trim) {
        return this.transform((val) => (val != null ? val.trim() : val)).test({
            message,
            name: 'trim',
            test: isTrimmed,
        });
    }
    lowercase(message = locale_1.string.lowercase) {
        return this.transform((value) => !(0, isAbsent_1.default)(value) ? value.toLowerCase() : value).test({
            message,
            name: 'string_case',
            exclusive: true,
            test: (value) => (0, isAbsent_1.default)(value) || value === value.toLowerCase(),
        });
    }
    uppercase(message = locale_1.string.uppercase) {
        return this.transform((value) => !(0, isAbsent_1.default)(value) ? value.toUpperCase() : value).test({
            message,
            name: 'string_case',
            exclusive: true,
            test: (value) => (0, isAbsent_1.default)(value) || value === value.toUpperCase(),
        });
    }
}
exports.default = StringSchema;
create.prototype = StringSchema.prototype;

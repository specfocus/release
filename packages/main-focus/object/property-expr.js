"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = exports.normalizePath = exports.forEach = exports.join = exports.getter = exports.setter = exports.Cache = void 0;
/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */
class Cache {
    constructor(maxSize) {
        this._size = 0;
        this.clear = () => {
            this._size = 0;
            this._values = Object.create(null);
        };
        this.get = (key) => {
            return this._values[key];
        };
        this.set = (key, value) => {
            this._size >= this._maxSize && this.clear();
            if (!(key in this._values))
                this._size++;
            return (this._values[key] = value);
        };
        this._maxSize = maxSize;
        this.clear();
    }
}
exports.Cache = Cache;
const SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
const DIGIT_REGEX = /^\d+$/;
const LEAD_DIGIT_REGEX = /^\d/;
const SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
const CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/;
const MAX_CACHE_SIZE = 512;
const pathCache = new Cache(MAX_CACHE_SIZE);
const setCache = new Cache(MAX_CACHE_SIZE);
const getCache = new Cache(MAX_CACHE_SIZE);
const setter = (path) => {
    const parts = (0, exports.normalizePath)(path);
    return (setCache.get(path) ||
        setCache.set(path, (obj, value) => {
            const len = parts.length;
            let index = 0;
            let data = obj;
            while (index < len - 1) {
                const part = parts[index];
                if (part === '__proto__' ||
                    part === 'constructor' ||
                    part === 'prototype') {
                    return obj;
                }
                data = data[parts[index++]];
            }
            data[parts[index]] = value;
        }));
};
exports.setter = setter;
const getter = (path, safe) => {
    const parts = (0, exports.normalizePath)(path);
    return (getCache.get(path) ||
        getCache.set(path, (data) => {
            let index = 0, len = parts.length;
            while (index < len) {
                if (data != null || !safe)
                    data = data[parts[index++]];
                else
                    return;
            }
            return data;
        }));
};
exports.getter = getter;
const join = (segments) => {
    return segments.reduce(function (path, part) {
        return (path +
            (isQuoted(part) || DIGIT_REGEX.test(part)
                ? '[' + part + ']'
                : (path ? '.' : '') + part));
    }, '');
};
exports.join = join;
const forEach = (path, cb, thisArg) => {
    _forEach(Array.isArray(path) ? path : (0, exports.split)(path), cb, thisArg);
};
exports.forEach = forEach;
const normalizePath = (path) => pathCache.get(path) ||
    pathCache.set(path, (0, exports.split)(path).map((part) => {
        return part.replace(CLEAN_QUOTES_REGEX, '$2');
    }));
exports.normalizePath = normalizePath;
const split = (path) => path.match(SPLIT_REGEX);
exports.split = split;
function _forEach(parts, iter, thisArg) {
    for (let idx = 0, len = parts.length; idx < len; idx++) {
        let part = parts[idx];
        if (part) {
            if (shouldBeQuoted(part)) {
                part = '"' + part + '"';
            }
            const isBracket = isQuoted(part);
            const isArray = !isBracket && /^\d+$/.test(part);
            iter.call(thisArg, part, isBracket, isArray, idx, parts);
        }
    }
}
const isQuoted = (str) => typeof str === 'string' && str.length > 0 && ["'", '"'].indexOf(str.charAt(0)) !== -1;
const hasLeadingNumber = (part) => part.match(LEAD_DIGIT_REGEX) !== null && part.match(DIGIT_REGEX) === null;
const hasSpecialChars = (part) => SPEC_CHAR_REGEX.test(part);
const shouldBeQuoted = (part) => !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));

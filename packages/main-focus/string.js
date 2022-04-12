"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = exports.sentenceCase = exports.kebabCase = exports.snakeCase = exports.pascalCase = exports.camelCase = exports.join = exports.upperFirst = exports.words = exports.supplant = exports.isValidJSON = exports.isUpperCase = exports.isString = exports.isPhoneNumber = exports.isAlphaNumeric = exports.isNumberLike = exports.isLowerCase = exports.isIntegerLike = exports.isGuid = exports.isEmailAddress = exports.isAbsoluteUrl = exports.STRING_TYPES = exports.USERNAME = exports.URL = exports.STRING = exports.REGEX = exports.PASSWORD = exports.NAME = exports.GUID = exports.EMAIL = exports.DATE_STR = void 0;
exports.DATE_STR = "date";
exports.EMAIL = "email";
exports.GUID = "guid";
exports.NAME = "name";
exports.PASSWORD = "password";
exports.REGEX = "regex";
exports.STRING = "string";
exports.URL = "url";
exports.USERNAME = "username";
exports.STRING_TYPES = [
    exports.DATE_STR,
    exports.EMAIL,
    exports.GUID,
    exports.NAME,
    exports.PASSWORD,
    exports.REGEX,
    exports.STRING,
    exports.URL,
    exports.USERNAME,
];
const EMAIL_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const GUID_EX = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/;
const PHONE_EX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const URL_EX = /^[a-z][a-z0-9+.-]*:/;
const isAbsoluteUrl = (val) => (0, exports.isString)(val) && URL_EX.test(val);
exports.isAbsoluteUrl = isAbsoluteUrl;
const isEmailAddress = (val) => (0, exports.isString)(val) && EMAIL_EX.test(val);
exports.isEmailAddress = isEmailAddress;
const isGuid = (val) => (0, exports.isString)(val) && GUID_EX.test(val);
exports.isGuid = isGuid;
const isIntegerLike = (val) => (0, exports.isString)(val) && val === String(parseInt(val, 10));
exports.isIntegerLike = isIntegerLike;
const isLowerCase = (val) => (0, exports.isString)(val) && val === val.toLowerCase();
exports.isLowerCase = isLowerCase;
const isNumberLike = (val) => (0, exports.isString)(val) && val === String(parseFloat(val));
exports.isNumberLike = isNumberLike;
/*
(123) 456-7890
(123)456-7890
123-456-7890
123.456.7890
1234567890
+31636363634
075-63546725
*/
const isAlphaNumeric = (val) => {
    const regExp = /^[A-Za-z0-9]+$/;
    return (0, exports.isString)(val) && !!val.match(regExp);
};
exports.isAlphaNumeric = isAlphaNumeric;
const isPhoneNumber = (val) => (0, exports.isString)(val) && PHONE_EX.test(val);
exports.isPhoneNumber = isPhoneNumber;
const isString = (val) => val instanceof Object && val.constructor === String ||
    val instanceof String || typeof val === exports.STRING;
exports.isString = isString;
const isUpperCase = (val) => (0, exports.isString)(val) && val === val.toUpperCase();
exports.isUpperCase = isUpperCase;
const isValidJSON = (val) => {
    if (!(0, exports.isString)(val)) {
        return false;
    }
    try {
        JSON.parse(val);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isValidJSON = isValidJSON;
/**
 * http://crockford.com/javascript/
 * alert(supplant("I'm {age} years old!", { age: 29 }));
 * alert(supplant("The {a} says {n}, {n}, {n}!", { a: 'cow', n: 'moo' }));
 * @param template
 * @param obj
 * @returns
 */
const supplant = (template, obj) => {
    return template.replace(/{([^{}]*)}/g, // (substring: string, ...args: any[])
    (substring, key) => {
        const val = obj[key];
        switch (typeof val) {
            case 'string':
                return val;
            case 'number':
                return String(val);
            case 'bigint':
                return String(val);
            case 'boolean':
                return String(val);
            case 'function':
                return String(val.bind(obj)());
            case 'object':
                return val === null ? '' : JSON.stringify(val);
            default:
                return substring;
        }
    });
};
exports.supplant = supplant;
const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
const words = (str) => str.match(reWords) || [];
exports.words = words;
const upperFirst = (str) => str[0].toUpperCase() + str.slice(1);
exports.upperFirst = upperFirst;
const join = (str, d) => (0, exports.words)(str).join(d).toLowerCase();
exports.join = join;
const camelCase = (str) => (0, exports.words)(str).reduce((acc, next) => `${acc}${!acc ? next : (0, exports.upperFirst)(next)}`, '');
exports.camelCase = camelCase;
const pascalCase = (str) => (0, exports.upperFirst)((0, exports.camelCase)(str));
exports.pascalCase = pascalCase;
const snakeCase = (str) => (0, exports.join)(str, '_');
exports.snakeCase = snakeCase;
const kebabCase = (str) => (0, exports.join)(str, '-');
exports.kebabCase = kebabCase;
const sentenceCase = (str) => (0, exports.upperFirst)((0, exports.join)(str, ' '));
exports.sentenceCase = sentenceCase;
const titleCase = (str) => (0, exports.words)(str).map(exports.upperFirst).join(' ');
exports.titleCase = titleCase;

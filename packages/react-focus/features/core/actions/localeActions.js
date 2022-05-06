"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLocaleFailure = exports.CHANGE_LOCALE_FAILURE = exports.changeLocaleSuccess = exports.CHANGE_LOCALE_SUCCESS = exports.changeLocale = exports.CHANGE_LOCALE = void 0;
exports.CHANGE_LOCALE = 'CHANGE_LOCALE';
const changeLocale = (locale) => ({
    type: exports.CHANGE_LOCALE,
    payload: locale,
});
exports.changeLocale = changeLocale;
exports.CHANGE_LOCALE_SUCCESS = 'CHANGE_LOCALE_SUCCESS';
const changeLocaleSuccess = (locale, messages) => ({
    type: exports.CHANGE_LOCALE_SUCCESS,
    payload: {
        locale,
        messages,
    },
});
exports.changeLocaleSuccess = changeLocaleSuccess;
exports.CHANGE_LOCALE_FAILURE = 'CHANGE_LOCALE_FAILURE';
const changeLocaleFailure = (locale, error) => ({
    type: exports.CHANGE_LOCALE_FAILURE,
    error,
    payload: {
        locale,
    },
});
exports.changeLocaleFailure = changeLocaleFailure;

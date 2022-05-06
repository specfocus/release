"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const warning_1 = __importDefault(require("../util/warning"));
const useTranslate_1 = __importDefault(require("./useTranslate"));
const useLocale_1 = __importDefault(require("./useLocale"));
/**
 * Higher-Order Component for getting access to the `locale` and the `translate` function in props.
 *
 * Requires that the app is decorated by the <TranslationProvider> to inject
 * the translation dictionaries and function in the context.
 *
 * @example
 *     import * as React from "react";
 *     import { translate } from '../app';
 *
 *     const MyHelloButton = ({ translate }) => (
 *         <button>{translate('myroot.hello.world')}</button>
 *     );
 *
 *     export default translate(MyHelloButton);
 *
 * @param {*} BaseComponent The component to decorate
 */
const withTranslate = (BaseComponent) => {
    (0, warning_1.default)(typeof BaseComponent === 'string', `The translate function is a Higher Order Component, and should not be called directly with a translation key. Use the translate function passed as prop to your component props instead:

const MyHelloButton = ({ translate }) => (
    <button>{translate('myroot.hello.world')}</button>
);`);
    const TranslatedComponent = props => {
        const translate = (0, useTranslate_1.default)();
        const locale = (0, useLocale_1.default)();
        return ((0, jsx_runtime_1.jsx)(BaseComponent, Object.assign({}, props, { translate: translate, locale: locale }), void 0));
    };
    TranslatedComponent.defaultProps = BaseComponent.defaultProps;
    return TranslatedComponent;
};
exports.default = withTranslate;

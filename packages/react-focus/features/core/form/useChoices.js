"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const get_1 = __importDefault(require("lodash/get"));
const i18n_1 = require("../i18n");
/*
 * Returns helper functions for choices handling.
 *
 * @param optionText Either a string defining the property to use to get the choice text, a function or a React element
 * @param optionValue The property to use to get the choice value
 * @param translateChoice A boolean indicating whether to option text should be translated
 *
 * @returns An object with helper functions:
 * - getChoiceText: Returns the choice text or a React element
 * - getChoiceValue: Returns the choice value
 */
const useChoices = ({ optionText = 'name', optionValue = 'id', disableValue = 'disabled', translateChoice = true, }) => {
    const translate = (0, i18n_1.useTranslate)();
    const getChoiceText = (0, react_1.useCallback)(choice => {
        if ((0, react_1.isValidElement)(optionText)) {
            return (0, react_1.cloneElement)(optionText, {
                record: choice,
            });
        }
        const choiceName = typeof optionText === 'function'
            ? optionText(choice)
            : (0, get_1.default)(choice, optionText);
        return translateChoice
            ? translate(choiceName, { _: choiceName })
            : choiceName;
    }, [optionText, translate, translateChoice]);
    const getChoiceValue = (0, react_1.useCallback)(choice => (0, get_1.default)(choice, optionValue), [
        optionValue,
    ]);
    const getDisableValue = (0, react_1.useCallback)(choice => (0, get_1.default)(choice, disableValue), [
        disableValue,
    ]);
    return {
        getChoiceText,
        getChoiceValue,
        getDisableValue,
    };
};
exports.default = useChoices;

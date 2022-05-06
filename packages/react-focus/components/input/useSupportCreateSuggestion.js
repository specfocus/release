"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateSuggestionContext = exports.useSupportCreateSuggestion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("../../features/core");
const set_1 = __importDefault(require("lodash/set"));
/**
 * This hook provides support for suggestion creation in inputs which have choices.
 *
 * @param options The hook option
 * @param {ReactElement} options.create A react element which will be rendered when users choose to create a new choice. This component must call the `useCreateSuggestionContext` hook which provides `onCancel`, `onCreate` and `filter`. See the examples.
 * @param {String} options.createLabel Optional. The label for the choice item allowing users to create a new choice. Can be a translation key. Defaults to `ra.action.create`.
 * @param {String} options.createItemLabel Optional. The label for the choice item allowing users to create a new choice when they already entered a filter. Can be a translation key. The translation will receive an `item` parameter. Defaults to `ra.action.create_item`.
 * @param {any} options.createValue Optional. The value for the choice item allowing users to create a new choice. Defaults to `@@ra-create`.
 * @param {String} options.filter Optional. The filter users may have already entered. Useful for autocomplete inputs for example.
 * @param {OnCreateHandler} options.onCreate Optional. A function which will be called when users choose to create a new choice, if the `create` option wasn't provided.
 * @param handleChange: a function to pass to the input. Receives the same parameter as the original event handler and an additional newItem parameter if a new item was create.
 * @returns {UseSupportCreateValue} An object with the following properties:
 * - getCreateItem: a function which will return the label of the choice for create a new choice.
 * - createElement: a React element to render after the input. It will be rendered when users choose to create a new choice. It renders null otherwise.
 */
const useSupportCreateSuggestion = (options) => {
    const { create, createLabel = 'ra.action.create', createItemLabel = 'ra.action.create_item', createValue = '@@ra-create', optionText = 'name', filter, handleChange, onCreate, } = options;
    const translate = (0, core_1.useTranslate)();
    const [renderOnCreate, setRenderOnCreate] = (0, react_1.useState)(false);
    const context = {
        filter,
        onCancel: () => setRenderOnCreate(false),
        onCreate: item => {
            setRenderOnCreate(false);
            handleChange(undefined, item);
        },
    };
    return {
        getCreateItem: () => {
            if (typeof optionText !== 'string') {
                return {
                    id: createValue,
                    name: filter && createItemLabel
                        ? translate(createItemLabel, {
                            item: filter,
                            _: createItemLabel,
                        })
                        : translate(createLabel, { _: createLabel }),
                };
            }
            return (0, set_1.default)({
                id: createValue,
            }, optionText, filter && createItemLabel
                ? translate(createItemLabel, {
                    item: filter,
                    _: createItemLabel,
                })
                : translate(createLabel, { _: createLabel }));
        },
        handleChange: (eventOrValue) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const value = ((_a = eventOrValue.target) === null || _a === void 0 ? void 0 : _a.value) || eventOrValue;
            const finalValue = Array.isArray(value) ? [...value].pop() : value;
            if (eventOrValue === null || eventOrValue === void 0 ? void 0 : eventOrValue.preventDefault) {
                eventOrValue.preventDefault();
                eventOrValue.stopPropagation();
            }
            if ((finalValue === null || finalValue === void 0 ? void 0 : finalValue.id) === createValue || finalValue === createValue) {
                if (!(0, react_1.isValidElement)(create)) {
                    const newSuggestion = yield onCreate(filter);
                    if (newSuggestion) {
                        handleChange(eventOrValue, newSuggestion);
                        return;
                    }
                }
                else {
                    setRenderOnCreate(true);
                    return;
                }
            }
            handleChange(eventOrValue, undefined);
        }),
        createElement: renderOnCreate && (0, react_1.isValidElement)(create) ? ((0, jsx_runtime_1.jsx)(CreateSuggestionContext.Provider, Object.assign({ value: context }, { children: create }), void 0)) : null,
    };
};
exports.useSupportCreateSuggestion = useSupportCreateSuggestion;
const CreateSuggestionContext = (0, react_1.createContext)(undefined);
const useCreateSuggestionContext = () => (0, react_1.useContext)(CreateSuggestionContext);
exports.useCreateSuggestionContext = useCreateSuggestionContext;

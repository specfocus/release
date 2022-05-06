"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useDataProvider_1 = __importDefault(require("./useDataProvider"));
const react_1 = require("react");
const useDeclarativeSideEffects_1 = __importDefault(require("./useDeclarativeSideEffects"));
const getDataProviderCallArguments_1 = require("./getDataProviderCallArguments");
/**
 * This version of the useDataProvider hook ensure Query and Mutation components are still usable
 * with side effects declared as objects.
 *
 * @deprecated This is for backward compatibility only and will be removed in next major version.
 */
const useDataProviderWithDeclarativeSideEffects = () => {
    const dataProvider = (0, useDataProvider_1.default)();
    const getSideEffects = (0, useDeclarativeSideEffects_1.default)();
    // @ts-ignore
    const dataProviderProxy = (0, react_1.useMemo)(() => {
        return new Proxy(dataProvider, {
            get: (target, name) => {
                if (typeof name === 'symbol') {
                    return;
                }
                return (...args) => {
                    const { resource, payload, allArguments, options, } = (0, getDataProviderCallArguments_1.getDataProviderCallArguments)(args);
                    let onSuccess;
                    let onFailure;
                    let finalOptions = options;
                    let finalAllArguments = allArguments;
                    if (options &&
                        Object.keys(options).some(key => ['onSuccess', 'onFailure'].includes(key))) {
                        const sideEffect = getSideEffects(resource, options);
                        let { onSuccess: ignoreOnSuccess, // Used to extract options without onSuccess
                        onFailure: ignoreOnFailure } = options, // Used to extract options without onFailure
                        otherOptions = __rest(options, ["onSuccess", "onFailure"]);
                        onSuccess = sideEffect.onSuccess;
                        onFailure = sideEffect.onFailure;
                        finalOptions = otherOptions;
                        finalAllArguments = [...args].slice(0, args.length - 1);
                    }
                    try {
                        return target[name.toString()].apply(target, typeof resource === 'string'
                            ? [
                                resource,
                                payload,
                                Object.assign(Object.assign({}, finalOptions), { onSuccess,
                                    onFailure }),
                            ]
                            : finalAllArguments);
                    }
                    catch (e) {
                        // turn synchronous exceptions (e.g. in parameter preparation)
                        // into async ones, otherwise they'll be lost
                        return Promise.reject(e);
                    }
                };
            },
        });
    }, [dataProvider, getSideEffects]);
    return dataProviderProxy;
};
exports.default = useDataProviderWithDeclarativeSideEffects;

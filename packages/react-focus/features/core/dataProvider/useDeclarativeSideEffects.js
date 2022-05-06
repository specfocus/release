"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sideEffect_1 = require("../sideEffect");
const react_1 = require("react");
const defaultSideEffects = {
    onSuccess: undefined,
    onFailure: undefined,
};
const useDeclarativeSideEffects = () => {
    const notify = (0, sideEffect_1.useNotify)();
    const redirect = (0, sideEffect_1.useRedirect)();
    const refresh = (0, sideEffect_1.useRefresh)();
    const unselectAll = (0, sideEffect_1.useUnselectAll)();
    return (0, react_1.useMemo)(() => (resource, { onSuccess, onFailure, } = defaultSideEffects) => {
        const convertToFunctionSideEffect = (resource, sideEffects) => {
            if (!sideEffects || typeof sideEffects === 'function') {
                return sideEffects;
            }
            if (Object.keys(sideEffects).length === 0) {
                return undefined;
            }
            const { notification, redirectTo, refresh: needRefresh, unselectAll: needUnselectAll, } = sideEffects;
            return () => {
                if (notification) {
                    notify(notification.body, notification.level, notification.messageArgs);
                }
                if (redirectTo) {
                    redirect(redirectTo);
                }
                if (needRefresh) {
                    refresh();
                }
                if (needUnselectAll) {
                    unselectAll(resource);
                }
            };
        };
        return {
            onSuccess: convertToFunctionSideEffect(resource, onSuccess),
            onFailure: convertToFunctionSideEffect(resource, onFailure),
        };
    }, [notify, redirect, refresh, unselectAll]);
};
exports.default = useDeclarativeSideEffects;

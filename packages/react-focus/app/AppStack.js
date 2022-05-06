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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppStack = exports.appStack = exports.APP_STACK = void 0;
const react_1 = require("react");
const recoil_1 = require("recoil");
exports.APP_STACK = 'appStack';
exports.appStack = (0, recoil_1.atom)({
    key: exports.APP_STACK,
    default: {}, // default value (aka initial value)
});
const stackTrace = () => {
    const error = new Error();
    return error.stack.split("\n")
        .slice(2)
        .map((line) => line.replace(/\s+at\s+/, ""));
};
const useAppStack = () => {
    const setStack = (0, recoil_1.useSetRecoilState)(exports.appStack);
    const push = (0, react_1.useCallback)((key, config) => {
        setStack(stack => {
            if (!stack || stack[key]) {
                return stack || {};
            }
            const value = Object.assign({ [key]: config }, stack);
            return value;
        });
    }, [setStack]);
    const pop = (0, react_1.useCallback)((key) => {
        setStack(stack => {
            if (!stack || !stack[key]) {
                return stack || {};
            }
            const next = Object.entries(stack).filter(([k]) => k !== key);
            const value = next.reduce((acc, [key, val]) => Object.assign(acc, { [key]: val }), {});
            return value;
        });
    }, [setStack]);
    const trigger = (0, recoil_1.useRecoilCallback)(({ snapshot }) => (action) => __awaiter(void 0, void 0, void 0, function* () {
        const stack = yield snapshot.getPromise(exports.appStack);
        for (const [key, config] of Object.entries(stack)) {
            if (!action) {
                break;
            }
            if (config === null || config === void 0 ? void 0 : config.handle) {
                config.handle(action);
            }
        }
    }));
    return {
        pop,
        push,
        trigger
    };
};
exports.useAppStack = useAppStack;

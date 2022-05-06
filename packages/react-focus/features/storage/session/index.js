"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = exports.getSessionValueOrDefault = exports.getSessionId = void 0;
const react_1 = require("react");
function getSessionId() {
    const tabID = sessionStorage.tabID &&
        sessionStorage.closedLastTab !== '2' ?
        sessionStorage.tabID :
        sessionStorage.tabID = Math.random();
    sessionStorage.closedLastTab = '2';
    return tabID;
}
exports.getSessionId = getSessionId;
function getSessionValueOrDefault(key, defaultValue) {
    const value = sessionStorage.getItem(key);
    if (!value) {
        return defaultValue;
    }
    return JSON.parse(value);
}
exports.getSessionValueOrDefault = getSessionValueOrDefault;
const EVENT_TYPE = 'unload beforeunload';
const useSession = () => {
    (0, react_1.useEffect)(() => {
        // In some cases, you may have same sessionStorage in multiple
        // tab (e.g. when you duplicate tab). In that case, following
        // code may help:
        const handler = () => {
            sessionStorage.closedLastTab = '1';
        };
        window.addEventListener(EVENT_TYPE, handler);
        return () => window.removeEventListener(EVENT_TYPE, handler);
    }, []);
    return getSessionId();
};
exports.useSession = useSession;

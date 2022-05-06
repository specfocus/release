"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const sideEffect_1 = require("../sideEffect");
const useIsAutomaticRefreshEnabled_1 = __importDefault(require("./useIsAutomaticRefreshEnabled"));
/**
 * Trigger a refresh of the page when the page comes back from background after a certain delay
 *
 * @param {number} delay Delay in milliseconds since the time the page was hidden. Defaults to 5 minutes.
 */
const useRefreshWhenVisible = (delay = 1000 * 60 * 5) => {
    const refresh = (0, sideEffect_1.useRefresh)();
    const automaticRefreshEnabled = (0, useIsAutomaticRefreshEnabled_1.default)();
    (0, react_1.useEffect)(() => {
        if (typeof document === 'undefined')
            return;
        let lastHiddenTime;
        const handleVisibilityChange = () => {
            if (!automaticRefreshEnabled) {
                return;
            }
            if (document.hidden) {
                // tab goes hidden
                lastHiddenTime = Date.now();
            }
            else {
                // tab goes visible
                if (Date.now() - lastHiddenTime > delay) {
                    refresh();
                }
                lastHiddenTime = null;
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange, {
            capture: true,
        });
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange, { capture: true });
    }, [automaticRefreshEnabled, delay, refresh]);
};
exports.default = useRefreshWhenVisible;

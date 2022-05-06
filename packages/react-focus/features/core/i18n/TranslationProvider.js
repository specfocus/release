"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../util/hooks");
const TranslationContext_1 = require("./TranslationContext");
/**
 * Creates a translation context, available to its children
 *
 * @example
 *     const MyApp = () => (
 *         <Provider store={store}>
 *             <TranslationProvider i18nProvider={i18nProvider}>
 *                 <!-- Child components go here -->
 *             </TranslationProvider>
 *         </Provider>
 *     );
 */
const TranslationProvider = (props) => {
    const { i18nProvider, children } = props;
    const [state, setState] = (0, hooks_1.useSafeSetState)({
        locale: i18nProvider ? i18nProvider.getLocale() : 'en',
        i18nProvider,
    });
    const setLocale = (0, react_1.useCallback)((newLocale) => setState(state => (Object.assign(Object.assign({}, state), { locale: newLocale }))), [setState]);
    // Allow locale modification by including setLocale in the context
    // This can't be done in the initial state because setState doesn't exist yet
    const value = (0, react_1.useMemo)(() => (Object.assign(Object.assign({}, state), { setLocale })), [setLocale, state]);
    return ((0, jsx_runtime_1.jsx)(TranslationContext_1.TranslationContext.Provider, Object.assign({ value: value }, { children: react_1.Children.only(children) }), void 0));
};
exports.default = TranslationProvider;

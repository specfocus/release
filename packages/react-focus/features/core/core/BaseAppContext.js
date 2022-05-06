"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const history_1 = require("history");
// import { ConnectedRouter } from 'connected-react-router';
const auth_1 = require("../auth");
const dataProvider_1 = require("../dataProvider");
// import createReduxStore from './createReduxStore';
const TranslationProvider_1 = __importDefault(require("../i18n/TranslationProvider"));
const BaseAppContext = (props) => {
    const { authProvider, dataProvider, i18nProvider, children,
    // history,
    // customReducers,
    // customSagas,
    // initialState,
     } = props;
    // const reduxIsAlreadyInitialized = !!useContext(ReactReduxContext);
    if (!dataProvider) {
        throw new Error(`Missing dataProvider prop.
React-admin requires a valid dataProvider function to work.`);
    }
    const finalAuthProvider = authProvider instanceof Function
        ? (0, auth_1.convertLegacyAuthProvider)(authProvider)
        : authProvider;
    const finalDataProvider = dataProvider instanceof Function
        ? (0, dataProvider_1.convertLegacyDataProvider)(dataProvider)
        : dataProvider;
    const finalHistory = history || (0, history_1.createBrowserHistory)();
    const renderCore = () => {
        return ((0, jsx_runtime_1.jsx)(auth_1.AuthContext.Provider, Object.assign({ value: finalAuthProvider }, { children: (0, jsx_runtime_1.jsx)(dataProvider_1.DataProviderContext.Provider, Object.assign({ value: finalDataProvider }, { children: (0, jsx_runtime_1.jsx)(TranslationProvider_1.default, Object.assign({ i18nProvider: i18nProvider }, { children: (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: /*typeof window !== 'undefined' ? (
                        <ConnectedRouter history={finalHistory}>
                            {children}
                        </ConnectedRouter>
                    ) : (
                        */ children /*
                    )*/ }, void 0) }), void 0) }), void 0) }), void 0));
    };
    /*
        const [store] = useState(() =>
            !reduxIsAlreadyInitialized
                ? createReduxStore({
                      authProvider: finalAuthProvider,
                      customReducers,
                      customSagas,
                      dataProvider: finalDataProvider,
                      initialState,
                      history: finalHistory,
                  })
                : undefined
        );
    
        if (reduxIsAlreadyInitialized) {
            if (!history) {
                throw new Error(`Missing history prop.
    When integrating ../../app inside an existing redux Provider, you must provide the same 'history' prop to the <Admin> as the one used to bootstrap your routerMiddleware.
    React-admin uses this history for its own ConnectedRouter.`);
            }*/
    return renderCore(); /*
    } else {
        return <Provider store={store!}>{renderCore()}</Provider>;
    }*/
};
exports.default = BaseAppContext;

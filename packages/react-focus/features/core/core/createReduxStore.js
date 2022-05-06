"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const connected_react_router_1 = require("connected-react-router");
const redux_saga_1 = __importDefault(require("redux-saga"));
const effects_1 = require("redux-saga/effects");
const reducer_1 = __importDefault(require("../reducer"));
const sideEffect_1 = require("../sideEffect");
const clearActions_1 = require("../actions/clearActions");
exports.default = ({ dataProvider, history, customReducers = {}, authProvider = null, customSagas = [], initialState, }) => {
    const appReducer = (0, reducer_1.default)(customReducers, history);
    const resettableAppReducer = (state, action) => appReducer(action.type !== clearActions_1.CLEAR_STATE
        ? state
        : // Erase data from the store but keep location, notifications, ui prefs, etc.
         Object.assign(Object.assign({}, state), { admin: Object.assign(Object.assign({}, state.admin), { loading: 0, resources: {}, customQueries: {}, references: { oneToMany: {}, possibleValues: {} } }) }), action);
    const saga = function* rootSaga() {
        yield (0, effects_1.all)([(0, sideEffect_1.adminSaga)(dataProvider, authProvider), ...customSagas].map(effects_1.fork));
    };
    const sagaMiddleware = (0, redux_saga_1.default)();
    const typedWindow = typeof window !== 'undefined' && window;
    const composeEnhancers = (process.env.NODE_ENV === 'development' &&
        typeof typedWindow !== 'undefined' &&
        typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25,
        })) ||
        redux_1.compose;
    const store = (0, redux_1.createStore)(resettableAppReducer, typeof initialState === 'function' ? initialState() : initialState, composeEnhancers((0, redux_1.applyMiddleware)(sagaMiddleware, (0, connected_react_router_1.routerMiddleware)(history))));
    sagaMiddleware.run(saga);
    return store;
};

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleReferences = exports.getReferenceResource = exports.getResources = exports.getPossibleReferenceValues = exports.firstNotification = void 0;
const redux_1 = require("redux");
const connected_react_router_1 = require("connected-react-router");
const admin_1 = __importStar(require("./admin"));
var notifications_1 = require("./admin/notifications");
Object.defineProperty(exports, "firstNotification", { enumerable: true, get: function () { return notifications_1.firstNotification; } });
exports.default = (customReducers, history) => (0, redux_1.combineReducers)(Object.assign({ admin: admin_1.default, router: (0, connected_react_router_1.connectRouter)(history) }, customReducers));
const getPossibleReferenceValues = (state, props) => (0, admin_1.getPossibleReferenceValues)(state.admin, props);
exports.getPossibleReferenceValues = getPossibleReferenceValues;
const getResources = state => (0, admin_1.getResources)(state.admin);
exports.getResources = getResources;
const getReferenceResource = (state, props) => (0, admin_1.getReferenceResource)(state.admin, props);
exports.getReferenceResource = getReferenceResource;
var admin_2 = require("./admin");
Object.defineProperty(exports, "getPossibleReferences", { enumerable: true, get: function () { return admin_2.getPossibleReferences; } });

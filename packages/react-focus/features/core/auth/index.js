"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPermissions = exports.Authenticated = exports.useLogoutIfAccessDenied = exports.useAuthenticated = exports.useAuthState = exports.usePermissionsOptimized = exports.usePermissions = exports.useGetPermissions = exports.useGetIdentity = exports.useCheckAuth = exports.useLogout = exports.useLogin = exports.convertLegacyAuthProvider = exports.useAuthProvider = exports.AuthContext = void 0;
const Authenticated_1 = __importDefault(require("./Authenticated"));
exports.Authenticated = Authenticated_1.default;
const AuthContext_1 = __importDefault(require("./AuthContext"));
exports.AuthContext = AuthContext_1.default;
const useAuthProvider_1 = __importDefault(require("./useAuthProvider"));
exports.useAuthProvider = useAuthProvider_1.default;
const useAuthState_1 = __importDefault(require("./useAuthState"));
exports.useAuthState = useAuthState_1.default;
const usePermissions_1 = __importDefault(require("./usePermissions"));
exports.usePermissions = usePermissions_1.default;
const usePermissionsOptimized_1 = __importDefault(require("./usePermissionsOptimized"));
exports.usePermissionsOptimized = usePermissionsOptimized_1.default;
const useAuthenticated_1 = __importDefault(require("./useAuthenticated"));
exports.useAuthenticated = useAuthenticated_1.default;
const WithPermissions_1 = __importDefault(require("./WithPermissions"));
exports.WithPermissions = WithPermissions_1.default;
const useLogin_1 = __importDefault(require("./useLogin"));
exports.useLogin = useLogin_1.default;
const useLogout_1 = __importDefault(require("./useLogout"));
exports.useLogout = useLogout_1.default;
const useCheckAuth_1 = __importDefault(require("./useCheckAuth"));
exports.useCheckAuth = useCheckAuth_1.default;
const useGetIdentity_1 = __importDefault(require("./useGetIdentity"));
exports.useGetIdentity = useGetIdentity_1.default;
const useGetPermissions_1 = __importDefault(require("./useGetPermissions"));
exports.useGetPermissions = useGetPermissions_1.default;
const useLogoutIfAccessDenied_1 = __importDefault(require("./useLogoutIfAccessDenied"));
exports.useLogoutIfAccessDenied = useLogoutIfAccessDenied_1.default;
const convertLegacyAuthProvider_1 = __importDefault(require("./convertLegacyAuthProvider"));
exports.convertLegacyAuthProvider = convertLegacyAuthProvider_1.default;
__exportStar(require("./types"), exports);

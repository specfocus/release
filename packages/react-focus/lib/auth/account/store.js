"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetRoles = exports.useHasRights = exports.onlyRoles = exports.useSetAccount = exports.useAccountValue = exports.useAccount = exports.atomAccount = void 0;
const react_1 = require("react");
const recoil_1 = require("recoil");
const ANONYMOUS = 'anonymous';
const ANONYMOUS_ACCOUNT = {
    claims: {},
    name: ANONYMOUS,
    roles: [],
    username: ANONYMOUS,
};
exports.atomAccount = (0, recoil_1.atom)({
    key: 'account',
    default: ANONYMOUS_ACCOUNT, // default value (aka initial value)
});
const useAccount = () => (0, recoil_1.useRecoilState)(exports.atomAccount);
exports.useAccount = useAccount;
const useAccountValue = () => (0, recoil_1.useRecoilValue)(exports.atomAccount);
exports.useAccountValue = useAccountValue;
const useSetAccount = () => (0, recoil_1.useSetRecoilState)(exports.atomAccount);
exports.useSetAccount = useSetAccount;
exports.onlyRoles = (0, recoil_1.selector)({
    key: 'roles',
    get: ({ get }) => {
        const account = get(exports.atomAccount);
        const { roles } = account;
        return roles || [];
    },
    set: ({ get, set }, roles) => {
        const identity = get(exports.atomAccount);
        set(exports.atomAccount, Object.assign(Object.assign({}, identity), { roles }));
    }
});
const useHasRights = () => {
    const value = (0, recoil_1.useRecoilValue)(exports.onlyRoles);
    const hasRights = (0, react_1.useCallback)((rights) => {
        const allowed = new Set(value);
        console.log('Rights', rights, 'in', value);
        return (typeof rights === 'string'
            ? rights === '*' || allowed.has(rights)
            : Array.isArray(rights)
                ? rights.map(r => allowed.has(r)).some(r => r)
                : true);
    }, [value]);
    return hasRights;
};
exports.useHasRights = useHasRights;
const useSetRoles = () => (0, recoil_1.useSetRecoilState)(exports.onlyRoles);
exports.useSetRoles = useSetRoles;

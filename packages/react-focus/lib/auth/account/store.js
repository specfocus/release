"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetRoles = exports.useHasRights = exports.onlyRoles = exports.useSetAccount = exports.useAccountValue = exports.useAccount = exports.atomAccount = void 0;
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
    const arr = (0, recoil_1.useRecoilValue)(exports.onlyRoles);
    const roles = new Set(arr);
    return (rights) => typeof rights === 'string'
        ? roles.has(rights)
        : Array.isArray(rights)
            ? rights.map(roles.has).some(has => has)
            : true;
};
exports.useHasRights = useHasRights;
const useSetRoles = () => (0, recoil_1.useSetRecoilState)(exports.onlyRoles);
exports.useSetRoles = useSetRoles;

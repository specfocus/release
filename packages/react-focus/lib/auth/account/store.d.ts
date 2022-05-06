export declare type Role = string | string;
export declare type Rights = string | string[];
export interface Account {
    claims: Record<string, boolean | number | string>;
    /** Full name for the account, including given name and family name */
    name: string;
    /** roles claim of  this account */
    roles: Role[];
    /** Full tenant or organizational id that this account belongs to */
    tenantId?: string;
    /** username claim of this account */
    username: string;
}
export declare const atomAccount: import("recoil").RecoilState<Account>;
export declare const useAccount: () => [Account, import("recoil").SetterOrUpdater<Account>];
export declare const useAccountValue: () => Account;
export declare const useSetAccount: () => import("recoil").SetterOrUpdater<Account>;
export declare const onlyRoles: import("recoil").RecoilState<string[]>;
export declare const useHasRights: () => (rights: Rights) => boolean;
export declare const useSetRoles: () => import("recoil").SetterOrUpdater<string[]>;

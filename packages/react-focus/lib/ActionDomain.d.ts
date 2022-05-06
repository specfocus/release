import { BaseDomain } from './BaseDomain';
import { ActionType } from './ActionSchema';
export declare const ACTION_CHANGE_DOMAIN = "CHANGE";
export declare const ACTION_DISPATCH_DOMAIN = "DISPATCH";
export declare const ACTION_RESET_DOMAIN = "RESET";
export declare const ACTION_SUBMIT_DOMAIN = "SUBMIT";
export declare const ACTION_DOMAINS: readonly ["CHANGE", "DISPATCH", "RESET", "SUBMIT"];
export declare type ActionDomainType = typeof ACTION_DOMAINS[number];
export interface ActionDomain extends BaseDomain {
    type: ActionType;
}

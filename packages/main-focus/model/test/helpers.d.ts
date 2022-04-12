export declare let castAndShouldFail: (schema: any, value: any) => void;
export declare let castAll: (inst: any, { invalid, valid }: {
    invalid?: any[];
    valid?: any[];
}) => void;
export declare let validateAll: (inst: any, { valid, invalid }: {
    valid?: any[];
    invalid?: any[];
}) => void;
export declare function validationErrorWithMessages(...errors: any[]): any;
export declare function ensureSync(fn: any): any;

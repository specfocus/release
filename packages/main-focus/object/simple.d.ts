export declare type SimpleValue = bigint | Date | number | string | boolean;
export declare type SimpleArray = (SimpleType | undefined)[];
export declare type SimpleTuple = [SimpleType, ...SimpleType[]];
export declare type SimpleType = SimpleArray | SimpleObject | SimpleTuple | SimpleValue | null | undefined;
export declare interface SimpleObject extends Record<string, SimpleType> {
}
export declare const isSimpleBoolean: (val: unknown) => val is boolean;
export declare const isSimpleNumber: (val: unknown) => val is number;
export declare const isSimpleObject: (val: unknown) => val is SimpleObject;
export declare const isSimpleString: (val: unknown) => val is string;
export declare const isSimpleType: (val: unknown) => val is SimpleType;
export declare const isSimpleValue: (val: unknown) => val is string | number | boolean;

import { Model } from "./model";
export declare const $abs = "$abs";
export declare const $add = "$add";
export declare const $acos = "$acos";
export declare const $acosh = "$acosh";
export declare const $asin = "$asin";
export declare const $asinh = "$asinh";
export declare const $atan = "$atan";
export declare const $atan2 = "$atan2";
export declare const $atanh = "$atanh";
export declare const $cbrt = "$cbrt";
export declare const $ceil = "$ceil";
export declare const $clz32 = "$clz32";
export declare const $cos = "$cos";
export declare const $divide = "$divide";
export declare const $floor = "$floor";
export declare const $fround = "$fround";
export declare const $hypot = "$hypot";
export declare const $imul = "$imul";
export declare const $log = "$log";
export declare const $log10 = "$log10";
export declare const $log1p = "$log1p";
export declare const $log2 = "$log2";
export declare const $max = "$max";
export declare const $min = "$min";
export declare const $multiply = "$multiply";
export declare const $pi = "$pi";
export declare const $pow = "$pow";
export declare const $random = "$random";
export declare const $round = "$round";
export declare const $sign = "$sign";
export declare const $sin = "$sin";
export declare const $sinh = "sinh";
export declare const $sqrt = "sqrt";
export declare const $subtract = "$subtract";
export declare const $tan = "$tan";
export declare const $tanh = "$tanh";
export declare const $trunc = "$trunc";
declare const NUMERIC_VALUES: readonly ["$pi", "$random"];
declare const BINARY_OPERATORS: readonly ["$divide", "$imul", "$pow", "$subtract"];
declare const RANGE_OPERATORS: readonly ["$add", "$hypot", "$max", "$min", "$multiply"];
declare const UNARY_OPERATORS: readonly ["$abs", "$acos", "$acosh", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$cbrt", "$ceil", "$clz32", "$cos", "$floor", "$fround", "$log", "$log10", "$log1p", "$log2", "$round", "$sign", "$sin", "sinh", "sqrt", "$tan", "$tanh", "$trunc"];
export declare type NumericValue = typeof NUMERIC_VALUES[number];
export declare type BinaryOperator = typeof BINARY_OPERATORS[number];
export declare type RangeOperator = typeof RANGE_OPERATORS[number];
export declare type UnaryOperator = typeof UNARY_OPERATORS[number];
declare type Numeric<T extends {}, K extends keyof T> = number | K | NumericValue | Operation<T>;
export declare type BinaryOperation<T extends {}, K extends keyof T> = [
    BinaryOperator,
    Numeric<T, K>,
    Numeric<T, K>
];
export declare type RangeOperation<T extends {}, K extends keyof T> = [
    RangeOperator,
    ...Numeric<T, K>[]
];
export declare type UnaryOperation<T extends {}, K extends keyof T> = [
    UnaryOperator,
    Numeric<T, K>
];
declare type Operation<T extends {}> = BinaryOperation<T, keyof T> | RangeOperation<T, keyof T> | UnaryOperation<T, keyof T>;
export declare type Compute<T extends {}> = {
    [key: string]: Operation<T>;
};
export declare function compute<T>(s: T, c: Compute<T>, model: Model<T>): Record<string, number>;
export {};

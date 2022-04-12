export declare type AbsoluteUrl = string;
export declare type Base64 = string;
export declare type Base64Url = string;
export declare type Code = string;
export declare type EmailAddress = string;
export declare type Guid = string;
export declare type LowerCase = string;
export declare type Json = Code;
export declare type NumberLike = string;
export declare type PhoneNumber = string;
export declare type UpperCase = string;
export declare const DATE_STR = "date";
export declare const EMAIL = "email";
export declare const GUID = "guid";
export declare const NAME = "name";
export declare const PASSWORD = "password";
export declare const REGEX = "regex";
export declare const STRING = "string";
export declare const URL = "url";
export declare const USERNAME = "username";
export declare const STRING_TYPES: readonly ["date", "email", "guid", "name", "password", "regex", "string", "url", "username"];
export declare type StringType = typeof STRING_TYPES[number];
export declare const isAbsoluteUrl: (val: unknown) => val is string;
export declare const isEmailAddress: (val: unknown) => val is string;
export declare const isGuid: (val: unknown) => val is string;
export declare const isIntegerLike: (val: unknown) => val is number;
export declare const isLowerCase: (val: unknown) => val is string;
export declare const isNumberLike: (val: unknown) => val is string;
export declare const isAlphaNumeric: (val: unknown) => val is string;
export declare const isPhoneNumber: (val: unknown) => val is string;
export declare const isString: (val: unknown) => val is string;
export declare const isUpperCase: (val: unknown) => val is string;
export declare const isValidJSON: (val: unknown) => val is string;
/**
 * http://crockford.com/javascript/
 * alert(supplant("I'm {age} years old!", { age: 29 }));
 * alert(supplant("The {a} says {n}, {n}, {n}!", { a: 'cow', n: 'moo' }));
 * @param template
 * @param obj
 * @returns
 */
export declare const supplant: (template: string, obj: Record<string, any>) => string;
export declare const words: (str: string) => string[];
export declare const upperFirst: (str: string) => string;
export declare const join: (str: string, d: string) => string;
export declare const camelCase: (str: string) => string;
export declare const pascalCase: (str: string) => string;
export declare const snakeCase: (str: string) => string;
export declare const kebabCase: (str: string) => string;
export declare const sentenceCase: (str: string) => string;
export declare const titleCase: (str: string) => string;

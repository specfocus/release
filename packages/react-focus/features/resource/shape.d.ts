export declare type Value = boolean | number | string;
export declare type Shape<nullable extends boolean = true> = Record<string, nullable extends true ? Value | null | undefined : Value>;
interface ComplexField {
    item?: 'boolean' | 'integer' | 'moment' | 'number' | 'object' | 'string' | 'timestamp';
    shape?: Fieldset<Shape>;
    type: 'object';
}
interface ValueField<T extends Value> {
    optional?: true | T;
}
interface BooleanField {
    type: 'boolean';
}
interface IntegerField extends ValueField<number> {
    type: 'integer' | 'timestamp';
}
interface NumericField extends ValueField<number> {
    type: 'integer' | 'number' | 'timestamp';
}
interface StringField extends ValueField<string> {
    type: 'moment' | 'string';
}
declare type FieldOf<T> = T extends Boolean ? BooleanField : T extends BigInt ? IntegerField : T extends Number ? NumericField : T extends String ? StringField : ComplexField;
export declare type ComplexShape = Record<string, Value | object>;
export declare type Fieldset<S extends ComplexShape> = {
    [K in keyof S]: FieldOf<S[K]>;
};
export declare const simplify: <S extends Shape<true>>(fields: Fieldset<S>) => Fieldset<S>;
export {};

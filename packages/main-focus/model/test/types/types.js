"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
(0, __1.mixed)().required().nullable();
(0, __1.string)().required().nullable();
/** Type utils */
{
    const strRequired = (0, __1.string)().required();
    // string().default('hi').cast();
    // $ExpectType string
    strRequired.cast(undefined);
    //
    const strNullableOptional = (0, __1.string)().nullable().optional();
    // $ExpectType string | null | undefined
    strNullableOptional.cast('');
    // $ExpectType string
    strNullableOptional.required().validateSync('');
    //
    //
    const strNullable = (0, __1.string)().nullable();
    // $ExpectType string | null | undefined
    strNullable.validateSync('');
    const strDefined = (0, __1.string)().default('');
    // $ExpectType string
    const _strDefined = strDefined.getDefault();
    const strDefault = (0, __1.string)().nullable().default('').nullable().trim();
    // $ExpectType string | null
    strDefault.cast('');
    // $ExpectType string | null
    strDefault.validateSync('');
    //
    //
    const strDefaultRequired = (0, __1.string)().nullable().required().default('').trim();
    // $ExpectType string
    strDefaultRequired.cast('');
    // $ExpectType string
    strDefaultRequired.validateSync(null);
}
{
    const obj = (0, __1.object)({
        string: (0, __1.string)().defined(),
        number: (0, __1.number)().default(1),
        removed: (0, __1.number)().strip(),
        ref: (0, __1.ref)('string'),
        nest: (0, __1.object)({
            other: (0, __1.string)(),
        }),
        lazy: (0, __1.lazy)(() => (0, __1.number)().defined()),
    });
    const cast1 = obj.cast({});
    // $ExpectType string | undefined
    cast1.nest.other;
    // $ExpectType "foo"
    cast1.string;
    // $ExpectType number
    cast1.number;
    //
    // Object Defaults
    //
    const dflt1 = obj.getDefaultFromShape();
    // $ExpectType number
    dflt1.number;
    // $ExpectType undefined
    dflt1.ref;
    // $ExpectType undefined
    dflt1.lazy;
    // $ExpectType undefined
    dflt1.string;
    // $ExpectType undefined
    dflt1.nest.other;
    const merge = (0, __1.object)({
        field: (0, __1.string)().required(),
        other: (0, __1.string)().default(''),
    }).shape({
        field: (0, __1.number)(),
    });
    // $ExpectType number | undefined
    merge.cast({}).field;
    // $ExpectType string
    merge.cast({}).other;
}
ObjectPartial: {
    const schema = (0, __1.object)({
        // age: number(),
        name: (0, __1.string)().required(),
        address: (0, __1.object)()
            .shape({
            line1: (0, __1.string)().required(),
            zip: (0, __1.number)().required(),
        })
            .default(undefined),
    }).nullable();
    const partial = schema.partial();
    // $ExpectType string | undefined
    partial.validateSync({ age: '1' }).name;
    // $ExpectType StringSchema<string | undefined, Config<AnyObject, "">>
    partial.fields.name;
    // $ExpectType string
    partial.validateSync({}).address.line1;
    const deepPartial = schema.deepPartial();
    // $ExpectType string | undefined
    deepPartial.validateSync({ age: '1' }).name;
    // $ExpectType string | undefined
    deepPartial.validateSync({}).address.line1;
}
ObjectPick: {
    const schema = (0, __1.object)({
        age: (0, __1.number)(),
        name: (0, __1.string)().required(),
    })
        .nullable()
        .required();
    // $ExpectType number | undefined
    schema.pick(['age']).validateSync({ age: '1' }).age;
}
ObjectOmit: {
    const schema = (0, __1.object)({
        age: (0, __1.number)(),
        name: (0, __1.string)().required(),
    })
        .nullable()
        .required();
    // $ExpectType string
    schema.omit(['age']).validateSync({ name: '1' }).name;
    // $ExpectType string | undefined
    schema.omit(['age']).partial().validateSync({ name: '1' }).name;
}
SchemaOf: {
    const _b = null;
    const _t = (0, __1.object)({
        firstName: (0, __1.string)().defined(),
        title: (0, __1.string)(),
        age: (0, __1.lazy)(() => (0, __1.number)()),
        colors: (0, __1.array)((0, __1.string)().defined()),
        createdAt: (0, __1.date)().defined(),
        nested: (0, __1.object)({
            name: (0, __1.string)().required(),
        }),
    });
}
SchemaOfDate: {
    const _t = (0, __1.object)({
        name: (0, __1.string)().defined(),
        hire_date: (0, __1.date)().defined(),
    });
}
SchemaOfDateArray: {
    const _t = (0, __1.object)({
        name: (0, __1.string)().defined(),
        promotion_dates: (0, __1.array)().of((0, __1.date)().defined()),
    });
}
SchemaOfFile: {
    // @ts-ignore
    const _t = (0, __1.object)({
        file: (0, __1.mixed)().defined(),
        date_uploaded: (0, __1.date)().defined(),
        notes: (0, __1.string)().defined(),
    });
}
SchemaOfFileArray: {
    // @ts-ignore
    const _t = (0, __1.object)({
        name: (0, __1.string)().defined(),
        history: (0, __1.array)().of((0, __1.mixed)().defined()),
    });
}
{
    // $ExpectType (string | undefined)[] | undefined
    (0, __1.array)((0, __1.string)()).cast(null);
    // $ExpectType string[] | undefined
    (0, __1.array)((0, __1.string)().required()).validateSync(null);
    // $ExpectType string[]
    (0, __1.array)((0, __1.string)().default('')).required().validateSync(null);
    // $ExpectType string[] | undefined
    (0, __1.array)((0, __1.string)().default('')).validateSync(null);
    // $ExpectType string[] | null | undefined
    (0, __1.array)((0, __1.string)().default('')).nullable().validateSync(null);
    // $ExpectType (string | null)[] | undefined
    (0, __1.array)((0, __1.string)().nullable().default('')).validateSync(null);
    // $ExpectType any[]
    (0, __1.array)()
        .default([])
        .getDefault();
    // $ExpectType (string | null)[] | null
    (0, __1.array)((0, __1.string)().nullable().default(''))
        .nullable()
        .default(() => [])
        .validateSync(null);
    // $ExpectType string[] | undefined
    (0, __1.array)((0, __1.lazy)(() => (0, __1.string)().default(''))).validateSync(null);
    const numList = [1, 2];
    // $ExpectType (number | undefined)[]
    (0, __1.array)((0, __1.number)()).default(numList).getDefault();
    const a1 = (0, __1.object)({
        list: (0, __1.array)((0, __1.number)().required()).required(),
        nested: (0, __1.array)((0, __1.object)({
            name: (0, __1.string)().default(''),
        })),
    })
        .required()
        .validateSync(undefined);
    // $ExpectType number[]
    a1.list;
    // $ExpectType string | undefined
    (_a = a1.nested) === null || _a === void 0 ? void 0 : _a[0].name;
    // $ExpectType string
    a1.nested[0].name;
    // $ExpectType (number | undefined)[]
    const _c1 = (0, __1.array)((0, __1.number)())
        .concat((0, __1.array)((0, __1.number)()).required())
        .validateSync([]);
    // $ExpectType { [x: string]: any; a: number; }[] | null
    // @ts-ignore
    const _definedArray = (0, __1.array)()
        .of((0, __1.object)({ a: (0, __1.number)().required() }))
        .nullable()
        .defined()
        .validateSync([]);
    // $ExpectType { [x: string]: any; a: number; }[]
    // @ts-ignore
    const _requiredArray = (0, __1.array)()
        .of((0, __1.object)({ a: (0, __1.number)().required() }))
        .nullable()
        .required()
        .validateSync([]);
}
{
    // $ExpectType string | undefined
    (0, __1.lazy)(() => (0, __1.string)()).cast(3);
    // $ExpectType string | number | undefined
    (0, __1.lazy)((v) => (typeof v === 'string' ? (0, __1.string)() : (0, __1.number)())).cast(3);
}
//
// CONCAT
//
{
    // $ExpectType string
    (0, __1.mixed)().concat((0, __1.mixed)().required()).validateSync('');
    // $ExpectType string | number | undefined
    const _oo = (0, __1.mixed)()
        .required()
        .concat((0, __1.mixed)())
        .validateSync('');
    const _o = (0, __1.object)({
        str: (0, __1.string)(),
    }).concat((0, __1.object)({
        name: (0, __1.string)(),
    }));
    // $ExpectType string
    (0, __1.string)().nullable().default('hi').concat((0, __1.string)()).cast('');
    // $ExpectType number
    (0, __1.number)().nullable().default(1).concat((0, __1.number)()).cast('');
    // $ExpectType string | null
    (0, __1.string)().default('hi').concat((0, __1.string)().nullable()).cast('');
    // $ExpectType number | null
    (0, __1.number)().default(0).concat((0, __1.number)().nullable()).cast('');
}
// Context: {
//   type Context = { isCool: boolean };
//   const schema = object({
//     str: string().when('$isCool', {
//       is: true,
//       then: string().required(),
//     }),
//   });
// }

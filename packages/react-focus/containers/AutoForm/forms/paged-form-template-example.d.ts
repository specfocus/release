export const data: ({
    name: string;
    label: string;
    type: string;
}[][] | ({
    name: string;
    label: string;
    type: string;
    options?: undefined;
    optionLabelKey?: undefined;
} | {
    name: string;
    label: string;
    type: string;
    options: {
        realName: string;
    }[];
    optionLabelKey: string;
})[] | ({
    name: string;
    type: string;
    options: {
        label: string;
        value: boolean;
    }[];
} | {
    name: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
})[])[];
export const validationSchema: (Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    date: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    date: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    username: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    password: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    date: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
}>>> | Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    time: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    time: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    email: import("yup/lib/string").RequiredStringSchema<string, import("yup/lib/types").AnyObject>;
    time: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
}>>>)[];
export const initialValues: ({
    username: string;
    password: string;
    date: any;
    email?: undefined;
    time?: undefined;
    checkbox?: undefined;
    radio?: undefined;
} | {
    email: string;
    time: any;
    username?: undefined;
    password?: undefined;
    date?: undefined;
    checkbox?: undefined;
    radio?: undefined;
} | {
    checkbox: any;
    radio: any;
    username?: undefined;
    password?: undefined;
    date?: undefined;
    email?: undefined;
    time?: undefined;
})[];
import * as Yup from "yup";

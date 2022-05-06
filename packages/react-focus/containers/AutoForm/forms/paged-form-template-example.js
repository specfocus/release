"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialValues = exports.validationSchema = exports.data = void 0;
const Yup = __importStar(require("yup"));
const data1 = [
    ///
    [
        {
            name: 'username',
            label: 'Username',
            type: 'text'
        },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'date', label: 'Date', type: 'date' }
    ]
    ///
];
const data2 = [
    ///
    { name: 'time', label: 'Time', type: 'time' },
    {
        name: 'email',
        label: 'Email',
        type: 'select',
        options: [
            {
                realName: 'skanadian3@gmail.com'
            }
        ],
        optionLabelKey: 'realName'
    }
    ///
];
const data3 = [
    {
        name: 'checkbox',
        type: 'checkbox',
        options: [{ label: 'Remember Me?', value: true }]
    },
    {
        name: 'Radio',
        type: 'radio',
        options: [
            { label: 'Mustard', value: 'Mustard' },
            { label: 'Ketchup', value: 'Ketchup' },
            { label: 'Relish', value: 'Relish' }
        ]
    }
];
exports.data = [data1, data2, data3];
const schema1 = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short! ')
        .max(50, 'Too Long! ')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short! ')
        .max(50, 'Too Long! ')
        .required('Required'),
    date: Yup.date().required('Required').nullable()
});
const schema2 = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    time: Yup.date().required('Required').nullable()
});
exports.validationSchema = [schema1, schema2];
exports.initialValues = [
    { username: 'Naveed', password: '', date: null },
    { email: '', time: null },
    { checkbox: null, radio: null }
];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataProviderCallArguments = void 0;
// List of properties we expect in the options
const OptionsProperties = [
    'action',
    'fetch',
    'meta',
    'onFailure',
    'onSuccess',
    'undoable',
    'mutationMode',
    'enabled',
];
const isDataProviderOptions = (value) => {
    if (typeof value === 'undefined')
        return [];
    let options = value;
    return Object.keys(options).some(key => OptionsProperties.includes(key));
};
// As all dataProvider methods do not have the same signature, we must differentiate
// standard methods which have the (resource, params, options) signature
// from the custom ones
const getDataProviderCallArguments = (args) => {
    const lastArg = args[args.length - 1];
    let allArguments = [...args];
    let resource;
    let payload;
    let options;
    if (isDataProviderOptions(lastArg)) {
        options = lastArg;
        allArguments = allArguments.slice(0, args.length - 1);
    }
    if (typeof allArguments[0] === 'string') {
        resource = allArguments[0];
        payload = allArguments[1];
    }
    return {
        resource,
        payload,
        allArguments,
        options,
    };
};
exports.getDataProviderCallArguments = getDataProviderCallArguments;

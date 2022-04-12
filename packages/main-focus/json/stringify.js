"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyObject = void 0;
const Serializer_1 = require("./Serializer");
const ObjectSerializer_1 = require("./ObjectSerializer");
const stringify = (op, sep, cl, indent) => {
    const serializer = new Serializer_1.Serializer(op, sep, cl, indent);
    return serializer.stream;
};
const stringifyObject = (op, sep, cl, indent) => {
    const serializer = new ObjectSerializer_1.ObjectSerializer(op, sep, cl, indent);
    return serializer.stream;
};
exports.stringifyObject = stringifyObject;
exports.default = stringify;

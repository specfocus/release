"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compute = exports.$trunc = exports.$tanh = exports.$tan = exports.$subtract = exports.$sqrt = exports.$sinh = exports.$sin = exports.$sign = exports.$round = exports.$random = exports.$pow = exports.$pi = exports.$multiply = exports.$min = exports.$max = exports.$log2 = exports.$log1p = exports.$log10 = exports.$log = exports.$imul = exports.$hypot = exports.$fround = exports.$floor = exports.$divide = exports.$cos = exports.$clz32 = exports.$ceil = exports.$cbrt = exports.$atanh = exports.$atan2 = exports.$atan = exports.$asinh = exports.$asin = exports.$acosh = exports.$acos = exports.$add = exports.$abs = void 0;
exports.$abs = "$abs";
exports.$add = "$add";
exports.$acos = "$acos";
exports.$acosh = "$acosh";
exports.$asin = "$asin";
exports.$asinh = "$asinh";
exports.$atan = "$atan";
exports.$atan2 = "$atan2";
exports.$atanh = "$atanh";
exports.$cbrt = "$cbrt";
exports.$ceil = "$ceil";
exports.$clz32 = "$clz32";
exports.$cos = "$cos";
exports.$divide = "$divide";
exports.$floor = "$floor";
exports.$fround = "$fround";
exports.$hypot = "$hypot";
exports.$imul = "$imul";
exports.$log = "$log";
exports.$log10 = "$log10";
exports.$log1p = "$log1p";
exports.$log2 = "$log2";
exports.$max = "$max";
exports.$min = "$min";
exports.$multiply = "$multiply";
exports.$pi = "$pi";
exports.$pow = "$pow";
exports.$random = "$random";
exports.$round = "$round";
exports.$sign = "$sign";
exports.$sin = "$sin";
exports.$sinh = "sinh";
exports.$sqrt = "sqrt";
exports.$subtract = "$subtract";
exports.$tan = "$tan";
exports.$tanh = "$tanh";
exports.$trunc = "$trunc";
const NUMERIC_VALUES = [exports.$pi, exports.$random];
const BINARY_OPERATORS = [exports.$divide, exports.$imul, exports.$pow, exports.$subtract];
const RANGE_OPERATORS = [exports.$add, exports.$hypot, exports.$max, exports.$min, exports.$multiply];
const UNARY_OPERATORS = [
    exports.$abs,
    exports.$acos,
    exports.$acosh,
    exports.$asin,
    exports.$asinh,
    exports.$atan,
    exports.$atan2,
    exports.$atanh,
    exports.$cbrt,
    exports.$ceil,
    exports.$clz32,
    exports.$cos,
    exports.$floor,
    exports.$fround,
    exports.$log,
    exports.$log10,
    exports.$log1p,
    exports.$log2,
    exports.$round,
    exports.$sign,
    exports.$sin,
    exports.$sinh,
    exports.$sqrt,
    exports.$tan,
    exports.$tanh,
    exports.$trunc,
];
function compute(s, c, model) {
    throw new Error("");
}
exports.compute = compute;
const v = {
    add: [exports.$add, "a", "b", "c", "d"],
    divide: [exports.$divide, "a", [exports.$subtract, exports.$pi, exports.$random]],
};
compute({
    a: 5,
    b: 7,
    c: 8,
    d: "9",
}, v, {
    area: "",
    name: "v",
    hint: "",
    fields: {
        a: { type: "number" },
        b: { type: "number" },
        c: { type: "number" },
        d: { type: "string" },
    }
});

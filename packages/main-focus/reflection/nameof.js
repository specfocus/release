"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameOf = exports.nameof = exports.cleanseAssertionOperators = void 0;
function cleanseAssertionOperators(parsedName) {
    return parsedName.replace(/[?!]/g, "");
}
exports.cleanseAssertionOperators = cleanseAssertionOperators;
function nameof(nameFunction, options) {
    const fnStr = nameFunction.toString();
    // ES6 class name:
    // "class ClassName { ..."
    if (fnStr.startsWith("class ") &&
        // Theoretically could, for some ill-advised reason, be "class => class.prop".
        !fnStr.startsWith("class =>")) {
        return cleanseAssertionOperators(fnStr.substring("class ".length, fnStr.indexOf(" {")));
    }
    // ES6 prop selector:
    // "x => x.prop"
    if (fnStr.includes("=>")) {
        return cleanseAssertionOperators(fnStr.substring(fnStr.indexOf(".") + 1));
    }
    // ES5 prop selector:
    // "function (x) { return x.prop; }"
    // webpack production build excludes the spaces and optional trailing semicolon:
    //   "function(x){return x.prop}"
    // FYI - during local dev testing i observed carriage returns after the curly brackets as well
    // Note by maintainer: See https://github.com/IRCraziestTaxi/ts-simple-nameof/pull/13#issuecomment-567171802 for explanation of this regex.
    const matchRegex = /function\s*\(\w+\)\s*\{[\r\n\s]*return\s+\w+\.((\w+\.)*(\w+))/i;
    const es5Match = fnStr.match(matchRegex);
    if (es5Match) {
        return options && options.lastProp ? es5Match[3] : es5Match[1];
    }
    // ES5 class name:
    // "function ClassName() { ..."
    if (fnStr.startsWith("function ")) {
        return cleanseAssertionOperators(fnStr.substring("function ".length, fnStr.indexOf("(")));
    }
    // Invalid function.
    throw new Error("nameof: Invalid function.");
}
exports.nameof = nameof;
function nameOf(nameFunction) {
    const fnStr = nameFunction.toString();
    // ES6 class name:
    // "class ClassName { ..."
    if (fnStr.startsWith("class ") &&
        // Theoretically could, for some ill-advised reason, be "class => class.prop".
        !fnStr.startsWith("class =>")) {
        return cleanseAssertionOperators(fnStr.substring("class ".length, fnStr.indexOf(" {")));
    }
    // ES6 prop selector:
    // "x => x.prop"
    if (fnStr.includes("=>")) {
        return cleanseAssertionOperators(fnStr.substring(fnStr.indexOf(".") + 1));
    }
    // ES5 prop selector:
    // "function (x) { return x.prop; }"
    // webpack production build excludes the spaces and optional trailing semicolon:
    //   "function(x){return x.prop}"
    // FYI - during local dev testing i observed carriage returns after the curly brackets as well
    // Note by maintainer: See https://github.com/IRCraziestTaxi/ts-simple-nameof/pull/13#issuecomment-567171802 for explanation of this regex.
    const matchRegex = /function\s*\(\w+\)\s*\{[\r\n\s]*return\s+\w+\.((\w+\.)*(\w+))/i;
    const es5Match = fnStr.match(matchRegex);
    if (es5Match) {
        return es5Match[1];
    }
    // ES5 class name:
    // "function ClassName() { ..."
    if (fnStr.startsWith("function ")) {
        return cleanseAssertionOperators(fnStr.substring("function ".length, fnStr.indexOf("(")));
    }
    // Invalid function.
    throw new Error("nameof: Invalid function.");
}
exports.nameOf = nameOf;
exports.default = nameof;

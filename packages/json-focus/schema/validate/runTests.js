"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("./error");
const once = (cb) => {
    let fired = false;
    return (...args) => {
        if (fired)
            return;
        fired = true;
        cb(...args);
    };
};
function runTests(options, cb) {
    let { endEarly, tests, args, value, errors, sort, path } = options;
    let callback = once(cb);
    let count = tests.length;
    const nestedErrors = [];
    errors = errors ? errors : [];
    if (!count)
        return errors.length
            ? callback(new error_1.ValidationError(errors, value, path))
            : callback(null, value);
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        test(args, function finishTestRun(err) {
            if (err) {
                // always return early for non validation errors
                if (!error_1.ValidationError.isError(err)) {
                    return callback(err, value);
                }
                if (endEarly) {
                    err.value = value;
                    return callback(err, value);
                }
                nestedErrors.push(err);
            }
            if (--count <= 0) {
                if (nestedErrors.length) {
                    if (sort)
                        nestedErrors.sort(sort);
                    //show parent errors after the nested ones: name.first, name
                    if (errors.length)
                        nestedErrors.push(...errors);
                    errors = nestedErrors;
                }
                if (errors.length) {
                    callback(new error_1.ValidationError(errors, value, path), value);
                    return;
                }
                callback(null, value);
            }
        });
    }
}
exports.default = runTests;

"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeFieldRestProps = (_a) => {
    var { addLabel, allowEmpty, basePath, cellClassName, className, emptyText, formClassName, fullWidth, headerClassName, label, linkType, link, locale, record, refetch, resource, sortable, sortBy, sortByOrder, source, textAlign, translateChoice } = _a, props = __rest(_a, ["addLabel", "allowEmpty", "basePath", "cellClassName", "className", "emptyText", "formClassName", "fullWidth", "headerClassName", "label", "linkType", "link", "locale", "record", "refetch", "resource", "sortable", "sortBy", "sortByOrder", "source", "textAlign", "translateChoice"]);
    return props;
};
exports.default = sanitizeFieldRestProps;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
function format(n, fixed) {
    const s = typeof fixed === "number" ? n.toFixed(fixed) : n.toString();
    const parts = s.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
exports.format = format;

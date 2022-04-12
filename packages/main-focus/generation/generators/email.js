"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const word_1 = require("./word");
const host_1 = require("./host");
const EMAIL_DOMAINS = Object.entries(host_1.HOSTS).reduce((acc, [key, val]) => {
    acc.push(key);
    return acc;
}, []);
function email() {
    const idx = Math.floor(Math.random() * (EMAIL_DOMAINS.length - 1));
    return `${(0, word_1.words)(2).join(".")}@${EMAIL_DOMAINS[idx]}`;
}
exports.default = email;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.words = void 0;
const WORDS = require("../../../../data/common-english.json").data;
// const WORDS = ["et", "sum", "ti", "si", "se", "ni", "ne", "te"];
function words(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(word());
    }
    return arr;
}
exports.words = words;
function word() {
    const idx = Math.floor(Math.random() * (WORDS.length - 1));
    return WORDS[idx];
}
exports.default = word;

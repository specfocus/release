"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (basePath, id, linkType = 'edit') => {
    const link = `${basePath}/${encodeURIComponent(id)}`;
    if (linkType === 'show') {
        return `${link}/show`;
    }
    return link;
};

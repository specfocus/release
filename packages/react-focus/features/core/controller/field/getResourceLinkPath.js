"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("lodash/get"));
const util_1 = require("../../util");
/**
 * Get the link toward the referenced resource
 *
 * @example
 *
 * const linkPath = getResourceLinkPath({
 *      basePath: '/comments',
 *      link: 'edit',
 *      reference: 'users',
 *      record: {
 *          userId: 7
 *      },
 *      resource: 'comments',
 *      source: 'userId',
 * }); // '/users/7'
 *
 * @param {Object} option
 * @param {string} option.basePath basepath to current resource
 * @param {string | false | LinkToFunctionType} option.link="edit" The link toward the referenced record. 'edit', 'show' or false for no link (default to edit). Alternatively a function that returns a string
 * @param {string | false | LinkToFunctionType} [option.linkType] DEPRECATED : old name for link
 * @param {string} option.reference The linked resource name
 * @param {Object} option.record The current resource record
 * @param {string} option.resource The current resource name
 * @param {string} option.source The key of the linked resource identifier
 *
 * @returns {string | false} The link to the reference record
 */
const getResourceLinkPath = ({ resource, source, reference, link = 'edit', record = { id: '' }, basePath = '', linkType, }) => {
    if (linkType !== undefined) {
        console.warn("The 'linkType' prop is deprecated and should be named to 'link' in <ReferenceField />");
    }
    const sourceId = (0, get_1.default)(record, source);
    const rootPath = basePath
        ? basePath.replace(resource, reference)
        : `/${reference}`;
    const linkTo = linkType !== undefined ? linkType : link;
    // Backward compatibility: keep linkType but with warning
    return !linkTo
        ? false
        : typeof linkTo === 'function'
            ? linkTo(record, reference)
            : (0, util_1.linkToRecord)(rootPath, sourceId, linkTo);
};
exports.default = getResourceLinkPath;

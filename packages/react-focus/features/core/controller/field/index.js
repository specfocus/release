"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceManyFieldController = exports.useReferenceManyFieldController = exports.getResourceLinkPath = exports.ReferenceFieldController = exports.ReferenceArrayFieldController = exports.useReferenceArrayFieldController = void 0;
const ReferenceArrayFieldController_1 = __importDefault(require("./ReferenceArrayFieldController"));
exports.ReferenceArrayFieldController = ReferenceArrayFieldController_1.default;
const ReferenceFieldController_1 = __importDefault(require("./ReferenceFieldController"));
exports.ReferenceFieldController = ReferenceFieldController_1.default;
const ReferenceManyFieldController_1 = __importDefault(require("./ReferenceManyFieldController"));
exports.ReferenceManyFieldController = ReferenceManyFieldController_1.default;
const getResourceLinkPath_1 = __importDefault(require("./getResourceLinkPath"));
exports.getResourceLinkPath = getResourceLinkPath_1.default;
const useReferenceArrayFieldController_1 = __importDefault(require("./useReferenceArrayFieldController"));
exports.useReferenceArrayFieldController = useReferenceArrayFieldController_1.default;
const useReferenceManyFieldController_1 = __importDefault(require("./useReferenceManyFieldController"));
exports.useReferenceManyFieldController = useReferenceManyFieldController_1.default;

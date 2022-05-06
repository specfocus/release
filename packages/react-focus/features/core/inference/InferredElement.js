"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class InferredElement {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
    getElement(props = {}) {
        if (!this.isDefined()) {
            return;
        }
        return this.children
            ? (0, react_1.createElement)(this.type.component, Object.assign(Object.assign({}, this.props), props), this.children.length > 0
                ? this.children.map((child, index) => child.getElement({ key: index }))
                : this.children.getElement())
            : (0, react_1.createElement)(this.type.component, Object.assign(Object.assign({}, this.props), props));
    }
    getProps() {
        return this.props;
    }
    isDefined() {
        return !!this.type;
    }
    getRepresentation() {
        if (!this.isDefined()) {
            return;
        }
        if (this.type.representation) {
            return this.type.representation(this.props, this.children);
        }
        return `<${this.type.component.displayName || this.type.component.name} source="${this.props.source}" />`;
    }
}
exports.default = InferredElement;

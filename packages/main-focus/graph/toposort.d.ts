/**
 * Topological sorting function
 * https://github.com/marcelklehr/toposort
 * Copyright (c) 2012 by Marcel Klehr <mklehr@gmx.net>
 * @param {Array} edges
 * @returns {Array}
 */
export default function (edges: Edge[]): Edge[];
declare type Edge = any;
declare type Node = any;
export declare const array: typeof toposort;
declare function toposort(nodes: Node[], edges: Edge[]): any[];
export {};

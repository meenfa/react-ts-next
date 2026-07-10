"use strict";
function getChiya(kind) {
    if (typeof kind === 'string') {
        return `making of ${kind} chiya....`;
    }
    return `chiyaOrder:${kind}`;
}
function serveChiya(msg) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `serving default chiya`;
}
function orderChiya(size) {
    if (size === "small") {
        return `small chiya..........`;
    }
    if (size === "medium" || size === "large") {
        return `extra chiya`;
    }
    return `chai order #${size}`;
}
class MilkTea {
    serve() {
        return `serving Milk tea`;
    }
}
class lemonTea {
    serve() {
        return `serving lemonm tea`;
    }
}
function serve(tea) {
    if (tea instanceof MilkTea) {
        return tea.serve();
    }
}
function isTeaOrder(obj) {
    return (typeof obj === 'object' &&
        obj == null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
}

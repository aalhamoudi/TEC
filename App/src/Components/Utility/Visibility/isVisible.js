"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isVisible(element, options) {
    if (!element)
        return;
    var _a = element.getBoundingClientRect(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    var intersection = {
        t: bottom,
        r: window.innerWidth - left,
        b: window.innerHeight - top,
        l: right
    };
    var threshold = {
        x: options && options.threshold ? options.threshold * width : 0,
        y: options && options.threshold ? options.threshold * height : 0
    };
    var offset = {
        top: options && options.offset.top || 0,
        right: options && options.offset.right || 0,
        bottom: options && options.offset.bottom || 0,
        left: options && options.offset.left || 0
    };
    return intersection.t > (offset.top + threshold.y)
        && intersection.r > (offset.right + threshold.x)
        && intersection.b > (offset.bottom + threshold.y)
        && intersection.l > (offset.left + threshold.x);
}
exports.isVisible = isVisible;
function Visibility(element, options, callback) {
    window.onscroll = function (e) {
        if (isVisible(element, options))
            callback();
    };
}
exports.Visibility = Visibility;
//# sourceMappingURL=isVisible.js.map
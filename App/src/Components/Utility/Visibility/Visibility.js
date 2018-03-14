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
        top: options && options.offset && options.offset.top || 0,
        right: options && options.offset && options.offset.right || 0,
        bottom: options && options.offset && options.offset.bottom || 0,
        left: options && options.offset && options.offset.left || 0
    };
    return intersection.t > (offset.top + threshold.y)
        && intersection.r > (offset.right + threshold.x)
        && intersection.b > (offset.bottom + threshold.y)
        && intersection.l > (offset.left + threshold.x);
}
exports.isVisible = isVisible;
function Visibility(element, options, onVisible, onHidden) {
    var visible = false;
    window.onscroll = function (e) {
        if (isVisible(element, options)) {
            if (!visible) {
                visible = true;
                onVisible();
            }
        }
        else {
            if (visible) {
                visible = false;
                if (onHidden)
                    onHidden();
            }
        }
    };
}
exports.Visibility = Visibility;
//# sourceMappingURL=Visibility.js.map
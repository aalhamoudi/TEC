export interface Offset {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface VisibilityOptions {
  threshold?: number;
  offset?: Offset;
}

export function isVisible (element, options?: VisibilityOptions) {

    if (!element)
        return;

    const { top, right, bottom, left, width, height } = element.getBoundingClientRect();

    const intersection = {
        t: bottom,
        r: window.innerWidth - left,
        b: window.innerHeight - top,
        l: right
    };

    const threshold = {
        x: options && options.threshold? options.threshold * width : 0,
        y: options && options.threshold ? options.threshold * height : 0
    };

    const offset = {
        top: options && options.offset && options.offset.top || 0,
        right: options && options.offset && options.offset.right || 0,
        bottom: options && options.offset && options.offset.bottom || 0,
        left: options && options.offset && options.offset.left || 0
    };

    return intersection.t > (offset.top    + threshold.y)
        && intersection.r > (offset.right  + threshold.x)
        && intersection.b > (offset.bottom + threshold.y)
        && intersection.l > (offset.left   + threshold.x);

}

export function Visibility(element, options: VisibilityOptions, onVisible: () => void, onHidden?: () => void) {
    let visible = false;
    window.onscroll = (e: UIEvent) => {
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

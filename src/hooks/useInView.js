import { useRef, useEffect, useState } from 'react';
export var useInView = function (options) {
    if (options === void 0) { options = {}; }
    var _a = options.threshold, threshold = _a === void 0 ? 0.1 : _a, _b = options.triggerOnce, triggerOnce = _b === void 0 ? false : _b, _c = options.margin, margin = _c === void 0 ? '0px' : _c;
    var ref = useRef(null);
    var _d = useState(false), inView = _d[0], setInView = _d[1];
    var _e = useState(false), hasBeenInView = _e[0], setHasBeenInView = _e[1];
    useEffect(function () {
        if (!ref.current)
            return;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setInView(true);
                if (triggerOnce) {
                    setHasBeenInView(true);
                }
            }
            else {
                if (!triggerOnce) {
                    setInView(false);
                }
            }
        }, {
            threshold: threshold,
            rootMargin: margin,
        });
        observer.observe(ref.current);
        return function () {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, triggerOnce, margin]);
    return {
        ref: ref,
        inView: triggerOnce ? hasBeenInView || inView : inView,
    };
};

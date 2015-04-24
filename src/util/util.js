var transit = require('./transit');

module.exports = (function(){
    function safeCall(obj, func, args) {
        if (obj && obj.hasOwnProperty(func)) {
            obj[func].apply(this, args);
        }
    }

    function transitionFigures(from, to, ease,duration) {
        var keys = R.uniq(R.pluck('key', from.concat(to)));
        var fromTo = R.reduce(function (acc, key) {
            return acc.concat(transfigure(startFrame(from[key], to[key]),
                endFrame(from[key], to[key]), ease));
        }, [], keys);
        return transit(fromTo, duration);
    }

    var secondArg = R.nthArg(1);

    function transfigure(from, to, ease) {
        var keys = R.uniq(Object.keys(from || {}).concat(Object.keys(to || {})));
        var res = {};
        R.forEach(function (key) {
            res[key] = {
                from: from[key],
                to: to[key]
            };
            res[key].ease = R.is(Number, res[key].from) ? ease : secondArg;
        }, keys);
        return res;
    }

    var present = R.filter(R.prop('present'));

    function startFrame(now, then) {
        return now || R.merge(then, {present: true, opacity: 0});
    }

    function endFrame(now, then) {
        return now && !then ? R.merge(now, {present: false, opacity: 0}) // leaves
            : R.merge(then, {present: true, opacity: 1});
    }

    function figureStyle(d) {
        var translateX = Object.hasOwnProperty.call(d, 'translateX') ? d.translateX : 0;
        return {
            transform: 'rotateY(' + d.rotateY + 'rad) '
            + ' translateX(' + translateX + 'px)'
            + ' translateZ(' + d.translateZ + 'px)',
            opacity: d.opacity
        };
    }

    function carouselStyle(translateZ) {
        return {
            transform: "translateZ(" + (-translateZ) + "px)"
        };
    }
    return {
        safeCall:safeCall,
        transitionFigures:transitionFigures,
        figureStyle:figureStyle,
        carouselStyle:carouselStyle,
        present:present
    };
})();


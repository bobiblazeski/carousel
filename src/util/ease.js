module.exports = (function () {
    function bounceOut(time, begin, change, duration) {
        if ((time /= duration) < 1 / 2.75) {
            return change * (7.5625 * time * time) + begin;
        } else if (time < 2 / 2.75) {
            return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + begin;
        } else if (time < 2.5 / 2.75) {
            return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + begin;
        } else {
            return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + begin;
        }
    }

    function bounceIn(time, begin, change, duration) {
        return change - bounceOut(duration - time, 0, change, duration) + begin;
    }

    function bounceInOut(time, begin, change, duration) {
        if (time < duration / 2) {
            return bounceIn(time * 2, 0, change, duration) * 0.5 + begin;
        } else {
            return bounceOut(time * 2 - duration, 0, change, duration) * 0.5 + change * 0.5 + begin;
        }
    }

    function circIn(time, begin, change, duration) {
        return -change * (Math.sqrt(1 - (time = time / duration) * time) - 1) + begin;
    }

    function circOut(time, begin, change, duration) {
        return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
    }

    function circInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
        } else {
            return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
        }
    }

    function cubicIn(time, begin, change, duration) {
        return change * (time /= duration) * time * time + begin;
    }

    function cubicOut(time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time + 1) + begin;
    }

    function cubicInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time + begin;
        } else {
            return change / 2 * ((time -= 2) * time * time + 2) + begin;
        }
    }

    function expoIn(time, begin, change, duration) {
        if (time === 0) {
            return begin;
        }
        return change * Math.pow(2, 10 * (time / duration - 1)) + begin;
    }

    function expoOut(time, begin, change, duration) {
        if (time === duration) {
            return begin + change;
        }
        return change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
    }

    function expoInOut(time, begin, change, duration) {
        if (time === 0) {
            return begin;
        } else if (time === duration) {
            return begin + change;
        } else if ((time = time / (duration / 2)) < 1) {
            return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        } else {
            return change / 2 * (-Math.pow(2, -10 * (time - 1)) + 2) + begin;
        }
    }

    function linear(time, begin, change, duration) {
        return change * time / duration + begin;
    }

    function quadIn(time, begin, change, duration) {
        return change * (time = time / duration) * time + begin;
    }

    function quadOut(time, begin, change, duration) {
        return -change * (time = time / duration) * (time - 2) + begin;
    }

    function quadInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time + begin;
        } else {
            return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
        }
    }

    function quartIn(time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time + begin;
    }

    function quartOut(time, begin, change, duration) {
        return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
    }

    function quartInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time * time + begin;
        } else {
            return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
        }
    }

    function quintIn(time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time * time + begin;
    }

    function quintOut(time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
    }

    function quintInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time * time * time + begin;
        } else {
            return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
        }
    }

    function sineIn(time, begin, change, duration) {
        return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
    }

    function sineOut(time, begin, change, duration) {
        return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
    }

    function sineInOut(time, begin, change, duration) {
        return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
    }

    return {
        bounceOut: bounceOut,
        bounceIn: bounceIn,
        bounceInOut: bounceInOut,
        circIn: circIn,
        circOut: circOut,
        circInOut: circInOut,
        cubicIn: cubicIn,
        cubicOut: cubicOut,
        cubicInOut: cubicInOut,
        expoIn: expoIn,
        expoOut: expoOut,
        expoInOut: expoInOut,
        linear: linear,
        quadIn: quadIn,
        quadOut: quadOut,
        quadInOut: quadInOut,
        quartIn: quartIn,
        quartOut: quartOut,
        quartInOut: quartInOut,
        quintIn: quintIn,
        quintInOut: quintInOut,
        sineIn: sineIn,
        sineOut: sineOut,
        sineInOut: sineInOut
    }
})();


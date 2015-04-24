(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
var MainView = require('./views/main.view.js');

React.render(
    React.createElement(MainView,null),
    document.getElementById('content')
);




},{"./views/main.view.js":"D:\\carousel\\src\\views\\main.view.js"}],"D:\\carousel\\src\\util\\ease.js":[function(require,module,exports){
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



},{}],"D:\\carousel\\src\\util\\images.js":[function(require,module,exports){
module.exports = [
    'http://s4.postimg.org/r6g5ay2ng/zen1.jpg',
    'http://s21.postimg.org/er8b066p3/zen2.jpg',
    'http://s30.postimg.org/x3cgpdtgx/zen3.jpg',
    'http://s21.postimg.org/h1estw95z/zen4.jpg',
    'http://s8.postimg.org/upypfrk8l/zen5.jpg',
    'http://s7.postimg.org/goiv34aez/zen6.jpg',
    'http://s30.postimg.org/n9zuqbgq9/zen7.jpg',
    'http://s7.postimg.org/dbamgegu3/zen8.jpg',
    'http://s12.postimg.org/9kw5b42d9/zen9.jpg',
    'http://s13.postimg.org/vwf92qbl3/zen10.jpg',
    'http://s4.postimg.org/anf2w9rzh/zen11.jpg',
    'http://s17.postimg.org/gpbiwdsu7/zen12.jpg',
    'http://s9.postimg.org/n5uuedw3z/zen13.jpg',
    'http://s9.postimg.org/x6zonp973/zen14.jpg',
    'http://s2.postimg.org/r0vsbv8op/zen15.jpg',
    'http://s21.postimg.org/szu5d0h2f/zen16.jpg',
    'http://s15.postimg.org/xi59nxox7/zen17.jpg',
    'http://s8.postimg.org/zexjdajw5/zen18.jpg',
    'http://s24.postimg.org/st2ukrfz9/zen19.jpg',
    'http://s15.postimg.org/40kb5u63v/zen20.jpg'
];

},{}],"D:\\carousel\\src\\util\\layout.js":[function(require,module,exports){
module.exports = (function(){
    var prism = {
        distance: function apothem(width, sides) {
            return Math.ceil(width / (2 * Math.tan(Math.PI / sides)));
        },
        figures: function (width, sides, initial) {
            var angle = 2 * Math.PI / sides;
            var acceptable = Math.round(initial/angle)*angle;
            return R.map(function (d) {
                return {
                    rotateY: d * angle + acceptable,
                    translateX: 0,
                    translateZ: prism.distance(width, sides),
                    opacity: 1,
                    present: true,
                    key: d
                };
            }, R.range(0, sides));
        }
    };
    var classic = {
        distance : function(width, sides) {
            return Math.round(width * Math.log(sides))
        },
        figures : function (width, sides, initial) {
            var angle = 2 * Math.PI / sides;
            var distance = classic.distance(width, sides);
            var acceptable = Math.round(initial/angle)*angle;
            return R.map(function (d) {
                var angleR = d * angle + acceptable;
                return {
                    rotateY: 0,
                    translateX: distance * Math.sin(angleR),
                    translateZ: distance * Math.cos(angleR),
                    opacity: 1,
                    present: true,
                    key: d
                };
            }, R.range(0, sides));
        }
    };
    return {
        prism: prism,
        classic: classic
    };
})();



},{}],"D:\\carousel\\src\\util\\store.js":[function(require,module,exports){
var U = require('./util');
var Layout = require('./layout');
var Ease = require('./ease');

module.exports = function (initialState, props) {
    var store = Object.create(null);
    store.state = new Rx.BehaviorSubject(initialState);
    store.props = new Rx.BehaviorSubject(props);
    store.move = new Rx.BehaviorSubject(0);
    var shiftCarousel, shiftProps;

    store.props.skip(1).debounce(350).subscribe(function (props) {
        U.safeCall(shiftProps, 'dispose');
        shiftProps = U.transitionFigures(
            store.state.value.figures,
            Layout[props.layout]
                .figures(props.width, props.sides, store.state.value.rotationY),
            Ease[props.ease],
            props.duration)
            .subscribe(function (figures) {
                store.state.onNext(R.merge(store.state.value,
                    {figures: U.present(figures)}));
            });
    });

    store.move.debounce(350).skip(1).subscribe(function (angle) {
        U.safeCall(shiftCarousel, 'dispose');
        var endAngle = store.state.value.rotationY + angle;
        shiftCarousel = U.transitionFigures(store.state.value.figures,
            Layout[store.props.value.layout].figures(store.props.value.width,
                store.props.value.sides,
                store.state.value.rotationY + angle),
            Ease[store.props.value.ease],
            store.props.value.duration)
            .subscribe(function (figures) {
                store.state.onNext(R.merge(store.state.value,
                    {
                        figures: U.present(figures),
                        rotationY: endAngle
                    }));
            });
    });
    return store;
};








},{"./ease":"D:\\carousel\\src\\util\\ease.js","./layout":"D:\\carousel\\src\\util\\layout.js","./util":"D:\\carousel\\src\\util\\util.js"}],"D:\\carousel\\src\\util\\transit.js":[function(require,module,exports){
module.exports = (function(){
    var FRAME_RATE = 30;
    var INTERVAL_LENGTH = 1000/FRAME_RATE;

    var timer = Rx.Observable
        .timer(0, INTERVAL_LENGTH, Rx.Scheduler.requestAnimationFrame || Rx.Scheduler.timeout)
        .select(function(i) {
            return i * INTERVAL_LENGTH;
        });

    function addChange(entries){
        var len= entries.length;
        var res= new Array(len);
        for(var i = 0; i < len; ++i){
            res[i] = addObjChange(entries[i]);
        }
        return res;
    }

    function addObjChange(entry){
        var res = Object.create(null);
        for(var key in entry) {
            res[key] = R.merge(entry[key],{change: entry[key].to-entry[key].from});
        }
        return res;
    }

    function tally(time,entries,duration){
        var len= entries.length;
        var res= new Array(len);
        var entry;
        for(var i =0; i < len; ++i) {
            entry = entries[i];
            var obj = Object.create(null);
            for(var key in entry) {
                obj[key]= entry[key].ease ?
                    entry[key].ease(time, entry[key].from,entry[key].change,duration)
                    : entry[key].from;
            }
            res[i]=obj;
        }
        return res;
    }
    return function transit(entries, duration) {
        var withChange = addChange(entries);
        var to = R.map(R.mapObj(R.prop('to')),entries);
        return timer
            .takeWithTime(duration)
            .select(function(time){
                return tally(time,withChange,duration);
            })
            .concat(Rx.Observable.returnValue(to));
    }
})();





},{}],"D:\\carousel\\src\\util\\util.js":[function(require,module,exports){
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



},{"./transit":"D:\\carousel\\src\\util\\transit.js"}],"D:\\carousel\\src\\views\\carousel.js":[function(require,module,exports){
var U = require('../util/util');
var Store = require('../util/store');
var Layout = require('../util/layout');
var Images = require('../util/images');

var creator = U.carousel;// U.classic;
var Carousel = React.createClass({displayName: "Carousel",
    getInitialState: function () {
        return {
            sides: this.props.sides,
            figures: Layout[this.props.layout].figures(this.props.width, this.props.sides, 0),
            rotationY: 0
        };
    },
    componentWillMount: function () {
        this.store = Store(
            this.getInitialState(),
            this.props
        );
        this.store.state.skip(1).subscribe(function (state) {
            this.setState(state);
        }.bind(this));
        this.onMove = function onMove(angle) {
            this.store.move.onNext(angle);
        }.bind(this);
    },
    componentWillReceiveProps: function (nextProps) {
        this.store.props.onNext(nextProps);
    },
    render: function () {
        var angle = (2 * Math.PI) / this.state.figures.length;
        var cStyle = U.carouselStyle(Layout[this.props.layout].distance(this.props.width,
            this.state.figures.length));
        // {i+1}
        var figures = R.mapIndexed(function (d, i) {
            return (React.createElement("figure", {key: i, style: U.figureStyle(d)}, 
                React.createElement("img", {src: Images[i], alt: i, height: "100%", width: "100%"})
            ));
        }, this.state.figures);
        return (
            React.createElement("section", {className: "container"}, 
                React.createElement("div", {id: "carousel", style: cStyle}, 
                    figures
                ), 
                React.createElement("div", {className: "prev", onClick: R.partial(this.onMove, angle)}), 
                React.createElement("div", {className: "next", onClick: R.partial(this.onMove,-angle)})
            )
        );
    }
});
module.exports = Carousel;





},{"../util/images":"D:\\carousel\\src\\util\\images.js","../util/layout":"D:\\carousel\\src\\util\\layout.js","../util/store":"D:\\carousel\\src\\util\\store.js","../util/util":"D:\\carousel\\src\\util\\util.js"}],"D:\\carousel\\src\\views\\main.view.js":[function(require,module,exports){
var Carousel = require('./carousel');
var Ease = require('../util/ease');

var MainView = React.createClass({displayName: "MainView",
    getInitialState: function () {
        return {
            sides: 3,
            width: 400,
            layout: 'prism',
            ease: 'linear',
            duration: 500
        };
    },
    componentWillMount: function () {
        this.onSides = function (event) {
            this.setState({sides: event.target.value});
        }.bind(this);
        this.onLayout = function (event) {
            this.setState({layout: event.target.value});
        }.bind(this);
        this.onDuration = function (event) {
            this.setState({duration: event.target.value});
        }.bind(this);
        this.onEase = function (event) {
            this.setState({ease: event.target.value});
        }.bind(this);
    },
    render: function () {
        var easeList = R.map(function (d) {
            return (React.createElement("option", {key: d, value: d}, d))
        }, R.keys(Ease));
        return (
            React.createElement("div", null, 
                React.createElement(Carousel, {width: this.state.width, 
                          sides: this.state.sides, 
                          ease: this.state.ease, 
                          duration: this.state.duration, 
                          layout: this.state.layout}), 
                React.createElement("table", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("label", {htmlFor: "panel-count"}, "Panels")
                        ), 
                        React.createElement("td", null, 
                            React.createElement("input", {type: "range", id: "panel-count", 
                                   value: this.state.sides, min: "3", max: "20", 
                                   onChange: this.onSides})
                        ), 
                        React.createElement("td", null, React.createElement("span", null, this.state.sides))
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            "Layout"
                        ), 
                        React.createElement("td", null, 
                            React.createElement("select", {onChange: this.onLayout, value: this.state.layout}, 
                                React.createElement("option", {value: "prism"}, "prism"), 
                                React.createElement("option", {value: "classic"}, "classic")
                            )
                        )
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("label", {htmlFor: "duration"}, "Duration")
                        ), 
                        React.createElement("td", null, 
                            React.createElement("input", {type: "range", id: "duration", 
                                   value: this.state.duration, min: "0", step: "250", max: "1500", 
                                   onChange: this.onDuration})
                        ), 
                        React.createElement("td", null, 
                            React.createElement("span", null, this.state.duration)
                        )
                    ), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            "Ease"
                        ), 
                        React.createElement("td", null, 
                            React.createElement("select", {onChange: this.onEase, value: this.state.ease}, 
                                easeList
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = MainView;        

},{"../util/ease":"D:\\carousel\\src\\util\\ease.js","./carousel":"D:\\carousel\\src\\views\\carousel.js"}]},{},["./src/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOlxcY2Fyb3VzZWxcXHNyY1xcaW5kZXguanMiLCJEOlxcY2Fyb3VzZWxcXHNyY1xcdXRpbFxcZWFzZS5qcyIsIkQ6XFxjYXJvdXNlbFxcc3JjXFx1dGlsXFxpbWFnZXMuanMiLCJEOlxcY2Fyb3VzZWxcXHNyY1xcdXRpbFxcbGF5b3V0LmpzIiwiRDpcXGNhcm91c2VsXFxzcmNcXHV0aWxcXHN0b3JlLmpzIiwiRDpcXGNhcm91c2VsXFxzcmNcXHV0aWxcXHRyYW5zaXQuanMiLCJEOlxcY2Fyb3VzZWxcXHNyY1xcdXRpbFxcdXRpbC5qcyIsIkQ6XFxjYXJvdXNlbFxcc3JjXFx2aWV3c1xcY2Fyb3VzZWwuanMiLCJEOlxcY2Fyb3VzZWxcXHNyY1xcdmlld3NcXG1haW4udmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUUvQyxLQUFLLENBQUMsTUFBTTtJQUNSLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNsQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFDRjs7Ozs7QUNOQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsWUFBWTtJQUMxQixTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDOUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRTtZQUMvQixPQUFPLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNsRCxNQUFNLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxNQUFN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ekI7UUFDRCxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDMUUsS0FBSzs7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDOUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDaEIsTUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3pCLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM1RCxNQUFNO1lBQ0gsT0FBTyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3BFO0FBQ1QsS0FBSzs7SUFFRCxTQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDM0MsT0FBTyxNQUFNLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDaEQsS0FBSzs7SUFFRCxTQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDM0MsT0FBTyxNQUFNLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsR0FB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LEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNoRSxNQUFNO1lBQ0gsT0FBTyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzdFO0FBQ1QsS0FBSzs7SUFFRCxTQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDM0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEYsS0FBSzs7SUFFRCxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDNUMsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDMUUsS0FBSzs7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDL0UsS0FBSzs7SUFFRCxPQUFPO1FBQ0gsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsT0FBTztRQUNo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akMsQ0FBQTtvQkFDSixDQUFBLEVBQUE7b0JBQ0wsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQTt3QkFDQSxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBO0FBQUEsNEJBQUEsTUFBQTtBQUFBLHdCQUVDLENBQUEsRUFBQTt3QkFDTCxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBOzRCQUNBLG9CQUFBLFFBQU8sRUFBQSxDQUFBLENBQUMsUUFBQSxFQUFRLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEtBQUEsRUFBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBTSxDQUFBLEVBQUE7Z0NBQ2xELFFBQVM7NEJBQ0wsQ0FBQTt3QkFDUixDQUFBO29CQUNKLENBQUE7Z0JBQ0QsQ0FBQTtZQUNOLENBQUE7VUFDUjtLQUNMO0FBQ0wsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIE1haW5WaWV3ID0gcmVxdWlyZSgnLi92aWV3cy9tYWluLnZpZXcuanMnKTtcclxuXHJcblJlYWN0LnJlbmRlcihcclxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpblZpZXcsbnVsbCksXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbik7XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gYm91bmNlT3V0KHRpbWUsIGJlZ2luLCBjaGFuZ2UsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCh0aW1lIC89IGR1cmF0aW9uKSA8IDEgLyAyLjc1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2UgKiAoNy41NjI1ICogdGltZSAqIHRpbWUpICsgYmVnaW47XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lIDwgMiAvIDIuNzUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZSAqICg3LjU2MjUgKiAodGltZSAtPSAxLjUgLyAyLjc1KSAqIHRpbWUgKyAwLjc1KSArIGJlZ2luO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZSA8IDIuNSAvIDIuNzUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZSAqICg3LjU2MjUgKiAodGltZSAtPSAyLjI1IC8gMi43NSkgKiB0aW1lICsgMC45Mzc1KSArIGJlZ2luO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2UgKiAoNy41NjI1ICogKHRpbWUgLT0gMi42MjUgLyAyLjc1KSAqIHRpbWUgKyAwLjk4NDM3NSkgKyBiZWdpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYm91bmNlSW4odGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gY2hhbmdlIC0gYm91bmNlT3V0KGR1cmF0aW9uIC0gdGltZSwgMCwgY2hhbmdlLCBkdXJhdGlvbikgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBib3VuY2VJbk91dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIGlmICh0aW1lIDwgZHVyYXRpb24gLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBib3VuY2VJbih0aW1lICogMiwgMCwgY2hhbmdlLCBkdXJhdGlvbikgKiAwLjUgKyBiZWdpbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYm91bmNlT3V0KHRpbWUgKiAyIC0gZHVyYXRpb24sIDAsIGNoYW5nZSwgZHVyYXRpb24pICogMC41ICsgY2hhbmdlICogMC41ICsgYmVnaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNpcmNJbih0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiAtY2hhbmdlICogKE1hdGguc3FydCgxIC0gKHRpbWUgPSB0aW1lIC8gZHVyYXRpb24pICogdGltZSkgLSAxKSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNpcmNPdXQodGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gY2hhbmdlICogTWF0aC5zcXJ0KDEgLSAodGltZSA9IHRpbWUgLyBkdXJhdGlvbiAtIDEpICogdGltZSkgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaXJjSW5PdXQodGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoKHRpbWUgPSB0aW1lIC8gKGR1cmF0aW9uIC8gMikpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWNoYW5nZSAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0aW1lICogdGltZSkgLSAxKSArIGJlZ2luO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2UgLyAyICogKE1hdGguc3FydCgxIC0gKHRpbWUgLT0gMikgKiB0aW1lKSArIDEpICsgYmVnaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGN1YmljSW4odGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gY2hhbmdlICogKHRpbWUgLz0gZHVyYXRpb24pICogdGltZSAqIHRpbWUgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjdWJpY091dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaGFuZ2UgKiAoKHRpbWUgPSB0aW1lIC8gZHVyYXRpb24gLSAxKSAqIHRpbWUgKiB0aW1lICsgMSkgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjdWJpY0luT3V0KHRpbWUsIGJlZ2luLCBjaGFuZ2UsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCh0aW1lID0gdGltZSAvIChkdXJhdGlvbiAvIDIpKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZSAvIDIgKiB0aW1lICogdGltZSAqIHRpbWUgKyBiZWdpbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlIC8gMiAqICgodGltZSAtPSAyKSAqIHRpbWUgKiB0aW1lICsgMikgKyBiZWdpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhwb0luKHRpbWUsIGJlZ2luLCBjaGFuZ2UsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJlZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlICogTWF0aC5wb3coMiwgMTAgKiAodGltZSAvIGR1cmF0aW9uIC0gMSkpICsgYmVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhwb091dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIGlmICh0aW1lID09PSBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYmVnaW4gKyBjaGFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFuZ2UgKiAoLU1hdGgucG93KDIsIC0xMCAqIHRpbWUgLyBkdXJhdGlvbikgKyAxKSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV4cG9Jbk91dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIGlmICh0aW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiZWdpbjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWUgPT09IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiZWdpbiArIGNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCh0aW1lID0gdGltZSAvIChkdXJhdGlvbiAvIDIpKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZSAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0aW1lIC0gMSkpICsgYmVnaW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZSAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqICh0aW1lIC0gMSkpICsgMikgKyBiZWdpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGluZWFyKHRpbWUsIGJlZ2luLCBjaGFuZ2UsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZSAqIHRpbWUgLyBkdXJhdGlvbiArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHF1YWRJbih0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaGFuZ2UgKiAodGltZSA9IHRpbWUgLyBkdXJhdGlvbikgKiB0aW1lICsgYmVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcXVhZE91dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiAtY2hhbmdlICogKHRpbWUgPSB0aW1lIC8gZHVyYXRpb24pICogKHRpbWUgLSAyKSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHF1YWRJbk91dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIGlmICgodGltZSA9IHRpbWUgLyAoZHVyYXRpb24gLyAyKSkgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2UgLyAyICogdGltZSAqIHRpbWUgKyBiZWdpbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLWNoYW5nZSAvIDIgKiAoKHRpbWUgLT0gMSkgKiAodGltZSAtIDIpIC0gMSkgKyBiZWdpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcXVhcnRJbih0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaGFuZ2UgKiAodGltZSA9IHRpbWUgLyBkdXJhdGlvbikgKiB0aW1lICogdGltZSAqIHRpbWUgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBxdWFydE91dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiAtY2hhbmdlICogKCh0aW1lID0gdGltZSAvIGR1cmF0aW9uIC0gMSkgKiB0aW1lICogdGltZSAqIHRpbWUgLSAxKSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHF1YXJ0SW5PdXQodGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoKHRpbWUgPSB0aW1lIC8gKGR1cmF0aW9uIC8gMikpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlIC8gMiAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKyBiZWdpbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLWNoYW5nZSAvIDIgKiAoKHRpbWUgLT0gMikgKiB0aW1lICogdGltZSAqIHRpbWUgLSAyKSArIGJlZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBxdWludEluKHRpbWUsIGJlZ2luLCBjaGFuZ2UsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZSAqICh0aW1lID0gdGltZSAvIGR1cmF0aW9uKSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBxdWludE91dCh0aW1lLCBiZWdpbiwgY2hhbmdlLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaGFuZ2UgKiAoKHRpbWUgPSB0aW1lIC8gZHVyYXRpb24gLSAxKSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKyAxKSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHF1aW50SW5PdXQodGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoKHRpbWUgPSB0aW1lIC8gKGR1cmF0aW9uIC8gMikpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlIC8gMiAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICsgYmVnaW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZSAvIDIgKiAoKHRpbWUgLT0gMikgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICsgMikgKyBiZWdpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2luZUluKHRpbWUsIGJlZ2luLCBjaGFuZ2UsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIC1jaGFuZ2UgKiBNYXRoLmNvcyh0aW1lIC8gZHVyYXRpb24gKiAoTWF0aC5QSSAvIDIpKSArIGNoYW5nZSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNpbmVPdXQodGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gY2hhbmdlICogTWF0aC5zaW4odGltZSAvIGR1cmF0aW9uICogKE1hdGguUEkgLyAyKSkgKyBiZWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaW5lSW5PdXQodGltZSwgYmVnaW4sIGNoYW5nZSwgZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gLWNoYW5nZSAvIDIgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHRpbWUgLyBkdXJhdGlvbikgLSAxKSArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm91bmNlT3V0OiBib3VuY2VPdXQsXHJcbiAgICAgICAgYm91bmNlSW46IGJvdW5jZUluLFxyXG4gICAgICAgIGJvdW5jZUluT3V0OiBib3VuY2VJbk91dCxcclxuICAgICAgICBjaXJjSW46IGNpcmNJbixcclxuICAgICAgICBjaXJjT3V0OiBjaXJjT3V0LFxyXG4gICAgICAgIGNpcmNJbk91dDogY2lyY0luT3V0LFxyXG4gICAgICAgIGN1YmljSW46IGN1YmljSW4sXHJcbiAgICAgICAgY3ViaWNPdXQ6IGN1YmljT3V0LFxyXG4gICAgICAgIGN1YmljSW5PdXQ6IGN1YmljSW5PdXQsXHJcbiAgICAgICAgZXhwb0luOiBleHBvSW4sXHJcbiAgICAgICAgZXhwb091dDogZXhwb091dCxcclxuICAgICAgICBleHBvSW5PdXQ6IGV4cG9Jbk91dCxcclxuICAgICAgICBsaW5lYXI6IGxpbmVhcixcclxuICAgICAgICBxdWFkSW46IHF1YWRJbixcclxuICAgICAgICBxdWFkT3V0OiBxdWFkT3V0LFxyXG4gICAgICAgIHF1YWRJbk91dDogcXVhZEluT3V0LFxyXG4gICAgICAgIHF1YXJ0SW46IHF1YXJ0SW4sXHJcbiAgICAgICAgcXVhcnRPdXQ6IHF1YXJ0T3V0LFxyXG4gICAgICAgIHF1YXJ0SW5PdXQ6IHF1YXJ0SW5PdXQsXHJcbiAgICAgICAgcXVpbnRJbjogcXVpbnRJbixcclxuICAgICAgICBxdWludEluT3V0OiBxdWludEluT3V0LFxyXG4gICAgICAgIHNpbmVJbjogc2luZUluLFxyXG4gICAgICAgIHNpbmVPdXQ6IHNpbmVPdXQsXHJcbiAgICAgICAgc2luZUluT3V0OiBzaW5lSW5PdXRcclxuICAgIH1cclxufSkoKTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gW1xyXG4gICAgJ2h0dHA6Ly9zNC5wb3N0aW1nLm9yZy9yNmc1YXkybmcvemVuMS5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zMjEucG9zdGltZy5vcmcvZXI4YjA2NnAzL3plbjIuanBnJyxcclxuICAgICdodHRwOi8vczMwLnBvc3RpbWcub3JnL3gzY2dwZHRneC96ZW4zLmpwZycsXHJcbiAgICAnaHR0cDovL3MyMS5wb3N0aW1nLm9yZy9oMWVzdHc5NXovemVuNC5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zOC5wb3N0aW1nLm9yZy91cHlwZnJrOGwvemVuNS5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zNy5wb3N0aW1nLm9yZy9nb2l2MzRhZXovemVuNi5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zMzAucG9zdGltZy5vcmcvbjl6dXFiZ3E5L3plbjcuanBnJyxcclxuICAgICdodHRwOi8vczcucG9zdGltZy5vcmcvZGJhbWdlZ3UzL3plbjguanBnJyxcclxuICAgICdodHRwOi8vczEyLnBvc3RpbWcub3JnLzlrdzViNDJkOS96ZW45LmpwZycsXHJcbiAgICAnaHR0cDovL3MxMy5wb3N0aW1nLm9yZy92d2Y5MnFibDMvemVuMTAuanBnJyxcclxuICAgICdodHRwOi8vczQucG9zdGltZy5vcmcvYW5mMnc5cnpoL3plbjExLmpwZycsXHJcbiAgICAnaHR0cDovL3MxNy5wb3N0aW1nLm9yZy9ncGJpd2RzdTcvemVuMTIuanBnJyxcclxuICAgICdodHRwOi8vczkucG9zdGltZy5vcmcvbjV1dWVkdzN6L3plbjEzLmpwZycsXHJcbiAgICAnaHR0cDovL3M5LnBvc3RpbWcub3JnL3g2em9ucDk3My96ZW4xNC5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zMi5wb3N0aW1nLm9yZy9yMHZzYnY4b3AvemVuMTUuanBnJyxcclxuICAgICdodHRwOi8vczIxLnBvc3RpbWcub3JnL3N6dTVkMGgyZi96ZW4xNi5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zMTUucG9zdGltZy5vcmcveGk1OW54b3g3L3plbjE3LmpwZycsXHJcbiAgICAnaHR0cDovL3M4LnBvc3RpbWcub3JnL3pleGpkYWp3NS96ZW4xOC5qcGcnLFxyXG4gICAgJ2h0dHA6Ly9zMjQucG9zdGltZy5vcmcvc3QydWtyZno5L3plbjE5LmpwZycsXHJcbiAgICAnaHR0cDovL3MxNS5wb3N0aW1nLm9yZy80MGtiNXU2M3YvemVuMjAuanBnJ1xyXG5dOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcHJpc20gPSB7XHJcbiAgICAgICAgZGlzdGFuY2U6IGZ1bmN0aW9uIGFwb3RoZW0od2lkdGgsIHNpZGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwod2lkdGggLyAoMiAqIE1hdGgudGFuKE1hdGguUEkgLyBzaWRlcykpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpZ3VyZXM6IGZ1bmN0aW9uICh3aWR0aCwgc2lkZXMsIGluaXRpYWwpIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gMiAqIE1hdGguUEkgLyBzaWRlcztcclxuICAgICAgICAgICAgdmFyIGFjY2VwdGFibGUgPSBNYXRoLnJvdW5kKGluaXRpYWwvYW5nbGUpKmFuZ2xlO1xyXG4gICAgICAgICAgICByZXR1cm4gUi5tYXAoZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlWTogZCAqIGFuZ2xlICsgYWNjZXB0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVo6IHByaXNtLmRpc3RhbmNlKHdpZHRoLCBzaWRlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVzZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleTogZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSwgUi5yYW5nZSgwLCBzaWRlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgY2xhc3NpYyA9IHtcclxuICAgICAgICBkaXN0YW5jZSA6IGZ1bmN0aW9uKHdpZHRoLCBzaWRlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh3aWR0aCAqIE1hdGgubG9nKHNpZGVzKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpZ3VyZXMgOiBmdW5jdGlvbiAod2lkdGgsIHNpZGVzLCBpbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IDIgKiBNYXRoLlBJIC8gc2lkZXM7XHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGNsYXNzaWMuZGlzdGFuY2Uod2lkdGgsIHNpZGVzKTtcclxuICAgICAgICAgICAgdmFyIGFjY2VwdGFibGUgPSBNYXRoLnJvdW5kKGluaXRpYWwvYW5nbGUpKmFuZ2xlO1xyXG4gICAgICAgICAgICByZXR1cm4gUi5tYXAoZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbmdsZVIgPSBkICogYW5nbGUgKyBhY2NlcHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGVSKSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVaOiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlUiksXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVzZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleTogZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSwgUi5yYW5nZSgwLCBzaWRlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByaXNtOiBwcmlzbSxcclxuICAgICAgICBjbGFzc2ljOiBjbGFzc2ljXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuIiwidmFyIFUgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxudmFyIExheW91dCA9IHJlcXVpcmUoJy4vbGF5b3V0Jyk7XHJcbnZhciBFYXNlID0gcmVxdWlyZSgnLi9lYXNlJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUsIHByb3BzKSB7XHJcbiAgICB2YXIgc3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgc3RvcmUuc3RhdGUgPSBuZXcgUnguQmVoYXZpb3JTdWJqZWN0KGluaXRpYWxTdGF0ZSk7XHJcbiAgICBzdG9yZS5wcm9wcyA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QocHJvcHMpO1xyXG4gICAgc3RvcmUubW92ZSA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoMCk7XHJcbiAgICB2YXIgc2hpZnRDYXJvdXNlbCwgc2hpZnRQcm9wcztcclxuXHJcbiAgICBzdG9yZS5wcm9wcy5za2lwKDEpLmRlYm91bmNlKDM1MCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIFUuc2FmZUNhbGwoc2hpZnRQcm9wcywgJ2Rpc3Bvc2UnKTtcclxuICAgICAgICBzaGlmdFByb3BzID0gVS50cmFuc2l0aW9uRmlndXJlcyhcclxuICAgICAgICAgICAgc3RvcmUuc3RhdGUudmFsdWUuZmlndXJlcyxcclxuICAgICAgICAgICAgTGF5b3V0W3Byb3BzLmxheW91dF1cclxuICAgICAgICAgICAgICAgIC5maWd1cmVzKHByb3BzLndpZHRoLCBwcm9wcy5zaWRlcywgc3RvcmUuc3RhdGUudmFsdWUucm90YXRpb25ZKSxcclxuICAgICAgICAgICAgRWFzZVtwcm9wcy5lYXNlXSxcclxuICAgICAgICAgICAgcHJvcHMuZHVyYXRpb24pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGZpZ3VyZXMpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlLnN0YXRlLm9uTmV4dChSLm1lcmdlKHN0b3JlLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWd1cmVzOiBVLnByZXNlbnQoZmlndXJlcyl9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3RvcmUubW92ZS5kZWJvdW5jZSgzNTApLnNraXAoMSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChhbmdsZSkge1xyXG4gICAgICAgIFUuc2FmZUNhbGwoc2hpZnRDYXJvdXNlbCwgJ2Rpc3Bvc2UnKTtcclxuICAgICAgICB2YXIgZW5kQW5nbGUgPSBzdG9yZS5zdGF0ZS52YWx1ZS5yb3RhdGlvblkgKyBhbmdsZTtcclxuICAgICAgICBzaGlmdENhcm91c2VsID0gVS50cmFuc2l0aW9uRmlndXJlcyhzdG9yZS5zdGF0ZS52YWx1ZS5maWd1cmVzLFxyXG4gICAgICAgICAgICBMYXlvdXRbc3RvcmUucHJvcHMudmFsdWUubGF5b3V0XS5maWd1cmVzKHN0b3JlLnByb3BzLnZhbHVlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgc3RvcmUucHJvcHMudmFsdWUuc2lkZXMsXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZS52YWx1ZS5yb3RhdGlvblkgKyBhbmdsZSksXHJcbiAgICAgICAgICAgIEVhc2Vbc3RvcmUucHJvcHMudmFsdWUuZWFzZV0sXHJcbiAgICAgICAgICAgIHN0b3JlLnByb3BzLnZhbHVlLmR1cmF0aW9uKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChmaWd1cmVzKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zdGF0ZS5vbk5leHQoUi5tZXJnZShzdG9yZS5zdGF0ZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ3VyZXM6IFUucHJlc2VudChmaWd1cmVzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25ZOiBlbmRBbmdsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKXtcclxuICAgIHZhciBGUkFNRV9SQVRFID0gMzA7XHJcbiAgICB2YXIgSU5URVJWQUxfTEVOR1RIID0gMTAwMC9GUkFNRV9SQVRFO1xyXG5cclxuICAgIHZhciB0aW1lciA9IFJ4Lk9ic2VydmFibGVcclxuICAgICAgICAudGltZXIoMCwgSU5URVJWQUxfTEVOR1RILCBSeC5TY2hlZHVsZXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IFJ4LlNjaGVkdWxlci50aW1lb3V0KVxyXG4gICAgICAgIC5zZWxlY3QoZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaSAqIElOVEVSVkFMX0xFTkdUSDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDaGFuZ2UoZW50cmllcyl7XHJcbiAgICAgICAgdmFyIGxlbj0gZW50cmllcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHJlcz0gbmV3IEFycmF5KGxlbik7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcclxuICAgICAgICAgICAgcmVzW2ldID0gYWRkT2JqQ2hhbmdlKGVudHJpZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE9iakNoYW5nZShlbnRyeSl7XHJcbiAgICAgICAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgcmVzW2tleV0gPSBSLm1lcmdlKGVudHJ5W2tleV0se2NoYW5nZTogZW50cnlba2V5XS50by1lbnRyeVtrZXldLmZyb219KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0YWxseSh0aW1lLGVudHJpZXMsZHVyYXRpb24pe1xyXG4gICAgICAgIHZhciBsZW49IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgICAgIHZhciByZXM9IG5ldyBBcnJheShsZW4pO1xyXG4gICAgICAgIHZhciBlbnRyeTtcclxuICAgICAgICBmb3IodmFyIGkgPTA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbaV07XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgb2JqW2tleV09IGVudHJ5W2tleV0uZWFzZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnlba2V5XS5lYXNlKHRpbWUsIGVudHJ5W2tleV0uZnJvbSxlbnRyeVtrZXldLmNoYW5nZSxkdXJhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICA6IGVudHJ5W2tleV0uZnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNbaV09b2JqO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRyYW5zaXQoZW50cmllcywgZHVyYXRpb24pIHtcclxuICAgICAgICB2YXIgd2l0aENoYW5nZSA9IGFkZENoYW5nZShlbnRyaWVzKTtcclxuICAgICAgICB2YXIgdG8gPSBSLm1hcChSLm1hcE9iaihSLnByb3AoJ3RvJykpLGVudHJpZXMpO1xyXG4gICAgICAgIHJldHVybiB0aW1lclxyXG4gICAgICAgICAgICAudGFrZVdpdGhUaW1lKGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAuc2VsZWN0KGZ1bmN0aW9uKHRpbWUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhbGx5KHRpbWUsd2l0aENoYW5nZSxkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jb25jYXQoUnguT2JzZXJ2YWJsZS5yZXR1cm5WYWx1ZSh0bykpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG4iLCJ2YXIgdHJhbnNpdCA9IHJlcXVpcmUoJy4vdHJhbnNpdCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHNhZmVDYWxsKG9iaiwgZnVuYywgYXJncykge1xyXG4gICAgICAgIGlmIChvYmogJiYgb2JqLmhhc093blByb3BlcnR5KGZ1bmMpKSB7XHJcbiAgICAgICAgICAgIG9ialtmdW5jXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkZpZ3VyZXMoZnJvbSwgdG8sIGVhc2UsZHVyYXRpb24pIHtcclxuICAgICAgICB2YXIga2V5cyA9IFIudW5pcShSLnBsdWNrKCdrZXknLCBmcm9tLmNvbmNhdCh0bykpKTtcclxuICAgICAgICB2YXIgZnJvbVRvID0gUi5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KHRyYW5zZmlndXJlKHN0YXJ0RnJhbWUoZnJvbVtrZXldLCB0b1trZXldKSxcclxuICAgICAgICAgICAgICAgIGVuZEZyYW1lKGZyb21ba2V5XSwgdG9ba2V5XSksIGVhc2UpKTtcclxuICAgICAgICB9LCBbXSwga2V5cyk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zaXQoZnJvbVRvLCBkdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlY29uZEFyZyA9IFIubnRoQXJnKDEpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zZmlndXJlKGZyb20sIHRvLCBlYXNlKSB7XHJcbiAgICAgICAgdmFyIGtleXMgPSBSLnVuaXEoT2JqZWN0LmtleXMoZnJvbSB8fCB7fSkuY29uY2F0KE9iamVjdC5rZXlzKHRvIHx8IHt9KSkpO1xyXG4gICAgICAgIHZhciByZXMgPSB7fTtcclxuICAgICAgICBSLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXNba2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGZyb206IGZyb21ba2V5XSxcclxuICAgICAgICAgICAgICAgIHRvOiB0b1trZXldXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc1trZXldLmVhc2UgPSBSLmlzKE51bWJlciwgcmVzW2tleV0uZnJvbSkgPyBlYXNlIDogc2Vjb25kQXJnO1xyXG4gICAgICAgIH0sIGtleXMpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXNlbnQgPSBSLmZpbHRlcihSLnByb3AoJ3ByZXNlbnQnKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRGcmFtZShub3csIHRoZW4pIHtcclxuICAgICAgICByZXR1cm4gbm93IHx8IFIubWVyZ2UodGhlbiwge3ByZXNlbnQ6IHRydWUsIG9wYWNpdHk6IDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmRGcmFtZShub3csIHRoZW4pIHtcclxuICAgICAgICByZXR1cm4gbm93ICYmICF0aGVuID8gUi5tZXJnZShub3csIHtwcmVzZW50OiBmYWxzZSwgb3BhY2l0eTogMH0pIC8vIGxlYXZlc1xyXG4gICAgICAgICAgICA6IFIubWVyZ2UodGhlbiwge3ByZXNlbnQ6IHRydWUsIG9wYWNpdHk6IDF9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWd1cmVTdHlsZShkKSB7XHJcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVggPSBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChkLCAndHJhbnNsYXRlWCcpID8gZC50cmFuc2xhdGVYIDogMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVZKCcgKyBkLnJvdGF0ZVkgKyAncmFkKSAnXHJcbiAgICAgICAgICAgICsgJyB0cmFuc2xhdGVYKCcgKyB0cmFuc2xhdGVYICsgJ3B4KSdcclxuICAgICAgICAgICAgKyAnIHRyYW5zbGF0ZVooJyArIGQudHJhbnNsYXRlWiArICdweCknLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBkLm9wYWNpdHlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhcm91c2VsU3R5bGUodHJhbnNsYXRlWikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKFwiICsgKC10cmFuc2xhdGVaKSArIFwicHgpXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzYWZlQ2FsbDpzYWZlQ2FsbCxcclxuICAgICAgICB0cmFuc2l0aW9uRmlndXJlczp0cmFuc2l0aW9uRmlndXJlcyxcclxuICAgICAgICBmaWd1cmVTdHlsZTpmaWd1cmVTdHlsZSxcclxuICAgICAgICBjYXJvdXNlbFN0eWxlOmNhcm91c2VsU3R5bGUsXHJcbiAgICAgICAgcHJlc2VudDpwcmVzZW50XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuIiwidmFyIFUgPSByZXF1aXJlKCcuLi91dGlsL3V0aWwnKTtcclxudmFyIFN0b3JlID0gcmVxdWlyZSgnLi4vdXRpbC9zdG9yZScpO1xyXG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi4vdXRpbC9sYXlvdXQnKTtcclxudmFyIEltYWdlcyA9IHJlcXVpcmUoJy4uL3V0aWwvaW1hZ2VzJyk7XHJcblxyXG52YXIgY3JlYXRvciA9IFUuY2Fyb3VzZWw7Ly8gVS5jbGFzc2ljO1xyXG52YXIgQ2Fyb3VzZWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaWRlczogdGhpcy5wcm9wcy5zaWRlcyxcclxuICAgICAgICAgICAgZmlndXJlczogTGF5b3V0W3RoaXMucHJvcHMubGF5b3V0XS5maWd1cmVzKHRoaXMucHJvcHMud2lkdGgsIHRoaXMucHJvcHMuc2lkZXMsIDApLFxyXG4gICAgICAgICAgICByb3RhdGlvblk6IDBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmUgPSBTdG9yZShcclxuICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGUoKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5za2lwKDEpLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm9uTW92ZSA9IGZ1bmN0aW9uIG9uTW92ZShhbmdsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLm1vdmUub25OZXh0KGFuZ2xlKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc3RvcmUucHJvcHMub25OZXh0KG5leHRQcm9wcyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gKDIgKiBNYXRoLlBJKSAvIHRoaXMuc3RhdGUuZmlndXJlcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNTdHlsZSA9IFUuY2Fyb3VzZWxTdHlsZShMYXlvdXRbdGhpcy5wcm9wcy5sYXlvdXRdLmRpc3RhbmNlKHRoaXMucHJvcHMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlndXJlcy5sZW5ndGgpKTtcclxuICAgICAgICAvLyB7aSsxfVxyXG4gICAgICAgIHZhciBmaWd1cmVzID0gUi5tYXBJbmRleGVkKGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGZpZ3VyZSBrZXk9e2l9IHN0eWxlPXtVLmZpZ3VyZVN0eWxlKGQpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZXNbaV19IGFsdD17aX0gaGVpZ2h0PXtcIjEwMCVcIn0gd2lkdGg9e1wiMTAwJVwifT48L2ltZz5cclxuICAgICAgICAgICAgPC9maWd1cmU+KTtcclxuICAgICAgICB9LCB0aGlzLnN0YXRlLmZpZ3VyZXMpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2Nhcm91c2VsJyBzdHlsZT17Y1N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZmlndXJlc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXYnIG9uQ2xpY2s9e1IucGFydGlhbCh0aGlzLm9uTW92ZSwgYW5nbGUpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXh0JyBvbkNsaWNrPXtSLnBhcnRpYWwodGhpcy5vbk1vdmUsLWFuZ2xlKX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBDYXJvdXNlbDtcclxuXHJcblxyXG5cclxuIiwidmFyIENhcm91c2VsID0gcmVxdWlyZSgnLi9jYXJvdXNlbCcpO1xyXG52YXIgRWFzZSA9IHJlcXVpcmUoJy4uL3V0aWwvZWFzZScpO1xyXG5cclxudmFyIE1haW5WaWV3ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2lkZXM6IDMsXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgIGxheW91dDogJ3ByaXNtJyxcclxuICAgICAgICAgICAgZWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub25TaWRlcyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaWRlczogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25MYXlvdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGF5b3V0OiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkR1cmF0aW9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2R1cmF0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkVhc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWFzZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlYXNlTGlzdCA9IFIubWFwKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPG9wdGlvbiBrZXk9e2R9IHZhbHVlPXtkfT57ZH08L29wdGlvbj4pXHJcbiAgICAgICAgfSwgUi5rZXlzKEVhc2UpKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHdpZHRoPXt0aGlzLnN0YXRlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVzPXt0aGlzLnN0YXRlLnNpZGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U9e3RoaXMuc3RhdGUuZWFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17dGhpcy5zdGF0ZS5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e3RoaXMuc3RhdGUubGF5b3V0fS8+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhbmVsLWNvdW50XCI+UGFuZWxzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwicGFuZWwtY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNpZGVzfSBtaW49XCIzXCIgbWF4PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2lkZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuPnt0aGlzLnN0YXRlLnNpZGVzfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5vbkxheW91dH0gdmFsdWU9e3RoaXMuc3RhdGUubGF5b3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpc21cIj5wcmlzbTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjbGFzc2ljXCI+Y2xhc3NpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVyYXRpb25cIj5EdXJhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kdXJhdGlvbn0gbWluPVwiMFwiIHN0ZXA9XCIyNTBcIiBtYXg9XCIxNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkR1cmF0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLm9uRWFzZX0gdmFsdWU9e3RoaXMuc3RhdGUuZWFzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vhc2VMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYWluVmlldzsgICAgICAgICJdfQ==

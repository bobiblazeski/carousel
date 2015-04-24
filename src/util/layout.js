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


var U = require('../util/util');
var Store = require('../util/store');
var Layout = require('../util/layout');
var Images = require('../util/images');

var creator = U.carousel;// U.classic;
var Carousel = React.createClass({
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
            return (<figure key={i} style={U.figureStyle(d)}>
                <img src={Images[i]} alt={i} height={"100%"} width={"100%"}></img>
            </figure>);
        }, this.state.figures);
        return (
            <section className='container'>
                <div id='carousel' style={cStyle}>
                    {figures}
                </div>
                <div className='prev' onClick={R.partial(this.onMove, angle)}></div>
                <div className='next' onClick={R.partial(this.onMove,-angle)}></div>
            </section>
        );
    }
});
module.exports = Carousel;




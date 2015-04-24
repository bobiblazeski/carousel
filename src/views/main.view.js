var Carousel = require('./carousel');
var Ease = require('../util/ease');

var MainView = React.createClass({
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
            return (<option key={d} value={d}>{d}</option>)
        }, R.keys(Ease));
        return (
            <div>
                <Carousel width={this.state.width}
                          sides={this.state.sides}
                          ease={this.state.ease}
                          duration={this.state.duration}
                          layout={this.state.layout}/>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="panel-count">Panels</label>
                        </td>
                        <td>
                            <input type="range" id="panel-count"
                                   value={this.state.sides} min="3" max="20"
                                   onChange={this.onSides}/>
                        </td>
                        <td><span>{this.state.sides}</span></td>
                    </tr>
                    <tr>
                        <td>
                            Layout
                        </td>
                        <td>
                            <select onChange={this.onLayout} value={this.state.layout}>
                                <option value="prism">prism</option>
                                <option value="classic">classic</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="duration">Duration</label>
                        </td>
                        <td>
                            <input type="range" id="duration"
                                   value={this.state.duration} min="0" step="250" max="1500"
                                   onChange={this.onDuration}/>
                        </td>
                        <td>
                            <span>{this.state.duration}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ease
                        </td>
                        <td>
                            <select onChange={this.onEase} value={this.state.ease}>
                                {easeList}
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
});

module.exports = MainView;        
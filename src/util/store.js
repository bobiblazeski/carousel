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







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




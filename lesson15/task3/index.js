export function createLogger() {
    let memory = [];

    function warn(warning) {
        return memory.push({ message: warning, dateTime: new Date(), type: 'warn' });
    }

    function error(err) {
        return memory.push({ message: err, dateTime: new Date(), type: 'error' });
    }

    function log(log) {
        return memory.push({ message: log, dateTime: new Date(), type: 'log' });
    }

    function getRecords(type) {
        if (!type) {
            return memory;
        };
        return memory.filter(function (elem) {
            return elem.type === type
        }).sort((function (a, b) {
            returna.dateTime - b.dateTime
        });
    }

    return {
        warn,
        error,
        log,
        getRecords
    };
}

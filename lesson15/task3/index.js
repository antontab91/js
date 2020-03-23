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

    function getRecords(data) {
        if (data === undefined) {
            return memory;
        }
        return memory.filter(function (element) {
            return element.type === data;
        }).sort(function (a, b) {
            a.dateTime - b.dateTime;
        });
    }

    return {
        warn,
        error,
        log,
        getRecords
    };
}

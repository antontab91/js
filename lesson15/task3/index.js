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
        return data.sort((acc, rec) => (acc.dateTime > rec.dateTime));

    }

    return {
        warn,
        error,
        log,
        getRecords
    };
}

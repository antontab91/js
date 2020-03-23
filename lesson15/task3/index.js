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
        if (!data) {
            return memory;
        };
        return memory.filter((a) => a.type === data).sort((a, b) => a.dateTime - b.dateTime);
    }

    return {
        warn,
        error,
        log,
        getRecords
    };
}

export function creatememory() {
    let memory = [];

    function warn(warning) {
        return memory.push({ message: warning, dateTime: new Date(), type: 'warn', });
    }

    function error(error) {
        return memory.push({ message: error, dateTime: new Date(), type: 'error', });
    }

    function log(log) {
        return memory.push({ message: log, dateTime: new Date(), type: 'log', })
    }

    function getRecords(type) {
        if (!type) {
            return memory;
        };
        return memory.filter((a) => a.type === type).sort((a, b) => a.dateTime - b.dateTime);
    }
    return {
        warn,
        error,
        log,
        getRecords
    };
}
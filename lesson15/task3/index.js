export function createLogger() {
    let memory = [];

    const warn = (warning) => {
        return memory.push({ message: warning, dateTime: new Date(), type: 'warn', });
    }

    const error = (err) => {
        return memory.push({ message: err, dateTime: new Date(), type: 'error', });
    }

    const log = (log) => {
        return memory.push({ message: log, dateTime: new Date(), type: 'log', })
    }

    const getRecords = (type) => {
        if (!type) {
            return memory
        };
        return memory.filter((el) => el.type === type).sort((a, b) => a.dateTime - b.dateTime);
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
}

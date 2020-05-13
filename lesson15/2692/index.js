export const createLogger = () => {
    const logs = [];

    function warn(text) {
        logs.push({
            message: text,
            dateTimeL: new Date(),
            type: 'warn',
        });
    }
    function error(text) {
        logs.push({
            message: text,
            dateTimeL: new Date(),
            type: 'error',
        });
    }
    function log(text) {
        logs.push({
            message: text,
            dateTimeL: new Date(),
            type: 'log',
        });
    }

    function getRecords(text) {
        // logs.filter((el) => {
        //     return el.type === text;
        // }).sort((a, b) => {
        //     return b.dateTime - a.dateTime;
        // });

        return (text ?
            logs.filter((el) => {
                return el.type === text;
            })
            : logs)
            .sort((a, b) => {
                return b.dateTime - a.dateTime;
            });
    }

    return {
        warn,
        error,
        log,
        getRecords
    }
}

let logger1 = createLogger();

// console.log(logger1.warn('dddd'));
// console.log(logger1.warn('tttt'));
// console.log(logger1.warn('zzzz'));
// console.log(logger1.warn('gggg'));

// console.log(logger1.getRecords())
export const createLogger = () => {
    const logs = [];

    function warn(text) {
        addMessage('warn', text);
    }
    function error(text) {
        addMessage('error', text);
    }
    function log(text) {
        addMessage('log', text);
    }

    function addMessage(type, text) {
        logs.push({
            message: text,
            dateTimeL: new Date(),
            type: type,
        });
    }


    function getRecords(text) {
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

// let logger1 = createLogger();

// console.log(logger1.warn('dddd'));
// console.log(logger1.warn('tttt'));
// console.log(logger1.warn('zzzz'));
// console.log(logger1.warn('gggg'));

// console.log(logger1.getRecords())

// var a = 17;

// function test() {
//     var a = 10;
//     if (a) {
//         var a = 1;
//         console.log(a);
//     }
// }

// test();
// console.log(a);
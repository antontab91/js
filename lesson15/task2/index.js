export function createCalculator(num) {
    let memory = 0;
    function add(num) {
        memory = memory + num;
        return memory;
    }

    function decrease(num) {
        memory = memory - num;
        return memory;
    }
    function reset(num) {
        memory = 0
        return memory;
    }
    function getMemo(num) {
        return memory;
    }


    return {
        add,
        decrease,
        reset,
        getMemo
    };
}


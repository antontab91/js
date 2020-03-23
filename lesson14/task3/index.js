let memory = 0;

export function add(num) {
    memory = memory + num;
    return memory;
}

export function decrease(num) {
    memory = memory - num;
    return memory;
}
export function reset(num) {
    memory = 0
    return memory;
}
export function getMemo(num) {
    return memory;
}


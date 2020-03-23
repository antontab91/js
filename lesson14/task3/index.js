let memory = 0;

export function add(num) {
    return memory + num;
}

export function decrease(num) {
    return memory - num;
}
export function reset(num) {
    memory = 0
    return memory;
}
export function getMemo(num) {
    return num;
}



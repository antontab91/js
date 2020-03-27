function saveCalls(allCalls) {

    function withMemory() {
        withMemory.calls.push([...arguments]);
        return allCalls.call(this, arguments);
    }

    withMemory.calls = [];
    return withMemory;

}


function sortContacts(concats) {
    const result = concats.sort(function (a, b) {
        return a.localeCompare(b);
    })
    return result;
}
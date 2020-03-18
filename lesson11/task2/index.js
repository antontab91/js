function sortContacts(concats) {

    if (!Array.isArray(concats)) {
        return null;
    }

    const result = concats.sort(function (a, b) {
        return a.name.localeCompare(b);
    })
    return result;
}
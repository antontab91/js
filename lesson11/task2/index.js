function sortContacts(concats, bollean) {

    if (!Array.isArray(concats)) {
        return null;
    }
    const result;
    if (bollean === true) {
        result = concats.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })
    } else {
        result = concats.sort(function (a, b) {
            return b.name.localeCompare(a.name);
        })
    }
    return result;
}
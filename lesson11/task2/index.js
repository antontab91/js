function sortContacts(concats, bollean = true) {

    if (!Array.isArray(concats)) {
        return null;
    }

    if (bollean !== true) {
        return concats.sort(function (a, b) {
            return b.name.localeCompare(a.name);
        })
    }

    return concats.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })
}
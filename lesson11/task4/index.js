const countOccurrences = (text, entry) => {

    if (entry === "") return null;

    return text.split(entry).length - 1;
}
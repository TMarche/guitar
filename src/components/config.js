import _ from "lodash";

const noteColorMapping = [
    ["A", "red"],
    ["A#", "orange"],
    ["B", "maroon"],
    ["C", "green"],
    ["C#", "slateblue"],
    ["D", "pink"],
    ["D#", "palevioletred"],
    ["E", "turquoise"],
    ["F", "royalblue"],
    ["F#", "yellowgreen"],
    ["G", "purple"],
    ["G#", "salmon"],
]

export const mapToColor = (note, isHidden) => {
    const searchResult = _.find(noteColorMapping, (x => x[0] === note.toUpperCase()));
    if (isHidden) { return "#555"}
    if (searchResult) {return searchResult[1]};
    return "#555";
}
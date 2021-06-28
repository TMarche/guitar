import _ from "lodash";

const noteColorMapping = [
    ["A", "red"],
    ["A#", "orange"],
    ["B", "yellow"],
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

export const mapToColor = (note) => {
    const searchResult = _.find(noteColorMapping, (x => x[0] === note.toUpperCase()));
    if (searchResult) {return searchResult[1]};
    return "#555";
}
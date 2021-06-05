import _ from "lodash";

const noteColorMapping = [
    ["A", "red"],
    ["A#", "orange"],
    ["B", "yellow"],
    ["C", "green"],
    ["C#", "salmon"],
    ["D", "salmon"],
    ["D#", "salmon"],
    ["E", "salmon"],
    ["F", "salmon"],
    ["F#", "salmon"],
    ["G", "salmon"],
    ["G#", "salmon"],
]

export const mapToColor = (note) => {
    return _.find(noteColorMapping, (x => x[0] === note.toUpperCase()))
}
import { Map } from "immutable";

import { SET_TRUE, SET_FALSE, DELETE_NOTE_CHIP, ADD_NOTE_CHIP, CLEAR_NOTE_CHIPS, SET_FRET_COUNT } from "../actions/types";


const INITIAL_STATE = Map({
    value: null,
    noteChips: [],
    fretCount: 24,
})

export default (state = INITIAL_STATE, action) => {
    switch( action.type ) {
        case SET_TRUE:
            return state.set("value", "true")
        case SET_FALSE:
            return state.set("value", "false")
        case ADD_NOTE_CHIP:
            if (state.get("noteChips").includes(action.noteChip.toUpperCase())) {return state}
            return state.set("noteChips", [...state.get("noteChips"), action.noteChip.toUpperCase()])
        case DELETE_NOTE_CHIP:
            let chips = state.get("noteChips")
            chips = chips.filter( (x) => x !== action.noteChip )
            return state.set("noteChips", chips)
        case CLEAR_NOTE_CHIPS:
            return state.set("noteChips", [])
        case SET_FRET_COUNT:
            return state.set("fretCount", action.fretCount)
        default:
            return state;
    }
};
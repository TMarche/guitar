import { SET_TRUE, SET_FALSE, ADD_NOTE_CHIP, DELETE_NOTE_CHIP, CLEAR_NOTE_CHIPS } from "./types";

export const setTrue = () => {
    return {
        type: SET_TRUE
    }
}

export const setFalse = () => {
    return {
        type: SET_FALSE
    }
}

export const addNoteChip = (noteChip) => {
    return {
        type: ADD_NOTE_CHIP,
        noteChip
    }
}

export const deleteNoteChip = (noteChip) => {
    return {
        type: DELETE_NOTE_CHIP,
        noteChip
    }
}

export const clearNoteChips = () => {
    return {
        type: CLEAR_NOTE_CHIPS
    }
}
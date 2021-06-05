import * as React from "react"

import styled from "styled-components"
import CircularList from "../structures/CircularList"
import Note from "./Note"
import {mapToColor} from "./config"

const NOTE_CIRCLE = new CircularList("E F F# G G# A A# B C C# D D#".split(" "))

class GuitarString extends React.Component {
    static defaultProps = {length: 23}
    state = {notes: []}

    componentDidMount() {
        this.setState({notes: this.getNotes()})
    }

    render() {
        return (
            <div>
                <div className="note-container">{this.presentAsComponents()}</div>
            </div>
        )
    }

    // Display the guitar string using react compoents
    presentAsComponents = (component) => {
        return this.state.notes.map( this.noteMapper ).map( note => {
            return <Note style={{color: "red" }} note={note} />
        })
    }

    noteMapper = (note) => {
        if (!this.props.selectedNotes) {return `${note}`}
        return this.props.selectedNotes.map(x => x.toLowerCase()).includes(note.toLowerCase()) ? `${note}` : ""
    }

    // Display the guitar string using a string literal
    presentAsString = () => {
        const noteMapper = (x => {
            if (!this.props.selectedNote) {return `(${x})`}
            return x.toLowerCase() === this.props.selectedNote.toLowerCase() ? `(${x})` : "-"
        })
        // Create string, taking into account the amount of space each item takes
        return "--" + this.state.notes.map( noteMapper )
                    .map( (x, i) => x + "-".repeat(6 - x.length) + (i === 0 ? "|" : "") )
                    .join("|--") + "|"
    }

    getNotes = () => {
        const rootIndex = NOTE_CIRCLE.indexOf(this.props.tuning)
        let notes = []
        for (let i = 0; i < this.props.length; i++) {
            notes.push(NOTE_CIRCLE.get(rootIndex + i))
        }
        return notes;
 
    }
}

export default styled(GuitarString)`
    margin: 10px 0;
    font-family: monospace;
`;

import * as React from "react"

import styled from "styled-components"
import CircularList from "../structures/CircularList"
import Note from "./Note"

const NOTE_CIRCLE = new CircularList("E F F# G G# A A# B C C# D D#".split(" "))

class GuitarString extends React.Component {
    static defaultProps = {length: 18}
    state = {notes: []}

    componentDidMount() {
        this.setState({notes: this.getNotes()})
    }

    render() {
        return (
            <div className="note-container">
                {this.presentAsComponents()}
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
        if (this.props.selectedNotes.length === 0) {return `${note}`}
        return this.props.selectedNotes.map(x => x.toLowerCase()).includes(note.toLowerCase()) ? `${note}` : ""
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

import * as React from "react"

import styled from "styled-components"
import CircularList from "../structures/CircularList"

/*
  NOTE: Consider using svg.js or snap in order to generate:
    - Chord Diagrams
    - Individual notes
    - Combinations of notes
    - Basicall anything that needs to be displayed performantly
  NOTE: Consider using anime.js for animations
  NOTE: Consider 
  Look at Fretty.app for inspiration/other things that could be added to make app more feature-complete

*/

const NOTE_CIRCLE = new CircularList("E F F# G G# A A# B C C# D D#".split(" "))

class GuitarString extends React.Component {
    static defaultProps = {length: 13}
    state = {notes: []}

    componentDidMount() {
        this.setState({notes: this.getNotes()})
    }

    render() {
        return (
            <div className={this.props.className}>{this.presentAsString()}</div>
        )
    }

    presentAsString = () => {
        // Create string, taking into account the amount of space each item takes
        return "||--" + this.state.notes.map( x => x === "E" ? `(${x})` : "-")
                    .map( x => x + "-".repeat(6 - x.length))
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

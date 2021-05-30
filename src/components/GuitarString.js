import * as React from "react"

import styled from "styled-components"
import CircularList from "../structures/CircularList"

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
                <div className={this.props.className}>{this.presentAsString()}</div>
                <div className={this.props.className}>{this.presentAsComponent()}</div>
            </div>
        )
    }

    presentAsComponent = (component) => {
        return <div>Test</div>
    }

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

import * as React from "react"

import styled from "styled-components"
import CircularList from "../structures/CircularList"

const NOTE_CIRCLE = new CircularList("E F F# G G# A A# B C C# D D#".split(" "))

class GuitarString extends React.Component {
    static defaultProps = {length: 24}

    render() {
        return (
            <div className={this.props.className}>{this.buildString()}</div>
        )
    }

    buildString = () => {
        const rootIndex = NOTE_CIRCLE.indexOf(this.props.tuning)
        let notes = []
        for (let i = 0; i < this.props.length; i++) {
            notes.push(NOTE_CIRCLE.get(rootIndex + i))
        }
        notes = notes.map( x => x === "F#" ? `(${x})` : "X")
        return notes.join("-----")
    }
}

export default styled(GuitarString)`
    margin: 10px 0;
`;

import React from "react";
import Guitar from "./Guitar"
import styled from "styled-components"
import Controls from "./Controls"

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

class App extends React.Component {
    state = {selectedNote: "F"}

    render() {
        return (
            <div className={this.props.className}>
                <GuitarHeader>
                    TOTALLY RAD GUITAR SIMULATOR
                </GuitarHeader>
                <Controls setSelectedNote={this.setSelectedNote} selectedNote={this.state.selectedNote} />
                <Guitar selectedNote={this.state.selectedNote}/>
                <Guitar selectedNote={this.state.selectedNote}/>
                <Guitar selectedNote={this.state.selectedNote}/>
            </div>
        )
    } 

    setSelectedNote = (selectedNote) => {
        this.setState({selectedNote})
    }
}

const GuitarHeader = styled.div`
    font-size: 3em;
    font-weight: lighter;
    background-color: white;
    color: black;
    line-height: 1em;
    padding: 20px;
    letter-spacing: .5em;
`

export default styled(App)``
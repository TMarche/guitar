import * as React from "react";
import {connect} from 'react-redux'
import { getFretCount, getNoteChips } from "../selectors"


import styled from "styled-components";
import color from "color";

import "../styles/styles.css";

import {mapToColor} from "./config";
import { addNoteChip, deleteNoteChip, clearNoteChips } from "../actions"

const StyledNote = styled.button`
    color: white;
    border: none;
    background: ${props => mapToColor(props.note, props.isHidden)};
    box-shadow: 0 3px 0 ${props => color(mapToColor(props.note, props.isHidden)).darken(.2)};
    font-family: 'Spartan', sans-serif;
    text-align: center;
    
    position: relative;
    height: 0;
    width: clamp(5px, ${props => (80/props.fretCount)}%, 80px);
    padding-bottom: clamp(5px, ${props => (80/props.fretCount)}%, 80px);
    line-height:  clamp(-80px, ${props => 6000/props.fretCount}%, 80px);
    margin: clamp(.5px, ${props => 10/props.fretCount}%, 8px);
    font-size: 24px;

    &:hover {
        background: ${props => color(mapToColor(props.note, props.isHidden)).lighten(.2)};
        box-shadow: 0 3px 0 ${props => color(mapToColor(props.note, props.isHidden))};
    }

    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }

    border-radius: 10px;
    text-transform: uppercase;
`

class Note extends React.Component {
    render() {
        return <StyledNote
                   onClick={() => this.handleClick()} 
                   note={this.props.note} 
                   isHidden={this.props.isHidden}
                   fretCount={this.props.fretCount}
                >
                    {this.renderNote()}
                </StyledNote>
    }

    renderNote = () => {
        return this.props.isHidden ? "" : this.props.note
    }

    handleClick = () => {
        if (this.props.isHidden || this.props.selectedNotes.length === 0) {
            this.props.addNoteChip(this.props.note.toUpperCase())
        } else {
            this.props.deleteNoteChip(this.props.note.toUpperCase())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        selectedNotes: getNoteChips(state),
        fretCount: getFretCount(state)
    }
}

export default connect(mapStateToProps, {addNoteChip, deleteNoteChip})(Note)
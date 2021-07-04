import * as React from "react";
import {connect} from 'react-redux'
import { getNoteChips } from "../selectors"


import styled from "styled-components";
import color from "color";

import "../styles/styles.css";

import {mapToColor} from "./config";
import { addNoteChip, deleteNoteChip, clearNoteChips } from "../actions"

const StyledNote = styled.button`
    font-size: 24px;
    color: white;
    border: none;
    background: ${props => mapToColor(props.note, props.isHidden)};
    box-shadow: 0 3px 0 ${props => color(mapToColor(props.note, props.isHidden)).darken(.2)};
    font-family: 'Spartan', sans-serif;
    text-align: center;
    width: 50px;

    height: 50px;
    line-height: 25px;

    &:hover {
        background: ${props => color(mapToColor(props.note, props.isHidden)).lighten(.2)};
        box-shadow: 0 3px 0 ${props => color(mapToColor(props.note, props.isHidden))};
    }

    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }

    margin: .5em;
    border-radius: 10px;
    text-transform: uppercase;
`

class Note extends React.Component {
    render() {
        return <StyledNote
                   onClick={() => this.handleClick()} 
                   note={this.props.note} 
                   isHidden={this.props.isHidden}
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
        selectedNotes: getNoteChips(state)
    }
}

export default connect(mapStateToProps, {addNoteChip, deleteNoteChip})(Note)
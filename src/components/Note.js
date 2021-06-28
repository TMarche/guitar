import * as React from "react";

import styled from "styled-components";

import color from "color";

import "../styles/styles.css";

import {mapToColor} from "./config";



const StyledNote = styled.button`
    font-size: 24px;
    color: white;
    border: none;
    background: ${props => mapToColor(props.note)};
    box-shadow: 0 3px 0 ${props => color(mapToColor(props.note)).darken(.2)};
    font-family: 'Spartan', sans-serif;
    text-align: center;
    width: 50px;

    height: 50px;
    line-height: 25px;

    &:hover {
        background: ${props => color(mapToColor(props.note)).lighten(.2)};
        box-shadow: 0 3px 0 ${props => color(mapToColor(props.note))};
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
        return <StyledNote note={this.props.note}>{this.props.note}</StyledNote>
    }
}

export default Note
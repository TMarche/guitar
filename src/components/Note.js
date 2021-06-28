import * as React from "react";
import "../styles/styles.css"

import styled from "styled-components"

import mapToColor from "./config"



const StyledNote = styled.button`
    font-size: 24px;
    color: white;
    border: none;
    background: #555;
    box-shadow: 0 3px 0 #222;
    font-family: 'Spartan', sans-serif;
    text-align: center;
    width: 50px;

    height: 50px;
    line-height: 25px;

    &:hover {
        background: #777;
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



// class Note extends React.Component {
//     render() {
//         return (
//             <div className="note">
//                 <div>{this.props.note}</div>
//             </div>
//         );
//     }
// }

export default Note
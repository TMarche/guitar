import * as React from "react";
import "../styles/styles.css"

import styled from "styled-components"

// const NoteWrapper = styled.section`
//     border-radius: 50%;
//     border: 10px solid black;
// `;


class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <div>{this.props.note}</div>
            </div>
        );
    }
}

export default Note
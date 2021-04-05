import React from "react";
import Guitar from "./Guitar"
import styled from "styled-components"

const App = ({className}) => {
    return (
        <div className={className}>
            <GuitarHeader>
                TOTALLY RAD GUITAR SIMULATOR
            </GuitarHeader>
            <Guitar />
            <Guitar />
            <Guitar />
        </div>
    )
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
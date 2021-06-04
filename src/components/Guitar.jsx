import React from "react"
import styled from "styled-components"
import GuitarString from "./GuitarString"

const Guitar = ({className, children, selectedNote}) => {
    const strings = "E A D G B E".split(" ")
    return (
        <div className={className}>
            {/* use reverse() -- bottom should be the bass strings */}
            <StringContainer>
                {strings.reverse().map(
                    (x, i) => <GuitarString selectedNote={selectedNote} tuning={x} key={i}/> )
                }
            </StringContainer>
        </div>
    )
}


const StringContainer = styled.div`
    padding: 20px;
    background-color: #333;
    color: white;
    border: none;

`


const StyledGuitar = styled(Guitar)`
`

export default StyledGuitar
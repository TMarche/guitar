import React from "react"
import styled from "styled-components"
import GuitarString from "./GuitarString"

const Guitar = ({className, children}) => {
    const strings = "E A D G B E".split(" ")
    return (
        <div className={className}>
            {/* use reverse() -- bottom should be the bass strings */}
            {strings.reverse().map( (x, i) => <GuitarString tuning={x} key={i}/> )}
        </div>
    )
}


const StyledGuitar = styled(Guitar)`
    padding: 20px;
    background-color: #333;
    color: white;
    border: none;
`

export default StyledGuitar
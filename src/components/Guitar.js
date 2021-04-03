import React from "react"
import styled from "styled-components"

const Guitar = ({className, children}) => {
    return (
        <div className={className}>
            I am the ultimate machine
            {children}
        </div>
    )
}

const Button = styled.button`
    font-size: 1em;
    background-color: orange;
    color: white;
    border: none;
`

const StyledGuitar = styled(Guitar)`
    font-size: 1em;
    background-color: orange;
    color: white;
    border: none;
`

export default StyledGuitar
import React from "react"
import styled from "styled-components"

class Controls extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <GridRow>
                    <label>Note</label>
                    <input
                        type="text"
                        value={this.props.selectedNote}
                        onChange={(e) => this.props.setSelectedNote(e.target.value)}
                    />
                </GridRow>
            </div>
        )
    }

}

const GridRow = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
`

export default styled(Controls)`
    margin: 10px;
`
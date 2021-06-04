import React from "react"
import styled from "styled-components"
import ChipInput from "material-ui-chip-input"

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
                    <label>Notes</label>
                    <ChipInput
                        value={this.props.noteChips}
                        onAdd={(chip) => this.props.handleAddNoteChip(chip)}
                        onDelete={(chip, index) => this.props.handleDeleteNoteChip(chip, index)}
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
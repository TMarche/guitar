import React from "react"
import styled from "styled-components"
import ChipInput from "material-ui-chip-input"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class Controls extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <GridRow>
                    <label>Notes</label>
                    <ChipInput
                        value={this.props.noteChips}
                        onAdd={(chip) => this.props.handleAddNoteChip(chip)}
                        onDelete={(chip, index) => this.props.handleDeleteNoteChip(chip, index)}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={this.props.shouldPresentAsComponents}
                            onChange={this.props.toggleShouldPresentAsComponents}
                            name="shouldPresentAsComponents"
                            color="primary"
                        />
                        }
                        label="Should Present as Components"
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
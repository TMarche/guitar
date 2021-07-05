import React from "react"
import {connect} from 'react-redux'

import styled from "styled-components"
import ChipInput from "material-ui-chip-input"
import {Button, Slider} from '@material-ui/core'
import {Typography} from '@material-ui/core'

import { getNoteChips } from "../selectors"
import { addNoteChip, deleteNoteChip, clearNoteChips, setFretCount } from "../actions"

class Controls extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <GridRow>
                    <Button onClick={this.props.clearNoteChips} variant="contained" color="secondary">CLEAR NOTES</Button>
                    <ChipInput
                        value={this.props.noteChips}
                        onAdd={(chip) => this.props.addNoteChip(chip)}
                        onDelete={(chip, index) => this.props.deleteNoteChip(chip, index)}
                        label="Notes"
                    />
                    <Typography id="input-slider" gutterBottom>Test</Typography>
                    <Slider
                        value={0}
                        onChange={() => console.log("Changed!")}
                        aria-labelledby="input-slider"
                    />

                </GridRow>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        noteChips: getNoteChips(state)
    }
}

const mapDispatchToProps = {
    addNoteChip,
    deleteNoteChip,
    clearNoteChips,
    setFretCount,
}

const GridRow = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
`

export default styled(connect(mapStateToProps, mapDispatchToProps)(Controls))`
    margin: 10px;
`
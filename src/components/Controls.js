import React from "react"
import {connect} from 'react-redux'

import styled from "styled-components"
import ChipInput from "material-ui-chip-input"
import {Button, Slider} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import VolumeUp from '@material-ui/icons/VolumeUp';


import { getFretCount, getNoteChips } from "../selectors"
import { addNoteChip, deleteNoteChip, clearNoteChips, setFretCount } from "../actions"
import Typography from "material-ui/styles/typography"

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
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={this.props.fretCount}
                                onChange={(event, newValue) => this.props.setFretCount(newValue)}
                                aria-labelledby="input-slider"
                                min={0}
                                max={24}
                            />
                        </Grid>
                    </Grid>

                </GridRow>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        noteChips: getNoteChips(state),
        fretCount: getFretCount(state)
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
    grid-template-columns: repeat(4, minmax(200px, min-content));//auto auto 200px auto;
    gap: 3rem;
`

export default styled(connect(mapStateToProps, mapDispatchToProps)(Controls))`
    margin: 1rem;
`
import React from 'react';
import * as Mui from '@mui/material';


export const SegmentButton = ({ open, setOpen }) => {
    return (
        <>
            <Mui.Button variant='outlined' style={{ borderRadius: "0px", textTransform: "capitalize" }} onClick={() => setOpen(!open)}>
                Save segment
            </Mui.Button>
        </>
    )
}
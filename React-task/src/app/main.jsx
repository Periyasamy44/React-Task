import React from 'react';
import * as Mui from '@mui/material';
import { SegmentButton } from './component/segment-button';
import { RightDrawer } from './component/drawer';


export const Main = () => {
    const [open, setOpen] = React.useState(false);
    const [nameSegment, setNameSegment] = React.useState('');
    const [state, setState] = React.useState([]);
    const [onSelectValue, setOnSelectValue] = React.useState([]);
    const [select, setSelect] = React.useState([{ "First Name": " first_name" }, { "Last Name": "last_name" }, { Gender: "gender" }, { Age: "age" }, { "Account Name": "account_name" }, { City: "city" }, { State: "state" }])
    const drawerWidth = React.useMemo(() => (open ? 450 : 60), [open]);
    const handleDrawer = () => setOpen(!open);
    const SaveSegment = () => {
        const Result = {
            "segment_name": nameSegment,
            "schema": state
        }
        console.log("result", Result)
    }

    return (
        <>
            <Mui.Grid>
                <Mui.Grid item xs={6}>
                    <SegmentButton open={open} setOpen={setOpen} />
                </Mui.Grid>
                <Mui.Grid item xs={6}>
                    <RightDrawer setNameSegment={setNameSegment} setOnSelectValue={setOnSelectValue} onSelectValue={onSelectValue} state={state} setState={setState} select={select} setSelect={setSelect} drawerWidth={drawerWidth} open={open} handleDrawer={handleDrawer} SaveSegment={SaveSegment} />
                </Mui.Grid>
            </Mui.Grid>
        </>
    )
}
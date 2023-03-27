import React from 'react';
import * as Mui from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import { InputFields } from './inputField';


export const RightDrawer = ({ setNameSegment,onSelectValue, setOnSelectValue, setSelect, select, open, handleDrawer, drawerWidth, SaveSegment, state, setState }) => {
    const anchor = "right"
    return (
        <>
            <Mui.Drawer
                anchor={anchor}
                variant="temporary"
                open={open}
                onClose={handleDrawer}
                PaperProps={{
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "100vh",
                        borderRight: "none",
                        zIndex: (theme) => theme.zIndex.appBar + 1,
                        width: drawerWidth,
                        overflow: "auto",
                        transition: "ease 0.5s",
                        color: "#FFFFFF",
                    },
                }}
            >
                <Mui.List sx={{ pt: 0, bgcolor: "#4EE2EC" }}>
                    <Mui.ListItem sx={{ p: 1 }}>
                        <>
                            <Mui.IconButton
                                onClick={handleDrawer}
                                sx={{ alignItems: "center" }}
                            >
                                {open !== true ? (
                                    <MuiIcons.KeyboardDoubleArrowRight sx={{ color: "#FFFFFF" }} />
                                ) : (
                                    <MuiIcons.KeyboardDoubleArrowLeft sx={{ color: "#FFFFFF" }} />
                                )}
                            </Mui.IconButton>
                            <Mui.Typography variant="body1" color="#FFFFFF">Saving Segment</Mui.Typography>
                        </>

                    </Mui.ListItem>
                </Mui.List>
                <Mui.List>
                    <Mui.ListItem>
                        <Mui.ListItemText>
                            <Mui.Typography color="#000">Enter the Name of the Segment</Mui.Typography>
                        </Mui.ListItemText>
                    </Mui.ListItem>
                    <Mui.ListItem>
                        <Mui.TextField placeholder='Name of the segment' onChange={(e) => setNameSegment(e.target.value)} size='small' fullWidth />
                    </Mui.ListItem>
                    <Mui.ListItem>
                        <Mui.ListItemText>
                            <Mui.Typography color="#000">To save your segment, you need to add the schemas to build the query</Mui.Typography>
                        </Mui.ListItemText>
                    </Mui.ListItem>
                </Mui.List>
                <Mui.List component={Mui.Stack} justifyContent="end" sx={{ p: 2 }}>
                    <Mui.Grid container>
                        <Mui.Grid item xs={4}></Mui.Grid>
                        <Mui.Grid item xs={8}>
                            <Mui.Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Mui.Box sx={{ bgcolor: "lightgreen", borderRadius: "30px", height: "8px", width: "8px" }} />
                                <Mui.Typography color="#000" variant='caption'>- User Traits</Mui.Typography>
                                <Mui.Box sx={{ bgcolor: "pink", borderRadius: "30px", height: "8px", width: "8px" }} />
                                <Mui.Typography color="#000" variant='caption'>- Group Traits</Mui.Typography>
                            </Mui.Box>
                        </Mui.Grid>
                    </Mui.Grid>
                </Mui.List>
                <Mui.List>
                    <InputFields setOnSelectValue={setOnSelectValue} onSelectValue={onSelectValue} setSelect={setSelect} select={select} state={state} setState={setState} />
                </Mui.List>
                <Mui.Box flexGrow={1} />
                <Mui.List sx={{ pt: 0, bgcolor: "#f4f5f4" }}>
                    <Mui.ListItem >
                        <Mui.Button sx={{ textTransform: "capitalize", bgcolor: "#009688", color: "white" }} onClick={SaveSegment}>Save the segment</Mui.Button>
                        <Mui.Button sx={{ textTransform: "capitalize", bgcolor: "white", color: "#000", ml: 2 }}>Cancel</Mui.Button>
                    </Mui.ListItem>
                </Mui.List>
            </Mui.Drawer>
        </>
    )
}
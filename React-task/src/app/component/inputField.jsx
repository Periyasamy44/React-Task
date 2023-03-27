import React from 'react';
import * as Mui from '@mui/material';


export const InputFields = ({ onSelectValue, state, setState, select, setOnSelectValue }) => {
    const deleteField = (arr, rmIndex) => {
        let i = 0;
        return arr.map((obj, index) => {
            const values = Object.entries(obj);
            if (rmIndex === index) {
                i = i + 1;
            } else {
                return Object.assign({}, ...values.map((value) => ({ [`${value[0]?.replace(/\d/g, "")}`]: value[1] })))
            }
        }).filter(Boolean)
    }
    const hanldeDelete = (index) => {
        setState((pre) => deleteField(pre, index))
    }
    return (
        <>
            <Mui.Box sx={{ m: 1, p: 2, border: state.length !== 0 ? "2px solid lightblue" : "" }}>{
                [...new Set(state)].map((item, index) => {
                    return (
                        <Mui.Box p={.5} mt={1} component={Mui.Stack} direction="row" justifyContent="space-between" >
                            <Mui.TextField placeholder='' size='small' fullWidth value={Object.keys(item).toString()} />
                            <button
                                style={{
                                    padding: "8px",
                                    color: "blue",
                                    marginLeft: "10px",
                                    border: "none",
                                    backgroundColor: "#f4f5f4",
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                }}
                                onClick={() => hanldeDelete(index)}
                            >
                                <div style={{ borderBottom: "4px solid #009688", width: "3vw", color: "blue", borderRadius: "2px" }} />
                            </button>
                        </Mui.Box>
                    )
                })}
            </Mui.Box>
            <AddNewSchema state={state} setOnSelectValue={setOnSelectValue} onSelectValue={onSelectValue} setState={setState} select={select} />
        </>
    )
}




export const AddNewSchema = ({ setOnSelectValue, onSelectValue, state, setState, select }) => {
    const handleClick = () => {
        if (onSelectValue.length==0) {
            console.log()
        }else{
            setState([...state, onSelectValue]);
            setOnSelectValue([])
        }
    };

    const handleChange = (e, newValue) => {
        setOnSelectValue(e.target.value)
    }

    return (
        <>
            <div style={{ padding: "20px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "10px"
                    }}
                >
                    <Mui.Select fullWidth size="small"  onChange={handleChange} value={onSelectValue} >{
                        select?.map((item, index) => {
                            return (
                                <Mui.MenuItem value={item}
                                    disabled={state.find((ele) => Object.keys(ele).toString() === Object.keys(item).toString())}
                                >
                                    {Object.keys(item).toString()}
                                </Mui.MenuItem>
                            )
                        })}

                    </Mui.Select>
                    <button
                        style={{
                            padding: "8px",
                            color: "blue",
                            marginLeft: "10px",
                            border: "none",
                            backgroundColor: "#f4f5f4",
                            fontSize: "15px",
                            fontWeight: "bold"
                        }}
                    // onClick={() => hanldeDelete(optionIndex)}
                    >
                        <div style={{ borderBottom: "4px solid #009688", width: "3vw", color: "blue", borderRadius: "2px" }} />
                    </button>
                </div>
            </div>
            <Mui.Typography
                onClick={handleClick}
                style={{
                    cursor: "pointer",
                    padding: "20px",
                    color: "green",
                    marginTop: "10px",
                    border: "none",
                    backgroundColor: "white",
                    textDecoration: "underline",
                    fontSize: "15px",
                    fontWeight: "bold"
                }}
            >
                +  Add new schema
            </Mui.Typography>
        </>
    );
}

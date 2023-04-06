import React from 'react';
import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) => {
const s1={
    "name":"Ithish",
    "class":"3rd BCA"
}
const[state,setState]=useState(s1);
const update = () => {
    setTimeout(() => {
        setState({
            "name":"karthik",
            "class":"2nd BCA"
        })
    }, 1000);
}
 return(
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
 )
}

export default NoteState;

import { useState } from "react";
import AppInput from "../../../shared/components/input-control";
import AppButton from "../../../shared/components/button";
import './todo-edit.css';

export default function TodoEdit({
    cb, 
    todo,
}){
    const [state, setState] = useState(todo);

    function setProperty(e){
        const newState = {...state};
        newState[e.target.name] = e.target.value;
        setState(newState);
    }
    return (
        <div className="edit-container"> 
            <AppInput 
                placeholder='Title' 
                name={'title'}
                value={state.title} 
                onChange={setProperty}
            ></AppInput>
            <AppInput 
                placeholder='Body' 
                name={'body'}
                value={state.body} 
                onChange={setProperty}
            ></AppInput>
            <AppButton cb={() => cb(state)}>Edit</AppButton>
        </div>
    )
}
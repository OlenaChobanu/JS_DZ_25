import { useState } from "react";
import './header-styles.css';
import AppButton from '../../../shared/components/button';
import AppInput from '../../../shared/components/input-control';

export default function AppHeader({
    cb, 
    user = {title: '', body: '', isComplete: 'false'},
    
}){
    const [state, setState] = useState(user);

    function setProperty(e){
        const newState = {...state};
        newState[e.target.name] = e.target.value;
        setState(newState);
    }

    return (<div className='app-header'>
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
        <AppButton cb={() => cb(state)}>Create</AppButton>
        </div>)
}
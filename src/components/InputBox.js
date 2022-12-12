import './Input.css';
import InputForm from "./forms/input";
import Dropdown from "./forms/dropdown";
//import CheckBox from "./forms/checkbox";
import ancestries from "../constants/ancestries";
import equipment from "../constants/equipment";
import experience from "../constants/experience";
import type from "../constants/type";
import size from '../constants/size';
import races from '../constants/races';
import { useRef } from "react";

const InputBox = ({onMod}) => {

    const nameRef = useRef();
    const commandRef = useRef();
    const ancestRef = useRef();
    const typeRef = useRef();
    const expRef = useRef();
    const equipRef = useRef();
    const raceRef = useRef();
    const sizeRef = useRef();
    //const traitRef = [];

    const onSave = () => {
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: expRef.current.value,
            equip: equipRef.current.value,
            race: raceRef.current.value,
            size: sizeRef.current.value,
            //traits: traitRef.current.value
        }
        //console.log(body);
        onMod(body)
    }

    return (
        <>
        <div className='input-columns'>
        <InputForm
            label="Name"
            ref={nameRef}
            //onChange={onSave}
            />
        <InputForm
            label="Commander"
            ref={commandRef}
            //onChange={onSave}
            />
        <Dropdown
            label="Ancestry Icon"
            ref={ancestRef}
            passedValue={"Human"} 
            passedOptions={ancestries}
            onChange={onSave}/>
        <Dropdown
            label="Race"
            ref={raceRef}
            passedValue={"Human"} 
            passedOptions={races}
            onChange={onSave}/>
        <Dropdown
            label="Type"
            ref={typeRef}
            passedValue={"levy"} 
            passedOptions={type}
            onChange={onSave}
            />
        <Dropdown
            label="Experience"
            ref={expRef}
            passedValue={1} 
            passedOptions={experience}
            onChange={onSave}/>
        <Dropdown
            label="Equipment"
            ref={equipRef}
            passedValue={0} 
            passedOptions={equipment}
            onChange={onSave}/>
        <Dropdown
            label="Size"
            ref={sizeRef}
            passedValue={6} 
            passedOptions={size}
            onChange={onSave}/>
        Card Theme:
        </div>
        </>
    )
}

export default InputBox;
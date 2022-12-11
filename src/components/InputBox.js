import './Input.css';
import InputForm from "./forms/input";
import Dropdown from "./forms/dropdown";
import CheckBox from "./forms/checkbox";
import ancestries from "../constants/ancestries";
import equipment from "../constants/equipment";
import experience from "../constants/experience";
import type from "../constants/type";
import { useRef, useState } from "react";

function InputBox() {
    const [ancestryOverride, setAncestryOverride] = useState();

    const nameRef = useRef();
    const commandRef = useRef();
    const ancestRef = useRef();
    const typeRef = useRef();
    const expRef = useRef();
    const equipRef = useRef();
    const ancestOverrideRef = useRef();
    const raceRef = useRef();

    const onSave = () => {
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: expRef.current.value,
            equip: equipRef.current.value,
            race: ancestOverrideRef.current.checked ? raceRef.current.value : null,
        }
        console.log(body);
    }

    function overrideAncestor() {
        setAncestryOverride(ancestOverrideRef.current.checked);
        //console.log(ancestryOverride);
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
            label="Ancestry"
            ref={ancestRef}
            passedValue={"Human"} 
            passedOptions={ancestries}
            onChange={onSave}/>
        <CheckBox
            label="Ancestry Override"
            ref={ancestOverrideRef}
            onChange={overrideAncestor}/>
        {ancestryOverride && (
            <InputForm
                label="Unit Race"
                ref={raceRef}
                passedValue={""} 
                //onChange={onSave}
                />
        )}
        <Dropdown
            label="Type"
            ref={typeRef}
            passedValue={"levy"} 
            passedOptions={type}
            onChange={onSave}/>
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
        Card Theme:
        </div>
        </>
    )
}

export default InputBox;
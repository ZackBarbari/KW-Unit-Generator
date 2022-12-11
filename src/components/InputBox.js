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

        <InputForm
            label="Name"
            ref={nameRef}
            //value = {this.state.value}
            //onChange={onSave}
            />
        <InputForm
            label="Commander"
            ref={commandRef}
            //value = {this.state.value}
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
                //value = {this.state.value}
                //onChange={onSave}
                />
        )}
        <Dropdown
            label="Type"
            ref={typeRef}
            passedValue={0} 
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
        </>
    )
}

export default InputBox;
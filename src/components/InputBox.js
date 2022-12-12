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
import { useRef, useState } from "react";
import defaults from '../constants/defaults';
import ancestryassociation from '../constants/ancestryassociation';
import racialtraits from '../constants/racialtraits';
import traitMap from '../constants/traitList';
import SelectiveDropdown from './forms/racedropdown';

const InputBox = ({onMod}) => {
    const [isLevy, setLevy] = useState(false);
    const [ancest, setAncest] = useState(defaults.ancestry);

    const nameRef = useRef(defaults.name);
    const commandRef = useRef();
    const ancestRef = useRef(defaults.ancestry);
    const typeRef = useRef(defaults.type);
    const expRef = useRef(defaults.exp);
    const equipRef = useRef(defaults.equip);
    const raceRef = useRef(defaults.race);
    const sizeRef = useRef(defaults.size);

    const onSave = () => {
        console.log(racialtraits)
        /*for (var i = 0; i < racialtraits.get(raceRef.current.value).traits.length; i++) {
            console.log(traitMap[racialtraits.get(raceRef.current.value).traits[i]])
        }*/
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'levy' ? 0 : expRef.current.value,
            equip: typeRef.current.value === 'levy' ? 0 : equipRef.current.value,
            race: raceRef.current.value.name,
            //race: ancestryassociation[ancest][raceRef.current.value],
            size: raceRef.current.value.size,
            //traits: traitRef.current.value
        }
        console.log(body)
        onMod(body)
    }

    function changeLevy() {
        setLevy(typeRef.current.value === 'levy');
    }

    function changeAncestry() {
        setAncest(ancestRef.current.value);
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
            passedValue={defaults.ancestry} 
            passedOptions={ancestries}
            onChange={changeAncestry}
            />
        <SelectiveDropdown
            label="Race"
            ref={raceRef}
            passedValue={1} 
            passedOptions={races}
            //passedOptions={ancestryassociation[ancest]}
            //onChange={onSave}
            />
        <Dropdown
            label="Type"
            ref={typeRef}
            passedValue={defaults.unit} 
            passedOptions={type}
            onChange={changeLevy}
            />
        {!isLevy && (
            <>
        <Dropdown
            label="Experience"
            ref={expRef}
            passedValue={defaults.exp} 
            passedOptions={experience}
            //onChange={onSave}
            />
        <Dropdown
            label="Equipment"
            ref={equipRef}
            passedValue={defaults.equip} 
            passedOptions={equipment}
           //onChange={onSave}
            />
            </>
            )}        
            Card Theme:
            <br></br>
        <input
        type ="submit"
        value="Generate"
        onClick={onSave}
        />
        </div>
        </>
    )
}

export default InputBox;
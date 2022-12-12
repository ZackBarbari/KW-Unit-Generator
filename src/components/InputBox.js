import './Input.css';
import InputForm from "./forms/input";
import Dropdown from "./forms/dropdown";
//import CheckBox from "./forms/checkbox";
import ancestries from "../constants/ancestries";
import equipment from "../constants/statics/equipment";
import experience from "../constants/experience";
import type from "../constants/statics/type";
import races from '../constants/races';
import { useRef, useState } from "react";
import defaults from '../constants/statics/defaults';
import SelectiveDropdown from './forms/racedropdown';
import traits from '../constants/traits';
import raceMap from '../constants/raceMap';
import traitMap from '../constants/traitMap';

const InputBox = ({onMod}) => {
    const [isLevy, setLevy] = useState(false);
    const [ancest, setAncest] = useState(defaults.ancestry);
    const [race, setRace] = useState(defaults.race);

    const nameRef = useRef(defaults.name);
    const commandRef = useRef();
    const ancestRef = useRef(defaults.ancestry);
    const typeRef = useRef(defaults.type);
    const expRef = useRef(defaults.exp);
    const equipRef = useRef(defaults.equip);
    const raceRef = useRef(defaults.race);
    const traitRef = useRef();

    const onSave = () => {
        //console.log(racialtraits)
        /*for (var i = 0; i < racialtraits.get(raceRef.current.value).traits.length; i++) {
            console.log(traitMap[racialtraits.get(raceRef.current.value).traits[i]])
        }*/
        //console.log(raceRef.current.value)
        var traitList = [];
        for (var i = 0; i < raceMap.get(raceRef.current.value).traits.length; i++) {
            //console.log(traitMap.get(raceMap.get(raceRef.current.value).traits[i].toString()).name)
            traitList[i] = traitMap.get(raceMap.get(raceRef.current.value).traits[i].toString()).name;
        }

        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'levy' ? 0 : expRef.current.value,
            equip: typeRef.current.value === 'levy' ? 0 : equipRef.current.value,
            race: raceMap.get(raceRef.current.value).name,
            //race: ancestryassociation[ancest][raceRef.current.value],
            size: raceMap.get(raceRef.current.value).size,
            traits: traitList
        }
        //console.log(raceMap.get(raceRef.current.value).traits.length)
        
        //raceMap.get(raceRef.current.value).traits.forEach(console.log("opopo"));
        //console.log(traits[4, 7].name)
        console.log(body)
        onMod(body)
    }

    function changeLevy() {
        setLevy(typeRef.current.value === 'levy');
    }

    function changeAncestry() {
        setAncest(ancestRef.current.value);
    }

    function changeRace() {
        setRace(raceMap.get(raceRef.current.value).name)
    }

    return (
        <>
        <div className='input-columns'>
        <InputForm
            label="Name"
            ref={nameRef}
            passedValue={defaults.name}
            //onChange={onSave}
            />
        <InputForm
            label="Commander"
            ref={commandRef}
            passedValue={defaults.commander}
            //onChange={onSave}
            />
        <SelectiveDropdown
            label="Ancestry"
            ref={ancestRef}
            passedValue={defaults.ancestry} 
            passedOptions={ancestries}
            onChange={changeAncestry}
            />
        <SelectiveDropdown
            label="Race"
            ref={raceRef}
            passedValue={raceMap.get(defaults.race).name} 
            passedOptions={races}
            //passedOptions={ancestryassociation[ancest]}
            onChange={changeRace}
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
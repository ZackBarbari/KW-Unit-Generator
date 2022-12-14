import './Input.css';
import InputForm from "./forms/input";
import Dropdown from "./forms/dropdown";
import ancestries from "../constants/ancestries";
import equipment from "../constants/statics/equipment";
import experience from "../constants/experience";
import type from "../constants/statics/type";
import races from '../constants/races';
import traits from '../constants/traits';
import { useRef, useState } from "react";
import defaults from '../constants/statics/defaults';
import SelectiveDropdown from './forms/racedropdown';
import raceMap from '../constants/raceMap';
import traitMap from '../constants/traitMap';

const InputBox = ({onMod}) => {
    const [isLevy, setLevy] = useState(false);
    const [race, setRace] = useState(defaults.race);
    const [traitList, setTraitList] = useState(defaults.traits);

    const nameRef = useRef(defaults.name);
    const commandRef = useRef();
    const ancestRef = useRef(defaults.ancestry);
    const typeRef = useRef(defaults.type);
    const expRef = useRef(defaults.exp);
    const equipRef = useRef(defaults.equip);
    const raceRef = useRef(defaults.race);
    const traitRef = useRef();
    var list = [];

    //console.log(raceMap.get("Human").traits)
    //traitList.map((trait) => console.log(`${trait.name} ${trait.description}`))


    const onSave = () => {
        //console.log(raceMap.get(raceRef.current.value).name, traitList)
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'levy' ? 0 : expRef.current.value,
            equip: typeRef.current.value === 'levy' ? 0 : equipRef.current.value,
            race: raceMap.get(raceRef.current.value).name,
            size: raceMap.get(raceRef.current.value).size,
            traits: list
        }
        //console.log(body)
        onMod(body)
    }

    function changeLevy() {
        setLevy(typeRef.current.value === 'levy');
        onSave();
    }

    function changeRace() {
        setRace(raceMap.get(raceRef.current.value).name);
        for (var i = 0; i < raceMap.get(raceRef.current.value).traits.length; i++) {
            list[i] = traitMap.get(raceMap.get(raceRef.current.value).traits[i].toString());
        }
        //console.log(raceMap.get(raceRef.current.value).traits)
        setTraitList(list);
        onSave();
    }

    return (
        <div className='section-box'>
        <div className='basic-box'>
        <InputForm
            label="Name"
            ref={nameRef}
            passedValue={defaults.name}
            onChange={onSave}
            />
        <InputForm
            label="Commander"
            ref={commandRef}
            passedValue={defaults.commander}
            onChange={onSave}
            />
        <SelectiveDropdown
            label="Ancestry"
            ref={ancestRef}
            passedValue={defaults.ancestry} 
            passedOptions={ancestries}
            onChange={onSave}
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
        <Dropdown
            label="Experience"
            ref={expRef}
            passedValue={defaults.exp} 
            passedOptions={experience}
            invalid={isLevy}
            onChange={onSave}
            />
        <SelectiveDropdown
            label="Equipment"
            ref={equipRef}
            passedValue={defaults.equip} 
            passedOptions={equipment}
            invalid={isLevy}
            onChange={onSave}
            />      
            Card Theme:
            <br></br>
        </div>
        <div className='trait-box'>
        {race && (
            traitList.map((trait) => (<div><br></br>{trait.name} {trait.description}</div>))
        )}
        <SelectiveDropdown
            label="Add Trait"
            ref={traitRef} 
            passedOptions={traits}
            invalid={traitList.length >= 4}
            onChange={onSave}
            />  
        </div>
        {raceRef.current.value === "Other" && (
            'INPUT YOUR OWN RACIAL VALUES'
        )}
        </div>
    )
}

export default InputBox;
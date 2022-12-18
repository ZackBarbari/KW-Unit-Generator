import './Input.css';
import InputForm from "./forms/input";
import GenericDropdown from "./forms/genericdropdown";
import {ancestries, ancestMap} from "../constants/ancestries";
import equipment from "../constants/statics/equipment";
import experience from "../constants/experience";
import type from "../constants/statics/type";
import {races, raceMap} from '../constants/races';
import {traits, traitMap} from '../constants/traits';
import { useRef, useState } from "react";
import defaults from '../constants/statics/defaults';
import ArrayReadingDropdown from './forms/arrayreadingdropdown';
import SelectiveDropdown from './forms/selectivedropdown';

const InputBox = ({onMod}) => {
    const [isLevy, setLevy] = useState(false);
    const [race, setRace] = useState(raceMap.get(defaults.race));
    const [traitList, setTraitList] = useState(defaults.traits);
    const [ancest, setAncest] = useState(defaults.ancestry);

    const nameRef = useRef(defaults.name);
    const commandRef = useRef();
    const ancestRef = useRef(defaults.ancestry);
    const typeRef = useRef(defaults.type);
    const expRef = useRef(defaults.exp);
    const equipRef = useRef(defaults.equip);
    const raceRef = useRef(defaults.race);
    const traitRef = useRef();
    var list = [];
    var marker = false;

    const onSave = () => {
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'levy' ? 0 : expRef.current.value,
            equip: typeRef.current.value === 'levy' ? 0 : equipRef.current.value,
            race: marker ? (raceMap.get(raceRef.current.value)).name : defaults.changedRace,
            size: marker ? (raceMap.get(raceRef.current.value)).size : defaults.size,
            traits: list.length === 0 ? traitList : list
        }
        marker = false;
        onMod(body)
    }

    function changeLevy() {
        setLevy(typeRef.current.value === 'levy');
        onSave();
    }

    function changeRace() {
        setRace(raceMap.get(raceRef.current.value))
        for (var i = 0; i < raceMap.get(raceRef.current.value).traits.length; i++) {
            list[i] = traitMap.get(raceMap.get(raceRef.current.value).traits[i].toString());
        }
        marker = true;
        setTraitList(list);
        onSave();
    }

    function changeAncestry() {
        setAncest(ancestRef.current.value);
        setRace(raceMap.get(defaults.changedRace));
        list[0] = traitMap.get(raceMap.get(defaults.changedRace).traits[0].toString());
        setTraitList(list);
        onSave();
    }

    const onDelete = (currentTrait) => {
        console.log("BAD", currentTrait)
        for (var i = 0; i < traitList.length; i++) {
            //console.log(traitList[i])
            if (traitList[i] !== currentTrait) {
                //console.log("SHOULD BE GOOD")
                list.push(traitList[i])
            }
            setTraitList(list);
            onSave();
        }
    }

    function addTrait() {
        for (var i = 0; i < traitList.length; i++) {
            list.push(traitList[i])
            //console.log(traitList[i])
        }
        if (list[0].name !== "None.") {
            list.push(traitMap.get(traitRef.current.value.toString()));
        } else {
            list = [traitMap.get(traitRef.current.value.toString())]
        }
        
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
        <ArrayReadingDropdown
            label="Ancestry"
            ref={ancestRef}
            passedValue={defaults.ancestry} 
            passedOptions={ancestries}
            onChange={changeAncestry}
            />
        { ancest && (
            <SelectiveDropdown
            label="Race"
            ref={raceRef}
            passedValue={raceMap.get(defaults.race).name}
            passedOptions={ancestMap.get(ancest).races}
            onChange={changeRace}
            />
        )}
        <GenericDropdown
            label="Type"
            ref={typeRef}
            passedValue={defaults.unit} 
            passedOptions={type}
            onChange={changeLevy}
            />
        <GenericDropdown
            label="Experience"
            ref={expRef}
            passedValue={defaults.exp} 
            passedOptions={experience}
            invalid={isLevy}
            onChange={onSave}
            />
        <GenericDropdown
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
            traitList.map((trait) => (<div><br></br>{trait.name} {trait.description} <input type="button" value="Delete" onClick={() =>onDelete(trait)}></input></div>))
        )}
        <ArrayReadingDropdown
            label="Add Trait"
            ref={traitRef} 
            passedOptions={traits}
            invalid={traitList.length >= 4}
            excludedItems={traitList}
            />  
        {traitList.length < 4 && (
            <input
            type ="submit"
            value="Add Trait"
            onClick={addTrait}
            />
        )}
        </div>
        {raceRef.current.value === "Other" && (
            'INPUT YOUR OWN RACIAL VALUES'
        )}
        </div>
    )
}

export default InputBox;
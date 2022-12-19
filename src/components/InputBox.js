import './Input.css';
import InputForm from "./forms/input";
import GenericDropdown from "./forms/genericdropdown";
import {ancestries, ancestMap} from "../constants/ancestries";
import equipment from "../constants/statics/equipment";
import {experience, expMap} from "../constants/statics/experience";
import type from "../constants/statics/type";
import tiers from '../constants/statics/tiers';
import sizes from "../constants/statics/sizes"
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
    const tierRef = useRef(defaults.tier);
    const customRaceRef = useRef("");
    const customSizeRef = useRef(defaults.size);
    var list = [];
    var marker = false;

    const onSave = () => {
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'Levy' ? 'Green' : expRef.current.value,
            equip: typeRef.current.value === 'Levy' ? 'Light' : equipRef.current.value,
            race: (marker ? (raceMap.get(raceRef.current.value)).name : defaults.changedRace) === 'Other' ? customRaceRef.current.value : (raceMap.get(raceRef.current.value)).name,
            size: (marker ? (raceMap.get(raceRef.current.value)).name : defaults.changedRace) === 'Other' ? customSizeRef.current.value : (raceMap.get(raceRef.current.value)).size,
            tier: typeRef.current.value === 'Levy' ? "I" :tierRef.current.value,
            traits: list.length === 0 ? traitList : list
    
        }
        marker = false;
        onMod(body)
    }

    function changeLevy() {
        setLevy(typeRef.current.value === 'Levy');
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
        for (var i = 0; i < traitList.length; i++) {
            if (traitList[i] !== currentTrait) {
                list.push(traitList[i])
            }
        }
        if (traitList.length <= 1) {
            list.push(traitMap.get('109'));
        }
        setTraitList(list);
        onSave();
    }

    function addTrait() {
        for (var i = 0; i < traitList.length; i++) {
            list.push(traitList[i])
            //console.log(traitList[i])
        }
        if (list[0]?.name !== "None.") {
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
        { (race.name === "Other") && (
            <>
            <InputForm
            label="Custom Race Name"
            ref={customRaceRef}
            onChange={onSave}
            />
            <GenericDropdown
            label="Custom Race Size"
            ref={customSizeRef}
            passedValue={defaults.size} 
            passedOptions={sizes}
            onChange={onSave}
            />
            </>
        )}
        <GenericDropdown
            label="Type"
            ref={typeRef}
            passedValue={defaults.unit} 
            passedOptions={type}
            onChange={changeLevy}
            />
        <ArrayReadingDropdown
            label="Experience"
            ref={expRef}
            passedValue={defaults.exp} 
            passedOptions={experience}
            invalid={isLevy}
            excludedItems={[expMap.get('0')]}
            onChange={onSave}
            />
        <ArrayReadingDropdown
            label="Equipment"
            ref={equipRef}
            passedValue={defaults.equip} 
            passedOptions={equipment}
            invalid={isLevy}
            onChange={onSave}
            />      
            <GenericDropdown
            label="Tier"
            ref={tierRef}
            passedValue={defaults.tier} 
            passedOptions={tiers}
            invalid={isLevy}
            onChange={changeLevy}
            />
            Card Theme:
            <br></br>
        </div>
        <div className='trait-box'>
        {race && (
            traitList.map((trait) => (<div><br></br>{trait.name} {trait.description} {trait.name !== 'None.' ? <input type="button" value="Delete" onClick={() =>onDelete(trait)} />: null}</div>))
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
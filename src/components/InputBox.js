import './Input.css';
import InputForm from "./forms/input";
import GenericDropdown from "./forms/genericdropdown";
import ArrayReadingDropdown from './forms/arrayreadingdropdown';
import SelectiveDropdown from './forms/selectivedropdown';
import NumberInput from './forms/number';
import { ancestries, ancestMap } from "../constants/ancestries";
import { equipment, equipMap } from "../constants/statics/equipment"
import { experience, expMap } from "../constants/statics/experience";
import type from "../constants/statics/type";
import tiers from '../constants/statics/tiers';
import sizes from "../constants/statics/sizes"
import { races, raceMap } from '../constants/races';
import {traits, traitMap} from '../constants/traits';
import { useRef, useState } from "react";
import defaults from '../constants/statics/defaults';
import CheckBox from './forms/checkbox';

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
    const numRef = useRef('0')
    const atkRef = useRef('0')
    const defRef = useRef('0')
    const powRef = useRef('0')
    const touRef = useRef('0')
    const dmgRef = useRef('0')
    const morRef = useRef('0')
    const comRef = useRef('0')
    const cultureGroupOverrideRef = useRef(0)
    var list = [];
    var marker = true;

    const onSave = (event) => {
        var expMapForCurrent
        var equipMapForCurrent
        var raceMapForCurrent = marker ? (raceMap.get(raceRef.current.value)).modifiers : raceMap.get(defaults.changedRace).modifiers

        switch (typeRef.current.value) {
            case ("Infantry"):
                expMapForCurrent = expMap.get(expRef.current.value).modifierInfantry
                equipMapForCurrent = equipMap.get(equipRef.current.value).modifierInfantry
                break;
            case ("Cavalry"):
                expMapForCurrent = expMap.get(expRef.current.value).modifierCavalry
                equipMapForCurrent = equipMap.get(equipRef.current.value).modifierCavalry
                break;
            case ("Levy"):
                expMapForCurrent = expMap.get('0').modifierInfantry
                equipMapForCurrent = equipMap.get('0').modifierInfantry
                break;
            case ("Aerial"): 
                expMapForCurrent = expMap.get(expRef.current.value).modifierAerial
                equipMapForCurrent = equipMap.get(equipRef.current.value).modifierAerial
                break;
            default:
                expMapForCurrent = expMap.get(expRef.current.value).modifierArtillery
                equipMapForCurrent = equipMap.get(equipRef.current.value).modifierArtillery
                break;
        }

        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'Levy' ? expMap.get('0') : expMap.get(expRef.current.value),
            equip: typeRef.current.value === 'Levy' ? equipMap.get('0') : equipMap.get(equipRef.current.value),
            race: (marker ? (raceMap.get(raceRef.current.value)).name : defaults.changedRace) === 'Other' ? (customRaceRef.current !== null ? customRaceRef.current.value : "") : (raceMap.get(raceRef.current.value)).name,
            size: (marker ? (raceMap.get(raceRef.current.value)).name : defaults.changedRace) === 'Other' ? (customSizeRef.current !== null ? customSizeRef.current.value : 6) : (raceMap.get(raceRef.current.value)).size,
            tier: typeRef.current.value === 'Levy' ? "I" : tierRef.current.value,
            traits: list.length === 0 ? traitList : list,
            abilityScores: 
                [
                Number(numRef.current.value) + Number(expMapForCurrent[0]), 
                Number(atkRef.current.value) + Number(expMapForCurrent[1] + Number(raceMapForCurrent[0])), 
                Number(defRef.current.value) + Number(expMapForCurrent[2] + Number(raceMapForCurrent[1])), 
                Number(powRef.current.value) + Number(equipMapForCurrent[0] + Number(raceMapForCurrent[2])), 
                Number(touRef.current.value) + Number(equipMapForCurrent[1] + Number(raceMapForCurrent[3])), 
                Number(dmgRef.current.value) + Number(equipMapForCurrent[2]), 
                Number(morRef.current.value) + Number(expMapForCurrent[3] + Number(raceMapForCurrent[4])), 
                Number(comRef.current.value) + Number(expMapForCurrent[4] + Number(raceMapForCurrent[5]))
                ]
        }
        marker = true;
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
        setTraitList(list);
        onSave();
    }

    function changeAncestry() {
        setAncest(ancestRef.current.value);
        setRace(raceMap.get(defaults.changedRace));
        list[0] = traitMap.get(raceMap.get(defaults.changedRace).traits[0].toString());
        setTraitList(list);
        marker = false;
        onSave();
    }

    function overrideCulture() {
        console.log(cultureGroupOverrideRef.current.value)
        onSave()
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
                passedValue={defaults.exp.name} 
                passedOptions={experience}
                invalid={isLevy}
                excludedItems={[expMap.get('0')]}
                onChange={onSave}
                />
            <ArrayReadingDropdown
                label="Equipment"
                ref={equipRef}
                passedValue={defaults.equip.name} 
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
            <div className='trait-box'>
                <NumberInput 
                label="Attack Number Modifier"
                ref={numRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Attack Modifier"
                ref={atkRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Power Modifier"
                ref={powRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Toughness Modifier"
                ref={touRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Defense Modifier"
                ref={defRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Damage Modifier"
                ref={dmgRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Morale Modifier"
                ref={morRef}
                passedValue={'0'}
                onChange={onSave}
                />
                <NumberInput 
                label="Command Modifier"
                ref={comRef}
                passedValue={'0'}
                onChange={onSave}
                />
            </div>
        </div>
    )
}

export default InputBox;
import { traitMap } from "../traits";
import { raceMap} from "../races";
import { expMap } from "./experience";
import { equipMap } from './equipment';

const defaults = {
    name: "Human Infantry", 
    commander:"",
    ancestry: "Human",
    unit: "Infantry",
    exp: expMap.get('1'),
    equip: equipMap.get('0'),
    race: "Human",
    size: 6,
    traits: [traitMap.get(raceMap.get("Human").traits.toString())],
    changedRace: "Other",
    tier: "I",
    abilityScores: ['1', '3', '12', '2', '12', '1', '1', '2']
  };
  
  export default defaults;
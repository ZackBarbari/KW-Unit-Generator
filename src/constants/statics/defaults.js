import {traitMap} from "../traits";
import {raceMap} from "../races";

const defaults = {
    name: "Human Infantry", 
    commander:"",
    ancestry: "Human",
    unit: "infantry",
    exp: 1,
    equip: 0,
    race: "Human",
    size: 6,
    traits: [traitMap.get(raceMap.get("Human").traits.toString())],
    changedRace: "Other"
  };
  
  export default defaults;
import races from "./races";

let raceMap = new Map();
Object.keys(races).forEach(key => {
  raceMap.set(key, races[key]);
});

export default raceMap;
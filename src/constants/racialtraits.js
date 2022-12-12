import races from "./races";


let traitMap = new Map();
let traitList = [
    
    {
    race: races.Human,
    size: 6,
    traits: [1]
    },
    {
    race: races.Elf,
    size: 6,
    traits: [107, 44]
    }
]
Object.keys(traitList).forEach(race => {
    console.log(traitList)
    traitMap.set(traitList, traitList[race]);
  });

  traitMap.set(races.Human, { size: 6, traits: [1], });

export default traitMap;
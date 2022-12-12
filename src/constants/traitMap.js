import traits from "./traits";

let traitMap = new Map();
Object.keys(traits).forEach(key => {
    traitMap.set(key, traits[key]);
});

export default traitMap;
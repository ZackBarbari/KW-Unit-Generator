//Modifiers applied with schema +[POW, TOU, DAM]

const equipment = {
  0: {
    name: "Light",
    modifierInfantry: [0, 0, 0],
    modifierOffFielders: [0, 0, 0],
    modifierArtillery: [0, 0, 0],
  },
  1: {
    name: "Medium",
    modifierInfantry: [2, 2, 0],
    modifierOffFielders: [1, 1, 0],
    modifierArtillery: [1, 1, 0],
  },
  2: {
    name: "Heavy",
    modifierInfantry: [4, 4, 0],
    modifierOffFielders: [2, 2, 0],
    modifierArtillery: [2, 2, 0],
  },
  3: {
    name: "Super-heavy",
    modifierInfantry: [6, 6, 1],
    modifierOffFielders: [3, 3, 1],
    modifierArtillery: [3, 3, 0],
  },
  };
  
  let equipMap = new Map();
  Object.keys(equipment).forEach(key => {
    equipMap.set(key, equipment[key]);
  });
  
  
  export {equipment, equipMap};
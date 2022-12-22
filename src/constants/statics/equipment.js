//Modifiers applied with schema +[POW, TOU, DAM], based off of a modified chart that I found to be more accurate at https://www.reddit.com/r/mattcolville/comments/orx0hd/comment/h6tgvey/?utm_source=share&utm_medium=web2x&context=3

const equipment = {
  0: {
    name: "Light",
    modifierInfantry: [2, 12, 1],
    modifierCavalry: [3, 10, 2],
    modifierAerial: [2, 8, 1],
    modifierArtillery: [2, 8, 1],
  },
  1: {
    name: "Medium",
    modifierInfantry: [4, 14, 1],
    modifierCavalry: [4, 11, 2],
    modifierAerial: [3, 9, 1],
    modifierArtillery: [3, 9, 1],
  },
  2: {
    name: "Heavy",
    modifierInfantry: [6, 16, 1],
    modifierCavalry: [5, 12, 2],
    modifierAerial: [4, 10, 1],
    modifierArtillery: [4, 10, 1],
  },
  3: {
    name: "Super-heavy",
    modifierInfantry: [8, 18, 2],
    modifierCavalry: [6, 13, 3],
    modifierAerial: [5, 11, 2],
    modifierArtillery: [5, 11, 1],
  },
  };
  
  let equipMap = new Map();
  Object.keys(equipment).forEach(key => {
    equipMap.set(key, equipment[key]);
  });
  
  
  export {equipment, equipMap};
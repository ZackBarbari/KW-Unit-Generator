//Modifiers applied with schema +[ATK#, ATK, DEF, MOR, COM]

const experience = {
    0: {
      name: "Levy",
      modifierInfantry: [0, -1, -2, -2, 1],
    },
    1: {
      name: "Regular",
      modifierInfantry: [0, 0, 0, 0, 1],
      modifierOffFielders: [0, 0, 0, 0, 0],
      modifierArtillery: [0, 0, 0, 0, 0],
    },
    2: {
      name: "Veteran",
      modifierInfantry: [0, 1, 2, 2, 2],
      modifierOffFielders: [0, 1, 1, 1, 2],
      modifierArtillery: [1, 2, 1, 1, 1],
    },
    3: {
      name: "Elite",
      modifierInfantry: [1, 2, 4, 4, 2],
      modifierOffFielders: [1, 2, 2, 2, 4],
      modifierArtillery: [1, 4, 2, 2, 2],
    },
    4: {
      name: "Super-elite",
      modifierInfantry: [1, 3, 6, 6, 3],
      modifierOffFielders: [1, 3, 3, 3, 6],
      modifierArtillery: [1, 6, 3, 3, 3],
    },
  };
  
  let expMap = new Map();
Object.keys(experience).forEach(key => {
  expMap.set(key, experience[key]);
});


export {experience, expMap};

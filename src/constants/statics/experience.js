//Modifiers applied with schema +[ATK#, ATK, DEF, MOR, COM], based off of a modified chart that I found to be more accurate at https://www.reddit.com/r/mattcolville/comments/orx0hd/comment/h6tgvey/?utm_source=share&utm_medium=web2x&context=3

const experience = {
    0: {
      name: "Levy",
      modifierInfantry: [1, 2, 10, -2, -1],
    },
    1: {
      name: "Regular",
      modifierInfantry: [1, 3, 12, 0, 1],
      modifierCavalry: [1, 3, 12, 0, 0],
      modifierAerial: [1, 5, 10, 0, 0],
      modifierArtillery: [1, 3, 10, 0, 0],
    },
    2: {
      name: "Veteran",
      modifierInfantry: [1, 4, 14, 2, 2],
      modifierCavalry: [1, 4, 13, 1, 2],
      modifierAerial: [1, 6, 11, 1, 2],
      modifierArtillery: [2, 5, 11, 1, 1],
    },
    3: {
      name: "Elite",
      modifierInfantry: [2, 5, 16, 4, 2],
      modifierCavalry: [2, 5, 14, 2, 4],
      modifierAerial: [2, 7, 12, 2, 4],
      modifierArtillery: [2, 7, 12, 2, 2],
    },
    4: {
      name: "Super-elite",
      modifierInfantry: [2, 6, 18, 6, 2],
      modifierCavalry: [2, 6, 15, 3, 6],
      modifierAerial: [2, 8, 13, 3, 6],
      modifierArtillery: [2, 9, 13, 3, 3],
    },
  };
  
let expMap = new Map();
Object.keys(experience).forEach(key => {
  expMap.set(key, experience[key]);
});


export {experience, expMap};


/* As shown in Kingdoms and Warfare
const experience = {
    0: {
      name: "Levy",
      modifierInfantry: [0, -1, -2, -2, -1],
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
  };*/
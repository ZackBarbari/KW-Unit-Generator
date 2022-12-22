const races = {
  //All items in traits arrays are referencing the items in ./traitList.js
  // Modifier array based on ancestry bonuses from https://www.reddit.com/r/mattcolville/comments/orx0hd/the_tables_that_should_have_been_in_kw/
  // Most races weren't on the list, so they were left with all 0's, user must modify racial bonuses manually
  Other: {
    name: "Other",
    size: 6,
    traits: [109],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Air_Elemental: {
    name: "Air Elemental",
    size: 6,
    traits: [31, 167],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Banshee: {
    name: "Banshee",
    size: 4,
    traits: [31, 164, 45, 68],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Barbed_Devil: {
    name: "Barbed Devil",
    size: 6,
    traits: [31, 8, 68],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Basilisk: {
    name: "Basilisk",
    size: 6,
    traits: [153],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Bearded_Devil: {
    name: "Bearded Devil",
    size: 6,
    traits: [119, 85, 50, 68],
    modifiers: [2, 0, 2, 2, 1, 1]
  },
  Black_Dragon: {
    name: "Black Dragon",
    size: 8,
    traits: [51, 28],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Black_Pudding: {
    name: "Black Pudding",
    size: 4,
    traits: [31, 149, 27],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Blue_Dragon: {
    name: "Blue Dragon",
    size: 8,
    traits: [51, 81],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Bugbear: {
    name: "Bugbear",
    size: 6,
    traits: [76],
    modifiers: [3, 2, 1, 0, 0, 1]
  },
  Bulette: {
    name: "Bulette",
    size: 6,
    traits: [18],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Centaur: {
    name: "Centaur",
    size: 6,
    traits: [5],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Chasme: {
    name: "Chasme",
    size: 6,
    traits: [85, 41, 68],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Chimera: {
    name: "Chimera",
    size: 8,
    traits: [54, 68],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Construct: {
    name: "Construct",
    size: 6,
    traits: [31, 85, 33],
    modifiers: [2, 1, 5, 3, -1, -1]
  },
  Cyclops: {
    name: "Cyclops",
    size: 8,
    traits: [130],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Dinosaur: {
    name: "Dinosaur",
    size: 10,
    traits: [109],
    modifiers: [4, 2, 5, 5, -1, -3]
  },
  Dragonborn: {
    name: "Dragonborn",
    size: 6,
    traits: [39],
    modifiers: [0, 0, 1, 0, 1, 1]
  },
  Dretch: {
    name: "Dretch",
    size: 4,
    traits: [152, 68],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Drider: {
    name: "Drider",
    size: 6,
    traits: [32, 85, 5, 119],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Drow: {
    name: "Drow",
    size: 6,
    traits: [32, 85, 119],
    modifiers: [1, 0, 1, 0, 1, 0]
  },
  Duergar: {
    name: "Duergar",
    size: 6,
    traits: [43, 78],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Dwarf: {
    name: "Dwarf",
    size: 6,
    traits: [151],
    modifiers: [0, 0, 0, 2, 0, 0]
  },
  Earth_Elemental: {
    name: "Earth Elemental",
    size: 10,
    traits: [31, 85, 143],
    modifiers: [6, 7, 7, 6, 1, 0]
  },
  Elf: {
    name: "Elf",
    size: 6,
    traits: [107, 44],
    modifiers: [1, 0, 0, 0, 0, 0]
  },
  Ettin: {
    name: "Ettin",
    size: 8,
    traits: [12, 130],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Fire_Dwarf: {
    name: "Fire Dwarf",
    size: 6,
    traits: [17, 151],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Fire_Elemental: {
    name: "Fire Elemental",
    size: 8,
    traits: [17, 31],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Fire_Giant: {
    name: "Fire Giant",
    size: 10,
    traits: [13, 56, 130],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Frog_of_War: {
    name: "Frog of War",
    size: 8,
    traits: [85, 72, 63],
    modifiers: [10, 7, 10, 8, 3, 1]
  },
  Frost_Giant: {
    name: "Frost Giant",
    size: 10,
    traits: [13, 129, 130],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Ghoul: {
    name: "Ghoul",
    size: 6,
    traits: [33, 68],
    modifiers: [2, -1, 3, 2, 0, 0]
  },
  Gnoll: {
    name: "Gnoll",
    size: 6,
    traits: [133, 115],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Gnome: {
    name: "Gnome",
    size: 6,
    traits: [85, 86],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Goblin: {
    name: "Goblin",
    size: 4,
    traits: [0],
    modifiers: [0, -1, -1, -1, -1, 0]
  },
  Green_Dragon: {
    name: "Green Dragon",
    size: 6,
    traits: [51, 111],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Harpy: {
    name: "Harpy",
    size: 6,
    traits: [137],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Hell_Hound: {
    name: "Hell Hound",
    size: 6,
    traits: [54, 68],
    modifiers: [1, 0, 2, 2, 1, 1]
  },
  Hill_Giant: {
    name: "Hill Giant",
    size: 6,
    traits: [13, 130],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Hobgoblin: {
    name: "Hobgoblin",
    size: 6,
    traits: [165],
    modifiers: [1, 0, 0, 0, 1, 0]
  },
  Human: {
    name: "Human",
    size: 6,
    traits: [1],
    modifiers: [0, 0, 0, 0, 1, 1]
  },
  Inexorable: {
    name: "Inexorable",
    size: 6,
    traits: [75, 19],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Kobold: {
    name: "Kobold",
    size: 4,
    traits: [40],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Manticore: {
    name: "Manticore",
    size: 8,
    traits: [148, 95],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Mantis_Knight: {
    name: "Mantis Knight",
    size: 6,
    traits: [4, 70],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Minotaur: {
    name: "Minotaur",
    size: 6,
    traits: [20, 124],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Mynconoid: {
    name: "Mynconoid",
    size: 6,
    traits: [64, 146, 150],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Nightmare: {
    name: "Nightmare",
    size: 6,
    traits: [68, 80],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Ogre: {
    name: "Ogre",
    size: 8,
    traits: [157],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Orc: {
    name: "Orc",
    size: 6,
    traits: [127],
    modifiers: [1, 0, 0, 0, 0, 0]
  },
  Owlbear: {
    name: "Owlbear",
    size: 6,
    traits: [122],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Purple_Worm: {
    name: "Purple Worm",
    size: 12,
    traits: [18, 26],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Red_Dragon: {
    name: "Red Dragon",
    size: 8,
    traits: [51, 55],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Roc: {
    name: "Roc",
    size: 10,
    traits: [93],
    modifiers: [2, 4, 8, 6, 2, 0]
  },
  Salamander: {
    name: "Salamander",
    size: 6,
    traits: [17, 58],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Shadow: {
    name: "Shadow",
    size: 4,
    traits: [33, 68, 32, 74],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Shadow_Demon: {
    name: "Shadow Demon",
    size: 6,
    traits: [68, 45, 32, 74],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Shambling_Mound: {
    name: "Shambling Mound",
    size: 8,
    traits: [31, 105],
    modifiers: [2, 1, 5, 4, 0, 1]
  },
  Skeleton: {
    name: "Skeleton",
    size: 4,
    traits: [33, 68],
    modifiers: [0, -1, -1, 0, 0, 0]
  },
  Sprite: {
    name: "Sprite",
    size: 4,
    traits: [78],
    modifiers: [1, 4, 4, 1, -1, -2]
  },
  Stone_Devil: {
    name: "Stone Devil",
    size: 8,
    traits: [73, 120, 68],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Stone_Giant: {
    name: "Stone Giant",
    size: 8,
    traits: [13, 154, 130],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Time_Raider: {
    name: "Time Raider",
    size: 6,
    traits: [85, 80],
    modifiers: [1, 0, 1, 1, 1, 1]
  },
  Treant: {
    name: "Treant",
    size: 10,
    traits: [130, 142],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Triton: {
    name: "Triton",
    size: 6,
    traits: [3, 7],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Troll: {
    name: "Troll",
    size: 6,
    traits: [126],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Virtue: {
    name: "Virtue",
    size: 6,
    traits: [71, 102, 21],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Vrock: {
    name: "Vrock",
    size: 6,
    traits: [68, 164, 150],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Water_Elemental: {
    name: "Water Elemental",
    size: 6,
    traits: [31, 166],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Wight: {
    name: "Wight",
    size: 6,
    traits: [33, 68, 165],
    modifiers: [1, 2, 1, 0, 3, 3]
  },
  Wraith: {
    name: "Wraith",
    size: 6,
    traits: [33, 68, 45, 29],
    modifiers: [-1, 0, 2, 2, 0, 0]
  },
  Wyvern: {
    name: "Wyvern",
    size: 6,
    traits: [119],
    modifiers: [0, 0, 0, 0, 0, 0]
  },
  Zombie: {
    name: "Zombie",
    size: 6,
    traits: [33, 68, 127],
    modifiers: [-1, -1, -1, 1, 0, 0]
  },
};

let raceMap = new Map();
Object.keys(races).forEach(key => {
  raceMap.set(key, races[key]);
});


export {races, raceMap};

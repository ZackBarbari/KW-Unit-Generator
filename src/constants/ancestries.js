import {races} from "./races";

const ancestries = {
    Construct: {
      name: "Construct",
      races: [races.Other, races.Construct, races.Inexorable]},
    Dragonborn: {
      name: "Dragonborn",
      races: [races.Other, races.Dragonborn, races.Black_Dragon, races.Blue_Dragon, races.Green_Dragon, races.Red_Dragon]},
    Dwarf: {
      name: "Dwarf",
      races: [races.Other, races.Dwarf, races.Duergar, races.Fire_Dwarf]},
    Elf: {
      name: "Elf",
      races: [races.Other, races.Elf, races.Drow]},
    Fiend: {
      name: "Fiend",
      races: [races.Other, races.Barbed_Devil, races.Bearded_Devil, races.Chasme, races.Dretch, races.Hell_Hound, races.Shadow_Demon, races.Stone_Devil, races.Nightmare, races.Vrock]},
    Giant: {
      name: "Giant",
      races: [races.Other, races.Fire_Giant, races.Frost_Giant, races.Hill_Giant, races.Stone_Giant, races.Troll, races.Ogre, races.Cyclops, races.Ettin]},
    Gnoll: {
      name: "Gnoll",
      races: [races.Other, races.Gnoll]},
    Gnome: {
      name: "Gnome",
      races: [races.Other, races.Gnome]},
    Goblinoid: {
      name: "Goblinoid",
      races: [races.Other, races.Goblin, races.Hobgoblin, races.Bugbear]},
    Human: {
      name: "Human",
      races: [races.Other, races.Human, races.Time_Raider]},
    Kobold: {
      name: "Kobold",
      races: [races.Other, races.Kobold]},
    Lizardfolk: {
      name: "Lizardfolk",
      races: [races.Other, races.Dinosaur]},
    Monstrous: {
      name: "Monstrous",
      races: [races.Other, races.Basilisk, races.Bulette, races.Chimera, races.Frog_of_War, races.Manticore, races.Minotaur, races.Owlbear, races.Purple_Worm, races.Roc, races.Wyvern]},
    Plant: {
      name: "Plant",
      races: [races.Other, races.Shambling_Mound, races.Treant]},
    Orc: {
      name: "Orc",
      races: [races.Other, races.Orc]},
    Special: {
      name: "Special",
      races: [races.Other, races.Air_Elemental, races.Earth_Elemental, races.Fire_Elemental, races.Water_Elemental, races.Black_Pudding, races.Centaur, races.Drider, races.Harpy, races.Mynconoid, races.Salamander, races.Sprite, races.Triton, races.Virtue, races.Mantis_Knight]},
    Undead: {
      name: "Undead",
      races: [races.Other, races.Banshee, races.Ghoul, races.Shadow, races.Skeleton, races.Wight, races.Wraith, races.Zombie]},
  };

let ancestMap = new Map();
Object.keys(ancestries).forEach(key => {
  ancestMap.set(key, ancestries[key]);
});

  
export {ancestries, ancestMap};
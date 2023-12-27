const traits = {
  0: {
    name: "AAUUUGH!!!",
    description: "When this unit breaks, all adjacent units suffer 1 casualty."
  },
  1: {
    name: "Adaptable.",
    description: "This unit has advantage on Morale and Command tests."
  },
  2: {
    name: "Aerial Bombardment.",
    description:
      "If this unit spends an activation doing nothing, it can use its next activation to target a fortification by making a DC 13 Power test. On a success, it deals 1d4 + 2 damage to the fortification."
  },
  3: {
    name: "Amphibious.",
    description:
      "This unit does not suffer movement penalties when fighting underwater, or in rain or mud."
  },
  4: {
    name: "Arcadian.",
    description:
      "This unit has advantage on Power tests to resist battle magic."
  },
  5: {
    name: "Archers.",
    description:
      "This unit can attack any opposed unit. Successful Power tests the unit makes against opposed units that are not exposed inflict only 1 casualty."
  },
  6: {
    name: "Armor Osmosis.",
    description:
      "When a heavy or super-heavy unit adjacent to this unit breaks, increment this unit’s casualty die."
  },
  7: {
    name: "Armored Carapace.",
    description: "This unit suffers no casualties from artillery Attack tests."
  },
  8: {
    name: "Barbs.",
    description:
      "An opposed infantry unit that makes a successful Power test as part of an attack against this unit suffers 1 casualty."
  },
  9: {
    name: "Battle Hymn.",
    description:
      "This unit has a bonus to Morale equal to its commander’s domain size, as do allied units while adjacent to this unit."
  },
  10: {
    name: "Beacon of Courage.",
    description:
      "This unit and any adjacent allied units automatically succeed on the Morale test to attack units with the Harrowing trait."
  },
  11: {
    name: "Beacon of Order.",
    description:
      "Adjacent allied units can use this unit’s Power bonus on tests to resist the effects of battle magic and can use this unit’s Morale bonus on tests to avoid suffering a casualty when affected by battle magic."
  },
  12: {
    name: "Better than One.",
    description:
      "When this unit attacks an opposed unit, it can also attack any other adjacent opposed unit."
  },
  13: {
    name: "Big.",
    description:
      "This unit has advantage on Power tests against units whose casualties are lower than this unit’s."
  },
  14: {
    name: "Blanket Fire.",
    description:
      "As an action, choose a rank on the battlefield. Attack each unit in that rank. Recharge 4–6."
  },
  15: {
    name: "Bless the Rains.",
    description:
      "Once per battle, as an action, this unit turns the battlefield’s terrain to rain. The terrain remains rain until the end of the battle or until another unit’s trait or battle magic changes the terrain."
  },
  16: {
    name: "Blinding.",
    description:
      "When an opposed unit fails an Attack test against this unit, the opposed unit is disoriented."
  },
  17: {
    name: "Burning.",
    description:
      "Each opposed unit that activates adjacent to this unit suffers 1 casualty."
  },
  18: {
    name: "Burrow.",
    description:
      "As an action, remove this unit from the battlefield. On its next activation, place the unit in any empty space. The unit is disoriented until the end of that activation."
  },
  19: {
    name: "Chaos Vulnerability.",
    description:
      "This unit has disadvantage on Power tests to resist battle magic."
  },
  20: {
    name: "Charge.",
    description:
      "If this unit moves at least 1 space before it attacks, it has advantage on Attack tests for this activation as long as the target is in the direction the unit moved."
  },
  21: {
    name: "Chorus of Victory.",
    description:
      "As an action, choose a rank on the battlefield. Each allied unit in that rank increments its casualty die and has advantage on Attack tests until the end of its next activation. Recharge 6."
  },
  22: {
    name: "Close Enough.",
    description:
      "This unit counts as a dragon for the purpose of other units’ Dragonkin trait."
  },
  23: {
    name: "Close Range.",
    description:
      "This unit has advantage on Attack tests and Power tests against adjacent units."
  },
  24: {
    name: "Cloud of Darkness.",
    description:
      "Opposed units have disadvantage on Attack tests against this unit."
  },
  25: {
    name: "Collateral Damage.",
    description:
      "When this unit makes a successful Power test against an infantry or artillery unit, the unit opposite the target also suffers 1 casualty."
  },
  26: {
    name: "Consume.",
    description:
      "As an action, this unit targets an opposed unit with lower casualties than it that it can attack. The target must succeed on a DC 15 Power test or break. Recharge 5–6."
  },
  27: {
    name: "Corrode.",
    description:
      "When this unit makes a successful Attack test against an opposed unit, that unit takes −2 to Attack and Defense. Each opposed unit can be affected by this trait only once per battle."
  },
  28: {
    name: "Corrosive Breath.",
    description:
      "As an action, choose three adjacent opposed units. Each unit must succeed on a Power test (DC = 8 + this unit’s size) or suffer 2 casualties and gain one acid token. The acid token inflicts 1 casualty. Recharge 5–6."
  },
  29: {
    name: "Create Dead.",
    description:
      "If this unit causes an opposed unit to break, replace that unit with a Ghoul Infantry unit under the command of this unit’s commander. The new unit can act on the commander’s next turn."
  },
  30: {
    name: "Cunning Ambush.",
    description:
      "When this unit succeeds on a Power test as part of an attack, it can choose to make the target suffer an extra casualty and this unit becomes hidden until the start of its next activation. Recharge 4-6."
  },
  31: {
    name: "Damage Resistant.",
    description:
      "Successful Attack tests against this unit inflict no casualties. Successful Power tests inflict casualties normally."
  },
  32: {
    name: "Daylight Weakness.",
    description:
      "While in direct sunlight, this unit has disadvantage on Power tests."
  },
  33: {
    name: "Dead.",
    description:
      "This unit always succeeds on Morale tests, and cannot be diminished."
  },
  34: {
    name: "Defy Gravity.",
    description:
      "As an action, this unit can choose one unit adjacent to it. That unit’s type becomes aerial until the end of its next activation, and it is temporarily removed from the battlefield. When that unit’s type reverts to its original type, it chooses to be placed in one empty space on the battlefield. Recharge 6."
  },
  35: {
    name: "“Dig!”",
    description:
      "As an action, choose a space containing an opposed fortification and remove this unit from the battlefield. On the unit’s next activation, the target fortification takes 2d6 damage and this unit breaks as though it were in that space."
  },
  36: {
    name: "Dire Hyena Mounts.",
    description:
      "This unit has advantage on Attack tests against diminished units."
  },
  37: {
    name: "Directed Fire.",
    description:
      "When this unit attacks a target that is not exposed, allied Tier I and Tier II artillery units that are not siege weapons can attack that target as a reaction."
  },
  38: {
    name: "Disruptive.",
    description:
      "When an opposed unit adjacent to this unit activates, it has a 25 percent chance of doing nothing on that activation."
  },
  39: {
    name: "Draconic Ancestry.",
    description:
      "This unit cannot be disorganized or weakened, and it is immune to the Harrowing trait."
  },
  40: {
    name: "Dragonkin.",
    description:
      "If there is an allied dragon in the battle or if this unit’s commander has some sort of draconic ancestry, this unit has advantage on Attack tests, Command tests, and Morale tests."
  },
  41: {
    name: "Drone.",
    description:
      "As an action, choose a rank on the battlefield. Each opposed unit in that rank must succeed on a DC 15 Power test or suffer 1 casualty and be unable to move on its next activation. This unit can use this trait only once per battle."
  },
  42: {
    name: "Elf-shot.",
    description:
      "When this unit succeeds on a Power test as part of an attack, the target unit must succeed on a DC 10 Power test or become weakened until the end of its next activation."
  },
  43: {
    name: "Embiggen.",
    description:
      "As a reaction to activating, this unit’s size increases to 8. Its casualty die becomes a d8 and is incremented twice. Until the end of its activation, the unit has advantage on Attack tests and Power tests. This unit can use this trait only once per battle."
  },
  44: {
    name: "Eternal.",
    description:
      "This unit has advantage on Morale tests against undead or fiend units, and on the Morale test to attack units with the Harrowing trait."
  },
  45: {
    name: "Ethereal.",
    description:
      "This unit has +1 to movement. It can move through other units, but only if it can end its movement in an empty space. Other units do not gain bonuses to Defense from fortifications against this unit’s attacks."
  },
  46: {
    name: "Expert Fade.",
    description:
      " After a successful Attack test, this unit can move 1 space. Opposed units cannot use the Follow Up maneuver in response."
  },
  47: {
    name: "Fade.",
    description:
      "After a successful Attack test, this unit can move back 1 space. Opposed units cannot use the Follow Up maneuver in response."
  },
  48: {
    name: "Fast Siege Weapon (Heavy).",
    description:
      "This unit can attack a fortification. It automatically hits (no Attack test or Power test needed) and deals 5 damage."
  },
  49: {
    name: "Fast Siege Weapon.",
    description:
      "This unit can attack a fortification. It automatically hits (no Attack test or Power test needed) and deals 3 damage."
  },
  50: {
    name: "Fearless.",
    description: "This unit automatically succeeds on Morale tests."
  },
  51: {
    name: "Fearsome.",
    description:
      "As a reaction to making an Attack test, this unit forces the target to succeed on a Morale test (DC = 8 + this unit’s size) or suffer 1 additional casualty."
  },
  52: {
    name: "Feast.",
    description:
      "At the end of this unit’s activation, if any diminished unit is adjacent to it, increment this unit’s casualty die."
  },
  53: {
    name: "Find Path.",
    description:
      "When you deploy this unit, place two hidden path tokens, one on each side of the battlefield, wherever you choose. Any elf unit can move between spaces with hidden path tokens as if they were adjacent. Any unit that is not an elf unit takes 1 casualty if it ends its activation on a space with a hidden path token. If a rank with a hidden path token collapses, the token moves forward into the closest space that is not collapsed. The hidden path tokens remain on the battlefield until the end of the battle."
  },
  54: {
    name: "Fire Blast.",
    description:
      "As an action, this unit forces two adjacent opposed units to each make a DC 13 Power test. On a failure, a unit suffers 2 casualties. Recharge 5–6."
  },
  55: {
    name: "Fire Breath.",
    description:
      "As an action, this unit forces three adjacent opposed units to each make a Power test (DC = 8 + this unit’s size). On a failure, a unit suffers 2 casualties and gains a fire token. The fire token inflicts 1 casualty. Recharge 5–6."
  },
  56: {
    name: "Fire Immunity.",
    description:
      "This unit does not suffer casualties from traits or other effects with “burning,” “fire,” or “flame” in their names, or from fire tokens."
  },
  57: {
    name: "First Strike.",
    description: "When deployment ends, this unit activates."
  },
  58: {
    name: "Flaming Weapons.",
    description:
      "When this unit makes a successful Power test as part of an attack, it adds a fire token to the target in addition to the normal effects of the test. The fire token inflicts 1 casualty."
  },
  59: {
    name: "Frame.",
    description:
      "When this unit is diminished, it has disadvantage on attacks and its Damage is reduced by 1."
  },
  60: {
    name: "Fury.",
    description:
      "Whenever this unit suffers casualties, its Attack and Power increase by 1 for each casualty it suffers. This bonus lasts until the end of the battle. Additionally, while this unit is diminished, its Damage increases by 1."
  },
  61: {
    name: "Goblin Battle Platform.",
    description:
      "This unit cannot be rallied during battle. When this unit breaks, place a unit of Goblin Smokers under your control on the battlefield according to normal deployment rules. After the battle, the Goblin Smokers disband and you can make a Rally test for this unit."
  },
  62: {
    name: "Guerrillas.",
    description:
      "When this unit succeeds on an Attack test against any opposed infantry or artillery unit (but not siege weapons), that unit is disoriented."
  },
  63: {
    name: "Gulp.",
    description:
      "As an action, this unit forces an opposed infantry or artillery unit (but not a siege engine) to make a DC 15 Power test. On a failure, the target unit is diminished (or is broken if it was already diminished). Recharge 5–6."
  },
  64: {
    name: "Hallucinatory Spores.",
    description:
      "As an action, this unit forces a legal target to make a DC 15 Power test. On a failure, the opposed unit attacks one of its own allied units of this unit’s choice on the opposed unit’s next activation."
  },
  65: {
    name: "Hard Hats.",
    description:
      "This unit has +2 to Defense against attacks from aerial units."
  },
  66: {
    name: "Harpoon.",
    description:
      "When this unit succeeds on a Power test made as part of an attack against a cavalry or aerial unit, the target unit is snared (see Snared Condition, below), and this unit's activation ends."
  },
  67: {
    name: "Harriers.",
    description:
      "If this unit succeeds on a Power test as part of an attack, this unit becomes the target unit’s only legal target on its next activation."
  },
  68: {
    name: "Harrowing.",
    description:
      "Any opposed infantry, cavalry, or aerial unit must first succeed on a Morale test (DC = 10 + this unit’s tier) when it attacks this unit. On a success, the attacking unit is not affected by any unit’s Harrowing trait for the rest of the battle. On a failure, the attacking unit’s activation ends."
  },
  69: {
    name: "Hellfire Cannons.",
    description:
      "As an action, this unit can force all opposed aerial units to make a DC 13 Command test. On a failure, an opposed unit takes 2 casualties and has disadvantage on Attack tests until the end of its next turn. On a success, the opposed unit takes 1 casualty and doesn’t suffer disadvantage on its next attack from this trait. Recharge 5-6."
  },
  70: {
    name: "Heroes of the Myriad Worlds.",
    description:
      "Once per battle as a bonus action, this unit can gain advantage on Attack tests and Power tests until the end of its activation."
  },
  71: {
    name: "Holy.",
    description:
      "Undead and fiend units have disadvantage on Attack tests and Power tests against this unit."
  },
  72: {
    name: "Hop.",
    description:
      "For its movement, this unit can move to any empty space on the battlefield."
  },
  73: {
    name: "Implacable.",
    description:
      "This unit cannot unwillingly be moved or teleported, and it can ignore any effects of terrain."
  },
  74: {
    name: "Indistinct.",
    description:
      "Attack tests for ranged attacks made against this unit have disadvantage."
  },
  75: {
    name: "Inexorable.",
    description:
      "This unit is immune to any effect that would hinder or stop its movement, or that would deny it the ability to use actions."
  },
  76: {
    name: "Inspire Fear.",
    description:
      "Whenever this unit leaves an opposed unit diminished, all goblinoid units in the same rank as this unit can immediately attack a legal target."
  },
  77: {
    name: "Into the Breach.",
    description:
      "When this unit successfully executes the Follow Up maneuver, it has +2 bonus to Defense until the beginning of its next activation."
  },
  78: {
    name: "Invisibility.",
    description:
      "This unit cannot be attacked until it successfully attacks an opposed unit."
  },
  79: {
    name: "It Will Burn As We Burn.",
    description:
      "When this unit is affected by one or more fire tokens and succeeds on an Power test from an attack, the target of the attack gains a fire token that inflicts 1 casualty."
  },
  80: {
    name: "Jaunt.",
    description:
      "In place of its movement, remove this unit from the battlefield. It returns to the space it left, or an unoccupied space of the GM’s choice if that space is occupied, at the start of its next activation. Recharge 5–6."
  },
  81: {
    name: "Lightning Breath.",
    description:
      "As an action, choose a rank on the battlefield. Each unit in that rank must succeed on a Power test (DC = 8 + this unit’s size) or suffer 2 casualties. Recharge 5–6."
  },
  82: {
    name: "Lightning.",
    description:
      "When this unit succeeds on a Power test as part of an attack, the target unit must make a Power test (DC = 10 + this unit’s tier). On a failure, the target unit is disorganized. On a success, the target unit is disoriented."
  },
  83: {
    name: "Load the Bones!",
    description:
      "While any diminished unit is adjacent to this unit, this unit has +2 damage against opposed fortifications."
  },
  84: {
    name: "Made from Magic.",
    description:
      "This unit has advantage on tests to use battle magic. Opposing units have disadvantage on tests to use battle magic targeting this unit."
  },
  85: {
    name: "Magic Resistant.",
    description:
      "This unit has advantage on Power tests to resist battle magic."
  },
  86: {
    name: "Magical Adepts.",
    description:
      "As a bonus action, this unit forces an opposed unit to make a DC 13 Power Test. On a failure, allied units have advantage on Attack tests against the opposed unit until the end of the battle. Recharge 5–6."
  },
  87: {
    name: "Maneuver: Break Them.",
    description:
      "As a reaction to this unit diminishing another unit, make a DC 16 Command test. On a success, the diminished unit is broken."
  },
  88: {
    name: "Maneuver: Detonate.",
    description:
      "As an action, this unit deals 1d4 + 2 damage to an adjacent fortification. Recharge 3–6."
  },
  89: {
    name: "Maneuver: Focused Aim.",
    description:
      "As a bonus action, this unit can increase its Damage by 1 until the end of its activation. To take this bonus action, the unit must not have moved this activation, and after taking this bonus action it cannot move until the start of its next activation. Recharge 5–6."
  },
  90: {
    name: "Maneuver: Outflank.",
    description:
      "As an action, move this unit into any empty space. Any opposed unit that executes the Follow Up maneuver in response has disadvantage on the Command test."
  },
  91: {
    name: "Maneuver: Repair.",
    description:
      "As an action, a fortification this unit is on or adjacent to recovers 1d4 + 2 hit points, up to its starting hit points."
  },
  92: {
    name: "Maneuver: Scamp-ede of Corgis.",
    description:
      "As an action, this unit chooses one exposed unit, and chaotically frolics through its space. If the unit is an opposed unit, it becomes disorganized. If the unit is an allied unit, it automatically succeeds on Morale tests until the end of its next activation. Recharge 4–6."
  },
  93: {
    name: "Maneuver: Strafe.",
    description:
      "As a reaction to succeeding on a Power test made as part of an attack against an opposed artillery or infantry unit, this unit makes a DC 13 Command test. On a success, two adjacent opposed units in the same rank as the target unit each suffer 1 casualty."
  },
  94: {
    name: "Maneuver: Testudo.",
    description:
      "As a reaction to suffering 1 or more casualties from an opposed artillery or aerial unit’s Attack test, this unit makes a DC 13 Command test. On a success, any opposed unit targeting this unit has disadvantage on Power tests until this unit’s next activation."
  },
  95: {
    name: "Maneuver: “Evasive Maneuvers!”",
    description:
      "As a reaction when an opposed artillery unit makes an Attack test against this unit, impose disadvantage on the opposed unit’s Attack test. Recharge 5–6."
  },
  96: {
    name: "Maneuver: “Fire!!”",
    description:
      "As a reaction to a successful Power test made against a target unit, add a fire token to the target. The fire token inflicts 1 casualty. Recharge 4–6."
  },
  97: {
    name: "Maneuver: “Hold the Line!”",
    description:
      "As a reaction to being diminished, this unit makes a DC 13 Command test. On a success, this unit ignores the casualties that caused it to become diminished, and is not diminished."
  },
  98: {
    name: "Maneuver: “Lancers! Flank Them!”",
    description:
      "As a reaction when an opposed cavalry or aerial unit inflicts 1 or more casualties on an allied infantry or artillery unit, this unit makes a free attack against that opposed unit."
  },
  99: {
    name: "Maneuver: “Land and Charge!”",
    description:
      "While this unit has the aerial type, it can use a bonus action to make a DC 11 Command test. On a success, this unit’s Power tests have +2 damage on this activation, but the unit’s type becomes cavalry. At the end of its next activation, the unit regains the aerial type. Recharge 4–6."
  },
  100: {
    name: "Maneuver: “Prey on the Weak”",
    description:
      "As a reaction to an exposed opposed unit being diminished, this unit makes a DC 10 Command test. On a success, the unit makes an attack against the opposed unit."
  },
  101: {
    name: "Maneuver: “Spit Upon Their Horns”",
    description:
      "As a reaction to succeeding on a Power test made as part of an attack, this unit makes a DC 13 Command test. On a success, the target unit suffers 1 additional casualty."
  },
  102: {
    name: "Mass Protection Against Evil.",
    description:
      "Any opposed infantry or artillery unit must succeed on a DC 15 Morale test to enter the vanguard rank of this unit’s side."
  },
  103: {
    name: "Master Elf-shot.",
    description:
      "When this unit succeeds on a Power test as part of an attack, the target unit must succeed on a DC 15 Power test or become weakened until the end of its next activation."
  },
  104: {
    name: "Max Burn!",
    description:
      "As a reaction to activating, this unit can suffer 1 casualty. If it does so, it gets one extra attack and has advantage on Power tests this activation."
  },
  105: {
    name: "Meld.",
    description:
      "As a reaction to a successful Attack test against an infantry or artillery unit, this unit can move into the target unit’s space. While this unit is in the target’s space, the target unit cannot move and can attack only this unit. Units attacking either unit in this space have a 50 percent chance of targeting the wrong unit."
  },
  106: {
    name: "Mobile Battery.",
    description:
      "On this unit’s activation, it can either take an action or move, but not both."
  },
  107: {
    name: "Mobile.",
    description:
      "This unit has advantage on the Command test when using the Follow Up maneuver, and can move back 2 spaces when using the Withdraw maneuver."
  },
  108: {
    name: "Nature’s Bond.",
    description:
      "When an allied infantry or artillery unit suffers 1 or more casualties, this unit can take the casualty instead. This unit must deploy in its side’s front."
  },
  109: {
    name: "None.",
    description: "This unit has no traits."
  },
  110: {
    name: "Now This Is an AAAUUUGH!",
    description:
      "When this unit is diminished, each time it takes casualties from an attack, the attacking unit suffers 1 casualty."
  },
  111: {
    name: "Noxious Fog.",
    description:
      "As an action, this unit places two poison tokens in each of 4 adjacent spaces. Any unit that moves into a space with one or more of these poison tokens or that activates there suffers 1 casualty per token. Each space loses one poison token at the end of this unit’s subsequent activations. Recharge 5–6."
  },
  112: {
    name: "Offensive.",
    description:
      "As a reaction to this unit failing an Attack test, this unit can make a DC 13 Command test. On a success, this unit can attack again."
  },
  113: {
    name: "Only the Smart Survive.",
    description:
      "This unit has advantage on tests to resist battle magic, and tests to make maneuvers against this unit have disadvantage."
  },
  114: {
    name: "Owlbears Can’t Fly?!",
    description:
      "While this unit has the cavalry type, it can use a bonus action to change its type to Aerial until the beginning of its next activation. Recharge 5–6."
  },
  115: {
    name: "Pack Tactics.",
    description:
      "When an adjacent unit that also has this trait successfully uses the Follow Up maneuver (page 109), this unit can move into any empty space adjacent to this unit’s current position."
  },
  116: {
    name: "Pike Training.",
    description:
      "This unit automatically succeeds on Command test for the Set for Charge maneuver."
  },
  117: {
    name: "Plagued.",
    description:
      "When this unit makes a successful Power test as part of an attack, the target gains a poison token in addition to the normal effects of the test. Each poison token inflicts 1 casualty."
  },
  118: {
    name: "Point Blank.",
    description:
      "When this unit succeeds on a Power test as part of an attack against an adjacent unit, it inflicts 1 additional casualty."
  },
  119: {
    name: "Poisonous.",
    description:
      "When this unit succeeds on a Power test as part of an attack, the target unit is also weakened until the end of its next activation."
  },
  120: {
    name: "Pool of Soul’s Blood.",
    description:
      "Any opposed infantry or artillery unit adjacent to this unit cannot leave its space."
  },
  121: {
    name: "Power Word: Annihilate.",
    description:
      "Once per battle as an action, this unit targets one diminished unit on the battlefield. That unit breaks."
  },
  122: {
    name: "Quadruped.",
    description:
      "For its movement, this unit becomes a cavalry unit until the end of its activation. The unit leaves the grid and then returns to the space it left at the end of its activation (or to its army’s reserve rank if that space is occupied). Recharge 5–6."
  },
  123: {
    name: "Ram Riders.",
    description:
      "When this unit succeeds on a Power test as part of an attack, the target unit must make a DC 12 Command test or become disorganized. This lasts until the end of the unit's next turn."
  },
  124: {
    name: "Reckless.",
    description:
      "This unit can take disadvantage on any Attack test in order to have that Attack test inflict an additional 1 casualty."
  },
  125: {
    name: "Reflector.",
    description:
      "When this unit fails a Power test against a wand, it can use a reaction to roll a d20. On a 10 or higher, this unit suffers no effect from the wand and the unit activating the wand suffers the effect instead."
  },
  126: {
    name: "Regenerate.",
    description:
      "Each time this unit activates, increment its casualty die by 1."
  },
  127: {
    name: "Relentless.",
    description:
      "As a reaction to suffering a casualty that would cause this unit to break, this unit makes a DC 13 Power test. On a success, this unit does not break and has 1 casualty."
  },
  128: {
    name: "Ride the Lightning.",
    description:
      "As an action, this unit can make a DC 13 Command test to target a unit with this trait. On a success, the target unit and each unit adjacent to it must succeed on a DC 15 Power test or suffer 1 casualty, or 2 casualties if the terrain is rain. Recharge 6."
  },
  129: {
    name: "Rime.",
    description:
      "Any opposed infantry or artillery unit adjacent to this unit has its movement reduced to 0 and cannot benefit from bonus movement."
  },
  130: {
    name: "Rock",
    description:
      "As an action, this unit can make an Attack test against any opposed unit, with disadvantage if the target is an aerial unit. Recharge 4–6."
  },
  131: {
    name: "Rockbreaker.",
    description: "This unit deals double damage against fortifications."
  },
  132: {
    name: "Rolling Thunder.",
    description:
      "As an action, this unit makes an opposed Power test against an adjacent opposed unit. If this unit’s result is equal to or greater than the target’s, the target unit must move back 1 space or break. This unit immediately moves into the target unit’s vacated space."
  },
  133: {
    name: "Rush.",
    description:
      "This unit automatically succeeds on the Command test for the Follow Up maneuver."
  },
  134: {
    name: "Savage.",
    description: "Each successful Attack test by this unit adds a bleed token to a target unit. Each bleed token inflicts 2 casualties."
  },
  135: {
    name: "Scourge of the Wild.",
    description: "This unit has +2 to Attack and +2 to Power against orc, goblinoid, or elf units."
  },
  136: {
    name: "Scouts.",
    description: "This unit can deploy into the rear rank of an opposed army."
  },
  137: {
    name: "Screech.",
    description: "As an action, this unit forces an opposed unit to succeed on a DC 15 Power test or become misled. Recharge 4–6."
  },
  138: {
    name: "Shock Troops.",
    description: "Each time this unit causes another unit to be diminished, this unit gains +2 to Attack and +2 to Power until the end of the battle."
  },
  139: {
    name: "Shock and Awe.",
    description: "As an action, this unit chooses a space on the battlefield. Each unit in that space and every adjacent space must succeed on a DC 14 Power test or suffer 2 casualties and suffer disadvantage on Command and Morale checks until the end of its next turn. Recharge 4-6."
  },
  140: {
    name: "Siege Engine.",
    description: "This unit must spend 1 round of battle doing nothing before each attack. This unit can attack a fortification. It automatically hits (no Attack test or Power test needed) and deals 1d4 + 2 damage."
  },
  141: {
    name: "Siege Weapon (Heavy).",
    description: "This unit can attack an adjacent fortification. It automatically hits (no Attack test or Power test needed) and deals 5 damage."
  },
  142: {
    name: "Siege Weapon.",
    description: "This unit can attack an adjacent fortification. It automatically hits (no Attack test or Power test needed) and deals 3 damage."
  },
  143: {
    name: "Slam.",
    description: "When this unit succeeds on a Power test as part of an attack, the target unit is also disoriented."
  },
  144: {
    name: "Smoke Screen.",
    description: "When this unit succeeds on an Attack test against another unit, that unit is also disoriented."
  },
  145: {
    name: "Solar Flare.",
    description: "Once per battle as a reaction to targeting a fortification, the damage this unit deals to fortifications is maximized, and it deals that damage to all fortifications in one rank."
  },
  146: {
    name: "Soporific Spores.",
    description: "As an action, this unit forces a legal target to make a DC 13 Power test. On a failure, the opposed unit is disorganized."
  },
  147: {
    name: "Sow Chaos.",
    description: "Each opposed unit within 1 space of this unit has disadvantage on Morale and Command tests, and suffers 1 additional casualty if it fails the Morale test to avoid becoming diminished."
  },
  148: {
    name: "Spike Shot.",
    description: "As an action, this unit forces a target unit to succeed on a DC 12 Power test or suffer 2 casualties and become weakened. An affected unit can repeat this power test at the end of each of its activations to lose the weakened unit condition. Recharge 5–6."
  },
  149: {
    name: "Split.",
    description: "When this unit is diminished, place an identical unit with the same current battle statistics and casualties in an empty adjacent space."
  },
  150: {
    name: "Spores.",
    description: "When this unit is targeted by a successful Attack test from an infantry, cavalry, or aerial unit, the attacking unit must succeed on a DC 13 Power test or become disoriented."
  },
  151: {
    name: "Stalwart.",
    description: "While this unit is diminished, opposed infantry and cavalry units have disadvantage on Power tests against it."
  },
  152: {
    name: "Stinky.",
    description: "Any opposed unit adjacent to this unit has disadvantage on Attack tests."
  },
  153: {
    name: "Stone.",
    description: "Each opposed unit that activates adjacent to this unit suffers 1 casualty."
  },
  154: {
    name: "Stoneskin.",
    description: "As a reaction to suffering 1 or more casualties from any opposed artillery unit, this unit can ignore 1 of those casualties."
  },
  155: {
    name: "Strength in Numbers.",
    description: "This unit begins the battle with 1 additional casualty for each other undead unit in its army (up to a maximum of 12 casualties)."
  },
  156: {
    name: "Strength of the Wilds.",
    description: "While this unit is in a space with a hidden path token, it has advantage on Attack tests."
  },
  157: {
    name: "Stupid.",
    description: "Each time it attacks, this unit has a 25 percent chance of ignoring its intended target and attacking a random adjacent unit."
  },
  158: {
    name: "Stygian Orb.",
    description: "As a reaction to an opposed unit breaking, the Rolling Graveyard can replace that unit with a Ghoul Infantry unit under the command of this unit's commander."
  },
  159: {
    name: "Survival of the Fittest.",
    description: "This unit cannot suffer more than 2 casualties during its or another unit’s activation. When an opposing unit succeeds on an Attack test against this unit and this unit is diminished, make a DC 15 Command test. On a success, the opposing Attack test fails instead."
  },
  160: {
    name: "Swords of the Dragon Lord.",
    description: "When this unit makes a successful Attack test against a target unit, the target must succeed on a DC 13 Morale test or suffer 1 additional casualty."
  },
  161: {
    name: "Terror-dactyls.",
    description: "As a reaction to making an Attack test, this unit forces the target to succeed on a Morale test (DC = 8 + this unit’s size) or become disoriented."
  },
  162: {
    name: "To the Death.",
    description: "If this unit breaks as a result of an opposed infantry, cavalry, or aerial unit’s Attack or Power test, the attacking unit suffers 1 casualty."
  },
  163: {
    name: "Veterans of a Thousand Wars.",
    description: "This unit’s movement increases by 1. When attacking units of a lower tier, its damage increases by 1."
  },
  164: {
    name: "Wail.",
    description: "Once per battle, this unit can use an action to force each adjacent opposed unit to make a DC 15 Power test. On a failure, a unit suffers 1 casualty, and its Morale bonus is reduced to 0 until the end of its next activation. On a success, a unit has disadvantage on Morale tests until the end of its next activation."
  },
  165: {
    name: "Warbred.",
    description: "As a reaction to succeeding on a Power test as part of an attack, this unit can make a DC 10 Command test. On a success, this unit can attack again."
  },
  166: {
    name: "Wave.",
    description: "When this unit succeeds on a Power test as part of an attack against an opposed unit, the opposed unit is pushed back 1 space if there is an empty space behind it. If there is no empty space, the opposed unit and the unit behind it each suffer 1 casualty."
  },
  167: {
    name: "Whirlwind.",
    description: "When this unit succeeds on an Attack test against an opposed infantry unit, that unit takes −2 to Attack and Defense. Each opposed unit can be affected by this trait once per battle."
  },
  168: {
    name: "Wireless.",
    description: "This unit always succeeds on Command and Morale tests."
  },
  169: {
    name: "You Follow",
    description: "Whenever this unit successfully uses the Follow Up maneuver, each goblinoid unit in the rank this unit leaves can move 1 space."
  },
  170: {
    name: "You Will Be Upgraded.",
    description: "As a reaction to becoming broken, this unit can target an adjacent diminished unit and make a DC 15 Power test. On a success, this unit breaks and can’t be rallied until the end of battle, and this unit’s commander gains control of the target unit. The target unit’s defense becomes 16 and its toughness becomes 2."
  },
  171: {
    name: "“Follow the Standard!”",
    description: "When this unit succeeds on a Power test as part of an attack, each cavalry unit the unit’s commander controls can use a reaction to immediately make an attack against the target of the Power test."
  }
};

let traitMap = new Map();
Object.keys(traits).forEach(key => {
    traitMap.set(key, traits[key]);
});

export {traits, traitMap};
export const featsTable ={
    acrobatic:{
        featName: "Acrobatic",
        effect: "+2 bonus on Jump and Tumble checks",
        pre: null,
        cat: "general",

    },
    agile:{
        featName: "Agile",
        effect: "+2 bonus on Balance and Escape Artist checks",
        pre: null,
        cat: "general",

    },
    alertness:{
        featName: "Alertness",
        effect: "+2 bonus on Listen and Spot checks",
        pre: null,
        cat: "general",


    },
    animalAffinity: {
        featName: "Animal Affinity",
        effect: "+2 bonus on Handle Animal and Ride checks",
        pre: null,
        cat: "general",

    },
    apLight:{
        featName: "Armor Proficieny (light)",
        effect: "No armor check penalty on attack rolls",
        pre: null,
        cat: "general",

    },
    apMed:{
        featName: "Armor Proficiency (medium)",
        effect: "No armor check penalty on attack rolls",
        pre: "Armor Proficiency (light)",
        cat: "general",

    },
    apHeavy:{
        featName: "Armor Proficienty (heavy)",
        effect: "No armor check penalty on attack rolls",
        pre: "Armor Proficiency (medium)",
        cat: "general",

    },
    athletic:{
        featName: "Athletic",
        effect: "+2 bonus on Climb and Swim checks",
        pre: null,
        cat: "general",

    },
    augmentSummoning:{
        featName: "Augment Summoning",
        effect: "Summoned creatures gain +4 Str, +4 Con",
        pre: "Spell Focus (conjuration)",
        cat: "general",

    },
    blindFight:{
        featName: "Blind Fight",
        effect: "Reroll miss chance for concealment",
        pre: null,
        cat: "general",

    },
    combatCasting:{
        featName: "Combat Casting",
        effect: "+4 bonus on Concentration checks for defensive casting",
        pre: null,
        cat: "general",

    },
    combatExpertise:{
        featName: "Combat Expertise",
        effect: "Trade attack bonus for AC (max 5 points)",
        pre: "Int 13",
        cat: "general",

    },
    improvedDisarm:{
        featName: "Improved Disarm",
        effect: "+4 bonus on disarm attempts, no attack of opportunity",
        pre: "Int 13, Combat Expertise",
        cat: "general",

    },
    improvedFeint:{
        featName: "Improved Feint",
        effect: "Feint in combat as move action",
        pre: "Int 13, Combat Expertise",
        cat: "general",

    },
    improvedTrip:{
        featName: "Improved Trip",
        effect: "+4 bonus on trip attempts, no attack of opportunity",
        pre: "Int 13, Combat Expertise",
        cat: "general",

    },
    whirlwindAttack:{
        featName: "Whirlwind Attack",
        effect: "One melee attack against each opponent within reach",
        pre: "Dex 13, Int 13, Combat Expertise, Dodge, Mobility, Spring Attack, base attack bonus +4",
        cat: "general",

    },
    combatReflexes:{
        featName: "Combat Reflexes",
        effect: "Additional attacks of opportunity",
        pre: null,
        cat: "general",

    },
    deceitful:{
        featName: "Deceitful",
        effect: "+2 bonus on Disguise and Forgery checks",
        pre: null,
        cat: "general",

    },
    deftHands:{
        featName: "Deft Hands",
        effect: "+2 bonus on Sleight of Hand and Use Rope checks",
        pre: null,
        cat: "general",

    },
    diligent:{
        featName: "Diligent",
        effect: "+2 bonus on Appraise and Decipher Script checks",
        pre: null,
        cat: "general",

    },
    dodge:{
        featName: "Dodge",
        effect: "+1 dodge bonus to AC against selected target",
        pre: "Dex 13",
        cat: "general",

    },
    mobility:{
        featName: "Mobility",
        effect: "+4 dodge bonus to AC against some attacks of opportunity",
        pre: "Dex 13, Dodge",
        cat: "general",

    },
    springAttack:{
        featName: "Spring Attack",
        effect: "Move before and after melee attack",
        pre: "Dex 13, Dodge, base attack bonus +4",
        cat: "general",
    },
    endurance:{
        featName: "Endurance",
        effect: "+4 bonus on checks or saves to resist nonlethal damage",
        pre: null,
        cat: "general",
    },
    enduranceDiehard:{
        featName: "Endurance - Diehard",
        effect: "Remain conscious at -1 to -9 hitpoints",
        pre: "Endurance",
        cat: "general",
    },
    eschewMaterials:{
        featName: "Eschew Materials",
        effect: "Cast spells without material components",
        pre: null,
        cat: "general",
    },
    exoticWeaponProficiency:{
        featName: "Exotic Weapon Proficiency",
        effect: "No penalty on attack with specific exotic weapon",
        pre: "Base attack bonus +1",
        cat: "general",
    },
    extraTurning:{
        featName: "Extra Turning",
        effect: "Can turn or rebuke four more times per day",
        pre: "Ability to turn or rebuke creatures",
        cat: "general",
    },
    greatFortitude:{
        featName: "Great Fortitude",
        effect: "+2 bonus on Fortitude saves",
        pre: null,
        cat: "general",
    },
    improvedCounterspell:{
        featName: "Improved Counterspell",
        effect: "Counterspell with spell of same school",
        pre: null,
        cat: "general",
    },
    improvedCritical:{
        featName: "Improved Critical",
        effect: "Double threat range of weapon",
        pre: "Proficiency with weapon, base attack bonus +8",
        cat: "general",
    },
    improvedInitiative:{
        featName: "Improved Initiative",
        effect: "+4 bonus on initiative checks",
        pre: null,
        cat: "general",
    },
    improvedTurning:{
        featName: "Improved Turning",
        effect: "+1 level for turning checks",
        pre: "Ability to turn or rebuke creatures",
        cat: "general",
    },
    improvedUnarmedStrike:{
        featName: "Improved Unarmed Strike",
        effect: "Considered armed even when unarmed",
        pre: null,
        cat: "general",
    },
    improvedGrapple:{
        featName: "Improved Grapple",
        effect: "+4 bonus on grapple checks, no attack of opportunity",
        pre: "Dex 13, Improved Unarmed Strike",
        cat: "general",
    },
    deflectArrows:{
        featName: "Deflect Arrows",
        effect: "Deflect one ranged attack per round",
        pre: "Dex 13, Improved Unarmed Strike",
        cat: "general",
    },
    snatchArrows:{
        featName: "Snatch Arrows",
        effect: "Catch a deflected ranged attack",
        pre: "Dex 13, Deflect Arrows, Improved Unarmed Strike",
        cat: "general",
    },
    stunningFist:{
        featName: "Stunning Fist",
        effect: "Stun opponent with unarmed strike",
        pre: "Dex 13, Wis 13, Improved Unarmed Strike, base attack bonus +8",
        cat: "general",
    },
    investigator:{
        featName: "Investigator",
        effect: "+2 bonus on Gather Information and Search checks",
        pre: null,
        cat: "general",
    },
    ironWill:{
        featName: "Iron Will",
        effect: "+2 bonus on Will saves",
        pre: null,
        cat: "general",
    },
    leadership:{
        featName: "Leadership",
        effect: "Attract cohort and followers",
        pre: "Character level 6th",
        cat: "general",
    },
    lightningReflexes:{
        featName: "Lightning Reflexes",
        effect: "+2 bonus on Reflex saves",
        pre: null,
        cat: "general",
    },
    magicalAptitude:{
        featName: "Magical Aptitude",
        effect: "+2 bonus on Spellcraft and Use Magic Device checks",
        pre: null,
        cat: "general",
    },
    martialWeaponProficiency:{
        featName: "Martial Weapon Proficiency",
        effect: "No penalty on attacks with specific martial weapon",
        pre: null,
        cat: "general",
    },
    mountedCombat:{
        featName: "Mounted Combat",
        effect: "Negate hits on mount with Ride check",
        pre: "Ride 1 rank",
        cat: "general",
    },
    mountedArchery:{
        featName: "Mounted Archery",
        effect: "Half penalty for ranged attacks while mounted",
        pre: "Ride 1 rank, Mounted Combat",
        cat: "general",
    },
    rideByAttack:{
        featName: "Ride-By Attack",
        effect: "Move before and after a mounted charge",
        pre: "Ride 1 rank, mounted combat",
        cat: "general",
    },
    spiritedCharge:{
        featName: "Spirited Charge",
        effect: "Double damage with mounted charge",
        pre: "Ride 1 rank, Mounted Combat, Ride-By Attack",
        cat: "general",
    },
    trample:{
        featName: "Trample",
        effect: "Target cannot avoid mounted overrun",
        pre: "Ride 1 rank, Mounted Combat",
        cat: "general",
    },
    naturalSpell:{
        featName: "Natural Spell",
        effect: "Cast spells while in wild shape",
        pre: "Wis 13, Ability to use wild shape",
        cat: "general",
    },
    negotiator:{
        featName: "Negotiator",
        effect: "+2 bonus on Diplomacy and Sense Motive checks",
        pre: null,
        cat: "general",
    },
    nimbleFingers:{
        featName: "Nimble Fingers",
        effect: "+2 bonus on Disable Device and Open Lock checks",
        pre: null,
        cat: "general",
    },
    persuasive:{
        featName: "Persuasive",
        effect: "+2 bonus on Bluff and Intimidate checks",
        pre: null,
        cat: "general",
    },
    pointBlankShot:{
        featName: "Point Blank Shot",
        effect: "+1 bonus on ranged attack and damage within 30 ft.",
        pre: null,
        cat: "general",
    },
    farShot:{
        featName: "Far Shot",
        effect: "Increase range increment by 50% or 100%",
        pre: "Point Blank Shot",
        cat: "general",
    },
    preciseShot:{
        featName: "Precise Shot",
        effect: "No -4 penalty for shooting into melee",
        pre: "Point Blank Shot",
        cat: "general",
    },
    improvedPreciseShot:{
        featName: "Improved Precise Shot",
        effect: "Ignore less than total cover/concealment for ranged attacks",
        pre: "Dex 19, Point Blank Shot, Precise Shot, base attack bonus +11",
        cat: "general",
    },
    rapidShot:{
        featName: "Rapid Shot",
        effect: "One extra ranged attack each round",
        pre: "Dex 13, Point Blank Shot",
        cat: "general",
    },
    manyShot:{
        featName: "Manyshot",
        effect: "Shoot two or more arrows simultaneously",
        pre: "Dex 17, Point Blank Shot, Rapid Shot, base attack bonus +6",
        cat: "general",
    },
    shotOnTheRun:{
        featName: "Shot on the Run",
        effect: "Move before and after ranged attack",
        pre: "Dex 13, Dodge, Mobility, Point Blank Shot, base attack bonus +4",
        cat: "general",
    },
    powerAttack:{
        featName: "Power Attack",
        effect: "Trade attack bonus for damage (up to base attack bonus)",
        pre: "Str 13",
        cat: "general",
    },
    cleave:{
        featName: "Cleave",
        effect: "Extra melee attack after dropping target",
        pre: "Str 13, Power Attack",
        cat: "general",
    },
    greatCleave:{
        featName: "Great Cleave",
        effect: "No limit to cleave attacks each round",
        pre: "Str 13, Cleave, Power Attack, base attack bonus +4",
        cat: "general",
    },
    improvedBullRush:{
        featName: "Improved Bull Rush",
        effect: "+4 on bull rush attempts, no attack of opportunity",
        pre: "Str 13, Power Attack",
        cat: "general",
    },
    improvedOverrun:{
        featName: "Improved Overrun",
        effect: "+4 bonus on overrun attempts, no attack of opportunity",
        pre: "Str 13, Power Attack",
        cat: "general",
    },
    improvedSunder:{
        featName: "Improved Sunder",
        effect: "+4 bonus on sunder attempts, no attack of opportunity",
        pre: "Str 13, Power Attack",
        cat: "general",
    },
    quickDraw:{
        featName: "Quick Draw",
        effect: "Draw weapon as free action",
        pre: "Base attack bonus +1",
        cat: "general",
    },
    rapidReload:{
        featName: "Rapid Reload",
        effect: "Reload crossbow more quickly",
        pre: "Weapon Proficiency with crossbow",
        cat: "general",
    },
    run:{
        featName: "Run",
        effect: "Run at 5 times normal speed, +4 bonus on Jump checks made after running start",
        pre: null,
        cat: "general",
    },
    selfSufficient:{
        featName: "Self-Sufficient",
        effect: "+2 bonus on Heal and Survival checks",
        pre: null,
        cat: "general",
    },
    shieldProficiency:{
        featName: "Shield Proficiency",
        effect: "No armor check penalty on attack rolls",
        pre: null,
        cat: "general",
    },
    improvedShieldBash:{
        featName: "Improved Shield Bash",
        effect: "Retain shield bonus to AC when shield bashing",
        pre: "Shield Proficiency",
        cat: "general",
    },
    towerShieldProficiency:{
        featName: "Tower Shield Proficiency",
        effect: "No armor check penalty on attack rolls",
        pre: "Shield Proficiency",
        cat: "general",
    },
    simpleWeaponProficiency:{
        featName: "Simple Weapon Proficiency",
        effect: "No -4 penalty on attack rolls with simple weapons",
        pre: null,
        cat: "general",
    },
    skillFocus:{
        featName: "Skill Focus",
        effect: "+3 bonus on checks with selected skill",
        pre: null,
        cat: "general",
    },
    spellFocus:{
        featName: "Spell Focus",
        effect: "+1 bonus on save DCs against specific school of magic",
        pre: null,
        cat: "general",
    },
    greaterSpellFocus:{
        featName: "Greater Spell Focus",
        effect: "+1 bonus on save DCs against specific school of magic",
        pre: "Spell Focus",
        cat: "general",
    },
    spellMastery:{
        featName: "Spell Mastery",
        effect: "Can prepare some spells without spellbook",
        pre: "Wizard level 1st",
        cat: "general",
    },
    spellPenetration:{
        featName: "Spell Penetration",
        effect: "+2 bonus on caster level checks to defeat spell resistance",
        pre: null,
        cat: "general",
    },
    greaterSpellPenetration:{
        featName: "Greater Spell Penetration",
        effect: "+2 bonus on caster level checks to defat spell resistance",
        pre: "Spell Penetration",
        cat: "general",
    },
    stealthy:{
        featName: "Stealthy",
        effect: "+2 bonus on Hide and Move Silently checks",
        pre: null,
        cat: "general",
    },
    toughness:{
        featName: "Toughness",
        effect: "+3 hit points",
        pre: null,
        cat: "general",
    },
}
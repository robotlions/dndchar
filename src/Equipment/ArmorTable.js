export const ArmorTable = {
  padded: {
    armorName: "Padded",
    cost: 5,
    armorBonus: 1,
    maxDexBonus: 8,
    armorCheck: 0,
    spellFail: 5,
    speed30: 30,
    speed20: 20,
    weight: 10,
  },
  leather:{
    armorName: "Leather",
    cost: 10,
    armorBonus: 2,
    maxDexBonus: 6,
    armorCheck: 0,
    spellFail: 10,
    speed30: 30,
    speed20: 20,
    weight: 15

  }
};

export const ShieldTable = {
  buckler: {
    shieldName: "Buckler",
    cost: 15,
    shieldBonus: 1,
    maxDexBonus: null,
    armorCheck: -1,
    spellFail: 5,
    weight: 5,
  },
  lightWood: {
    shieldName: "Shield, light wooden",
    cost: 3,
    shieldBonus: 1,
    maxDexBonus: null,
    armorCheck: -1,
    spellFail: 5,
    weight: 5,
  },
};

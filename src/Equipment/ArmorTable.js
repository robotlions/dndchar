export const ArmorTable = {
  padded: {
    armorName: "Padded",
    cost: 50,
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
    cost: 100,
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
    cost: 150,
    shieldBonus: 1,
    maxDexBonus: null,
    armorCheck: -1,
    spellFail: 5,
    weight: 5,
  },
  lightWood: {
    shieldName: "Shield, light wooden",
    cost: 30,
    shieldBonus: 1,
    maxDexBonus: null,
    armorCheck: -1,
    spellFail: 5,
    weight: 5,
  },
};

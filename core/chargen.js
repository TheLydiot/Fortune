

  //  random background, traits (one physical one mental), and gold/starting gear
  //  background assigns traits in combo with race
  let bgKeys = Object.keys(Chargen.Backgrounds);
  char.background = bgKeys[bgKeys.length * Math.random() << 0];
  char.traits = [];
  let pTraitKeys = Object.keys(Chargen.Traits.physical);
  char.traits.push(pTraitKeys[pTraitKeys.length * Math.random() << 0]);
  let mTraitKeys = Object.keys(Chargen.Traits.mental);
  char.traits.push(mTraitKeys[mTraitKeys.length * Math.random() << 0]);
  char.wealth = {};
  char.wealth.gp = 120;
  char.inventory = {};
  char.inventory.wear = [];
  char.inventory.wear.push("normal clothing");
  char.inventory.hold = [];


  // starting HP = 0.5 * CON rounded up + class HD
  char.maxHP = char.currentHP = Math.round(char.attributes.CON / 2) + Dice.roll(klass.HD);

  //  starting SP = 0.5 * WIS rounded up + class SD
  char.maxSP = char.currentSP = Math.round(char.attributes.WIS / 2) + Dice.roll(klass.SD);

  // story = log of events
  char.story = [];

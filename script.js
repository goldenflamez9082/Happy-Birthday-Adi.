// ==================== MOVE POOLS ====================
const moves = {
  fire: [
    { name: "Scratch", power: 4 },
    { name: "Ember", power: 6 },
    { name: "Flame Wheel", power: 8 },
    { name: "Fire Spin", power: 7 },
    { name: "Flamethrower", power: 10 },
    { name: "Fire Fang", power: 8 },
    { name: "Inferno", power: 12 },
    { name: "Fire Punch", power: 9 },
    { name: "Heat Wave", power: 11 },
    { name: "Fire Blast", power: 13 }
  ],
  water: [
    { name: "Splash", power: 1 },
    { name: "Water Gun", power: 6 },
    { name: "Bubble", power: 5 },
    { name: "Surf", power: 10 },
    { name: "Aqua Tail", power: 8 },
    { name: "Hydro Pump", power: 12 },
    { name: "Water Pulse", power: 7 },
    { name: "Waterfall", power: 9 },
    { name: "Scald", power: 10 },
    { name: "Ice Beam", power: 11 }
  ],
  grass: [
    { name: "Tackle", power: 4 },
    { name: "Vine Whip", power: 6 },
    { name: "Razor Leaf", power: 10 },
    { name: "Leaf Blade", power: 9 },
    { name: "Solar Beam", power: 12 },
    { name: "Seed Bomb", power: 8 },
    { name: "Leech Seed", power: 5 },
    { name: "Energy Ball", power: 10 },
    { name: "Petal Dance", power: 11 },
    { name: "Power Whip", power: 12 }
  ],
  electric: [
    { name: "Thunder Shock", power: 6 },
    { name: "Spark", power: 7 },
    { name: "Thunder Fang", power: 8 },
    { name: "Discharge", power: 9 },
    { name: "Thunderbolt", power: 10 },
    { name: "Thunder", power: 12 },
    { name: "Volt Tackle", power: 11 },
    { name: "Electro Ball", power: 9 },
    { name: "Charge Beam", power: 8 },
    { name: "Wild Charge", power: 11 }
  ],
  flying: [
    { name: "Gust", power: 5 },
    { name: "Air Slash", power: 10 },
    { name: "Wing Attack", power: 6 },
    { name: "Aerial Ace", power: 8 },
    { name: "Sky Attack", power: 12 },
    { name: "Hurricane", power: 12 },
    { name: "Drill Peck", power: 9 },
    { name: "Peck", power: 4 },
    { name: "Fly", power: 10 },
    { name: "Brave Bird", power: 11 }
  ],
  rock: [
    { name: "Rock Throw", power: 6 },
    { name: "Rock Slide", power: 9 },
    { name: "Smack Down", power: 8 },
    { name: "Stone Edge", power: 12 }
  ]
};

// ==================== STARTERS ====================
const starters = [
  { line: [
    { name: "Bulbasaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", hp: 20, evolveLevel: 5 },
    { name: "Ivysaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", hp: 28, evolveLevel: 10 },
    { name: "Venusaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", hp: 40 }
  ]},
  { line: [
    { name: "Charmander", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", hp: 20, evolveLevel: 5 },
    { name: "Charmeleon", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", hp: 28, evolveLevel: 10 },
    { name: "Charizard", type: "fire/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", hp: 42 }
  ]},
  { line: [
    { name: "Squirtle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", hp: 20, evolveLevel: 5 },
    { name: "Wartortle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", hp: 28, evolveLevel: 10 },
    { name: "Blastoise", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", hp: 40 }
  ]}
];

// ==================== GYMS / ELITE / CHAMPION ====================
const gyms = [
  { name: "Brock", team: [
      { name: "Onix", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png", hp: 30 },
      { name: "Geodude", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png", hp: 25 }
    ]
  },
  { name: "Misty", team: [
      { name: "Starmie", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png", hp: 28 },
      { name: "Psyduck", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png", hp: 22 }
    ]
  },
  { name: "Lt. Surge", team: [
      { name: "Raichu", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png", hp: 30 },
      { name: "Electabuzz", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png", hp: 28 }
    ]
  },
  { name: "Erika", team: [
      { name: "Vileplume", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png", hp: 28 },
      { name: "Tangela", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png", hp: 26 }
    ]
  },
  { name: "Korrina", team: [
      { name: "Machamp", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png", hp: 32 },
      { name: "Lucario", type: "fighting/steel", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png", hp: 30 }
    ]
  },
  { name: "Elite Four Lorelei", team: [
      { name: "Dewgong", type: "ice/water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png", hp: 28 },
      { name: "Cloyster", type: "ice/water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png", hp: 26 }
    ]
  },
  { name: "Elite Four Bruno", team: [
      { name: "Hitmonchan", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png", hp: 28 },
      { name: "Machamp", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png", hp: 30 }
    ]
  },
  { name: "Elite Four Agatha", team: [
      { name: "Gengar", type: "ghost/poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", hp: 30 },
      { name: "Arbok", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png", hp: 28 }
    ]
  },
  { name: "Elite Four Lance", team: [
      { name: "Dragonite", type: "dragon/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png", hp: 32 },
      { name: "Gyarados", type: "water/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png", hp: 30 }
    ]
  },
  { name: "Champion", team: [
      { name: "Charizard", type: "fire/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", hp: 32 },
      { name: "Blastoise", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", hp: 32 },
      { name: "Venusaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", hp: 32 }
    ]
  }
];

// ==================== GAME STATE ====================
let currentGym = 0;
let playerTeam = [];
let activePlayer, activeEnemy;
let playerHP, enemyHP;
let enemyTeam = [];
let level = 1;
let evoStage = 0;

// ==================== UTILS ====================
function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function typeEffectiveness(moveType, targetType){
  // Simple type chart: only basic weaknesses for demonstration
  const chart = {
    fire: { grass: 2, water: 0.5, rock: 0.5 },
    water: { fire: 2, grass: 0.5, electric: 0.5 },
    grass: { water: 2, fire: 0.5, rock: 2 },
    electric: { water: 2, ground: 0.5, flying: 2 },
    rock: { fire: 2, flying: 2 },
    flying: { grass: 2, electric: 0.5 }
  };
  const targets = targetType.split("/");
  let multiplier = 1;
  targets.forEach(t=>{
    if(chart[moveType] && chart[moveType][t]) multiplier *= chart[moveType][t];
  });
  return multiplier;
}

// ==================== REST OF GAME LOGIC ====================
// Starter selection, battle loops, AI, move selection, switch Pokémon, evolution, crate drop
// (use same structure from previous working code, just swap in this new gyms array and typeEffectiveness for damage multipliers)

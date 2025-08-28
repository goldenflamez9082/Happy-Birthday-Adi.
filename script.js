// ==================== MOVE POOLS ====================
const moves = {
  fire: [
    { name: "Scratch", power: 4 },
    { name: "Ember", power: 6 },
    { name: "Flamethrower", power: 10 }
  ],
  water: [
    { name: "Water Gun", power: 6 },
    { name: "Bubble", power: 5 },
    { name: "Surf", power: 10 }
  ],
  grass: [
    { name: "Vine Whip", power: 6 },
    { name: "Razor Leaf", power: 10 },
    { name: "Solar Beam", power: 12 }
  ],
  electric: [
    { name: "Thunder Shock", power: 6 },
    { name: "Spark", power: 7 },
    { name: "Thunderbolt", power: 10 }
  ],
  flying: [
    { name: "Gust", power: 5 },
    { name: "Wing Attack", power: 6 },
    { name: "Air Slash", power: 10 }
  ],
  rock: [
    { name: "Rock Throw", power: 6 },
    { name: "Rock Slide", power: 9 }
  ],
  psychic: [
    { name: "Confusion", power: 7 },
    { name: "Psybeam", power: 9 }
  ]
};

// ==================== STARTERS ====================
const starters = [
  { line: [
    { name: "Bulbasaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", hp: 20 },
    { name: "Ivysaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", hp: 28 },
    { name: "Venusaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", hp: 40 }
  ]},
  { line: [
    { name: "Charmander", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", hp: 20 },
    { name: "Charmeleon", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", hp: 28 },
    { name: "Charizard", type: "fire/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", hp: 42 }
  ]},
  { line: [
    { name: "Squirtle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", hp: 20 },
    { name: "Wartortle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", hp: 28 },
    { name: "Blastoise", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", hp: 40 }
  ]}
];

// ==================== GYMS / ELITE FOUR / CHAMPION ====================
const gyms = [
  { name: "Brock (Rock)", team: [
      { name: "Onix", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png", hp: 30 },
      { name: "Geodude", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png", hp: 25 }
    ]
  },
  { name: "Misty (Water)", team: [
      { name: "Starmie", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png", hp: 28 },
      { name: "Psyduck", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png", hp: 22 }
    ]
  },
  { name: "Lt. Surge (Electric)", team: [
      { name: "Raichu", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png", hp: 30 },
      { name: "Electabuzz", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png", hp: 28 }
    ]
  },
  { name: "Erika (Grass)", team: [
      { name: "Tangela", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png", hp: 28 },
      { name: "Vileplume", type: "grass/poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png", hp: 32 }
    ]
  },
  { name: "Koga (Poison)", team: [
      { name: "Muk", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png", hp: 28 },
      { name: "Weezing", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png", hp: 30 }
    ]
  },
  { name: "Sabrina (Psychic)", team: [
      { name: "Alakazam", type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png", hp: 30 },
      { name: "Kadabra", type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png", hp: 28 }
    ]
  },
  { name: "Blaine (Fire)", team: [
      { name: "Arcanine", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png", hp: 32 },
      { name: "Magmar", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png", hp: 28 }
    ]
  },
  { name: "Giovanni (Ground)", team: [
      { name: "Rhydon", type: "ground/rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png", hp: 35 },
      { name: "Dugtrio", type: "ground", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png", hp: 25 }
    ]
  },
  { name: "Elite Four Lorelei", team: [
      { name: "Dewgong", type: "water/ice", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png", hp: 28 },
      { name: "Cloyster", type: "water/ice", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png", hp: 32 },
      { name: "Slowbro", type: "water/psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png", hp: 30 }
    ]
  },
  { name: "Elite Four Bruno", team: [
      { name: "Hitmonchan", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png", hp: 28 },
      { name: "Hitmonlee", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png", hp: 28 },
      { name: "Onix", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png", hp: 30 }
    ]
  },
  { name: "Elite Four Agatha", team: [
      { name: "Gengar", type: "ghost/poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", hp: 30 },
      { name: "Haunter", type: "ghost/poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png", hp: 28 },
      { name: "Arbok", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png", hp: 28 }
    ]
  },
  { name: "Elite Four Lance", team: [
      { name: "Gyarados", type: "water/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png", hp: 32 },
      { name: "Dragonair", type: "dragon", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png", hp: 28 },
      { name: "Aerodactyl", type: "rock/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png", hp: 30 }
    ]
  },
  { name: "Champion", team: [
      { name: "Charizard", type: "fire/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", hp: 40 },
      { name: "Blastoise", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", hp: 40 },
      { name: "Venusaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", hp: 40 }
    ]
  }
];

// ==================== GAME STATE ====================
let playerTeam = [];
let activePlayer, activeEnemy;
let playerHP, enemyHP;
let enemyTeam = [];
let currentGym = 0;

// ==================== UTILS ====================
function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function typeEffectiveness(moveType, targetType){
  const chart = {
    fire: { grass: 2, water: 0.5, rock: 0.5 },
    water: { fire: 2, grass: 0.5, rock: 2 },
    grass: { water: 2, fire: 0.5, rock: 2 },
    electric: { water: 2, flying: 2 },
    flying: { grass: 2, electric: 0.5 },
    rock: { fire: 2, flying: 2 },
    psychic: { fighting: 2, poison: 2 }
  };
  const targets = targetType.split("/");
  let multiplier = 1;
  targets.forEach(t=>{
    if(chart[moveType] && chart[moveType][t]) multiplier *= chart[moveType][t];
  });
  return multiplier;
}

// ==================== STARTER SELECTION ====================
function renderStarterSelection(){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = "<h3>Choose your starter:</h3>";
  starters.forEach((starter, idx)=>{
    const btn = document.createElement('button');
    const base = starter.line[0];
    btn.innerHTML = `<img src="${base.img}" width="50"><br>${base.name}`;
    btn.onclick = ()=>startGame(idx);
    gameDiv.appendChild(btn);
  });
}

// ==================== GAME START ====================
function startGame(starterIdx){
  playerTeam = [{...starters[starterIdx].line[0]}];
  activePlayer = {...playerTeam[0]};
  playerHP = activePlayer.hp;
  currentGym = 0;
  startGym();
}

// ==================== START GYM ====================
function startGym(){
  enemyTeam = gyms[currentGym].team.map(p=>({...p}));
  activeEnemy = {...enemyTeam[0]};
  enemyHP = activeEnemy.hp;
  renderBattle(`Battle vs ${gyms[currentGym].name}`);
}

// ==================== BATTLE ====================
function renderBattle(message){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h3>${message}</h3>
    <div style="display:flex;justify-content:center;gap:50px;">
      <div><img src="${activePlayer.img}" width="80"><br>${activePlayer.name}<br>HP: ${playerHP}</div>
      <div><img src="${activeEnemy.img}" width="80"><br>${activeEnemy.name}<br>HP: ${enemyHP}</div>
    </div>
    <h4>Choose Move:</h4>
    <div id="moves"></div>
    <button onclick="switchPlayer()">Switch Pokémon</button>
  `;
  const moveDiv = document.getElementById('moves');
  moves[activePlayer.type.split("/")[0]].forEach(m=>{
    const btn = document.createElement('button');
    btn.textContent = m.name;
    btn.onclick = ()=>playerAttack(m);
    moveDiv.appendChild(btn);
  });
}

// ==================== PLAYER ATTACK ====================
function playerAttack(move){
  const multiplier = typeEffectiveness(move.name.split(" ")[0].toLowerCase(), activeEnemy.type);
  const damage = move.power * multiplier;
  enemyHP -= damage;
  if(enemyHP <= 0){
    enemyTeam.shift();
    if(enemyTeam.length>0){
      activeEnemy = {...enemyTeam[0]};
      enemyHP = activeEnemy.hp;
      alert(`Enemy switched to ${activeEnemy.name}`);
    } else {
      alert(`You defeated ${gyms[currentGym].name}!`);
      currentGym++;
      if(currentGym<gyms.length) startGym();
      else { document.getElementById('game').innerHTML="<h2>Congratulations! You beat all gyms and Champion!</h2>"; return; }
    }
  }
  enemyTurn();
}

// ==================== ENEMY ATTACK ====================
function enemyTurn(){
  const movePool = moves[activeEnemy.type.split("/")[0]];
  const move = randomChoice(movePool);
  const damage = move.power * typeEffectiveness(move.name.split(" ")[0].toLowerCase(), activePlayer.type);
  playerHP -= damage;
  if(playerHP <= 0) alert("You lost!");
  else renderBattle(`Enemy used ${move.name}!`);
}

// ==================== SWITCH PLAYER POKÉMON ====================
function switchPlayer(){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = "<h3>Choose a Pokémon:</h3>";
  playerTeam.forEach((poke)=>{
    const btn = document.createElement('button');
    btn.innerHTML = `<img src="${poke.img}" width="50"><br>${poke.name} HP:${poke.hp}`;
    btn.onclick = ()=>{
      activePlayer = {...poke};
      playerHP = activePlayer.hp;
      renderBattle(`You switched to ${activePlayer.name}`);
    };
    gameDiv.appendChild(btn);
  });
}

// ==================== INIT ====================
window.addEventListener('DOMContentLoaded', renderStarterSelection);

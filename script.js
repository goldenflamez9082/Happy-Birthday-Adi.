// ==================== MOVE POOLS ====================
const movePools = {
  fire: [
    { name: "Ember", power: 6 }, { name: "Flame Wheel", power: 8 },
    { name: "Fire Spin", power: 7 }, { name: "Flamethrower", power: 10 },
    { name: "Fire Punch", power: 9 }, { name: "Heat Wave", power: 10 },
    { name: "Fire Blast", power: 12 }, { name: "Incinerate", power: 8 }
  ],
  water: [
    { name: "Water Gun", power: 6 }, { name: "Bubble", power: 5 },
    { name: "Aqua Jet", power: 7 }, { name: "Surf", power: 10 },
    { name: "Hydro Pump", power: 12 }, { name: "Water Pulse", power: 8 },
    { name: "Aqua Tail", power: 9 }, { name: "Rain Dance", power: 0 }
  ],
  grass: [
    { name: "Vine Whip", power: 6 }, { name: "Razor Leaf", power: 8 },
    { name: "Leaf Blade", power: 10 }, { name: "Seed Bomb", power: 9 },
    { name: "Energy Ball", power: 10 }, { name: "Leech Seed", power: 0 },
    { name: "Solar Beam", power: 12 }, { name: "Leaf Storm", power: 12 }
  ],
  electric: [
    { name: "Thunder Shock", power: 6 }, { name: "Spark", power: 7 },
    { name: "Thunder Wave", power: 0 }, { name: "Thunderbolt", power: 10 },
    { name: "Thunder", power: 12 }, { name: "Volt Tackle", power: 10 },
    { name: "Wild Charge", power: 9 }, { name: "Charge Beam", power: 8 }
  ],
  flying: [
    { name: "Gust", power: 6 }, { name: "Air Cutter", power: 8 },
    { name: "Air Slash", power: 10 }, { name: "Wing Attack", power: 7 },
    { name: "Aerial Ace", power: 9 }, { name: "Hurricane", power: 12 },
    { name: "Sky Attack", power: 12 }, { name: "Brave Bird", power: 10 }
  ]
};

// ==================== STARTERS (GEN 1–3) ====================
const starters = [
  // Grass Starters
  { line: [
      { name: "Bulbasaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", hp: 20, evolveLevel: 5, moves: [movePools.grass[0], movePools.grass[1]] },
      { name: "Ivysaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", hp: 35, evolveLevel: 10, moves: [movePools.grass[1], movePools.grass[2]] },
      { name: "Venusaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", hp: 55, moves: [movePools.grass[2], movePools.grass[4]] }
  ]},
  { line: [
      { name: "Chikorita", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png", hp: 20, evolveLevel: 5, moves: [movePools.grass[0], movePools.grass[1]] },
      { name: "Bayleef", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png", hp: 35, evolveLevel: 10, moves: [movePools.grass[1], movePools.grass[2]] },
      { name: "Meganium", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png", hp: 55, moves: [movePools.grass[2], movePools.grass[4]] }
  ]},
  { line: [
      { name: "Turtwig", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png", hp: 20, evolveLevel: 5, moves: [movePools.grass[0], movePools.grass[1]] },
      { name: "Grotle", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png", hp: 35, evolveLevel: 10, moves: [movePools.grass[1], movePools.grass[2]] },
      { name: "Torterra", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png", hp: 55, moves: [movePools.grass[2], movePools.grass[4]] }
  ]},
  { line: [
      { name: "Snivy", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png", hp: 20, evolveLevel: 5, moves: [movePools.grass[0], movePools.grass[1]] },
      { name: "Servine", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png", hp: 35, evolveLevel: 10, moves: [movePools.grass[1], movePools.grass[2]] },
      { name: "Serperior", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png", hp: 55, moves: [movePools.grass[2], movePools.grass[4]] }
  ]},
  // Fire Starters
  { line: [
      { name: "Charmander", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", hp: 20, evolveLevel: 5, moves: [movePools.fire[0], movePools.fire[1]] },
      { name: "Charmeleon", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", hp: 35, evolveLevel: 10, moves: [movePools.fire[1], movePools.fire[3]] },
      { name: "Charizard", type: "fire/flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", hp: 55, moves: [movePools.fire[3], movePools.flying[2]] }
  ]},
  { line: [
      { name: "Cyndaquil", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png", hp: 20, evolveLevel: 5, moves: [movePools.fire[0], movePools.fire[1]] },
      { name: "Quilava", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png", hp: 35, evolveLevel: 10, moves: [movePools.fire[1], movePools.fire[3]] },
      { name: "Typhlosion", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png", hp: 55, moves: [movePools.fire[3], movePools.fire[5]] }
  ]},
  { line: [
      { name: "Fennekin", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png", hp: 20, evolveLevel: 5, moves: [movePools.fire[0], movePools.fire[1]] },
      { name: "Braixen", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png", hp: 35, evolveLevel: 10, moves: [movePools.fire[1], movePools.fire[3]] },
      { name: "Delphox", type: "fire/psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png", hp: 55, moves: [movePools.fire[3], movePools.fire[5]] }
  ]},
  // Water Starters
  { line: [
      { name: "Squirtle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", hp: 20, evolveLevel: 5, moves: [movePools.water[0], movePools.water[1]] },
      { name: "Wartortle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", hp: 35, evolveLevel: 10, moves: [movePools.water[1], movePools.water[3]] },
      { name: "Blastoise", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", hp: 55, moves: [movePools.water[3], movePools.water[4]] }
  ]},
  { line: [
      { name: "Totodile", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png", hp: 20, evolveLevel: 5, moves: [movePools.water[0], movePools.water[1]] },
      { name: "Croconaw", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png", hp: 35, evolveLevel: 10, moves: [movePools.water[1], movePools.water[3]] },
      { name: "Feraligatr", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png", hp: 55, moves: [movePools.water[3], movePools.water[4]] }
  ]},
  { line: [
      { name: "Mudkip", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png", hp: 20, evolveLevel: 5, moves: [movePools.water[0], movePools.water[1]] },
      { name: "Marshtomp", type: "water/ground", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png", hp: 35, evolveLevel: 10, moves: [movePools.water[1], movePools.water[3]] },
      { name: "Swampert", type: "water/ground", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png", hp: 55, moves: [movePools.water[3], movePools.water[4]] }
  ]}
];

// ==================== GYMS + ELITE FOUR + CHAMPION ====================
const gyms = [
  { name: "Brock", pokemon: [{ name: "Onix", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png", hp: 18, attack: 4 }] },
  { name: "Misty", pokemon: [{ name: "Staryu", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png", hp: 18, attack: 4 }] },
  { name: "Lt. Surge", pokemon: [{ name: "Voltorb", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png", hp: 20, attack: 5 }] },
  { name: "Erika", pokemon: [{ name: "Gloom", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png", hp: 18, attack: 4 }] },
  { name: "Koga", pokemon: [{ name: "Koffing", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png", hp: 20, attack: 5 }] },
  { name: "Katrina", pokemon: [{ name: "Alakazam", type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png", hp: 25, attack: 6 }] },
  { name: "Blaine", pokemon: [{ name: "Magmar", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png", hp: 22, attack: 6 }] },
  { name: "Giovanni", pokemon: [{ name: "Rhyhorn", type: "ground", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png", hp: 25, attack: 7 }] },
  { name: "Elite Four", pokemon: [
      { name: "Lorelei", type: "ice", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png", hp: 28, attack: 7 },
      { name: "Bruno", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png", hp: 30, attack: 8 },
      { name: "Agatha", type: "ghost", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", hp: 28, attack: 7 },
      { name: "Lance", type: "dragon", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png", hp: 32, attack: 9 }
  ]},
  { name: "Champion", pokemon: [
      { name: "Champion Pokémon", type: "mixed", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png", hp: 40, attack: 10 }
  ]}
];

// ==================== GAME STATE ====================
let currentGym = 0;
let player, playerHP, playerAttack, level = 1;
let enemy, enemyHP, enemyAttack, enemyIdx = 0;
let evoStage = 0;

// ==================== RENDER STARTER SELECTION ====================
function renderStarterSelection() {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `<h3>Choose your starter:</h3>`;
  starters.forEach((starter, idx) => {
    const btn = document.createElement('button');
    const base = starter.line[0];
    btn.innerHTML = `<img src="${base.img}" alt="${base.name}" width="50"><br>${base.name}`;
    btn.onclick = () => startGame(idx);
    btn.style.margin = "10px";
    gameDiv.appendChild(btn);
  });
}

// ==================== GAME LOOP ====================
function startGame(starterIdx) {
  evoStage = 0;
  player = { ...starters[starterIdx].line[evoStage] };
  playerHP = player.hp;
  playerAttack = 5;
  level = 1;
  currentGym = 0;
  enemyIdx = 0;
  nextBattle();
}

// ==================== NEXT BATTLE ====================
function nextBattle() {
  if (currentGym >= gyms.length) {
    document.getElementById('game').innerHTML = `<h3>Congratulations! You beat all gyms and the Champion! 🎉</h3>`;
    return;
  }
  enemy = { ...gyms[currentGym].pokemon[enemyIdx] };
  enemyHP = enemy.hp + level * 2;
  enemyAttack = enemy.attack + level - 1;
  renderBattle();
}

// ==================== RENDER BATTLE ====================
function renderBattle(message = "") {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h3>${currentGym < 8 ? "Gym Leader" : currentGym === 8 ? "Elite Four" : "Champion"}: ${gyms[currentGym].name}</h3>
    <div style="display:flex;align-items:center;gap:40px;justify-content:center;">
      <div>
        <img src="${player.img}" alt="${player.name}" width="80"><br>
        <b>${player.name}</b> (Lv ${level})<br>HP: ${playerHP}
      </div>
      <div>
        <img src="${enemy.img}" alt="${enemy.name}" width="80"><br>
        <b>${enemy.name}</b><br>HP: ${enemyHP}
      </div>
    </div>
    <div style="margin-top:15px;">
      ${player.moves.map((move, i) => `<button onclick="playerAttack(${i})">${move.name}</button>`).join(' ')}
    </div>
    <p>${message}</p>
  `;
}

// ==================== PLAYER ATTACK ====================
function playerAttack(moveIdx) {
  const move = player.moves[moveIdx];
  enemyHP -= move.power;
  if (enemyHP <= 0) {
    enemyIdx++;
    if (enemyIdx >= gyms[currentGym].pokemon.length) {
      level++;
      // Evolve if eligible
      if (player.evolveLevel && level >= player.evolveLevel && evoStage < starters.find(s => s.line.includes(player)).line.length - 1) {
        evoStage++;
        const newForm = starters.find(s => s.line.includes(player)).line[evoStage];
        player = { ...newForm };
        playerHP = player.hp;
        playerAttack = 5 + Math.floor(level/2);
        renderBattle(`Your Pokémon evolved into <b>${player.name}</b>! 🎉`);
        setTimeout(() => { currentGym++; enemyIdx = 0; nextBattle(); }, 2000);
        return;
      }
      playerHP = player.hp + (level - 1) * 2;
      playerAttack = 5 + Math.floor(level/2);
      currentGym++;
      enemyIdx = 0;
      renderBattle(`You defeated ${gyms[currentGym-1].name}!`);
      setTimeout(nextBattle, 2000);
      return;
    }
    enemy = { ...gyms[currentGym].pokemon[enemyIdx] };
    enemyHP = enemy.hp + level * 2;
    enemyAttack = enemy.attack + level - 1;
    renderBattle(`Next Pokémon!`);
    return;
  }
  setTimeout(enemyAttackTurn, 1000);
}

// ==================== ENEMY ATTACK ====================
function enemyAttackTurn() {
  playerHP -= enemyAttack;
  if (playerHP <= 0) {
    document.getElementById('game').innerHTML = `<h3>Your Pokémon fainted! Game Over 😢</h3>`;
    return;
  }
  renderBattle(`Enemy ${enemy.name} used its attack!`);
}

// ==================== INITIALIZE ====================
window.onload = () => {
  renderStarterSelection();
};

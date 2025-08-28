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
  ]},
  { line: [
    { name: "Cyndaquil", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png", hp: 20, evolveLevel: 5 },
    { name: "Quilava", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png", hp: 28, evolveLevel: 10 },
    { name: "Typhlosion", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png", hp: 42 }
  ]},
  { line: [
    { name: "Totodile", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png", hp: 20, evolveLevel: 5 },
    { name: "Croconaw", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png", hp: 28, evolveLevel: 10 },
    { name: "Feraligatr", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png", hp: 42 }
  ]}
];

// ==================== GYMS / ELITE / CHAMPION ====================
const gyms = [
  { name: "Brock", team: [starters[0].line[1], starters[0].line[2]] },
  { name: "Misty", team: [starters[2].line[1], starters[2].line[2]] },
  { name: "Lt. Surge", team: [starters[1].line[1], starters[1].line[2]] },
  { name: "Erika", team: [starters[0].line[2], starters[0].line[1]] },
  { name: "Korrina", team: [starters[1].line[2], starters[1].line[1]] },
  { name: "Elite Four Lorelei", team: [starters[2].line[2], starters[2].line[1]] },
  { name: "Elite Four Bruno", team: [starters[1].line[2], starters[1].line[1]] },
  { name: "Elite Four Agatha", team: [starters[0].line[2], starters[0].line[1]] },
  { name: "Elite Four Lance", team: [starters[1].line[2], starters[1].line[1]] },
  { name: "Champion", team: [starters[2].line[2], starters[2].line[1]] }
];

// ==================== GAME STATE ====================
let currentGym = 0;
let playerTeam = [];
let activePlayer, activeEnemy;
let playerHP, enemyHP;
let level = 1;
let evoStage = 0;

// ==================== UTILS ====================
function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// ==================== STARTER SELECTION ====================
function renderStarterSelection(){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = "<h3>Choose your starter:</h3>";
  starters.forEach((starter, idx)=>{
    const btn = document.createElement('button');
    const base = starter.line[0];
    btn.innerHTML = `<img src="${base.img}" width="50"><br>${base.name}`;
    btn.onclick = ()=>startGame(idx);
    btn.style.margin = "10px";
    gameDiv.appendChild(btn);
  });
}

// ==================== GAME START ====================
function startGame(starterIdx){
  evoStage = 0;
  playerTeam = [{...starters[starterIdx].line[evoStage]}];
  activePlayer = {...playerTeam[0]};
  playerHP = activePlayer.hp;
  level = 1;
  currentGym = 0;
  nextGym();
}

// ==================== NEXT GYM ====================
function nextGym(){
  if(currentGym >= gyms.length){
    document.getElementById('game').innerHTML = "<h3>Congratulations! You beat all gyms and the Champion! 🎉</h3>";
    return;
  }
  enemyTeam = gyms[currentGym].team.map(p=>({...p}));
  choosePlayerPokemon();
}

// ==================== PLAYER POKEMON CHOICE ====================
function choosePlayerPokemon(){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = "<h3>Choose a Pokémon for battle:</h3>";
  playerTeam.forEach((poke)=>{
    const btn = document.createElement('button');
    btn.innerHTML = `<img src="${poke.img}" width="50"><br>${poke.name} HP:${poke.hp}`;
    btn.onclick = ()=>{
      activePlayer = {...poke};
      playerHP = activePlayer.hp + level*2;
      startEnemyPokemon();
    };
    btn.style.margin = "10px";
    gameDiv.appendChild(btn);
  });
}

// ==================== START ENEMY POKEMON ====================
function startEnemyPokemon(){
  activeEnemy = {...enemyTeam[0]};
  enemyHP = activeEnemy.hp + level*2;
  renderBattle(`Battle vs ${gyms[currentGym].name}!`);
}

// ==================== BATTLE ====================
function renderBattle(message=""){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h3>${message}</h3>
    <div style="display:flex;justify-content:center;gap:50px;">
      <div>
        <img src="${activePlayer.img}" width="80"><br>
        <b>${activePlayer.name}</b><br>HP: ${playerHP}
      </div>
      <div>
        <img src="${activeEnemy.img}" width="80"><br>
        <b>${activeEnemy.name}</b><br>HP: ${enemyHP}
      </div>
    </div>
    <h4>Choose Move:</h4>
    <div id="moveButtons"></div>
    <button id="switchBtn">Switch Pokémon</button>
  `;
  const moveDiv = document.getElementById('moveButtons');
  const playerMoves = moves[activePlayer.type.split("/")[0]];
  playerMoves.forEach(move=>{
    const btn = document.createElement('button');
    btn.textContent = move.name;
    btn.onclick = ()=>playerAttackTurn(move);
    btn.style.margin = "5px";
    moveDiv.appendChild(btn);
  });
  document.getElementById('switchBtn').onclick = switchPlayerPokemon;
}

// ==================== PLAYER ATTACK ====================
function playerAttackTurn(move){
  enemyHP -= move.power;
  if(enemyHP <= 0){
    enemyTeam.shift();
    if(enemyTeam.length > 0){
      activeEnemy = {...enemyTeam[0]};
      enemyHP = activeEnemy.hp + level*2;
      renderBattle(`Enemy switched to ${activeEnemy.name}!`);
    } else {
      level++;
      checkEvolution();
      currentGym++;
      maybeDropCrate();
      nextGym();
      return;
    }
  }
  renderBattle(`You used ${move.name}! Enemy attacks next.`);
  setTimeout(enemyAttackTurn,1000);
}

// ==================== ENEMY ATTACK ====================
function enemyAttackTurn(){
  const movePool = moves[activeEnemy.type.split("/")[0]] || moves.fire;
  const move = randomChoice(movePool);
  playerHP -= move.power;
  if(playerHP <= 0){
    const remaining = playerTeam.filter(p=>p.hp > 0 && p !== activePlayer);
    if(remaining.length > 0){
      activePlayer = {...remaining[0]};
      playerHP = activePlayer.hp + level*2;
      renderBattle(`Your ${activePlayer.name} entered battle!`);
      return;
    } else {
      document.getElementById('game').innerHTML = "<h3>You lost! Try again.</h3><button onclick='renderStarterSelection()'>Restart</button>";
      return;
    }
  }
  renderBattle(`Enemy used ${move.name}! Your turn.`);
}

// ==================== SWITCH PLAYER POKEMON ====================
function switchPlayerPokemon(){
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = "<h3>Choose a Pokémon to switch:</h3>";
  playerTeam.forEach((poke)=>{
    if(poke !== activePlayer){
      const btn = document.createElement('button');
      btn.innerHTML = `<img src="${poke.img}" width="50"><br>${poke.name} HP:${poke.hp}`;
      btn.onclick = ()=>{
        activePlayer = {...poke};
        playerHP = activePlayer.hp + level*2;
        renderBattle(`You switched to ${activePlayer.name}`);
      };
      btn.style.margin = "10px";
      gameDiv.appendChild(btn);
    }
  });
}

// ==================== EVOLUTION ====================
function checkEvolution(){
  const evoLine = starters.find(s=>s.line.some(p=>p.name===activePlayer.name)).line;
  const stage = evoLine.findIndex(p=>p.name===activePlayer.name);
  if(evoLine[stage].evolveLevel && level >= evoLine[stage].evolveLevel && stage < evoLine.length-1){
    activePlayer = {...evoLine[stage+1]};
    playerTeam[playerTeam.findIndex(p=>p.name===activePlayer.name)] = {...activePlayer};
    renderBattle(`Your Pokémon evolved into ${activePlayer.name}! 🎉`);
  }
}

// ==================== CRATE ====================
function maybeDropCrate(){
  if(Math.random()<0.5){
    const newPoke = randomChoice(starters).line[0];
    playerTeam.push({...newPoke});
    alert(`You found a crate! You got a ${newPoke.name}!`);
  }
}

// ==================== INIT ====================
window.addEventListener('DOMContentLoaded', renderStarterSelection);

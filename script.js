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
  { name: "Brock", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Misty", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Lt. Surge", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Erika", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Korrina", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Elite Four Lorelei", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Elite Four Bruno", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Elite Four Agatha", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Elite Four Lance", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) },
  { name: "Champion", getPokemon: playerTeam => ({ ...playerTeam[playerTeam.length-1] }) }
];

// ==================== GAME STATE ====================
let currentGym = 0;
let playerTeam = [1];
let player, enemy, playerHP, enemyHP, playerAttack, enemyAttack, level=1, evoStage=0;

// ==================== UTILS ====================
function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// ==================== RENDER STARTER ====================
function renderStarterSelection(){
  const gameDiv=document.getElementById('game');
  gameDiv.innerHTML="<h3>Choose your starter:</h3>";
  starters.forEach((starter, idx)=>{
    const btn=document.createElement('button');
    const base=starter.line[0];
    btn.innerHTML=`<img src="${base.img}" width="50"><br>${base.name}`;
    btn.onclick=()=>startGame(idx);
    btn.style.margin="10px";
    gameDiv.appendChild(btn);
  });
}

// ==================== GAME LOOP ====================
function startGame(starterIdx){
  evoStage=0;
  playerTeam=[{...starters[starterIdx].line[evoStage]}];
  player={...playerTeam[0]};
  playerHP=player.hp;
  playerAttack=player.hp/4|0;
  level=1;
  currentGym=0;
  nextGym();
}

// ==================== NEXT GYM ====================
function nextGym(){
  if(currentGym>=gyms.length){
    document.getElementById('game').innerHTML="<h3>Congratulations! You beat all gyms and the Champion! 🎉</h3>";
    return;
  }
  enemy={...gyms[currentGym].getPokemon(playerTeam)};
  enemyHP=enemy.hp+level*2;
  enemyAttack=Math.floor(enemyHP/4);
  renderBattle(`Gym Leader: ${gyms[currentGym].name}`);
}

// ==================== BATTLE ====================
function renderBattle(message=""){
  const gameDiv=document.getElementById('game');
  gameDiv.innerHTML=`
    <h3>${message}</h3>
    <div style="display:flex;align-items:center;gap:40px;justify-content:center;">
      <div>
        <img src="${player.img}" width="80"><br>
        <b>${player.name}</b> (Lv ${level})<br>HP: ${playerHP}
      </div>
      <div>
        <img src="${enemy.img}" width="80"><br>
        <b>${enemy.name}</b><br>HP: ${enemyHP}
      </div>
    </div>
    <button id="attackBtn">Attack</button>
    <p>${message}</p>
  `;
  document.getElementById('attackBtn').onclick=playerAttackTurn;
}

// ==================== BATTLE LOGIC ====================
function playerAttackTurn(){
  const move=randomChoice(moves[player.type.split("/")[0]]);
  enemyHP-=move.power;
  if(enemyHP<=0){
    level++;
    checkEvolution();
    playerHP=player.hp+level*2;
    currentGym++;
    renderBattle(`You defeated ${enemy.name}! Level up!`);
    setTimeout(nextGym,1500);
    maybeDropCrate();
    return;
  }
  renderBattle(`You used ${move.name}! Enemy attacks next.`);
  setTimeout(enemyAttackTurn,1000);
}

function enemyAttackTurn(){
  const move=randomChoice(moves[enemy.type.split("/")[0]]);
  playerHP-=move.power;
  if(playerHP<=0){
    document.getElementById('game').innerHTML="<h3>You lost! Try again.</h3><button onclick='renderStarterSelection()'>Restart</button>";
    return;
  }
  renderBattle(`Enemy used ${move.name}! Your turn.`);
}

// ==================== EVOLUTION ====================
function checkEvolution(){
  const evoLine=starters.find(s=>s.line.some(p=>p.name===player.name)).line;
  if(evoLine[evoStage].evolveLevel && level>=evoLine[evoStage].evolveLevel && evoStage<evoLine.length-1){
    evoStage++;
    player={...evoLine[evoStage]};
    playerTeam[playerTeam.length-1]={...player};
    renderBattle(`Your Pokémon evolved into ${player.name}! 🎉`);
  }
}

// ==================== CRATE ====================
function maybeDropCrate(){
  if(Math.random()<0.5){
    const newPoke=randomChoice(starters).line[0];
    playerTeam.push({...newPoke});
    alert(`You found a crate! You got a ${newPoke.name}!`);
  }
}

// ==================== INIT ====================
window.addEventListener('DOMContentLoaded', renderStarterSelection);

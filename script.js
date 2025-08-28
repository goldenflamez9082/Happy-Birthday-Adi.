const starters = [
  { name: "Bulbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", hp: 20, attack: 5 },
  { name: "Cyndaquil", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png", hp: 20, attack: 5 },
  { name: "Mudkip", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png", hp: 20, attack: 5 },
  { name: "Turtwig", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png", hp: 20, attack: 5 },
  { name: "Snivy", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png", hp: 20, attack: 5 },
  { name: "Fennekin", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png", hp: 20, attack: 5 },
  { name: "Rowlet", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png", hp: 20, attack: 5 },
  { name: "Scorbunny", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png", hp: 20, attack: 5 },
  { name: "Sprigatito", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png", hp: 20, attack: 5 }
];

const gyms = [
  { name: "Brock", pokemon: { name: "Onix", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png", hp: 18, attack: 4 } },
  { name: "Misty", pokemon: { name: "Staryu", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png", hp: 18, attack: 4 } },
  { name: "Lt. Surge", pokemon: { name: "Voltorb", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png", hp: 18, attack: 4 } },
  { name: "Erika", pokemon: { name: "Gloom", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png", hp: 18, attack: 4 } },
  { name: "Korrina", pokemon: { name: "Lucario", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png", hp: 20, attack: 5 } }
];

let currentGym = 0;
let player, enemy, playerHP, enemyHP, playerAttack, enemyAttack, level = 1;

function renderStarterSelection() {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `<h3>Choose your starter:</h3>`;
  starters.forEach((starter, idx) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<img src="${starter.img}" alt="${starter.name}" width="50"><br>${starter.name}`;
    btn.onclick = () => startGame(idx);
    btn.style.margin = "10px";
    btn.style.display = "inline-block";
    btn.style.verticalAlign = "top";
    gameDiv.appendChild(btn);
  });
}

function startGame(starterIdx) {
  player = { ...starters[starterIdx] };
  playerHP = player.hp;
  playerAttack = player.attack;
  level = 1;
  currentGym = 0;
  nextGym();
}

function nextGym() {
  if (currentGym >= gyms.length) {
    document.getElementById('game').innerHTML = `<h3>Congratulations! You beat all gyms! 🎉</h3>`;
    return;
  }
  enemy = { ...gyms[currentGym].pokemon };
  enemyHP = enemy.hp + level * 2;
  enemyAttack = enemy.attack + level - 1;
  renderBattle();
}

function renderBattle(message = "") {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h3>Gym Leader: ${gyms[currentGym].name}</h3>
    <div style="display:flex;align-items:center;gap:40px;">
      <div>
        <img src="${player.img}" alt="${player.name}" width="80"><br>
        <b>${player.name}</b> (Level ${level})<br>HP: ${playerHP}
      </div>
      <div>
        <img src="${enemy.img}" alt="${enemy.name}" width="80"><br>
        <b>${enemy.name}</b><br>HP: ${enemyHP}
      </div>
    </div>
    <button id="attackBtn">Attack</button>
    <p>${message}</p>
  `;
  document.getElementById('attackBtn').onclick = playerAttackTurn;
}

function playerAttackTurn() {
  enemyHP -= playerAttack;
  if (enemyHP <= 0) {
    level++;
    playerHP = player.hp + (level - 1) * 2;
    playerAttack = player.attack + Math.floor(level / 2);
    currentGym++;
    renderBattle("You won! Level up! Proceeding to next gym...");
    setTimeout(nextGym, 1500);
    return;
  }
  renderBattle("You attacked! Now enemy attacks...");
  setTimeout(enemyAttackTurn, 1000);
}

function enemyAttackTurn() {
  playerHP -= enemyAttack;
  if (playerHP <= 0) {
    document.getElementById('game').innerHTML = `<h3>You lost! Try again.</h3><button onclick="renderStarterSelection()">Restart</button>`;
    return;
  }
  renderBattle("Enemy attacked! Your turn.");
}

window.addEventListener('DOMContentLoaded', renderStarterSelection);

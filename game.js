/*----------  Game Clock  ----------*/
//Function to delay itterations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Function to count time 
async function gameClock() {
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            for (let seconds = 0; seconds < 60; seconds++) {
                const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                time.querySelector('#gameTime').textContent = timeString;
                await sleep(1000);
            };
        };
    };
};



/*----------  Elements  ----------*/
const pointsDisplay = document.getElementById('points')
const levelDisplay = document.getElementById('level')
const timeDisplay = document.getElementById('gameTime')

const playerImage = document.getElementById('player')
const powerButton = document.getElementById('powerButton')
const speedButton = document.getElementById('speedButton')
const projectileButton = document.getElementById('projButton')

const powerCountDisplay = document.getElementById('powerCount')
const speedCountDisplay = document.getElementById('speedCount')
const projectileCountDisplay = document.getElementById('projCount')

const enemyNameDisplay = document.getElementById('enemyName')
const enemyImage = document.getElementById('enemy')
const enemyHpBar = document.getElementById('enemyHpBar')
const enemyHpBarFill = document.getElementById('barFill')

/*----------  Variables  ----------*/
let gameLevel = 1
let points = 0
let power = 1
let speed = 1 
let projectiles = 1
let powerUpgrade = 5
let speedUpgrade = 5
let projectileUpgrade = 20

powerCountDisplay.textContent = power
speedCountDisplay.textContent = speed
projectileCountDisplay.textContent = projectiles

powerButton.textContent = `Power (Upgrade: ${powerUpgrade})`
speedButton.textContent = `Speed (Upgrade: ${speedUpgrade})`
projectileButton.textContent = `Projectile (Upgrade: ${projectileUpgrade})`

pointsDisplay.textContent = `Points: ${points}`
levelDisplay.textContent = `Level: ${gameLevel}`

/*----------  Enemy  ----------*/
class Enemy {
    constructor(name, health, image) {
        this.name = name
        this.health = health
        this.image = image
    }
}

const e1 = new Enemy('Byte', 8, '')
const e2 = new Enemy('L0v3L4c3', 16, '')
const e3 = new Enemy('ILOVEYOU', 32, '')
const e4 = new Enemy('ASTRA', 64, '')
const e5 = new Enemy('Creeper', 128, '')
const e6 = new Enemy('ARPANET', 256, '')
const e7 = new Enemy('WannaCry', 512, '')
const e8 = new Enemy('Kilo', 1024, '')
const e9 = new Enemy('Mitnick', 2048, '')
const e10 = new Enemy('MyDoom', 4096, '')

let enemyList = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10]


/*----------  Functions  ----------*/
powerButton.addEventListener('click', function() {
    power += 1
    powerCountDisplay.textContent = power
    powerUpgrade = (power * power) * 5
    powerButton.textContent = `Power (Upgrade: ${powerUpgrade})`
}) 

speedButton.addEventListener('click', function() {
    speed += 1
    speedCountDisplay.textContent = speed
    speedUpgrade = (speed * speed) * 5
    speedButton.textContent = `Speed (Upgrade: ${speedUpgrade})`
}) 

projectileButton.addEventListener('click', function() {
    projectiles += 1
    projectileCountDisplay.textContent = projectiles
    projectileUpgrade = (projectiles * projectiles) * 20
    projectileButton.textContent = `Projectile (Upgrade: ${projectileUpgrade})`
}) 

function pullEnemy() {
    let enemyIndex = gameLevel - 1
    let currentEnemy = enemyList[enemyIndex]

    enemyNameDisplay.textContent = currentEnemy.name
    enemyImage.style.backgroundImage = `url(${currentEnemy.image})`
    enemyHpBarFill.textContent = `${currentEnemy.health}`
    
    return currentEnemy
}

function combat() {
    
}


/*----------  Game  ----------*/
pullEnemy()

function game() {
    gameClock()
}

game()

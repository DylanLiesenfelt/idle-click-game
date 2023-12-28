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

let power = 1
let speed = 1
let projectile = 1
let gameLevel = 1
let points = 0
let powerUpgradeCost = 500
let speedUpgradeCost = 500
let projUpgradeCost = 500

const displayPowerLevel = document.getElementById('powerCount')
const displaySpeedLevel = document.getElementById('speedCount')
const displayProjLevel = document.getElementById('projCount')
const displayCurrentLevel = document.getElementById('level')
const displayPoints = document.getElementById('points')

displayPowerLevel.textContent = power
displaySpeedLevel.textContent = speed
displayProjLevel.textContent = projectile
displayCurrentLevel.textContent = `Current Level: ${gameLevel}`
displayPoints.textContent = `Points: ${points}`

class Enemy {
    constructor(name, level, hp, image) {
        this.name = name
        this.level = level
        this.hp = hp
        this.image = image
    }
}

const e1 = new Enemy('Byte', 1, 8, '/enemyImages/e1.jpg')
const e2 = new Enemy('Bugbear', 2, 16, '/enemyImages/e2.jpg')
const e3 = new Enemy('10v314c3', 3, 32, '/enemyImages/e3.jpg')
const e4 = new Enemy('Sasser', 4, 64, '/enemyImages/e4.jpg')
const e5 = new Enemy('Code Red', 5, 128, '/enemyImages/e5.jpg')
const e6 = new Enemy('WannaCry', 6, 256, '/enemyImages/e6.jpg')
const e7 = new Enemy('DARPANET', 7, 512, '/enemyImages/e7.jpg')
const e8 = new Enemy('Kilo', 8, 1024, '/enemyImages/e8.jpg')
const e9 = new Enemy('ILOVEYOU', 9, 2048, '/enemyImages/e9.jpg')
const e10 = new Enemy('Mydoom', 10, 4096, '/enemyImages/e10.jpg')
const e11 = new Enemy('Mitnick', 11, 8192, '/enemyImages/e11.jpg')

let enemyIndex = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11]

enemyLeft = enemyIndex.length

function assignEnemy(enemyLeft, enemyIndex) {
    assigned = enemyIndex.length - enemyLeft
    enemyLeft -= 1
    console.log('enemy left:', enemyLeft)
    return enemyIndex[assigned]
}

function loadEnemy(enemy) {
    const maxHp = enemy.hp
    let currentHp = (enemy.hp / maxHp) * 100
    document.getElementById('enemyName').textContent = `${enemy.name}`
    document.getElementById('enemy').style.backgroundImage = `url(${enemy.image})`
    document.getElementById('barFill').style.width = `${currentHp}%`
}


function combat(enemy) {
    enemy.hp -= power * projectile

    return true
}
 
function game() {
    console.log('Game Running')
    gameClock()
    if (gameLevel <= 11) {
        currentEnemy = assignEnemy(enemyLeft, enemyIndex)
        loadEnemy(currentEnemy)
        let dama = combat(currentEnemy)
        console.log(dama)
    }
}

game()


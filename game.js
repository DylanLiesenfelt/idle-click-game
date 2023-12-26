let power = 1
let speed = 1
let projectile = 1

let powerUpgradeCost = 500
let speedUpgradeCost = 500
let projUpgradeCost = 500

const displayPowerLevel = document.getElementById('powerCount')
const displaySpeedLevel = document.getElementById('speedCount')
const displayProjLevel = document.getElementById('projCount')

displayPowerLevel.textContent = power
displaySpeedLevel.textContent = speed
displayProjLevel.textContent = projectile



class Enemy {
    constructor(name, level, hp, image) {
        this.name = name
        this.level = level
        this.hp = hp
        this.image = image
    }
}

const e1 = new Enemy('1', 1, (level * level) * 10, '')
const e2 = new Enemy('2', 2, (level * level) * 10, '')
const e3 = new Enemy('3', 3, (level * level) * 10, '')
const e4 = new Enemy('4', 4, (level * level) * 10, '')
const e5 = new Enemy('5', 5, (level * level) * 10, '')
const e6 = new Enemy('6', 6, (level * level) * 10, '')
const e7 = new Enemy('7', 7, (level * level) * 10, '')
const e8 = new Enemy('8', 8, (level * level) * 10, '')
const e9 = new Enemy('9', 9, (level * level) * 10, '')
const e10 = new Enemy('10', 10, (level * level) * 10, '')
const e11 = new Enemy('11', 11, (level * level) * 10, '')

let enemyIndex = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11]




function combat() {
    

    return true
}

enemyDefeated = combat()

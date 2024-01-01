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


/*----------  Variables  ----------*/
let gameLevel = 1
let power = 1
let speed = 1 
let projectiles = 1

/*----------  Elements  ----------*/
const pointsDisplay = document.getElementById('points')
const levelDisplay = document.getElementById('level')
const timeDisplay = document.getElementById('gameTime')
const playerImage = document.getElementById('player')
const  = document.getElementById('points')
const pointsDisplay = document.getElementById('points')
const pointsDisplay = document.getElementById('points')
const pointsDisplay = document.getElementById('points')
const pointsDisplay = document.getElementById('points')
const pointsDisplay = document.getElementById('points')
const pointsDisplay = document.getElementById('points')
const pointsDisplay = document.getElementById('points')

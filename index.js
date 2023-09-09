const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

setInterval(loop, 1000/10)
document.addEventListener('keydown', onKeyPress )

const width = canvas.width
const height = canvas.height


let posX = 0
let posY = 0
let appleX = 10
let appleY = 10
let vx = 0
let vy = 0
let snakes = []
let score = 3



function draw() {
    ctx.fillStyle= 'black'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle= 'red'
    ctx.fillRect(appleX * 20, appleY * 20, 20 - 5, 20 - 5)
    ctx.fillStyle= 'white'
    ctx.font= '30px Arial'
    ctx.fillText(score -3, 15, 35)
    ctx.fillStyle= 'green'
    snakes.forEach((t) => {
       ctx.fillRect(t.posX * 20, t.posY * 20, 20 - 5, 20 - 5)
    })

}


function update() {
    posX += vx
    posY += vy

    if(snakes.length > score) {
        snakes.shift()
    }

    if(appleX === posX && appleY === posY) {
       appleX = Math.floor(Math.random() * 20)
       appleY = Math.floor(Math.random() * 20)

       score += 1
    }

    if(posX < 0) { posX = 20 }
    if(posX > 20) { posX = 0 }
    if(posY < 0) { posY = 20 }
    if(posY > 20) { posY = 0 }

    snakes.push({ posX: posX, posY: posY })

}


function loop() {
   draw()
   update()
}


function onKeyPress(e) {
    // right
    if(e.keyCode === 39 && vx !== -1) {
        vx = +1
        vy = 0
    }
    // left
    if(e.keyCode === 37 && vx !== 1) {
         vx = -1
         vy = 0
    }
    // up
    if(e.keyCode === 38 && vy !==1) {
        vx = 0
        vy = -1
    }
    // down
    if(e.keyCode === 40 && vy !== -1) {
        vx = 0
        vy = +1
    }
}
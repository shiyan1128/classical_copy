// const canvas = document.getElementById("canvas")
const canvas2 = document.getElementById("canvas2")
// const ctx = canvas.getContext("2d")
const ctx2 = canvas2.getContext("2d")
const btn = document.querySelector('div')
const img = new Image()
    getCode()
    btn.onclick = () => {
        getCode()
    }
    function getCode() {
        ctx2.clearRect(0, 0, 50, 25)
        let backgc = getColor()
        canvas2.style.backgroundColor = `rgba(${backgc},0.4)`
        let textColor = getColor()
        ctx2.fillStyle = `rgb(${textColor})`
        let fontS = randomNumber(10, 20)
        ctx2.font = `${fontS}px serif`
        let x = randomNumber(0, 15)
        let y = randomNumber(15, 20)
        let randomCode = getRandomCode(4)
        ctx2.fillText(randomCode, x, y)
        randomCycle(50, ctx2, textColor)
        randomLine(2, ctx2, textColor)
    }

function getColor() {
    let r = randomNumber(0, 255)
    let g = randomNumber(0, 255)
    let b = randomNumber(0, 255)
    return `${r},${g},${b}`
}
function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
}
function getrandomCount(start, randomS, randomE) {
    return start + Math.round(Math.random() * (randomE - randomS) + randomS)
}
function randomCycle(num, ctx, color) {
    for (let i = 0; i < num; i++) {
        let x = randomNumber(5, 45)
        let y = randomNumber(5, 45)
        ctx.beginPath()
        ctx.fillStyle = `rgba(${color},1)`
        ctx.arc(x, y, 0.5, 0, Math.PI * 2)
        ctx.fill()
    }
}
function randomLine(num, ctx, color) {
    for (let i = 0; i < num; i++) {
        let x = randomNumber(5, 20)
        let y = randomNumber(2, 20)
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${color},1)`
        ctx.lineWidth = 1
        ctx.moveTo(x, y)
        x = randomNumber(40, 50)
        y = randomNumber(2, 20)
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}
function getRandomCode(number) {
    let str = ''
    let arr = ['num', 'Bcode', 'scode']
    let obj = {
        num() {
            return getrandomCount(48, 0, 9)
        },
        Bcode() {
            return getrandomCount(65, 0, 25)
        },
        scode() {
            return getrandomCount(97, 0, 25)
        }
    }
    for (let i = 0; i < number; i++) {
        let local = randomNumber(0, 2)
        let key = arr[local]
        let value = obj[key]()
        str += String.fromCharCode(value)
    }
    return str
}
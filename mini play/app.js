const board = document.querySelector('#board')
// const colors = ['#fe439d', '#faa86f', '#fed369', '#fdeec2', '#fcf9f6', '#fac9db']
// const colors = ['#fbb9c5', '#fdd0b1', '#f9efc7', '#c3edbf', '#b8dfe6', '#c5bbd']
// const colors = ['#ffb400', '#ff7c15', '#ed4672', '#ff99b7', '#ffdac5']
const colors = ['#af87ce', '#ea1a7f', '#fec603', '#a8f387', '#16d6fa']

const SQUARES_NUMBER = 550


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(e) {
    const el = e.target
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    const el = e.target
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
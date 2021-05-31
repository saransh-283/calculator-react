const pane = document.getElementById('top-pane')
const calc = document.getElementById('calc-inner')
const body = document.getElementsByTagName('body')[0]

var cursor
var calcCoords


function mouseDownEvent(e) {
    cursor = [e.clientX, e.clientY]
    calcCoords = [calc.getBoundingClientRect().left, calc.getBoundingClientRect().top]

    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseup', mouseUpEvent)
}

function mouseMoveEvent(e) {
    var cursorNow = [e.clientX, e.clientY]

    calc.style.top = `${calcCoords[1]+(cursorNow[1]-cursor[1])}px`
    calc.style.left = `${calcCoords[0]+(cursorNow[0]-cursor[0])}px`

    //console.log([cursorNow[0], cursor[0], cursorNow[1] - cursor[1]])
}

function mouseUpEvent() {
    document.removeEventListener('mousemove', mouseMoveEvent)
    document.removeEventListener('mouseup', mouseUpEvent)
}




pane.addEventListener('mousedown', mouseDownEvent)
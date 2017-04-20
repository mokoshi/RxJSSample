
const canvas = document.getElementById("c")
const ctx = canvas.getContext("2d")

function drawLine(fromX, fromY, toX, toY) {
  ctx.beginPath()
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}

const mouseupStream = Rx.Observable.fromEvent(canvas, "mouseup")
const mousedownStream = Rx.Observable.fromEvent(canvas, "mousedown")
const mousemoveStream = Rx.Observable.fromEvent(canvas, "mousemove")

drawLine(10, 10, 100, 100)

/*
const drawStream = ...

drawStream
  .subscribe(v => {
    drawLine(...)
  })
*/

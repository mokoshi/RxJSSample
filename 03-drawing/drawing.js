
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

const drawStream = mousedownStream
  .flatMap(e => {
    return mousemoveStream
      .takeUntil(mouseupStream)
      .scan((acc, v) => {
        return {
          prev: acc.current,
          current: v,
        }
      }, {prev: null, current: e})
  })

drawStream
  .subscribe(v => {
    drawLine(
      v.prev.offsetX,
      v.prev.offsetY,
      v.current.offsetX,
      v.current.offsetY
    )
  })

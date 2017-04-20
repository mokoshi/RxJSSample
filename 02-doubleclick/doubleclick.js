
const btn = document.getElementById("btn")

const clickStream = Rx.Observable.fromEvent(btn, "click")
const doubleClickStream = clickStream
  .buffer(clickStream.debounce(250))
  .map(clicks => clicks.length)
  .filter(n => n === 2)

doubleClickStream
  .subscribe(() => {
    console.log("double clicked!")
  })
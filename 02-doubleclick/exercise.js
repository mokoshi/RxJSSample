
const btn = document.getElementById("btn")

const clickStream = Rx.Observable.fromEvent(btn, "click")

/*
const doubleClickStream = ...

doubleClickStream
  .subscribe(() => {
    console.log("double clicked!")
  })
*/

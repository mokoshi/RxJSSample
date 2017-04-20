
const btn = document.getElementById("btn")

const clickStream = Rx.Observable.fromEvent(btn, "click")

/*
const counterStream = ...

counterStream
  .subscribe(v => {
    console.log(v)
  })
*/

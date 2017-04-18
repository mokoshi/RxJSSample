
const btn = document.getElementById("btn")

const clickStream = Rx.Observable.fromEvent(btn, "click")

const counterStream = clickStream
  .map(() => 1)
  .scan((acc, x) => acc + x)

counterStream
  .subscribe(v => {
    console.log(v)
  })

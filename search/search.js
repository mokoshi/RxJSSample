
const input = document.getElementById("keyword")

function searchWikipedia(term) {
  return $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }
  }).promise();
}

const keyupStream = Rx.Observable.fromEvent(input, "keyup")
const keywordStream = keyupStream
  .map(e => e.target.value)
  .filter(keyword => keyword.length > 2)
  .debounce(500)
  .distinctUntilChanged()

const responseStream = keywordStream.flatMap(searchWikipedia)

const resultStream = Rx.Observable.zip(
  responseStream.flatMap(r => r[1]),
  responseStream.flatMap(r => r[2]),
  responseStream.flatMap(r => r[3]),
  (title, description, url) => {
    return {title, description, url}
  }
)

keywordStream
  .subscribe(() => {
    $("#result").empty()
  })

resultStream
  .subscribe(r => {
    $("#result").append(`<li><a href="${r.url}">${r.title}</a> - ${r.description}</li>`)
  })

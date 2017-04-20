
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

searchWikipedia("DeNA")
  .then(v => console.log(v))

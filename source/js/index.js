import 'whatwg-fetch'
import isUndefined from 'lodash/isUndefined'

var randomLinkEl = document.getElementsByClassName('js-random-gif')[0]

if (!isUndefined(randomLinkEl)) {
  fetch('/gifs.json')
    .then((res) => {return res.json()})
    .then(function (json) {
      var randomUrl = json[Math.floor(Math.random() * json.length)]
      console.log(randomUrl)
      randomLinkEl.href = randomUrl
    })
}

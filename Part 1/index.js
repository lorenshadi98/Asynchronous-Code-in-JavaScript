// Part 1: Number Facts
/* 1.Make a request to the Numbers API (http://numbersapi.com/)
to get a fact about your favorite number.
 (Make sure you get back JSON by including the json query key, specific to this API.
*/
axios
  .get('http://numbersapi.com/23?json')
  .then((request1) =>
    $('#first-result').text('First request result: ' + request1.data.text)
  )
  .catch((err) => console.log('error detected', err));

/* 2. Figure out how to get data on multiple numbers in a single request. 
Make that request and when you get the data back, put all of the number facts on the page. */
axios
  .get('http://numbersapi.com/1..5,10')
  .then((res) => {
    for (let num in res.data) {
      let $fact = $('<li></li>').text(res.data[num]);
      $('#second-part').append($fact);
    }
  })
  .catch((err) => console.log(err));

/*3.Use the API to get 4 facts on your favorite number. 
Once you have them all, put them on the page.
It’s okay if some of the facts are repeats.
 (Note: You’ll need to make multiple requests for this.) */

let fourFacts = [];
for (let i = 1; i < 5; i++) {
  fourFacts.push(axios.get(`http://numbersapi.com/${i * 3}?json`));
}
Promise.all(fourFacts).then((factsArr) =>
  factsArr.forEach((fact) => {
    let $newfact = $('<li></li>').text(fact.data.text);
    $('#third-part').append($newfact);
  })
);

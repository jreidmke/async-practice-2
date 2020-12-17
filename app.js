const btn = $('button');
const input = $('input');
const fact = $('h2')

async function fetchData(num) {
    const baseURL = `http://numbersapi.com/${num}/trivia?json`;
    const resp = await axios.get(baseURL);
    fact.text(resp.data.text);
}

btn.on('click', function(e) {e.preventDefault()});
btn.on('click', () => fetchData(input.val()));
const btn = $('button');
const input = $('input');
const factList = $('ul')

async function fetchData(num) {
    const baseURL = `http://numbersapi.com/${num}/trivia?json`;
    const resp = await axios.get(baseURL);
    console.log(resp.data.text);
    factList.append(`<li>${resp.data.text}</li>`);
}

btn.on('click', function(e) {e.preventDefault()});
btn.on('click', () => fetchData(input.val()));
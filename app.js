const btn = $('#submit');
const input = $('input');
const factList = $('ul');
const clear = $('#clear');

async function fetchData() {
    const nums = input.val()
    const baseURL = `http://numbersapi.com/${nums}/trivia?json`;
    const resp = await axios.get(baseURL);
    console.log(nums.includes(','));
    if(!nums.includes(',')) {
        factList.append(`<li>${resp.data.text}</li>`)
    } else {
        for(let fact in resp.data) {
            factList.append(`<li>${resp.data[fact]}</li>`);
        }
    }
    input.val('');
}

btn.on('click', function(e) {e.preventDefault()});
btn.on('click', fetchData);
clear.on('click', () => factList.empty());
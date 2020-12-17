//Number facts stuff.

const btn = $('#submit');
const input = $('input');
const factList = $('ul');
const clear = $('#clear');

async function fetchData() {
    const nums = input.val()
    const baseURL = `http://numbersapi.com/${nums}/trivia?json`;
    try {
        const resp = await axios.get(baseURL);
        if(!nums.includes(',')) {
            factList.append(`<li>${resp.data.text}</li>`)
        } else {
            for(let fact in resp.data) {
                factList.append(`<li>${resp.data[fact]}</li>`);
            }
        } 
    }
    catch (error) {
        console.log(error);
        alert(error + ". Please make sure your numbers are seperated with commas, not spaces (ex: 1,2,4,85)");
    }
    input.val('');
};

btn.on('click', function(e) {e.preventDefault()});
btn.on('click', fetchData);
clear.on('click', () => factList.empty());

//Card stuff

const cardBtn = $('#draw-card');
const cardImg = $("#cardImg");

$(document).ready(shuffleDeck);

let deckId;

async function shuffleDeck() {
    const resp = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    deckId = resp.data.deck_id;
}

async function drawCard() {
    try { 
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        if(resp.data.remaining === 0) {
            alert('All Out! To restart, refresh the page.');
        }
        const card = resp.data.cards[0];
        cardImg.attr('src', card.image);
    } 
    catch (error) {
        alert('Something went wrong!');
    }
}

cardBtn.on('click', drawCard);
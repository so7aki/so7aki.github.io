const answerBtn = document.querySelector("#js-quote-text");
answerBtn.addEventListener('click', getQuote);

const answerText = document.querySelector('#js-answer-text');


const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
   // console.log("Test")
   try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json['question']);
        displayQuote(json['question']);
        console.log(json['answer']);
        answerText.textContent = '';
   } catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
   }

}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;

}

function getAnswer() {
    answerText.textContent
}

getQuote();


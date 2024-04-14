const quoteText = document.querySelector("#js-quote-text");
const authorText = document.querySelector("#js-author-text");
const generateBtn = document.querySelector("#js-new-quote");
const tweetBtn = document.querySelector("#js-tweet-button");

const endpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

generateBtn.addEventListener("click", async () => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const [quote] = await response.json();
        quoteText.textContent = `"${quote}"`;
        authorText.textContent = `- Ron Swanson`;
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        quoteText.textContent = "Failed to fetch quote. Please try again.";
        authorText.textContent = "";
    }
});

tweetBtn.addEventListener("click", () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quoteText.textContent} ${authorText.textContent}`)}`;
    window.open(tweetUrl, '_blank');
});



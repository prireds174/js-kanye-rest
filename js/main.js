console.log("👀")

const url = "https://api.kanye.rest/"

const options = {
    method: 'GET',
    headers: {}
}

function newQuote() {

    fetch(url, options).then((resp) => {

        console.log(resp)
        resp.json().then((data) => {
            console.log("The data", data.quote)
            displayWisdom(data.quote)

        })
        function displayWisdom(quote) {
            const kanyeWords = document.getElementById('words')

            kanyeWords.innerText = quote

            //words.appendChild(kanyeWords)
        }

    })
}

newQuote()
const kanyeWisdom = document.getElementById("yeezy")
kanyeWisdom.addEventListener("click", newQuote)



/*function displayWisdom(quote) {
    const words = document.getElementById('words')

    const kanyeWords = document.createElement('div')

    kanyeWords.innerText = quote

    words.appendChild(kanyeWords)
}*/






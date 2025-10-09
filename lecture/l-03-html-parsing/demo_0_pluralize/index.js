async function pluralizeWord(){
    let inputWord = document.getElementById("wordInput").value
    let response = await fetch("api/pluralize?word=" + inputWord)
    let resultText = await response.text()

    document.getElementById("results").innerHTML = resultText
}

async function findImgTags() {
    let inputWord = document.getElementById("wordInput").value
    let response = await fetch("api/find-img-tags?link=" + inputWord)
    let resultText = await response.text()

    document.getElementById("results").innerHTML = resultText
}
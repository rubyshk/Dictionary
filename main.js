//https://wordsapiv1.p.mashape.com/words/example

let input=document.querySelector('input')
let form=document.querySelector('form')
let word=document.querySelector('h1')
let meaning=document.querySelector('#example')
let example=document.querySelector('h6')
let span=document.querySelector('span')
let card=document.querySelector('.result')


const getD=async(e)=>{
    e.preventDefault()
    let response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    let data=await response.json()
    try {
        card.innerHTML= `<h1>${input.value}</h1>
        <div class="para">
            <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
        </div>

        <p id="example">${data[0].meanings[0].definitions[0].definition}</p>
        <h6>${data[0].meanings[0].definitions[0].example || ""} </h6>`
        
    console.log(data)
    } catch (error) {
        console.log('something went wrong')
    }
    form.reset()
}
form.addEventListener('submit',getD)

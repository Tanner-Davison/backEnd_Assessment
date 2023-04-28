const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")

const characterContainer = document.getElementById('characters-container') // Character Container
const form = document.getElementById('formid')

const baseURL = "http://localhost:4000/api/characters"

const charactersCallback = ({data: characters}) => displayCharacters(characters) 
const errCallback = err => console.log(err)

const getAllCharacters = () => axios.get(baseURL).then(charactersCallback).catch(errCallback)
const createCharacter = body => axios.post(baseURL, body).then(charactersCallback).catch(errCallback)
const deleteCharacter = id => axios.delete(`${baseURL}/${id}`).then(charactersCallback).catch(errCallback)
const updateCharacter = (id,type) => axios.put(`${baseURL}/${id}`,{type}).then(charactersCallback).catch(errCallback)

function submitHandler(e) {
     e.preventDefault()
    
     let zodiacSign = document.querySelector('#signs')
     let charQuote = document.querySelector('#charQuote')
     let charName = document.querySelector('#charName')
     let imageURL = document.querySelector('#img')

     let bodyObj = {
        zodiacSign: zodiacSign.value,
        charName: charName.value,
        charQuote: charQuote.value,
        imageURL: imageURL.value
      };
      console.log(charName)
     createCharacter(bodyObj)

     zodiacSign.value=''
     charName.value=''
     charQuote.value=''
     imageURL.value=''
     
}
function createCharacterCard(character){
    const characterCard = document.createElement('div')
    characterCard.classList.add('character-card')

    characterCard.innerHTML = 
    `
    <p class="characterCardNameBlock">${character.charName}</p>
    <p class="characterCardNameBlockTwo">Zodiac Sign: ${character.zodiacSign}<br> 
    
    <div class="BtnTraitsContainer">
    <button onclick="updateCharacter(${character.id}, 'updatetrait')">New Quote </button>
    <button onclick="deleteCharacter(${character.id},)">Delete</button>
    </div>
    <img alt='character cover image' src=${character.imageURL} class="character-cover-image"/>
    
    <p class ='pQuote'>Favorite Quote: <strong class='pQuoteTwo'>${character.charQuote}</strong></p>
    
    `
    
    characterContainer.appendChild(characterCard)
}

function displayCharacters(arr) {
    characterContainer.innerHTML =''
    for (let i=0; i < arr.length; i++){
        createCharacterCard(arr[i])
    }
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = ()=>{
    axios.get("http://localhost:4000/api/fortune/")
    .then(res=>{
        const fortuneData = res.data;
        alert(fortuneData)
    })
}



form.addEventListener('submit', submitHandler)
getAllCharacters()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)



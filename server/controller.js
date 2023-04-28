const characters = require('./db.json')
let id =2
module.exports = {
    getCharacters:(req,res)=> {
        res.status(200).send(characters)
    },
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune:(req,res) => {
        const fortunes = ["A lifetime friend shall soon be made.","A pleasant surprise is waiting for you.","All your hard work will soon pay off.","Courtesy begins in the home.","Don’t let the past and useless detail choke your existence.","You will probably Die Soon lol","Fearless courage is the foundation of victory.","How many of you believe in psycho-kinesis? Raise my hand.","Soon life will become more interesting.","The small courtesies sweeten life, the greater ennoble it.","You are generous to an extreme and always think of the other fellow.","You make people realize that there exist other beauties in the world."]
        //choose random fortune
        let randomFortuneIndex= Math.floor(Math.random()* fortunes.length)
        let randomFortune = fortunes[randomFortuneIndex]

        res.status(200).send(randomFortune)
    },
    createCharacter: (req,res) => {
        const {zodiacSign, charName, charQuote, imageURL} = req.body
        const newCharacter = {
            id,
            zodiacSign,
            charName,
            charQuote,
            imageURL
        }
        console.log(newCharacter.id)
        characters.push(newCharacter)
        res.status(200).send(characters)
       id++
    },
    updateCharacter:(req,res)=> {
        const {type}=req.body;
        const {id}=req.params;
        const index = characters.findIndex((c)=> c.id === +id)
        console.log(index)
        if(type === 'updatetrait'){
            let quoteArr = ['Be yourself; everyone else is already taken.','True friends stab you in the front.','Women are made to be Loved, not understood.','If we did all the things we are capable of, we would literally astound ourselves.','If youre going through hell, keep going.','We make a living by what we get, but we make a life by what we give.','Its so easy to be wicked without knowing it, isnt it?','Start by doing whats necessary; then do whats possible; and suddenly you are doing the impossible.']
            let randIndex = Math.floor(Math.random()* quoteArr.length)
            let randomQuotes= quoteArr[randIndex]
            characters[index].charQuote = `${randomQuotes}`
            return res.status(200).send(characters)
        }else{
            return (console.log('error'))
    }
    },
    deleteCharacter:(req,res)=>{
        const {id}= req.params
        let itemToDelete =characters.findIndex((c)=> c.id === +id)
            characters.splice(itemToDelete,1)
            id-1
            res.status(200).send(characters)
            if(itemToDelete<characters.length-1){
                characters.forEach((char)=> {
                    char.id>itemToDelete? char.id-1: +id-1
                })
                
            }
        }
}



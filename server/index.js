

const express = require("express");
const cors = require("cors");
const app = express();

/////middleWare//////////////////////////////////////
app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getCharacters, createCharacter,updateCharacter,deleteCharacter } = require('./controller')
/////////////////////////////////////////////////////////

// endpoints
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)

app.get('/api/characters/', getCharacters)
app.post('/api/characters/', createCharacter)
app.put('/api/characters/:id', updateCharacter)
app.delete('/api/characters/:id',deleteCharacter)
/////////////////////////////////////////////////////////////
app.listen(4001, () => console.log("Server running on 4000"));

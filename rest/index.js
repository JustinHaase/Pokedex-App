const express = require('express')
const axios = require ('axios')
const cors = require("cors")
const app = express()
const port = 4000

app.use('/pokemon', express.static('web'))
app.use(cors())
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
//app.get('/pokemon/random', async (req, res) => {
//let xhr = new XMLHttpRequest();

app.get('/', async (req, res) => {
let pokemonResponse = axios.get("https://pokeapi.co/api/v2/pokemon")
  let pokemonJson = await pokemonResponse.data;
 
  //https://dog.ceo/api/breeds/image/random
//https://pokeapi.co/api/v2/pokemon/ditto
  console.log(pokemonJson);
  res.send("Pokemon!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

xhr.open("GET","http://localhost:4000" )

//xhr.open("GET","localhost:4000/pokemon/random" )
xhr.send();
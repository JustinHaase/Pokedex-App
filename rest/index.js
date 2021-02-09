const express = require('express')
const axios = require ('axios')
const cors = require("cors")
const app = express()
const port = 4000

app.use(cors())

app.get('/pokemon/random', async (req, res) => {
let pokemonResponse = axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  let pokemonJson = await PokemonResponse.json();

  console.log(pokemonJson)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

xhr.open("GET","localhost:4000/pokemon/random" )
xhr.send();
const express = require('express')
const axios = require ('axios')
const cors = require("cors")
const app = express()
const port = 4000

app.use(cors())

//app.use('/pokemon', express.static('web'))

// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



app.get('/pokemon/random', async (req, res) => {
let pokemonResponse = await axios.get("https://pokeapi.co/api/v2/pokemon/1-25");

//not working as an object on the web side. Getting a string   
 /*let createPoke = {
   id: pokemonResponse.data.id,
   name: pokemonResponse.data.name,
   image: pokemonResponse.data.sprites.front_default
 }
 */
    //console.log(pokemonResponse.data.message)
        //res.send(pokemonResponse.data.message)
        //.sprites.front_default
  
       res.send(pokemonResponse.data.sprites.front_default)
      //res.send(createPoke)
      //console.log(typeof(createPoke))
       //res.send(pokemonResponse.data)
     })



app.listen(port, () => {
  console.log(`Poke app listening at http://localhost: ${port}`)
})








/*
app.get('/pokemon/random', async (req, res) => {
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

*/
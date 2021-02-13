const express = require('express')
//const axios = require ('axios')
const cors = require("cors")
const app = express()
const port = 4000

app.use(cors())

const fetch = require("node-fetch");

const promises = [];

app.get('/pokemon/random', (req, res) => {
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemonResponse = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        
        res.send(pokemonResponse);
    });
});

//app.use('/pokemon', express.static('web'))

// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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


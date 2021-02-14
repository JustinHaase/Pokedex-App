//All front end JavaScript should go here

//on scroll sticky header function
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange =  function () {
  if ((this.readyState === 4) & (this.status === 200)) {
           
    let myObject =  JSON.parse(this.responseText);
    for(let i = 0; i<12 ; i++){
        document.getElementsByTagName("img")[i+2].src = myObject[i].image;
    }
    
    for(let i = 0; i<13 ; i++){
    document.querySelector(`#pname${i+1}`).textContent = `Name: ${myObject[i].name} Id number:${myObject[i].id}`;
    document.querySelector(`#ptype${i+1}`).textContent = `Type: ${myObject[i].type}`;
  
    }   
     
  
  }
};
xhr.open("GET", "http://localhost:4000/pokemon/random");
xhr.send();

$('pokecard').has('div.grass').css('background-color', 'green');

//create dynamic styling effect in each card based on data pulled from api

//if type = 

//document.getElementById("ptype").style["padding-top"] = "10px";
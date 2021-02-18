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


const colorMap= {'fire':'type__fire', 'grass':'type__grass', 'water':'type__water'};
const colorMapHex = {'fire':'#FDDFDF', 'grass':'#DEFDE0', 'electric':'#FCF7DE', 'water':'#DEF3FD','ground':'#f7d3aa','rock':'D5D5D4','fairy':'#FCEAFF','poison':'#98D7A5','bug':'#F8D7A5','dragon':'#97B3E6', 'psychic':'#EAEDA1', 'flying':'#dbb2f7', 'fighting':'#E6E0D4', 'normal':'#F5F5F5'};

//  const types = [];
//  const element;
//  element.style.background = `Linear gradient: ${types.map( type => colorMapHex[type]).join(" ")}`

//button click music play function
// function playMusic(){
//   var music = new Audio('Theme.mid');
//   music.play();
//   }

var music = document.getElementById('music');

function playAudio() {
	if (music.paused){
		music.play();
		pButton.className = "";
		pButton.className = "pause";
	} else {
		music.pause();
		pButton.className = "";
		pButton.className = "play";
	}
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange =  function () {
  if ((this.readyState === 4) & (this.status === 200)) {
           
    let myObject =  JSON.parse(this.responseText);
    for(let i = 0; i<12 ; i++){

        document.getElementsByTagName("img")[i+2].src = myObject[i].image;
    }
    
    for(let i = 0; i<12 ; i++){
    document.querySelector(`#pname${i+1}`).textContent = `${myObject[i].name} id:${myObject[i].id}`;
    document.querySelector(`#ptype${i+1}`).textContent = `${myObject[i].type}`;
    document.querySelectorAll('.pokecard')[i].classList.add(colorMap[myObject[i].type])
    }   
     
  
  }
};
xhr.open("GET", "http://localhost:4000/pokemon/random");
xhr.send();

//create dynamic styling effect in each card based on data pulled from api

// const type = myObject[i].type;
// const classToAddToPokemon = colorMap[type];
// document.querySelector(
//         `#ptype${i + 1}`
//       ).classList.add(classToAddToPokemon);

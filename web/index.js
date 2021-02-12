//All front end JavaScript should go here

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){

if(this.readyState === 4 & this.status === 200){
    document.getElementsByTagName("img")[0].src = this.responseText;
    document.getElementsByTagName("img")[2].src = this.responseText;
    //document.querySelector(".pokecard").textContent = `${this.responseText[0]}`
    //`${typeof(this.responseText)}`;
    //console.log(this.responseText.image)
}


}
xhr.open('GET', 'http://localhost:4000/pokemon/random');
xhr.send();